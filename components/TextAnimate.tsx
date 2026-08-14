'use client';

import { motion } from "framer-motion";
import React from "react";

interface TextAnimateProps {
  children: React.ReactNode;
  className?: string;
  wordDelay?: number;
  wordDuration?: number;
}

export function TextAnimate({
  children,
  className,
  wordDelay = 0.05,
  wordDuration = 0.8,
}: TextAnimateProps) {
  const words = children?.toString().split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: wordDelay, delayChildren: i * wordDelay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: wordDuration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: wordDuration,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words?.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span variants={child}>{word}</motion.span>
          {index < words.length - 1 && <span>&nbsp;</span>}
        </React.Fragment>
      ))}
    </motion.div>
  );
}