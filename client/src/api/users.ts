import axios from "axios";
import type{ User } from "../Types/user";

export const getUsers = async () => {
  const response = await axios.get('/api/hello');
  return response.data;
};



export const setUsers = async (user:User) => {
  const response = await axios.post('/api/hello', user);
  return response.data;
};



export const deleteUser = async (id:string) => {
  const response = await axios.delete('/api/hello');
  return response.data;
};