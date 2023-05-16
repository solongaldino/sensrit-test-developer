import { Prisma, Sale } from '@prisma/client';
import { prisma } from '..';
import ISaleRepository from '../interfaces/ISaleRepository';
import MainReporitory from './MainRepository';
class SaleRepository
  extends MainReporitory<
    Sale,
    Prisma.SaleAggregateArgs,
    Prisma.SaleCountArgs,
    Prisma.SaleCreateArgs,
    Prisma.SaleCreateManyArgs,
    Prisma.SaleDeleteArgs,
    Prisma.SaleDeleteManyArgs,
    Prisma.SaleFindFirstArgs,
    Prisma.SaleFindManyArgs,
    Prisma.SaleFindUniqueArgs,
    Prisma.SaleGroupByArgs,
    Prisma.SaleUpdateArgs,
    Prisma.SaleUpdateManyArgs,
    Prisma.SaleUpsertArgs
  >
  implements ISaleRepository
{
  constructor(conn = prisma) {
    super('sale', conn);
  }
  findById(param: Sale['id'], conn = this.conn) {
    return conn.sale.findUnique({
      where: {
        id: param,
      },
    });
  }
}

export default SaleRepository;
