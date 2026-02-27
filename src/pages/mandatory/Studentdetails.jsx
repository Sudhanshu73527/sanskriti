import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaMale,
  FaFemale,
  FaChalkboard,
  FaUniversity,
} from "react-icons/fa";

const Studentdetails = () => {
  const classes = [
    {
      name: "K1 - K3",
      boys: 32,
      girls: 28,
      classroom:
        "Interactive foundational classroom with smart display, play-learning tools and activity zone.",
    },
    {
      name: "Prep - III",
      boys: 40,
      girls: 35,
      classroom:
        "Concept-based learning environment with digital board and structured seating layout.",
    },
    {
      name: "IV - V",
      boys: 38,
      girls: 34,
      classroom:
        "Modern classroom setup with projector, academic charts and group learning system.",
    },
    {
      name: "VI - VIII",
      boys: 45,
      girls: 41,
      classroom:
        "Senior wing classroom equipped with smart board, subject displays and performance tracking support.",
    },
  ];

  const totalStudents = classes.reduce(
    (acc, curr) => acc + curr.boys + curr.girls,
    0
  );

  const totalBoys = classes.reduce((acc, curr) => acc + curr.boys, 0);
  const totalGirls = classes.reduce((acc, curr) => acc + curr.girls, 0);

  return (
    <div className="min-h-screen bg-[#f4f7fb] py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
            Student Academic Overview
          </h1>
          <p className="text-gray-500 mt-3">
            Institutional class-wise strength and classroom infrastructure summary
          </p>
        </div>

        {/* TOP STATISTICS DASHBOARD */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-blue-600"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Students</p>
                <h2 className="text-3xl font-bold text-gray-800">
                  {totalStudents}
                </h2>
              </div>
              <FaUserGraduate className="text-blue-600 text-3xl" />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-green-600"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Boys</p>
                <h2 className="text-3xl font-bold text-gray-800">
                  {totalBoys}
                </h2>
              </div>
              <FaMale className="text-green-600 text-3xl" />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-pink-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Girls</p>
                <h2 className="text-3xl font-bold text-gray-800">
                  {totalGirls}
                </h2>
              </div>
              <FaFemale className="text-pink-500 text-3xl" />
            </div>
          </motion.div>

        </div>

        {/* CLASS TABLE SECTION */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-5">
            <h2 className="text-xl font-semibold">
              Class-wise Student Distribution
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                <tr>
                  <th className="p-4">Class</th>
                  <th className="p-4">Boys</th>
                  <th className="p-4">Girls</th>
                  <th className="p-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium text-gray-800">
                      {item.name}
                    </td>
                    <td className="p-4">{item.boys}</td>
                    <td className="p-4">{item.girls}</td>
                    <td className="p-4 font-semibold text-blue-600">
                      {item.boys + item.girls}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CLASSROOM INFRASTRUCTURE SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="flex items-center gap-3 mb-6">
            {/* <FaUniversity className="text-blue-600 text-2xl" /> */}
            <h2 className="text-2xl font-semibold text-gray-800">
              Classroom Infrastructure & Learning Environment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="border rounded-xl p-6 bg-gray-50 hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-3 text-blue-700 font-semibold">
                  <FaChalkboard />
                  {item.name}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.classroom}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-gray-600 leading-relaxed">
            Our institution ensures that every classroom is spacious,
            well-ventilated, and digitally enabled. Modern teaching tools,
            structured seating arrangements, academic displays, and safety
            measures are maintained to provide a disciplined and engaging
            educational atmosphere for holistic student development.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Studentdetails;