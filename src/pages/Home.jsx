import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Spider-Man theme colors
  const theme = {
    primary: 'from-red-600 to-red-700',
    secondary: 'from-blue-600 to-blue-700',
    accent: 'from-red-500 to-blue-600',
    bg: 'from-gray-900 to-gray-950',
    text: 'text-red-500',
    darkText: 'text-gray-100',
    border: 'border-red-500',
    button: 'bg-gradient-to-r from-red-600 to-blue-600',
    light: 'text-gray-300',
    highlight: 'bg-gradient-to-r from-red-400 to-blue-500',
    cardBg: 'bg-gray-800/90',
    highlightBg: 'bg-gradient-to-br from-red-500/10 to-blue-700/10'
  };

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Spider web component
  const SpiderWeb = ({ size = 100, className = "" }) => (
    <svg className={className} viewBox={`0 0 ${size} ${size}`}>
      <path 
        d={`M0,0 L${size},${size} M${size},0 L0,${size} M${size/2},0 L${size/2},${size} M0,${size/2} L${size},${size/2}`}
        stroke="white" 
        strokeWidth="0.5" 
        fill="none" 
      />
      <circle cx={size/2} cy={size/2} r={size/4} stroke="white" strokeWidth="0.5" fill="none" />
      <circle cx={size/2} cy={size/2} r={size/3} stroke="white" strokeWidth="0.5" fill="none" />
    </svg>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} overflow-hidden`}>
      {/* Spider web background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <SpiderWeb size={200} className="absolute top-20 left-20" />
        <SpiderWeb size={300} className="absolute bottom-10 right-10" />
        <SpiderWeb size={150} className="absolute top-1/3 right-1/4" />
      </div>

      {/* Animated web particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-red-500/10 to-blue-500/10"
            style={{
              width: 10 + Math.random() * 40,
              height: 10 + Math.random() * 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={container}
        className="relative container mx-auto px-4 sm:px-6 py-28 flex flex-col items-center z-10"
      >
        <div className="w-full max-w-4xl text-center">
          <motion.div variants={item} className="inline-block">
            <div className={`inline-flex items-center px-4 py-1 ${theme.cardBg} rounded-full mb-6 text-sm border border-red-500/30 shadow-lg`}>
              <div className={`w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse`}></div>
              <span className="font-comic">Your Friendly Neighborhood Developer</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-100 mb-6 leading-tight font-comic"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
              {portfolioData.personalInfo?.name || "Spider-Dev"}
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl sm:text-2xl text-gray-300 mb-8 font-comic"
          >
            With great power comes <span className="text-red-400">great code</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 font-comic"
          >
            {portfolioData.personalInfo?.overview || "Swinging through the digital landscape, creating amazing web experiences that stick."}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Link
              to="/projects"
              className={`px-8 py-3 ${theme.button} text-white rounded-full font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all flex items-center font-comic`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Web
            </Link>
            <Link
              to="/contact"
              className={`px-8 py-3 border-2 ${theme.border} ${theme.text} rounded-full font-medium hover:bg-gray-800/50 transition-all flex items-center font-comic`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send a Signal
            </Link>
          </motion.div>

          {/* Spider-Man Avatar */}
          <motion.div
            variants={item}
            className="relative w-48 h-48 sm:w-64 sm:h-64"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-blue-700 rounded-full overflow-hidden shadow-xl">
              <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                {/* Spider-Man mask eyes */}
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-16 h-8 bg-white rounded-full transform rotate-45"></div>
                  <div className="absolute top-1/4 right-1/4 w-16 h-8 bg-white rounded-full transform -rotate-45"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-600"></div>
                </div>
              </div>
            </div>
            {/* Web lines animation */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`web-${i}`}
                className="absolute top-0 left-1/2 w-0.5 h-24 bg-gradient-to-b from-white to-transparent"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                  y: [-20, -100, -180]
                }}
                transition={{
                  delay: i * 0.2,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                style={{
                  transformOrigin: 'top center',
                  rotate: i * 45
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 font-comic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">Spidey Stats</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-comic">
              My crime-fighting (code-fighting) statistics
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5+", label: "Years Experience", icon: "🕷️" },
              { value: "50+", label: "Projects Completed", icon: "🕸️" },
              { value: "100%", label: "Spider-Sense", icon: "👁️" },
              { value: "∞", label: "Webs Shot", icon: "🚀" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${theme.cardBg} p-6 rounded-xl border border-red-500/20 hover:border-blue-500/50 transition-all`}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-100 mb-2 font-comic">{stat.value}</h3>
                <p className="text-gray-400 font-comic">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 relative bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 font-comic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">Web Shooters</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-comic">
              The technologies in my utility belt
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {(portfolioData.skills?.languages || []).concat(portfolioData.skills?.frameworks || []).slice(0, 10).map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`${theme.cardBg} p-4 rounded-lg border border-red-500/10 hover:border-blue-500/30 transition-all flex flex-col items-center`}
              >
                <div className={`w-16 h-16 ${theme.highlightBg} rounded-full flex items-center justify-center mb-4`}>
                  <div className="text-2xl">🕷️</div>
                </div>
                <h3 className="text-gray-100 font-medium text-center font-comic">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${theme.primary}`}
                    style={{ width: `${skill.level || 80}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 font-comic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">Web of Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-comic">
              My greatest battles against bugs and bad UX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(portfolioData.projects || []).slice(0, 3).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${theme.cardBg} rounded-xl overflow-hidden border border-red-500/20 hover:border-blue-500/50 transition-all group`}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image || "https://source.unsplash.com/random/600x400/?tech,spiderman"} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-red-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">🕷️</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2 font-comic">{project.title}</h3>
                  <p className="text-gray-400 mb-4 font-comic">{project.description?.substring(0, 100)}...</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300 font-comic">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className={`inline-flex items-center ${theme.text} hover:underline font-comic`}
                  >
                    View Project <span className="ml-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className={`inline-flex items-center px-8 py-3 ${theme.button} rounded-full text-white font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all font-comic`}
            >
              See All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative bg-gradient-to-br from-gray-900/50 to-gray-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 font-comic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">Send the Spider-Signal</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-comic">
              Ready to collaborate? I'm always looking for new challenges to swing into.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form className={`${theme.cardBg} p-8 rounded-xl border border-red-500/20`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-comic">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 text-gray-100"
                    placeholder="Peter Parker"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-comic">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 text-gray-100"
                    placeholder="peter@dailybugle.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 font-comic">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 text-gray-100"
                  placeholder="I need a hero!"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 font-comic">Message</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 text-gray-100"
                  placeholder="With great power comes great responsibility... and I need your powers for this project!"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit"
                  className={`px-8 py-3 ${theme.button} text-white rounded-full font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all font-comic`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 bg-gradient-to-b ${theme.highlightBg} border-t border-red-500/10`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-blue-700 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">🕷️</span>
                </div>
                <h2 className="text-xl font-bold text-gray-100 font-comic">
                  {portfolioData.personalInfo?.name || "Spider-Dev"}
                </h2>
              </div>
              <p className="text-gray-400 mt-2 font-comic">Your Friendly Neighborhood Developer</p>
            </div>
            <div className="flex space-x-6">
              {portfolioData.personalInfo?.links && Object.entries(portfolioData.personalInfo.links).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  {platform === 'linkedin' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {platform === 'github' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {platform === 'twitter' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm font-comic">
            &copy; {new Date().getFullYear()} {portfolioData.personalInfo?.name || "Spider-Dev"}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Custom font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
        .font-comic {
          font-family: 'Bangers', cursive;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}