import { buildApp } from '@/infra/app';
import { type FastifyInstance } from 'fastify';
import timekeeper from 'timekeeper';

let app: FastifyInstance;
const date = new Date('2023-07-03 00:00:00');
timekeeper.freeze(date);

beforeAll(async () => {
  app = await buildApp();
});

afterAll(async () => {
  await app.close();
});

describe('RegisterUsersRoute', () => {
  it('should create a new user', async () => {
    const users = { users: ['John Doe', 'Jane Doe'] };

    const response = await app.inject({
      method: 'POST',
      url: '/users',
      payload: users
    });

    expect(response.statusCode).toBe(200);
  });
});
