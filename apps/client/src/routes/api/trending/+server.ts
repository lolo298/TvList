import { getTrending } from '$lib/server/tmdb';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({request}) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    console.log('Fetching trending shows for page:', page);

    const trendings = await getTrending(page ? parseInt(page) : 1);

    return json(trendings);
};