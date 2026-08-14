"use client"

const industries = [
  "Aerospace",
  "Automotive",
  "Energy",
  "Manufacturing",
  "Construction",
  "Semiconductor",
  "Chemical",
  "Marine",
]

export function UseCaseStrip() {
  return (
    <section className="relative z-10 border-y border-[var(--glass-border)] py-12">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by engineering teams worldwide
      </p>
      <div className="overflow-hidden">
        <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
          {[...industries, ...industries].map((industry, i) => (
            <div key={`${industry}-${i}`} className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 border border-primary/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/60">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
              <span className="text-base font-medium text-muted-foreground/70">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
