import { PrismaClient } from "../generated/client";
declare const extendedPrisma: PrismaClient<import("../generated/client").Prisma.PrismaClientOptions, never, import("../generated/client/runtime/library").DefaultArgs>;
type ExtendedPrismaClient = typeof extendedPrisma;
export declare const prisma: ExtendedPrismaClient;
export {};
