import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { customSession } from 'better-auth/plugins';
import { prisma } from 'database';
import 'dotenv/config'

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ['http://localhost:5173'],

  logger: {
    level: 'info',
    disabled: false,
    log: (level, message, meta) => {
      console.log(`[${level}] ${message}`, meta || '');
    }
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    }
  },

  plugins: [
    customSession(async ({ user, session }) => {
      const userData = await prisma.userData.findUnique({
        where: { userId: user.id },
        include: { preferences: true, stats: true, followedShows: {
          include: {
            images: true
          }
        } },
      });

      if (userData === null) {
        throw new Error('User data not found');
      }

      return {
        session,
        user: {
          ...user,
          userData,
        },
      };
    }),
  ],

  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await prisma.userData.create({
            data: {
              user: { connect: { id: user.id } },
              preferences: { create: {} },
              stats: { create: {} },
            },
          });
        },
      },
    },
  },
});
