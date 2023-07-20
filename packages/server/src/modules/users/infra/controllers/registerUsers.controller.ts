import { RegisterUsersUseCase } from '../../application/usecases';
import { type RegisterUsersType } from '../../domain/schemas';
import { UserTxtRepository } from '../repositories';
import { type RegisterUsersResponse } from '../routes/registerUsers.route';

import { type FastifyResponse } from '@/core';
import { DOCS_PATH } from '@/core/constants/docsPath';
import { type FastifyReply, type FastifyRequest } from 'fastify';

export const registerUsersController = async (
  request: FastifyRequest<{ Body: RegisterUsersType }>,
  reply: FastifyReply
): Promise<FastifyResponse<RegisterUsersResponse>> => {
  const registerUsersUseCase = new RegisterUsersUseCase(
    new UserTxtRepository(DOCS_PATH)
  );

  const registerUsersReturn = await registerUsersUseCase.execute(request.body);

  reply.statusCode = registerUsersReturn.value.statusCode;

  return reply.send(registerUsersReturn.value);
};
