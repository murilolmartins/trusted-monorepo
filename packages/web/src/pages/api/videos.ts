// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { UsersApiResponse } from '@interfaces';

import users from 'db/users.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersApiResponse>
) {
  res.status(200).send(users);
}
