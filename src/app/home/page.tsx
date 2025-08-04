"use client"

import Footer from "@/components/ui/Footer";
import HomeSlider from "@/components/ui/HomeSlider";
import LocationCard from "@/components/ui/LocationCard";
import Navbar from "@/components/ui/Navbar";
import useLocation from "@/hooks/useLocation";
import React from "react";
import { TourPackage } from "../../types/tourPackage";

const page = () => {
  const [location] = useLocation();
  return (
    <div className="w-full  bg-gray-100">
      <Navbar />
      <HomeSlider />
      <div className="mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {location?.map((loc:TourPackage) => (
          <LocationCard key={loc._id} loc={loc} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
