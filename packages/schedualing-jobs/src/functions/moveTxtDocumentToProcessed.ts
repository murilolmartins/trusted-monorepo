import { PROCESSABLE_DOCS_PATH, PROCESSED_DOCS_PATH } from '../constants';
import logger from '../utils/logger';

import fs from 'node:fs';
import path from 'node:path';

export const moveTxtDocumentToProcessed = (fileName: string) => {
  try {
    fs.renameSync(
      path.resolve(PROCESSABLE_DOCS_PATH, fileName),
      path.resolve(PROCESSED_DOCS_PATH, fileName)
    );
  } catch (err) {
    logger.error('Erro ao mover documento para pasta de processados:', err);

    throw err;
  }
};
