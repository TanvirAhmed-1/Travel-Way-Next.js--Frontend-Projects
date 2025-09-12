"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaTrashAlt, FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaEye, FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import useWitchList from "@/hooks/useWitchList";
import AxiosPublic from "@/lib/AxiosPublic";
import { WishlistItem } from "@/types/WishlistItem";
import { useAuth } from "@/hooks/useAuth";

const Wishlist = () => {
  const [wish, refetch] = useWitchList();
   const { user } = useAuth();
  const axiosPublic = AxiosPublic();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    setIsDeleting(id);
    try {
      const res = await axiosPublic.delete(`/wish/${id}`);

      if (res.data.acknowledged === true) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Deleted!",
          showConfirmButton: false,
          timer: 1100,
        });
      }

      refetch();
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong",
      });
    } finally {
      setIsDeleting(null);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">My Wishlist</h2>
              <p className="text-gray-600">Your dream destinations await</p>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-full font-medium shadow-lg flex items-center gap-2">
                <FaHeart />
                Total: {wish.length} {wish.length === 1 ? 'destination' : 'destinations'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {wish?.length ? (
          /* Enhanced Table View */
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="py-4 px-6 text-left font-semibold">#</th>
                    <th className="py-4 px-6 text-left font-semibold">Image</th>
                    <th className="py-4 px-6 text-left font-semibold">Tour Title</th>
                    <th className="py-4 px-6 text-left font-semibold">Location</th>
                    <th className="py-4 px-6 text-left font-semibold">Duration</th>
                    <th className="py-4 px-6 text-center font-semibold">Book</th>
                    <th className="py-4 px-6 text-center font-semibold">Details</th>
                    <th className="py-4 px-6 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wish.map((item: WishlistItem, index: number) => (
                    <tr
                      key={item._id}
                      className="border-t border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                    >
                      <td className="py-4 px-6">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="relative">
                          <img
                            src={item.tour_cover_photo}
                            alt="Cover"
                            className="w-24 h-16 object-cover rounded-lg border-2 border-gray-200 group-hover:border-blue-300 transition-all duration-300 shadow-md"
                          />
                          <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1">
                            <FaHeart size={10} />
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {item.tour_title}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="mr-2 text-blue-500" />
                          {item.tour_location}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center text-gray-600">
                          <FaCalendarAlt className="mr-2 text-green-500" />
                          {item.total_days} Days
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Link
                          href={`/book/${item.locationId}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-medium transition-all duration-200 inline-flex items-center gap-2 shadow-md hover:shadow-lg"
                        >
                          <FaShoppingCart />
                          Book Now
                        </Link>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Link
                          href={`/addData/${item.locationId}`}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-xl font-medium transition-all duration-200 inline-flex items-center gap-2"
                        >
                          <FaEye />
                          Details
                        </Link>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => handleDelete(item._id)}
                          disabled={isDeleting === item._id}
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            isDeleting === item._id 
                              ? 'bg-red-100 text-red-400 cursor-not-allowed' 
                              : 'hover:bg-red-50 text-red-500 hover:text-red-700'
                          }`}
                          aria-label="Delete wishlist item"
                        >
                          <FaTrashAlt className={`${isDeleting === item._id ? 'animate-pulse' : ''}`} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-4xl text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h3>
              <p className="text-gray-600 mb-6">Start exploring and add your dream destinations!</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                Explore Tours
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;