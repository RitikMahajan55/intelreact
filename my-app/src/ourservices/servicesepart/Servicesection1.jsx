
import React from "react";
import { motion } from "framer-motion";

const Servicesection1 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">
      {/* Floating Glowing Effect */}
      <motion.div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#30E3CA] blur-[100px] opacity-80"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Animated Heading (Moved Slightly Up) */}
      <motion.h1
        className="text-6xl font-bold relative mb-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        CAREERS
      </motion.h1>

      {/* Bottom Left Content */}
      <div className="absolute bottom-10 left-10 text-left max-w-full px-4">
        {/* Hot Vacancies Section */}
        <motion.div
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          HOT VACANCIES
        </motion.div>

        {/* Job Listings */}
        <div className="flex flex-wrap gap-6">
          {["Full Stack Developer", "Frontend Developer"].map((job, index) => (
            <motion.button
              key={index}
              className="px-8 py-4 border-2 border-white rounded-lg text-xl font-semibold transition duration-300 hover:bg-white hover:text-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {job}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicesection1;


