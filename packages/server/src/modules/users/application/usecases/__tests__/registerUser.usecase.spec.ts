import { UserTxtRepository } from '@/modules/users/infra/repositories';

import type { UserRepository } from '../../repositories';
import { RegisterUserUseCase } from '../registerUser.usecase';

import timekepper from 'timekeeper';

let registerUserUseCase: RegisterUserUseCase;
let userRepository: UserRepository;

beforeAll(() => {
  timekepper.freeze(new Date('2023-07-03 00:00:00'));
});

beforeEach(() => {
  userRepository = new UserTxtRepository('./');
  registerUserUseCase = new RegisterUserUseCase(userRepository);
});

describe('RegisterUserUseCase', () => {
  it('should create a new user', async () => {
    const userData = { users: ['murilo', 'joao', 'maria'] };

    const registerUserReturn = await registerUserUseCase.execute(userData);

    expect(registerUserReturn.value.errors).toBe(null);
    expect(registerUserReturn.value.data).toHaveProperty('message');
  });
});
