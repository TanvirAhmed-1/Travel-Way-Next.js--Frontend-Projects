import AxiosSecure from "@/lib/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useBooking = () => {
  const axiosSecure = AxiosSecure();
  const { data: books = [], refetch } = useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/book`);
      return result;
    },
  });
  return [books, refetch];
};

export default useBooking;
