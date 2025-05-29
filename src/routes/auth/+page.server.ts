import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';
import type { Provider } from '@supabase/supabase-js';

export const actions: Actions = {
	login: async ({ request, url, locals: { supabase } }) => {
		const formData = await request.formData();
		const submitType = formData.get('submit') as Provider;

		const { error, data } = await supabase.auth.signInWithOAuth({
			provider: submitType,
			options: {
				redirectTo: `${url.origin}/auth/callback`
			}
		});

		redirect(303, data.url ?? '/auth/error');
	}
};
