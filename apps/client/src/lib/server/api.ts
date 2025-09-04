import { supabase } from '$lib/supabase';
import type { GetUserResponse } from '$lib/types/api';
import { PrismaClient } from '@prisma/client';
import type { User } from '@supabase/supabase-js';

export async function getUser<T extends boolean, U extends boolean>(
	includedParams: {
		includeStats: T;
		includePrefs: U;
	},
	sbUser?: User | null
): Promise<GetUserResponse<T, U> | null> {
	if (!sbUser) {
		return null;
	}

	const prisma = new PrismaClient();
	const dbUser = await prisma.user.findUnique({
		where: { id: sbUser.id },
		include: {
			stats: includedParams.includeStats,
			preferences: includedParams.includePrefs
		}
	});

	const user = {
		...dbUser,
		metadata: sbUser
	};

	return user as GetUserResponse<T, U> | null;
}
