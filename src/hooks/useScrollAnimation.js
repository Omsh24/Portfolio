import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return animatedElements;
};