import { Product, Prisma } from '@prisma/client';
import { Connection } from '@shared/repositories/prisma/@types';
import IMainRepository from './IMainRepository';

interface IProductRepository
  extends IMainRepository<
    Product,
    Prisma.ProductAggregateArgs,
    Prisma.ProductCountArgs,
    Prisma.ProductCreateArgs,
    Prisma.ProductCreateManyArgs,
    Prisma.ProductDeleteArgs,
    Prisma.ProductDeleteManyArgs,
    Prisma.ProductFindFirstArgs,
    Prisma.ProductFindManyArgs,
    Prisma.ProductFindUniqueArgs,
    Prisma.ProductGroupByArgs,
    Prisma.ProductUpdateArgs,
    Prisma.ProductUpdateManyArgs,
    Prisma.ProductUpsertArgs
  > {
  findById(param: Product['id'], conn?: Connection): Promise<Product | null>;
}

export default IProductRepository;
