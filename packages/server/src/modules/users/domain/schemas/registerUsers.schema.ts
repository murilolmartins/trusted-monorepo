import { z } from 'zod';

export const registerUsersSchema = z.object({
  users: z.array(z.string(), {
    required_error: 'Users is required',
    invalid_type_error: 'Users must be an array of strings'
  })
});

export type RegisterUsersType = z.infer<typeof registerUsersSchema>;
