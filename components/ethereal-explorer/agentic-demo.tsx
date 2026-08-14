"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Search, Check, Loader2, Sparkles, FileText, Ruler, ClipboardList } from "lucide-react"

type Phase = "idle" | "understanding" | "searching" | "reasoning" | "answer"

interface PromptData {
  query: string
  understanding: {
    intent: string
    entity: string
    scope: string
    requires: string
  }
  searching: {
    documents: string
    diagrams: string
    blueprints: string
    sources: string
  }
  reasoning: {
    steps: { text: string; detail: string }[]
  }
  answer: {
    title: string
    specs: { label: string; value: string }[]
    status: string
    lastMaintenance: string
    sources: { label: string; type: string; icon: "doc" | "spec" | "log"; thumbnail?: string }[]
    related: string[]
  }
}

const prompts: PromptData[] = [
  {
    query: "What hydraulic pump is used in System A?",
    understanding: {
      intent: "Component lookup",
      entity: "hydraulic pump",
      scope: "System A documentation",
      requires: "Image analysis + spec extraction",
    },
    searching: {
      documents: "2,847",
      diagrams: "412",
      blueprints: "89",
      sources: "3",
    },
    reasoning: {
      steps: [
        { text: 'Found hydraulic schematic P&ID-2847 (98% match)', detail: 'OCR detected: "PUMP-AX-452" on label' },
        { text: "Cross-referenced with spec sheet SPE-2024-112", detail: "Model: Danfoss PAH 80 | Flow rate: 80 GPM" },
        { text: "Verified against maintenance log ML-2024-Q3", detail: "Last serviced: Nov 15, 2024 | Status: Operational" },
      ],
    },
    answer: {
      title: "System A uses the Danfoss PAH 80 Hydraulic Pump",
      specs: [
        { label: "Flow Rate", value: "80 GPM" },
        { label: "Max Pressure", value: "5,000 PSI" },
        { label: "Power", value: "15 HP" },
        { label: "Installed", value: "March 2023" },
      ],
      status: "Operational",
      lastMaintenance: "Nov 15, 2024",
      sources: [
        { label: "P&ID-2847", type: "Diagram", icon: "doc", thumbnail: "/images/pid-diagram.jpg" },
        { label: "SPE-112", type: "Spec Sheet", icon: "spec", thumbnail: "/images/spec-sheet.jpg" },
        { label: "ML-Q3-24", type: "Maint. Log", icon: "log", thumbnail: "/images/blueprint-mechanical.jpg" },
      ],
      related: ["View spare parts", "Maintenance schedule"],
    },
  },
  {
    query: "Show me all circuit diagrams with MOSFETs",
    understanding: {
      intent: "Document retrieval",
      entity: "MOSFET circuit diagrams",
      scope: "Full circuit library",
      requires: "Diagram recognition + component detection",
    },
    searching: {
      documents: "1,293",
      diagrams: "678",
      blueprints: "45",
      sources: "7",
    },
    reasoning: {
      steps: [
        { text: "Scanned circuit library for MOSFET symbols (7 matches)", detail: "IRF540N, IRF3205, 2N7000 variants detected" },
        { text: "Verified component labels via OCR", detail: "All 7 diagrams confirmed with MOSFET designation" },
        { text: "Ranked by relevance and revision date", detail: "Most recent: CIR-2024-089 (Rev C, Dec 2024)" },
      ],
    },
    answer: {
      title: "Found 7 circuit diagrams containing MOSFET components",
      specs: [
        { label: "Total Found", value: "7 diagrams" },
        { label: "MOSFET Types", value: "3 variants" },
        { label: "Latest Rev.", value: "Dec 2024" },
        { label: "Dept.", value: "EE Division" },
      ],
      status: "Complete",
      lastMaintenance: "Dec 20, 2024",
      sources: [
        { label: "CIR-089", type: "Circuit", icon: "doc", thumbnail: "/images/blueprint-mechanical.jpg" },
        { label: "CIR-072", type: "Circuit", icon: "doc", thumbnail: "/images/spec-sheet.jpg" },
        { label: "BOM-445", type: "Parts List", icon: "spec", thumbnail: "/images/industrial-facility.jpg" },
      ],
      related: ["View all MOSFET specs", "Compare variants"],
    },
  },
  {
    query: "Find P&ID drawings related to cooling systems",
    understanding: {
      intent: "Drawing search",
      entity: "cooling system P&IDs",
      scope: "Process engineering library",
      requires: "P&ID recognition + system classification",
    },
    searching: {
      documents: "3,102",
      diagrams: "856",
      blueprints: "234",
      sources: "5",
    },
    reasoning: {
      steps: [
        { text: "Identified cooling system P&IDs across 3 projects", detail: "Primary, secondary, and chilled water loops" },
        { text: "Matched valve and heat exchanger symbols", detail: "12 unique components identified in cooling paths" },
        { text: "Cross-referenced with flow calculations", detail: "All drawings verified against design basis docs" },
      ],
    },
    answer: {
      title: "5 P&ID drawings found for cooling systems",
      specs: [
        { label: "Drawings", value: "5 P&IDs" },
        { label: "Systems", value: "3 loops" },
        { label: "Components", value: "12 unique" },
        { label: "Last Updated", value: "Jan 2025" },
      ],
      status: "Current",
      lastMaintenance: "Jan 8, 2025",
      sources: [
        { label: "PID-301", type: "P&ID", icon: "doc", thumbnail: "/images/pid-diagram.jpg" },
        { label: "PID-302", type: "P&ID", icon: "doc", thumbnail: "/images/industrial-facility.jpg" },
        { label: "CALC-88", type: "Flow Calc", icon: "spec", thumbnail: "/images/spec-sheet.jpg" },
      ],
      related: ["View cooling specs", "Maintenance history"],
    },
  },
]

