import { Prisma, Product } from '@prisma/client';
import { prisma } from '..';
import IProductRepository from '../interfaces/IProductRepository';
import MainReporitory from './MainRepository';
class ProductRepository
  extends MainReporitory<
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
  >
  implements IProductRepository
{
  constructor(conn = prisma) {
    super('product', conn);
  }
  findById(param: Product['id'], conn = this.conn) {
    return conn.product.findUnique({
      where: {
        id: param,
      },
    });
  }
}

export default ProductRepository;
