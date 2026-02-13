import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({ searchText, setSearchText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-white text-lg font-semibold">
          HomeFinder
        </h2>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search city..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-72 px-3 py-2 rounded-md outline-none text-sm"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5">
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
            <Link to="/agents" className="text-white hover:text-blue-400">
              Agents
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 py-4 flex flex-col gap-4">

          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search city..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-3 py-2 rounded-md outline-none text-sm"
          />

          <Link to="/" className="text-white" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/properties" className="text-white" onClick={() => setIsOpen(false)}>
            Properties
          </Link>
          <Link to="/agents" className="text-white" onClick={() => setIsOpen(false)}>
            Agents
          </Link>
          <Link to="/about" className="text-white" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="text-white" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
