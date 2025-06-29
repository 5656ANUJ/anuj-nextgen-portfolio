import { 
  Code, 
  Database, 
  Github, 
  FileText, 
  Figma, 
  Terminal, 
  Settings, 
  User, 
  FileCode, 
  Palette,
  Brain,
  MessageSquare,
  Lightbulb,
  GitBranch,
  Layers,
  Users,
  Globe,
  Cpu,
  Zap,
  Target,
  BookOpen,
  Palette as DesignIcon,
  Monitor
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    color: "from-blue-400 to-blue-600",
    skills: [
      { name: "React.js", icon: <Code className="text-blue-400 animate-bounce" size={32} /> },
      { name: "JavaScript", icon: <FileText className="text-yellow-400 animate-bounce" size={32} /> },
      { name: "HTML", icon: <FileCode className="text-orange-500 animate-bounce" size={32} /> },
      { name: "CSS", icon: <Palette className="text-blue-500 animate-bounce" size={32} /> },
      { name: "Tailwind CSS", icon: <DesignIcon className="text-teal-400 animate-bounce" size={32} /> },
    ]
  },
  {
    title: "Programming Languages",
    color: "from-green-400 to-green-600",
    skills: [
      { name: "Python", icon: <Cpu className="text-green-500 animate-bounce" size={32} /> },
      { name: "C++", icon: <Code className="text-blue-600 animate-bounce" size={32} /> },
      { name: "C", icon: <Terminal className="text-gray-400 animate-bounce" size={32} /> },
      { name: "JavaScript", icon: <FileText className="text-yellow-400 animate-bounce" size={32} /> },
    ]
  },
  {
    title: "AI & Modern Tools",
    color: "from-purple-400 to-purple-600",
    skills: [
      { name: "AI Prompting", icon: <Brain className="text-purple-400 animate-bounce" size={32} /> },
      { name: "Prompt Engineering", icon: <Target className="text-purple-500 animate-bounce" size={32} /> },
      { name: "ChatGPT", icon: <MessageSquare className="text-green-400 animate-bounce" size={32} /> },
      { name: "Vercel", icon: <Globe className="text-black animate-bounce" size={32} /> },
    ]
  },
  {
    title: "Design & UI/UX",
    color: "from-pink-400 to-pink-600",
    skills: [
      { name: "Figma", icon: <Figma className="text-pink-400 animate-bounce" size={32} /> },
      { name: "Canva", icon: <Palette className="text-blue-400 animate-bounce" size={32} /> },
      { name: "UI/UX Design", icon: <DesignIcon className="text-purple-400 animate-bounce" size={32} /> },
      { name: "Content Management", icon: <Layers className="text-gray-400 animate-bounce" size={32} /> },
    ]
  },
  {
    title: "Development Tools",
    color: "from-orange-400 to-orange-600",
    skills: [
      { name: "GitHub", icon: <Github className="text-gray-300 animate-bounce" size={32} /> },
      { name: "Version Control", icon: <GitBranch className="text-orange-500 animate-bounce" size={32} /> },
      { name: "Cursor", icon: <Monitor className="text-blue-400 animate-bounce" size={32} /> },
    ]
  },
  {
    title: "Soft Skills",
    color: "from-indigo-400 to-indigo-600",
    skills: [
      { name: "Problem Solving", icon: <Lightbulb className="text-yellow-400 animate-bounce" size={32} /> },
      { name: "Project Management", icon: <Target className="text-indigo-400 animate-bounce" size={32} /> },
      { name: "Leadership", icon: <Users className="text-blue-500 animate-bounce" size={32} /> },
      { name: "Communication", icon: <MessageSquare className="text-green-400 animate-bounce" size={32} /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className="text-purple-400">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-4">
                    {skill.icon}
                    <span className="text-gray-300 font-medium text-base">{skill.name}</span>
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