import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function About() {
  // Ensure education is an array for the timeline
  const educationEntries = Array.isArray(portfolioData.education)
    ? portfolioData.education
    : [portfolioData.education].filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-blue-950 py-8 px-4 sm:px-6 lg:px-8 bg-[url('/img/web-pattern.png')] bg-repeat">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-blue-950 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-12 border-2 border-red-600"
      >
        {/* Header with spider web decoration */}
        <div className="relative mb-16">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-red-700 to-blue-800 rounded-t-2xl"></div>
          
          {/* Spider web SVG */}
          <div className="absolute -bottom-10 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
                fill="url(#spider-web-gradient)"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,160C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <defs>
              <linearGradient id="spider-web-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
          </div>
          
          {/* Spider icon */}
          <div className="absolute top-2 right-2 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-white">
              <path fill="currentColor" d="M12,1.5C10.5,1.5 9.75,2.25 9.75,3.75V4.5H14.25V3.75C14.25,2.25 13.5,1.5 12,1.5M7.5,4.5V3.75A4.5,4.5 0 0,1 12,2.25A4.5,4.5 0 0,1 16.5,3.75V4.5A1.5,1.5 0 0,1 18,6V7.5H17.25V6.75H6.75V7.5H6V6A1.5,1.5 0 0,1 7.5,4.5M15.75,7.5V9.375C16.125,9.375 16.5,9.375 16.875,9.75C16.875,9.75 16.5,10.5 15.75,10.125C15.75,12 15.75,12.75 15.375,13.5C14.625,13.875 13.5,14.25 12,14.25C10.5,14.25 9.375,13.875 8.625,13.5C8.25,12.75 8.25,12 8.25,10.125C7.5,10.5 7.125,9.75 7.125,9.75C7.5,9.375 7.875,9.375 8.25,9.375V7.5H6.75V10.5H6V7.5H4.5V6.75H6V6H3C3,6 3,16.5 3,18C3,19.5 4.5,21 6,21C7.5,21 18,21 18,21C19.5,21 21,19.5 21,18C21,16.5 21,6 21,6H18V6.75H19.5V7.5H18V10.5H17.25V7.5H15.75M7.5,10.5V12.75C7.5,12.75 9,12.75 10.5,14.25C10.5,12.75 7.5,12.75 7.5,10.5M16.5,10.5C16.5,12.75 13.5,12.75 13.5,14.25C15,12.75 16.5,12.75 16.5,10.5M12,15C12.75,15 13.5,15.375 13.5,15.75C13.5,16.125 12.75,16.5 12,16.5C11.25,16.5 10.5,16.125 10.5,15.75C10.5,15.375 11.25,15 12,15Z" />
            </svg>
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
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div
                className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-red-600 via-blue-600 to-red-800 flex items-center justify-center text-white text-5xl sm:text-7xl font-bold shadow-lg border-4 border-blue-300"
                aria-label={`Avatar for ${portfolioData.personalInfo.name}`}
              >
                {portfolioData.personalInfo.name?.charAt(0) || "?"}
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              {portfolioData.personalInfo.name || "Friendly Neighborhood Developer"}
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-red-400 mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {portfolioData.personalInfo.title || "With Great Power Comes Great Responsibility"}
            </motion.p>
            <motion.div
              className="p-4 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg border-l-4 border-red-500 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-300 leading-relaxed">
                {portfolioData.personalInfo.overview || "No overview available."}
              </p>
            </motion.div>

            {/* Skills Section with web-themed icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="bg-blue-900 p-4 rounded-lg shadow-md border border-red-600 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)" }}
              >
                <h3 className="font-bold text-red-400 text-lg mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Web-Slinging Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.languages?.length ? (
                    portfolioData.skills.languages.map((lang, index) => (
                      <motion.span
                        key={`${lang}-${index}`}
                        className="px-3 py-1 bg-blue-800 text-red-300 rounded-full text-sm font-medium hover:bg-red-600 hover:text-white transition-colors"
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
                className="bg-blue-900 p-4 rounded-lg shadow-md border border-red-600 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)" }}
              >
                <h3 className="font-bold text-red-400 text-lg mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  Spider-Tech Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.frameworks?.length ? (
                    portfolioData.skills.frameworks.map((fw, index) => (
                      <motion.span
                        key={`${fw}-${index}`}
                        className="px-3 py-1 bg-blue-800 text-red-300 rounded-full text-sm font-medium hover:bg-red-600 hover:text-white transition-colors"
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

        {/* Education Section with web strand decoration */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent w-16 mr-4"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Training & Education</h3>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-16 ml-4"></div>
          </motion.div>

          {/* Education Timeline with web strand styling */}
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
                  {/* Timeline Spider Icon */}
                  <div className="absolute left-0 top-4 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-red-600 to-blue-600 shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 text-white">
                      <path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
                    </svg>
                  </div>
                  
                  {/* Timeline Web Strand */}
                  {index < educationEntries.length - 1 && (
                    <div className="absolute left-0 top-10 -translate-x-1/2 w-1 bg-gradient-to-b from-red-500 to-blue-600" style={{ 
                      height: 'calc(100% - 10px)',
                      backgroundImage: 'linear-gradient(to bottom, transparent, #ef4444, transparent, #1d4ed8, transparent)',
                      backgroundSize: '1px 24px',
                      backgroundRepeat: 'repeat-y'
                    }}></div>
                  )}
                  
                  {/* Education Card */}
                  <motion.div
                    className="ml-8 sm:ml-12 bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-lg border border-red-500 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.4)" }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="font-bold text-lg sm:text-xl text-white">
                        {edu.institution || "Unknown Institution"}
                      </h4>
                      {edu.year && (
                        <span className="px-3 py-1 bg-red-700 text-white rounded-full text-sm font-medium mt-2 md:mt-0 inline-block">
                          {edu.year}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-red-300 font-semibold">{edu.degree || "No degree listed"}</p>
                    
                    {edu.major && (
                      <div className="mt-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="text-gray-400">No education details available.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer with web pattern */}
        <div className="mt-16 mb-4 relative">
          <div className="h-1 w-full bg-gradient-to-r from-red-600 via-blue-600 to-red-600 rounded-full"></div>
          <motion.div 
            className="absolute bottom-0 right-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-red-500">
              <path fill="currentColor" d="M16.8 2.4C16.8 1.08 15.72 0 14.4 0C13.08 0 12 1.08 12 2.4C12 3.72 13.08 4.8 14.4 4.8C15.72 4.8 16.8 3.72 16.8 2.4M21.6 15.6C21.6 14.28 20.52 13.2 19.2 13.2C17.88 13.2 16.8 14.28 16.8 15.6C16.8 16.92 17.88 18 19.2 18C20.52 18 21.6 16.92 21.6 15.6M10.8 21.6C10.8 20.28 9.72 19.2 8.4 19.2C7.08 19.2 6 20.28 6 21.6C6 22.92 7.08 24 8.4 24C9.72 24 10.8 22.92 10.8 21.6M2.4 10.8C2.4 9.48 1.32 8.4 0 8.4V10.8H2.4M18.8 4.8L19.78 5.78L21.6 7.6C21.6 6.24 20.46 5.1 19.2 5.1C18.83 5.1 18.5 5.18 18.2 5.3L17.75 4.85L16.8 3.9V3.6C17.75 3.26 18.7 2.4 19.2 1.39C22.04 5.47 24 10 24 13.2C24 14.75 23.54 16.19 22.76 17.39C22.5 16.9 22.15 16.44 21.72 16L21.6 15.9L21.42 15.71C22.04 15 22.8 13.83 22.8 13.2C22.8 11.25 19.67 4.8 19.2 4.8H18.8M12.26 14.15L10.2 12V9.6C12.03 9.6 13.2 12 13.2 12L14.88 13.68C14.3 13.38 13.3 13.2 12 13.2C11.34 13.2 10.73 13.31 10.2 13.5V21.46C9.73 21.22 9.24 21.05 8.74 20.93C8.96 20.31 9.6 19.2 10.8 19.2C12 19.2 13.2 19.56 13.2 19.56V12.96L12.26 14.15M6 13.2C6 13.2 7.2 14.4 8.4 14.4C9.6 14.4 10.8 13.2 10.8 13.2C10.8 11.22 9.17 9.6 7.2 9.6C5.23 9.6 3.6 11.22 3.6 13.2C3.6 15.17 5.23 16.8 7.2 16.8H7.92C7.27 16.57 6.7 16.22 6.31 15.9C6.14 15.17 6 14.28 6 13.2M3.6 16.8C1.63 16.8 0 18.43 0 20.4V24H14.4V20.4C14.4 18.43 12.77 16.8 10.8 16.8M1.2 20.4C1.2 19.08 2.28 18 3.6 18H10.8C12.12 18 13.2 19.08 13.2 20.4V22.8H1.2V20.4M16.8 16.8V21.6H18V16.8H16.8M18 22.8V24H19.2V22.8H18Z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}