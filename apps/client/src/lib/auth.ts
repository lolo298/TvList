import { PUBLIC_AUTH_URL } from '$env/static/public';
import { customSessionClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/svelte';
import type { auth } from 'common';

export const authClient = createAuthClient({
	/** The base URL of the server (optional if you're using the same domain) */
	baseURL: PUBLIC_AUTH_URL,
	plugins: [customSessionClient<typeof auth>()]
});
