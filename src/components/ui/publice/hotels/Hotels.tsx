"use client";

import useLocation from "@/hooks/useLocation";
import { TourPackage } from "@/types/TourPackage";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hotels = () => {
  const [location] = useLocation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="px-4 md:px-8 py-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-gray-800"
      >
        🏨 Available Tour Packages
      </motion.h2>

      {location?.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500"
        >
          No packages available at the moment.
        </motion.p>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {location?.map((v: TourPackage) => (
            <motion.div
              key={v._id}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Hotel Image with overlay */}
              <div className="relative w-full h-48 overflow-hidden group">
                <img
                  src={v.hotel_image || "https://via.placeholder.com/400x300"}
                  alt={v.hotel_name || "Hotel"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">
                    {v.total_days} days tour
                  </span>
                </div>
                {v.ratings && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    ⭐ {v.ratings}
                  </div>
                )}
              </div>

              {/* Hotel Info */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
                    {v.hotel_name}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {v.tour_location}
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {v.hotel_description ||
                      "Luxurious accommodation with premium amenities"}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {v.total_days} days
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs text-gray-500">From</p>
                      <p className="text-xl font-bold text-green-600">
                        {v.price ? `${v.price} TK` : "Contact for price"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Tour Manager</p>
                      <p className="text-sm font-medium">{v.tour_manager}</p>
                    </div>
                  </div>

                  {/* Button */}
                  <Link href={`/location/${v._id}`} className="block">
                    <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Hotels;
