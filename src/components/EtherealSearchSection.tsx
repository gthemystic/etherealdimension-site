"use client";

/**
 * Ethereal Editorial — Evidence Desk
 * The interface treats search as a credible field desk: query, answer, and evidence
 * remain in one view. Surfaces are flat, dark, and precisely ruled; teal marks evidence.
 */
import Image from "next/image";
import { useId, useRef, useState } from "react";

type SearchVariant = "desk" | "atlas" | "thread";

const variants: Array<{
  id: SearchVariant;
  name: string;
  subtitle: string;
  description: string;
}> = [
  {
    id: "desk",
    name: "Evidence desk",
    subtitle: "Answer and source trail together",
    description:
      "A direct answer is useful only when a reviewer can see where it came from. This is the recommended direction for a first release.",
  },
  {
    id: "atlas",
    name: "Project atlas",
    subtitle: "Navigate the record before the question",
    description:
      "A collection-first workspace for teams who begin with a project, a document set, and a known area of the built environment.",
  },
  {
    id: "thread",
    name: "Field thread",
    subtitle: "Follow a question across the record",
    description:
      "A lightweight investigation trail that keeps competing evidence, open questions, and a final decision in deliberate sequence.",
  },
];

function EvidenceDesk() {
  return (
    <div className="search-surface relative overflow-hidden border border-line bg-ink-2">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5 sm:px-6">
        <div className="flex items-center gap-2.5 text-[12px] text-text-dim">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Illustrative workflow
        </div>
        <span className="text-[12px] text-text-dim">Source-aware search</span>
      </div>
      <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(210px,0.65fr)]">
        <div className="border-b border-line p-5 sm:p-6 lg:border-r lg:border-b-0">
          <div className="flex items-start gap-3 border-b border-line pb-5">
            <span className="mt-1 text-accent">⌕</span>
            <div>
              <p className="text-[15px] leading-[1.55] text-text">
                Which sheet defines the temporary access path for Parcel 4?
              </p>
              <p className="mt-2 text-[12px] text-text-dim">Query across drawings, field records, and addenda.</p>
            </div>
          </div>
          <div className="pt-6">
            <p className="text-[12px] font-medium text-accent">Provisional answer</p>
            <p className="mt-3 max-w-[57ch] font-display text-[24px] font-[400] leading-[1.18] text-paper sm:text-[27px]">
              The access path is established in the civil plan set and revised by the field log.
            </p>
            <p className="mt-4 max-w-[60ch] text-[14px] leading-[1.7] text-text-dim">
              The path is marked on sheet C-204. The April field log records a required shift at the eastern
              gate, which is also referenced by the safety addendum.
            </p>
            <div className="mt-6 border-l-2 border-accent pl-4 text-[13px] leading-[1.6] text-text">
              Check the gate condition before issuing a construction sequence.
            </div>
          </div>
        </div>
        <aside className="p-5 sm:p-6">
          <p className="text-[12px] font-medium text-text">Evidence trail</p>
          <ol className="mt-5 space-y-5">
            <li className="border-b border-line pb-5">
              <p className="text-[12px] text-accent">Primary drawing</p>
              <p className="mt-1.5 text-[13px] leading-[1.45] text-text">Civil Plan Set · Sheet C-204</p>
              <p className="mt-1 text-[12px] text-text-dim">Temporary access alignment</p>
            </li>
            <li className="border-b border-line pb-5">
              <p className="text-[12px] text-accent">Field record</p>
              <p className="mt-1.5 text-[13px] leading-[1.45] text-text">Right-of-way log · April 18</p>
              <p className="mt-1 text-[12px] text-text-dim">Eastern gate condition</p>
            </li>
            <li>
              <p className="text-[12px] text-accent">Constraint</p>
              <p className="mt-1.5 text-[13px] leading-[1.45] text-text">Safety addendum · Section 3.2</p>
              <p className="mt-1 text-[12px] text-text-dim">Pedestrian separation</p>
            </li>
          </ol>
        </aside>
      </div>
    </div>
  );
}

