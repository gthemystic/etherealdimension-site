import React, { useEffect, useRef } from 'react';

const ScrollAnimations = ({ children, animation = 'fade-in', delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const animationClass = `scroll-${animation}`;

  return (
    <div ref={elementRef} className={animationClass}>
      {children}
    </div>
  );
};

export default ScrollAnimations;

