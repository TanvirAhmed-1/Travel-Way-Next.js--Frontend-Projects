"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const Navbar = () => {
  const { user, loading } = useAuth();

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="text-base font-medium hover:text-yellow-500"
        >
          Home
        </Link>
      </li>
      <li>
        <Link href="/location" className="text-base font-medium hover:text-yellow-500">
          Tours
        </Link>
      </li>
      <li>
        <Link href="#" className="text-base font-medium hover:text-yellow-500">
          Hotels
        </Link>
      </li>
      <li>
        <Link href="#" className="text-base font-medium hover:text-yellow-500">
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="navbar w-full mx-auto px-4 py-1">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow bg-white rounded-box w-52 space-y-2"
            >
              {navLinks}
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost text-2xl font-pacifico text-black">
            Travel Way
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
        </div>

        <div className="navbar-end gap-3 items-center">
          {!loading && user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt={user.displayName || "User Avatar"}
                      src={user.photoURL || "/default-avatar.png"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-50 mt-3 w-40 p-2 shadow"
                >
                  <li>
                    <span className="font-semibold px-2">{user.displayName || user.email}</span>
                  </li>
                  <li>
                    <button className="w-full text-left px-2 py-1 hover:bg-gray-200">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link href="/login">
              <button className="py-2 px-4 rounded-xl bg-sky-400 border-none text-white hover:bg-sky-700">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
