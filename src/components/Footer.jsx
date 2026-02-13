import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-white text-xl font-semibold">
            HomeFinder
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Helping you discover the perfect home with trust,
            transparency and simplicity.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-white transition">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/agents" className="hover:text-white transition">
                Agents
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Contact
          </h4>
          <p className="text-sm text-slate-400">
            support@homefinder.com
          </p>
          <p className="text-sm text-slate-400 mt-3">
            +91 90000 00000
          </p>
          <p className="text-sm text-slate-400 mt-3">
            Mumbai, India
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} HomeFinder. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
