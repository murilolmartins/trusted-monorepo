import { UserErrors } from '../../domain/enums';
import type { RegisterUsersType } from '../../domain/schemas/registerUsers.schema';
import type { UserRepository } from '../repositories';

import { AppSuccess, type FastifyResponse } from '@/core';
import { AppError } from '@/core/errors/app.error';
import { left, right } from '@/core/errors/either.error';
import { StatusCodes } from 'http-status-codes';

export class RegisterUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(
    userData: RegisterUsersType
  ): Promise<FastifyResponse<{ message: string }>> {
    const registerUsers = await this.repository.register(userData.users);

    if (!registerUsers) {
      return left(
        new AppError(StatusCodes.INTERNAL_SERVER_ERROR, [
          {
            message: 'Error registering user',
            code: UserErrors.ERROR_REGISTERING_USER
          }
        ])
      );
    }

    return right(new AppSuccess(StatusCodes.OK, registerUsers!));
  }
}
