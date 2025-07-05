import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext'; 
import cpp from '../assets/cpp.png'
import pyhton from '../assets/python.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import js from '../assets/js.webp'
import mongo from '../assets/mongo.svg'
import open from '../assets/opencv.webp'
import git from '../assets/git.png'
import html from '../assets/html.png'
import css from '../assets/css3.png'
import dsa from '../assets/dsa.png'
import tw from '../assets/tailwind.png'

const skills = [
  { label: 'C++', image: cpp},
  { label: 'Python', image: pyhton},
  { label: 'React', image: react},
  { label: 'Node.js', image: node},
  { label: 'MongoDB', image: mongo},
  { label: 'OpenCV', image: open},
  { label: 'Git', image: git},
  { label: 'HTML', image: html},
  { label: 'CSS', image: css},
  { label: 'JavaScript', image: js},
  { label: 'TailwindCSS', image: tw},
  { label: 'DSA', image: dsa},
];

export default function Skills() {
  const scrollRef = useRef(null);
  const { isDarkMode } = useTheme(); 

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 220;
    const interval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='skills' className={`w-full px-4 py-10 transition-colors duration-500 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
      <h2 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Technologies
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-2 no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`min-w-[180px] h-[120px] flex flex-col items-center justify-evenly rounded-xl text-lg group transition-all duration-300 ${
              isDarkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-gray-900 border-r-4 border-r-gray-200 border-b-4 border-b-gray-200'
            }`}
          >
            <img
              className='w-[60px] group-hover:scale-150 group-hover:self-center transition-all duration-300'
              src={skill.image}
              alt={skill.label}
            />
            <div className='group-hover:opacity-0 group-hover:absolute group-hover:top-0 transition-all duration-300'>
              {skill.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
