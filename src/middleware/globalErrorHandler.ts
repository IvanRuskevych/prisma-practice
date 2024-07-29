import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

import { CustomError } from '../types';
import { ApiErrors, PrismaErrors } from '../exceptions';

export const globalErrorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log('Global Error Handler:', err);

  // catch prismaClient errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const prismaError: ApiErrors = PrismaErrors.handlePrismaError(err);
    return res.status(prismaError.status).json({ message: prismaError.message, errors: prismaError.errors });
  }

  // catch http errors
  if (err instanceof Error) {
    const status = (err as CustomError).status || 500;
    const message = err.message || 'Internal server error';

    return res.status(status).json({ message });
  }
};
