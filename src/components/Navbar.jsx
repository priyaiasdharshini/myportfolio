import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-600 to-blue-800 p-4 sticky top-0 z-50 shadow-lg border-b-2 border-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-white text-3xl font-bold hover:text-red-300 transition-all duration-300 flex items-center"
        >
          <span className="bg-white bg-opacity-20 p-2 rounded-lg mr-2">
            {/* Spider Web Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8l4 4-4 4m-4-4h8" />
            </svg>
          </span>
          Web<span className="text-red-300">Developer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {['Home', 'About', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase()}`} 
              className="relative px-4 py-2 text-white font-medium group transition-all duration-300 hover:text-red-300"
            >
              {item}
              {/* Web-like underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              <span className="absolute top-0 right-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 delay-100"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none hover:text-red-300 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Spider Web Inspired) */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-red-700 to-blue-900 shadow-inner border-t-2 border-white">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            {['Home', 'About', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className="px-4 py-3 text-white font-medium hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300 flex items-center border-l-4 border-transparent hover:border-red-400"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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