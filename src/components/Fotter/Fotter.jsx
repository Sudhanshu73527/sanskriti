import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Fotter = () => {
  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-14 font-playfair relative overflow-hidden">
      {/* Decorative Glow Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-400 blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-400 blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Sanskriti PUBLIC SCHOOL
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We nurture young minds with education, values, and skills to help
            them grow into responsible global citizens.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-emerald-400 transition-all"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#admissions"
                className="hover:text-emerald-400 transition-all"
              >
                Admissions
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-emerald-400 transition-all"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-emerald-400 transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* What We Offer */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-300 mb-4">
            What We Offer
          </h3>
          <ul className="space-y-2">
            <li>Holistic Education</li>
            <li>Experienced Faculty</li>
            <li>Modern Classrooms</li>
            <li>Sports & Extracurriculars</li>
            <li>Digital Learning Resources</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-300 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-4">
            Subscribe to receive latest updates, events & school news.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full text-gray-900 focus:outline-none w-full"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full shadow-lg transition-all">
              Subscribe
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-5">
            <a
              href="#"
              className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-500 transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-500 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-500 transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-500 transition-all"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-700 mt-10 pt-4 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} Sanskriti PUBLIC SCHOOL . All rights
          reserved. | Powered by{" "}
          <span className="text-emerald-300 font-semibold">Webala</span>
        </p>
      </div>
    </footer>
  );
};

export default Fotter;
