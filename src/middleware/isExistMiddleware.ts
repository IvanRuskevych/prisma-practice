import { NextFunction, Request, Response } from 'express';

import { prismaClient } from '../prisma/prismaClient';
import { getModelDelegate } from '../utils';
import { ApiErrors } from '../exceptions';
import { ModelDelegates } from '../types';

// ver #1
// export const isExistMiddleware = (model: keyof typeof prismaClient, id: string) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const reqId = req.params[id] || req.body[id];
//
//     if (!reqId) {
//       return next(ApiErrors.BadRequest('ID is required'));
//     }
//
//     try {
//       const record = await getModelDelegate(model).findUnique({
//         where: { id: reqId },
//       });
//
//       if (!record) {
//         return next(ApiErrors.NotFound(`Record with the given id not found`));
//       }
//
//       req.body.record = record;
//
//       next();
//     } catch (err) {
//       next(err);
//     }
//   };
// };

// ver 2
export const isExistMiddleware = (model: keyof ModelDelegates, id: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const reqId = req.params[id] || req.body[id];

    if (!reqId) {
      return next(ApiErrors.BadRequest('ID is required'));
    }

    try {
      const record = await getModelDelegate(model).findUnique({
        where: { id: reqId },
      });

      if (!record) {
        return next(ApiErrors.NotFound(`Record with the given id not found`));
      }

      req.body.record = record;

      next();
    } catch (err) {
      next(err);
    }
  };
};
