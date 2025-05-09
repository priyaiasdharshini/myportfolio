import { portfolioData } from "../data/portfolioData";
import { useState } from "react";
import { Briefcase, Calendar, MapPin, Award, Code, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

export default function Experience() {
  const [expandedId, setExpandedId] = useState(0);
  const [expandedSkill, setExpandedSkill] = useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-blue-950 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Spider web background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-red-500 rounded-full" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 30%, 30% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 border-2 border-blue-500 rounded-full" style={{ clipPath: 'polygon(70% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 70%)' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 mb-4 font-comic">
            With Great Power Comes Great Responsibility
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-comic">
            Swinging through my career journey fighting bugs and saving projects
          </p>
          
          <div className="flex justify-center mt-8 space-x-2">
            {portfolioData.experience.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  expandedId === idx ? "bg-red-500 w-6" : "bg-blue-700 hover:bg-red-600"
                }`}
                onClick={() => setExpandedId(idx)}
              />
            ))}
          </div>
        </div>
        
        <div className="relative">
          {/* Vertical timeline line with web pattern */}
          <div className="absolute left-0 sm:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-red-600 to-blue-600 transform sm:translate-x-0.5 hidden sm:block">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_90%,#fff_90%,#fff_92%,transparent_92%,transparent_100%)] bg-[length:100%_20px]"></div>
          </div>
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => {
              const isExpanded = expandedId === index;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative sm:pl-0 ${isExpanded ? "z-10" : "z-0"}`}
                >
                  {/* Timeline node - spider emblem */}
                  <div className="hidden sm:block absolute left-0 sm:left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full border-4 border-gray-800 bg-gradient-to-r from-red-600 to-blue-700 flex items-center justify-center shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
                        <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2M12 4C16.1 4 19.5 7.4 19.5 11.5C19.5 15.1 16.6 18.1 13 18.5V16.5C15.2 16.1 17 14.2 17 12C17 9.2 14.8 7 12 7C9.2 7 7 9.2 7 12C7 14.2 8.8 16.1 11 16.5V18.5C7.4 18.1 4.5 15.1 4.5 11.5C4.5 7.4 7.9 4 12 4Z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Card with comic book styling */}
                  <div 
                    className={`sm:w-5/12 ${isEven ? "sm:ml-auto" : ""} transition-all duration-500 ${
                      isExpanded ? "transform sm:scale-105 relative" : ""
                    }`}
                    onClick={() => setExpandedId(index)}
                  >
                    <div className="relative bg-gray-800 rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl border-t-4 border-gradient-to-r from-red-500 to-blue-500 comic-panel">
                      {/* Comic book dots pattern */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:10px_10px] opacity-20"></div>
                      
                      {/* Color gradient top border */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${isEven ? 'from-red-500 to-blue-600' : 'from-blue-500 to-red-600'}`} />
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-xl font-bold text-gray-100 group-hover:text-red-400 transition-colors font-comic">
                            {exp.role}
                          </h2>
                          
                          <div className="flex items-center gap-1 bg-gradient-to-r from-gray-700 to-gray-900 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500 border-dashed">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-medium flex items-center gap-2 text-red-300 mb-4 font-comic">
                          <MapPin size={16} className="text-red-400" />
                          {exp.company}
                        </h3>
                        
                        <p className="text-gray-300 font-comic">{exp.description}</p>
                        
                        {exp.technologies && (
                          <div className="mt-6 pt-4 border-t border-gray-700">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center font-comic">
                              <Code size={16} className="mr-2 text-blue-400" />
                              Web Shooters (Tech Used):
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span 
                                  key={tech} 
                                  className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600 font-comic"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn">
                            <div className="text-sm text-gray-300 space-y-2 font-comic">
                              <div className="flex items-baseline gap-2">
                                <span className="font-medium text-red-400">Villains Defeated:</span>
                                <span>Successfully debugged {3 + index} critical production issues</span>
                              </div>
                              <div className="flex items-baseline gap-2">
                                <span className="font-medium text-blue-400">Impact:</span>
                                <span>Increased performance by {20 + index * 5}% and reduced costs by {15 + index * 3}%</span>
                              </div>
                              <div className="flex items-baseline gap-2">
                                <span className="font-medium text-red-400">Spidey-Sense:</span>
                                <span>Anticipated and prevented {2 + index} major system failures</span>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <button className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none font-comic">
                                View project details
                                <ExternalLink size={14} className="ml-1" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 flex justify-between items-center text-sm border-t border-dashed border-gray-600">
                        <div className="text-blue-300 font-medium font-comic">
                          {isEven ? "Daily Bugle" : "Stark Industries"} Division
                        </div>
                        <button 
                          className="text-red-400 hover:text-blue-300 focus:outline-none"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedId(isExpanded ? null : index);
                          }}
                        >
                          {isExpanded ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-24 bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden comic-panel">
            <div className="bg-gradient-to-r from-red-700 to-blue-800 px-8 py-5">
              <h2 className="text-2xl font-bold text-white flex items-center font-comic">
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3 text-white">
                  <path fill="currentColor" d="M11,2V22C5.9,21.5 2,17.2 2,12C2,6.8 5.9,2.5 11,2M13,2V11H22C21.5,6.2 17.8,2.5 13,2M13,13V22C17.7,21.5 21.5,17.8 22,13H13Z" />
                </svg>
                Spidey Skills & Powers
              </h2>
            </div>
            
            <div className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                  <div 
                    key={category}
                    className={`rounded-lg border ${
                      expandedSkill === category 
                        ? "border-red-600 shadow-md bg-gradient-to-br from-gray-700 to-gray-800" 
                        : "border-gray-700 hover:border-blue-600 hover:shadow-md"
                    } p-6 transition-all duration-300 comic-panel`}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setExpandedSkill(expandedSkill === category ? null : category)}
                    >
                      <h3 className="text-lg font-semibold text-red-300 capitalize flex items-center font-comic">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${index % 2 ? 'from-blue-600 to-red-700' : 'from-red-600 to-blue-700'} flex items-center justify-center mr-3`}>
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        {category.replace('skills', 'powers')}
                      </h3>
                      <button className="text-blue-400 hover:text-red-300 focus:outline-none">
                        {expandedSkill === category ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                    </div>
                    
                    <div className={`mt-4 ${expandedSkill === category ? "block" : "hidden"}`}>
                      <div className="space-y-3">
                        {skills.map((skill) => (
                          <div key={skill} className="flex items-center">
                            <div className="w-full bg-gray-600 rounded-full h-2.5">
                              <div 
                                className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-600" 
                                style={{ width: `${Math.random() * 30 + 70}%` }}
                              />
                            </div>
                            <span className="ml-3 text-sm font-medium text-gray-300 min-w-[80px] font-comic">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`mt-4 flex flex-wrap gap-2 ${expandedSkill === category ? "hidden" : "block"}`}>
                      {skills.slice(0, 4).map((skill) => (
                        <span 
                          key={skill} 
                          className="bg-gradient-to-r from-gray-700 to-gray-800 text-blue-300 px-3 py-1 rounded-full text-sm border border-gray-600 font-comic"
                        >
                          {skill}
                        </span>
                      ))}
                      {skills.length > 4 && (
                        <span className="bg-gray-700 text-red-300 px-3 py-1 rounded-full text-sm border border-gray-600 font-comic">
                          +{skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 py-8">
            <div className="text-center">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium shadow-lg bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-700 hover:to-blue-800 transition-all duration-300 font-comic border-2 border-white border-dashed hover:border-solid"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 text-white">
                  <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                Download Spidey Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add some comic style burst elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-red-500 opacity-20 rounded-full blur-md"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-md"></div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
        .font-comic {
          font-family: 'Bangers', cursive;
          letter-spacing: 1px;
        }
        .comic-panel {
          box-shadow: 5px 5px 0px rgba(0,0,0,0.2);
          border: 2px solid #333 !important;
        }
        .comic-panel:hover {
          box-shadow: 8px 8px 0px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}