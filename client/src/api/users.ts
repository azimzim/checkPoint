import axios from "axios";
import type { User } from "../Types/user";

// GET /api/users
export const getUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data;
};

// POST /api/users
export const createUser = async (user: Omit<User, "id">) => {
  const response = await axios.post('/api/users', user);
  return response.data;
};

// DELETE /api/users/:id
export const deleteUser = async (id: string) => {
  const response = await axios.delete(`/api/users/${id}`);
  return response.data;
};
