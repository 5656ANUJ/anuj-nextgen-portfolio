import { 
  Brain,
  MessageSquare,
  Lightbulb,
  GitBranch,
  Layers,
  Users,
  Target,
  Palette as DesignIcon,
  Github
} from "lucide-react";

// Import logo files
import ReactLogo from '../assests/logos/icons8-react-native-50.svg';
import JavaScriptLogo from '../assests/logos/icons8-javascript-50.svg';
import PythonLogo from '../assests/logos/icons8-python.svg';
import CppLogo from '../assests/logos/icons8-c++-50.svg';
import ChatGPTLogo from '../assests/logos/icons8-chatgpt.svg';
import CursorLogo from '../assests/logos/icons8-cursor-ai-50.svg';
import HTMLLogo from '../assests/logos/icons8-html-5-50.svg';
import FigmaLogo from '../assests/logos/icons8-figma-50.svg';
import CLogo from '../assests/logos/icons8-c-programming-50.svg';
import CanvaLogo from '../assests/logos/icons8-canva-app-50.svg';

// CSS Logo Component
const CSSLogo = ({ className = "", size = 32 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size}
  >
    <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.003-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.733-1.43L18.59 4.414z"/>
  </svg>
);

// Tailwind CSS Logo Component
const TailwindLogo = ({ className = "", size = 32 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size}
  >
    <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
);

// Vercel Logo Component
const VercelLogo = ({ className = "", size = 32 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size}
  >
    <path fill="currentColor" d="M24 22.525H0l12-21.05 12 21.05z"/>
  </svg>
);

const skillCategories = [
  {
    title: "Frontend Development",
    color: "from-blue-400 to-blue-600",
    skills: [
      { name: "React.js", icon: <img src={ReactLogo} alt="React" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
      { name: "JavaScript", icon: <img src={JavaScriptLogo} alt="JavaScript" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
      { name: "HTML", icon: <img src={HTMLLogo} alt="HTML" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
      { name: "CSS", icon: <CSSLogo className="text-blue-500 hover:scale-110 transition-transform duration-300" size={32} /> },
      { name: "Tailwind CSS", icon: <TailwindLogo className="text-teal-400 hover:scale-110 transition-transform duration-300" size={32} /> },
    ]
  },
  {
    title: "Programming Languages",
    color: "from-green-400 to-green-600",
    skills: [
      { name: "Python", icon: <img src={PythonLogo} alt="Python" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
      { name: "C++", icon: <img src={CppLogo} alt="C++" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
      { name: "C", icon: <img src={CLogo} alt="C" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
      { name: "JavaScript", icon: <img src={JavaScriptLogo} alt="JavaScript" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
    ]
  },
  {
    title: "AI & Modern Tools",
    color: "from-purple-400 to-purple-600",
    skills: [
      { name: "AI Prompting", icon: <Brain className="text-purple-400 hover:scale-110 transition-transform duration-300" size={32} /> },
      { name: "Prompt Engineering", icon: <Target className="text-purple-500 hover:scale-110 transition-transform duration-300" size={32} /> },
      { name: "ChatGPT", icon: <img src={ChatGPTLogo} alt="ChatGPT" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
      { name: "Vercel", icon: <VercelLogo className="text-black hover:scale-110 transition-transform duration-300" size={32} /> },
    ]
  },
  {
    title: "Design & UI/UX",
    color: "from-pink-400 to-pink-600",
    skills: [
      { name: "Figma", icon: <img src={FigmaLogo} alt="Figma" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
      { name: "Canva", icon: <img src={CanvaLogo} alt="Canva" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
      { name: "UI/UX Design", icon: <DesignIcon className="text-purple-400 hover:scale-110 transition-transform duration-300" size={32} /> },
      { name: "Content Management", icon: <Layers className="text-gray-400 hover:scale-110 transition-transform duration-300" size={32} /> },
    ]
  },
  {
    title: "Development Tools",
    color: "from-orange-400 to-orange-600",
    skills: [
      { name: "GitHub", icon: <Github className="text-gray-300 hover:scale-110 transition-transform duration-300" size={32} /> },
      { name: "Version Control", icon: <GitBranch className="text-orange-500 hover:scale-110 transition-transform duration-300" size={32} /> },
      { name: "Cursor", icon: <img src={CursorLogo} alt="Cursor" className="w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
    ]
  },
  {
    title: "Soft Skills",
    color: "from-indigo-400 to-indigo-600",
    skills: [
      { name: "Problem Solving", icon: <Lightbulb className="text-yellow-400 hover:scale-110 transition-transform duration-300" size={32} /> },
      { name: "Project Management", icon: <Target className="text-indigo-400 hover:scale-110 transition-transform duration-300" size={32} /> },
      { name: "Leadership", icon: <Users className="text-blue-500 hover:scale-110 transition-transform duration-300" size={32} /> },
      { name: "Communication", icon: <MessageSquare className="text-green-400 hover:scale-110 transition-transform duration-300" size={32} /> },
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
                  <div key={skillIndex} className="flex items-center gap-4 group">
                    <div className="group-hover:animate-pulse">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 font-medium text-base group-hover:text-white transition-colors duration-200">{skill.name}</span>
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