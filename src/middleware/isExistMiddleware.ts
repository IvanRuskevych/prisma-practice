import { NextFunction, Request, Response } from 'express';

import { prismaClient } from '../prisma/prismaClient';
import { getModelDelegate } from '../utils';
import { ApiExceptions } from '../exceptions';

export const isExistMiddleware = (model: keyof typeof prismaClient, id: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const reqId = req.body[id] || req.params[id];

    if (!reqId) {
      return next(ApiExceptions.BadRequest('ID is required'));
    }

    try {
      const record = await getModelDelegate(model).findUnique({
        where: { id: reqId },
      });

      if (!record) {
        return next(ApiExceptions.NotFound(`Record with the given id not found`));
      }

      req.body.record = record;

      next();
    } catch (err) {
      next(err);
    }
  };
};
