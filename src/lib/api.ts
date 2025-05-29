import type { Show } from "@prisma/client";
import { isBrowser } from '@supabase/ssr';
import type {
	User,
	UserWithPreferences,
	UserWithStats,
	UserWithStatsAndPreferences,
	GetUserResponse
} from './types/api';

export async function getSerie(id:number) : Promise<Show> {
    let res = await fetch(`/api/serie/${id}`);
    return await res.json();
}

export async function getUser<T extends boolean, U extends boolean>({
	includeStats,
	includePrefs
}: {
	includeStats: T;
	includePrefs: U;
}): Promise<GetUserResponse<T, U> | null> {
	console.log(isBrowser(), 'isBrowser check in getUser');
	if (isBrowser()) {
		//Build the URL with query parameters
		const url = new URL('/api/user', window.location.origin);
		url.searchParams.set('includeStats', String(includeStats));
		url.searchParams.set('includePreferences', String(includePrefs));

		const res = await fetch(url);
		const user = res.ok ? await res.json() : null;
		return user;
	}
	return null;
}

function userIncludesStats(
	user: User | UserWithStats | UserWithStatsAndPreferences
): user is UserWithStats | UserWithStatsAndPreferences {
	return 'stats' in user;
}
function userIncludesPreferences(
	user: User | UserWithPreferences | UserWithStatsAndPreferences
): user is UserWithPreferences | UserWithStatsAndPreferences {
	return 'preferences' in user;
}
