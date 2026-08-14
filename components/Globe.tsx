'use client';

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlobeProps extends HTMLMotionProps<"canvas"> {
  darkTheme?: boolean;
  customGlowColor?: [number, number, number];
}

export function Globe({
  className,
  darkTheme = true,
  customGlowColor = [1, 1, 1],
  ...props
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);
  const fadeAnimation = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  };

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    
    console.log('Globe component mounting...');
    console.log('Canvas ref:', canvasRef.current);
    
    if (canvasRef.current) {
      try {
        console.log('Creating globe with cobe...');
        const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width,
        height: width,
        phi: 0,
        theta: 0.3,
        dark: darkTheme ? 1 : 0,
        diffuse: 3,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.1, 0.1, 0.2],
        markerColor: [0, 0.8, 1],
        glowColor: customGlowColor,
        markers: [
          // longitude, latitude
          { location: [37.7595, -122.4467], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an object that gives you access to the globe's current state.
          if (!pointerInteracting.current) {
            state.phi = phi + 0.003;
          }
          phi += 0.003;
          state.width = width;
          state.height = width;
        },
      });
        
        console.log('Globe created successfully!');
        
        return () => {
          console.log('Destroying globe...');
          globe.destroy();
          window.removeEventListener("resize", onResize);
        };
      } catch (error) {
        console.error('Error creating globe:', error);
      }
    }
  }, [darkTheme, customGlowColor]);
  return (
    <motion.canvas
      ref={canvasRef}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
        if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteractionMovement.current;
          pointerInteractionMovement.current = delta;
          if (canvasRef.current) {
            canvasRef.current.style.transform = `rotateY(${delta / 2}deg)`;
          }
        }
      }}
      className={className}
      {...props}
    />
  );
}