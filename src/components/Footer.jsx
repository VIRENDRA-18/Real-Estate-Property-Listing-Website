import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold">
            HomeFinder
          </h3>
          <p className="mt-3 text-sm">
            Find verified properties for sale and rent across top Indian cities.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Contact
          </h4>
          <p className="text-sm">Email: support@homefinder.com</p>
          <p className="text-sm mt-1">Phone: +91 90000 00000</p>
        </div>
      </div>

      <div className="border-t border-slate-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} HomeFinder. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
