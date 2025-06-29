const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About <span className="text-purple-400">Me</span>
        </h2>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Passionate Developer & Future Entrepreneur
              </h3>
              <p className="text-gray-300 mb-4">
                I am a highly motivated B.Tech student with a strong passion for web development 
                and software engineering. Currently pursuing my degree at SINHGAD INSTITUTE OF 
                TECHNOLOGY, LONAVLA, I specialize in building responsive, interactive web applications.
              </p>
              <p className="text-gray-300 mb-4">
                My journey includes developing projects like Amazon and Zomato clones, as well as 
                interactive browser games. I'm also a content creator on YouTube with "The NextGen Yatra" 
                channel, sharing my dev journey with aspiring developers.
              </p>
              <p className="text-gray-300">
                My ultimate goal is to become a versatile Software Development Engineer and work 
                with innovative teams at leading tech firms while pursuing freelance opportunities.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Education</h4>
                <p className="text-gray-300">B.Tech in Electronics & Communications</p>
                <p className="text-gray-400 text-sm">SINHGAD INSTITUTE (2024-2028)</p>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Current Role</h4>
                <p className="text-gray-300">Web Development Intern</p>
                <p className="text-gray-400 text-sm">InternPro (June 2025 - Present)</p>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-4">
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