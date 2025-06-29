import { ArrowDown, Github, Linkedin, Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anuj Dekate
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Web Developer | Software Engineer | Frontend Specialist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Aspiring Full-Stack Developer & Future Freelancer. Building responsive, 
            interactive web applications with modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </Button>
          <Button 
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://www.linkedin.com/in/anuj-dekate-developer" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://github.com/5656ANUJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-200 hover:scale-110 transform"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.instagram.com/anuj__7620/profilecard/?igsh=MWl0ZmQ4dnNxMDFzYw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <Instagram size={28} />
          </a>
          <a 
            href="mailto:dekateanuj65@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <Mail size={28} />
          </a>
          <a 
            href="tel:7620013146"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <Phone size={28} />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown 
            size={32} 
            className="text-gray-400 mx-auto cursor-pointer hover:text-white transition-colors duration-200"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 