"use client";

import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "@/lib/AxiosSecure";
import { BookingType } from "@/types/BookingType";

const BookingTable = () => {
  const axiosSecure = useAxiosSecure();
  const [bookings, setBookings] = useState<BookingType[]>([]);

  useEffect(() => {
    axiosSecure
      .get("/book")
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await axiosSecure.delete(`/book/${id}`);
      if (res.data.acknowledged) {
        setBookings(bookings.filter((b) => b._id !== id));
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Booking deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to delete booking",
        text: "Please try again later",
      });
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Bookings List
      </h1>
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-blue-500 text-white uppercase text-left">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Tour Cover</th>
              <th className="px-4 py-3">Bus Name</th>
              <th className="px-4 py-3">Bus Contact</th>
              <th className="px-4 py-3">Tour Title</th>
              <th className="px-4 py-3">Hotel Name</th>
              <th className="px-4 py-3">Days</th>
              <th className="px-4 py-3">Tour Manager</th>
              <th className="px-4 py-3">Booking Status</th>
              <th className="px-4 py-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center p-5 text-red-500">
                  No bookings found.
                </td>
              </tr>
            ) : (
              bookings.map((b, index) => (
                <tr
                  key={b._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition duration-200`}
                >
                  <td className="px-4 py-3 font-medium">{index + 1}</td>
                  <td className="px-4 py-3">
                    <img
                      src={b.tour_cover_photo}
                      alt={b.tour_title}
                      className="w-24 h-16 object-cover rounded-md mx-auto shadow-sm"
                    />
                  </td>
                  <td className="px-4 py-3">{b.bus_name}</td>
                  <td className="px-4 py-3">{b.bus_contact}</td>
                  <td className="px-4 py-3">{b.tour_title}</td>
                  <td className="px-4 py-3">{b.hotel_name}</td>
                  <td className="px-4 py-3">{b.total_days}</td>
                  <td className="px-4 py-3">{b.tour_manager}</td>
                  <td className="px-4 py-3 text-teal-600 font-medium">
                    {b.booking_states}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button onClick={() => handleDelete(b._id)}>
                      <MdDeleteForever className="text-2xl text-red-500 hover:text-red-700 transition duration-200" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
