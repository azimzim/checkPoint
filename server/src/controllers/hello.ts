import { Request, Response } from 'express';

export const getHelloMessage = (_req: Request, res: Response) => {
  res.json({ message: 'server says hello from the controller' });
};
