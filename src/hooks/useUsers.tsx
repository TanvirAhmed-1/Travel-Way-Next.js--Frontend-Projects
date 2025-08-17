import AxiosSecure from "@/lib/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const axiosSecure = AxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["üsers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
  return [users, refetch];
};

export default useUsers;
