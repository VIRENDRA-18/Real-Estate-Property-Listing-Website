import { Link } from "react-router-dom";

function Navbar({ searchText, setSearchText }) {
  return (
    <nav className="bg-slate-900">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-white text-lg font-semibold">
          HomeFinder
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search city..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-72 px-3 py-2 rounded-md outline-none text-sm"
        />


        {/* Menu */}
        <ul className="flex gap-5">
          <li>
            <Link to="/" className="text-white hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/properties" className="text-white hover:text-blue-400">
              Properties
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
