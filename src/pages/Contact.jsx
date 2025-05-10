import { portfolioData } from "../data/portfolioData";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [spiderBackground, setSpiderBackground] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWebAnimation, setShowWebAnimation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  // Spider-Man suit variants for background rotation
  const spiderVariants = [
    { name: "classic", from: "from-red-600", to: "to-blue-700" },
    { name: "symbiote", from: "from-gray-900", to: "to-gray-700" },
    { name: "iron spider", from: "from-red-600", to: "to-yellow-500" },
    { name: "miles morales", from: "from-black", to: "to-red-600" },
    { name: "spider-gwen", from: "from-pink-500", to: "to-blue-500" },
  ];
  
  // Cycle through Spider-Man variant backgrounds
  useEffect(() => {
    const interval = setInterval(() => {
      setSpiderBackground(prev => (prev + 1) % spiderVariants.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowWebAnimation(true);
    
    // Simulate form submission with Spider-Man web animation
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setShowWebAnimation(false);
      setShowSuccessMessage(true);
      
      setTimeout(() => {
        setShowSuccessMessage(false);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Floating Spider-Webs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-12 h-12 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.15
            }}
          >
            {/* Spider-web svg */}
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm9,11a8.66,8.66,0,0,1-.1,1.27L16.24,12l4.24-1A8.9,8.9,0,0,1,21,12ZM14.37,7.16l1.42-3.63A8.94,8.94,0,0,1,19.63,7l-2,2.74ZM12,3a8.94,8.94,0,0,1,2.57.38L13.11,7,12,5.13,10.89,7,9.43,3.38A8.94,8.94,0,0,1,12,3ZM8.21,3.53,9.63,7.16,5.78,4.74l-2-2.71A8.94,8.94,0,0,1,8.21,3.53ZM3.26,5.81,5.29,8.56,3.41,12H3.1a9,9,0,0,1,.16-6.19ZM3.1,13H5.6l1.51,3.89A8.9,8.9,0,0,1,3.1,13ZM8.21,20.47A8.9,8.9,0,0,1,7.46,17L12,14l4.54,3a8.9,8.9,0,0,1-.75,3.44,8.81,8.81,0,0,1-7.58,0ZM18.9,16.89,17.4,13H19.9A8.9,8.9,0,0,1,18.9,16.89Z"/>
            </svg>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 relative z-10 transform transition-all duration-500 hover:scale-[1.02]">
        <div className="md:flex">
          {/* Contact Info Section */}
          <div className={`md:w-1/2 p-8 text-gray-100 relative overflow-hidden transition-all duration-1000 bg-gradient-to-br ${spiderVariants[spiderBackground].from} ${spiderVariants[spiderBackground].to}`}>
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              {/* Spider web pattern overlay */}
              <div className="absolute top-6 left-6 w-36 h-36">
                <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2" opacity="0.6">
                  <path d="M50,0 L50,100 M0,50 L100,50 M14.6,14.6 L85.4,85.4 M14.6,85.4 L85.4,14.6"></path>
                  <circle cx="50" cy="50" r="25"></circle>
                  <circle cx="50" cy="50" r="50"></circle>
                  <circle cx="50" cy="50" r="75"></circle>
                </svg>
              </div>
              <div className="absolute bottom-24 right-8 w-48 h-48">
                <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2" opacity="0.6">
                  <path d="M50,0 L50,100 M0,50 L100,50 M14.6,14.6 L85.4,85.4 M14.6,85.4 L85.4,14.6"></path>
                  <circle cx="50" cy="50" r="25"></circle>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  {/* Spider-Man logo */}
                  <div className="w-6 h-6 bg-red-500 relative">
                    <svg viewBox="0 0 24 24" fill="black">
                      <path d="M16.15,5.29L19,8.17L14.5,12.67L19,17.17L16.13,20.04L11.64,15.54L7.14,20.04L4.27,17.17L8.77,12.67L4.27,8.17L7.14,5.29L11.64,9.79L16.15,5.29Z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold">Spider Contact</h2>
              </div>
              
              <p className="mb-8 text-white/80">Need a friendly neighborhood hero? Reach out with your questions, team-up opportunities, or to report suspicious activity in the city!</p>
              
              <div className="space-y-6">
                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex-shrink-0 bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-white/80">Web-Mail</h3>
                    <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-lg text-white hover:text-red-300 transition">
                      {portfolioData.personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex-shrink-0 bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-white/80">Spider-Signal</h3>
                    <a href={`tel:${portfolioData.personalInfo.phone}`} className="text-lg text-white hover:text-red-300 transition">
                      {portfolioData.personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-white">Follow My Web</h3>
                <div className="flex space-x-4">
                  <a 
                    href={portfolioData.personalInfo.links.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm group"
                  >
                    <svg className="w-6 h-6 text-white group-hover:text-red-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={portfolioData.personalInfo.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm group"
                  >
                    <svg className="w-6 h-6 text-white group-hover:text-red-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="md:w-1/2 p-8 bg-gray-800 relative">
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8">
                {/* Mini spider */}
                <svg viewBox="0 0 24 24" fill="red" className="animate-pulse">
                  <path d="M11.39,7.79C10.36,6.88 9,7.05 8.37,7.39C8.16,6.92 7.95,6.15 8.11,5.37C8.3,4.83 7.88,4.22 7.33,4.41C6.64,4.65 6.23,5.15 6.14,5.81C6.03,6.61 6.44,7.61 6.74,8.19C6.03,8.86 5.15,10 5.31,11.27C5.5,12.67 6.41,13.46 7.47,13.67C8.5,13.88 9.71,13.37 10.33,12.3C12.94,12.25 13.91,10.67 14.07,10.07C14.21,9.5 14.21,8.85 13.96,8.24C13.65,7.25 12.18,7.03 11.39,7.79M9.64,11.53C9.03,11.79 8.25,11.5 8,10.86C7.74,10.22 8.03,9.43 8.63,9.18C9.24,8.93 10.03,9.22 10.28,9.86C10.54,10.5 10.25,11.29 9.64,11.53M7.64,7.82C7.5,7.44 7.5,7 7.62,6.57C7.79,6.17 8.23,6.07 8.44,6.31C8.66,6.54 8.59,7.03 8.41,7.43C8.24,7.84 7.97,7.96 7.76,7.88C7.7,7.85 7.66,7.85 7.64,7.82M16.03,13.31C15.41,13.17 13.96,12.89 13.3,14.11C12.89,14.8 12.95,15.95 12.84,16.94C12.21,16.89 10.27,16.69 8.91,16.07C8.59,15.92 8.14,15.69 8.03,15.99C7.93,16.28 8.3,16.95 8.47,17.16C9.22,18.1 10.4,18.15 11.97,18.11C13.26,18.08 15.1,17.99 16.38,17.78C14.89,19.38 11.25,19.29 9.38,19.03C9.21,18.91 9.05,18.91 9.04,19.06C9.04,19.23 9.16,19.5 9.24,19.61C9.82,20.51 12.24,20.94 13.96,20.94C16.2,20.94 18.5,20.33 20.26,18.21C19.38,18.4 17.89,18.4 16.74,17.96C18.03,16.89 19.2,15.85 18.93,13.04C18.89,12.57 18.71,11.84 18.14,11.67C17.95,11.67 17.75,11.69 17.58,11.76C16.95,12 16.65,12.72 16.86,13.4C16.93,13.65 16.89,13.91 16.62,14.09C16.34,14.27 15.86,14.25 15.76,13.95C15.62,13.57 15.76,13.13 16.03,13.31M3.71,7.21C5.03,7.38 5.97,6.47 6.28,5.49C6.59,4.52 6.59,3.6 6.12,2.69C5.65,1.79 4.63,1.1 3.71,1.12C2.14,1.14 2.15,2.2 1.75,3.56C1.53,4.32 0.36,4.96 1,6.08C1.57,6.94 2.9,7.12 3.71,7.21Z" />
                </svg>
              </div>
            </div>
            
            <div className="mb-6 flex items-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3 animate-bounce" style={{ animationDuration: "2s" }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Send A Web Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="relative group">
                <label htmlFor="name" className="block text-sm font-medium text-red-400 mb-1 group-hover:text-red-300 transition-colors">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300" 
                  placeholder="Peter Parker"
                />
                <div className="absolute right-3 top-9 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="relative group">
                <label htmlFor="email" className="block text-sm font-medium text-red-400 mb-1 group-hover:text-red-300 transition-colors">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300" 
                  placeholder="peter@dailybugle.com"
                />
                <div className="absolute right-3 top-9 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="relative group">
                <label htmlFor="message" className="block text-sm font-medium text-red-400 mb-1 group-hover:text-red-300 transition-colors">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300" 
                  placeholder="With great power comes great responsibility..."
                ></textarea>
                <div className="absolute right-3 top-9 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 relative overflow-hidden"
              >
                {!isSubmitting && (
                  <>
                    <div className="w-5 h-5 bg-white rounded-full mr-2 relative">
                      {/* Mini spider icon */}
                      <svg viewBox="0 0 24 24" fill="red" className="absolute inset-0">
                        <path d="M16.15,5.29L19,8.17L14.5,12.67L19,17.17L16.13,20.04L11.64,15.54L7.14,20.04L4.27,17.17L8.77,12.67L4.27,8.17L7.14,5.29L11.64,9.79L16.15,5.29Z" />
                      </svg>
                    </div>
                    Send Message
                  </>
                )}
                {isSubmitting && !showSuccessMessage && !showWebAnimation && (
                  <span>Sending...</span>
                )}
              </button>
            </form>
            
            {/* Web Shooting Animation */}
            {showWebAnimation && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm z-20">
                <div className="w-24 h-24 relative">
                  {/* Animated web shooting effect */}
                  <svg viewBox="0 0 100 100" className="animate-pulse">
                    <circle cx="50" cy="50" r="5" fill="white" />
                    <path d="M50,50 L75,25" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                    <path d="M50,50 L25,25" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                    <path d="M50,50 L75,75" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                    <path d="M50,50 L25,75" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                    <path d="M50,50 L50,25" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                    <path d="M50,50 L75,50" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                    <path d="M50,50 L50,75" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                    <path d="M50,50 L25,50" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  </svg>
                </div>
              </div>
            )}
            
            {/* Success Message */}
            {showSuccessMessage && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800/80 backdrop-blur-sm z-20">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-red-300">Your spider-signal has been received!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Spider-Man Suits Legend */}
      <div className="max-w-4xl mx-auto mt-6 flex flex-wrap justify-center gap-3">
        {spiderVariants.map((variant, index) => (
          <div 
            key={index} 
            className={`px-4 py-2 rounded-full text-white text-sm font-medium cursor-pointer transition-all duration-300 ${index === spiderBackground ? 'bg-gradient-to-r ' + variant.from + ' ' + variant.to + ' ring-2 ring-white' : 'bg-gray-700 hover:bg-gray-600'}`}
            onClick={() => setSpiderBackground(index)}
          >
            {variant.name.charAt(0).toUpperCase() + variant.name.slice(1)} Suit
          </div>
        ))}
      </div>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}