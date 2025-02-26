import React from "react";
import { motion } from "framer-motion";

const hiringSteps = [
  {
    title: "Apply for the job",
    description:
      "Tell us more about yourself in your CV and cover letter. This will help us understand your skills, experience, and interests better.",
    image: "./src/ourservices/hiring/photos/thirdphoto.png", 
  },
  {
    title: "Interview",
    description:
      'Usually comprises two parts - the "soft" part, where we discuss your personality and expectations, and the "tech" part with coding and case questions.',
    image: "./src/ourservices/hiring/photos/secondphoto.png",
  },
  {
    title: "Get an offer and welcome on board",
    description:
      "If everything goes well, we will extend an offer and welcome you on board! We are excited to have you on our team.",
    image: "./src/ourservices/hiring/photos/firstphoto.png",
  },
];

const Hiringinfo = () => {
  return (
    <div className="relative min-h-screen bg-black text-white px-10 py-16 overflow-hidden">
      {/* Animated Gradient at Top Left */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#30E3CA] to-transparent rounded-full blur-[100px] opacity-60"
        animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Title with Animation */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        How is the hiring process carried out?
      </motion.h2>

      {/* Hiring Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {hiringSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-black/40 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center border border-gray-700 hover:border-[#30E3CA] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hiringinfo;
