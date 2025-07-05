import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const animatedElements = useScrollAnimation();

  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'INOQIA SYSTEMS PRIVATE LIMITED',
      location: 'Ghaziabad, UP',
      period: 'May 2025 - June 2025',
      description: 'During this tenure, I have worked with Reactjs, Express.js, AWS and Typescript',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipelines'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Typescript', 'Express.js']
    },
    {
      id: 2,
      title: 'Freelancer Full stack web developer',
      company: 'SK Traders Pvt. Ltd.',
      location: 'Hardoi, UP',
      period: 'June 2025 - July 2025',
      description: 'Worked on creating a wesbite for a local business using Reactjs, Nodejs, Express, MongoDB',
      achievements: [
        'Delivered 15+ client projects',
        'Improved code quality by 60%',
        'Reduced bug reports by 45%'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Cors']
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div 
          id="experience-header"
          data-animate
          className={`text-center mb-16 ${
            animatedElements.has('experience-header') ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="heading-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through my professional development, showcasing growth and achievements 
            across different roles and technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              id={`experience-${exp.id}`}
              data-animate
              className={`relative mb-12 ${
                animatedElements.has(`experience-${exp.id}`) 
                  ? index % 2 === 0 ? 'animate-slide-in-left ml-10' : 'animate-slide-in-right mr-10'
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass-card group hover:scale-105 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {exp.company}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {/* <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <ChevronRight size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div> */}

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;