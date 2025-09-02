"use client";

import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useGuideHook from "@/hooks/useGuides";
import useAxiosSecure from "@/lib/AxiosSecure";
import { GuideType } from "@/types/GuideType";
import EditGuides from "./EditGuides";

const GuidesTable: React.FC = () => {
  const [guides, refetch, isLoading] = useGuideHook();
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id: string): Promise<void> => {
    try {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (!confirm.isConfirmed) return;

      const res = await axiosSecure.delete<{ deletedCount: number }>(
        `/guides/${id}`
      );

      if (res.data.deletedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Guide Deleted!",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Delete failed:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to delete guide",
        text: "Please try again later",
      });
    }
  };

  if (isLoading) {
    return <p className="text-center text-gray-500 py-10">Loading guides...</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg  bg-white">
      <table className="table  w-full text-sm">
        <thead className="bg-blue-100 text-gray-800">
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Guide Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Languages</th>
            <th>Type</th>
            <th>Experience</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {guides?.map((guide: GuideType, index: number) => (
            <tr key={guide._id} className="hover:bg-blue-50 ">
              <td>{index + 1}</td>
              <td>
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-20 h-12 rounded-xl object-cover border shadow"
                />
              </td>
              <td>{guide.name}</td>
              <td>{guide.phone}</td>
              <td>{guide.email}</td>
              <td>
                <span
                  className={`badge text-sm px-3 py-1 font-medium rounded-full ${
                    guide.isAvailable === "true"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {guide.isAvailable === "true" ? "Available" : "Unavailable"}
                </span>
              </td>
              <td>{guide.languages}</td>
              <td>{guide.availabilityType}</td>
              <td>{guide.experience} yrs</td>
              <td>
                <EditGuides guide={guide} />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(guide._id)}
                  className="text-red-500 hover:text-white border border-red-300 hover:bg-red-500 rounded-full p-2 transition duration-200"
                  title="Delete"
                >
                  <FaTrash className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {guides?.length === 0 && (
        <p className="text-center text-red-500 py-10">No guides found.</p>
      )}
    </div>
  );
};

export default GuidesTable;
