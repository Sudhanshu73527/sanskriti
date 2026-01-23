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
    <section className="relative bg-[#f7faf8] py-24 px-4 font-playfair">
      
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.06),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-5">
            Our Infrastructure
          </h2>
          <div className="w-20 h-[2px] bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Our campus is designed to provide a balanced environment that
            supports academic excellence, creativity, physical development,
            and overall well-being.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructureData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 
                         shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]
                         hover:border-emerald-300 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-xl 
                              bg-emerald-50 text-emerald-600 text-3xl mb-6
                              group-hover:bg-emerald-600 group-hover:text-white
                              transition-colors duration-300">
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
                className="text-sm font-semibold text-emerald-600 
                           border-b-2 border-emerald-500 pb-1
                           hover:text-emerald-700 hover:border-emerald-700
                           transition-colors"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;
