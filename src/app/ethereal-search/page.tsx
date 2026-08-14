import Link from "next/link";

export const metadata = {
  title: "Ethereal Search — Ethereal Dimension",
  description:
    "A new dimension of search — AI-native retrieval for engineering and built-environment documents.",
};

export default function EtherealSearchPage() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
          <Link href="/" className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
            Ethereal <span className="text-accent">Dimension</span>
          </Link>
          <nav className="hidden items-center gap-8 text-[13px] text-text-dim md:flex">
            <Link href="/#work" className="transition-colors hover:text-text">Work</Link>
            <Link href="/#hylios" className="transition-colors hover:text-text">Hylios</Link>
            <Link href="/ethereal-search" className="text-text">Ethereal Search</Link>
            <Link href="/#cta" className="transition-colors hover:text-text">Company</Link>
          </nav>
          <Link
            href="/#cta"
            className="rounded-full bg-accent px-[18px] py-2 text-[12.5px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Partner with us
          </Link>
        </div>
      </header>

      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <p className="text-[12px] uppercase tracking-[0.22em] text-accent">Ethereal Search</p>
        <h1 className="mt-6 font-display text-[40px] font-[340] leading-[1.05] tracking-[-0.02em] text-text sm:text-[56px]">
          A new dimension of <em className="italic text-accent">search</em>.
        </h1>
        <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-text-dim">
          AI-native retrieval for engineering documents — where AI meets the ethereal. Multi-agent RAG
          across specifications, drawings, and infrastructure records, with grounded answers you can trace.
          LangChain-orchestrated agentic chains, Perplexity retrieval, and Groq-powered chat.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://ethereal-dimension-search.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accent px-6 py-3 text-[14px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Open the live product →
          </a>
          <Link
            href="/"
            className="rounded-md border border-line px-6 py-3 text-[14px] text-text transition-colors hover:border-text-dim"
          >
            ← Back to home
          </Link>
        </div>
        <dl className="mt-16 grid w-full max-w-2xl grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 text-left sm:grid-cols-3">
          <div>
            <dt className="font-display text-[20px] text-paper">LangChain</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Agentic chains
            </dd>
          </div>
          <div>
            <dt className="font-display text-[20px] text-paper">Perplexity sonar-pro</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Search + citations
            </dd>
          </div>
          <div>
            <dt className="font-display text-[20px] text-paper">Groq · Llama 3.3</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Engineering chat
            </dd>
          </div>
          <div>
            <dt className="font-display text-[20px] text-paper">Neo4j</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Knowledge graph
            </dd>
          </div>
          <div>
            <dt className="font-display text-[20px] text-paper">n8n</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              Workflow orchestration
            </dd>
          </div>
          <div>
            <dt className="font-display text-[20px] text-paper">Multi-OCR</dt>
            <dd className="mt-1.5 text-[12px] uppercase tracking-[0.06em] text-text-dim">
              DeepSeek · Gemini · Mistral
            </dd>
          </div>
        </dl>
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
