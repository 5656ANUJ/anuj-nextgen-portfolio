import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Coaching Centre Website & Admin",
      description: "A comprehensive web application for coaching centres with admin panel. Built with React.js, Tailwind CSS, and modern web technologies.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      status: "In Progress",
      category: "Web Application",
      color: "from-blue-500 to-purple-600",
      githubUrl: "https://github.com/yourusername/coaching-centre-website",
      liveUrl: "https://coaching-centre-demo.vercel.app"
    },
    {
      title: "MENTOR HUB",
      description: "A platform connecting students with alumni and mentors. Features include 1:1 mentorship, doubt solving, chat, discussion groups, AI resume builder, and interview practice.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Figma", "GitHub"],
      status: "MVP Ready",
      category: "EdTech Platform",
      color: "from-green-500 to-teal-600",
      githubUrl: "https://github.com/yourusername/mentor-hub",
      liveUrl: "https://5656anuj.github.io/alumniportal56/"
    },
    {
      title: "Amazon Clone",
      description: "A fully responsive e-commerce web application replicating Amazon's functionality with modern UI/UX design and interactive features.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      status: "Completed",
      category: "E-commerce",
      color: "from-orange-500 to-red-600",
      githubUrl: "https://github.com/yourusername/amazon-clone",
      liveUrl: "https://5656anuj.github.io/developmentprojects/amazon%20clone/"
    },
    {
      title: "Zomato Clone",
      description: "Food delivery application clone with restaurant listings, menu browsing, and interactive user interface matching Zomato's design.",
      tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
      status: "Completed",
      category: "Food Tech",
      color: "from-pink-500 to-rose-600",
      githubUrl: "https://github.com/yourusername/zomato-clone",
      liveUrl: "https://zomato-clone-demo.netlify.app"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm mb-2">{project.category}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 