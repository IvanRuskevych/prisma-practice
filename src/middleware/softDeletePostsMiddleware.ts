import { Prisma } from '@prisma/client';

import { prismaClient } from '../prisma/prismaClient';

// ver #1 import to app.ts
prismaClient.$use(async (params: Prisma.MiddlewareParams, next) => {
  if (params.model === 'Post') {
    if (params.action === 'delete') {
      params.action = 'update';
      params.args['data'] = { deleted: true };
    }

    if (params.action === 'deleteMany') {
      params.action = 'updateMany';
      if (params.args.data !== undefined) {
        params.args.data['deleted'] = true;
      } else {
        params.args['data'] = { deleted: true };
      }
    }
  }

  return next(params);
});

// // ver #2 import to prismaClient.ts - не працює чому?
//
// export const softDeletePostMiddleware: Prisma.Middleware = async (params: Prisma.MiddlewareParams, next) => {
//   if (params.model === 'Post') {
//     if (params.action === 'delete') {
//       params.action = 'update';
//       params.args['data'] = { deleted: true };
//     }
//
//     if (params.action === 'deleteMany') {
//       params.action = 'updateMany';
//       if (params.args.data !== undefined) {
//         params.args.data['deleted'] = true;
//       } else {
//         params.args['data'] = { deleted: true };
//       }
//     }
//   }
//
//   return next(params);
// };
