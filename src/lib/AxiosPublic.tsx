import axios from "axios";



const AxiosPublic = () => {
  const instance = axios.create({
    baseURL: "https://travel-way-server-xi.vercel.app",
    withCredentials: true,
  });
  return instance;
};

export default AxiosPublic;
