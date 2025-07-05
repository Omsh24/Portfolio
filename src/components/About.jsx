import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Coffee, Music, Camera } from 'lucide-react';
import MyImage from '../assets/MyImage.jpeg'

const About = () => {
  const animatedElements = useScrollAnimation();

  const facts = [
    { icon: Code, text: '5+ Years Coding Experience' },
    { icon: Coffee, text: '1000+ Cups of Coffee' },
    { icon: Music, text: 'Jazz Enthusiast' },
    { icon: Camera, text: 'Weekend Photographer' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            id="about-image"
            data-animate
            className={`relative ${
              animatedElements.has('about-image') ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-75 animate-pulse-slow"></div>
              <img
                src={MyImage}
                alt="Profile"
                className="relative w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div 
            id="about-content"
            data-animate
            className={`${
              animatedElements.has('about-content') ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="heading-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. I love turning complex problems into 
                simple, beautiful, and intuitive designs.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or capturing moments through photography. I believe in the 
                power of clean code and user-centered design.
              </p>
              
              <p>
                My mission is to bridge the gap between technical functionality and exceptional 
                user experience, creating products that users love to interact with.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {facts.map((fact, index) => (
                <div 
                  key={index}
                  className="glass-card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <fact.icon 
                    size={32} 
                    className="text-primary-500 mx-auto mb-2 group-hover:text-secondary-500 transition-colors" 
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;