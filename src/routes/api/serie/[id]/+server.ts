import { getSerie } from '$lib/tmdb';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params: { id } }) => {
    const data = await getSerie(Number(id));

    return json(data);
};
