
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-purple-900/5 to-slate-900/30" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-float-delayed"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            About <span className="gradient-text-animate bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know me better and my journey in tech
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 scroll-animate scroll-animate-delay-200 ${contentVisible ? 'animate-in' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4 gradient-text-animate bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Passionate Developer & Future Entrepreneur
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed hover:text-gray-200 transition-colors duration-300">
                  I am a highly motivated B.Tech student with a strong passion for web development 
                  and software engineering. Currently pursuing my degree at SINHGAD INSTITUTE OF 
                  TECHNOLOGY, LONAVLA, I specialize in building responsive, interactive web applications.
                </p>
                <p className="leading-relaxed hover:text-gray-200 transition-colors duration-300">
                  My journey includes developing projects like Amazon and Zomato clones, as well as 
                  interactive browser games. I'm also a content creator on YouTube with "The NextGen Yatra" 
                  channel, sharing my dev journey with aspiring developers.
                </p>
                <p className="leading-relaxed hover:text-gray-200 transition-colors duration-300">
                  My ultimate goal is to become a versatile Software Development Engineer and work 
                  with innovative teams at leading tech firms while pursuing freelance opportunities.
                </p>
              </div>
            </div>
            
            <div 
              ref={statsRef}
              className={`space-y-4 scroll-stagger ${statsVisible ? 'animate-in' : ''}`}
            >
              <div className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50 hover:scale-105 transform">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Education</h4>
                <p className="text-gray-300">B.Tech in Electronics & Communications</p>
                <p className="text-gray-400 text-sm">SINHGAD INSTITUTE (2024-2028)</p>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50 hover:scale-105 transform">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Current Role</h4>
                <p className="text-gray-300">Web Development Intern</p>
                <p className="text-gray-400 text-sm">InternPro (June 2025 - Present)</p>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-green-500/50 hover:scale-105 transform">
                <h4 className="text-lg font-semibold text-green-400 mb-2">Content Creator</h4>
                <p className="text-gray-300">The NextGen Yatra - YouTube</p>
                <p className="text-gray-400 text-sm">Teaching MERN Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
