"use client";

import useLocation from "@/hooks/useLocation";
import LocationCard from "@/components/ui/publice/LocationCard";
import { TourPackage } from "@/types/TourPackage";

const page = () => {
  const [location, refetch] = useLocation();
  return (
    <div>
      <h1 className="text-lg text-center lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
        All location
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 p-4">
        {location?.map((loc: TourPackage) => (
          <LocationCard key={loc._id} loc={loc} />
        ))}
      </div>
    </div>
  );
};

export default page;
