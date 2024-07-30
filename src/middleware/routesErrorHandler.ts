import { Request, Response } from 'express';

export const routesErrorHandler = (req: Request, res: Response): void => {
  res.status(404).send({ message: 'Route not Found' });
};
