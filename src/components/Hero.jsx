import { ArrowDown, Github, Linkedin, Mail, Phone, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [subtitleRef, subtitleVisible] = useScrollAnimation();
  const [bioRef, bioVisible] = useScrollAnimation();
  const [buttonsRef, buttonsVisible] = useScrollAnimation();
  const [socialRef, socialVisible] = useScrollAnimation();
  const [arrowRef, arrowVisible] = useScrollAnimation();

  const handleResumeDownload = () => {
    // Replace this URL with your actual resume link
    // You can host your resume on Google Drive, Dropbox, or any file hosting service
    const resumeUrl = 'https://docs.google.com/document/d/e/2PACX-1vSJpLe9h9QIcs3v9h5OmToRvZWScHKwdXXb-tjA8x62g5dkrOdDXY_PRS4KNbG4ZO7anPdPkkwfKrWY/pub'; // Replace with your actual resume URL
    
    // Open resume in new tab
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Background gradient with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Floating animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-20 right-32 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div 
          ref={titleRef}
          className={`mb-8 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="gradient-text-animate bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Anuj Dekate
            </span>
          </h1>
        </div>

        <div 
          ref={subtitleRef}
          className={`scroll-animate scroll-animate-delay-200 ${subtitleVisible ? 'animate-in' : ''}`}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
            Web Developer | Software Engineer | Frontend Specialist
          </p>
        </div>

        <div 
          ref={bioRef}
          className={`scroll-animate scroll-animate-delay-300 ${bioVisible ? 'animate-in' : ''}`}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Aspiring Full-Stack Developer & Future Freelancer. Building responsive, 
              interactive web applications with modern technologies. Currently pursuing 
              B.Tech and specializing in MERN stack development.
            </p>
          </div>
        </div>

        <div 
          ref={buttonsRef}
          className={`flex flex-wrap justify-center gap-4 mb-12 scroll-animate scroll-animate-delay-400 ${buttonsVisible ? 'animate-in' : ''}`}
        >
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </Button>
          <Button 
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-400/25"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
          <Button 
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </Button>
        </div>

        <div 
          ref={socialRef}
          className={`flex justify-center space-x-6 mb-12 scroll-animate scroll-animate-delay-500 ${socialVisible ? 'animate-in' : ''}`}
        >
          <a 
            href="https://www.linkedin.com/in/anuj-dekate-developer" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform hover:rotate-12 p-2 rounded-full hover:bg-blue-400/10"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://github.com/5656ANUJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-all duration-300 hover:scale-110 transform hover:rotate-12 p-2 rounded-full hover:bg-gray-300/10"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.instagram.com/anuj__7620/profilecard/?igsh=MWl0ZmQ4dnNxMDFzYw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 transform hover:rotate-12 p-2 rounded-full hover:bg-pink-400/10"
          >
            <Instagram size={28} />
          </a>
          <a 
            href="mailto:dekateanuj65@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 transform hover:rotate-12 p-2 rounded-full hover:bg-purple-400/10"
          >
            <Mail size={28} />
          </a>
          <a 
            href="tel:7620013146"
            className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 transform hover:rotate-12 p-2 rounded-full hover:bg-green-400/10"
          >
            <Phone size={28} />
          </a>
        </div>

        <div 
          ref={arrowRef}
          className={`scroll-animate scroll-animate-delay-600 ${arrowVisible ? 'animate-in' : ''}`}
        >
          <ArrowDown 
            size={32} 
            className="text-gray-400 mx-auto cursor-pointer hover:text-white transition-all duration-300 hover:scale-110 animate-bounce"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
