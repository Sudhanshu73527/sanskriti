import React from "react";

const Schoolevents = () => {
  const events = [
    {
      id: 1,
      image: "/pri3.jpeg",
      title: "Academic Competitions",
    },
    {
      id: 2,
      image: "/pri21.jpeg",
      title: "Certificate Distribution",
    },
    {
      id: 3,
      image: "/pri23.jpeg",
      title: "Certificate Distribution",
    },
    {
      id: 4,
      image: "/pri6.jpeg",
      title: "Innovative Student Projects",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            School Events  <span className="text-yellow-400">& Activities</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our school regularly organizes educational, cultural, and sports
            events for students to support their overall development. We
            proudly provide certificates to recognize their participation and
            achievements. These activities help students stay motivated and
            encourage their interest in learning, creativity, and sports.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-yellow-400">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schoolevents;