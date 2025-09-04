import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getUser } from '$lib/server/api';

export const GET: RequestHandler = async ({ locals: { user: sbUser }, url }) => {
	const includedParams = {
		includeStats: url.searchParams.get('includeStats') === 'true',
		includePrefs: url.searchParams.get('includePreferences') === 'true'
	};

	const user = await getUser(includedParams, sbUser);

	return json(user);
};
