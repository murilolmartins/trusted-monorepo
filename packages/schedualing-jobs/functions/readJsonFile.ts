import logger from '../utils/logger';

import fs from 'fs';

export function readJsonFile<T>(path: string) {
  try {
    const data = fs.readFileSync(path).toString();

    return JSON.parse(data) as T;
  } catch (error) {
    logger.error('Erro ao ler o arquivo JSON:', error);
    throw error;
  }
}
