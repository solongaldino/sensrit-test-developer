import { Sale, Prisma } from '@prisma/client';
import { Connection } from '@shared/repositories/prisma/@types';
import IMainRepository from './IMainRepository';

interface ISaleRepository
  extends IMainRepository<
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
  > {
  findById(param: Sale['id'], conn?: Connection): Promise<Sale | null>;
}

export default ISaleRepository;
