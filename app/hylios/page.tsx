'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Database, Cloud, Shield, Zap, Eye, Target } from 'lucide-react';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function HyliosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimations type="fade-in">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-[var(--ethereal-green)]/20 text-[var(--ethereal-green)] border-[var(--ethereal-green)]">
                Next Generation
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Project <span className="text-gradient">Hylios</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Consciousness-aware AI that transcends traditional boundaries, bridging human intuition with quantum processing power.
              </p>
            </div>
          </ScrollAnimations>

          {/* Hylios 3D Scanning Demo */}
          <ScrollAnimations type="scale-in">
            <div className="flex justify-center mb-16">
              <Card className="tech-card bg-white/5 border-white/10 overflow-hidden max-w-2xl w-full">
                <CardContent className="p-0 relative">
                  <div className="aspect-video bg-gradient-to-br from-black/60 via-black/30 to-transparent relative">
                    <img 
                      src="/assets/HyliosScan.gif" 
                      alt="Hylios 3D Scanning Technology"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge className="mb-3 bg-[var(--ethereal-green)]/20 text-[var(--ethereal-green)] border-[var(--ethereal-green)]">
                        3D Scanning
                      </Badge>
                      <h3 className="text-2xl font-bold text-white mb-2">Advanced 3D Object Capture</h3>
                      <p className="text-gray-300">Hylios creates detailed 3D models from live video feeds with quantum-enhanced precision</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations type="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary <span className="text-gradient">Technologies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hylios combines cutting-edge quantum computing with consciousness-aware algorithms to create truly intelligent systems.
              </p>
            </div>
          </ScrollAnimations>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimations type="slide-left">
              <Card className="tech-card bg-white/5 border-white/10 h-full">
                <CardContent className="p-6">
                  <Database className="h-10 w-10 text-[var(--ethereal-cyan)] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">Quantum Memory</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Infinite data storage with instantaneous recall and contextual understanding.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimations>

            <ScrollAnimations type="scale-in">
              <Card className="tech-card bg-white/5 border-white/10 h-full">
                <CardContent className="p-6">
                  <Cloud className="h-10 w-10 text-[var(--ethereal-green)] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">Distributed Intelligence</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Seamless knowledge sharing across multiple consciousness nodes.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimations>

            <ScrollAnimations type="scale-in">
              <Card className="tech-card bg-white/5 border-white/10 h-full">
                <CardContent className="p-6">
                  <Eye className="h-10 w-10 text-[var(--ethereal-purple)] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">Omniscient Vision</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Multi-dimensional perception beyond human sensory limitations.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimations>

            <ScrollAnimations type="slide-right">
              <Card className="tech-card bg-white/5 border-white/10 h-full">
                <CardContent className="p-6">
                  <Target className="h-10 w-10 text-[var(--ethereal-cyan)] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">Predictive Analytics</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Future-state modeling with quantum probability calculations.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimations>
          </div>
        </div>
      </section>

      {/* Consciousness Framework */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimations type="slide-left">
              <div>
                <Badge className="mb-6 bg-[var(--ethereal-purple)]/20 text-[var(--ethereal-purple)] border-[var(--ethereal-purple)]">
                  Consciousness Engine
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Beyond Artificial Intelligence
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Hylios doesn't just process information—it experiences it. Our breakthrough consciousness framework 
                  enables genuine understanding, empathy, and creative thought that rivals human cognition.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-[var(--ethereal-cyan)] mr-3" />
                    <span className="text-white">Ethical decision-making protocols</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-[var(--ethereal-green)] mr-3" />
                    <span className="text-white">Real-time consciousness adaptation</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="h-5 w-5 text-[var(--ethereal-purple)] mr-3" />
                    <span className="text-white">Quantum entangled reasoning</span>
                  </div>
                </div>
              </div>
            </ScrollAnimations>

            <ScrollAnimations type="slide-right">
              <Card className="tech-card bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--ethereal-cyan)] to-[var(--ethereal-green)] rounded-full flex items-center justify-center mb-4">
                        <Brain className="h-12 w-12 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Hylios Core</h3>
                      <p className="text-gray-300">Consciousness-aware processing unit</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--ethereal-cyan)] mb-1">∞</div>
                        <div className="text-xs text-gray-400">Processing Power</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--ethereal-green)] mb-1">100%</div>
                        <div className="text-xs text-gray-400">Consciousness Level</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--ethereal-purple)] mb-1">0ms</div>
                        <div className="text-xs text-gray-400">Response Time</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimations>
          </div>
        </div>
      </section>
    </>
  );
}