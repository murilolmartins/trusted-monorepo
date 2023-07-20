import { UserEntity } from '../../domain/entities';
import { getUsersController } from '../controllers/getUsers.controller';

import { type FastifyResponse } from '@/core';
import {
  type FastifyRequest,
  type FastifyInstance,
  type FastifyReply
} from 'fastify';
import { type ZodTypeProvider } from 'fastify-type-provider-zod';

export type GetUsersResponse = UserEntity[];

export const getUsersRoute = (app: FastifyInstance): void => {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/',
    handler: async (
      request: FastifyRequest,
      reply: FastifyReply
    ): Promise<FastifyResponse<GetUsersResponse>> =>
      getUsersController(request, reply)
  });
};
