import { type UserEntity } from '../../domain/entities';

export interface UserRepository {
  register: (usersName: string[]) => Promise<null | { message: string }>;
  findAll: () => Promise<UserEntity[] | []>;
}
