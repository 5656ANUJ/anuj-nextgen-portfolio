import { Phone, Mail, Linkedin, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "7620013146",
      href: "tel:7620013146",
      color: "text-green-400"
    },
    {
      icon: Phone,
      label: "Alternative",
      value: "9527104129",
      href: "tel:9527104129",
      color: "text-green-400"
    },
    {
      icon: Mail,
      label: "Email",
      value: "dekateanuj65@gmail.com",
      href: "mailto:dekateanuj65@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/anuj-dekate-developer",
      color: "text-purple-400"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Let's Work <span className="text-purple-400">Together</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your project and see how I can help you achieve your goals.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm currently available for freelance work and exciting opportunities. 
                Whether you need a website, web application, or want to collaborate on a project, 
                I'd love to hear from you!
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.label === "LinkedIn" ? "_blank" : undefined}
                  rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 hover:transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <info.icon className={`${info.color} group-hover:scale-110 transition-transform duration-200`} size={24} />
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <MessageSquare className="text-purple-400" size={24} />
                <h4 className="text-xl font-semibold text-white">Available for Freelance</h4>
              </div>
              <p className="text-gray-300">
                I'm open to discussing web development projects, consultation, 
                and long-term collaborations. Let's create something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400">
            © 2025 Anuj Dekate. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 