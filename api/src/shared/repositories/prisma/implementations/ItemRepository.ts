import { Prisma, Item } from '@prisma/client';
import { prisma } from '..';
import IItemRepository from '../interfaces/IItemRepository';
import MainReporitory from './MainRepository';
class ItemRepository
  extends MainReporitory<
    Item,
    Prisma.ItemAggregateArgs,
    Prisma.ItemCountArgs,
    Prisma.ItemCreateArgs,
    Prisma.ItemCreateManyArgs,
    Prisma.ItemDeleteArgs,
    Prisma.ItemDeleteManyArgs,
    Prisma.ItemFindFirstArgs,
    Prisma.ItemFindManyArgs,
    Prisma.ItemFindUniqueArgs,
    Prisma.ItemGroupByArgs,
    Prisma.ItemUpdateArgs,
    Prisma.ItemUpdateManyArgs,
    Prisma.ItemUpsertArgs
  >
  implements IItemRepository
{
  constructor(conn = prisma) {
    super('item', conn);
  }
  findById(param: Item['id'], conn = this.conn) {
    return conn.item.findUnique({
      where: {
        id: param,
      },
    });
  }
}

export default ItemRepository;
