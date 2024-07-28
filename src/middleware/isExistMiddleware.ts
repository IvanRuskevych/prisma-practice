import { NextFunction, Request, Response } from 'express';

import { prismaClient } from '../prisma/prismaClient';
import { getModelDelegate } from '../utils';

export const isExistMiddleware = (model: keyof typeof prismaClient, id: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const reqId = req.body[id] || req.params[id];

    if (!reqId) {
      return console.log('reqId is missing');
    }

    try {
      const record = await getModelDelegate(model).findUnique({
        where: { id: id },
      });

      if (!record) {
        return console.log('Record not found');
      }
      req.body.record = record;

      next();
    } catch (err) {
      next(err);
    }
  };
};
