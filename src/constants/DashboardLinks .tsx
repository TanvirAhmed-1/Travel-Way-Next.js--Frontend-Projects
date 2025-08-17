import { FaFile, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoDocumentsSharp } from "react-icons/io5";

const admin = true;

export const DashboardLinks = admin
  ? [
      {
        title: "Dashboard",
        route: "/",
        hasChildren: false,
        icon: <FaTachometerAlt className="text-teal-600" />,
      },
      {
        title: "Data",
        route: null,
        hasChildren: false,
        icon: <FaGear className="text-teal-600" />,
      },
      {
        title: "Title2",
        route: null,
        hasChildren: true,
        icon: <FaFile className="text-teal-600" />,
      },
      {
        title: "Title3",
        route: null,
        hasChildren: true,
        icon: <IoDocumentsSharp className="text-teal-600" size={16} />,
      },
      {
        title: "Title4",
        route: null,
        hasChildren: true,
        icon: <FaUsers className="text-teal-600" size={16} />,
        subRoutes: [
          { title: "one", route: "#" },
          { title: "Two", route: "#" },
          { title: "three", route: "#" },
        ],
      },
    ]
  : // used section
    [
      {
        title: "Home",
        route: "/",
        hasChildren: false,
        icon: <FaTachometerAlt className="text-teal-600" />,
      },
      {
        title: "Data",
        route: null,
        hasChildren: false,
        icon: <FaGear className="text-teal-600" />,
      },
      {
        title: "Title2",
        route: null,
        hasChildren: true,
        icon: <FaFile className="text-teal-600" />,
      },
      {
        title: "Title3",
        route: null,
        hasChildren: true,
        icon: <IoDocumentsSharp className="text-teal-600" size={16} />,
      },
      {
        title: "Title4",
        route: null,
        hasChildren: true,
        icon: <FaUsers className="text-teal-600" size={16} />,
        subRoutes: [
          { title: "one", route: "#" },
          { title: "Two", route: "#" },
          { title: "three", route: "#" },
        ],
      },
    ];
