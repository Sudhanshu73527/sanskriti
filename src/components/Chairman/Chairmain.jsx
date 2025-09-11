import React from "react";
import { motion } from "framer-motion";
import chairmanImg from "../../assets/dir.jpg"; // Replace with your actual chairman image path

const Chairman = () => {
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

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center gap-10">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-500 to-lime-500 bg-clip-text text-transparent drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Message from Our Chairman
        </motion.h2>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative group"
        >
          <img
            src={chairmanImg}
            alt="Chairman"
            className="rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-4 border-green-100 w-72 sm:w-96 object-cover mx-auto transform group-hover:scale-105 transition-all duration-500"
          />
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-200 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            “At <span className="font-semibold text-green-600">Our School</span>, 
            we envision an institution that nurtures young minds and inspires them 
            to be future leaders. Education, to us, is not just about academics but 
            about shaping character, values, and a sense of purpose.”
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our aim is to create an environment where students are encouraged to 
            dream big, think critically, and act with compassion. We focus on 
            holistic development, balancing intellectual growth with emotional 
            well-being and moral strength.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            With the support of our dedicated teachers, parents, and community, 
            we strive to build a school that stands as a beacon of excellence, 
            innovation, and integrity.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Chairman;
