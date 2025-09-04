"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("../generated/client");
const extendedPrisma = new client_1.PrismaClient();
const globalForPrisma = globalThis;
exports.prisma = globalForPrisma.prisma ?? extendedPrisma;
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = exports.prisma;
}
//# sourceMappingURL=client.js.map