import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 mt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 sm:px-6 sm:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              TravelPro
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Discover the world's most beautiful destinations with our curated
              travel experiences. Creating memories that last a lifetime.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <FaPhone className="w-4 h-4" />
                </div>
                <span className="text-sm">+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span className="text-sm">info@travelpro.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="bg-pink-600 p-2 rounded-lg">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About Us", "Our Tours", "Contact", "Blog", "Reviews", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block group"
                    >
                      <span className="border-b border-transparent group-hover:border-blue-400 transition-all duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Tour Packages",
                "Hotel Booking",
                "Flight Booking",
                "Travel Insurance",
                "Visa Assistance",
                "Group Tours",
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

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-red-400 rounded-full"></div>
              Stay Connected
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Subscribe to get special offers, free giveaways, and exclusive
              deals.
            </p>

            {/* Newsletter Form */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl font-medium transition-all duration-300 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 text-sm mb-4">Follow us</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: FaFacebook, color: "hover:bg-blue-600", label: "Facebook" },
                  { icon: FaTwitter, color: "hover:bg-sky-500", label: "Twitter" },
                  { icon: FaInstagram, color: "hover:bg-pink-600", label: "Instagram" },
                  { icon: FaLinkedin, color: "hover:bg-blue-700", label: "LinkedIn" },
                  { icon: FaGithub, color: "hover:bg-gray-700", label: "GitHub" },
                ].map(({ icon: Icon, color, label }) => (
                  <a
                    key={label}
                    href="#"
                    className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl text-gray-300 hover:text-white ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-gray-300 text-sm flex items-center gap-2 flex-wrap justify-center">
            <span>&copy; {currentYear} TravelPro. Made with</span>
            <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
            <span>in Bangladesh. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
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
