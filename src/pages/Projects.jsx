import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Projects() {
  const [currentSpiderAbility, setCurrentSpiderAbility] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Spider-Man abilities with their respective colors
  const spiderAbilities = [
    { name: "web", primary: "from-red-600", secondary: "to-blue-600", border: "border-red-700" },
    { name: "strength", primary: "from-blue-700", secondary: "to-red-500", border: "border-blue-800" },
    { name: "agility", primary: "from-red-500", secondary: "to-gray-600", border: "border-red-600" },
    { name: "stealth", primary: "from-gray-800", secondary: "to-blue-900", border: "border-gray-900" },
    { name: "sense", primary: "from-blue-600", secondary: "to-purple-600", border: "border-blue-700" }
  ];

  // Change Spider-Man ability background periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpiderAbility(prev => (prev + 1) % spiderAbilities.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4 pt-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my collection of work showcasing my skills and creativity
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={project.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-700">
                {/* Project Image/Thumbnail Area */}
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-sm font-medium text-gray-200">
                    {project.type}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
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
                      Web-Tech Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-slate-700 text-cyan-300 text-xs px-3 py-1 rounded-full border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link 
                    to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:underline"
                  >
                    View Project Details
                    <svg 
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-10 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">
            Want to see more or discuss a project?
          </h3>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </motion.div>
        
        {/* Mobile-specific bottom nav for ability switching (only appears on mobile) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className={`fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm py-3 px-4 z-30 shadow-lg border-t border-gray-700 md:hidden`}
        >
          <div className="flex justify-between items-center">
            <div className="flex space-x-1 overflow-x-auto pb-1 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
              {spiderAbilities.map((ability, index) => (
                <button
                  key={ability.name}
                  onClick={() => setCurrentSpiderAbility(index)}
                  className={`flex-shrink-0 px-3 py-1 rounded-full text-white text-xs font-medium transition-all ${
                    currentSpiderAbility === index 
                      ? `bg-gradient-to-r ${ability.primary} ${ability.secondary}` 
                      : 'bg-gray-700'
                  }`}
                >
                  {ability.name}
                </button>
              ))}
            </div>
            <div className="flex-shrink-0 ml-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-blue-600 border-2 border-white relative">
                <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1v22M1 12h22M3.5 3.5l17 17M3.5 20.5l17-17" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Add CSS for custom scrollbar and animations */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.3; }
        }
        
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}