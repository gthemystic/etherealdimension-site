'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { Box, ArrowRight } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '', captcha: '' });
  const [captchaQuestion, setCaptchaQuestion] = useState({ question: '', answer: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ question: `${num1} + ${num2} = ?`, answer: num1 + num2 });
  };

  const openContactModal = () => {
    generateCaptcha();
    setShowContactModal(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(contactForm.captcha) !== captchaQuestion.answer) {
      alert('Incorrect captcha. Please try again.');
      generateCaptcha();
      setContactForm({ ...contactForm, captcha: '' });
      return;
    }

    setIsSubmitting(true);
    
    const mailtoLink = `mailto:info@etherealdimension.io?subject=Contact from ${contactForm.name}&body=Name: ${contactForm.name}%0AEmail: ${contactForm.email}%0A%0AMessage:%0A${contactForm.message}`;
    
    window.location.href = mailtoLink;
    
    setShowContactModal(false);
    setContactForm({ name: '', email: '', message: '', captcha: '' });
    setIsSubmitting(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Box className="h-8 w-8 text-[var(--ethereal-cyan)]" />
              <span className="text-xl font-bold text-white">EthD</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-[var(--ethereal-cyan)] transition-colors">Home</a>
              <a href="#austin" className="text-white hover:text-[var(--ethereal-cyan)] transition-colors">Austin Project</a>
              <a href="#hylios" className="text-white hover:text-[var(--ethereal-cyan)] transition-colors">Hylios</a>
              <a href="#contact" className="text-white hover:text-[var(--ethereal-cyan)] transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                className="hidden sm:block bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] text-black font-semibold"
                onClick={openContactModal}
              >
                Partner With Us
              </Button>
              <button 
                className="md:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-slate-900/80 backdrop-blur-sm border-t border-white/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block text-white hover:text-[var(--ethereal-cyan)] px-3 py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#austin" className="block text-white hover:text-[var(--ethereal-cyan)] px-3 py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Austin Project</a>
                <a href="#hylios" className="block text-white hover:text-[var(--ethereal-cyan)] px-3 py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Hylios</a>
                <a href="#contact" className="block text-white hover:text-[var(--ethereal-cyan)] px-3 py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                <Button 
                  className="w-full mt-2 bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] text-black font-semibold"
                  onClick={() => { openContactModal(); setIsMobileMenuOpen(false); }}
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      {children}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the frontier of AI innovation. Let&apos;s architect the future of your industry together.
            </p>
            <Button
              size="lg"
              className="bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] font-semibold px-12 py-6 text-xl btn-glow"
              onClick={openContactModal}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-white/10 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <form onSubmit={handleContactSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[var(--ethereal-cyan)] focus:outline-none"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[var(--ethereal-cyan)] focus:outline-none"
                    placeholder="your@email.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[var(--ethereal-cyan)] focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Security Check: {captchaQuestion.question}</label>
                  <input
                    type="number"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[var(--ethereal-cyan)] focus:outline-none"
                    placeholder="Enter the answer"
                    value={contactForm.captcha}
                    onChange={(e) => setContactForm({...contactForm, captcha: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                  onClick={() => setShowContactModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] text-black font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Email'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Box className="h-8 w-8 text-[var(--ethereal-cyan)]" />
              <span className="text-xl font-bold text-white">Ethereal Dimension</span>
            </div>
            <div className="text-gray-400">
              © 2025 Ethereal Dimension. Transcending reality through AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}