function ProjectAtlas() {
  return (
    <div className="search-surface grid overflow-hidden border border-line bg-ink-2 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="border-b border-line p-5 sm:p-6 lg:border-r lg:border-b-0">
        <p className="text-[12px] font-medium text-accent">Project record</p>
        <h3 className="mt-3 font-display text-[28px] leading-[1.08] text-paper">North corridor improvement</h3>
        <div className="mt-8 space-y-4 text-[13px]">
          <div className="border-b border-line pb-4">
            <p className="text-text">Civil drawings</p>
            <p className="mt-1 text-text-dim">42 sheets · Current issue</p>
          </div>
          <div className="border-b border-line pb-4">
            <p className="text-text">Field records</p>
            <p className="mt-1 text-text-dim">16 entries · Reviewed</p>
          </div>
          <div className="border-b border-line pb-4">
            <p className="text-text">Safety constraints</p>
            <p className="mt-1 text-text-dim">8 active references</p>
          </div>
          <div>
            <p className="text-text">Permits and addenda</p>
            <p className="mt-1 text-text-dim">11 indexed documents</p>
          </div>
        </div>
      </aside>
      <div className="relative min-h-[400px] overflow-hidden p-5 sm:p-6">
        <Image
          src="/assets/3d-scan-result.gif"
          alt="Illustrative spatial scan texture behind the project evidence map"
          fill
          className="object-cover opacity-[0.16] mix-blend-screen"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div className="relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5">
            <div>
              <p className="text-[12px] text-text-dim">Collection-led exploration</p>
              <p className="mt-1.5 text-[15px] text-text">Locate the record before you ask the question.</p>
            </div>
            <span className="border border-line px-3 py-2 text-[12px] text-text-dim">Record collection</span>
          </div>
          <div className="grid gap-4 pt-7 sm:grid-cols-2">
            <div className="border border-line bg-ink/65 p-4 backdrop-blur-[2px]">
              <p className="text-[12px] text-accent">Access route</p>
              <p className="mt-2 font-display text-[22px] leading-[1.15] text-paper">Parcel 4 · eastern gate</p>
              <p className="mt-3 text-[12px] leading-[1.55] text-text-dim">C-204 · Log 0418 · Safety 3.2</p>
            </div>
            <div className="border border-line bg-ink/65 p-4 backdrop-blur-[2px]">
              <p className="text-[12px] text-accent">Work zone edge</p>
              <p className="mt-2 font-display text-[22px] leading-[1.15] text-paper">Station 14+50 to 17+25</p>
              <p className="mt-3 text-[12px] leading-[1.55] text-text-dim">Plan C-111 · Permit 08 · Log 0412</p>
            </div>
            <div className="border border-line bg-ink/65 p-4 backdrop-blur-[2px]">
              <p className="text-[12px] text-accent">Utility crossing</p>
              <p className="mt-2 font-display text-[22px] leading-[1.15] text-paper">North service lateral</p>
              <p className="mt-3 text-[12px] leading-[1.55] text-text-dim">U-309 · Addendum 02 · Field note 077</p>
            </div>
            <div className="border border-line bg-ink/65 p-4 backdrop-blur-[2px]">
              <p className="text-[12px] text-accent">Public interface</p>
              <p className="mt-2 font-display text-[22px] leading-[1.15] text-paper">Temporary pedestrian route</p>
              <p className="mt-3 text-[12px] leading-[1.55] text-text-dim">TCP-002 · Safety 3.2 · Log 0409</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldThread() {
  return (
    <div className="search-surface overflow-hidden border border-line bg-ink-2">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <div className="border-b border-line p-5 sm:p-7 lg:border-r lg:border-b-0">
          <p className="text-[12px] font-medium text-accent">Active investigation</p>
          <h3 className="mt-4 max-w-[18ch] font-display text-[30px] leading-[1.08] text-paper sm:text-[35px]">
            Can the work zone shift without revising the pedestrian route?
          </h3>
          <p className="mt-5 max-w-[47ch] text-[14px] leading-[1.7] text-text-dim">
            The field thread treats a search as a decision trail. It preserves the source that supports a
            conclusion, as well as the source that complicates it.
          </p>
          <div className="mt-8 border-t border-line pt-5">
            <p className="text-[12px] text-text-dim">Current reading</p>
            <p className="mt-2 text-[15px] leading-[1.55] text-text">A revision is likely required at the eastern crossing.</p>
          </div>
        </div>
        <ol className="divide-y divide-line">
          <li className="grid grid-cols-[72px_1fr] gap-4 px-5 py-5 sm:grid-cols-[92px_1fr] sm:px-7">
            <p className="text-[12px] text-accent">Question</p>
            <div>
              <p className="text-[14px] text-text">Scope the proposed shift.</p>
              <p className="mt-1 text-[12px] leading-[1.5] text-text-dim">Work zone plan · Revision 03</p>
            </div>
          </li>
          <li className="grid grid-cols-[72px_1fr] gap-4 px-5 py-5 sm:grid-cols-[92px_1fr] sm:px-7">
            <p className="text-[12px] text-accent">Supports</p>
            <div>
              <p className="text-[14px] text-text">West-side buffer remains within the plan allowance.</p>
              <p className="mt-1 text-[12px] leading-[1.5] text-text-dim">Civil Plan C-111 · Note 12</p>
            </div>
          </li>
          <li className="grid grid-cols-[72px_1fr] gap-4 px-5 py-5 sm:grid-cols-[92px_1fr] sm:px-7">
            <p className="text-[12px] text-accent">Conflicts</p>
            <div>
              <p className="text-[14px] text-text">The eastern crossing loses required separation.</p>
              <p className="mt-1 text-[12px] leading-[1.5] text-text-dim">Safety Addendum 3.2 · Field Log 0418</p>
            </div>
          </li>
          <li className="grid grid-cols-[72px_1fr] gap-4 px-5 py-5 sm:grid-cols-[92px_1fr] sm:px-7">
            <p className="text-[12px] text-accent">Next step</p>
            <div>
              <p className="text-[14px] text-text">Ask for a revised pedestrian management plan.</p>
              <p className="mt-1 text-[12px] leading-[1.5] text-text-dim">Decision ready for reviewer sign-off</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export function EtherealSearchSection({ standalone = false }: { standalone?: boolean }) {
  const [activeVariant, setActiveVariant] = useState<SearchVariant>("desk");
  const tabListId = useId();
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const active = variants.find((variant) => variant.id === activeVariant) ?? variants[0];

  function selectVariant(nextIndex: number) {
    const nextVariant = variants[nextIndex];
    setActiveVariant(nextVariant.id);
    tabsRef.current[nextIndex]?.focus();
  }

  return (
    <section id="ethereal-search" className={standalone ? "px-6 py-16 sm:px-8 sm:py-24" : "border-t border-line px-6 py-24 sm:px-8 sm:py-32"}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
          <div className="lg:pt-2">
            <p className="text-[13px] text-accent">Ethereal Search</p>
            <h2 className="mt-5 max-w-[13ch] font-display text-[42px] font-[340] leading-[1.03] tracking-[-0.02em] text-text sm:text-[54px]">
              Ask the record. <em className="italic text-accent">Keep</em> the trail.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[15px] leading-[1.72] text-text-dim">
              A search concept for infrastructure teams working across specifications, drawings, site records,
              and changing conditions. The answer should never lose its source.
            </p>
            <a
              href="mailto:info@etherealdimension.io?subject=Ethereal%20Search"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[13px] font-semibold text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Discuss Ethereal Search <span aria-hidden="true">→</span>
            </a>
            <p className="mt-5 max-w-[42ch] text-[12px] leading-[1.55] text-text-dim">
              The interaction below is a product-direction prototype, not a claim of a live deployment.
            </p>
          </div>

          <div>
            <div
              aria-label="Ethereal Search concepts"
              className="mb-5 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3"
              role="tablist"
              id={tabListId}
            >
              {variants.map((variant, index) => {
                const selected = activeVariant === variant.id;
                return (
                  <button
                    key={variant.id}
                    aria-controls={`${tabListId}-${variant.id}`}
                    aria-selected={selected}
                    className={`min-h-[94px] px-4 py-4 text-left transition-colors duration-200 ease-out ${
                      selected ? "bg-ink-2 text-paper" : "bg-ink text-text-dim hover:bg-ink-2 hover:text-text"
                    }`}
                    id={`${tabListId}-tab-${variant.id}`}
                    onClick={() => setActiveVariant(variant.id)}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowRight") {
                        event.preventDefault();
                        selectVariant((index + 1) % variants.length);
                      }
                      if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        selectVariant((index - 1 + variants.length) % variants.length);
                      }
                      if (event.key === "Home") {
                        event.preventDefault();
                        selectVariant(0);
                      }
                      if (event.key === "End") {
                        event.preventDefault();
                        selectVariant(variants.length - 1);
                      }
                    }}
                    ref={(element) => {
                      tabsRef.current[index] = element;
                    }}
                    role="tab"
                    tabIndex={selected ? 0 : -1}
                    type="button"
                  >
                    <span className={`block text-[13px] ${selected ? "text-accent" : "text-text"}`}>{variant.name}</span>
                    <span className="mt-1.5 block text-[12px] leading-[1.35]">{variant.subtitle}</span>
                  </button>
                );
              })}
            </div>
            <div aria-labelledby={`${tabListId}-tab-${active.id}`} id={`${tabListId}-${active.id}`} role="tabpanel">
              <p className="mb-4 max-w-[67ch] text-[13px] leading-[1.6] text-text-dim">{active.description}</p>
              {activeVariant === "desk" && <EvidenceDesk />}
              {activeVariant === "atlas" && <ProjectAtlas />}
              {activeVariant === "thread" && <FieldThread />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
