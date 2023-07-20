import { buildApp } from './app';
import { envVars } from './env';

async function start(): Promise<void> {
  const app = await buildApp();
  app.listen({ port: envVars.API_PORT, host: '0.0.0.0' }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  });
}

start().catch(async () => {
  process.exit(1);
});
