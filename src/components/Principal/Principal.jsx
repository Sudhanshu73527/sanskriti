import React from "react";
import { motion } from "framer-motion";
import principalImg from "../../assets/pricipal.jpg"; // Replace with your actual image path

const Principal = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-14 sm:py-20 px-4 font-playfair overflow-hidden">
      {/* Rising Suns on Right Corner */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 shadow-[0_0_50px_rgba(253,224,71,0.5)]"
          style={{
            top: `${8 + i * 5}vh`,
            right: `${5 + i * 3}%`, // shifting towards right
            width: `${80 - i * 10}px`,
            height: `${80 - i * 10}px`,
            opacity: 0.7 - i * 0.2,
          }}
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3 + i,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        ></motion.div>
      ))}

      {/* Floating Clouds */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full blur-md opacity-70"
          style={{
            top: `${8 + i * 10}vh`,
            left: i % 2 === 0 ? "-10%" : "80%",
            width: `${80 + i * 20}px`,
            height: `${30 + i * 10}px`,
            opacity: 0.5 + (i % 2) * 0.2,
          }}
          animate={{ x: ["0%", i % 2 === 0 ? "120%" : "-120%", "0%"] }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>
      ))}

      {/* Flying Birds */}
      {[...Array(3)].map((_, i) => (
        <motion.svg
          key={i}
          className="absolute w-28 h-16 opacity-70 text-gray-700"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ top: `${20 + i * 5}vh`, left: `${-40 - i * 30}px` }}
          animate={{
            x: ["-20%", "120%"],
            y: [0, i % 2 === 0 ? -5 : 5, 0],
          }}
          transition={{
            duration: 12 + i * 3,
            delay: i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.path
            d="M10 30 Q 20 10, 30 30 Q 40 10, 50 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M10 30 Q 20 10, 30 30 Q 40 10, 50 30",
                "M10 30 Q 20 5, 30 30 Q 40 5, 50 30",
              ],
            }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          />
        </motion.svg>
      ))}

      {/* Animated Flowers */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 bg-gradient-to-t from-green-600 to-pink-400 rounded-full"
          style={{
            left: `${i * 15 + 5}%`,
            width: "20px",
            height: "50px",
            transformOrigin: "bottom center",
          }}
          animate={{ rotate: [-5, 5, -5] }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      ))}

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-green-300 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-20 sm:w-28 h-20 sm:h-28 bg-emerald-300 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src={principalImg}
              alt="Principal"
              className="rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-4 border-green-100 w-64 sm:w-96 object-cover transform group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-200 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex flex-col justify-center text-center md:text-left bg-white/60 md:bg-transparent p-4 sm:p-0 rounded-2xl shadow-sm md:shadow-none"
        >
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-500 to-lime-500 bg-clip-text text-transparent mb-4 sm:mb-6 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Principal’s Message
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            “Education is not just about acquiring knowledge but about shaping
            character, sparking curiosity, and inspiring dreams. At{" "}
            <span className="font-semibold text-green-600">Our School</span>,
            we nurture a space where every child feels valued and empowered.”
          </motion.p>

          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our faculty focuses on holistic growth — building knowledge,
            creativity, critical thinking, and leadership qualities through
            engaging and innovative teaching.
          </motion.p>

          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Together, we prepare confident, compassionate, and future-ready
            individuals to contribute positively to society.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mx-auto md:mx-0 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Principal;
