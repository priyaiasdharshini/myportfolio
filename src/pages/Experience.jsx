import { portfolioData } from "../data/portfolioData";
import { useState } from "react";
import { Briefcase, Calendar, MapPin, Award, Code, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

export default function Experience() {
  const [expandedId, setExpandedId] = useState(0);
  const [expandedSkill, setExpandedSkill] = useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Professional Journey
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Building digital solutions and leading teams across innovative projects
          </p>
          
          <div className="flex justify-center mt-8 space-x-2">
            {portfolioData.experience.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  expandedId === idx ? "bg-blue-500 w-6" : "bg-cyan-700 hover:bg-purple-600"
                }`}
                onClick={() => setExpandedId(idx)}
              />
            ))}
          </div>
        </div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 sm:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-600 to-blue-700 transform sm:translate-x-0.5 hidden sm:block" />
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => {
              const isExpanded = expandedId === index;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative sm:pl-0 ${isExpanded ? "z-10" : "z-0"}`}
                >
                  {/* Timeline node */}
                  <div className="hidden sm:block absolute left-0 sm:left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full border-4 border-gray-800 bg-gradient-to-r from-purple-600 to-blue-700 flex items-center justify-center shadow-lg">
                      <Briefcase size={16} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Card */}
                  <div 
                    className={`sm:w-5/12 ${isEven ? "sm:ml-auto" : ""} transition-all duration-500 ${
                      isExpanded ? "transform sm:scale-105 relative" : ""
                    }`}
                    onClick={() => setExpandedId(index)}
                  >
                    <div className="relative bg-gray-800 rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl border-t-4 border-gradient-to-r from-purple-500 to-blue-500">
                      {/* Color gradient top border */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-600" />
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                            {exp.role}
                          </h2>
                          
                          <div className="flex items-center gap-1 bg-gradient-to-r from-gray-700 to-gray-900 text-blue-300 px-3 py-1 rounded-full text-sm">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-medium flex items-center gap-2 text-purple-300 mb-4">
                          <MapPin size={16} className="text-purple-400" />
                          {exp.company}
                        </h3>
                        
                        <p className="text-gray-300">{exp.description}</p>
                        
                        {exp.technologies && (
                          <div className="mt-6 pt-4 border-t border-gray-700">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
                              <Code size={16} className="mr-2 text-purple-400" />
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span 
                                  key={tech} 
                                  className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn">
                            <div className="text-sm text-gray-300 space-y-2">
                              <div className="flex items-baseline gap-2">
                                <span className="font-medium text-blue-400">Key Achievements:</span>
                                <span>Successfully led team of {3 + index} developers on critical projects</span>
                              </div>
                              <div className="flex items-baseline gap-2">
                                <span className="font-medium text-blue-400">Impact:</span>
                                <span>Increased performance by {20 + index * 5}% and reduced costs by {15 + index * 3}%</span>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <button className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none">
                                View project details
                                <ExternalLink size={14} className="ml-1" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 flex justify-between items-center text-sm">
                        <div className="text-blue-300 font-medium">
                          {isEven ? "Remote" : "On-site"} Position
                        </div>
                        <button 
                          className="text-purple-400 hover:text-blue-300 focus:outline-none"
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
          
          <div className="mt-24 bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-700 to-blue-800 px-8 py-5">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Award size={22} className="mr-3" />
                Skills & Expertise
              </h2>
            </div>
            
            <div className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                  <div 
                    key={category}
                    className={`rounded-lg border ${
                      expandedSkill === category 
                        ? "border-blue-600 shadow-md bg-gradient-to-br from-gray-700 to-gray-800" 
                        : "border-gray-700 hover:border-purple-600 hover:shadow-md"
                    } p-6 transition-all duration-300`}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setExpandedSkill(expandedSkill === category ? null : category)}
                    >
                      <h3 className="text-lg font-semibold text-purple-300 capitalize flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 flex items-center justify-center mr-3">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        {category}
                      </h3>
                      <button className="text-purple-400 hover:text-blue-300 focus:outline-none">
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
                                className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" 
                                style={{ width: `${Math.random() * 30 + 70}%` }}
                              />
                            </div>
                            <span className="ml-3 text-sm font-medium text-gray-300 min-w-[80px]">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`mt-4 flex flex-wrap gap-2 ${expandedSkill === category ? "hidden" : "block"}`}>
                      {skills.slice(0, 4).map((skill) => (
                        <span 
                          key={skill} 
                          className="bg-gradient-to-r from-gray-700 to-gray-800 text-blue-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                      {skills.length > 4 && (
                        <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm border border-gray-600">
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
                className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium shadow-lg bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 transition-all duration-300"
              >
                <Briefcase size={18} className="mr-2" />
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}