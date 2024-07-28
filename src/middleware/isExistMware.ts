import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../prisma/prismaClient';

export const isExistMware = (id: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const reqId = req.body[id] || req.params[id];

    if (!reqId) {
      return console.log('reqId is missing');
    }

    try {
      const record = await prismaClient.post.findUnique({
        where: { id: reqId },
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
