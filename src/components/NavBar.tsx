"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const products = [
  {
    label: "Hylios",
    desc: "AR + ML room scanner for iPhone",
    href: "#hylios",
  },
  {
    label: "Ethereal Search",
    desc: "Agentic RAG for engineering teams",
    href: "/ethereal-search",
  },
  {
    label: "TracePass",
    desc: "Supply-chain provenance, RAG-powered",
    href: "#tracepass",
  },
  {
    label: "GovSlack",
    desc: "Governed AI workspaces for agencies",
    href: "#govslack",
  },
];

const productSectionIds = ["hylios", "tracepass", "govslack"];

const tabClass = (isActive: boolean) =>
  `relative text-[12px] font-medium uppercase tracking-[0.22em] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-accent after:transition-transform ${
    isActive
      ? "text-paper after:scale-x-100"
      : "text-text-dim after:scale-x-0 hover:text-text hover:after:scale-x-100"
  }`;

export default function NavBar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-spy: highlight the section currently under the sticky header line.
  useEffect(() => {
    const ids = ["work", "hylios", "philosophy", "about", "cta"];
    const onScroll = () => {
      const line = 160;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const productsActive = productSectionIds.includes(active);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper"
        >
          Ethereal <span className="text-accent">Dimension</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          <a href="#work" className={tabClass(active === "work")}>
            Work
          </a>

          {/* Products dropdown */}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              className={tabClass(productsActive)}
            >
              Products
              <span className="ml-1 inline-block text-[9px] text-accent">▾</span>
            </button>
            <div className="invisible absolute left-1/2 top-full z-30 mt-4 w-64 -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-[10px] border border-line bg-ink-2 p-2">
                {products.map((p) => (
                  <Link
                    key={p.label}
                    href={p.href}
                    className="flex flex-col gap-0.5 rounded-lg px-4 py-3 transition-colors hover:bg-ink"
                  >
                    <span className="text-[13px] font-semibold text-text">
                      {p.label}
                    </span>
                    <span className="text-[12px] text-text-dim">{p.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a href="#philosophy" className={tabClass(active === "philosophy")}>
            Philosophy
          </a>
          <a href="#about" className={tabClass(active === "about")}>
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden rounded-full bg-accent px-[18px] py-2 text-[12.5px] font-semibold text-ink transition-opacity hover:opacity-90 md:inline-block"
          >
            Partner with us
          </a>
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-text md:hidden"
          >
            <span className="text-[14px]">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-line bg-ink/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {[
              { label: "Work", href: "#work" },
              { label: "Philosophy", href: "#philosophy" },
              { label: "About", href: "#about" },
            ].map((t) => (
              <a
                key={t.label}
                href={t.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-[13px] uppercase tracking-[0.18em] text-text-dim hover:text-text"
              >
                {t.label}
              </a>
            ))}
            <div className="mt-1 border-t border-line pt-2">
              <p className="px-3 pb-1 pt-1 text-[10px] uppercase tracking-[0.22em] text-text-dim">
                Products
              </p>
              {products.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-[13px] text-text hover:bg-ink-2"
                >
                  {p.label}
                  <span className="ml-2 text-[12px] text-text-dim">{p.desc}</span>
                </Link>
              ))}
            </div>
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-accent px-4 py-2.5 text-center text-[12.5px] font-semibold text-ink"
            >
              Partner with us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
