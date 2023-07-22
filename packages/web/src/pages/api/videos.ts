// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import type { GetUsersApiResponse } from '@interfaces';

import users from 'db/users.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetUsersApiResponse>
) {
  res.status(200).send(users);
}
