import { RegisterUserUseCase } from '../../application/usecases';
import { type RegisterUserType } from '../../domain/schemas';
import { UserTxtRepository } from '../repositories';
import { type RegisterUserResponse } from '../routes/registerUser.route';

import { type FastifyResponse } from '@/core';
import { PROCESSABLE_DOCS_PATH } from '@/core/constants/docsPath';
import { type FastifyReply, type FastifyRequest } from 'fastify';

export const registerUserController = async (
  request: FastifyRequest<{ Body: RegisterUserType }>,
  reply: FastifyReply
): Promise<FastifyResponse<RegisterUserResponse>> => {
  const registerUserUseCase = new RegisterUserUseCase(
    new UserTxtRepository(PROCESSABLE_DOCS_PATH)
  );

  const registerUserReturn = await registerUserUseCase.execute(request.body);

  reply.statusCode = registerUserReturn.value.statusCode;

  return reply.send(registerUserReturn.value);
};
