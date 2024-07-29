import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

import { ApiErrors, PrismaErrors } from '../exceptions';

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Global Error Handler:', err);

  // catch prismaClient errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const prismaError: ApiErrors = PrismaErrors.handlePrismaError(err);
    return res.status(prismaError.status).json({ message: prismaError.message, errors: prismaError.errors });
  }

  // catch http errors
  const status = err?.status ? err.status : 500;
  const message = err?.message ? err.message : 'Internal server error';

  return res.status(status).json({ message });

  // const status = err.status || 500;
  // const message = err.message || 'Internal Server Error';
  //
  // res.status(status).json({ message });
};
