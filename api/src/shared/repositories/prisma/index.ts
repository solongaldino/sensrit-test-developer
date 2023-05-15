import IUserRepository from './interfaces/IUserRepository';

export { IUserRepository };

import UserRepository from './implementations/UserRepository';

export { UserRepository };

import { PrismaClient } from '@prisma/client';
import { TPrismaClientProvider } from './@types';
const prisma: TPrismaClientProvider = new PrismaClient();
export { prisma };
export * from '@prisma/client';
