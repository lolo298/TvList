import { PrismaClient } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

export const GET = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? '/';

	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			const prisma = new PrismaClient();
			const {
				data: { user }
			} = await supabase.auth.getUser();

            if (!user) {
                console.error('No user found after exchanging code for session');
                throw redirect(303, '/auth?error=no_user_found');
            }

			await prisma.user.upsert({
				where: { id: user?.id },
                update: {
                    profilePicture: user.user_metadata?.avatar_url ?? '',
                    username: user.user_metadata?.name ?? '',
                },
				create: {
					id: user.id,
					username: user.user_metadata?.name ?? '',
                    profilePicture: user.user_metadata?.avatar_url ?? '',
                    stats: {
                        create: {
                            followed: 0,
                            loved: 0,
                            moviesWatched: 0,
                            moviesWatchTime: 0,
                            seriesWatched: 0,
                            seriesWatchTime: 0,
                        }
                    },
                    preferences: {
                        create: {}
                    }
				}
			});

			throw redirect(303, `/${next.slice(1)}`);
		}
	}

	// return the user to an error page with instructions
	throw redirect(303, '/auth?error=invalid_code');
};
