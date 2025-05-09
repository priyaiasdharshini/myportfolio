import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Spider-web animation for background elements
  const webAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-red-950 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Web decorations in background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={webAnimation}
          className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5"
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            transform: "rotate(15deg)"
          }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={webAnimation}
          className="absolute bottom-20 left-10 w-96 h-96 bg-white opacity-5"
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
            transform: "rotate(-5deg)"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Spider-Man Theme */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
              <path d="M50 95C74.8528 95 95 74.8528 95 50C95 25.1472 74.8528 5 50 5C25.1472 5 5 25.1472 5 50C5 74.8528 25.1472 95 50 95Z" fill="#C53030" />
              <path d="M50 83C68.2254 83 83 68.2254 83 50C83 31.7746 68.2254 17 50 17C31.7746 17 17 31.7746 17 50C17 68.2254 31.7746 83 50 83Z" fill="#742A2A" />
              <path d="M50 25C50 25 40 35 30 45M50 25C50 25 60 35 70 45M50 25V75M30 55C30 55 40 65 50 75M70 55C70 55 60 65 50 75" stroke="white" strokeWidth="2" />
              <path d="M27 30L34 37M73 30L66 37M27 70L34 63M73 70L66 63" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 mb-4 pt-4 font-comic">
            My Amazing Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            With great coding comes great responsibility
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Projects Grid with Spider-Man theme */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.projects.map((project) => (
            <motion.div 
              key={project.title}
              variants={item}
              whileHover={{ y: -10, rotate: 1 }}
              className="group"
            >
              <div className="h-full bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-red-600 relative">
                {/* Web corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                  <svg viewBox="0 0 100 100" fill="none">
                    <path d="M0 0L100 0L100 100" stroke="white" strokeWidth="2" />
                    <path d="M20 0L100 80" stroke="white" strokeWidth="1" />
                    <path d="M40 0L100 60" stroke="white" strokeWidth="1" />
                    <path d="M60 0L100 40" stroke="white" strokeWidth="1" />
                    <path d="M80 0L100 20" stroke="white" strokeWidth="1" />
                    <path d="M0 20L20 0" stroke="white" strokeWidth="1" />
                    <path d="M0 40L40 0" stroke="white" strokeWidth="1" />
                    <path d="M0 60L60 0" stroke="white" strokeWidth="1" />
                    <path d="M0 80L80 0" stroke="white" strokeWidth="1" />
                  </svg>
                </div>

                {/* Project Image/Thumbnail Area */}
                <div className="h-48 bg-gradient-to-br from-red-600 to-blue-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-sm font-medium text-red-400 border border-red-800">
                    {project.type}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-red-100 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h2>
                    <span className="text-gray-400 text-sm">
                      {project.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-5 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-gray-800 text-red-400 text-xs px-3 py-1 rounded-full border border-red-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link 
                    to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-red-400 hover:text-red-300 font-medium group-hover:underline"
                  >
                    Swing Into Details
                    <svg 
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 10L21 10M21 10L17 6M21 10L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 14V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Spider-web themed divider */}
        <div className="flex justify-center my-14">
          <svg className="w-64 h-8 text-red-600 opacity-30" viewBox="0 0 200 20" fill="none">
            <path d="M0 10H200" stroke="currentColor" strokeWidth="1"/>
            <path d="M40 10C40 5 50 0 60 10C70 20 80 5 100 10" stroke="currentColor" strokeWidth="1"/>
            <path d="M100 10C120 15 130 0 140 10C150 20 160 5 200 10" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        {/* Additional CTA with Spider-Man theme */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-10 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">
            Need a friendly neighborhood developer?
          </h3>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-red-800"
          >
            Send a Web Signal
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none">
              <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}