import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaFlask,
  FaUtensils,
  FaBookOpen,
  FaBasketballBall,
  FaMusic,
  FaPaintBrush,
  FaBus,
  FaLeaf,
} from "react-icons/fa";

const infrastructureData = [
  { icon: <FaChalkboardTeacher />, color: "from-red-500 via-red-400 to-red-300", title: "Maths Lab", description: "Modern tools & interactive learning to make maths exciting." },
  { icon: <FaFlask />, color: "from-yellow-500 via-amber-400 to-yellow-200", title: "Science Labs", description: "Spacious Physics, Chemistry & Biology labs for hands-on experiments." },
  { icon: <FaUtensils />, color: "from-orange-500 via-orange-400 to-yellow-300", title: "Canteen", description: "Nutritious, hygienic and tasty meals freshly prepared." },
  { icon: <FaBookOpen />, color: "from-green-600 via-green-400 to-green-200", title: "Library", description: "A huge collection of books, journals, and e-resources." },
  { icon: <FaBasketballBall />, color: "from-purple-600 via-purple-400 to-pink-300", title: "Sports Facilities", description: "Playgrounds & courts to encourage physical fitness." },
  { icon: <FaMusic />, color: "from-pink-600 via-pink-400 to-rose-300", title: "Music Room", description: "Dedicated space for classical & modern music practice." },
  { icon: <FaPaintBrush />, color: "from-indigo-600 via-indigo-400 to-blue-300", title: "Art & Craft Room", description: "Creative space for drawing, painting & sculpting." },
  { icon: <FaBus />, color: "from-teal-600 via-teal-400 to-green-300", title: "Transport", description: "Safe buses with GPS tracking & well-trained staff." },
  { icon: <FaLeaf />, color: "from-lime-600 via-lime-400 to-green-200", title: "Eco Garden", description: "Green initiative connecting students with nature." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 80 },
  }),
};

const Infrastructure = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20 font-playfair relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-6 
                     bg-gradient-to-r from-green-700 via-emerald-500 to-lime-500 
                     bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Infrastructure
        </motion.h2>

        <motion.p
          className="text-center max-w-3xl mx-auto mb-12 text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We provide{" "}
          <span className="text-green-600 font-semibold">
            world-class facilities
          </span>{" "}
          to encourage holistic learning, creativity, and all-round development.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {infrastructureData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg 
                         border border-green-100 hover:shadow-2xl hover:shadow-green-300/50 
                         transition-all duration-500 overflow-hidden"
            >
              {/* Glowing Background Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-200/40 to-transparent blur-xl"></div>

              {/* Icon */}
              <motion.div
                className={`relative z-10 mx-auto w-20 h-20 mb-4 rounded-full flex items-center justify-center
                            bg-gradient-to-br ${item.color} text-white text-4xl shadow-xl`}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 text-lg sm:text-xl font-bold text-green-700 text-center mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 text-center text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 mx-auto block border border-green-500 text-green-600 
                           px-5 py-2 rounded-full font-semibold text-xs sm:text-sm
                           hover:bg-green-500 hover:text-white shadow-md hover:shadow-lg transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
