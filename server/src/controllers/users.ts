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
 const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const user = await prisma.user.create({
        data: { firstName, lastName, email, password },
      });
      return res.status(201).json(user);
    } catch (error) {
      attempt++;
      console.warn(`⚠️ DB write failed (attempt ${attempt}):`, error);

      if (attempt >= maxRetries) {
        return res.status(500).json({ message: "Failed to create user after multiple attempts." });
      }

      await new Promise((resolve) => setTimeout(resolve, 500)); // המתנה 500ms לפני ניסיון חוזר
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      await prisma.user.delete({ where: { id } });
      return res.status(204).end(); 
    } catch (error) {
      attempt++;
      console.warn(`⚠️ Delete failed (attempt ${attempt}):`, error);

      if (attempt >= maxRetries) {
        return res.status(500).json({ message: 'Failed to delete user after multiple attempts' });
      }

      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
};
