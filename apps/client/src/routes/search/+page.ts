import type { PageLoad } from './$types';
import { getTrending } from '$lib/shows';

export const load = (async () => {
	console.log('fetching trending');
	const trending = await getTrending();
	console.log(trending);
	return {
		trending
	};
}) satisfies PageLoad;
