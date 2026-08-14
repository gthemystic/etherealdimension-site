'use client';

/**
 * 🔮 EtherealExplorer Logo Lab - Background & Logo concepts
 * From ethereal-concepts.zip with our logo
 */

import { useState } from 'react';
import { ConstellationBackground } from '@/components/ethereal-concepts/constellation-background';
import { VectorFieldBackground } from '@/components/ethereal-concepts/vector-field-background';
import { QuantumGridBackground } from '@/components/ethereal-concepts/quantum-grid-background';
import { SandBackground } from '@/components/ethereal-concepts/sand-background';
import { RainBackground } from '@/components/ethereal-concepts/rain-background';
import { AuroraBackground } from '@/components/ethereal-concepts/aurora-background';
import { NeuralBackground } from '@/components/ethereal-concepts/neural-background';
import { NebulaBackground } from '@/components/ethereal-concepts/nebula-background';
import { FluidBackground } from '@/components/ethereal-concepts/fluid-background';
import { FireflyBackground } from '@/components/ethereal-concepts/firefly-background';
import { WavesBackground } from '@/components/ethereal-concepts/waves-background';
import { CrystallineBackground } from '@/components/ethereal-concepts/crystalline-background';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { UnifiedControls } from '@/components/ethereal-concepts/unified-controls';
import { type BackgroundConfig, GRADIENT_BG } from '@/lib/background-config';
import { ArrowLeft } from 'lucide-react';

type BackgroundType =
  | 'constellation'
  | 'vector'
  | 'quantum'
  | 'sand'
  | 'rain'
  | 'aurora'
  | 'neural'
  | 'nebula'
  | 'fluid'
  | 'firefly'
  | 'waves'
  | 'crystalline';

const ETHERAL_LOGO = '/assets/ethereal-logo.png';

export default function EtherealSearchConceptsPage() {
  const [background, setBackground] = useState<BackgroundType>('constellation');
  const [bgConfig, setBgConfig] = useState<BackgroundConfig>({ theme: 'cosmic', intensity: 0.7 });

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-b ${GRADIENT_BG[bgConfig.theme]}`}
      style={
        {
          '--background': '258 70% 12%',
          '--foreground': '0 0% 98%',
          '--primary': '280 70% 60%',
          '--muted-foreground': '0 0% 75%',
        } as React.CSSProperties
      }
    >
      {/* All backgrounds */}
      <div className={`transition-opacity duration-1000 ${background === 'constellation' ? 'opacity-100' : 'opacity-0'}`}>
        <ConstellationBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'vector' ? 'opacity-100' : 'opacity-0'}`}>
        <VectorFieldBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'quantum' ? 'opacity-100' : 'opacity-0'}`}>
        <QuantumGridBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'sand' ? 'opacity-100' : 'opacity-0'}`}>
        <SandBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'rain' ? 'opacity-100' : 'opacity-0'}`}>
        <RainBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'aurora' ? 'opacity-100' : 'opacity-0'}`}>
        <AuroraBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'neural' ? 'opacity-100' : 'opacity-0'}`}>
        <NeuralBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'nebula' ? 'opacity-100' : 'opacity-0'}`}>
        <NebulaBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'fluid' ? 'opacity-100' : 'opacity-0'}`}>
        <FluidBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'firefly' ? 'opacity-100' : 'opacity-0'}`}>
        <FireflyBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'waves' ? 'opacity-100' : 'opacity-0'}`}>
        <WavesBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>
      <div className={`transition-opacity duration-1000 ${background === 'crystalline' ? 'opacity-100' : 'opacity-0'}`}>
        <CrystallineBackground theme={bgConfig.theme} intensity={bgConfig.intensity} />
      </div>

      <UnifiedControls
        background={background}
        onBackgroundChange={setBackground}
        config={bgConfig}
        onConfigChange={setBgConfig}
      />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-28 pt-8 md:py-12 md:pb-24">
        <div className="w-full max-w-4xl space-y-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-visible p-2">
                <Image
                  src={ETHERAL_LOGO}
                  alt="Ethereal Dimension"
                  fill
                  className="rounded-2xl object-contain object-center [mix-blend-mode:lighten]"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(0,212,255,0.3)]" />
              </div>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              EtherealExplorer
            </h1>
            <p className="text-pretty text-base text-gray-300 md:text-lg lg:text-xl">
              Agentic RAG Smart Search for Engineering
            </p>
            <p className="text-pretty text-sm text-gray-400">
              Navigate through technical knowledge across infinite dimensional space
            </p>
          </div>

          <div className="mx-auto w-full max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search engineering documentation..."
                className="h-14 w-full rounded-full border-white/20 bg-white/10 pl-12 pr-32 text-base text-white placeholder-gray-500 backdrop-blur-md"
              />
              <Button size="lg" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[var(--ethereal-cyan)] px-6 font-medium text-black hover:bg-[var(--ethereal-green)]">
                Explore
              </Button>
            </div>
          </div>

          <div className="grid gap-4 pt-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-3xl font-bold text-[var(--ethereal-cyan)]">10M+</div>
              <div className="mt-2 text-sm text-gray-400">Documents Indexed</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-3xl font-bold text-[var(--ethereal-green)]">99.2%</div>
              <div className="mt-2 text-sm text-gray-400">Accuracy Score</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-3xl font-bold text-[var(--ethereal-cyan)]">&lt;100ms</div>
              <div className="mt-2 text-sm text-gray-400">Avg Response Time</div>
            </div>
          </div>
        </div>
      </main>

      <div className="pointer-events-none fixed inset-0 bg-gradient-to-t from-[#08061a]/80 via-transparent to-transparent" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,100,255,0.1),transparent_50%)]" />

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
