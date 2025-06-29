
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "InternPro",
      location: "Maharashtra, India",
      period: "June 2025 - Present",
      type: "Internship",
      description: "Working on real-world web development projects, gaining hands-on experience with modern frameworks and best practices.",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Content Creator",
      company: "YouTube - The NextGen Yatra",
      location: "India",
      period: "June 2025 - Present",
      type: "Self-Employed",
      description: "Creating educational content about MERN stack development, sharing coding tutorials, tips & tricks, and documenting my dev journey for aspiring developers.",
      color: "from-red-500 to-pink-600"
    }
  ];

  const certifications = [
    "IEEE Cybersecurity Workshop",
    "CodeQuest MCQ Challenge", 
    "Let's Upgrade Certification"
  ];

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
                <div>
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
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700/70 transition-colors duration-200">
                <p className="text-gray-300 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
