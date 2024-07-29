import { prismaClient } from '../prisma/prismaClient';
import { ModelDelegate, ModelDelegates } from '../types';
import { Post, User } from '@prisma/client';

// ver #1
// export const getModelDelegate = (model: keyof typeof prismaClient): ModelDelegate => {
//   return prismaClient[model] as unknown as ModelDelegate;
// };

//ver 2

export const getModelDelegate = (model: keyof ModelDelegates): ModelDelegate<unknown> => {
  switch (model) {
    case 'user':
      return prismaClient.post as unknown as ModelDelegate<User>;
    case 'post':
      return prismaClient.post as unknown as ModelDelegate<Post>;
    // other models
    default:
      throw new Error('Model not found');
  }
};
