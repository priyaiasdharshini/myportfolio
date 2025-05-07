import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function About() {
  // Ensure education is an array for the timeline
  const educationEntries = Array.isArray(portfolioData.education)
    ? portfolioData.education
    : [portfolioData.education].filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-12"
      >
        {/* Header with wave decoration */}
        <div className="relative mb-16">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-t-2xl"></div>
          <div className="absolute -bottom-10 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
                fill="url(#purple-blue-gradient)"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,160C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <defs>
              <linearGradient id="purple-blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7e22ce" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10 text-4xl sm:text-5xl font-extrabold text-white text-center pt-6"
          >
            About Me
          </motion.h1>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-4">
          <motion.div
            className="lg:w-1/3 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div
                className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-800 flex items-center justify-center text-white text-5xl sm:text-7xl font-bold shadow-lg border-4 border-gray-700"
                aria-label={`Avatar for ${portfolioData.personalInfo.name}`}
              >
                {portfolioData.personalInfo.name?.charAt(0) || "?"}
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3">
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {portfolioData.personalInfo.name || "Anonymous"}
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-purple-400 mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {portfolioData.personalInfo.title || "No title provided"}
            </motion.p>
            <motion.div
              className="p-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg border-l-4 border-purple-500 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-300 leading-relaxed">
                {portfolioData.personalInfo.overview || "No overview available."}
              </p>
            </motion.div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-purple-400 text-lg mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.languages?.length ? (
                    portfolioData.skills.languages.map((lang, index) => (
                      <motion.span
                        key={`${lang}-${index}`}
                        className="px-3 py-1 bg-gray-600 text-purple-300 rounded-full text-sm font-medium hover:bg-gray-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        {lang}
                      </motion.span>
                    ))
                  ) : (
                    <span className="text-gray-400">No languages listed</span>
                  )}
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-blue-400 text-lg mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.frameworks?.length ? (
                    portfolioData.skills.frameworks.map((fw, index) => (
                      <motion.span
                        key={`${fw}-${index}`}
                        className="px-3 py-1 bg-gray-600 text-blue-300 rounded-full text-sm font-medium hover:bg-gray-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        {fw}
                      </motion.span>
                    ))
                  ) : (
                    <span className="text-gray-400">No frameworks listed</span>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-16 mr-4"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Education Journey</h3>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-16 ml-4"></div>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative pl-8 sm:pl-12">
            {educationEntries.length ? (
              educationEntries.map((edu, index) => (
                <motion.div
                  key={edu.institution || index}
                  className="relative mb-10 last:mb-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index + 0.5 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-4 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Timeline Line */}
                  {index < educationEntries.length - 1 && (
                    <div className="absolute left-0 top-10 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>
                  )}
                  
                  {/* Education Card */}
                  <motion.div
                    className="ml-8 sm:ml-12 bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="font-bold text-lg sm:text-xl text-white">
                        {edu.institution || "Unknown Institution"}
                      </h4>
                      {edu.year && (
                        <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium mt-2 md:mt-0 inline-block">
                          {edu.year}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-purple-300 font-semibold">{edu.degree || "No degree listed"}</p>
                    
                    {edu.major && (
                      <div className="mt-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <p className="text-gray-300">Major: {edu.major}</p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-800 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="text-gray-400">No education details available.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer accent */}
        <div className="mt-16 mb-4">
          <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}