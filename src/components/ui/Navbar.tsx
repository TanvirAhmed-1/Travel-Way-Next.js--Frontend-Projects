"use client";

import { useAuth } from "@/hooks/useAuth";
import useWitchList from "@/hooks/useWitchList";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaMapMarkedAlt, FaHotel, FaHeart, FaPhone, FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, loading, signOutUser } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wish] = useWitchList();

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
    { href: "/location", label: "Tours", icon: FaMapMarkedAlt },
    { href: "/hotels", label: "Hotels", icon: FaHotel },
    { href: "/Wishlist", label: "Wishlist", icon: FaHeart, badge: wish?.length || 0 },
    { href: "/contactus", label: "Contact", icon: FaPhone },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkedAlt className="text-white w-5 h-5" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Travel Way
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center animate-pulse">
                      {item.badge}
                    </div>
                  )}
                </div>
                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </Link>
            ))}
          </div>

          {/* Right side - User/Login */}
          <div className="flex items-center gap-4">
            {!loading && user ? (
              <div className="relative group">
                <button className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={user.photoURL || "/default-avatar.png"}
                      alt={user.displayName || "User"}
                      className="w-8 h-8 rounded-full border-2 border-gradient-to-r from-blue-400 to-purple-400 object-cover"
                    />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  <span className="hidden sm:block text-gray-700 font-medium">
                    {user.displayName?.split(' ')[0] || 'User'}
                  </span>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4 border-b border-gray-100">
                    <p className="font-semibold text-gray-900">{user.displayName || 'User'}</p>
                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={handleLogout}
                      disabled={loggingOut}
                      className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 disabled:opacity-50"
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      {loggingOut ? "Signing out..." : "Sign Out"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link href="/login">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Login
                </button>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center ml-auto">
                    {item.badge}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Background blur overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;