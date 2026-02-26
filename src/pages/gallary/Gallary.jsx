import React, { useState } from "react";

// ===== IMPORT YOUR SCHOOL IMAGES HERE =====
import img1 from "../../assets/pri1.jpeg";
import img2 from "../../assets/pri2.jpeg";
import img3 from "../../assets/pri3.jpeg";
import img4 from "../../assets/pri4.jpeg";
import img5 from "../../assets/pri5.jpeg";
import img6 from "../../assets/pri6.jpeg";
import img7 from "../../assets/pri7.jpeg";
import img8 from "../../assets/pri8.jpeg";
import img9 from "../../assets/pri9.jpeg";
import img10 from "../../assets/pri10.jpeg";
import img11 from "../../assets/pri11.jpeg";
import img12 from "../../assets/pri12.jpeg";
import img13 from "../../assets/pri13.jpeg";
import img14 from "../../assets/pri14.jpeg";
import img15 from "../../assets/pri15.jpeg";
import img16 from "../../assets/pri16.jpeg";
import img17 from "../../assets/pri17.jpeg";
import img18 from "../../assets/pri18.jpeg";
import img19 from "../../assets/pri19.jpeg";
import img20 from "../../assets/pri20.jpeg";
import img21 from "../../assets/pri21.jpeg";


const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,img21
];

const Gallary = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            School <span className="text-yellow-400">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore memorable moments from our school activities, events,
            celebrations, and academic achievements. Our gallery reflects the
            vibrant learning environment and joyful experiences shared by our
            students and staff.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500 group"
            >
              <img
                src={img}
                alt={`School ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallary;