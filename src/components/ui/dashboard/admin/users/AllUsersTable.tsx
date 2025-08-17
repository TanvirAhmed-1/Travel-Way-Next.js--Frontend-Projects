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
    fetch(`http://localhost:5000/users/${_id}`, {
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
      <div className="pt-14 pb-6 text-center">
        <h1 className="text-2xl font-semibold inline-block border-t-2 border-b-2 border-green-600 py-1 px-4">
          Manage Users
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-xl font-semibold bg-sky-400 text-black">
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
              <tr key={items._id} className=" text-xl text-black bg-white">
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
                      className="btn bg-green-300"
                    >
                      Create User
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCreate(items)}
                      className="btn bg-green-300"
                    >
                      Create Admin
                    </button>
                  )}
                </td>
                <td onClick={() => handleDelete(items._id)}>
                  <MdDeleteForever className="text-3xl text-red-500 hover:text-red-600" />
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
