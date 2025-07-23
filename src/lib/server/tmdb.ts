import { TMDB_API_KEY } from '$env/static/private';
import { PrismaClient, type Show, Image_Type, Prisma } from '@prisma/client';
import type { MovieDetail, SerieDetail, SeasonDetail } from '$lib/types/tmdb';

const prisma = new PrismaClient();

const fetch = function (input: RequestInfo, init?: RequestInit | undefined): Promise<Response> {
	const headers = new Headers(init?.headers);
	headers.set('Authorization', `Bearer ${TMDB_API_KEY}`);

	return globalThis.fetch(input, { ...init, headers });
};

type MovieWithImages = Prisma.ShowGetPayload<{
	where: {
		tmdbId: number;
		type: 'MOVIE';
	};
	include: {
		images: true;
	};
}>;

export async function getMovie(id: number): Promise<MovieWithImages> {
	// const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`);
	// return await response.json();

	let bddResult = await prisma.show.findFirst({
		where: {
			tmdbId: id,
			type: 'MOVIE'
		},
		include: {
			images: true
		}
	});
	// Movie found in the database
	if (bddResult) {
		console.log(`Movie with ID ${id} found in the database.`);
		return bddResult;
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
		}
	});
	return await prisma.show.findUnique({
		where: {
			id: res.id
		},
		include: {
			images: true
		}
	}) as MovieWithImages;
}

type SerieWithSeason = Prisma.ShowGetPayload<{
	where: {
		tmdbId: number;
		type: 'SERIES';
	};
	include: {
		seasons: true;
		images: true;
	};
}>;
export async function getSerie(id: number): Promise<SerieWithSeason> {
	// const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`);
	// return await response.json();

	let bddResult = await prisma.show.findUnique({
		where: {
			tmdbId: id,
			type: 'SERIES'
		},
		include: {
			seasons: true,
			images: true
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

	const images: {
		url: string;
		type: Image_Type;
		tmdbId?: number;
		targetType?: 'SHOW' | 'SEASON' | 'EPISODE';
	}[] = [];

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

			// Add the season poster to the images array
			if (seasonData.poster_path) {
				images.push({
					url: seasonData.poster_path,
					type: Image_Type.POSTER,
					targetType: 'SEASON',
					tmdbId: seasonData.id
				});
			}

			// Add the episodes stills to the images array
			seasonData.episodes.forEach((episode) => {
				if (episode.still_path) {
					images.push({
						url: episode.still_path,
						type: Image_Type.STILL,
						targetType: 'EPISODE',
						tmdbId: episode.id
					});
				}
			});

			return {
				number: season.season_number,
				updatedAt: new Date(),
				tmdbId: seasonData.id,
				episodes: {
					create: seasonData.episodes.map((episode) => ({
						tmdbId: episode.id,
						number: episode.episode_number,
						name: episode.name,
						duration: episode.runtime
					}))
				}
			};
		})
	);

	// Add the series poster and backdrop to the images array
	if (data.poster_path) {
		images.push({
			url: data.poster_path,
			type: Image_Type.POSTER,
			targetType: 'SHOW',
			tmdbId: data.id
		});
	}
	if (data.backdrop_path) {
		images.push({
			url: data.backdrop_path,
			type: Image_Type.BACKDROP,
			targetType: 'SHOW',
			tmdbId: data.id
		});
	}

	// Add the movie to the database
	const res = await prisma.show.create({
		data: {
			tmdbId: data.id,
			adult: data.adult,
			name: data.name,
			type: 'SERIES',
			popularity: data.popularity,
			seasons: {
				create: seasonsCreate
			}
		}
	});

	//add the images to the database
	for (const image of images) {
		if (image.targetType === 'SHOW') {
			await prisma.tMDBImage.create({
				data: {
					type: image.type,
					url: image.url,
					show: {
						connect: {
							id: res.id
						}
					}
				}
			});
		}

		if (image.targetType === 'SEASON') {
			await prisma.tMDBImage.create({
				data: {
					type: image.type,
					url: image.url,
					season: {
						connect: {
							tmdbId: image.tmdbId
						}
					}
				}
			});
		}

		if (image.targetType === 'EPISODE') {
			await prisma.tMDBImage.create({
				data: {
					type: image.type,
					url: image.url,
					episode: {
						connect: {
							tmdbId: image.tmdbId
						}
					}
				}
			});
		}
	}

	return await prisma.show.findUnique({
		where: {
			id: res.id
		},
		include: {
			seasons: true,
			images: true
		}
	}) as SerieWithSeason;
}

export async function getTrending(offset: number = 1): Promise<(MovieWithImages | SerieWithSeason)[]> {
	if (offset > 500) {
		throw new Error('Offset must be between 1 and 500');
	}
	const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?page=${offset}`);
	if (!response.ok) {
		throw new Error(`Error fetching trending: ${response.statusText}`);
	}
	const data = await response.json();
	const shows: Promise<MovieWithImages | SerieWithSeason>[] = [];

	for (const item of data.results) {
		if (item.media_type === 'movie') {
			const movie = getMovie(item.id);
			shows.push(movie);
		} else if (item.media_type === 'tv') {
			const serie = getSerie(item.id);
			shows.push(serie);
		}
	}
	return Promise.all(shows);
}
