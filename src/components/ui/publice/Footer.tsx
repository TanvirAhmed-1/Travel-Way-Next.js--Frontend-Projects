import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaPlane,
  FaGlobe,
  FaCompass,
  FaMountain,
  FaHotel,
  FaPassport,
  FaCamera,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 mt-20 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-blue-300/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border-2 border-purple-300/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-pink-300/20 rounded-full"></div>
      </div>

      {/* Floating Travel Icons */}
      <div className="absolute inset-0 opacity-5">
        <FaPlane className="absolute top-20 right-32 text-6xl transform rotate-45 animate-pulse" />
        <FaMountain className="absolute bottom-32 left-32 text-5xl animate-pulse" />
        <FaCompass
          className="absolute top-40 left-16 text-4xl animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <FaGlobe className="absolute bottom-16 right-24 text-7xl animate-pulse" />
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-88 h-88 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative mr-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaPlane className="text-white w-5 h-5 transform rotate-45" />
                </div>
                <FaGlobe className="absolute -bottom-1 -right-1 text-amber-400 w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Travel Way
                </h2>
                <p className="text-blue-300 text-sm font-medium">
                  Explore the World
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Discover breathtaking destinations and create unforgettable
              memories with our expertly curated travel experiences. Your
              journey to the world starts here.
            </p>

            {/* Enhanced Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group hover:text-white transition-colors duration-300">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="w-4 h-4" />
                </div>
                <span className="text-sm">+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 group hover:text-white transition-colors duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span className="text-sm">hello@travelway.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 group hover:text-white transition-colors duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-indigo-400 to-blue-400 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", icon: FaCompass },
                { name: "Our Tours", icon: FaMountain },
                { name: "Hotels", icon: FaHotel },
                { name: "Travel Blog", icon: FaCamera },
                { name: "Reviews", icon: FaHeart },
                { name: "Help Center", icon: FaPassport },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-flex items-center gap-2 group"
                  >
                    <item.icon className="w-3 h-3 text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-indigo-400 transition-all duration-300">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Luxury Tour Packages",
                "Premium Hotel Booking",
                "Flight Reservations",
                "Travel Insurance",
                "Visa Assistance",
                "Group Adventures",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block group"
                  >
                    <span className="border-b border-transparent group-hover:border-purple-400 transition-all duration-300">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
              Travel Updates
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Get exclusive travel deals, destination guides, and insider tips
              delivered to your inbox.
            </p>

            {/* Enhanced Newsletter Form */}
            <div className="mb-8">
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                  />
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                  <FaPaperPlane className="w-4 h-4" />
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <p className="text-gray-300 text-sm mb-4 font-medium">
                Join Our Travel Community
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: FaFacebook,
                    color: "hover:bg-blue-600",
                    gradient: "from-blue-500 to-blue-700",
                    label: "Facebook",
                  },
                  {
                    icon: FaTwitter,
                    color: "hover:bg-sky-500",
                    gradient: "from-sky-400 to-sky-600",
                    label: "Twitter",
                  },
                  {
                    icon: FaInstagram,
                    color: "hover:bg-pink-600",
                    gradient: "from-pink-500 to-red-500",
                    label: "Instagram",
                  },
                  {
                    icon: FaLinkedin,
                    color: "hover:bg-blue-700",
                    gradient: "from-blue-600 to-blue-800",
                    label: "LinkedIn",
                  },
 
                ].map(({ icon: Icon, color, gradient, label }) => (
                  <a
                    key={label}
                    href="#"
                    className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl text-gray-300 hover:text-white ${color} transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/20 hover:border-white/40`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative my-4">
          <div className="border-t border-white/20"></div>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-full">
              <FaGlobe
                className="text-white w-8 h-8 animate-spin"
                style={{ animationDuration: "20s" }}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-gray-300 text-sm flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span>&copy; {currentYear} Travel Way. Crafted with</span>
            <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
            <span>for travelers worldwide. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Refund Policy",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:underline decoration-indigo-400"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
