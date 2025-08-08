"use client";

import useLocation from "@/hooks/useLocation";
import React from "react";
import LocationCard from "@/components/ui/LocationCard";
import { TourPackage } from "../../types/tourPackage";

const page = () => {
  const [location, refetch] = useLocation();
  return (
    <div>
      <h1 className=" w-full  text-start text-3xl text-black ">All location</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 p-4">
        {location?.map((loc: TourPackage) => (
          <LocationCard key={loc._id} loc={loc} />
        ))}
      </div>
    </div>
  );
};

export default page;
