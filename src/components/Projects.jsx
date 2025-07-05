import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Janhit from '../assets/Janhit.png'
import cure from '../assets/cureconnect.png'
import fit from '../assets/fitfusion.png'
import sort from '../assets/sortify.png'
import noter from '../assets/noter.png'
import flix from '../assets/flixnet.png'

const Projects = () => {
  const animatedElements = useScrollAnimation();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'JanHit: A Civic Issue Raising Plateform',
      description: ' MERN stack-based Civic Engagement Portal that allows local residents to report civic issues, vote on them, and track their resolution using map based interface for real time issue tracking.',
      image: Janhit,
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      category: 'fullstack',
      github: 'https://github.com/Omsh24/Janhit-main',
      live: 'https://janhit.vercel.app/'
    },
    {
      id: 2,
      title: `Cure Connect: A Doctor's Appointment Application`,
      description: 'A doctor’s appointment application for booking appointments with doctor with robust date and time system built using MERN Stack.',
      image: cure,
      technologies: ['React', 'Nodejs', 'RazorPay', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/Omsh24/CureConnect-A-medical-appointment-website',
      live: 'https://appointment-application-nu.vercel.app/'
    },
    {
      id: 3,
      title: 'Fit Fusion X: Ecommerce with Virtual Tryon AI',
      description: 'An E-commerce website that integrates Virtual Try-On feature for the user online through webcam by using OpenCV and Mediapipe',
      image: fit,
      technologies: ['React', 'OpenCV', 'Mediapipe', 'MongoDB', 'Nodejs'],
      category: 'fullstack',
      github: 'https://github.com/Omsh24/Advance-Ecommerce-with-Virtual-Tryon-feature',
      live: 'https://advance-ecommerce-beta.vercel.app/'
    },
    {
      id: 4,
      title: 'Sortify: A Sorting Algo visualizer',
      description: 'This project aims to combine both DSA along with web development by providing visual difference and working of various sorting algorithms.',
      image: sort,
      technologies: ['React', 'CSS'],
      category: 'frontend',
      github: 'https://github.com/Omsh24/Sortify-The-Sorting-Visualizer',
      live: 'https://sortify-the-sorting-visualizer.vercel.app/'
    },
    {
      id: 5,
      title: 'Noter: A CRUD Application',
      description: 'A Note making website that integrates the concept of Frontend and Backend together to provide the users ability to create all the Notes they want.',
      image: noter,
      technologies: ['React', 'Nodejs', 'Node.js', 'GraphQL'],
      category: 'fullstack',
      github: 'https://github.com/Omsh24/Noter',
      live: 'https://github.com/Omsh24/Noter'
    },
    {
      id: 6,
      title: 'Flixnet',
      description: 'A Simple frontend project to make a website that looks like Netflix',
      image: flix,
      technologies: ['React', 'TailwindCSS', 'React-Scroller'],
      category: 'frontend',
      github: 'https://github.com/Omsh24/Netflix-UI-Clone',
      live: 'https://netflix-ui-clone-topaz.vercel.app/'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div 
          id="projects-header"
          data-animate
          className={`text-center mb-16 ${
            animatedElements.has('projects-header') ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="heading-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            from frontend interfaces to full-stack applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          id="projects-filter"
          data-animate
          className={`flex flex-wrap justify-center gap-4 mb-12 ${
            animatedElements.has('projects-filter') ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              data-animate
              className={`glass-card group hover:scale-105 transition-all duration-500 ${
                animatedElements.has(`project-${project.id}`) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <Github size={16} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;