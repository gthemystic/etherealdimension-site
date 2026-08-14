"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FileText, Camera, Map, Cpu, Eye, ArrowUpRight } from "lucide-react"

const documents = [
  {
    image: "/images/bridge-engineering.jpg",
    title: "Bridge Structural Analysis",
    category: "Infrastructure",
    docId: "STR-2024-087",
    tags: ["Structural", "Load Analysis"],
    icon: <Map size={14} />,
  },
  {
    image: "/images/pid-diagram.jpg",
    title: "Cooling System P&ID",
    category: "Process Engineering",
    docId: "PID-2024-301",
    tags: ["P&ID", "Hydraulics"],
    icon: <FileText size={14} />,
  },
  {
    image: "/images/land-survey.jpg",
    title: "Site Topographic Survey",
    category: "Civil Engineering",
    docId: "GEO-2024-045",
    tags: ["Survey", "Terrain"],
    icon: <Map size={14} />,
  },
  {
    image: "/images/spec-sheet.jpg",
    title: "Pump Specification Sheet",
    category: "Mechanical",
    docId: "SPE-2024-112",
    tags: ["Specs", "Tolerances"],
    icon: <FileText size={14} />,
  },
  {
    image: "/images/blueprint-mechanical.jpg",
    title: "Hydraulic Assembly Blueprint",
    category: "Mechanical",
    docId: "BP-HYD-2024",
    tags: ["Blueprint", "Assembly"],
    icon: <FileText size={14} />,
  },
  {
    image: "/images/circuit-board.jpg",
    title: "MOSFET Driver PCB Layout",
    category: "Electrical",
    docId: "CIR-2024-089",
    tags: ["PCB", "MOSFET"],
    icon: <Cpu size={14} />,
  },
  {
    image: "/images/industrial-facility.jpg",
    title: "Plant Infrastructure Audit",
    category: "Facilities",
    docId: "FAC-2024-022",
    tags: ["Facility", "Piping"],
    icon: <Camera size={14} />,
  },
  {
    image: "/images/construction-site.jpg",
    title: "Bridge Construction Progress",
    category: "Infrastructure",
    docId: "CON-2024-156",
    tags: ["Construction", "Progress"],
    icon: <Camera size={14} />,
  },
]

export function DocumentGallery() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative z-10 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
            <Eye size={12} className="text-primary" />
            Visual Intelligence
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Every Document Type, Understood
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            From bridge inspection photos to mechanical blueprints, land surveys to spec sheets
            -- EtherealExplorer processes and indexes them all.
          </p>
        </div>

        {/* Stats bar */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { value: "50+", label: "Document Types" },
            { value: "99.2%", label: "OCR Accuracy" },
            { value: "< 3s", label: "Processing Time" },
            { value: "12M+", label: "Pages Indexed" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-2xl font-semibold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Document grid - bento-style */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {documents.map((doc, i) => {
            const isLarge = i === 0 || i === 3
            return (
              <div
                key={doc.docId}
                className={`group relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md transition-all duration-500 hover:border-primary/20 hover:scale-[1.02] cursor-pointer ${
                  isLarge ? "md:col-span-2 md:row-span-2" : ""
                } ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${150 + i * 80}ms` }}
              >
                {/* Image */}
                <div className={`relative w-full overflow-hidden ${isLarge ? "h-48 md:h-72" : "h-36 md:h-44"}`}>
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  />
                  {/* Scan overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,7,18,0.95)] via-[rgba(3,7,18,0.3)] to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />

                  {/* Scan line animation on hover */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-[rgba(3,7,18,0.7)] px-2 py-1 text-[10px] text-muted-foreground backdrop-blur-sm border border-[var(--glass-border)]">
                    <span className="text-primary">{doc.icon}</span>
                    {doc.category}
                  </div>

                  {/* Arrow on hover */}
                  <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 md:p-4">
                  <p className="text-xs text-primary/70 font-mono">{doc.docId}</p>
                  <h3 className="mt-1 text-sm font-medium text-foreground leading-snug">
                    {doc.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-sm text-muted-foreground">
            Supporting PDFs, CAD files, TIFF scans, photos, blueprints, and 40+ more formats
          </p>
        </div>
      </div>
    </section>
  )
}
