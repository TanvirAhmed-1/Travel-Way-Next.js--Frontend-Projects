const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-20 py-10 shadow-inner">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-gray-700">
          {/* Services */}
          <nav>
            <h6 className="footer-title font-semibold mb-4 text-gray-900">Services</h6>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Branding</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Design</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Marketing</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Advertisement</a></li>
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="footer-title font-semibold mb-4 text-gray-900">Company</h6>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">About us</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Contact</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Jobs</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Press kit</a></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="footer-title font-semibold mb-4 text-gray-900">Legal</h6>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Terms of use</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Privacy policy</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Cookie policy</a></li>
            </ul>
          </nav>

          {/* Social */}
          <nav>
            <h6 className="footer-title font-semibold mb-4 text-gray-900">Social</h6>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Twitter</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Instagram</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Facebook</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">GitHub</a></li>
            </ul>
          </nav>

          {/* Explore */}
          <nav>
            <h6 className="footer-title font-semibold mb-4 text-gray-900">Explore</h6>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Features</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Enterprise</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Security</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Pricing</a></li>
            </ul>
          </nav>

          {/* Apps */}
          <nav>
            <h6 className="footer-title font-semibold mb-4 text-gray-900">Apps</h6>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Mac</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Windows</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">iPhone</a></li>
              <li><a href="#" className="link link-hover hover:text-indigo-600 transition">Android</a></li>
            </ul>
          </nav>
        </div>

        <div className="text-center text-gray-500 text-sm mt-10">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
