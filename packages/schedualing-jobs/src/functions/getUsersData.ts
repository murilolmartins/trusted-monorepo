import { PROCESSABLE_DOCS_PATH } from '../constants';
import type { IGitHubUser } from '../interfaces/gitHub';
import logger from '../utils/logger';
import { addUsersToJson } from './addUserToJson';
import { getTxtDocumentLines } from './getTxtDocumentLines';
import { getTxtDocumentsNames } from './getTxtDocumentsNames';
import { getUserDataFromGitHub } from './getUserDataFromGitHub';
import { moveTxtDocumentToProcessed } from './moveTxtDocumentToProcessed';

import path from 'path';

export async function getUsersData() {
  try {
    const documentNames = getTxtDocumentsNames(PROCESSABLE_DOCS_PATH);

    const documentsLines = documentNames
      .map((documentName) => {
        const documentPath = path.resolve(PROCESSABLE_DOCS_PATH, documentName);

        const documentLines = getTxtDocumentLines(documentPath);

        return documentLines;
      })
      .flat(1);

    const responses = await Promise.all(
      documentsLines.map(getUserDataFromGitHub)
    );

    const users = responses.filter((response) => response !== null);

    addUsersToJson(users as IGitHubUser[]);

    documentNames.forEach((documentName) => {
      moveTxtDocumentToProcessed(documentName);
    });

    logger.info('Usuários buscados com sucesso.');
    logger.info('Lista de usuários atualizada com sucesso.');
  } catch (err) {
    logger.error('Erro ao processar os documentos:', err);

    throw err;
  }
}
