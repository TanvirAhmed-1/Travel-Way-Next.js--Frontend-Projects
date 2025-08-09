import AxiosSecure from "@/lib/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

const useWitchList = () => {
  const { user } = useAuth();
  const axiosSecure = AxiosSecure();

  const { data: witchlist = [], refetch } = useQuery({
    queryKey: ["witchlist"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wish?email=${user?.email}`);
      return res.data;
    },
  });
  return [witchlist, refetch];
};

export default useWitchList;
