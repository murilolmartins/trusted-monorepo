import { UserTxtRepository } from '@/modules/users/infra/repositories';

import type { UserRepository } from '../../repositories';
import { RegisterUsersUseCase } from '../registerUsers.usecase';

import { deleteMockDocsFolder } from '@test/utils';
import { clearProcessableFolder } from '@test/utils/clearProcessableFolder';
import { createMockDocsFolder } from '@test/utils/createMockDocsFolder';
import { MOCK_DOCS_PATH } from '@test/utils/docsPath';
import fs from 'node:fs';
import path from 'node:path';
import timekepper from 'timekeeper';

let registerUsersUseCase: RegisterUsersUseCase;
let userRepository: UserRepository;

beforeAll(() => {
  timekepper.freeze(new Date('2023-07-03 00:00:00'));
  createMockDocsFolder();
});

beforeEach(() => {
  userRepository = new UserTxtRepository(MOCK_DOCS_PATH);
  registerUsersUseCase = new RegisterUsersUseCase(userRepository);
  clearProcessableFolder();
});

afterAll(() => {
  deleteMockDocsFolder();
});

describe('RegisterUsersUseCase', () => {
  it('should register users', async () => {
    const userData = { users: ['murilo', 'joao', 'maria'] };

    const registerUsersReturn = await registerUsersUseCase.execute(userData);

    const files = fs.readdirSync(path.join(MOCK_DOCS_PATH, 'processable'));

    const txtFiles = files.filter((file: string) => file.endsWith('.txt'));

    const fileText = fs.readFileSync(
      path.join(MOCK_DOCS_PATH, 'processable', txtFiles[0])
    );

    const lines = fileText.toString().split('\n');

    expect(registerUsersReturn.value.errors).toBe(null);
    expect(registerUsersReturn.value.data).toHaveProperty('message');
    expect(registerUsersReturn.value.statusCode).toBe(200);
    expect(registerUsersReturn.isRight()).toBeTruthy();
    expect(txtFiles.length).toBe(1);
    expect(lines.length).toBe(3);
    expect(lines[0]).toBe('murilo');
    expect(lines[1]).toBe('joao');
    expect(lines[2]).toBe('maria');
  });
});
