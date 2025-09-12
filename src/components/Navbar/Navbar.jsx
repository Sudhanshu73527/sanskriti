import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLock, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/sanslogo1.png"; // replace with your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT US",
    "ACADEMICS",
    "ADMISSION",
    "FACILITIES",
    "GALLERY",
    "EXTRA CURRICULUM",
    "MANDATORY PUBLIC DISCLOSURE",
  ];

  return (
    <header className="w-full shadow-md font-outfit  top-0 z-50">
      {/* 🔹 Top Bar (Desktop only) */}
      <div className="bg-green-900 text-white text-xs md:text-sm hidden  md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Left side */}
          <div className="flex items-center sticky top-0 space-x-6">
            <span className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 99348 34981 / 7352205506</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <span>sanskritischoolbegusarai@.in</span>
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            <span className="cursor-pointer hover:text-yellow-400 transition">
              CBSE
            </span>
            <span className="flex items-center space-x-2 cursor-pointer hover:text-yellow-400 transition">
              <FaLock /> <span>Login</span>
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black font-semibold px-5 py-1 rounded-sm shadow hover:bg-yellow-500 transition"
            >
              APPLY NOW
            </motion.button>
          </div>
        </div>
      </div>

      {/* 🔹 Middle Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo + School name (for mobile) */}
          <div className="flex items-center space-x-3">
            <motion.img
              src={logo}
              alt="School Logo"
              className="h-15 md:h-30 w-auto"
              whileHover={{ rotate: 5, scale: 1.05 }}
            />
            {/* Mobile school name */}
            <h1 className="text-lg font-semibold text-green-800 uppercase md:hidden">
              Sanskriti PUBLIC SCHOOL
            </h1>
          </div>

          {/* Full School Name (Desktop only) */}
          <div className="text-center flex-1 hidden md:block">
            <h1 className="text-2xl md:text-4xl font-extrabold text-green-800 uppercase tracking-wide">
              Sanskriti PUBLIC SCHOOL
            </h1>
            <h2 className="text-lg md:text-2xl font-bold text-purple-800 tracking-wider">
              MANJHAUL, BEGUSARAI
            </h2>
            <p className="text-yellow-500 font-bold text-2xl">
              School No.: 65881, Affiliation Code - 330888
            </p>
          </div>

          {/* Contact Right Side (Desktop only) */}
          <div className="hidden lg:flex flex-col items-start space-y-2 text-green-900">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-500" />
              <span>+91 99348 34981</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-500" />
              <span>7352205506</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-500" />
              <span>sanskritischoolbegusarai@.in</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-green-800 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 🔹 Main Navbar (Desktop only) */}
      <nav className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 shadow-md hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-between text-white font-semibold text-sm md:text-base">
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                className="relative px-3 py-3 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                <span>{item}</span>
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 🔹 Mobile Menu (ONLY Links) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 w-3/4 h-full bg-green-900 text-white shadow-lg z-50"
          >
            <div className="p-6 space-y-6">
              {/* Logo inside menu */}
              <img src={logo} alt="School Logo" className="h-12 mb-6" />

              {/* Nav Links only */}
              <ul className="space-y-4">
                {navItems.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 8 }}
                    className="cursor-pointer text-lg border-b border-green-700 pb-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
