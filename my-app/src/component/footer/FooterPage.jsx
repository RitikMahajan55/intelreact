import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-teal-500" />
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6">
          <h2 className="text-2xl font-bold">Inteli<span className="text-cyan-500">sync</span></h2>
          <p className="text-sm mt-3 text-gray-400">
            Intelisync leads the way in transformative solutions across blockchain, Web3, and AI,
            enabling businesses to thrive in the digital age. With a focus on decentralized
            technologies, custom blockchain development, and strategic growth marketing, we empower
            companies to innovate and lead.
          </p>
          <div className="flex space-x-3 mt-4">
            <div className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition">
              <FaFacebookF className="text-white" />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition">
              <FaInstagram className="text-white" />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition">
              <FaLinkedinIn className="text-white" />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition">
              <FaXTwitter className="text-white" />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition">
              <FaYoutube className="text-white" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 mb-6">
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="text-gray-400 space-y-2">
            <li>About</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Global Presence</li>
            <li>Contact</li>
            <li>FAQ’s</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6">
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Artificial Intelligence (AI)</li>
            <li>Growth Marketing</li>
            <li>Blockchain Services</li>
            <li>Public Relations</li>
            <li>Strategic Advisory</li>
            <li>Branding</li>
            <li>Community Management</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="font-semibold text-lg mb-3">Global Services</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Dubai - UAE | Intelisync</li>
            <li>India – Pune | Intelisync Technology Pvt Ltd</li>
            <li>Singapore | Intelisync Pvt Ltd</li>
            <li>Boston | USA</li>
            <li>London | United Kingdom</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
