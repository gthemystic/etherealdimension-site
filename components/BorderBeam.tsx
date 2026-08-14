'use client';

import { cn } from "@/lib/utils";
import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  borderWidth?: number;
  color?: string | string[];
  [key: string]: any;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 9,
  borderWidth = 1.5,
  color = ["#00d4ff", "#00ff88"], // ethereal-cyan, ethereal-green
  ...props
}: BorderBeamProps) {
  const colors = Array.isArray(color) ? color : [color];
  const linearGradient = `linear-gradient(90deg, ${colors.join(", ")})`;

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none rounded-[inherit]",
        className,
      )}
      style={{
        "--size": size + "px",
        "--duration": duration + "s",
        "--delay": delay + "s",
        "--border-width": borderWidth + "px",
        "--color-1": colors[0],
        "--color-2": colors[1] || colors[0],
        "--linear-gradient": linearGradient,
        ...props.style,
      } as React.CSSProperties}
    >
      <div
        style={{
          background: "var(--linear-gradient)",
          WebkitMask: `linear-gradient(to top, transparent, white), linear-gradient(to bottom, transparent, white), linear-gradient(to left, transparent, white), linear-gradient(to right, transparent, white)`,
          maskComposite: "exclude",
        } as React.CSSProperties}
        className="absolute inset-[var(--border-width)] w-[calc(100%-var(--border-width)*2)] h-[calc(100%-var(--border-width)*2)] rounded-[inherit] transform rotate-90 scale-x-50 scale-y-100 animate-[border-beam-1_var(--duration)s_linear_infinite_var(--delay)] opacity-0 transition-opacity duration-300"
      />
      <div
        style={{
          background: "var(--linear-gradient)",
          WebkitMask: `linear-gradient(to top, transparent, white), linear-gradient(to bottom, transparent, white), linear-gradient(to left, transparent, white), linear-gradient(to right, transparent, white)`,
          maskComposite: "exclude",
        } as React.CSSProperties}
        className="absolute inset-[var(--border-width)] w-[calc(100%-var(--border-width)*2)] h-[calc(100%-var(--border-width)*2)] rounded-[inherit] transform rotate-90 scale-x-50 scale-y-100 animate-[border-beam-2_var(--duration)s_linear_infinite_var(--delay)] opacity-0 transition-opacity duration-300"
      />
      <div
        style={{
          background: "var(--linear-gradient)",
          WebkitMask: `linear-gradient(to top, transparent, white), linear-gradient(to bottom, transparent, white), linear-gradient(to left, transparent, white), linear-gradient(to right, transparent, white)`,
          maskComposite: "exclude",
        } as React.CSSProperties}
        className="absolute inset-[var(--border-width)] w-[calc(100%-var(--border-width)*2)] h-[calc(100%-var(--border-width)*2)] rounded-[inherit] transform rotate-90 scale-x-50 scale-y-100 animate-[border-beam-3_var(--duration)s_linear_infinite_var(--delay)] opacity-0 transition-opacity duration-300"
      />
    </div>
  );
}