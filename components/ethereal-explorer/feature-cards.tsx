"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const features = [
  {
    title: "Diagram Understanding",
    description: "Extract components, connections, and specs from any technical drawing with precision.",
    image: "/images/pid-diagram.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 17.5h7" />
        <path d="M17.5 14v7" />
        <path d="M10 6.5h4" />
        <path d="M6.5 10v4" />
      </svg>
    ),
  },
  {
    title: "Multi-Modal RAG Search",
    description: "Query across text, images, and diagrams simultaneously with intelligent retrieval.",
    image: "/images/industrial-facility.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <path d="M8.5 7.5L10.5 16" />
        <path d="M15.5 7.5L13.5 16" />
        <path d="M9 6h6" />
      </svg>
    ),
  },
  {
    title: "Engineering-Grade OCR",
    description: "Pixel-perfect text extraction from complex engineering documents and labels.",
    image: "/images/spec-sheet.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7V4h16v3" />
        <path d="M9 20h6" />
        <path d="M12 4v16" />
        <path d="M4 12h3" />
        <path d="M17 12h3" />
      </svg>
    ),
  },
  {
    title: "Technical Photo Analysis",
    description: "Understand equipment photos, identify components, and assess conditions automatically.",
    image: "/images/bridge-engineering.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
      </svg>
    ),
  },
  {
    title: "Blueprint Processing",
    description: "Parse architectural and mechanical blueprints into structured, searchable data.",
    image: "/images/blueprint-mechanical.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 3v18" />
        <path d="M13 13l4 4" />
        <path d="M17 13l-4 4" />
      </svg>
    ),
  },
  {
    title: "Specification Extraction",
    description: "Automatically pull specs, tolerances, and parameters from any document type.",
    image: "/images/land-survey.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h8" />
        <path d="M8 9h2" />
      </svg>
    ),
  },
]

export function FeatureCards() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => new Set([...Array.from(prev), index]))
          }
        })
      },
      { threshold: 0.2 }
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="relative z-10 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built for Engineering Intelligence
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Six powerful capabilities that transform how teams interact with technical documentation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              ref={(el) => { cardRefs.current[i] = el }}
              data-index={i}
              className={`group overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md transition-all duration-500 hover:bg-[var(--glass-hover)] hover:border-primary/15 hover:scale-[1.02] ${
                visibleCards.has(i) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image strip at top */}
              <div className="relative h-28 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(222,47%,6%)]" />
                <div className="absolute inset-0 bg-background/30" />
              </div>
              <div className="p-6 pt-4">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary/15 group-hover:shadow-lg group-hover:shadow-primary/10">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
