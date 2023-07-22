import { USERS_JSON_PATH } from '../constants';
import type { IUserJsonFile } from '../interfaces/user';
import logger from '../utils/logger';

import fs from 'node:fs';

export const saveUsersOnJsonFile = async (users: IUserJsonFile) => {
  try {
    const jsonData = JSON.stringify(users, null, 2);

    fs.writeFileSync(USERS_JSON_PATH, jsonData);
  } catch (error) {
    logger.error('Erro ao salvar o arquivo JSON:', error);

    throw error;
  }
};
