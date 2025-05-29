import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';
import type { User } from '$lib/types/api';

export const GET: RequestHandler = async ({ locals: { user: sbUser } }) => {

    if (!sbUser) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }


	const prisma = new PrismaClient();
	const dbUser = await prisma.user.findUnique({
		where: { id: sbUser.id },
		include: { stats: true }
	});

	const user = {
		...dbUser,
		metadata: sbUser
	};


    
	return json(user);
};
