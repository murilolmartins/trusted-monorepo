import { BaseEntity } from '@/core';

export class UserEntity extends BaseEntity {
  name: string;
  email: string;
  password: string;
  birthdate: Date;

  constructor(userData: any) {
    super();
    this.name = userData.name;
    this.email = userData.email;
    this.password = userData.password;
    this.birthdate = userData.birthdate;
  }
}
