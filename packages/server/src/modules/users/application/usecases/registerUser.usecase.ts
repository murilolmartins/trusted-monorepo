import { UserErrors } from '../../domain/enums';
import type { RegisterUserType } from '../../domain/schemas/registerUser.schema';
import type { UserRepository } from '../repositories';

import { AppSuccess, type FastifyResponse } from '@/core';
import { AppError } from '@/core/errors/app.error';
import { left, right } from '@/core/errors/either.error';
import { StatusCodes } from 'http-status-codes';

export class RegisterUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(
    userData: RegisterUserType
  ): Promise<FastifyResponse<{ message: string }>> {
    const registerUser = await this.repository.register(userData.users);

    if (!registerUser) {
      return left(
        new AppError(StatusCodes.INTERNAL_SERVER_ERROR, [
          {
            message: 'Error registering user',
            code: UserErrors.ERROR_REGISTERING_USER
          }
        ])
      );
    }

    return right(new AppSuccess(StatusCodes.OK, registerUser!));
  }
}
