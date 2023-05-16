import { Customer, Prisma } from '@prisma/client';
import { Connection } from '@shared/repositories/prisma/@types';
import IMainRepository from './IMainRepository';

interface ICustomerRepository
  extends IMainRepository<
    Customer,
    Prisma.CustomerAggregateArgs,
    Prisma.CustomerCountArgs,
    Prisma.CustomerCreateArgs,
    Prisma.CustomerCreateManyArgs,
    Prisma.CustomerDeleteArgs,
    Prisma.CustomerDeleteManyArgs,
    Prisma.CustomerFindFirstArgs,
    Prisma.CustomerFindManyArgs,
    Prisma.CustomerFindUniqueArgs,
    Prisma.CustomerGroupByArgs,
    Prisma.CustomerUpdateArgs,
    Prisma.CustomerUpdateManyArgs,
    Prisma.CustomerUpsertArgs
  > {
  findById(param: Customer['id'], conn?: Connection): Promise<Customer | null>;

  findByEmail(param: Customer['email'], conn?: Connection): Promise<Customer | null>;
}

export default ICustomerRepository;
