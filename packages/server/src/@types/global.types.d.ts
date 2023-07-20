import { type User, type PrismaClient } from '@prisma/client';

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>;
  }
  interface FastifyRequest {
    prisma: PrismaClient;
    jwt: JWT;
    authUser: User | null;
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    id: string;
  }
}
