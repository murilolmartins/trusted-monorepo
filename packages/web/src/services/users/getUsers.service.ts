import type { GetUsersApiResponse } from '@interfaces';

import { connectionAPIGet } from '@utils';

export async function getUsers() {
  const { data } = await connectionAPIGet<GetUsersApiResponse>('/users');

  return data;
}
