import { PrismaClient } from '@prisma/client';
// import { softDeletePostMiddleware } from '../middleware';

export const prismaClient = new PrismaClient();

// prismaClient.$use(softDeletePostMiddleware);
