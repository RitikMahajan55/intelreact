import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-black p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold transition duration-300 hover:text-teal-400 hover:scale-105">
          Intel<span className="text-teal-400">sync</span>
        </a> 

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 bg-black px-6 py-2 rounded-full border border-gray-500">
          
          <li>
            <a href="/about" className="text-white transition duration-300 hover:text-teal-400 hover:scale-105">
              About
            </a>
          </li>

          {/* Our Services Dropdown */}
          <li className="relative">
            <div className="flex items-center space-x-2">
              {/* "Our Services" (Navigates to Page) */}
              <button
                onClick={() => navigate("/ourservice")}
                className="text-white transition duration-300 hover:text-teal-400 hover:scale-105 focus:outline-none"
              >
                Our Services
              </button>

              {/* Triangle Dropdown Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-white transition duration-300 transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                } hover:text-teal-400 focus:outline-none`}
              >
                ▼
              </button>
            </div>

            {/* Animated Transparent Dropdown Menu */}
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 5, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-0 mt-2 w-60 bg-white/10 border border-gray-700 rounded-xl shadow-lg overflow-hidden backdrop-blur-md"
              >
                <li>
                  <a
                    href="/services/artificial-intelligence"
                    className="block px-5 py-3 text-white transition duration-300 hover:bg-teal-400 hover:text-black"
                  >
                    Service Page
                  </a>
                </li>
                <li>
                  <a
                    href="/services/blockchain"
                    className="block px-5 py-3 text-white transition duration-300 hover:bg-teal-400 hover:text-black"
                  >
                   Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="/services/marketing"
                    className="block px-5 py-3 text-white transition duration-300 hover:bg-teal-400 hover:text-black"
                  >
                   Blockchain Development 
                  </a>
                </li>
                <li>
                  <a
                    href="/services/marketing"
                    className="block px-5 py-3 text-white transition duration-300 hover:bg-teal-400 hover:text-black"
                  >
                   Public Relation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/marketing"
                    className="block px-5 py-3 text-white transition duration-300 hover:bg-teal-400 hover:text-black"
                  >
                    Strategic Advisory
                  </a>
                </li>
                <li>
                  <a
                    href="/services/marketing"
                    className="block px-5 py-3 text-white transition duration-300 hover:bg-teal-400 hover:text-black"
                  >
                     Branding 
                  </a>
                </li>
              </motion.ul>
            )}
          </li>

          <li>
            <a href="#" className="text-white transition duration-300 hover:text-teal-400 hover:scale-105">
              Product
            </a>
          </li>
          <li>
            <a href="/careers " className="text-white transition duration-300 hover:text-teal-400 hover:scale-105">
              Careers 
            </a>
          </li>
          <li>
            <a href="#" className="text-white transition duration-300 hover:text-teal-400 hover:scale-105">
              Blog
            </a>
          </li>

          <li>
            <a href="#" className="text-white transition duration-300 hover:text-teal-400 hover:scale-105">
              Product
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <a
          href="#"
          className="hidden md:block px-6 py-2 border-2 border-teal-400 rounded-full text-white transition duration-300 hover:bg-teal-400 hover:text-black hover:scale-105 shadow-lg"
        >
          Contact
        </a>

        
      
        
      </div>
    </nav>
  );
}

export default Navbar;