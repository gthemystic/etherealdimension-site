'use client';

/**
 * 🔮 The Ethereal Search - Product Portal
 *
 * "Where seekers can enter the working search surfaces—not just stare at a pretty concept."
 *
 * - The Mystical Search Alchemist
 */

import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, FileSearch, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EtherealExplorerExperience from '@/components/EtherealExplorerExperience';

const THREAD_STEPS = [
  {
    label: '01',
    title: 'Question — Scope the proposed shift.',
    source: 'Work zone plan · revision 03',
  },
  {
    label: '02',
    title: 'Supports — West-side buffer remains within plan allowance.',
    source: 'Civil plan C-111 · note 12',
  },
  {
    label: '03',
    title: 'Conflicts — Eastern crossing loses required separation.',
    source: 'Safety addendum 3.2 · field log 0418',
  },
  {
    label: '04',
    title: 'Next step — Request a revised pedestrian management plan.',
    source: 'Decision ready for review',
  },
];

function EtherealSearchContent() {
  const searchParams = useSearchParams();
  const isUnlocked = searchParams.get('unlock') === 'true';
  const embedVariant = searchParams.get('embed') === 'geometric' ? 'geometric' : 'explorer';

  if (isUnlocked) {
    return <EtherealExplorerExperience variant={embedVariant} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-20 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto mb-8 h-24 w-24 overflow-visible p-2 sm:h-32 sm:w-32">
          <Image
            src="/assets/ethereal-logo.png"
            alt="Ethereal Search"
            fill
            className="object-contain object-center opacity-90 [mix-blend-mode:lighten]"
          />
        </div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[var(--ethereal-cyan)]">
            Source-aware infrastructure search
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl">
            <span className="text-gradient">Ethereal Search</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 sm:mb-10 sm:text-xl">
            Trace a question across drawings, notes, field records, and source evidence — then jump into the working explorer.
          </p>
          <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/ethereal-search/explorer">
              <Button
                size="lg"
                className="w-full bg-[var(--ethereal-cyan)] px-7 py-4 font-semibold text-black hover:bg-[var(--ethereal-green)] sm:w-auto"
              >
                Open Search Website <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/ethereal-search?unlock=true">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-[var(--ethereal-cyan)]/50 px-7 py-4 text-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-cyan)]/10 sm:w-auto"
              >
                Launch Embedded Demo
              </Button>
            </Link>
            <Link href="/ethereal-search/concepts">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/20 px-7 py-4 text-white hover:bg-white/10 sm:w-auto"
              >
                View Concepts
              </Button>
            </Link>
          </div>
        </div>

        <section className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_0_80px_rgba(0,212,255,0.08)] lg:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-[var(--ethereal-cyan)]">
              <Workflow className="h-4 w-4" />
              Field Thread
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Follow a question across the record.
            </h2>
            <div className="my-8 h-px bg-white/10" />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[var(--ethereal-cyan)]">Question</p>
            <p className="text-2xl leading-snug text-white">Can the work zone shift without revising the pedestrian route?</p>
            <p className="mt-5 text-sm leading-7 text-gray-400">
              Ethereal Search turns plans, notes, and field records into a traceable decision path: what supports, what conflicts, and what comes next.
            </p>
            <Link href="/ethereal-search/explorer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ethereal-cyan)] hover:text-[var(--ethereal-green)]">
              <FileSearch className="h-4 w-4" />
              Enter the search explorer
            </Link>
          </div>

          <div className="relative p-8 sm:p-10">
            <div className="absolute bottom-10 left-12 top-10 hidden w-px bg-[var(--ethereal-cyan)]/70 sm:block" />
            <div className="space-y-8">
              {THREAD_STEPS.map((step) => (
                <div key={step.label} className="relative grid gap-4 border-b border-white/10 pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[4rem_1fr]">
                  <div className="z-10 flex items-start gap-3 font-mono text-2xl text-[var(--ethereal-cyan)]">
                    <span className="mt-1 hidden h-5 w-5 rounded-full border-2 border-[var(--ethereal-cyan)] bg-slate-950 sm:inline-block" />
                    {step.label}
                  </div>
                  <div>
                    <h3 className="text-2xl leading-snug text-white sm:text-3xl">{step.title}</h3>
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-gray-400">{step.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function EtherealSearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    }>
      <EtherealSearchContent />
    </Suspense>
  );
}
