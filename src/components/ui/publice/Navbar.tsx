"use client";

import { useAuth } from "@/hooks/useAuth";
import useWitchList from "@/hooks/useWitchList";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaHotel,
  FaHeart,
  FaPhone,
  FaBars,
  FaTimes,
  FaUser,
  FaSignOutAlt,
  FaPlane,
  FaGlobe,
  FaCog,
  FaUserCircle,
  FaCompass,
} from "react-icons/fa";

const Navbar = () => {
  const { user, loading, signOutUser } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [wish] = useWitchList();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await signOutUser();
    } catch (error) {
      console.error(error);
    } finally {
      setLoggingOut(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/location", label: "Tours", icon: FaCompass },
    { href: "/hotels", label: "Hotels", icon: FaHotel },
    {
      href: "/Wishlist",
      label: "Wishlist",
      icon: FaHeart,
      badge: wish?.length || 0,
    },
    { href: "/contactus", label: "Contact", icon: FaPhone },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-white/20"
            : "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <FaPlane className="text-white w-4 h-4 lg:w-5 lg:h-5 transform rotate-45" />
                      </div>
                      <FaGlobe className="absolute -bottom-1 -right-1 text-amber-400 w-3 h-3 lg:w-4 lg:h-4 animate-pulse" />
                      <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
                <div className="ml-3">
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Travel Way
                  </span>
                  <div className="text-xs text-gray-500 font-medium hidden sm:block">
                    Explore the World
                  </div>
                </div>
              </Link>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative px-4 py-2.5 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-transparent hover:border-blue-100"
                >
                  <div className="flex items-center gap-2.5 text-gray-700 group-hover:text-indigo-600 transition-all duration-300">
                    <div className="relative">
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      {item.label === "Tours" && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-ping"></div>
                      )}
                    </div>
                    <span className="font-semibold text-sm">{item.label}</span>
                    {item.badge !== undefined && item.badge > 0 && (
                      <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full min-w-[22px] h-6 flex items-center justify-center animate-pulse shadow-lg">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  {/* Enhanced animated underline */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300 rounded-full"></div>
                </Link>
              ))}
            </div>

            {/* Enhanced Right side - User/Login */}
            <div className="flex items-center gap-3">
              {!loading && user ? (
                <div className="relative group">
                  <button className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="relative">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={user.displayName || "User"}
                          className="w-9 h-9 rounded-full border-2 border-transparent bg-gradient-to-r from-indigo-400 to-purple-400 p-0.5 object-cover"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                          <FaUser className="text-white w-4 h-4" />
                        </div>
                      )}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="hidden sm:block text-left">
                      <div className="text-sm font-semibold text-gray-800">
                        {user.displayName?.split(" ")[0] || "Traveler"}
                      </div>
                      <div className="text-xs text-gray-500">Welcome back!</div>
                    </div>
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt={user.displayName || "User"}
                            className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                            <FaUser className="text-white w-5 h-5" />
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-gray-900">
                            {user.displayName || "Traveler"}
                          </p>
                          <p className="text-sm text-gray-600 truncate max-w-[140px]">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 space-y-1">
                      <Link
                        href="/profile"
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-indigo-600 rounded-xl transition-all duration-200"
                      >
                        <FaUserCircle className="w-4 h-4" />
                        <span className="font-medium">Profile</span>
                      </Link>
                      <Link
                        href="/settings"
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-indigo-600 rounded-xl transition-all duration-200"
                      >
                        <FaCog className="w-4 h-4" />
                        <span className="font-medium">Settings</span>
                      </Link>
                      <div className="border-t border-gray-100 pt-2 mt-2">
                        <button
                          onClick={handleLogout}
                          disabled={loggingOut}
                          className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-600 rounded-xl transition-all duration-200 disabled:opacity-50"
                        >
                          <FaSignOutAlt className="w-4 h-4" />
                          <span className="font-medium">
                            {loggingOut ? "Signing out..." : "Sign Out"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link href="/register">
                    <button className="hidden sm:block bg-transparent border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 px-5 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                      Join Us
                    </button>
                  </Link>
                  <Link href="/login">
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                      <FaPlane className="w-3 h-3 transform rotate-45" />
                      <span>Login</span>
                    </button>
                  </Link>
                </div>
              )}

              {/* Enhanced Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 border border-transparent hover:border-blue-100"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              mobileMenuOpen
                ? "max-h-[500px] opacity-100 pb-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl mt-4 backdrop-blur-sm border border-white/20">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 mx-2 rounded-xl text-gray-700 hover:bg-white/80 hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <item.icon className="w-5 h-5" />
                      {item.label === "Tours" && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-ping"></div>
                      )}
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full min-w-[22px] h-6 flex items-center justify-center">
                      {item.badge}
                    </div>
                  )}
                </Link>
              ))}

              {/* Mobile user section */}
              {!loading && !user && (
                <div className="border-t border-gray-200/50 pt-4 px-2 space-y-2">
                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <button className="w-full bg-transparent border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300">
                      Join Travel Way
                    </button>
                  </Link>
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2">
                      <FaPlane className="w-3 h-3 transform rotate-45" />
                      Start Your Journey
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Background blur overlay for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-gradient-to-b from-black/30 to-black/20 backdrop-blur-md z-40 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-18"></div>
    </>
  );
};

export default Navbar;
