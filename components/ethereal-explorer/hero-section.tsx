"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Search, FileText, Camera, Map } from "lucide-react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-20 pb-16"
    >
      {/* Wireframe sphere decoration */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          className="animate-rotate-slow opacity-[0.04]"
        >
          <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <ellipse cx="300" cy="300" rx="250" ry="100" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <ellipse cx="300" cy="300" rx="100" ry="250" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <ellipse cx="300" cy="300" rx="250" ry="180" stroke="currentColor" strokeWidth="0.5" className="text-primary" transform="rotate(30 300 300)" />
          <ellipse cx="300" cy="300" rx="180" ry="250" stroke="currentColor" strokeWidth="0.5" className="text-primary" transform="rotate(30 300 300)" />
          <ellipse cx="300" cy="300" rx="250" ry="180" stroke="currentColor" strokeWidth="0.5" className="text-primary" transform="rotate(-30 300 300)" />
          <ellipse cx="300" cy="300" rx="180" ry="250" stroke="currentColor" strokeWidth="0.5" className="text-primary" transform="rotate(-30 300 300)" />
        </svg>
      </div>

      <div
        className={`relative z-10 flex max-w-4xl flex-col items-center text-center transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        {/* Badge */}
        <div className="mb-8 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-md">
          Agentic RAG for Engineering Teams
        </div>

        {/* Headline */}
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Search Your Engineering{" "}
          <span className="text-primary">Universe</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Agentic RAG that sees, reads, and understands your technical world.
          World-class image processing for diagrams, blueprints, and engineering documentation.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#demo"
            className="group flex h-12 items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-8 text-base font-medium text-primary transition-all duration-200 hover:bg-primary/20 hover:border-primary/50 hover:scale-[1.02]"
          >
            Try Interactive Demo
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="flex h-12 items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-8 text-base font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-[var(--glass-hover)]"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Product preview card */}
      <div
        className={`relative z-10 mt-16 w-full max-w-3xl transition-all duration-700 delay-300 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
      >
        <div className="overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-2xl shadow-primary/5 backdrop-blur-xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-[var(--glass-border)] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-4 flex-1 rounded-md bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
              app.etherealexplorer.ai
            </div>
          </div>

          {/* App mockup content */}
          <div className="p-6 md:p-8">
            {/* Search bar */}
            <div className="flex items-center gap-3 rounded-xl border border-[var(--glass-border)] bg-secondary/30 px-4 py-3.5">
              <Search size={18} className="text-muted-foreground" />
              <span className="text-muted-foreground text-sm">
                What hydraulic pump is used in System A?
              </span>
              <div className="ml-auto h-2 w-2 animate-blink rounded-full bg-primary" />
            </div>

            {/* Document results with real thumbnails */}
            <div className="mt-5 space-y-3">
              {[
                { label: "P&ID-2847", type: "P&ID Diagram", match: "98%", image: "/images/pid-diagram.jpg", icon: <FileText size={14} /> },
                { label: "SPE-2024-112", type: "Spec Sheet", match: "94%", image: "/images/spec-sheet.jpg", icon: <FileText size={14} /> },
                { label: "BP-HYD-2024", type: "Blueprint", match: "87%", image: "/images/blueprint-mechanical.jpg", icon: <Map size={14} /> },
              ].map((result, i) => (
                <div
                  key={result.label}
                  className="group flex items-center gap-3 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] p-3 transition-all duration-200 hover:bg-[var(--glass-hover)] hover:border-primary/15"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={result.image}
                      alt={result.type}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">{result.icon}</span>
                      <p className="text-sm font-medium text-foreground truncate">{result.label}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{result.type}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <div className="h-1.5 w-12 overflow-hidden rounded-full bg-secondary sm:w-16">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: result.match }}
                      />
                    </div>
                    <span className="text-xs tabular-nums text-primary">{result.match}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
