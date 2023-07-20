import { UserEntity } from '../../domain/entities';
import { UserErrors } from '../../domain/enums';
import type { UserRepository } from '../repositories';

import { AppSuccess, type FastifyResponse } from '@/core';
import { AppError } from '@/core/errors/app.error';
import { left, right } from '@/core/errors/either.error';
import { StatusCodes } from 'http-status-codes';

export class GetUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(): Promise<FastifyResponse<UserEntity[]>> {
    const users = await this.repository.findAll();

    if (!users) {
      return left(
        new AppError(StatusCodes.INTERNAL_SERVER_ERROR, [
          {
            message: 'Error getting users',
            code: UserErrors.ERROR_GETTING_USERS
          }
        ])
      );
    }

    return right(new AppSuccess(StatusCodes.OK, users));
  }
}
