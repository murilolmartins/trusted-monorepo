import { USERS_JSON_PATH } from '../constants';
import type { IGitHubUser } from '../interfaces/gitHub';
import type { IUserJsonFile } from '../interfaces/user';
import { readJsonFile } from './readJsonFile';
import { saveUsersOnJsonFile } from './saveUsersOnJsonFile';

export function addUsersToJson(users: IGitHubUser[]) {
  const usersData = readJsonFile<IUserJsonFile>(USERS_JSON_PATH);

  const newUsersData = { users: [...usersData.users, ...users] };

  saveUsersOnJsonFile(newUsersData);
}
