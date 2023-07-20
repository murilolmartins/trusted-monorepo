import type { UserRepository } from '@/modules/users/application/repositories';
import { type UserEntity } from '@/modules/users/domain/entities';

import { format } from 'date-fns';
import fs from 'node:fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export class UserTxtRepository implements UserRepository {
  private readonly users: UserEntity[] = [];

  constructor(private readonly basePath: string) {}

  public async register(
    usersNames: string[]
  ): Promise<null | { message: string }> {
    try {
      const date = format(new Date(), 'yyyy-MM-dd_HH-mm-ss');
      const fileName = `array_${date}_${uuidv4()}.txt`;
      const filePath = path.join(this.basePath, 'processable', fileName);

      const content = usersNames.join('\n');

      fs.writeFileSync(filePath, content);

      return { message: 'Users registered sucefully' };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return null;
    }
  }

  public async findAll(): Promise<UserEntity[] | null> {
    const caminhoArquivo = path.join(this.basePath, 'users', 'users.json');

    try {
      const data = fs.readFileSync(caminhoArquivo, 'utf8').toString();
      const usersList: { users: UserEntity[] } = JSON.parse(data);
      return usersList.users;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error reading json file:', error);
      return null;
    }
  }
}
