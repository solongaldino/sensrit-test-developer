import { Item, Prisma } from '@prisma/client';
import { Connection } from '@shared/repositories/prisma/@types';
import IMainRepository from './IMainRepository';

interface IItemRepository
  extends IMainRepository<
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
  > {
  findById(param: Item['id'], conn?: Connection): Promise<Item | null>;
}

export default IItemRepository;
