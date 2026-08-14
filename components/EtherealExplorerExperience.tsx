'use client';

/**
 * 🔮 The EtherealExplorer Experience - Native code with our logo
 *
 * "The real deal—native EtherealExplorer from ethereal-explorer.zip,
 * with our logo swapped in. Links to /ethereal-search/explorer or
 * /ethereal-search/concepts for the full experience."
 *
 * - The Cosmic Search Orchestrator
 */

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function EtherealExplorerExperience({
  variant = 'explorer',
}: {
  variant?: 'explorer' | 'geometric';
}) {
  const explorerPath = variant === 'geometric' ? '/ethereal-search/concepts' : '/ethereal-search/explorer';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-[#030712] to-[#0c1222] p-8">
      <p className="text-lg text-gray-400">
        {variant === 'explorer'
          ? 'Full EtherealExplorer experience with our logo'
          : 'Logo Lab with geometric backgrounds'}
      </p>
      <Link href={explorerPath}>
        <Button className="bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] text-black font-semibold">
          Open EtherealExplorer
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <Link href="/ethereal-search">
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          Back to Ethereal Search
        </Button>
      </Link>
    </div>
  );
}
