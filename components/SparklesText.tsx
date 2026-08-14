'use client';

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface SparklesTextProps {
  text: string;
  className?: string;
  sparkleColor?: string;
  duration?: number;
  minDelay?: number;
  maxDelay?: number;
  sparkleSize?: number;
  sparkleDensity?: number;
}

const generateSparkle = (color: string, size: number, key: string) => {
  return (
    <span
      key={key} // Added key prop
      className={cn("absolute bg-gradient-to-br from-purple-500 to-pink-500", "shiny-sparkle")}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        // Adjust for sparkle position based on its size
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `sparkle-animation ${Math.random() * 1 + 0.5}s ease-out forwards`,
        opacity: 0,
        zIndex: 10,
        backgroundColor: color,
        borderRadius: "50%",
      }}
    />
  );
};

export function SparklesText({
  text,
  className,
  sparkleColor = "white",
  duration = 1000,
  minDelay = 0,
  maxDelay = 1,
  sparkleSize = 8,
  sparkleDensity = 0.5,
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<React.ReactNode[]>([]);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastRenderTime = 0;

    const render = (currentTime: number) => {
      if (!lastRenderTime) {
        lastRenderTime = currentTime;
      }

      const elapsed = currentTime - lastRenderTime;

      if (elapsed > (minDelay + maxDelay) / 2) { // Generate new sparkle at average delay
        if (Math.random() < sparkleDensity) { // Control overall density
          setSparkles((prevSparkles) => [
            ...prevSparkles,
            generateSparkle(sparkleColor, sparkleSize, `sparkle-${Date.now()}-${Math.random()}`), // Added unique key
          ]);
        }
        lastRenderTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animationFrameId);
  }, [sparkleColor, sparkleSize, sparkleDensity, minDelay, maxDelay]);

  return (
    <span className={cn("relative inline-block", className)} ref={ref}>
      {text}
      <AnimatePresence>
        {sparkles}
      </AnimatePresence>
    </span>
  );
}