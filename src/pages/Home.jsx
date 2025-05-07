import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Enhanced cyan-to-blue theme
  const theme = {
    primary: 'from-cyan-400 to-blue-500',
    secondary: 'from-blue-500 to-indigo-600',
    accent: 'from-cyan-500 to-blue-600',
    bg: 'from-gray-900 to-slate-900',
    text: 'text-cyan-300',
    darkText: 'text-gray-100',
    border: 'border-cyan-400',
    button: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    light: 'text-gray-300',
    highlight: 'bg-gradient-to-r from-cyan-300 to-blue-300',
    cardBg: 'bg-slate-800/90',
    highlightBg: 'bg-gradient-to-br from-cyan-400/10 to-blue-500/10'
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

  // Enhanced parallax effect
  const getParallaxY = (factor) => -scrollY * factor;

  // Staggered animation for child elements
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

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} overflow-hidden transition-colors duration-500`}>
      {/* Enhanced Particle Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-300/10"
            style={{
              width: 20 + Math.random() * 80,
              height: 20 + Math.random() * 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: Math.floor(Math.random() * 5),
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-800/20 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-800/20 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            top: '30%',
            left: '50%',
            width: '100%',
            height: '100%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={container}
        className="relative container mx-auto px-4 sm:px-6 py-16 md:py-28 flex flex-col items-center z-10"
      >
        <div className="w-full max-w-4xl text-center">
          <motion.div
            variants={item}
            className="inline-block"
          >
            <div className={`inline-block px-4 py-1 sm:px-6 sm:py-2 ${theme.cardBg} ${theme.text} rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-medium backdrop-blur-sm border border-cyan-400/40 shadow-inner shadow-cyan-500/10`}>
              <span className="animate-pulse inline-block mr-2 w-2 h-2 rounded-full bg-cyan-400"></span>
              Welcome to My Portfolio
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-4 sm:mb-6 leading-tight tracking-tight"
            style={{ textShadow: '0 2px 10px rgba(6,182,212,0.3)' }}
          >
            Hi, I'm <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary}`}>
              {portfolioData.personalInfo?.name || "Anonymous"}
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-6 font-medium"
          >
            <span className="relative">
              {portfolioData.personalInfo?.title || "Professional"}
              <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${theme.primary} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300`}></span>
            </span>
          </motion.h2>

          <motion.div
            variants={item}
            className="mb-6 sm:mb-8"
          >
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              {portfolioData.personalInfo?.overview || "I create innovative solutions to empower businesses."}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mb-8 sm:mb-10"
          >
            <Link
              to="/projects"
              className={`group px-4 py-2 sm:px-8 sm:py-3 ${theme.button} text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center relative overflow-hidden text-sm sm:text-base font-medium`}
              role="button"
              aria-label="View Projects"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/30 to-white/10 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
              <span className="relative flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                View Projects
              </span>
            </Link>
            <Link
              to="/contact"
              className={`group px-4 py-2 sm:px-8 sm:py-3 border-2 ${theme.border} ${theme.text} rounded-lg hover:bg-slate-800/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex items-center justify-center relative overflow-hidden text-sm sm:text-base font-medium`}
              role="button"
              aria-label="Contact Me"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-100/20 to-blue-100/10 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
              <span className="relative flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </span>
            </Link>
          </motion.div>

          {/* Social Icons - Enhanced */}
          <motion.div
            variants={item}
            className="flex justify-center gap-5 sm:gap-8"
          >
            <a
              href={portfolioData.personalInfo?.links?.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <div className="relative">
                <span className="absolute -inset-2 bg-cyan-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg className="h-6 w-6 sm:h-7 sm:w-7 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </a>
            <a
              href={portfolioData.personalInfo?.links?.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <div className="relative">
                <span className="absolute -inset-2 bg-blue-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg className="h-6 w-6 sm:h-7 sm:w-7 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </a>
            <a
              href={portfolioData.personalInfo?.links?.twitter || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              aria-label="Twitter Profile"
            >
              <div className="relative">
                <span className="absolute -inset-2 bg-cyan-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg className="h-6 w-6 sm:h-7 sm:w-7 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Enhanced Avatar Section */}
        <motion.div
          variants={item}
          className="mt-10 sm:mt-16 flex justify-center relative"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full overflow-hidden shadow-lg">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse duration-5000"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 animate-pulse duration-3000"></div>
              <span className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-300">
                {portfolioData.personalInfo?.name?.charAt(0) || "?"}
              </span>
            </div>
          </div>
          {/* Decorative rings */}
          <div className="absolute -inset-4 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 border border-cyan-500/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 border border-blue-500/10 rounded-full"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Cards - NEW SECTION */}
      <section className="relative py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "5+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { number: "20+", label: "Projects Completed", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { number: "10+", label: "Happy Clients", icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" },
              { number: "100%", label: "Client Satisfaction", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }
            ].map((stat, index) => (
              <motion.div
                key={`stat-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${theme.cardBg} rounded-xl p-4 sm:p-6 border border-cyan-500/10 shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 bg-gradient-to-r ${theme.primary} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-1">{stat.number}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="relative py-16 sm:py-20 bg-slate-800/30 backdrop-blur-md" style={{ transform: `translateY(${getParallaxY(0.05)}px)` }}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-3 sm:mb-4 relative inline-block">
              My Skills
              <div className={`w-full h-1 bg-gradient-to-r ${theme.primary} mt-2`}></div>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
            {(portfolioData.skills?.languages || []).concat(portfolioData.skills?.frameworks || []).slice(0, 8).map((skill, index) => (
              <motion.div
                key={`${skill}-${index}`}
                className={`${theme.cardBg} p-4 sm:p-6 rounded-lg shadow-md border border-cyan-400/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 relative group overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r ${theme.primary} rounded-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300`}>
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-100 group-hover:text-cyan-300 transition-colors duration-300">{skill}</h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 text-center"
          >
            <Link
              to="/skills"
              className={`px-4 py-2 sm:px-6 sm:py-3 ${theme.button} text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-sm sm:text-base inline-flex items-center group`}
              role="button"
              aria-label="View All Skills"
            >
              <span className="mr-2">View All Skills</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Featured Projects */}
      <section className="relative py-16 sm:py-24 bg-gray-900" style={{ transform: `translateY(${getParallaxY(0.03)}px)` }}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-3 sm:mb-4 relative inline-block">
              Featured Projects
              <div className={`w-full h-1 bg-gradient-to-r ${theme.primary} mt-2`}></div>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Check out some of my recent work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(portfolioData.projects || []).slice(0, 3).map((project, index) => (
              <motion.div
                key={project.title || `project-${index}`}
                className={`${theme.cardBg} rounded-xl shadow-lg overflow-hidden border border-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="h-40 sm:h-48 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-slate-900/80 flex items-center justify-center">
                    <svg className="w-16 h-16 text-cyan-300/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-cyan-500/90 text-white text-xs font-medium px-2 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-100 mb-2 group-hover:text-cyan-300 transition-colors duration-300">{project.title || "Untitled Project"}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-2">{project.description || "No description available."}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.technologies || []).slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={`${tech}-${techIndex}`}
                        className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.technologies || []).length > 3 && (
                      <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                        +{(project.technologies || []).length - 3} more
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/projects/${project.title?.toLowerCase().replace(/\s+/g, '-') || `project-${index}`}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
                    role="button"
                    aria-label={`View details for ${project.title || "project"}`}
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className={`px-6 py-3 sm:px-8 sm:py-4 ${theme.button} text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-sm sm:text-base relative overflow-hidden group inline-flex items-center`}
              role="button"
              aria-label="Explore All Projects"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-white/10 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
              <span className="relative mr-2">Explore All Projects</span>
              <svg className="w-4 h-4 relative transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - NEW SECTION */}
      <section className="relative py-16 sm:py-24 bg-slate-800/30 backdrop-blur-md" style={{ transform: `translateY(${getParallaxY(0.02)}px)` }}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-3 sm:mb-4 relative inline-block">
              Client Testimonials
              <div className={`w-full h-1 bg-gradient-to-r ${theme.primary} mt-2`}></div>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              What people are saying about my work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Product Manager",
                content: "Working with this developer was an absolute pleasure. They delivered a high-quality solution on time and exceeded our expectations.",
                avatar: "A",
                rating: 5
              },
              {
                name: "Sarah Williams",
                role: "CEO, TechStart",
                content: "Extremely professional and talented. They took our vague idea and transformed it into a beautiful, functional application.",
                avatar: "S",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                content: "Responsive, creative, and detail-oriented. The work delivered was exceptional and helped us achieve our business goals.",
                avatar: "M",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={`testimonial-${index}`}
                className={`${theme.cardBg} rounded-xl shadow-lg overflow-hidden border border-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${theme.primary} flex items-center justify-center`}>
                        <span className="text-white text-lg font-bold">{testimonial.avatar}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base sm:text-lg font-bold text-gray-100">{testimonial.name}</h3>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-cyan-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base italic">"{testimonial.content}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden border border-cyan-500/20"
          >
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              animate={{ 
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 30%)",
                  "radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 30%)",
                  "radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 30%)",
                  "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 30%)",
                  "radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 30%)"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Transform</span> Your Ideas?
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Let's collaborate and bring your vision to life. Whether you need a new website, 
                app, or digital solution, I'm here to help you succeed in the digital world.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  to="/contact"
                  className={`px-6 py-3 sm:px-8 sm:py-4 ${theme.button} text-white rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 text-sm sm:text-base font-medium w-full sm:w-auto`}
                  role="button"
                  aria-label="Contact Me"
                >
                  Get In Touch
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-cyan-400/30 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm sm:text-base font-medium w-full sm:w-auto"
                  role="button"
                  aria-label="Learn More About Me"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section - NEW SECTION */}
      <section className="relative py-16 sm:py-20 bg-slate-800/30 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-3 relative inline-block">
                Stay Updated
                <div className={`w-full h-1 bg-gradient-to-r ${theme.primary} mt-2`}></div>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-3">
                Subscribe to my newsletter for the latest updates and tech insights
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={`${theme.cardBg} p-6 sm:p-8 rounded-xl border border-cyan-500/10 shadow-lg`}
            >
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-gray-100 placeholder-gray-400"
                  aria-label="Email address"
                />
                <button 
                  type="submit"
                  className={`px-6 py-3 ${theme.button} text-white rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 text-sm sm:text-base font-medium flex-shrink-0`}
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-xs mt-4">I respect your privacy. Unsubscribe at any time.</p>
            </motion.div>
          </div>
        </div>
      </section>

    
    </div>
  );
}