import { useEffect, useState } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
    const sectionElements = new Map();
    
    // Store section elements and their positions
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionElements.set(sectionId, element);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        // Get all currently intersecting sections
        const intersectingSections = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
            boundingRect: entry.boundingClientRect
          }))
          .filter(section => sections.includes(section.id));

        if (intersectingSections.length > 0) {
          // Sort by intersection ratio and position to determine the most prominent section
          intersectingSections.sort((a, b) => {
            // Prioritize sections that are more centered in the viewport
            const aCenter = Math.abs(a.boundingRect.top + a.boundingRect.height / 2 - window.innerHeight / 2);
            const bCenter = Math.abs(b.boundingRect.top + b.boundingRect.height / 2 - window.innerHeight / 2);
            
            // If one section is much more visible, prioritize it
            if (Math.abs(a.ratio - b.ratio) > 0.2) {
              return b.ratio - a.ratio;
            }
            
            // Otherwise, prioritize the one closer to center
            return aCenter - bCenter;
          });

          const newActiveSection = intersectingSections[0].id;
          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], // Multiple thresholds for better detection
        rootMargin: '-10% 0px -10% 0px' // Smaller margin for more accurate detection
      }
    );

    // Observe all sections with a delay to ensure DOM is ready
    const observeSections = () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    };

    // Use setTimeout to ensure all components are mounted
    const timeoutId = setTimeout(observeSections, 100);

    // Also add a scroll listener as backup
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return activeSection;
};