import axios from "axios";

const AxiosSecure = () => {
  const instance = axios.create({
    baseURL: "https://travel-way-server-xi.vercel.app",
  });
  return instance;
};

export default AxiosSecure;
