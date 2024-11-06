import axios from "axios";

const apiConnection = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiConnection.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

export { apiConnection };
