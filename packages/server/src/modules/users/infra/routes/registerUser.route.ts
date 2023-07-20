import {
  type RegisterUserType,
  registerUserSchema
} from '../../domain/schemas';
import { registerUserController } from '../controllers';

import { type FastifyResponse } from '@/core';
import {
  type FastifyRequest,
  type FastifyInstance,
  type FastifyReply
} from 'fastify';
import { type ZodTypeProvider } from 'fastify-type-provider-zod';

export type RegisterUserResponse = { message: string };

export const registerUserRoute = (app: FastifyInstance): void => {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/',
    schema: {
      body: registerUserSchema
    },
    handler: async (
      request: FastifyRequest<{ Body: RegisterUserType }>,
      reply: FastifyReply
    ): Promise<FastifyResponse<RegisterUserResponse>> =>
      registerUserController(request, reply)
  });
};
