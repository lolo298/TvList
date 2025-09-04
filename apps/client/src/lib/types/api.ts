import type { User as u, Stats, Preferences } from '@prisma/client';
import type { User as su } from '@supabase/supabase-js';

export type User = u & {
	metadata: su;
};
export type UserWithStats = User & {
	stats: Stats;
};
export type UserWithPreferences = User & {
	preferences: Preferences;
};
export type UserWithStatsAndPreferences = UserWithStats & {
	preferences: Preferences;
};

export type GetUserResponse<T extends boolean, U extends boolean> = T extends true
	? U extends true
		? UserWithStatsAndPreferences
		: UserWithStats
	: U extends true
		? UserWithPreferences
		: User;