export function AgenticDemo() {
  const [phase, setPhase] = useState<Phase>("idle")
  const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null)
  const [typedText, setTypedText] = useState("")
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [searchProgress, setSearchProgress] = useState(0)
  const [sectionVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const demoRef = useRef<HTMLDivElement>(null)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }, [])

  const addTimeout = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms)
    timeoutsRef.current.push(id)
    return id
  }, [])

  const runDemo = useCallback(
    (prompt: PromptData) => {
      clearTimeouts()
      setSelectedPrompt(prompt)
      setTypedText("")
      setVisibleSteps([])
      setSearchProgress(0)
      setPhase("idle")

      // Type out the query
      let charIndex = 0
      const typeInterval = setInterval(() => {
        if (charIndex < prompt.query.length) {
          setTypedText(prompt.query.slice(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(typeInterval)
          // Move to understanding
          addTimeout(() => setPhase("understanding"), 500)
          // Move to searching
          addTimeout(() => {
            setPhase("searching")
            // Animate progress
            let prog = 0
            const progInterval = setInterval(() => {
              prog += 2
              setSearchProgress(Math.min(prog, 67))
              if (prog >= 67) clearInterval(progInterval)
            }, 50)
          }, 2500)
          // Move to reasoning
          addTimeout(() => {
            setPhase("reasoning")
            prompt.reasoning.steps.forEach((_, i) => {
              addTimeout(
                () => setVisibleSteps((prev) => [...prev, i]),
                500 + i * 800
              )
            })
          }, 5500)
          // Move to answer
          addTimeout(() => setPhase("answer"), 8500)
        }
      }, 35)

      timeoutsRef.current.push(typeInterval as unknown as NodeJS.Timeout)
    },
    [clearTimeouts, addTimeout]
  )

  const sourceIcon = (type: "doc" | "spec" | "log") => {
    switch (type) {
      case "doc": return <FileText size={16} />
      case "spec": return <Ruler size={16} />
      case "log": return <ClipboardList size={16} />
    }
  }

  return (
    <section
      id="demo"
      ref={sectionRef}
      className={`relative z-10 px-5 py-24 md:py-32 transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            See Agentic RAG in Action
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Click a prompt to watch the multi-step reasoning unfold in real time.
          </p>
        </div>

        {/* Demo panel */}
        <div
          ref={demoRef}
          className="overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl"
        >
          {/* Search bar area */}
          <div className="border-b border-[var(--glass-border)] p-5 md:p-6">
            <div className="flex items-center gap-3 rounded-xl border border-[var(--glass-border)] bg-secondary/30 px-4 py-3.5">
              <Search size={18} className="shrink-0 text-muted-foreground" />
              <span className="text-sm text-foreground min-h-[1.25rem]">
                {typedText || (
                  <span className="text-muted-foreground">
                    Ask anything about your engineering docs...
                  </span>
                )}
              </span>
              {(phase === "idle" && typedText.length > 0) && (
                <div className="ml-auto h-2 w-2 animate-blink rounded-full bg-primary" />
              )}
            </div>

            {/* Prompt chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground self-center mr-1">Try:</span>
              {prompts.map((p) => (
                <button
                  key={p.query}
                  onClick={() => runDemo(p)}
                  className="rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-2 text-xs text-muted-foreground transition-all duration-200 hover:bg-[var(--glass-hover)] hover:text-foreground hover:border-primary/20 active:scale-95"
                >
                  {p.query}
                </button>
              ))}
            </div>
          </div>

          {/* Phases output */}
          <div className="p-5 md:p-6 min-h-[320px]">
            {phase === "idle" && !selectedPrompt && (
              <div className="flex h-[280px] items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Select a prompt above to see the agentic search in action
                </p>
              </div>
            )}

            {/* Phase 1: Understanding */}
            {phase !== "idle" && selectedPrompt && (
              <div className="space-y-5">
                <PhaseBlock
                  label="Understanding"
                  active={phase === "understanding"}
                  done={phase !== "understanding"}
                >
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {[
                      { label: "Intent", value: selectedPrompt.understanding.intent },
                      { label: "Entity", value: `"${selectedPrompt.understanding.entity}"` },
                      { label: "Scope", value: selectedPrompt.understanding.scope },
                      { label: "Requires", value: selectedPrompt.understanding.requires },
                    ].map((item, i) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-2 text-sm animate-fade-in"
                        style={{ animationDelay: `${i * 150}ms`, opacity: 0 }}
                      >
                        <span className="text-primary shrink-0">{">"}</span>
                        <span className="text-muted-foreground">
                          {item.label}:{" "}
                          <span className="text-foreground">{item.value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </PhaseBlock>

                {/* Phase 2: Searching */}
                {(phase === "searching" || phase === "reasoning" || phase === "answer") && (
                  <PhaseBlock
                    label="Searching"
                    active={phase === "searching"}
                    done={phase === "reasoning" || phase === "answer"}
                  >
                    <div className="space-y-2">
                      {[
                        { label: "Scanning documents", value: selectedPrompt.searching.documents },
                        { label: "Analyzing diagrams", value: selectedPrompt.searching.diagrams },
                        { label: "Processing blueprints", value: selectedPrompt.searching.blueprints },
                      ].map((item, i) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-2 text-sm animate-fade-in"
                          style={{ animationDelay: `${i * 200}ms`, opacity: 0 }}
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                          <span className="text-muted-foreground">
                            {item.label}:{" "}
                            <span className="text-foreground">{item.value}</span>
                          </span>
                        </div>
                      ))}
                      {/* Progress bar */}
                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-300 ease-out"
                            style={{ width: `${searchProgress}%` }}
                          />
                        </div>
                        <span className="text-xs text-primary tabular-nums">
                          {searchProgress}%
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Found {selectedPrompt.searching.sources} sources
                        </span>
                      </div>
                    </div>
                  </PhaseBlock>
                )}

                {/* Phase 3: Reasoning */}
                {(phase === "reasoning" || phase === "answer") && (
                  <PhaseBlock
                    label="Reasoning"
                    active={phase === "reasoning"}
                    done={phase === "answer"}
                  >
                    <div className="space-y-3">
                      {selectedPrompt.reasoning.steps.map((step, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2.5 text-sm transition-all duration-400 ${
                            visibleSteps.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                          }`}
                        >
                          <Check size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                          <div>
                            <p className="text-foreground">{step.text}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PhaseBlock>
                )}

                {/* Phase 4: Answer */}
                {phase === "answer" && selectedPrompt && (
                  <div className="animate-reveal-glow rounded-xl border border-primary/20 bg-primary/5 p-5 md:p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Sparkles size={16} className="text-primary" />
                      <span className="text-xs font-medium uppercase tracking-wider text-primary">
                        Answer
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-foreground mb-4">
                      {selectedPrompt.answer.title}
                    </h4>

                    {/* Specs grid */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-4">
                      {selectedPrompt.answer.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] p-3"
                        >
                          <p className="text-xs text-muted-foreground">{spec.label}</p>
                          <p className="text-sm font-semibold text-foreground mt-0.5">
                            {spec.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-emerald-400 text-xs font-medium">{selectedPrompt.answer.status}</span>
                      </span>
                      <span className="text-muted-foreground text-xs">
                        Last maintained: {selectedPrompt.answer.lastMaintenance}
                      </span>
                    </div>

                    {/* Sources */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Sources:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedPrompt.answer.sources.map((src) => (
                          <div
                            key={src.label}
                            className="group/src flex items-center gap-2.5 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] p-2 pr-3 text-xs transition-all hover:bg-[var(--glass-hover)] hover:border-primary/20 hover:scale-[1.03] cursor-pointer"
                          >
                            {src.thumbnail ? (
                              <div className="relative h-9 w-12 shrink-0 overflow-hidden rounded-md">
                                <Image
                                  src={src.thumbnail}
                                  alt={src.type}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover/src:scale-110"
                                  sizes="48px"
                                />
                              </div>
                            ) : (
                              <span className="text-primary">{sourceIcon(src.icon)}</span>
                            )}
                            <div>
                              <p className="text-foreground font-medium">{src.label}</p>
                              <p className="text-muted-foreground text-[10px]">{src.type}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Related */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-muted-foreground">Related:</span>
                      {selectedPrompt.answer.related.map((r) => (
                        <button
                          key={r}
                          className="rounded-md border border-primary/15 bg-primary/5 px-2.5 py-1 text-xs text-primary transition hover:bg-primary/10"
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhaseBlock({
  label,
  active,
  done,
  children,
}: {
  label: string
  active: boolean
  done: boolean
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 animate-fade-in-up">
      <div className="mb-3 flex items-center gap-2">
        {active ? (
          <Loader2 size={14} className="animate-spin text-primary" />
        ) : done ? (
          <Check size={14} className="text-emerald-400" />
        ) : null}
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>
      {children}
    </div>
  )
}
