import { useState } from "react";

const badges = [
  { id: 1, src: "../src/Badges/photos/first.png", alt: "logo" },
  { id: 2, src: "../src/Badges/photos/second.png", alt: "Best Crypto Marketing" },
  { id: 3, src: "../src/Badges/photos/third.png", alt: "Top Rated ICO Marketing" },
  { id: 4, src: "../src/Badges/photos/fouth.png", alt: "Best Crypto & NFT Agencies" },
  { id: 5, src: "../src/Badges/photos/Designrush 1.png", alt: "Top Blockchain Development" },
];

export default function BadgesSection() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col items-center bg-black py-12">
      {/* Animated Button */}
      <button
        onClick={() => setClicked(!clicked)}
        className={`relative px-8 py-4 text-white text-xl font-semibold rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 shadow-md transition-all duration-300 ease-in-out 
          ${clicked ? "ring-4 ring-cyan-400 scale-110" : "hover:scale-105"}`}
      >
        Our Badges
      </button>

      {/* Badges Grid */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-12">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="p-6 transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <img
              src={badge.src}
              alt={badge.alt}
              className="w-36 md:w-44 mx-auto hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

