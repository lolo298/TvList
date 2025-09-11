// import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr';
// import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
// import type { LayoutLoad } from './$types';
// import type { User } from '$lib/types/api';
// import { getUser } from '$lib/api';

export const prerender = true;
export const ssr = false;

import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { authClient } from '$lib/auth';
const unprotectedRoutes = ['/auth', '/auth/login', '/search'];

export const load: LayoutLoad = async (event) => {
	const session = await authClient.getSession();
	const isLoggedIn = !!session.data;

	const isUnprotectedRoute = unprotectedRoutes.some((route) =>
		event.url.pathname.startsWith(route)
	);

	if (!isUnprotectedRoute && !isLoggedIn) {
		console.log('User not logged in, redirecting to /auth');
		throw redirect(302, '/auth');
	}

	console.log('Layout load session:', session);

	return {
		session: session.data?.session || null,
		user: session.data?.user || null
	};
};

// export const load: LayoutLoad = async ({ data, depends, fetch }) => {
// 	/**
// 	 * Declare a dependency so the layout can be invalidated, for example, on
// 	 * session refresh.
// 	 */
// 	depends('supabase:auth');

// 	const supabase = isBrowser()
// 		? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
// 				global: {
// 					fetch
// 				}
// 			})
// 		: createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
// 				global: {
// 					fetch
// 				},
// 				cookies: {
// 					getAll() {
// 						return data.cookies;
// 					}
// 				}
// 			});

// 	/**
// 	 * It's fine to use `getSession` here, because on the client, `getSession` is
// 	 * safe, and on the server, it reads `session` from the `LayoutData`, which
// 	 * safely checked the session using `safeGetSession`.
// 	 */
// 	const {
// 		data: { session }
// 	} = await supabase.auth.getSession();

// 	const user = await getUser({ includeStats: true, includePrefs: true });

// 	return { session, supabase, user, prefs: data.prefs };
// };
