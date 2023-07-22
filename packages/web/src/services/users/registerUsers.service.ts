import type { PostUsersApiResponse } from '@interfaces';

import { connectionAPIPost } from '@utils';

export async function registerUsers(usersNames: string[]) {
  const { data } = await connectionAPIPost<
    PostUsersApiResponse,
    { users: string[] }
  >('/users', {
    users: usersNames
  });

  return data;
}
