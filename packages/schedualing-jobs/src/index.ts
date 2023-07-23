import { processUsersFromTxtFiles } from './services/processUsersFromTxtFiles';
import logger from './utils/logger';

import { AsyncTask, SimpleIntervalJob, ToadScheduler } from 'toad-scheduler';

(() => {
  logger.info('Inicializando serviço de agendamento de tarefas.');

  logger.info('Buscando usuários pela primeira vez....');

  processUsersFromTxtFiles().catch(() => {
    process.exit(1);
  });

  const scheduler = new ToadScheduler();

  const task = new AsyncTask(
    'processUsers',
    async () => {
      logger.info('Nova busca de usuários iniciada.');
      await processUsersFromTxtFiles();
    },
    () => {
      logger.info('Tarefa de busca de usuários finalizando.');
      scheduler.stop();
      process.exit(1);
    }
  );

  const job = new SimpleIntervalJob({ minutes: 1 }, task, {
    id: 'id_1',
    preventOverrun: true
  });

  scheduler.addSimpleIntervalJob(job);
})();
