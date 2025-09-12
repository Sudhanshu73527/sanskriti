import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import img1 from "../../assets/san1.jpg";
import img2 from "../../assets/san2.jpg";
import img3 from "../../assets/san3.jpg";
import img4 from "../../assets/san4.jpg";

const images = [img1, img2, img3, img4];

// const prompts = [
//   "Innovative Learning",
//   "Future Leaders",
//   "Smart Education",
//   "Excellence Every Day",
// ];

const Herosection = () => {
  const [current, setCurrent] = useState(0);
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   const promptTimer = setInterval(() => {
  //     setPromptIndex((prev) => (prev === prompts.length - 1 ? 0 : prev + 1));
  //   }, 2500);
  //   return () => clearInterval(promptTimer);
  // }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden font-outfit">
      {/* Background Slideshow */}
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt="Hero Slide"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold drop-shadow-xl leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_5px_rgba(255,255,0,0.7)]">
            Sanskriti Public School
          </span>
        </motion.h1>

        {/* Animated Prompts */}
        {/* <div className="mt-4 h-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={promptIndex}
              className="text-yellow-300 font-semibold text-xl md:text-3xl tracking-wide border-r-4 border-yellow-400 pr-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {prompts[promptIndex]}
            </motion.span>
          </AnimatePresence>
        </div> */}

        <motion.p
          className="mt-3 text-base md:text-xl max-w-xl md:max-w-2xl text-gray-200 leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Where education meets excellence. Building a brighter future, one step
          at a time.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-500 transition"
        >
          Explore More
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, i) => (
          <motion.span
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-yellow-400 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/917352205506"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center z-50"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </section>
  );
};

export default Herosection;
