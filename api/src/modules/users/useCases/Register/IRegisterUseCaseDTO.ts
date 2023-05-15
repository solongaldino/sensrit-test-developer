import { User } from '@shared/repositories/prisma';

export default interface IRegisterUseCaseDTO {
  name: User['name'];
  email: User['email'];
  login: User['login'];
  password: User['password'];
}
