import { Prisma } from '@prisma/client';

import { ApiErrors } from './index';

export class PrismaErrors {
  static handlePrismaError(err: Prisma.PrismaClientKnownRequestError): ApiErrors {
    switch (err.code) {
      case 'P2002':
        return ApiErrors.Conflict('Record already exists. The data you are trying to enter already exists.');
      case 'P2025':
        return ApiErrors.NotFound('Record not found.');
      case 'P1001':
        return ApiErrors.Conflict('Unable to connect to the database. Please try again later.');
      default:
        return ApiErrors.InternalServerError();
    }
  }
}
