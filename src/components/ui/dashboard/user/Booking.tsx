"use client";

import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "@/lib/AxiosSecure";

// Booking type
interface BookingType {
  _id: string;
  tour_cover_photo: string;
  tour_title: string;
  hotel_name: string;
  total_days: number;
  tour_manager: string;
  booking_states: string;
  bus_name: string;
  bus_contact: string;
}

const Booking = () => {
  const axiosSecure = useAxiosSecure();
  const [book, setBook] = useState<BookingType[]>([]);

  useEffect(() => {
    axiosSecure
      .get<BookingType[]>("/book")
      .then((res) => setBook(res.data))
      .catch((err) => {
        console.error(err.message);
      });
  }, [axiosSecure]);

  const handleDelete = async (id: string) => {
    try {
      const res = await axiosSecure.delete<{ acknowledged: boolean }>(
        `/book/${id}`
      );
      const filterData = book.filter((v) => v._id !== id);
      setBook(filterData);

      if (res.data.acknowledged) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Delete successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Bookings List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-md">
          <thead className="bg-sky-400 text-white text-center text-sm">
            <tr className="*:text-center">
              <th className="p-3 border border-gray-300">Tour Cover</th>
              <th className="p-3 border border-gray-300">Bus Name</th>
              <th className="p-3 border border-gray-300">Bus Contact</th>
              <th className="p-3 border border-gray-300">Tour Title</th>
              <th className="p-3 border border-gray-300">Hotel Name</th>
              <th className="py-3 px-4 text-left">Days</th>
              <th className="py-3 px-4 text-left">Tour Manager</th>
              <th className="py-3 px-4 text-left">Booking States</th>
              <th className="py-3 px-4 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {book.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center p-5">
                  No bookings found.
                </td>
              </tr>
            ) : (
              book.map((b, index) => (
                <tr
                  key={b._id}
                  className={`*:text-center ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-3 border border-gray-300">
                    <img
                      src={b.tour_cover_photo}
                      alt={b.tour_title}
                      className="w-24 h-16 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="p-3 border border-gray-300">{b.bus_name}</td>
                  <td className="p-3 border border-gray-300">
                    {b.bus_contact}
                  </td>
                  <td className="p-3 border border-gray-300">{b.tour_title}</td>
                  <td className="p-3 border border-gray-300">{b.hotel_name}</td>
                  <td className="p-3 border border-gray-300">{b.total_days}</td>
                  <td className="p-3 border border-gray-300">
                    {b.tour_manager}
                  </td>
                  <td className="p-3 border border-gray-300 text-blue-600">
                    {b.booking_states}
                  </td>
                  <td
                    className="p-3 border border-gray-300 text-center align-middle"
                    onClick={() => handleDelete(b._id)}
                  >
                    <MdDeleteForever className="text-3xl text-red-500 hover:text-red-600 cursor-pointer inline-block" />
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

export default Booking;
