import {
  type RegisterUsersType,
  registerUsersSchema
} from '../../domain/schemas';
import { registerUsersController } from '../controllers';

import { type FastifyResponse } from '@/core';
import {
  type FastifyRequest,
  type FastifyInstance,
  type FastifyReply
} from 'fastify';
import { type ZodTypeProvider } from 'fastify-type-provider-zod';

export type RegisterUsersResponse = { message: string };

export const registerUsersRoute = (app: FastifyInstance): void => {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/',
    schema: {
      body: registerUsersSchema
    },
    handler: async (
      request: FastifyRequest<{ Body: RegisterUsersType }>,
      reply: FastifyReply
    ): Promise<FastifyResponse<RegisterUsersResponse>> =>
      registerUsersController(request, reply)
  });
};
