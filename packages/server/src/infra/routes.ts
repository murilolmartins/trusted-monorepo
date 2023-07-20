import userRoutes from '@/modules/users/infra/routes';

import type { FastifyInstance } from 'fastify';

const AppRoutes = async (app: FastifyInstance): Promise<void> => {
  await app.register(userRoutes, { prefix: '/users' });
};

export { AppRoutes };
