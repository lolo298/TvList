import { TMDB_API_KEY } from '$env/static/private';
import { PrismaClient, type Show } from '@prisma/client';
import type { MovieDetail, SerieDetail, SeasonDetail } from '$lib/types/api';

const prisma = new PrismaClient();

const fetch = function (input: RequestInfo, init?: RequestInit | undefined): Promise<Response> {
	const headers = new Headers(init?.headers);
	headers.set('Authorization', `Bearer ${TMDB_API_KEY}`);

	return globalThis.fetch(input, { ...init, headers });
};

export async function getMovie(id: number) {
	// const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`);
	// return await response.json();

	let bddResult = await prisma.show.findFirst({
		where: {
			tmdbId: id,
			type: 'MOVIE'
		}
	});
	// Movie found in the database
	if (bddResult) {
		console.log(`Movie with ID ${id} found in the database.`);
		return bddResult as Show;
	}
	console.log(`Movie with ID ${id} not found in the database. Fetching from TMDB...`);

	// Movie not found in the database, fetch from TMDB
	const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`);
	if (!response.ok) {
		throw new Error(`Error fetching movie with ID ${id}: ${response.statusText}`);
	}
	const data: MovieDetail = await response.json();
	// Add the movie to the database
	const res = await prisma.show.create({
		data: {
			tmdbId: data.id,
			adult: data.adult,
			name: data.title,
			type: 'MOVIE',
			popularity: data.popularity,
			cover: data.poster_path
		}
	});
	return res as Show;
}
export async function getSerie(id: number) {
	// const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`);
	// return await response.json();

	let bddResult = await prisma.show.findFirst({
		where: {
			tmdbId: id,
			type: 'SERIES'
		},
		include: {
			seasons: true
		}
	});
	// Movie found in the database
	if (bddResult) {
		return bddResult;
	}

	// Movie not found in the database, fetch from TMDB
	const response = await fetch(`https://api.themoviedb.org/3/tv/${id}`);
	if (!response.ok) {
		throw new Error(`Error fetching serie with ID ${id}: ${response.statusText}`);
	}
	const data: SerieDetail = await response.json();

	const seasonsCreate = await Promise.all(
		data.seasons.map(async (season) => {
			const seasonResponse = await fetch(
				`https://api.themoviedb.org/3/tv/${id}/season/${season.season_number}`
			);
			if (!seasonResponse.ok) {
				throw new Error(
					`Error fetching season ${season.season_number} for serie with ID ${id}: ${seasonResponse.statusText}`
				);
			}
			const seasonData: SeasonDetail = await seasonResponse.json();

			return {
				number: season.season_number,
				updatedAt: new Date(),
				tmdbId: seasonData.id,
				episodes: {
					create: seasonData.episodes.map((episode) => ({
						tmdbId: episode.id,
						number: episode.episode_number,
						name: episode.name,
						cover: episode.still_path,
						duration: episode.runtime
					}))
				}
			};
		})
	);

	// Add the movie to the database
	const res = await prisma.show.create({
		data: {
			tmdbId: data.id,
			adult: data.adult,
			name: data.name,
			type: 'SERIES',
			popularity: data.popularity,
			cover: data.poster_path,
			seasons: {
				create: seasonsCreate
			}
		}
	});
	return res as Show;
}
