import logger from '../../../utils/logger';

import fs from 'node:fs';

export function getTxtDocumentsNames(path: string) {
  try {
    const files = fs.readdirSync(path);

    const txtFiles = files.filter((file) => file.endsWith('.txt'));

    return txtFiles;
  } catch (err) {
    logger.error('Erro ao procurar por documentos:', err);

    throw err;
  }
}
