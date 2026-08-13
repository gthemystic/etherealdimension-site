import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
          <Link href="/" className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
            Ethereal <span className="text-accent">Dimension</span>
          </Link>
          <nav className="hidden items-center gap-8 text-[13px] text-text-dim md:flex">
            <a href="#work" className="transition-colors hover:text-text">Work</a>
            <a href="#hylios" className="transition-colors hover:text-text">Hylios</a>
            <Link href="/ethereal-search" className="transition-colors hover:text-text">Ethereal Search</Link>
            <a href="#cta" className="transition-colors hover:text-text">Company</a>
          </nav>
          <a
            href="#cta"
            className="rounded-full bg-accent px-[18px] py-2 text-[12.5px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Partner with us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:px-8 sm:pt-32">
        <p className="rise rise-1 text-[12px] uppercase tracking-[0.22em] text-accent">
          Frontier AI · Built Environment · Austin, TX
        </p>
        <h1 className="rise rise-2 mt-6 max-w-4xl font-display text-[44px] font-[340] leading-[1.02] tracking-[-0.02em] text-text sm:text-[64px] lg:text-[84px]">
          Intelligence for the <em className="italic text-accent">built</em> world — deployed, not demoed.
        </h1>
        <p className="rise rise-3 mt-7 max-w-[560px] text-[17px] leading-[1.65] text-text-dim">
          We deploy computer vision, AR, and spatial intelligence into cities and infrastructure — live
          systems for compliance, safety, and understanding of physical space.
        </p>
        <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-md bg-accent px-6 py-3.5 text-[14px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            See our work
          </a>
          <a
            href="#hylios"
            className="rounded-md border border-line px-6 py-3.5 text-[14px] text-text transition-colors hover:border-text-dim"
          >
            Meet Hylios →
          </a>
        </div>
        <dl className="rise rise-5 mt-16 flex flex-wrap gap-x-16 gap-y-8 border-t border-line pt-10">
          <div>
            <dt className="font-display text-[34px] text-paper">97.2%</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Barricade detection accuracy
            </dd>
          </div>
          <div>
            <dt className="font-display text-[34px] text-paper">60%</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Review time saved
            </dd>
          </div>
          <div>
            <dt className="font-display text-[34px] text-paper">24/7</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Live monitoring
            </dd>
          </div>
        </dl>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-[40px] font-[340] text-text">Deployed work</h2>
          <span className="text-[13px] text-text-dim">Austin DoT · City of Austin</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Ethereal Search — agentic RAG for engineering teams */}
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
          {/* Card 2 */}
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
                Computer vision that classifies barrier shape, placement, and compliance from street
                footage — a lightweight dashboard for city staff to review, manage, and export findings.
              </p>
              <div className="mt-4 flex gap-5 text-[12px] font-medium text-accent">
                <span>Real-time detection</span>
                <span>Compliance analysis</span>
              </div>
            </div>
          </article>
          {/* Card 3 */}
          <article className="overflow-hidden rounded-[10px] border border-line bg-ink-2">
            <div className="relative h-[200px] overflow-hidden bg-gradient-to-br from-[#123B34] to-ink">
              <Image
                src="/assets/austin-ai-demo.png"
                alt="Austin TX DOT AI barricade detection system dashboard"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-7 pb-8">
              <h3 className="font-display text-[22px] font-[400] text-text">
                Street-level Vision Systems
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-text-dim">
                Continuous monitoring of right-of-way and construction zones, turning camera feeds into
                structured, actionable findings for infrastructure teams.
              </p>
              <div className="mt-4 flex gap-5 text-[12px] font-medium text-accent">
                <span>Live deployment</span>
                <span>Exportable reports</span>
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
          Ready to transform your future?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-text-dim">
          Let&apos;s architect the future of your industry together.
        </p>
        <a
          href="mailto:info@etherealdimension.io"
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
