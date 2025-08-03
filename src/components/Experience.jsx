import { Calendar, MapPin, Building, Award, ExternalLink, X, Info } from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      title: "Web Development Intern",
      company: "InternPro",
      location: "Maharashtra, India · Remote",
      period: "June - July 2025",
      duration: "2 months",
      type: "Internship",
      description: "Working on real-world web development projects, gaining hands-on experience with modern frameworks and best practices.",
      color: "from-blue-500 to-purple-600",
      detailedDescription: "Being an intern at InternPro and a fresher, I got the opportunity to work on a real-world project. Our team was assigned to develop a Coaching Centre Website with an Admin Dashboard. I was assigned the role of an assistant designer for the UI part of the website, and I also helped with testing and suggesting new features.\n\nI gave a lot of suggestions related to the UI and feature improvements. Being a 12th-grade student at a coaching center myself, I understood where students face issues, so I suggested features based on my own experience.\n\nWe are still working on the backend part of the website.",
      skills: ["HTML", "Tailwind CSS", "Leadership", "Version Control", "React.js", "Problem Solving", "Project Management", "JavaScript", "Object-Oriented Programming (OOP)", "GitHub", "Cascading Style Sheets (CSS)"],
      achievements: [
        "Contributed to UI design suggestions based on real user experience",
        "Assisted in testing and feature development",
        "Collaborated effectively in team environment"
      ]
    },
    {
      title: "Content Creator",
      company: "YouTube - The NextGen Yatra",
      location: "India · Remote",
      period: "June - July 2025",
      duration: "2 months",
      type: "Self-Employed",
      description: "Creating educational content about MERN stack development, sharing coding tutorials, tips & tricks, and documenting my dev journey for aspiring developers.",
      color: "from-red-500 to-pink-600",
      detailedDescription: "🚀 Welcome to The NextGen Yatra — where code meets consistency, and learning becomes a legacy.\n\nI'm Anuj, a self-taught web developer on a mission to master the MERN stack and share everything I learn along the way. From building projects in HTML, CSS, Tailwind, JavaScript, and React, to exploring tools like Git, GitHub, VS Code, and beyond — this channel is your backstage pass into my real-time dev journey.\n\n🎯 What you'll find here:\n• Beginner-friendly MERN tutorials and walkthroughs\n• Tips & tricks for coding smarter, not harder\n• My honest journey: struggles, wins, projects, and growth\n• Dev tools, Git workflows, VS Code extensions, and more\n• A student-friendly space to learn and grow together ✨\n\nWhether you're just starting your dev path or you're already building projects — join the #NextGenYatra and let's code the future together 🔥\n\n📅 New videos weekly | Shorts + dev logs + full builds",
      skills: ["Content Management", "Canva", "Leadership", "Communication"],
      achievements: [
        "Building educational content for aspiring developers",
        "Documenting real-time development journey",
        "Creating beginner-friendly tutorials"
      ]
    }
  ];

  const certifications = [
    {
      title: "Graphic Design with Canva",
      issuer: "LetsUpgrade",
      date: "June 2025",
      skills: ["Canva", "Graphic Design"],
      description: "Comprehensive graphic design certification covering design principles and Canva tools.",
      logo: "LetsUpgrade"
    },
    {
      title: "UI UX Design with Figma and Adobe XD",
      issuer: "Udemy", 
      date: "June 2025",
      skills: ["Figma (Software)", "Wireframing", "UI/UX"],
      description: "Complete UI/UX design course covering wireframing, prototyping, and design systems.",
      logo: "Udemy"
    },
    {
      title: "Instagram Clone Figma Design",
      issuer: "LetsUpgrade",
      date: "April 2025",
      skills: ["Figma (Software)", "UI/UX", "Graphic Design"],
      description: "Advanced design and development skills certification program.",
      logo: "LetsUpgrade"
    },
    {
      title: "CodeQuest MCQ Challenge",
      issuer: "Unstop",
      date: "March 2025",
      skills: ["Programming", "Problem Solving", "Technical Skills"],
      description: "Competitive programming challenge testing coding knowledge and problem-solving abilities.",
      logo: "Unstop"
    },
  ];

  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Experience & <span className="text-purple-400">Certifications</span>
        </h2>
        
        <div className="space-y-8 mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <Building size={16} className="mr-2" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white mb-2`}>
                    {exp.type}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm mb-1">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <button
                onClick={() => openModal(exp)}
                className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Info size={16} />
                More Info
              </button>
            </div>
          ))}
        </div>

        {/* Experience Detail Modal */}
        {selectedExperience && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-slate-800 p-6 border-b border-slate-700 flex justify-between items-start rounded-t-2xl">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedExperience.title}</h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <Building size={18} className="mr-2" />
                    {selectedExperience.company}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {selectedExperience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {selectedExperience.location}
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-slate-700 hover:bg-slate-600 p-2 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-300" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="mb-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${selectedExperience.color} text-white`}>
                    {selectedExperience.type}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {selectedExperience.detailedDescription}
                  </div>
                </div>

                {selectedExperience.achievements && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedExperience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.skills.map((skill, index) => (
                      <span key={index} className="bg-slate-700/70 text-gray-300 text-sm px-3 py-1 rounded-full border border-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center flex items-center justify-center">
            <Award className="mr-2 text-purple-400" size={28} />
            Certifications & Licenses
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50 hover:scale-105 transform">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                    <div className="flex items-center text-gray-300 mb-2">
                      <Building size={14} className="mr-2" />
                      {cert.issuer}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <Calendar size={14} className="mr-1" />
                      Issued {cert.date}
                    </div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg px-3 py-1">
                    <span className="text-purple-400 text-xs font-medium">{cert.logo}</span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-gray-300 text-sm mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-slate-600/50 text-gray-300 text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
