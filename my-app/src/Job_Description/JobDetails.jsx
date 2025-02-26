import React from 'react'
import { useParams } from "react-router-dom";
import {jobListings} from '../carrier/info2/CarrierInfo2'


function JobDEtails() {
    const { id } = useParams();
  const job = jobListings.find((job) => job.id === parseInt(id));

  if (!job) {
    return <div className="text-white text-center mt-20 text-xl">Job not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-10 flex justify-center">
    <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-3xl w-full border border-gray-700 hover:shadow-2xl transition-all duration-300">
      <h1 className="text-4xl font-bold text-blue-400 mb-4 animate-pulse">{job.title}</h1>
      <p className="text-lg mb-4 italic text-gray-300">{job.briefDescription}</p>
      
      <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Key Responsibilities:</h2>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Develop and optimize user interfaces for web applications.</li>
        <li>Ensure responsive design for a seamless experience across all devices.</li>
        <li>Collaborate with designers and backend developers for smooth integration.</li>
        <li>Maintain and improve website performance and scalability.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Required Skills:</h2>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li><span className="text-green-400">HTML, CSS, JavaScript</span> – Core web development languages.</li>
        <li><span className="text-green-400">React.js / Next.js</span> – Modern frontend frameworks for building dynamic apps.</li>
        <li><span className="text-green-400">Tailwind CSS / Styled Components</span> – For efficient and scalable styling.</li>
        <li><span className="text-green-400">Version Control (Git, GitHub)</span> – For collaboration and code management.</li>
        <li><span className="text-green-400">API Integration (REST, GraphQL)</span> – To connect frontend with backend services.</li>
        <li><span className="text-green-400">Performance Optimization</span> – Ensuring fast load times and smooth UI interactions.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Preferred Qualifications:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Experience with modern UI/UX design principles.</li>
        <li>Knowledge of state management tools (Redux, Zustand, or Context API).</li>
        <li>Familiarity with testing frameworks like Jest or Cypress.</li>
        <li>Understanding of SEO best practices for web apps.</li>
      </ul>

      { 
  
      <a href='/job' className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
          Apply Now
        </a>
      
      }
      </div>
    </div>
  )
}

export default JobDEtails;



