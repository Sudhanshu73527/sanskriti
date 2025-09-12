import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBookOpen,
  FaChalkboardTeacher,
  FaMedal,
  FaSmile,
} from "react-icons/fa";

const stats = [
  {
    number: "1500+",
    text: "Students currently enrolled across all grades",
    icon: FaUserGraduate,
  },
  {
    number: "80+",
    text: "Dedicated and highly qualified teachers",
    icon: FaChalkboardTeacher,
  },
  {
    number: "25+",
    text: "Co-curricular activities including Music, Dance & Sports",
    icon: FaBookOpen,
  },
  {
    number: "95%",
    text: "Board Exam Results Success Rate (Class X & XII)",
    icon: FaMedal,
  },
  {
    number: "100%",
    text: "Happy Parents & Positive Student Feedback",
    icon: FaSmile,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  }),
};

const StatsSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 top-10 left-10"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30 bottom-10 right-10"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16
                     bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our School at a Glance
        </motion.h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center text-center
                           border border-gray-100 hover:shadow-2xl relative overflow-hidden 
                           transition-all duration-500 hover:-translate-y-3"
              >
                {/* Glowing Background Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-green-100 to-emerald-50 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Icon with animations */}
                <motion.div
                  className="text-green-600 text-6xl mb-4 relative z-10"
                  animate={{ y: [0, -5, 0], rotate: [0, 2, -2, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon />
                </motion.div>

                {/* Number */}
                <motion.h3
                  className="text-4xl font-bold text-blue-900 relative z-10"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  {item.number}
                </motion.h3>

                {/* Text */}
                <p className="text-gray-600 text-base mt-3 leading-snug relative z-10">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
