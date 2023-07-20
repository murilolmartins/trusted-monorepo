import { registerUserRoute } from './registerUser.route';

import type { FastifyInstance, FastifyPluginAsync } from 'fastify';

const userRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  registerUserRoute(app);
};

export default userRoutes;
