import axios from "axios";

const AxiosPublic = () => {
const instance = axios.create({
  baseURL: 'http://localhost:5000',
});
  return instance
};

export default AxiosPublic;
