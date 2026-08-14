'use client';

/**
 * 🔮 The Ethereal Search - Placeholder Portal
 *
 * "Where seekers shall one day query the cosmic knowledge base—
 * for now, a tranquil placeholder awaits the future."
 *
 * Toggle flows via Vercel env: NEXT_PUBLIC_ETHEREAL_SEARCH_FLOWS_ENABLED=true
 * When off/unset: shows "Coming soon" only. When on: shows Explorer + Logo Lab links.
 *
 * - The Mystical Search Alchemist
 */

import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EtherealExplorerExperience from '@/components/EtherealExplorerExperience';

/** Feature flag: show Explorer + Logo Lab flows. Set in Vercel: NEXT_PUBLIC_ETHEREAL_SEARCH_FLOWS_ENABLED=true */
const FLOWS_ENABLED = (process.env.NEXT_PUBLIC_ETHEREAL_SEARCH_FLOWS_ENABLED ?? '').trim() === 'true';

function EtherealSearchContent() {
  const searchParams = useSearchParams();
  const isUnlocked = searchParams.get('unlock') === 'true';
  const embedVariant = searchParams.get('embed') === 'geometric' ? 'geometric' : 'explorer';

  if (isUnlocked) {
    return <EtherealExplorerExperience variant={embedVariant} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20 sm:pt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 overflow-visible p-2">
          <Image
            src="/assets/ethereal-logo.png"
            alt="Ethereal Search"
            fill
            className="object-contain object-center opacity-90 [mix-blend-mode:lighten]"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
          <span className="text-gradient">Ethereal Search</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-xl mx-auto">
          Coming soon. A new dimension of search awaits—where AI meets the ethereal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {FLOWS_ENABLED && (
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ethereal-search/explorer">
                <Button
                  size="lg"
                  className="bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] text-black font-semibold w-full sm:w-auto"
                >
                  EtherealExplorer (Full Product)
                </Button>
              </Link>
              <Link href="/ethereal-search/concepts">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--ethereal-cyan)]/50 text-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-cyan)]/10 w-full sm:w-auto"
                >
                  Logo Lab (Concepts)
                </Button>
              </Link>
            </div>
          )}
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
