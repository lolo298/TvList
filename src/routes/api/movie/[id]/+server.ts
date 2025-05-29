import { getMovie } from '$lib/tmdb';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params: { id } }) => {
	const data = await getMovie(Number(id));

	return json(data);
};
