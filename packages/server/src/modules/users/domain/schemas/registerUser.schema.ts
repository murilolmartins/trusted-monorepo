import { z } from 'zod';

export const registerUserSchema = z.object({
  users: z.array(z.string(), {
    required_error: 'Users is required',
    invalid_type_error: 'Users must be an array of strings'
  })
});

export type RegisterUserType = z.infer<typeof registerUserSchema>;
