import { gitHubApi } from '../connection/gitHubApi';
import { GitHubResponse, IGitHubUser } from '../interfaces/gitHub';
import logger from '../utils/logger';

import { AxiosError } from 'axios';

export async function getUserDataFromGitHub(
  usuario: string
): Promise<IGitHubUser | null> {
  const url = `users/${usuario.trim()}`;

  try {
    const resposta = await gitHubApi.get<GitHubResponse>(url);

    logger.info(`Usuário "${usuario}" encontrado no GitHub!`);

    return resposta.data;
  } catch (err) {
    if (
      err instanceof AxiosError &&
      err.response &&
      err.response.status === 404
    ) {
      logger.info(`Usuário "${usuario}" não encontrado no GitHub.`);
    } else {
      logger.error(`Erro ao consultar usuário "${usuario}":`, err);
    }

    return null;
  }
}
