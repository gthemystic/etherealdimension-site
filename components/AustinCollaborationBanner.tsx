'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollAnimations from '@/components/ScrollAnimations';

interface AustinCollaborationBannerProps {
  className?: string;
}

export default function AustinCollaborationBanner({ className = '' }: AustinCollaborationBannerProps) {
  return (
    <div className={`relative ${className}`}>
      <ScrollAnimations type="scale-in">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 items-center p-4 sm:p-6 lg:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[var(--ethereal-cyan)]/20 text-[var(--ethereal-cyan)] rounded-full text-sm font-medium">
                City of Austin Collaboration
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Transforming <span className="text-gradient">Austin</span> Infrastructure
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Our partnership with the City of Austin demonstrates real-world AI deployment 
                for infrastructure compliance and safety monitoring, achieving 99.2% detection 
                accuracy with 75% time savings.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--ethereal-cyan)]">99.2%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--ethereal-green)]">75%</div>
                  <div className="text-sm text-gray-400">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--ethereal-cyan)]">24/7</div>
                  <div className="text-sm text-gray-400">Monitoring</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => window.open('https://etherealdimension-tdot.netlify.app/', '_blank')}
                  size="lg"
                  className="bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] text-black font-semibold"
                >
                  View Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/austin-ai-demo.png"
                  alt="Austin TX DOT AI Barricade Detection System"
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    AI-powered barricade detection and compliance monitoring
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--ethereal-cyan)]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--ethereal-green)]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </ScrollAnimations>
    </div>
  );
}