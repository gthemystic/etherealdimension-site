/**
 * Ethereal Editorial — Field Thread
 * A source-aware decision record. The split composition keeps the active question in view while
 * an evidence sequence makes support, conflict, and the requested next step immediately scannable.
 */

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
      <div className="mx-auto max-w-6xl overflow-hidden border border-line bg-ink-2">
        <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
          <div className="flex min-h-[540px] flex-col border-b border-line px-7 py-10 sm:px-11 sm:py-14 lg:min-h-[650px] lg:border-r lg:border-b-0">
            <div>
              <p className="text-[13px] font-medium tracking-[0.18em] text-accent">ETHEREAL SEARCH</p>
              <div className="mt-5 h-px w-16 bg-accent" />
              <h2
                id="ethereal-search-heading"
                className="mt-11 max-w-[11ch] font-display text-[43px] font-[340] leading-[1.08] tracking-[-0.025em] text-paper sm:text-[56px]"
              >
                Follow a question across the record.
              </h2>
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
                Illustrative product direction, not a claim of live deployment.
              </p>
            </div>
          </div>

          <ol className="relative py-5 sm:py-8 lg:py-10">
            <div aria-hidden="true" className="absolute bottom-14 left-[43px] top-14 w-px bg-accent sm:left-[51px]" />
            {thread.map((item, index) => (
              <li
                key={item.number}
                className={`relative grid grid-cols-[96px_minmax(0,1fr)] gap-3 px-7 py-8 sm:grid-cols-[116px_minmax(0,1fr)] sm:gap-5 sm:px-10 sm:py-10 ${
                  index !== thread.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="relative z-10 flex items-center gap-4 self-start sm:gap-5">
                  <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full border-2 border-accent bg-ink-2" />
                  <span className="font-display text-[26px] leading-none text-accent sm:text-[29px]">{item.number}</span>
                </div>
                <div className="pb-1">
                  <h3 className="max-w-[29ch] font-display text-[29px] font-[400] leading-[1.18] tracking-[-0.015em] text-paper sm:text-[36px]">
                    {item.stage} <span className="text-text-dim">—</span> {item.statement}
                  </h3>
                  <p className="mt-5 text-[11px] font-medium leading-[1.55] tracking-[0.15em] text-text-dim sm:text-[12px]">
                    {item.source.toUpperCase()}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
