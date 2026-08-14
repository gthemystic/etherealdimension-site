import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MorphingText = ({ texts, className = "", interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ 
            opacity: 0, 
            y: 20,
            filter: "blur(10px)",
            scale: 0.8
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)",
            scale: 1
          }}
          exit={{ 
            opacity: 0, 
            y: -20,
            filter: "blur(10px)",
            scale: 1.2
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="inline-block bg-gradient-to-r from-[var(--ethereal-cyan)] via-[var(--ethereal-green)] to-[var(--ethereal-cyan)] bg-clip-text text-transparent animate-pulse"
          style={{
            backgroundSize: '200% 100%',
            animation: 'gradient-shift 3s ease-in-out infinite'
          }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default MorphingText;

