"use client";

import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "@/lib/AxiosSecure";
import userTanstackQuery from "@/hooks/useUsers";

type usersData = {
  _id: string;
  name: string;
  role: string;
  email: string;
};
const AllUsersTable = () => {
  const AxiosSecure = useAxiosSecure();
  const [user, refetch] = userTanstackQuery();
  const handleDelete = (_id: string) => {
    fetch(`https://travel-way-server-xi.vercel.app/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Deleted !",
          showConfirmButton: false,
          timer: 1100,
        });
        refetch();
      });
  };

  const handleCreate = async (data1: usersData) => {
    const { _id, ...data } = data1;
    const userData = {
      ...data,
      role: "Admin",
    };
    try {
      const res = await AxiosSecure.patch(`/users/${data1._id}`, userData);
      console.log(res.data);
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Role is Update !",
        showConfirmButton: false,
        timer: 1100,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateUser = async (data1: usersData) => {
    const { _id, ...data } = data1;
    const userData = {
      ...data,
      role: "User",
    };

    try {
      const res = await AxiosSecure.patch(`/users/${data1._id}`, userData);
      console.log(res.data);
      refetch();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "User role has been updated!",
        showConfirmButton: false,
        timer: 1100,
      });
    } catch (error) {
      console.error("Error updating user role:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <div className=" pb-6 ">
        <h1 className="text-2xl font-semibold  text-start border-green-600 py-1 px-4">
          Manage All Users
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-sm font-medium *:text-center  bg-sky-400 rounded-xl text-black">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Create a Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user?.map((items: usersData, index: number) => (
              <tr
                key={items._id}
                className=" text-sm *:text-center text-black bg-white"
              >
                <td>{index + 1}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td
                  className={`${
                    items?.role === "Admin"
                      ? "text-green-500 font-semibold "
                      : "text-black"
                  }`}
                >
                  {items?.role || "User"}
                </td>
                <td>
                  {items?.role === "Admin" ? (
                    <button
                      onClick={() => handleCreateUser(items)}
                      className=" py-1 px-2 text-[12px] rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-50"
                    >
                      Create User
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCreate(items)}
                      className="py-1 px-2 text-[12px] bg-[#67C090] hover:bg-[#4ab47b]"
                    >
                      Create Admin
                    </button>
                  )}
                </td>
                <td onClick={() => handleDelete(items._id)}>
                  <MdDeleteForever className="text-2xl ml-14 text-red-500  hover:text-red-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsersTable;
