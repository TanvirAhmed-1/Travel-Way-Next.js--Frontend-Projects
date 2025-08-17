import AxiosSecure from "@/lib/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGuides = () => {
  const axiosSecure = AxiosSecure();
  const { data: Guides = [], refetch } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const res = await axiosSecure.get("/guides");
      return res.data;
    },
  });
  return [Guides, refetch];
};

export default useGuides;
