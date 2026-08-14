/**
 * Ethereal Editorial — Field Thread + live product
 * Left: source-aware decision record (editorial proof of Ethereal Search).
 * Right: the REAL interactive search app embedded live — no interim screen,
 * no static mock. Users can search directly on the homepage.
 */

const LIVE_SEARCH_URL = "https://ethereal-dimension-search.vercel.app";

const thread = [
  {
    number: "01",
    stage: "Question",
    statement: "Scope the proposed shift.",
    source: "Work zone plan · Revision 03",
  },
  {
    number: "02",
    stage: "Supports",
    statement: "West-side buffer remains within plan allowance.",
    source: "Civil Plan C-111 · Note 12",
  },
  {
    number: "03",
    stage: "Conflicts",
    statement: "Eastern crossing loses required separation.",
    source: "Safety addendum 3.2 · Field log 0418",
  },
  {
    number: "04",
    stage: "Next step",
    statement: "Request a revised pedestrian management plan.",
    source: "Decision ready for review",
  },
];

export function EtherealSearchSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="ethereal-search"
      aria-labelledby="ethereal-search-heading"
      className={standalone ? "px-6 py-16 sm:px-8 sm:py-24" : "border-t border-line px-6 py-24 sm:px-8 sm:py-32"}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.22em] text-accent">Ethereal Search · Live product</p>
            <h2
              id="ethereal-search-heading"
              className="mt-4 font-display text-[40px] font-[340] leading-[1.08] text-text"
            >
              Search your engineering universe — <em className="italic text-accent">right here</em>.
            </h2>
          </div>
          <a
            href={LIVE_SEARCH_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-5 py-2 text-[13px] font-semibold text-text transition-colors hover:border-text-dim hover:text-text"
          >
            Open full product ↗
          </a>
        </div>

        <div className="overflow-hidden border border-line bg-ink-2">
          <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
            {/* Editorial: Field Thread decision record */}
            <div className="flex min-h-[540px] flex-col border-b border-line px-7 py-10 sm:px-11 sm:py-14 lg:min-h-[650px] lg:border-r lg:border-b-0">
              <div>
                <p className="text-[13px] font-medium tracking-[0.18em] text-accent">ETHEREAL SEARCH</p>
                <div className="mt-5 h-px w-16 bg-accent" />
                <h3 className="mt-11 max-w-[11ch] font-display text-[43px] font-[340] leading-[1.08] tracking-[-0.025em] text-paper sm:text-[56px]">
                  Follow a question across the record.
                </h3>
              </div>

              <div className="mt-11 border-t border-line pt-9 sm:mt-14">
                <p className="text-[12px] font-medium tracking-[0.16em] text-accent">QUESTION</p>
                <p className="mt-5 max-w-[18ch] font-display text-[27px] leading-[1.18] text-paper sm:text-[31px]">
                  Can the work zone shift without revising the pedestrian route?
                </p>
                <p className="mt-5 max-w-[31ch] text-[14px] leading-[1.7] text-text-dim">
                  Ethereal Search traces this question across plans, notes, and field records—surfacing what
                  supports, what conflicts, and what decision comes next.
                </p>
              </div>

              <div className="mt-auto border-t border-line pt-7 text-[11px] font-medium leading-[1.75] tracking-[0.16em] text-text-dim">
                <p>FIELD THREAD · DECISION RECORD</p>
                <p>INFRASTRUCTURE AI</p>
                <p className="mt-4 normal-case tracking-normal text-[11px] text-text-dim">
                  Live product embedded below — try it now.
                </p>
              </div>
            </div>

            {/* Live interactive search app */}
            <div className="relative flex min-h-[540px] flex-col lg:min-h-[650px]">
              <div className="flex items-center gap-2 border-b border-line px-6 py-3 text-[11px] text-text-dim">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                <span>ethereal-dimension-search</span>
                <span className="ml-auto">live · embedded</span>
              </div>
              <iframe
                src={LIVE_SEARCH_URL}
                title="Ethereal Search — live product"
                className="w-full flex-1 border-0 bg-ink"
                loading="lazy"
                allow="clipboard-write"
              />
              <div className="border-t border-line px-6 py-3 text-center">
                <a
                  href={LIVE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] font-semibold text-accent hover:text-text"
                >
                  Open in a new tab →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
