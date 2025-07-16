import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
 console.log("📩 Incoming POST body:", req.body);
  try {
    const user = await prisma.user.create({
      data: { firstName, lastName, email, password },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
};
