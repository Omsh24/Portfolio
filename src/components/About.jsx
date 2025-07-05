import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Coffee, Gamepad2, Pen } from 'lucide-react';
import MyImage from '../assets/MyImage.jpeg'
import { CiPen } from "react-icons/ci";

const About = () => {
  const animatedElements = useScrollAnimation();

  const facts = [
    { icon: Code, text: '3+ Years Coding Experience', extraclass: '' },
    { icon: Coffee, text: '1000+ Cups of Tea', extraclass: ''  },
    { icon: Gamepad2, text: 'Gaming Nerd', extraclass: ''  },
    { icon: CiPen ? CiPen : Pen, text: 'Weekend Writer', extraclass: 'inc'  },
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
                I'm a passionate Software Engineer who loves to make beautiful websites and solve 
                mind boggling DSA questions. I have an experience of 3+ year creating digital solutions
                that make a difference. I love turning complex problems into 
                simple, beautiful, and intuitive designs.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, writing about some of 
                my ideas, or sketching something that yearns to be sketched. I believe in the 
                power of clean code, innovative ideas and user-centered design.
              </p>
              
              <p>
                My mission is to bridge the gap between technical functionality and exceptional 
                user experience, creating products that users love to interact with and I find fun.
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
                    className={`text-primary-500 mx-auto mb-2 group-hover:text-secondary-500 transition-colors ${fact.extraclass}` }
                    strokeWidth={`${fact.extraclass === 'inc' ? '0.5' : '1.5'}`}
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