import { GetUsersUseCase } from '../../application/usecases';
import { UserTxtRepository } from '../repositories';
import { type GetUsersResponse } from '../routes/getUsers.route';

import { type FastifyResponse } from '@/core';
import { DOCS_PATH } from '@/core/constants/docsPath';
import { type FastifyReply, type FastifyRequest } from 'fastify';

export const getUsersController = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<FastifyResponse<GetUsersResponse>> => {
  const getUserUseCase = new GetUsersUseCase(new UserTxtRepository(DOCS_PATH));

  const getUserReturn = await getUserUseCase.execute();

  reply.statusCode = getUserReturn.value.statusCode;

  return reply.send(getUserReturn.value);
};
