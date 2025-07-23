import type { PageServerLoad } from './$types';
import { getTrending } from '$lib/server/tmdb';

export const load = (async () => {
    const trending = await getTrending();


    


    return {
        trending
    };
}) satisfies PageServerLoad;