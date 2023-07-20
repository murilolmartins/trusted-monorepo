import { buildApp } from '../app';

import { type FastifyInstance } from 'fastify';

let app: FastifyInstance;

beforeAll(async () => {
  app = await buildApp();
});

afterAll(async () => {
  await app.close();
});

describe('App', () => {
  it('should request healthcheck route', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/healthcheck'
    });

    expect(response.statusCode).toBe(200);
  });
});
