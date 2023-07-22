import type { UsersApiResponse } from '@interfaces';

import { connectionAPIGet } from '@utils';

export async function getUsers() {
  const { data } = await connectionAPIGet<UsersApiResponse>('/users');

  return data;
}
