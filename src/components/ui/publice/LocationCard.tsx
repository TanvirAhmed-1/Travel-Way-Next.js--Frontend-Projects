import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/types/TourPackage";
import useWitchList from "@/hooks/useWitchList";
import AxiosPublic from "@/lib/AxiosPublic";
import { useAuth } from "@/hooks/useAuth";
import Swal from "sweetalert2";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHotel,
  FaStar,
  FaEye,
  FaRegHeart,
} from "react-icons/fa";
import { useState } from "react";

const LocationCard = ({ loc }: { loc: TourPackage }) => {
  const [witchlist, refetch] = useWitchList();
  const axiosPublic = AxiosPublic();
  const { user } = useAuth();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWitchlist = async (data: TourPackage) => {
    const { _id, description, ...data2 } = data;

    const wishData = {
      ...data2,
      locationId: _id,
      email: user?.email,
    };

    try {
      const res = await axiosPublic.post("/wish", wishData);
      refetch();
      if (res.data.insertedId) {
        setIsWishlisted(true);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Added to wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 w-72">
      {/* Compact Image Section */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={loc.tour_cover_photo}
          alt={loc.tour_title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          width={400}
          height={200}
          priority={true}
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <button
            onClick={() => handleWitchlist(loc)}
            className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:scale-110 transition-transform duration-200"
          >
            {isWishlisted ? (
              <FaHeart className="text-red-500 w-4 h-4" />
            ) : (
              <FaRegHeart className="text-gray-600 hover:text-red-500 w-4 h-4 transition-colors duration-200" />
            )}
          </button>
        </div>

        {/* Price tag */}
        <div className="absolute bottom-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-bold">
          ৳{loc.price}
        </div>
      </div>

      {/* Compact Content Section */}
      <div className="p-4">
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <FaMapMarkerAlt className="text-blue-500 w-3 h-3" />
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
              {loc.tour_location}
            </h3>
          </div>
          <p className="text-gray-600 text-sm line-clamp-1 mb-2">
            {loc.tour_title}
          </p>
        </div>

        {/* Compact Info */}
        <div className="space-y-2 mb-4">
          {/* Hotel */}
          <div className="flex items-center gap-2 text-sm">
            <FaHotel className="text-blue-500 w-3 h-3 flex-shrink-0" />
            <span className="text-gray-700 truncate">{loc.hotel_name}</span>
          </div>

          {/* Duration & Rating */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-green-500 w-3 h-3" />
              <span className="text-gray-700 font-medium">
                {loc.total_days} Days
              </span>
            </div>

            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500 w-3 h-3" />
              <span className="text-gray-700 font-medium">{loc.ratings}</span>
            </div>
          </div>
        </div>

        {/* Compact Action Buttons */}
        <div className="flex gap-2">
          <Link href={`/location/${loc._id}`} className="flex-1">
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-1">
              <FaEye className="w-3 h-3" />
              Details
            </button>
          </Link>

          <button
            onClick={() => handleWitchlist(loc)}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1 shadow-md hover:shadow-lg"
          >
            <FaHeart className="w-3 h-3" />
            Wishlist
          </button>
        </div>
      </div>

      {/* Subtle hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />
    </div>
  );
};

export default LocationCard;
