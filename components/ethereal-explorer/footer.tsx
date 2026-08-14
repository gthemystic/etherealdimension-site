import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--glass-border)] px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative h-7 w-7 flex-shrink-0">
            <Image
              src="/assets/ethereal-logo.png"
              alt="Ethereal Dimension"
              fill
              className="object-contain [mix-blend-mode:lighten]"
            />
          </div>
          <span className="text-sm font-semibold text-foreground">EtherealExplorer</span>
        </Link>
        <div className="flex items-center gap-6">
          {["Features", "Demo", "Pricing", "Docs", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          2025 EtherealExplorer. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
