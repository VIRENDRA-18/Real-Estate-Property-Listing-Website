import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ searchText, setSearchText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-white text-lg font-semibold">
          HomeFinder
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search city..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-64 px-3 py-2 rounded-md outline-none text-sm"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400 transition"
              }
            >
              Properties
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/agents"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400 transition"
              }
            >
              Agents
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400 transition"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400 transition"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-4 flex flex-col gap-4">

          <input
            type="text"
            placeholder="Search city..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-3 py-2 rounded-md outline-none text-sm"
          />

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-400"
          >
            Home
          </NavLink>

          <NavLink
            to="/properties"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-400"
          >
            Properties
          </NavLink>

          <NavLink
            to="/agents"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-400"
          >
            Agents
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-400"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-400"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
