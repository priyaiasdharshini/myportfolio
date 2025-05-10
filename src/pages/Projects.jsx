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

  // Spider web animation for background elements
  const spiderWebAnimation = {
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

  // Spider ability-specific floating animations
  const floatingElements = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.5,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-900 to-blue-950 bg-[url('/img/web-pattern.png')] bg-repeat`}>
      {/* Spider-Man-themed floating elements in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Spider Webs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [0, -15, 0, 15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-white/10"
          >
            <svg className="w-full h-full text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1v22M1 12h22M3.5 3.5l17 17M3.5 20.5l17-17M6 6l12 12M6 18l12-12" />
            </svg>
          </motion.div>
        ))}
        
        {/* Ability-specific elements based on current ability */}
        {spiderAbilities[currentSpiderAbility].name === "web" && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`web-${i}`}
                variants={floatingElements}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.2 }}
                className="absolute w-8 h-8 bg-white/10 rounded-full opacity-20"
                style={{ 
                  top: `${Math.random() * 80 + 10}%`, 
                  left: `${Math.random() * 80 + 10}%`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              >
                <svg className="w-full h-full text-white/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1v22M1 12h22M3.5 3.5l17 17M3.5 20.5l17-17" />
                </svg>
              </motion.div>
            ))}
          </>
        )}
        
        {spiderAbilities[currentSpiderAbility].name === "strength" && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`strength-${i}`}
                initial={{ opacity: 0.2 }}
                animate={{ 
                  y: [-20, -40, -20],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-6 h-12 bg-red-600/20 rounded-full blur-sm"
                style={{ 
                  bottom: `${Math.random() * 20}%`, 
                  left: `${Math.random() * 90 + 5}%`
                }}
              />
            ))}
          </>
        )}
        
        {spiderAbilities[currentSpiderAbility].name === "agility" && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`agility-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  y: -Math.random() * 500,
                  opacity: [0, 0.4, 0],
                  scale: [0.5, 1, 0.8]
                }}
                transition={{ 
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-4 h-4 bg-blue-600/30 rounded-full"
                style={{ 
                  bottom: `-5%`, 
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </>
        )}
        
        {spiderAbilities[currentSpiderAbility].name === "stealth" && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`stealth-${i}`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 5,
                  ease: "easeInOut"
                }}
                className="absolute bg-gray-800/50"
                style={{ 
                  top: `${Math.random() * 80}%`, 
                  left: `${Math.random() * 90}%`,
                  width: `${Math.random() * 30 + 10}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  clipPath: "polygon(50% 0%, 0% 100%, 50% 70%, 100% 100%)"
                }}
              />
            ))}
          </>
        )}
        
        {spiderAbilities[currentSpiderAbility].name === "sense" && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`sense-${i}`}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0, 0.3, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8 + Math.random() * 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-16 h-16 bg-purple-600/20 rounded-full blur-lg"
                style={{ 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Spider-Man Theme */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-blue-600 border-4 border-white relative">
              <svg className="w-full h-full text-white/80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1v22M1 12h22M3.5 3.5l17 17M3.5 20.5l17-17" />
              </svg>
            </div>
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r ${spiderAbilities[currentSpiderAbility].primary} ${spiderAbilities[currentSpiderAbility].secondary} mb-4 pt-4`}>
            My Web-Slinging Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Swinging through code to save the day!
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r ${spiderAbilities[currentSpiderAbility].primary} ${spiderAbilities[currentSpiderAbility].secondary} mx-auto mt-6`}></div>
        </motion.div>

        {/* Spider Ability Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {spiderAbilities.map((ability, index) => (
            <motion.button
              key={ability.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSpiderAbility(index)}
              className={`px-3 py-1 rounded-full text-white text-sm font-medium transition-all duration-300 ${
                currentSpiderAbility === index 
                  ? `bg-gradient-to-r ${ability.primary} ${ability.secondary} shadow-lg` 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid with Spider-Man theme */}
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className={`h-full bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 ${spiderAbilities[currentSpiderAbility].border} relative`}>
                {/* Spider web corner decoration */}
                <div className="absolute top-4 left-4 w-6 h-6 rounded-full border-2 border-white/30 opacity-30">
                  <svg className="w-full h-full text-white/60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1v22M1 12h22M3.5 3.5l17 17M3.5 20.5l17-17" />
                  </svg>
                </div>

                {/* Spider Ability Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${spiderAbilities[index % spiderAbilities.length].primary} ${spiderAbilities[index % spiderAbilities.length].secondary} text-white shadow-md`}>
                    {spiderAbilities[index % spiderAbilities.length].name.toUpperCase()} ABILITY
                  </div>
                </div>

                {/* Project Image/Thumbnail Area */}
                <div className={`h-48 bg-gradient-to-br ${spiderAbilities[index % spiderAbilities.length].primary} ${spiderAbilities[index % spiderAbilities.length].secondary} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Spider silhouette decorations based on project ability */}
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                    <svg className="w-32 h-32" viewBox="0 0 100 100" fill="white">
                      {index % 5 === 0 && (
                        // Spider-like silhouette
                        <path d="M50,20 Q70,10 80,30 L90,50 Q85,70 70,80 Q50,90 30,80 Q15,70 10,50 L20,30 Q30,10 50,20 Z M30,40 Q25,35 20,40 Q15,45 20,50 Q25,55 30,50 Q35,45 30,40 Z M70,40 Q65,35 60,40 Q55,45 60,50 Q65,55 70,50 Q75,45 70,40 Z M40,70 Q50,75 60,70 Q55,80 45,80 Q35,80 40,70 Z" />
                      )}
                      {index % 5 === 1 && (
                        // Web-slinger silhouette
                        <path d="M50,20 Q65,15 70,30 Q80,25 85,35 Q90,45 80,50 Q85,60 75,70 Q65,80 50,75 Q35,80 25,70 Q15,60 20,50 Q10,45 15,35 Q20,25 30,30 Q35,15 50,20 Z M35,40 Q30,35 25,40 Q20,45 25,50 Q30,55 35,50 Q40,45 35,40 Z M65,40 Q60,35 55,40 Q50,45 55,50 Q60,55 65,50 Q70,45 65,40 Z M40,60 Q50,65 60,60 Q55,70 45,70 Q35,70 40,60 Z" />
                      )}
                      {index % 5 === 2 && (
                        // Climbing silhouette
                        <path d="M50,20 Q70,20 80,40 Q90,60 80,80 Q70,90 50,90 Q30,90 20,80 Q10,60 20,40 Q30,20 50,20 Z M35,45 Q30,40 25,45 Q20,50 25,55 Q30,60 35,55 Q40,50 35,45 Z M65,45 Q60,40 55,45 Q50,50 55,55 Q60,60 65,55 Q70,50 65,45 Z M40,70 Q50,80 60,70 Q55,60 45,60 Q35,60 40,70 Z" />
                      )}
                      {index % 5 === 3 && (
                        // Swinging silhouette
                        <path d="M30,70 Q10,70 10,50 Q10,30 30,30 Q50,30 50,10 Q50,30 70,30 Q90,30 90,50 Q90,70 70,70 Q60,70 50,60 Q40,70 30,70 Z M30,50 Q25,45 20,50 Q15,55 20,60 Q25,65 30,60 Q35,55 30,50 Z M70,50 Q65,45 60,50 Q55,55 60,60 Q65,65 70,60 Q75,55 70,50 Z" />
                      )}
                      {index % 5 === 4 && (
                        // Sense silhouette
                        <path d="M50,20 Q70,20 70,40 Q70,60 50,70 Q30,60 30,40 Q30,20 50,20 Z M50,70 Q50,80 40,90 Q55,85 60,90 Q65,80 50,70 Z M40,40 Q35,35 30,40 Q25,45 30,50 Q35,55 40,50 Q45,45 40,40 Z M60,40 Q55,35 50,40 Q45,45 50,50 Q55,55 60,50 Q65,45 60,40 Z" />
                      )}
                    </svg>
                  </div>
                  
                  <div className="absolute top-4 left-14 px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white">
                    {project.type}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className={`text-xl font-bold text-gray-100 group-hover:text-${spiderAbilities[currentSpiderAbility].name === 'web' ? 'red' : spiderAbilities[currentSpiderAbility].name === 'strength' ? 'blue' : spiderAbilities[currentSpiderAbility].name === 'agility' ? 'red' : spiderAbilities[currentSpiderAbility].name === 'stealth' ? 'gray' : 'purple'}-400 transition-colors`}>
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
                          className={`bg-gray-700 text-xs px-3 py-1 rounded-full border ${spiderAbilities[currentSpiderAbility].border} text-gray-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link 
                    to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`inline-flex items-center text-${spiderAbilities[currentSpiderAbility].name === 'web' ? 'red' : spiderAbilities[currentSpiderAbility].name === 'strength' ? 'blue' : spiderAbilities[currentSpiderAbility].name === 'agility' ? 'red' : spiderAbilities[currentSpiderAbility].name === 'stealth' ? 'gray' : 'purple'}-400 hover:text-${spiderAbilities[currentSpiderAbility].name === 'web' ? 'red' : spiderAbilities[currentSpiderAbility].name === 'strength' ? 'blue' : spiderAbilities[currentSpiderAbility].name === 'agility' ? 'red' : spiderAbilities[currentSpiderAbility].name === 'stealth' ? 'gray' : 'purple'}-300 font-medium group-hover:underline`}
                  >
                    View Web Entry
                    <svg 
                      className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" 
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 1v22M1 12h22M3.5 3.5l17 17M3.5 20.5l17-17" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Spider-Man-themed divider */}
        <div className="flex justify-center my-14">
          <div className="relative h-1 w-64">
            <div className={`absolute inset-0 bg-gradient-to-r ${spiderAbilities[currentSpiderAbility].primary} ${spiderAbilities[currentSpiderAbility].secondary}`}></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-gray-800">
              <svg className="w-full h-full text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1v22M1 12h22M3.5 3.5l17 17M3.5 20.5l17-17" />
              </svg>
            </div>
          </div>
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
            Ready to swing into a new project?
          </h3>
          <Link 
            to="/contact" 
            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${spiderAbilities[currentSpiderAbility].primary} ${spiderAbilities[currentSpiderAbility].secondary} text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${spiderAbilities[currentSpiderAbility].border}`}
          >
            <span className="mr-2 w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <svg className="w-3 h-3 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1v22M1 12h22M3.5 3.5l17 17M3.5 20.5l17-17" />
              </svg>
            </span>
            Send a Web Signal
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
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