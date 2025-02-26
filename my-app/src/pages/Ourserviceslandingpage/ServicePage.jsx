import React, { useState } from "react";
import { motion } from "framer-motion";


import first1 from "./photos/first1.png";
import second2 from "./photos/second2.png";
import third3 from "./photos/third3.png";
import fourth4 from "./photos/fourth4.jpg";
import fifth5 from "./photos/fifth5.jpg";
import six6 from "./photos/six6.jpg";
import seven7 from "./photos/seven7.png";
import eight8 from "./photos/eight8.png";
import nine9 from "./photos/nine9.png";


import demo1 from "../../pages/Ourserviceslandingpage/photos/demo1.png";
import blog2 from "../../pages/Ourserviceslandingpage/photos/blog2.png";
import blog3 from "../../pages/Ourserviceslandingpage/photos/blog3.png";
import logo from "../../pages/Ourserviceslandingpage/photos/intelsynclogo.png";

import flag from "../../pages/Ourserviceslandingpage/photos/flag.png";


const ServicePage = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const [isExpanded, setIsExpanded] = useState(false);

  

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const services = [
    {
      title: "Development & Integration",
      description:
        "Achieve optimal performance, transparency, and security in your decentralized financial application with our specialized DeFi development services, tailored to drive success in the rapidly evolving DeFi ecosystem.",
    },
    {
      title: "Non-Fungible Token(NFT)",
      description:
        "NFTs (Non-Fungible Tokens) represent ownership and authenticity in the digital world, and our services ensure your assets are one-of-a-kind, high in demand, and fully protected.",
    },
    {
      title: "Security Token Offering Solution",
      description:
        "Transform real-world assets into digital tokens to achieve your security token offering goals with our expert guidance. We’ll provide you with robust liquidity options and open doors to global securities trading.",
    },
    {
      title: "Play to Earn Game Development",
      description:
        "As a top play-to-earn game development provider, we focus on delivering unique and immersive gaming experiences that transform how players engage with and enjoy the gaming world.",
    },
    {
      title: "DeFi Solutions Development",
      description:
        "Achieve optimal performance, transparency, and security in your decentralized financial application with our specialized DeFi development services, tailored to drive success in the rapidly evolving DeFi ecosystem.",
    },
    {
      title: "Enterprise Blockchain Development",
      description:
        "Achieve optimal performance, transparency, and security in your decentralized financial application with our specialized DeFi development services, tailored to drive success in the rapidly evolving DeFi ecosystem.",
    },
    {
      title: "Cryptocurrency Wallet Development",
      description:
        "Deliver an exceptional experience to your users with intuitive, feature-loaded cryptocurrency wallets that ensure the highest security standards, offering smooth and reliable performance on both mobile and desktop platforms.",
    },
    {
      title: "Smart Contract Development & Audit",
      description:
        "With our smart contract development and audit services, you can trust that we’ll enhance performance by automating transactions, boosting security, and reducing costs.",
    },
    {
      title: "Expert Blockchain Consulting & Strategy",
      description:
        "Empower your business with innovative blockchain solutions through our expert consulting services. We identify high-impact use cases, implement scalable strategies, and streamline adoption driving growth, competitive edge in today’s digital landscape.",
    },
  ];


  const brands = [
    { id: 1, name: "IDEEZA", image: first1 },
    { id: 2, name: "IDEEZA", image: second2 },
    { id: 3, name: "IDEEZA", image: third3 },
    { id: 4, name: "IDEEZA", image: fourth4 },
    { id: 5, name: "IDEEZA", image: fifth5 },
    { id: 6, name: "IDEEZA", image: six6 },
    { id: 7, name: "IDEEZA", image: seven7 },
    { id: 8, name: "IDEEZA", image: eight8 },
    { id: 9, name: "IDEEZA", image: nine9 },

  ];
  

  const blogPosts = [
    {
      title: "Empowering your business with innovative Blockchain, Web3, and AI solotions for a digital future.",
      image: demo1,
      content:
        "The digital landscape is evolving rapidly, and with it comes the rise of Web 3.0 development. The terms Internet and Web are often used interchangeably, but they hold distinct meanings. As technology advances, we transition from static, text-heavy Web 1.0 to interactive Web 2.0, and now to a decentralized, user-centric Web 3.0. Web 3.0 marks a significant leap forward by integrating decentralized systems, smart contracts, AI, and blockchain to create a secure and transparent digital environment.",
    },
    {
      title: "How to Create a Successful Meme Coin Exchange in 2025?",
      image: blog2,
      content:
        "Quirky charm, viral potential, affordability, and 100x moonshot potential—this confluence of technology and entertainment is capturing millions’ imaginations (and wallets). Once dismissed as frivolous internet experiments, meme coins have carved a niche in the digital economy, boasting vibrant communities and significant market capitalizatio Web 3.0 marks a significant leap forward by integrating decentralized systems, smart contracts, AI, and blockchain to create a secure and transparent digital environment.",
        
    },
    {
      title: "Web3 Development Services for Business Evolution?",
      image: blog3,
      content:
        "Currently, groundbreaking technologies like Web3, Blockchain, Metaverse, NFTs, and cryptocurrencies are poised to revolutionize industries. The internet, presently dominated by Web 2.0, has thrived with cloud computing and social media platforms. However, 2023 and beyond mark the advent of Web3 a decentralized ecosystem with immense potential to reshape conventional business models. As internet meme culture and social media buzz continue to inspire new markets, dedicated platforms will emerge to support this ecosystem.",
    },
  ];
  
  

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <h1 className="text-4xl font-bold">Blockchain Development solutions</h1>
        <p className="mt-2 text-lg">Simplify Your Path to Blockchain Success</p>
        <button className="mt-4 px-6 py-2 text-black bg-white rounded-full shadow-lg hover:bg-gray-400">
          Book a demo
        </button>
      </section>

      {/* Service Details */}

      <section className="bg-black text-white min-h-auto px-6 py-16">
        <nav className="text-gray-400 text-sm mb-4">
          <span className="text-white">Homepage</span> &gt;{" "}
          <span className="text-white">Services</span> &gt;{" "}
          <span className="text-white">Blockchain Development</span>
        </nav>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold leading-tight">
          Unlock Greater Business Performance through Blockchain Collaboration
        </h1>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto text-left">
          <p className="mt-6 text-lg text-gray-400 leading-relaxed text-left">
            As digital transformation reshapes industries, businesses have
            endless opportunities to leverage advanced technologies for growth.
            Blockchain stands at the forefront of this change, offering a highly
            secure and transparent method for managing data and transactions.
            From enhancing financial systems to optimizing supply chains,
            blockchain’s potential is vast.
          </p>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed text-left">
            Our blockchain development services provide tailor-made solutions to
            elevate your business. With a team of experienced full-stack
            developers, we design and implement decentralized platforms that
            boost efficiency and innovation. Let us transform your vision into
            reality quickly, cost-effectively, and seamlessly.
          </p>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed text-left">
            We work closely with clients to understand their unique needs,
            delivering scalable solutions that drive both short-term results and
            long-term success. By integrating blockchain into your business,
            you’ll experience increased transparency, reduced costs, and
            enhanced security.
          </p>
        </section>
      </section>

      {/* Services */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-teal-400">
            Empower Your Vision with Innovative Blockchain Solutions
          </h2>
          <p className="mt-4 text-gray-400">
            Unlock new opportunities with blockchain technology. Our expert
            services cover every aspect of blockchain development, from strategy
            and implementation to optimization, ensuring your project stands out
            in today's decentralized world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {/* <div className="grid grid-cols-auto-fit minmax(120px, 1fr) gap-6"> */}

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-teal-400 shadow-md hover:shadow-lg transition flex flex-col items-start"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

     
{/* Trusted by Top Innovators */} 

<section className="container mx-auto px-8 py-16 text-center text-white">
  <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-2">
    Trusted by Top Innovators
  </h2>
  <div className="mt-6 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 relative">
    {brands.map((brand, index) => (
      <div
        key={brand.id}
        className={`flex justify-center items-center p-6 mx-auto my-6 relative w-full h-full
          ${index < brands.length - 3 ? "after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-gray-700 after:bottom-0 after:left-0" : ""}
          ${index % 3 !== 2 ? "before:absolute before:content-[''] before:h-full before:w-[1px] before:bg-gray-700 before:right-0 before:top-0" : ""}
        `}
      >
        <img src={brand.image} alt={brand.name} className="h-14 max-w-[140px]" />
      </div>
    ))}
  </div>
</section>


      {/* Blog Section */}

      <section className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold text-center text-white mb-8">
        Blog – Our Expert Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden p-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md brightness-125 contrast-125"
              />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-12 flex items-end opacity-80">
                <h3 className="text-lg font-semibold text-white">{post.title}</h3>
             </div>


              {/* 🔹 Overlapping Logo (Bottom-Left) */}
              <div className="absolute -bottom-6 left-4">
                <img
                  src={logo}
                  alt="Intelisync Logo"
                  className="w-14 h-14 rounded-full bg-black p-1 opacity-95 shadow-lg border-2 border-gray-800"
                />
              </div>
            </div>
            <div className="text-white mt-8"> {/* Pushed down to avoid overlap */}
              <p className="text-gray-300">{post.content}</p>
            </div>
        <button
            className="mt-4 text-sm text-teal-400 font-semibold hover:underline focus:outline-none"
            onClick={() => toggleExpand(index)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
          </motion.div>
        ))}
      </div>
    </section>


      {/* Contact Section */}

    <section className="bg-black text-white py-12 px-4 md:px-10 animate-fadeIn">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Section - Marketing Info */}
        <div className="md:w-1/2 text-left animate-slideUp">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-3">
            Ready to take your marketing to the next level?
          </h2>
          <p className="text-base font-medium mb-4">
            Book a demo and discovery call to get a look at:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">✅ How Intelisync works</li>
            <li className="flex items-center gap-2">
              ✅ How you can do marketing at scale better, faster, and cheaper
            </li>
            <li className="flex items-center gap-2">
              ✅ How we're different from agencies, freelancers, and in-house teams
            </li>
            <li className="flex items-center gap-2">
              ✅ The most suitable subscription plan for your needs
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg animate-slideUp">
          <h3 className="text-lg font-semibold text-center mb-3">Contact Us</h3>
          <p className="text-center text-xs text-gray-600 mb-4">
            Empowering your business with Blockchain, Web3, and AI solutions.
          </p>
          <form className="space-y-3">
            <div>
              <label className="block text-xs font-medium">First Name*</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-teal-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium">Last Name*</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-teal-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium">Work Email*</label>
              <input
                type="email"
                className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-teal-500 transition"
              />
            </div>
            <div className="flex items-center gap-2 border-b border-gray-300 py-1">
              {/* <img src="/photos/flag.png" alt="India" className="w-5 h-5" /> */}
              <img src={flag} alt="India" className="w-5 h-5" />

              <span className="text-gray-600 text-sm">+91</span>
              <input
                type="tel"
                className="w-full focus:outline-none text-sm"
                placeholder="Phone Number"
              />
            </div>
            <button
              className="w-full bg-gradient-to-r from-teal-500 to-green-600 text-white py-2 rounded-full font-semibold text-sm 
              transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer"
            >
              Book a demo
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-3">
            By clicking next, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  


    </div>
  );
};

export default ServicePage;
