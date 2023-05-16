export { default as ICustomerRepository } from './interfaces/ICustomerRepository';
export { default as IItemRepository } from './interfaces/IItemRepository';
export { default as IProductRepository } from './interfaces/IProductRepository';
export { default as ISaleRepository } from './interfaces/ISaleRepository';
export { default as IUserRepository } from './interfaces/IUserRepository';

export { default as CustomerRepository } from './implementations/CustomerRepository';
export { default as ItemRepository } from './implementations/ItemRepository';
export { default as ProductRepository } from './implementations/ProductRepository';
export { default as SaleRepository } from './implementations/SaleRepository';
export { default as UserRepository } from './implementations/UserRepository';

import { PrismaClient } from '@prisma/client';
import { TPrismaClientProvider } from './@types';
const prisma: TPrismaClientProvider = new PrismaClient();
export { prisma };
export * from '@prisma/client';
