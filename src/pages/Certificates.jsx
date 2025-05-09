import { portfolioData } from "../data/portfolioData";
import { useState } from "react";
import { Award, ExternalLink, ChevronRight, Check, Clock } from "lucide-react";

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-blue-950 to-red-900 py-16 px-4 sm:px-6 lg:px-8 bg-[url('/img/web-pattern.png')] bg-repeat">
      <div className="max-w-5xl mx-auto">
        {/* Web decoration on top */}
        <div className="relative mb-12">
          <svg className="absolute -top-16 left-0 w-full opacity-20" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 Q50,0 100,50 Q150,100 200,50" stroke="white" strokeWidth="1" fill="none" />
            <path d="M0,50 Q50,100 100,50 Q150,0 200,50" stroke="white" strokeWidth="1" fill="none" />
            <path d="M50,0 L50,100" stroke="white" strokeWidth="1" fill="none" />
            <path d="M100,0 L100,100" stroke="white" strokeWidth="1" fill="none" />
            <path d="M150,0 L150,100" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="text-center mb-16 relative">
          {/* Spider icon */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-red-600">
              <path fill="currentColor" d="M12,1.5C10.5,1.5 9.75,2.25 9.75,3.75V4.5H14.25V3.75C14.25,2.25 13.5,1.5 12,1.5M7.5,4.5V3.75A4.5,4.5 0 0,1 12,2.25A4.5,4.5 0 0,1 16.5,3.75V4.5A1.5,1.5 0 0,1 18,6V7.5H17.25V6.75H6.75V7.5H6V6A1.5,1.5 0 0,1 7.5,4.5M15.75,7.5V9.375C16.125,9.375 16.5,9.375 16.875,9.75C16.875,9.75 16.5,10.5 15.75,10.125C15.75,12 15.75,12.75 15.375,13.5C14.625,13.875 13.5,14.25 12,14.25C10.5,14.25 9.375,13.875 8.625,13.5C8.25,12.75 8.25,12 8.25,10.125C7.5,10.5 7.125,9.75 7.125,9.75C7.5,9.375 7.875,9.375 8.25,9.375V7.5H6.75V10.5H6V7.5H4.5V6.75H6V6H3C3,6 3,16.5 3,18C3,19.5 4.5,21 6,21C7.5,21 18,21 18,21C19.5,21 21,19.5 21,18C21,16.5 21,6 21,6H18V6.75H19.5V7.5H18V10.5H17.25V7.5H15.75M7.5,10.5V12.75C7.5,12.75 9,12.75 10.5,14.25C10.5,12.75 7.5,12.75 7.5,10.5M16.5,10.5C16.5,12.75 13.5,12.75 13.5,14.25C15,12.75 16.5,12.75 16.5,10.5M12,15C12.75,15 13.5,15.375 13.5,15.75C13.5,16.125 12.75,16.5 12,16.5C11.25,16.5 10.5,16.125 10.5,15.75C10.5,15.375 11.25,15 12,15Z" />
            </svg>
          </div>
          
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 mb-4">
            Web of Achievements
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            With great power comes great certification. These industry-recognized credentials showcase my commitment to continuous learning.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.certificates.map((certificate, index) => {
            const [title, issuer] = certificate.split(' - ');
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`bg-blue-950 rounded-xl shadow-md transition-all duration-300 overflow-hidden border-2 ${
                  isActive ? "border-red-600 transform scale-105" : "border-blue-800 hover:shadow-xl hover:shadow-red-900/20"
                }`}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className="p-6 relative">
                  {/* Web corner decoration */}
                  <svg className="absolute top-0 right-0 w-16 h-16 text-red-900/20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L100,100" stroke="currentColor" strokeWidth="1" />
                    <path d="M20,0 L100,80" stroke="currentColor" strokeWidth="1" />
                    <path d="M40,0 L100,60" stroke="currentColor" strokeWidth="1" />
                    <path d="M60,0 L100,40" stroke="currentColor" strokeWidth="1" />
                    <path d="M80,0 L100,20" stroke="currentColor" strokeWidth="1" />
                    <path d="M0,20 L80,100" stroke="currentColor" strokeWidth="1" />
                    <path d="M0,40 L60,100" stroke="currentColor" strokeWidth="1" />
                    <path d="M0,60 L40,100" stroke="currentColor" strokeWidth="1" />
                    <path d="M0,80 L20,100" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-600 to-blue-600 text-white transform rotate-45">
                        <Award size={24} className="transform -rotate-45" />
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
                        <ChevronRight 
                          size={20} 
                          className={`text-red-500 transition-transform duration-300 ${isActive ? "transform rotate-90" : ""}`} 
                        />
                      </div>
                      <p className="text-gray-300 font-medium">{issuer || 'Accredited Institution'}</p>
                      
                      <div className={`mt-2 flex items-center text-sm text-gray-400 ${!isActive && "opacity-60"}`}>
                        <Clock size={16} className="mr-1" />
                        <span>Issued {2022 - index} • Valid for 3 years</span>
                      </div>
                    </div>
                  </div>
                  
                  {isActive && (
                    <div className="mt-6 pt-4 border-t border-gray-700 text-gray-300 space-y-3 animate-fadeIn">
                      <div className="flex items-center">
                        <Check size={16} className="mr-2 text-red-400" />
                        <span>Industry-recognized credential</span>
                      </div>
                      <div className="flex items-center">
                        <Check size={16} className="mr-2 text-red-400" />
                        <span>Validates expertise in {title.split(' ')[0]} technologies</span>
                      </div>
                      <div className="mt-4">
                        <a 
                          href="#" 
                          className="inline-flex items-center text-sm font-medium text-red-500 hover:text-red-400"
                        >
                          View credential
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="h-1.5 bg-gradient-to-r from-red-600 to-blue-600"></div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-blue-950 p-8 rounded-xl shadow-lg border-2 border-red-800 relative overflow-hidden">
          {/* Spider web corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="90" cy="10" r="10" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="90" cy="10" r="20" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="90" cy="10" r="30" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="90" cy="10" r="40" fill="none" stroke="white" strokeWidth="0.5" />
              <line x1="90" y1="10" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="90" y1="10" x2="70" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="90" y1="10" x2="50" y2="30" stroke="white" strokeWidth="0.5" />
              <line x1="90" y1="10" x2="90" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="90" y1="10" x2="70" y2="10" stroke="white" strokeWidth="0.5" />
              <line x1="90" y1="10" x2="50" y2="10" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          
          <div className="flex items-center relative z-10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-red-300">
                  <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-100">Spider-Sense Tingling?</h3>
              <p className="mt-1 text-gray-300">
                Just like Peter Parker constantly hones his skills, I'm always leveling up with new courses and certifications.
                Swing by later to see what new web-slinging tech I've mastered!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spider web corner decoration */}
      <div className="fixed bottom-0 left-0 w-40 h-40 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="100" r="10" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="0" cy="100" r="20" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="0" cy="100" r="30" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="0" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="0" cy="100" r="50" fill="none" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="50" y2="70" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="30" y2="50" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="0" y2="50" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="50" y2="100" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Small spider at the bottom */}
      <div className="fixed bottom-4 right-4 w-8 h-8 text-red-600 opacity-80 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.5,2C16.5,2 15,2 13.5,3.5C12,2 10.5,2 10.5,2L9,3.5C11,5.5 12,8 12,8C12,8 13,5.5 15,3.5L16.5,2M4.5,5C4.5,5 3,5 1.5,6.5L3,8C5,6 8,6 8,6C8,6 6,9 4,11L2.5,12.5C2.5,12.5 5,11 6.5,11C8,11 9,12 9,13.5C9,15 7.5,16.5 7.5,16.5L9,18C9,18 12,15 13.5,15S18,18 18,18L19.5,16.5C19.5,16.5 18,15 18,13.5C18,12 19,11 20.5,11C22,11 24.5,12.5 24.5,12.5L23,11C21,9 19,6 19,6C19,6 22,6 24,8L25.5,6.5C24,5 22.5,5 22.5,5L21,6.5C19,4.5 18,2 18,2C18,2 17,5 13.5,7.5C10,5 9,2 9,2C9,2 8,4.5 6,6.5L4.5,5Z" />
        </svg>
      </div>
    </div>
  );
}