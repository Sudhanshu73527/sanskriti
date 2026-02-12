import React from "react";
import { Eye, Target } from "lucide-react";

const Visionmission = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-yellow-700 text-sm font-semibold mb-3">
            Our Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Vision & Mission
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Vision Card */}
          <div className="group bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 border border-yellow-100">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-100 mb-6 group-hover:scale-110 transition">
              <Eye className="text-yellow-700 w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              To shape confident, capable, and responsible individuals who
              strive for excellence in academics and character. We envision
              a learning environment where innovation, integrity, and
              leadership grow together.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 border border-yellow-100">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-100 mb-6 group-hover:scale-110 transition">
              <Target className="text-yellow-700 w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              To provide a progressive and inclusive educational atmosphere
              that fosters academic excellence, creativity, discipline,
              and strong moral values. Our mission is to empower students
              to succeed in an ever-evolving world.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Visionmission;
