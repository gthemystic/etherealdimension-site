"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { defaultSiteConfig, type SiteConfig } from "@/lib/site-config";

const productSectionIds = ["hylios", "tracepass", "govslack"];

const tabClass = (isActive: boolean) =>
  `relative text-[12px] font-medium transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-accent after:transition-transform ${
    isActive
      ? "text-paper after:scale-x-100"
      : "text-text-dim after:scale-x-0 hover:text-text hover:after:scale-x-100"
  }`;

function isInternalRoute(href: string) {
  return href.startsWith("/");
}

function activeKey(href: string) {
  return href.replace(/^#/, "");
}

export default function NavBar({ initialConfig = defaultSiteConfig }: { initialConfig?: SiteConfig }) {
  const [config, setConfig] = useState(initialConfig);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const showProductsDropdown = config.flags.productsDropdown !== false;

  useEffect(() => {
    let cancelled = false;
    fetch("/api/site-config", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((nextConfig: SiteConfig | null) => {
        if (!cancelled && nextConfig) setConfig(nextConfig);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  const sectionIds = useMemo(() => {
    const anchors = [
      ...config.navItems.map((item) => item.href),
      ...(showProductsDropdown ? config.products.map((item) => item.href) : []),
      config.cta.href,
    ];
    return Array.from(
      new Set(
        anchors
          .filter((href) => href.startsWith("#"))
          .map((href) => href.slice(1))
          .filter(Boolean),
      ),
    );
  }, [config, showProductsDropdown]);

  useEffect(() => {
    const onScroll = () => {
      const line = 160;
      let current = "";
      for (const id of sectionIds) {
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
  }, [sectionIds]);

  const productsActive = productSectionIds.includes(active);
  const desktopNavItems = showProductsDropdown ? config.navItems.slice(0, 1) : config.navItems;
  const trailingNavItems = showProductsDropdown ? config.navItems.slice(1) : [];

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link href="/" className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
          Ethereal <span className="text-accent">Dimension</span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] md:flex">
          {desktopNavItems.map((item) => (
            <a key={`${item.label}-${item.href}`} href={item.href} className={tabClass(active === activeKey(item.href))}>
              {item.label}
            </a>
          ))}

          {showProductsDropdown && (
            <div className="group relative">
              <button type="button" aria-haspopup="true" aria-expanded="false" className={tabClass(productsActive)}>
                Products
                <span className="ml-1 inline-block text-[9px] text-accent">▾</span>
              </button>
              <div className="invisible absolute left-1/2 top-full z-30 mt-4 w-64 -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-[10px] border border-line bg-ink-2 p-2">
                  {config.products.map((p) => {
                    const content = (
                      <>
                        <span className="text-[13px] font-semibold text-text">{p.label}</span>
                        <span className="text-[12px] text-text-dim">{p.desc}</span>
                      </>
                    );

                    return isInternalRoute(p.href) ? (
                      <Link key={`${p.label}-${p.href}`} href={p.href} className="flex flex-col gap-0.5 rounded-lg px-4 py-3 transition-colors hover:bg-ink">
                        {content}
                      </Link>
                    ) : (
                      <a key={`${p.label}-${p.href}`} href={p.href} className="flex flex-col gap-0.5 rounded-lg px-4 py-3 transition-colors hover:bg-ink">
                        {content}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {trailingNavItems.map((item) => (
            <a key={`${item.label}-${item.href}`} href={item.href} className={tabClass(active === activeKey(item.href))}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={config.cta.href} className="hidden rounded-full bg-accent px-[18px] py-2 text-[12.5px] font-semibold text-ink transition-opacity hover:opacity-90 md:inline-block">
            {config.cta.label}
          </a>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-text md:hidden">
            <span className="text-[14px]">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-ink/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {config.navItems.map((t) => (
              <a key={`${t.label}-${t.href}`} href={t.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2.5 text-[13px] text-text-dim hover:text-text">
                {t.label}
              </a>
            ))}
            {showProductsDropdown && (
              <div className="mt-1 border-t border-line pt-2">
                <p className="px-3 pb-1 pt-1 text-[10px] uppercase tracking-[0.22em] text-text-dim">Products</p>
                {config.products.map((p) => (
                  <a key={`${p.label}-${p.href}`} href={p.href} onClick={() => setMenuOpen(false)} className="block rounded-md px-3 py-2.5 text-[13px] text-text hover:bg-ink-2">
                    {p.label}
                    <span className="ml-2 text-[12px] text-text-dim">{p.desc}</span>
                  </a>
                ))}
              </div>
            )}
            <a href={config.cta.href} onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-accent px-4 py-2.5 text-center text-[12.5px] font-semibold text-ink">
              {config.cta.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
