import React from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const Searchpage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-black text-white p-10 relative">
      {/* Animated Search Box at Top with Thin Border */}
      <motion.div
        className="absolute top-10 w-[60%] max-w-[700px] flex items-center border-b border-[#30E3CA] pb-2 bg-black rounded-lg shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white text-lg outline-none flex-grow px-4 py-2 placeholder-gray-400"
        />
        <FaSearch className="text-[#30E3CA] text-xl cursor-pointer mx-3" />
      </motion.div>
    </div>
  );
};

export default Searchpage;

