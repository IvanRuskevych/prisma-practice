import { prismaClient } from '../prisma/prismaClient';
import { ModelDelegate } from '../types/models';

export const getModelDelegate = (model: keyof typeof prismaClient): ModelDelegate => {
  return prismaClient[model] as unknown as ModelDelegate;
};
