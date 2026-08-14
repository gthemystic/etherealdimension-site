'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
  viewThreshold?: number;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  inView = false,
  viewThreshold = 0.5,
}: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20, filter: inView ? "blur(0px)" : "blur(8px)" }}
      transition={{ delay: delay, duration: 0.5 }}
      viewport={{ once: true, amount: viewThreshold }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}