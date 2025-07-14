import axios from "axios";

export const getHelloMessage = async () => {
  const response = await axios.get('/api/hello');
  return response.data;
};