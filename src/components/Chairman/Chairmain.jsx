import React from "react";
import { motion } from "framer-motion";
import principalImg from "../../assets/dir.jpg"; // Replace with your actual image path

const floating = (x = 0, y = 20, duration = 6) => ({
  animate: { y: [0, y, 0], x: [0, x, 0], opacity: [0.3, 0.6, 0.3] },
  transition: { repeat: Infinity, duration, ease: "easeInOut" },
});

const Principal = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-14 sm:py-20 px-4 font-playfair overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-green-300 rounded-full blur-3xl opacity-40"
        {...floating(10, 20, 6)}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 sm:w-28 h-20 sm:h-28 bg-emerald-300 rounded-full blur-3xl opacity-40"
        {...floating(-10, -20, 8)}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-10 h-10 bg-green-200 rounded-full blur-xl opacity-30"
        {...floating(15, 25, 5)}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-lime-200 rounded-full blur-md opacity-40"
        {...floating(-20, 30, 7)}
      />
      <motion.div
        className="absolute top-20 right-1/3 w-12 h-12 bg-green-100 rounded-full blur-lg opacity-40"
        {...floating(20, 15, 4)}
      />

      {/* Tiny sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-50"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative flex justify-center"
        >
          {/* Vertical Badge (Like Your Example) */}
          <div className="absolute -left-6 top-6 sm:-left-10 sm:top-8 bg-blue-900 text-white px-3 sm:px-4 py-6 sm:py-8 rounded-tr-3xl rounded-br-3xl shadow-lg flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-4xl font-extrabold">10+</span>
            <span className="text-xs sm:text-sm leading-tight text-center">
              Years <br /> of <br /> Experience
            </span>
          </div>

          <div className="relative group">
            <img
              src={principalImg}
              alt="Chairman"
              className="rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-4 border-green-100 w-64 sm:w-96 object-cover transform group-hover:scale-105 transition-all duration-500"
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
          className="flex flex-col justify-center text-center md:text-left bg-white/70 md:bg-transparent p-4 sm:p-0 rounded-2xl shadow-sm md:shadow-none"
        >
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-500 to-lime-500 bg-clip-text text-transparent mb-4 sm:mb-6 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Chairman’s Message
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            “Our vision is to build an institution where learning is not limited
            to textbooks but becomes a lifelong journey of discovery and growth.
            At <span className="font-semibold text-green-600">Our School</span>,
            we aim to empower every child to become a leader, a thinker, and a
            change-maker.”
          </motion.p>

          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            As Chairman, my commitment is to create a future-ready ecosystem
            that blends academic excellence with innovation, values, and global
            exposure. We are preparing young minds not just for careers, but for
            life.
          </motion.p>

          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Together with our teachers, parents, and community, we are shaping a
            generation that will dream big, work hard, and create a positive
            impact on society.
          </motion.p>

          {/* Animated Prompt for Mobile */}
          <motion.div
            className="text-green-700 text-sm italic mb-4 block md:hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            👇 Scroll to read more
          </motion.div>

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
