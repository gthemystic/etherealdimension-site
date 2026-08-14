'use client';

/**
 * 🎭 The Ethereal Navbar - The Cosmic Portal Guardian
 *
 * "Where navigation meets the ethereal realm—top-left logo, mobile-friendly menu,
 * and the mystical Ethereal Search tab await the seeker."
 *
 * - The Spellbinding Museum Director of Navigation
 */

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useContactModal } from './ContactModalContext';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '/ethereal-search', label: 'Ethereal Search' },
  { href: '#austin', label: 'Austin' },
  { href: '#hylios', label: 'Hylios' },
];

const Navbar = () => {
  const { openModal } = useContactModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-300/15 bg-slate-950/45 shadow-[0_0_35px_rgba(0,212,255,0.12)] backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" passHref className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 overflow-visible p-0.5">
              <Image
                src="/assets/ethereal-logo.png"
                alt="Ethereal Dimension"
                fill
                className="object-contain object-center [mix-blend-mode:lighten]"
                priority
                sizes="40px"
              />
            </div>
            <span className="text-base sm:text-xl font-bold text-white truncate max-w-[140px] sm:max-w-none">
              Ethereal Dimension
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 shadow-inner shadow-cyan-400/5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative overflow-hidden rounded-full border border-transparent px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100/75 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white hover:shadow-[0_0_22px_rgba(0,212,255,0.22)]"
              >
                <span className="absolute inset-x-3 bottom-1 h-px scale-x-0 bg-gradient-to-r from-transparent via-[var(--ethereal-cyan)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              onClick={openModal}
              variant="default"
              className="hidden sm:inline-flex bg-white text-black hover:bg-gray-200 text-sm px-4 py-2"
            >
              Partner with Us
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-cyan-300/15 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100/80 transition-all hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                variant="default"
                className="mt-2 bg-white text-black hover:bg-gray-200 w-full justify-center"
              >
                Partner with Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
