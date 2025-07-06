import { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Code } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter'
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodechef } from "react-icons/si";
import TicTacToe from '../components/Tictactoe'

const Hero = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [game, setGame] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      setParallaxOffset(offset * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

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
      color: 'text-white',
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 parallax"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: 'url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 to-secondary-900/70 dark:from-gray-900/80 dark:to-gray-800/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-16 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl animate-pulse-slow animation-delay-400"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-accent-500/20 rounded-full blur-xl animate-pulse-slow animation-delay-600"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        {
          game &&
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-shadow">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Om Shukla
              </span>
            </h1>
            
            <div className="text-2xl md:text-4xl font-bold mb-6 text-shadow">
              I'm a {' '}
              <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                <Typewriter 
                  words={["Software Developer", "Fullstack Developer", "DSA Enthusiast"]}
                  loop={false}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <div className="flex md:flex-row flex-col gap-4 justify-center items-center animate-slide-up animation-delay-400">
              <button 
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className='btn'
              >
                View My Work
                <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </button>

              <a className="btn1" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1uffzv3duwIfCOjgvCUfrDtpIh8lnBBHP/view?usp=sharing">
                <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>

              <button onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })} className="btn2">
                <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </button>
            </div>

            <div className="flex mt-10 flex-row sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 border-2 border-gray-200 rounded-full bg-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} hover:bg-current`}
                  >
                    <social.icon
                      size={24}
                      className="transition-all duration-300 group-hover:text-black"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        }
        {
          !game &&
          <div className=''>
            <TicTacToe />
          </div>
        }

        <button onClick={() => setGame(!game)}>
          Bored ?
        </button>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-primary-400 transition-colors animate-bounce-slow"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;