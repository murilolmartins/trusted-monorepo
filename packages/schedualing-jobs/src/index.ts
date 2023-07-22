import { processUsersFromTxtFiles } from './services/processUsersFromTxtFiles';
import logger from './utils/logger';

import schedule from 'node-schedule';

(() => {
  logger.info('Inicializando serviço de agendamento de tarefas.');

  logger.info('Buscando usuários pela primeira vez....');

  processUsersFromTxtFiles().catch(() => {
    process.exit(1);
  });

  const getUsersjob = schedule.scheduleJob('*/1 * * * *', () => {
    logger.info('Iniciando nova busca por novos usuários.');

    processUsersFromTxtFiles().catch(() => {
      getUsersjob.cancel();
      process.exit(1);
    });
  });
})();
