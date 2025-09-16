import {
  FaFile,
  FaTachometerAlt,
  FaUsers,
  FaMap,
  FaHome,
} from "react-icons/fa";


const userRole = typeof window !== "undefined" ? localStorage.getItem("role") : null;

const isAdmin = userRole === "Admin";

export const DashboardLinks = isAdmin
  ? [
      {
        title: "Dashboard",
        route: "/dashboard",
        hasChildren: false,
        icon: <FaTachometerAlt className="text-teal-600" />,
      },
      {
        title: "All-location",
        route: "/dashboard/admin/all-location",
        hasChildren: false,
        icon: <FaMap className="text-teal-600" />,
      },
      {
        title: "Guides",
        route: "/dashboard/admin/guides",
        hasChildren: false,
        icon: <FaFile className="text-teal-600" />,
      },
      {
        title: "User",
        route: "/dashboard/admin/user",
        hasChildren: false,
        icon: <FaUsers className="text-teal-600" size={16} />,
      },
      {
        title: "Home",
        route: "/",
        hasChildren: false,
        icon: <FaHome className="text-teal-600" />,
      },
    ]
  : [
      {
        title: "Dashboard",
        route: "/dashboard/user/home",
        hasChildren: false,
        icon: <FaTachometerAlt className="text-teal-600" />,
      },
      {
        title: "All-location",
        route: "/dashboard/user/booking",
        hasChildren: false,
        icon: <FaMap className="text-teal-600" />,
      },
      {
        title: "Home",
        route: "/",
        hasChildren: false,
        icon: <FaHome className="text-teal-600" />,
      },
    ];
