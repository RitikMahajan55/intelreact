import { useState } from "react";
import { Link } from "react-router-dom";
export const jobListings = [
  {
    id: 1,
    title: "Front-End Developer",
    briefDescription: "Develop stunning UI components for modern web apps.",
    description:
      "",


    vacancies: 30,
    skills: ["HTML", "NEXT.js", "REACT.js"],
    category: "Technical",
    postedOn: "Feb 13, 2025",
  },
  {
    id: 2,
    title: "Backend Developer",
    briefDescription: "Build and maintain server-side logic...",
    description: "Develops server-side logic, ensures data security, and handles database management, working closely with front-end teams to build complete applications.",
    vacancies: 23,
    skills: ["AWS", "JAVA", "Spring"],
    category: "Technical",
    postedOn: "Feb 11, 2025",
  },
  {
    id: 3,
    title: "Project Manager",
    briefDescription: "Lead projects and manage deadlines...",
    description: "Oversees project timelines, resource allocation, and ensures smooth communication between teams to deliver projects on time and within budget.",
    vacancies: 20,
    skills: ["Leadership", "Agile", "Scrum"],
    category: "Management",
    postedOn: "Feb 10, 2025",
  },
  {
    id: 4,
    title: "SEO Specialist",
    description: "21938 Description",
    vacancies: 30,
    skills: ["Google Analytics", "HTML", "JavaScript"],
    category: "Marketing",
    postedOn: "Feb 6, 2025"
  },
  {
    id: 5,
    title: "Front-End Developer",
    description: "working hours",
    vacancies: 78,
    skills: ["Java", "C++", "Python"],
    category: "Other",
    postedOn: "Feb 3, 2025"
  },
  {
    id: 6,
    title: "Community Builder",
    description: "Marketing opportunity",
    vacancies: 21,
    skills: [],
    category: "Other",
    postedOn: "Feb 20, 2025"
  }
];

export default function JobBoard() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technical", "Marketing", "Sales", "Management"];

  const filteredJobs = jobListings.filter(
    (job) =>
      (selectedCategory === "All" || job.category === selectedCategory) &&
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-10">
      <h2 className="text-center text-4xl font-bold mb-12">HOT VACANCIES</h2>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-8 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 text-lg font-semibold rounded-lg border transition-all duration-300 
              ${
                selectedCategory === category
                  ? "bg-white text-black scale-110 shadow-lg"
                  : "border-white hover:bg-gray-700 hover:scale-105"
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Box */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-1/3 text-white bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:border-blue-400 transition-all duration-300 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className={`bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer border border-gray-700 relative 
              ${selectedJob === job.id ? "border-2 border-blue-400" : ""}`}
            onClick={() => setSelectedJob(job.id === selectedJob ? null : job.id)}
          >
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-sm mb-2">
              {selectedJob === job.id ? job.description : job.briefDescription}
            </p>
            <p className="text-sm">
              Vacancies: <span className="font-bold">{job.vacancies}</span>
            </p>
            <p className="text-sm">
              Skills:{" "}
              <span className="text-green-400">
                {job.skills.length ? job.skills.join(", ") : "N/A"}
              </span>
            </p>
            <p className="text-sm">
              Category: <span className="text-yellow-400">{job.category}</span>
            </p>
            <p className="text-xs text-gray-400">Posted on: {job.postedOn}</p>

            <Link
              to={`/job/${job.id}`}
              className="text-blue-400 mt-2 block hover:underline"
            >
              Explore More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


