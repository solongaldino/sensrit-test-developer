import { Prisma, Customer } from '@prisma/client';
import { prisma } from '..';
import ICustomerRepository from '../interfaces/ICustomerRepository';
import MainReporitory from './MainRepository';
class CustomerRepository
  extends MainReporitory<
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
  >
  implements ICustomerRepository
{
  constructor(conn = prisma) {
    super('customer', conn);
  }
  findById(param: Customer['id'], conn = this.conn) {
    return conn.customer.findUnique({
      where: {
        id: param,
      },
    });
  }

  findByEmail(param: Customer['email'], conn = this.conn) {
    return conn.customer.findUnique({
      where: {
        email: param,
      },
    });
  }
}

export default CustomerRepository;
