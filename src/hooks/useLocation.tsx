"use client";

import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "@/lib/AxiosSecure";

const useLocation = () => {
  const axiosSecure = AxiosSecure();
    // You can use AxiosSecure to make API calls here
    const{data:location, refetch}=useQuery({
        queryKey:['location'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/addData');
            return res.data;
        }
    });
 return [location, refetch] as const;
};
export default useLocation;
