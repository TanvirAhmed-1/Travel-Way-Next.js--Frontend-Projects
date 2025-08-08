"use client";

import Footer from "@/components/ui/Footer";
import HomeSlider from "@/components/ui/HomeSlider";
import Navbar from "@/components/ui/Navbar";
import useLocation from "@/hooks/useLocation";
import Location from "@/components/ui/Location";


const page = () => {
  const [location] = useLocation();
  return (
    <div className="w-full  bg-gray-100">
      <Navbar />
      <HomeSlider />
      <Location />
      <Footer />
    </div>
  );
};

export default page;
