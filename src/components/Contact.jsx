import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from 'lucide-react';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodechef } from "react-icons/si";

const Contact = () => {
  const animatedElements = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'omshukla2403@gmail.com',
      href: 'mailto:omshukla2403@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8470986718',
      href: 'tel:+918470986718'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hardoi, Uttar Pradesh, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/om-shukla-465850263/',
      color: 'text-blue-400'
    },
    {
      icon: TbBrandLeetcode,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/OmShukla24/',
      color: 'text-yellow-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Omsh24',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
    },
    {
      icon: SiCodechef,
      label: 'CodeChef',
      href: 'https://www.codechef.com/users/omshukla24',
      color: 'text-purple-400'
    },
    {
      icon: Code,
      label: 'Codolio',
      href: 'https://codolio.com/profile/Omshukla24',
      color: 'text-green-400'
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div 
          id="contact-header"
          data-animate
          className={`text-center mb-16 ${
            animatedElements.has('contact-header') ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In <span className="heading-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            id="contact-info"
            data-animate
            className={`${
              animatedElements.has('contact-info') ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="glass-card h-full">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Let's Connect
              </h3>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {info.label}
                      </p>
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 border-2 border-gray-500 rounded-full bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            id="contact-form"
            data-animate
            className={`${
              animatedElements.has('contact-form') ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <div className="glass-card h-full">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Send Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 group-hover:bg-white/70 dark:group-hover:bg-gray-800/70"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 group-hover:bg-white/70 dark:group-hover:bg-gray-800/70"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Input */}
                <div className="group">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 group-hover:bg-white/70 dark:group-hover:bg-gray-800/70 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary group ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;