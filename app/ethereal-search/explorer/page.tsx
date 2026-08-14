'use client';

/**
 * 🔮 EtherealExplorer - Agentic RAG Smart Search
 * Full product experience with our logo. Native code from ethereal-explorer.zip
 */

import { AnimatedBackground } from '@/components/ethereal-explorer/animated-background';
import { Navbar } from '@/components/ethereal-explorer/navbar';
import { HeroSection } from '@/components/ethereal-explorer/hero-section';
import { DocumentGallery } from '@/components/ethereal-explorer/document-gallery';
import { FeatureCards } from '@/components/ethereal-explorer/feature-cards';
import { UseCaseStrip } from '@/components/ethereal-explorer/use-case-strip';
import { AgenticDemo } from '@/components/ethereal-explorer/agentic-demo';
import { PricingSection } from '@/components/ethereal-explorer/pricing-section';
import { Footer } from '@/components/ethereal-explorer/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EtherealSearchExplorerPage() {
  return (
    <div
      className="min-h-screen"
      style={
        {
          '--background': '222 47% 4%',
          '--foreground': '210 40% 98%',
          '--primary': '199 89% 60%',
          '--primary-foreground': '222 47% 4%',
          '--secondary': '215 16% 20%',
          '--muted': '215 16% 14%',
          '--accent': '199 89% 60%',
          '--glass-bg': 'rgba(255, 255, 255, 0.03)',
          '--glass-border': 'rgba(255, 255, 255, 0.08)',
          '--glass-hover': 'rgba(255, 255, 255, 0.06)',
        } as React.CSSProperties
      }
    >
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#030712] to-[#0c1222]">
        <AnimatedBackground />
        <Navbar />
        <HeroSection />
        <DocumentGallery />
        <FeatureCards />
        <UseCaseStrip />
        <AgenticDemo />
        <PricingSection />
        <Footer />
      </main>
      <div className="fixed bottom-4 left-4 z-50">
        <Link href="/ethereal-search">
          <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ethereal Search
          </Button>
        </Link>
      </div>
    </div>
  );
}
