"use client";

import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAllPAckageData from "@/hooks/useLocation";
import useAxiosSecure from "@/lib/AxiosSecure";
import { TourPackage } from "@/types/TourPackage";
import EditeLocationModal from "./EditeLocationModal";

const AllLocationTable = () => {
  const [Package, refetch] = useAllPAckageData();
  const axiosSecure = useAxiosSecure();

  const HandleDelete = async (id: string) => {
    try {
      const res = await axiosSecure.delete(`/addData/${id}`);
      if (res.data.deletedCount === 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Package Deleted!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Failed to delete package",
        text: "Please try again later",
      });
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-blue-50 text-gray-700 uppercase">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Image</th>
            <th className="px-4 py-2 text-left">Tour Title</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Tour Manager</th>
            <th className="px-4 py-2 text-left">Manager Contact</th>
            <th className="px-4 py-2 text-left">Hotel Name</th>
            <th className="px-4 py-2 text-left">Guide Name</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {Package?.map((items: TourPackage, index: number) => (
            <tr
              key={index}
              className="hover:bg-blue-50 transition duration-200 text-gray-800"
            >
              <td className="px-4 py-3 font-medium">{index + 1}</td>
              <td className="px-4 py-3">
                <img
                  src={items.tour_cover_photo}
                  alt={items.tour_title}
                  className="rounded-lg h-16 w-24 object-cover shadow-sm border border-gray-100"
                />
              </td>
              <td className="px-4 py-3">{items.tour_title}</td>
              <td className="px-4 py-3 font-semibold text-teal-600">
                {items.price || "N/A"}
              </td>
              <td className="px-4 py-3">{items.tour_manager}</td>
              <td className="px-4 py-3">{items.tour_manager_contact}</td>
              <td className="px-4 py-3">{items.hotel_name}</td>
              <td className="px-4 py-3">{items.guide_name}</td>
              <td className="px-4 py-3 mt-3 flex items-center justify-center gap-2">
                <EditeLocationModal location={items} />
                <button
                  onClick={() => HandleDelete(items._id)}
                  className="text-red-500 hover:text-white hover:bg-red-500 border border-red-300 rounded-full  p-2 transition duration-200"
                  title="Delete Package"
                >
                  <MdDeleteForever className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
          {Package?.length === 0 && (
            <tr>
              <td colSpan={10} className="text-center py-6 text-red-500">
                No packages found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllLocationTable;
