import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="min-h-screen">
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* 🔴 THIS LINE MUST BE EXACT */}
        <Route
          path="/properties"
          element={<Properties searchText={searchText} />}
        />
        <Route path="/agents" element={<Agents />} />


        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
