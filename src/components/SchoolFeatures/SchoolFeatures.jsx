import React from "react";
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
  {
    icon: <FaChalkboardTeacher />,
    title: "Mathematics Lab",
    description:
      "Advanced tools and digital aids to strengthen logical thinking and problem-solving skills.",
  },
  {
    icon: <FaFlask />,
    title: "Science Laboratories",
    description:
      "Well-equipped Physics, Chemistry and Biology labs for practical-based learning.",
  },
  {
    icon: <FaUtensils />,
    title: "Hygienic Canteen",
    description:
      "Nutritious, balanced and hygienically prepared meals for students and staff.",
  },
  {
    icon: <FaBookOpen />,
    title: "Library & Resource Centre",
    description:
      "Extensive collection of books, journals and digital learning resources.",
  },
  {
    icon: <FaBasketballBall />,
    title: "Sports Infrastructure",
    description:
      "Indoor and outdoor sports facilities to promote fitness and teamwork.",
  },
  {
    icon: <FaMusic />,
    title: "Music Room",
    description:
      "Dedicated space for vocal and instrumental music education.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Art & Craft Studio",
    description:
      "Creative environment to nurture imagination and artistic expression.",
  },
  {
    icon: <FaBus />,
    title: "Safe Transportation",
    description:
      "GPS-enabled buses with trained staff ensuring student safety.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly Campus",
    description:
      "Green surroundings promoting environmental awareness and sustainability.",
  },
];

const Infrastructure = () => {
  return (
    <section className="relative bg-[#f7faf8] py-24 px-4 font-playfair overflow-hidden">
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.08),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(34,197,94,0.06),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl sm:text-5xl font-semibold text-yellow-400 mb-4">
            Our Infrastructure
          </h2>
          <div className="w-24 h-[2px] bg-yellow-400 mx-auto mb-5" />
          <p className="text-gray-600 text-base sm:text-lg">
            A thoughtfully designed campus that supports learning, creativity,
            fitness and overall growth.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div
          className="
            flex gap-6 overflow-x-auto pb-6 px-1
            snap-x snap-mandatory
            scrollbar-hide
          "
        >
          {infrastructureData.map((item, index) => (
            <div
              key={index}
              className="
                snap-start min-w-[300px] sm:min-w-[340px]
                bg-white/80 backdrop-blur-xl
                rounded-3xl p-8
                border border-gray-200
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_30px_60px_rgba(16,185,129,0.25)]
                hover:-translate-y-2
                transition-all duration-300
                group
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16 h-16 flex items-center justify-center rounded-2xl
                  bg-yellow-400 text-yellow-800 text-3xl mb-6
                  group-hover:bg-emerald-600 group-hover:text-white
                  transition-all duration-300
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* CTA */}
              <button
                className="
                  text-sm font-semibold text-emerald-600
                  inline-flex items-center gap-2
                  group-hover:text-emerald-700
                  transition-colors
                "
              >
                {/* Explore More → */}
              </button>
            </div>
          ))}
        </div>

        {/* Hint text */}
        <p className="text-center text-sm text-gray-400 mt-4">
          ← Scroll horizontally to explore →
        </p>

      </div>
    </section>
  );
};

export default Infrastructure;
