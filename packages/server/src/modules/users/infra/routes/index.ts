import { getUsersRoute } from './getUsers.route';
import { registerUsersRoute } from './registerUsers.route';

import type { FastifyInstance, FastifyPluginAsync } from 'fastify';

const userRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  registerUsersRoute(app);
  getUsersRoute(app);
};

export default userRoutes;
