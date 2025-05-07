import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-cyan-700 to-blue-600 p-4 sticky top-0 z-50 shadow-xl backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-white text-3xl font-extrabold hover:text-purple-200 transition-all duration-300 flex items-center"
        >
          <span className="bg-white bg-opacity-10 p-2 rounded-lg mr-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
          Priya<span className="text-purple-300">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {['Home', 'About', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase()}`} 
              className="relative px-4 py-2 text-white font-medium group transition-all duration-300"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
              <span className="absolute top-0 right-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300 delay-100"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-800 to-blue-700 shadow-inner">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {['Home', 'About', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className="px-4 py-3 text-white font-medium hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}