'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Smartphone, Brain, Zap, Shield, Eye } from 'lucide-react';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function AustinAIPage() {
  return (
    <>
      {/* Austin Collaboration Section */}
      <section id="austin" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Project Banner */}
          <ScrollAnimations type="scale-in">
            <div className="mb-16 relative">
              <img 
                src="/assets/detected-barricades-landing.gif" 
                alt="Austin Collaboration Project" 
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </ScrollAnimations>

          {/* AI Barricade Detection Demo */}
          <ScrollAnimations type="scale-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Barricade Detection GIF 1 */}
              <Card className="tech-card bg-white/5 border-white/10 overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="aspect-[9/16] bg-gradient-to-br from-black/60 via-black/30 to-transparent relative min-h-[600px]">
                    <img 
                      src="/assets/barricade-demo.gif" 
                      alt="Austin AI Barricade Detection Demo"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge className="mb-3 bg-[var(--ethereal-green)]/20 text-[var(--ethereal-green)] border-[var(--ethereal-green)]">
                        Live Demo
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-2">Real-Time Detection</h3>
                      <p className="text-gray-300 text-sm">AI identifies and classifies barricades in live video feeds</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Barricade Detection GIF 2 */}
              <Card className="tech-card bg-white/5 border-white/10 overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="aspect-[9/16] bg-gradient-to-br from-black/60 via-black/30 to-transparent relative min-h-[600px]">
                    <img 
                      src="/assets/detected-barricades-final-2.gif" 
                      alt="Austin AI Advanced Detection"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge className="mb-3 bg-[var(--ethereal-cyan)]/20 text-[var(--ethereal-cyan)] border-[var(--ethereal-cyan)]">
                        AI Vision
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-2">Advanced Analysis</h3>
                      <p className="text-gray-300 text-sm">Sophisticated pattern recognition and environmental assessment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Features Section */}
      <section id="austin" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations type="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Unprecedented <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Austin AI represents a quantum leap in artificial intelligence, combining advanced reasoning with human-like intuition.
              </p>
            </div>
          </ScrollAnimations>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimations type="slide-left">
              <Card className="tech-card bg-white/5 border-white/10 h-full">
                <CardContent className="p-8">
                  <Brain className="h-12 w-12 text-[var(--ethereal-cyan)] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Cognitive Intelligence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Advanced neural networks that mirror human thought processes, enabling complex reasoning and creative problem-solving.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimations>

            <ScrollAnimations type="scale-in">
              <Card className="tech-card bg-white/5 border-white/10 h-full">
                <CardContent className="p-8">
                  <Zap className="h-12 w-12 text-[var(--ethereal-green)] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Real-time Processing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Lightning-fast response times with parallel processing capabilities that handle multiple tasks simultaneously.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimations>

            <ScrollAnimations type="slide-right">
              <Card className="tech-card bg-white/5 border-white/10 h-full">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-[var(--ethereal-purple)] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Ethical Framework</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Built-in ethical guidelines and safety protocols ensure responsible AI behavior in all interactions.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimations>
          </div>
        </div>
      </section>

      {/* Hylios Project Teaser */}
      <section id="hylios" className="py-20 bg-gradient-to-r from-[#00d4ff] via-[#00ff88] to-[#00d4ff] relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollAnimations type="fade-in">
            <Badge className="mb-6 bg-black/20 text-white border-white/30">
              Coming Soon
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Project Hylios
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
              The next evolution beyond Austin AI. A consciousness-aware system that bridges the gap between artificial and human intelligence.
            </p>
            <Button 
              size="lg" 
              className="bg-black text-[var(--ethereal-cyan)] hover:bg-gray-900 font-semibold px-8 py-4"
            >
              Learn More <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </ScrollAnimations>
        </div>
      </section>
    </>
  );
}