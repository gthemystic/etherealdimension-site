/**
 * Ethereal Editorial — Search detail
 * This route remains available as a deep-link, but it is now an exploratory product surface,
 * not a preview dead-end. The main site owns the primary conversion path.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { EtherealSearchSection } from "../../components/EtherealSearchSection";

export const metadata: Metadata = {
  title: "Ethereal Search — Ethereal Dimension",
  description: "A source-aware search concept for engineering and built-environment records.",
};

export default function EtherealSearchPage() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
          <Link href="/" className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
            Ethereal <span className="text-accent">Dimension</span>
          </Link>
          <Link href="/" className="text-[13px] text-text-dim transition-colors hover:text-text">
            ← Back to the work
          </Link>
        </div>
      </header>
      <main>
        <EtherealSearchSection standalone />
      </main>
      <footer className="flex flex-col gap-3 border-t border-line px-6 py-8 text-[12px] text-text-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Ethereal Dimension</span>
        <a href="mailto:info@etherealdimension.io" className="hover:text-text">
          info@etherealdimension.io
        </a>
      </footer>
    </>
  );
}
