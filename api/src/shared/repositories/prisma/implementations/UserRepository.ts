import { Prisma, User } from '@prisma/client';
import { prisma } from '..';
import IUserRepository from '../interfaces/IUserRepository';
import MainReporitory from './MainRepository';
class UserRepository
  extends MainReporitory<
    User,
    Prisma.UserAggregateArgs,
    Prisma.UserCountArgs,
    Prisma.UserCreateArgs,
    Prisma.UserCreateManyArgs,
    Prisma.UserDeleteArgs,
    Prisma.UserDeleteManyArgs,
    Prisma.UserFindFirstArgs,
    Prisma.UserFindManyArgs,
    Prisma.UserFindUniqueArgs,
    Prisma.UserGroupByArgs,
    Prisma.UserUpdateArgs,
    Prisma.UserUpdateManyArgs,
    Prisma.UserUpsertArgs
  >
  implements IUserRepository
{
  constructor(conn = prisma) {
    super('user', conn);
  }
  findById(param: User['id'], conn = this.conn) {
    return conn.user.findUnique({
      where: {
        id: param,
      },
    });
  }

  findByEmail(param: User['email'], conn = this.conn) {
    return conn.user.findUnique({
      where: {
        email: param,
      },
    });
  }

  findByLogin(param: User['login'], conn = this.conn) {
    return conn.user.findUnique({
      where: {
        login: param,
      },
    });
  }
}

export default UserRepository;
