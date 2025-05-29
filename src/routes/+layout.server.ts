import { getUser } from '$lib/server/api';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({
	locals: { safeGetSession, user: sbUser },
	cookies
}) => {
	const { session } = await safeGetSession();
	const user = await getUser({ includeStats: false, includePrefs: true }, sbUser);
	return {
		session,
		cookies: cookies.getAll(),
		prefs: user?.preferences ?? {
			defaultPage: 'SEARCH',
			gridView: true,
			toWatch: true
		}
	};
};
