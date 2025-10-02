import { ArrowDown, Github, Linkedin, Mail, Phone, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { trackEvent } from '../GA';
import profileImage from "@/assets/profile.png";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { trackEvent } from '../GA';

const Hero = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [subtitleRef, subtitleVisible] = useScrollAnimation();
  const [bioRef, bioVisible] = useScrollAnimation();
  const [buttonsRef, buttonsVisible] = useScrollAnimation();
  const [socialRef, socialVisible] = useScrollAnimation();
  const [arrowRef, arrowVisible] = useScrollAnimation();

  const handleResumeDownload = () => {
    // Track the resume download event
    trackEvent('click', 'Button', 'Resume Download');
    
    // Replace this URL with your actual resume link
    // You can host your resume on Google Drive, Dropbox, or any file hosting service
    const resumeUrl = 'https://docs.google.com/document/d/1Dnqimfj390AeQMrvs6_cmc2ywYx_Ma6JiPGfv70lPyk/edit?usp=sharing'; // Replace with your actual resume URL
    
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
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center scroll-animate">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img 
              src={profileImage} 
              alt="Anuj Dekate" 
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-800 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

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
            onClick={() => trackEvent('click', 'Social Media', 'LinkedIn')}
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://github.com/5656ANUJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-all duration-300 hover:scale-110 transform hover:rotate-12 p-2 rounded-full hover:bg-gray-300/10"
            onClick={() => trackEvent('click', 'Social Media', 'GitHub')}
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.instagram.com/anuj__7620/profilecard/?igsh=MWl0ZmQ4dnNxMDFzYw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 transform hover:rotate-12 p-2 rounded-full hover:bg-pink-400/10"
            onClick={() => trackEvent('click', 'Social Media', 'Instagram')}
          >
            <Instagram size={28} />
          </a>
          <a 
            href="mailto:dekateanuj65@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 transform hover:rotate-12 p-2 rounded-full hover:bg-purple-400/10"
            onClick={() => trackEvent('click', 'Social Media', 'Email')}
          >
            <Mail size={28} />
          </a>
          <a 
            href="tel:7620013146"
            className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 transform hover:rotate-12 p-2 rounded-full hover:bg-green-400/10"
            onClick={() => trackEvent('click', 'Social Media', 'Phone')}
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
