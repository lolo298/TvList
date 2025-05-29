import type { User as u, Stats } from "@prisma/client";
import type { User as su } from "@supabase/supabase-js";

export type User = u & {
    metadata: su;
    stats: Stats;
};