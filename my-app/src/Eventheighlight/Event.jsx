import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    id: 1,
    image: "../src/Eventheighlight/photos/image1.jpg",
    title: "Token 2049 Singapore – September 2024",
    description:
      "Immersing in the Future of Web3, Forging Global Alliances, and Driving the Next Wave of Blockchain Innovation!",
    size: "md:col-span-2 md:row-span-2", // Large image
  },
  {
    id: 2,
    image: "../src/Eventheighlight/photos/image2.jpg",
    title: "Token 2049 Dubai – April 2024",
    description:
      "Intelisync at Token 2049 Dubai, Connecting with Industry Leaders, and Accelerating the Evolution of Blockchain.",
  },
  {
    id: 3,
    image: "../src/Eventheighlight/photos/image3.jpg",
    title: "Cyber Security Exhibition",
    description:
      "Bridging Innovation and Strategy to Shape the Web3 Landscape, and Build a Decentralized Future.",
  },
  {
    id: 4,
    image: "../src/Eventheighlight/photos/image4.jpg",
    title: "Global Blockchain Congress",
    description:
      "Intelisync at Future Blockchain Summit, Collaborating with Visionaries, Exploring Disruptive Technologies, and Defining the Next Era of Blockchain.",
    size: "md:col-span-2", // Wide image
  },
];

function EventGrid() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClick = (event) => {
    // If the same image is clicked again, close the modal
    if (selectedEvent && selectedEvent.id === event.id) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(event);
    }
  };

  return (
    <div className="bg-[#0a0a0a] py-12 px-6 flex flex-col items-center">
      {/* Glowing Button */}
      <button className="mb-8 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg hover:scale-105 transition-all">
        Intelisync Event Highlights
      </button>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer ${event.size || ""}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(event)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white font-semibold text-lg">{event.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-[#1a1a1a] p-6 rounded-xl max-w-lg text-white relative shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inner click
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-white text-2xl hover:text-gray-400"
                onClick={() => setSelectedEvent(null)}
              >
                &times;
              </button>

              {/* Click Image to Close */}
              <motion.img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-md mb-4 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedEvent(null)}
              />

              <h3 className="text-xl font-semibold">{selectedEvent.title}</h3>
              <p className="text-gray-300 mt-2">{selectedEvent.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EventGrid;










