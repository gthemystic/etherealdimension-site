import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps) {
  return (
    <p
      className={cn(
        "mx-auto max-w-md text-sm text-center relative",
        className,
      )}
      style={{
        backgroundSize: "200% auto",
        "--shimmer-width": `${shimmerWidth}px`,
      } as React.CSSProperties}
    >
      {children}
    </p>
  );
}