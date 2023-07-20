import { AxiosError } from "axios";
import { gitHubApi } from "../connection/gitHubApi";

export async function getUserDataFromGitHub(usuario: string) {

    const url = `users/${usuario.trim()}`;

    try {

      const resposta = await gitHubApi.get(url);

      console.log(`Usuário "${usuario}" encontrado no GitHub!`);

      return resposta.data;

    } catch (err) {


      if (err instanceof AxiosError && err.response && err.response.status === 404) {

        console.log(`Usuário "${usuario}" não encontrado no GitHub.`);

      } else {

        console.error(`Erro ao consultar usuário "${usuario}":`, err);

      }
    }
  }