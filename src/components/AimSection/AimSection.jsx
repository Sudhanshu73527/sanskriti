import React from "react";

const AimSection = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-blue-700 tracking-tight mb-5">
            WE AIM: TO PREPARE THE STUDENT
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            to be intellectually competent to promote the development of
            intellectual skills and mastery of the academic requirements.
          </p>
          <div className="w-16 h-[3px] bg-gradient-to-r from-gray-900 to-gray-500 mx-auto mt-7 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.15)]">

          {/* WE BELIEVE */}
          <div className="group relative bg-[#18b5a4] p-14 text-center text-white transition-all duration-500 hover:scale-[1.02]">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></div>

            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6">
              WE BELIEVE
            </h3>

            <p className="text-[15px] leading-relaxed text-white/95">
              In a holistic approach to education that fosters intellectual
              curiosity, emotional resilience, and respect for all individuals,
              enabling students to become thoughtful and responsible citizens.
            </p>

            {/* Watermark Icon */}
            <div className="absolute bottom-6 right-6 text-white/15 text-7xl animate-bounce">
              💡
            </div>
          </div>

          {/* WE PLEDGE */}
          <div className="group relative bg-[#1f2a3d] p-14 text-center text-white transition-all duration-500 hover:scale-[1.02]">

            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></div>

            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6">
              WE PLEDGE
            </h3>

            <p className="text-[15px] leading-relaxed text-white/95">
              To nurture students' self-worth, dignity, and a strong sense of
              fairness. We encourage respect for diversity and empathy for all,
              creating a safe and inclusive environment.
            </p>

            <div className="absolute bottom-6 right-6 text-white/15 text-7xl animate-bounce">
              ⚙️
            </div>
          </div>

          {/* WE WANT */}
          <div className="group relative bg-[#ef4444] p-14 text-center text-white transition-all duration-500 hover:scale-[1.02]">

            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></div>

            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6">
              WE WANT
            </h3>

            <p className="text-[15px] leading-relaxed text-white/95">
              Our students to be confident, innovative, and kind. We aim to
              instill leadership qualities, social responsibility, and a
              lifelong love for learning.
            </p>

            <div className="absolute bottom-6 right-6 text-white/15 text-7xl animate-bounce">
              👍
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AimSection;
