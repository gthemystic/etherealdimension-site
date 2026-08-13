import Link from "next/link";
import Image from "next/image";

const stack = [
  "RAG",
  "LangChain",
  "Multi-Agent Orchestration",
  "Agent Memory",
  "Graph RAG",
  "Neo4j",
  "n8n",
];

const questions = [
  {
    q: "What's hiding in your engineering documents?",
    a: "Ask anything across specs, drawings, and infrastructure records — grounded answers with citations.",
    cta: "Search your universe",
    href: "https://etherealdimension.io/ethereal-search/explorer",
    tag: "Ethereal Search",
  },
  {
    q: "Where did this component really come from?",
    a: "Trace supply chains end-to-end with a RAG-powered passport and marketplace for provenance.",
    cta: "Trace a supply chain",
    href: "#tracepass",
    tag: "TracePass",
  },
  {
    q: "Can my agency work with AI — safely?",
    a: "Governed AI workspaces for government teams, with audit, permissions, and policy built in.",
    cta: "Talk to us about GovSlack",
    href: "#govslack",
    tag: "GovSlack",
  },
  {
    q: "What does your space look like in 3D?",
    a: "Point your iPhone at a room and get a precise 3D model in real time.",
    cta: "Meet Hylios",
    href: "#hylios",
    tag: "Hylios",
  },
];

