import { portfolioData } from "../data/portfolioData";
import { useState } from "react";
import { Award, ExternalLink, ChevronRight, Check, Clock } from "lucide-react";

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Professional Certifications
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My commitment to continuous learning and professional development is reflected in these industry-recognized certifications.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.certificates.map((certificate, index) => {
            const [title, issuer] = certificate.split(' - ');
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`bg-slate-800 rounded-xl shadow-md transition-all duration-300 overflow-hidden ${
                  isActive ? "ring-2 ring-cyan-400 transform scale-105" : "hover:shadow-xl hover:shadow-cyan-900/20"
                }`}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                        <Award size={24} />
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
                        <ChevronRight 
                          size={20} 
                          className={`text-cyan-400 transition-transform duration-300 ${isActive ? "transform rotate-90" : ""}`} 
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
                        <Check size={16} className="mr-2 text-green-400" />
                        <span>Industry-recognized credential</span>
                      </div>
                      <div className="flex items-center">
                        <Check size={16} className="mr-2 text-green-400" />
                        <span>Validates expertise in {title.split(' ')[0]} technologies</span>
                      </div>
                      <div className="mt-4">
                        <a 
                          href="#" 
                          className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
                        >
                          View credential
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-slate-800 p-8 rounded-xl shadow-lg border border-purple-900">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-900">
                <svg className="h-6 w-6 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-100">Continuing Education</h3>
              <p className="mt-1 text-gray-300">
                I'm constantly expanding my skillset through courses and certifications.
                Check back regularly to see my latest achievements!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}