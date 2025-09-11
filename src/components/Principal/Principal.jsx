import React from "react";
import { motion } from "framer-motion";
import principalImg from "../../assets/pricipal.jpg"; // Replace with your actual image path

const Principal = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-20 px-4 font-playfair overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-green-300 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-28 h-28 bg-emerald-300 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section with Animation */}
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
              className="rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-4 border-green-100 w-80 sm:w-96 object-cover transform group-hover:scale-105 transition-all duration-500"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-200 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex flex-col justify-center"
        >
          <motion.h2
            className="text-2xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-500 to-lime-500 bg-clip-text text-transparent mb-6 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Message from Our Principal
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            “Education is not just about acquiring knowledge, but about building
            character, nurturing curiosity, and inspiring young minds to dream
            big. At <span className="font-semibold text-green-600">Our School</span>, 
            we strive to create an environment where every child feels safe,
            valued, and motivated to explore their fullest potential.”
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our dedicated faculty nurtures not only academic brilliance but also
            emotional intelligence, resilience, and leadership qualities. We
            encourage creativity, critical thinking, and collaboration through
            innovative teaching practices.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Together, let us shape a generation of confident, compassionate, and
            future-ready individuals who contribute positively to the world.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Principal;
