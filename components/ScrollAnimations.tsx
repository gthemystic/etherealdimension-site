'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationsProps {
  children: ReactNode;
  type: 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  className?: string;
  delay?: number;
}

export default function ScrollAnimations({ children, type, className = '', delay = 0 }: ScrollAnimationsProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.animationDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (type) {
      case 'fade-in':
        return 'scroll-fade-in';
      case 'slide-left':
        return 'scroll-slide-left';
      case 'slide-right':
        return 'scroll-slide-right';
      case 'scale-in':
        return 'scroll-scale-in';
      default:
        return 'scroll-fade-in';
    }
  };

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
}