import { Code, Database, Github, FileText, Figma, Terminal, Settings, User, FileCode, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-400 to-blue-600",
    skills: [
      { name: "React.js", icon: <Code className="text-blue-400 animate-bounce" size={32} /> },
      { name: "JavaScript", icon: <FileText className="text-yellow-400 animate-bounce" size={32} /> },
      { name: "HTML5", icon: <FileCode className="text-orange-500 animate-bounce" size={32} /> },
      { name: "CSS3", icon: <Palette className="text-blue-500 animate-bounce" size={32} /> },
      { name: "Tailwind CSS", icon: <Settings className="text-teal-400 animate-bounce" size={32} /> },
    ]
  },
  {
    title: "Backend & Database",
    color: "from-green-400 to-green-600",
    skills: [
      { name: "Firebase", icon: <Database className="text-yellow-500 animate-bounce" size={32} /> },
      { name: "Node.js", icon: <Terminal className="text-green-500 animate-bounce" size={32} /> },
      { name: "REST APIs", icon: <Settings className="text-gray-400 animate-bounce" size={32} /> },
    ]
  },
  {
    title: "Tools & Others",
    color: "from-purple-400 to-purple-600",
    skills: [
      { name: "Git & GitHub", icon: <Github className="text-gray-300 animate-bounce" size={32} /> },
      { name: "VS Code", icon: <Code className="text-blue-400 animate-bounce" size={32} /> },
      { name: "Figma", icon: <Figma className="text-pink-400 animate-bounce" size={32} /> },
      { name: "Project Management", icon: <User className="text-purple-400 animate-bounce" size={32} /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className="text-purple-400">Skills</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className={`text-2xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-4">
                    {skill.icon}
                    <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 