const capabilities = [
  {
    title: "Agentic RAG",
    body: "Multi-agent retrieval over text, images, and diagrams — Perplexity-class grounding with traceable answers.",
    chips: ["Perplexity sonar-pro", "Groq · Llama 3.3", "Firecrawl"],
  },
  {
    title: "LangChain orchestration",
    body: "LangChain-built agent chains that plan, call tools, and reason step-by-step over your data.",
    chips: ["LangChain", "n8n workflows"],
  },
  {
    title: "Agent memory",
    body: "Long-horizon agents that remember context across sessions — MemoryKit-backed persistent state.",
    chips: ["MemoryKit", "Persistent state"],
  },
  {
    title: "Graph RAG",
    body: "Knowledge graphs that connect documents, entities, and relationships for answers no flat index can give.",
    chips: ["Neo4j", "Entity extraction"],
  },
  {
    title: "Multi-agent orchestration",
    body: "Specialist agents routed by an orchestrator — search, chat, graph, OCR, and code agents working together.",
    chips: ["Multi-agent", "Tool use"],
  },
  {
    title: "Multi-modal understanding",
    body: "Engineering-grade OCR and vision across blueprints, photos, TIFF scans, and CAD-adjacent formats.",
    chips: ["DeepSeek · Gemini · Mistral OCR", "50+ formats"],
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
          <Link href="/" className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
            Ethereal <span className="text-accent">Dimension</span>
          </Link>
          <nav className="hidden items-center gap-8 text-[13px] text-text-dim md:flex">
            <a href="#platform" className="transition-colors hover:text-text">Platform</a>
            <a href="#questions" className="transition-colors hover:text-text">Questions</a>
            <a href="#work" className="transition-colors hover:text-text">Work</a>
            <a href="#hylios" className="transition-colors hover:text-text">Hylios</a>
            <Link href="/ethereal-search" className="transition-colors hover:text-text">Ethereal Search</Link>
          </nav>
          <a
            href="#cta"
            className="rounded-full bg-accent px-[18px] py-2 text-[12.5px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Partner with us
          </a>
        </div>
      </header>

      {/* Hero — agentic platform front and center */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:px-8 sm:pt-32">
        <p className="rise rise-1 text-[12px] uppercase tracking-[0.22em] text-accent">
          Agentic AI · RAG · LangChain · Graph · Memory
        </p>
        <h1 className="rise rise-2 mt-6 max-w-4xl font-display text-[44px] font-[340] leading-[1.02] tracking-[-0.02em] text-text sm:text-[64px] lg:text-[84px]">
          Intelligence that <em className="italic text-accent">reads, remembers</em> — and acts on the built world.
        </h1>
        <p className="rise rise-3 mt-7 max-w-[560px] text-[17px] leading-[1.65] text-text-dim">
          We build agentic systems that search, reason, and orchestrate across engineering documents,
          supply chains, and physical space — RAG, LangChain, agent memory, and Graph RAG, deployed in production.
        </p>
        <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#questions"
            className="rounded-md bg-accent px-6 py-3.5 text-[14px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            What can we build for you?
          </a>
          <a
            href="#platform"
            className="rounded-md border border-line px-6 py-3.5 text-[14px] text-text transition-colors hover:border-text-dim"
          >
            Explore the platform →
          </a>
        </div>
        <div className="rise rise-5 mt-12 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-3.5 py-1.5 text-[12px] text-text-dim"
            >
              {s}
            </span>
          ))}
        </div>
        <dl className="rise rise-5 mt-16 flex flex-wrap gap-x-16 gap-y-8 border-t border-line pt-10">
          <div>
            <dt className="font-display text-[34px] text-paper">97.2%</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Barricade detection accuracy
            </dd>
          </div>
          <div>
            <dt className="font-display text-[34px] text-paper">99.2%</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              OCR accuracy
            </dd>
          </div>
          <div>
            <dt className="font-display text-[34px] text-paper">50+</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Document formats understood
            </dd>
          </div>
        </dl>
      </section>

      {/* Actionable questions up front and center */}
      <section id="questions" className="border-y border-line bg-ink-2/60">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.22em] text-accent">
              Start with a question
            </p>
            <h2 className="mt-4 font-display text-[36px] font-[340] leading-[1.08] text-text sm:text-[44px]">
              What should we <em className="italic text-accent">build</em> for you?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {questions.map((item) => (
              <a
                key={item.q}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col justify-between rounded-[10px] border border-line bg-ink p-8 transition-colors hover:border-accent/60"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-accent">{item.tag}</span>
                  <h3 className="mt-4 font-display text-[24px] font-[400] leading-snug text-text">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-text-dim">{item.a}</p>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-accent">
                  {item.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Platform — the agentic stack */}
      <section id="platform" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.22em] text-accent">The platform</p>
            <h2 className="mt-4 font-display text-[40px] font-[340] text-text">
              One agentic stack, <em className="italic text-accent">many</em> domains.
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <article key={cap.title} className="rounded-[10px] border border-line bg-ink-2 p-7">
              <h3 className="font-display text-[21px] font-[400] text-text">{cap.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.6] text-text-dim">{cap.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cap.chips.map((c) => (
                  <span key={c} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-text-dim">
                    {c}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Work — products and deployments */}
      <section id="work" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-[40px] font-[340] text-text">Products & deployed work</h2>
          <span className="text-[13px] text-text-dim">Ethereal Search · TracePass · GovSlack · Austin DoT</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Ethereal Search — live product */}
          <article className="overflow-hidden rounded-[10px] border border-line bg-ink-2">
            <a
              href="https://etherealdimension.io/ethereal-search/explorer"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E1A22] to-ink">
                <div className="absolute inset-[16%] rounded-lg border border-accent/30" />
                <div className="scanline absolute left-[12%] right-[12%] h-[2px] bg-accent shadow-[0_0_22px_var(--color-accent)]" />
                <div className="relative z-10 w-[76%] rounded-lg border border-line bg-ink/80 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[11px] text-text-dim">
                    <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                    <span>ethereal-explorer</span>
                    <span className="ml-auto">agentic RAG</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded bg-line" />
                  <div className="mt-2 h-2 w-4/5 rounded bg-line" />
                  <div className="mt-2 h-2 w-3/5 rounded bg-accent/40" />
                </div>
              </div>
              <div className="p-7 pb-8">
                <h3 className="font-display text-[22px] font-[400] text-text">Ethereal Search</h3>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-text-dim">
                  Agentic RAG for engineering teams — Perplexity sonar-pro, Groq, LangChain,
                  a Neo4j knowledge graph, and n8n orchestration that search across specs, drawings,
                  and infrastructure records with grounded, traceable answers.
                </p>
                <div className="mt-4 flex gap-5 text-[12px] font-medium text-accent">
                  <span>Live product</span>
                  <span>Multi-modal RAG</span>
                </div>
              </div>
            </a>
          </article>

          {/* TracePass */}
          <article id="tracepass" className="overflow-hidden rounded-[10px] border border-line bg-ink-2">
            <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#123B34] to-ink">
              <div className="absolute inset-[16%] rounded-lg border border-dashed border-accent/40" />
              <div className="relative z-10 w-[76%] rounded-lg border border-line bg-ink/80 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[11px] text-text-dim">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                  <span>tracepass · provenance ledger</span>
                  <span className="ml-auto">Graph RAG</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="h-8 rounded border border-line bg-ink-2" />
                  <div className="h-8 rounded border border-line bg-ink-2" />
                  <div className="h-8 rounded border border-line bg-ink-2" />
                </div>
                <div className="mt-2 h-2 w-full rounded bg-line" />
              </div>
            </div>
            <div className="p-7 pb-8">
              <h3 className="font-display text-[22px] font-[400] text-text">TracePass</h3>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-text-dim">
                RAG-powered supply chain passport and marketplace — trace any component back through
                its provenance with a knowledge-graph-driven &ldquo;RAG thinking&rdquo; visualization.
              </p>
              <div className="mt-4 flex gap-5 text-[12px] font-medium text-accent">
                <span>Supply chain provenance</span>
                <span>Graph RAG</span>
              </div>
            </div>
          </article>

          {/* GovSlack */}
          <article id="govslack" className="overflow-hidden rounded-[10px] border border-line bg-ink-2">
            <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#10141C] to-ink">
              <div className="relative z-10 w-[76%] rounded-lg border border-line bg-ink/80 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[11px] text-text-dim">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                  <span>govslack · governed AI workspaces</span>
                  <span className="ml-auto">policy-first</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <div className="h-10 w-10 rounded-full border border-line" />
                  <div className="flex-1">
                    <div className="h-2 w-1/2 rounded bg-line" />
                    <div className="mt-2 h-2 w-3/4 rounded bg-line" />
                  </div>
                </div>
                <div className="mt-2 h-2 w-full rounded bg-accent/30" />
              </div>
            </div>
            <div className="p-7 pb-8">
              <h3 className="font-display text-[22px] font-[400] text-text">GovSlack</h3>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-text-dim">
                Governed AI collaboration for government teams — multi-agent assistants with audit,
                permissions, and policy enforcement built into every interaction.
              </p>
              <div className="mt-4 flex gap-5 text-[12px] font-medium text-accent">
                <span>Governed AI</span>
                <span>Multi-agent</span>
              </div>
            </div>
          </article>

          {/* Austin DoT */}
          <article className="overflow-hidden rounded-[10px] border border-line bg-ink-2">
            <div className="relative h-[200px] overflow-hidden bg-gradient-to-br from-[#123B34] to-ink">
              <Image
                src="/assets/detected-barricades-landing.gif"
                alt="AI barricade detection system analyzing street footage"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-7 pb-8">
              <h3 className="font-display text-[22px] font-[400] text-text">
                AI-Powered Barricade Detection
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-text-dim">
                Computer vision for Austin DoT that classifies barrier shape, placement, and compliance
                from street footage — a live deployment with a dashboard city staff actually use.
              </p>
              <div className="mt-4 flex gap-5 text-[12px] font-medium text-accent">
                <span>Real-time detection</span>
                <span>Live deployment</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Hylios */}
      <section id="hylios" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid items-center gap-16 rounded-2xl border border-line bg-[radial-gradient(120%_120%_at_80%_0%,#10241F_0%,#0B0D12_60%)] p-8 sm:p-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[12px] uppercase tracking-[0.22em] text-accent">Hylios · iOS</p>
            <h2 className="mt-6 font-display text-[36px] font-[340] leading-[1.08] text-text sm:text-[42px]">
              Magical <em className="italic text-accent">space</em> intelligence.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-text-dim">
              An AR + ML room scanner built on Apple&apos;s newest technologies — real-time spatial
              scanning, precise 3D model generation, and professional-grade accuracy on your iPhone.
            </p>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-md bg-paper px-6 py-3.5 text-[14px] font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Download on the App Store
            </a>
          </div>
          <div className="relative h-[260px] overflow-hidden rounded-xl border border-line bg-[linear-gradient(160deg,#0E2020_0%,#0B0D12_80%)]">
            <div className="absolute inset-[18%] rounded-lg border border-dashed border-accent/40" />
            <div className="scanline absolute left-0 right-0 h-[2px] bg-accent shadow-[0_0_22px_var(--color-accent)]" />
            <Image
              src="/assets/HyliosScan.gif"
              alt="Hylios real-time AR room scanning"
              fill
              className="object-cover opacity-40 mix-blend-screen"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-line px-6 py-24 text-center sm:px-8">
        <h2 className="font-display text-[40px] font-[340] text-text sm:text-[44px]">
          Ready to <em className="italic text-accent">deploy</em> agentic intelligence?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-text-dim">
          Tell us the question your team needs answered. We&apos;ll build the agent that answers it.
        </p>
        <a
          href="mailto:info@etherealdimension.io?subject=Build%20us%20an%20agent"
          className="mt-9 inline-block rounded-md bg-accent px-9 py-4 text-[14px] font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Start your journey
        </a>
      </section>

      <footer className="flex flex-col gap-3 border-t border-line px-6 py-8 text-[12px] text-text-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Ethereal Dimension</span>
        <a href="mailto:info@etherealdimension.io" className="hover:text-text">
          info@etherealdimension.io
        </a>
      </footer>
    </>
  );
}
