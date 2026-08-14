'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Zap, Shield, Target, Cpu, Database, Cloud, ArrowRight, Play, ExternalLink, Download, Smartphone } from 'lucide-react';
import ScrollAnimations from '@/components/ScrollAnimations';
import Marquee from '@/components/Marquee';
import MorphingText from '@/components/MorphingText';
import { Globe } from '@/components/Globe';
import { BorderBeam } from '@/components/BorderBeam';
import Confetti from '@/components/Confetti'; // Import Confetti
import { BlurFade } from '@/components/BlurFade'; // Import BlurFade
import { TextAnimate } from '@/components/TextAnimate'; // Import TextAnimate
import { NumberTicker } from '@/components/NumberTicker'; // Import NumberTicker
import { AnimatedShinyText } from '@/components/AnimatedShinyText'; // Import AnimatedShinyText
import { SparklesText } from "@/components/SparklesText"; // Import SparklesText
import { useContactModal } from "@/components/ContactModalContext";

export default function Home() {
  const { isModalOpen, openModal, closeModal } = useContactModal();
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "", captcha: "" });
  const [captchaQuestion, setCaptchaQuestion] = useState({ question: "", answer: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
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
    openModal();
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (parseInt(contactForm.captcha) !== captchaQuestion.answer) {
      alert("Incorrect captcha. Please try again.");
      generateCaptcha();
      setContactForm({ ...contactForm, captcha: "" });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Submitting form...');
      
      // Send the form data to our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message
        }),
        cache: 'no-store'
      });
      
      console.log('Response status:', response.status);
      
      let responseData;
      
      try {
        // Try to parse the response as JSON regardless of status code
        responseData = await response.json();
        console.log('Response data:', responseData);
        
        // Check if response is OK
        if (!response.ok) {
          const errorMessage = responseData?.error || `Server error: ${response.status}`;
          console.error('API error response:', response.status, errorMessage);
          throw new Error(errorMessage);
        }
      } catch (e) {
        // If JSON parsing fails, handle the error
        console.error('Error processing response:', e);
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        throw new Error('Invalid response from server');
      }
      
      
      // Show success message
      setShowSuccessMessage(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      
      closeModal();
      setContactForm({ name: "", email: "", message: "", captcha: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      alert(error instanceof Error ? error.message : "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    generateCaptcha();
    // Set loaded state after component mounts to prevent hydration issues
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.3s ease-in-out' }}>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <ScrollAnimations type="fade-in">
            <div className="floating-animation mb-8 relative flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden pulse-glow">
              <Image
                src="/assets/EtherealDimensionsSplash.gif"
                alt="Ethereal Dimension Signature Animation"
                width={256}
                height={256}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </ScrollAnimations>
          <BlurFade inView delay={0.2} viewThreshold={0.7}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight hero-text">
              Frontier AI Solutions for{' '}
              <MorphingText
                texts={
                  process.env.NEXT_PUBLIC_EXTENDED_HERO_TEXT === 'true'
                    ? [
                        "the Built Environment",
                        "Smart Cities",
                        "Energy Infrastructure",
                        "Spatial Intelligence",
                        "Transportation Systems",
                        "Industrial Automation",
                        "Environmental Monitoring",
                        "Healthcare Infrastructure",
                        "Retail Spaces",
                        "Educational Facilities",
                        "Public Safety Systems",
                        "Water Management",
                        "Telecommunications",
                        "Renewable Energy"
                      ]
                    : [
                        "the Built Environment",
                        "Smart Cities",
                        "Energy Infrastructure",
                        "Spatial Intelligence"
                      ]
                }
                className="inline-block text-gradient"
                interval={2000}
              />
            </h1>
          </BlurFade>
          <ScrollAnimations type="fade-in">
            <div className="text-content">
              <p className="text-xl md:text-2xl text-gray-300 mb-16 mx-auto px-4">
                We leverage frontier technologies like Artificial Intelligence (AI), Machine Learning, Internet of Things (IoT) and Augmented Reality to innovate within the built environment, transforming smart cities, energy infrastructure, and spatial intelligence.
              </p>
            </div>
          </ScrollAnimations>
          <ScrollAnimations type="fade-in">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] font-semibold px-8 py-4 text-lg btn-glow"
                onClick={() => scrollToSection('austin')}
              >
                See Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollAnimations>
          <div className="mt-16 w-full max-w-lg mx-auto aspect-square hidden">
            {/* The original Globe component was here, now moved to the top animated logo */}
          </div>
        </div>
        
        {/* Magic UI-style Globe positioned at the very end of hero section, above marquee */}
        <div className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[80%] max-w-6xl z-10">
          <div className="relative w-full aspect-square overflow-hidden">
            <div className="absolute inset-0" style={{ clipPath: 'inset(0 0 50% 0)' }}>
              <Globe 
                className="w-full h-full" 
                darkTheme={true} 
                customGlowColor={[0, 212/255, 255/255]}
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-10 floating-animation">
          <div className="w-4 h-4 bg-[var(--ethereal-cyan)] rounded-full pulse-glow"></div>
        </div>
        <div className="absolute top-40 right-20 floating-animation" style={{animationDelay: '2s'}}>
          <div className="w-6 h-6 bg-[var(--ethereal-green)] rounded-full pulse-glow"></div>
        </div>
        <div className="absolute bottom-40 left-20 floating-animation" style={{animationDelay: '4s'}}>
          <div className="w-3 h-3 bg-[var(--ethereal-cyan)] rounded-full pulse-glow"></div>
        </div>
      </section>

      {/* New Marquee Section */}
      <section id="about" className="scroll-mt-24 py-12 bg-black">
        <Marquee pauseOnHover className="[--duration:20s] [--gap:3rem]">
          <div className="flex gap-12 min-w-max">
            <Badge variant="secondary" className="text-xl px-6 py-2">Artificial Intelligence</Badge>
            <Badge variant="secondary" className="text-xl px-6 py-2">Machine Learning</Badge>
            <Badge variant="secondary" className="text-xl px-6 py-2">Augmented Reality</Badge>
            <Badge variant="secondary" className="text-xl px-6 py-2">IoT</Badge>
            <Badge variant="secondary" className="text-xl px-6 py-2">Big Data</Badge>
            <Badge variant="secondary" className="text-xl px-6 py-2">Computer Vision</Badge>
          </div>
        </Marquee>
      </section>


      {/* Austin Collaboration Section */}
      <section id="projects" className="scroll-mt-24 py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div id="austin" className="scroll-mt-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimations type="fade-in">
          <div className="text-center mb-16">
            <BlurFade inView delay={0.2} viewThreshold={0.7}>
              <h2 className="text-4xl md:text-6xl font-bold text-white hero-text">Transforming <span className="text-gradient">Austin</span> with AI</h2>
            </BlurFade>
            <BlurFade inView delay={0.3} viewThreshold={0.7}>
              <div className="text-content">
                <p className="text-xl text-gray-300 mx-auto">Our collaboration with the City of Austin demonstrates real-world AI deployment for infrastructure compliance and safety monitoring.</p>
              </div>
            </BlurFade>
          </div>
        </ScrollAnimations>

          {/* Project Banner */}
          <ScrollAnimations type="scale-in">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/detected-barricades-landing.gif"
                  alt="Austin Collaboration Project"
                  className="w-full min-h-[200px] sm:min-h-[300px] object-cover rounded-2xl shadow-2xl"
                />
                <BorderBeam size={250} duration={12} delay={9} />
              </div>
          </ScrollAnimations>


        <section className="relative z-10 py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                <Image alt="Austin TX DOT AI Barricade Detection System" loading="lazy" width={600} height={400} decoding="async" data-nimg="1" className="w-full rounded-xl shadow-2xl object-cover" src="/assets/austin-ai-demo.png"/>
                {/* <div className="absolute top-8 left-8 text-white bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">AUSTIN</h3>
                  <h4 className="text-xl md:text-2xl font-bold">COLLABORATION</h4>
                  <h4 className="text-xl md:text-2xl font-bold">PROJECT</h4>
                </div> */}
              </div>

              
              <div>
                <Badge className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 mb-6">Live Deployment</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white card-text">AI-Powered Barricade Detection</h3>
                <div className="text-content">
                  <p className="text-gray-300 mb-6">We partnered with Austin DoT to develop a computer vision system that analyzes barrier shape, placement, and compliance from street footage. Our lightweight dashboard helps city staff review, manage, and export findings.</p>
                </div>
                <div className="inline-block" tabIndex={0}>
                  {/* <Button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-[#00d4ff] hover:bg-[#00ff88] text-black font-semibold px-6 py-3">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Live Demo
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        
          <div className="grid md:grid-cols-2 gap-12 mb-16 px-4">
            <ScrollAnimations type="slide-left">
              <Card className="tech-card bg-white/5 border-white/10 backdrop-blur-md">
                <CardContent className="p-8">
                  <BlurFade inView delay={0.2} viewThreshold={0.5}>
                    <div className="flex items-center mb-4">
                      <Eye className="h-8 w-8 text-[var(--ethereal-cyan)] mr-3" />
                      <h3 className="text-2xl font-bold text-white">Real-time Detection</h3>
                    </div>
                  </BlurFade>
                  <p className="text-gray-300 mb-6">
                    Artificial Intelligence (AI) identifies and classifies barricades in live video feeds, enabling real-time monitoring and compliance analysis.
                  </p>
                  <Image 
                    src="/assets/barricade-demo.gif" 
                    alt="Barricade Detection Demo" 
                    width={300}
                    height={600}
                    className="w-full rounded-lg shadow-lg"
                  />
                </CardContent>
              </Card>
            </ScrollAnimations>

            <ScrollAnimations type="slide-right">
              <Card className="tech-card bg-white/5 border-white/10 backdrop-blur-md">
                <CardContent className="p-8">
                  <BlurFade inView delay={0.2} viewThreshold={0.5}>
                    <div className="flex items-center mb-4">
                      <Shield className="h-8 w-8 text-[var(--ethereal-green)] mr-3" />
                      <h3 className="text-2xl font-bold text-white">Compliance Analysis</h3>
                    </div>
                  </BlurFade>
                  <p className="text-gray-300 mb-6">
                    Automated assessment of placement and safety compliance
                  </p>
                  <Image 
                    src="/assets/detected-barricades-final-2.gif" 
                    alt="Detected Barricades"
                    width={300}
                    height={600}
                    className="w-full rounded-lg shadow-lg"
                  />
                </CardContent>
              </Card>
            </ScrollAnimations>
          </div>

          {/* Metrics */}
          <ScrollAnimations type="fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="tech-card bg-white/5 border-white/10 backdrop-blur-md p-8 rounded-xl">
                <div className="text-4xl font-bold text-[var(--ethereal-cyan)] mb-2">
                  <NumberTicker value={99} />.2%
                </div>
                <div className="text-white text-lg">Detection Accuracy</div>
              </div>
              <div className="tech-card bg-white/5 border-white/10 backdrop-blur-md p-8 rounded-xl">
                <div className="text-4xl font-bold text-[var(--ethereal-green)] mb-2">
                  <NumberTicker value={75} />%
                </div>
                <div className="text-white text-lg">Time Savings</div>
              </div>
              <div className="tech-card bg-white/5 border-white/10 backdrop-blur-md p-8 rounded-xl">
                <div className="text-4xl font-bold text-[var(--ethereal-cyan)] mb-2">24/7</div>
                <div className="text-white text-lg">Monitoring</div>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Hylios Section */}
      <section id="hylios" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimations type="fade-in">
              <div>
                <Badge className="bg-[var(--ethereal-green)]/20 text-[var(--ethereal-green)] border-[var(--ethereal-green)]/30 mb-4">
                  Available on App Store
                </Badge>
                <BlurFade inView delay={0.2} viewThreshold={0.7}>
                  <h2 className="text-4xl md:text-6xl font-bold text-white hero-text">
                    <SparklesText text="Hylios: Magical Space Intelligence" className="text-gradient" />
                  </h2>
                </BlurFade>
          <div className="text-content">
                <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
                    Revolutionary AR + ML room scanner using Apple's newest technologies to 
                    provide spatial insights and yield precise 3D models. Transform how you 
                    visualize and plan spaces with cutting-edge augmented reality.
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--ethereal-cyan)] rounded-full mr-4"></div>
                    <span className="text-gray-300">Real-time spatial scanning and analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--ethereal-cyan)] rounded-full mr-4"></div>
                    <span className="text-gray-300">Precise 3D model generation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--ethereal-cyan)] rounded-full mr-4"></div>
                    <span className="text-gray-300">AR-enhanced visualization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--ethereal-cyan)] rounded-full mr-4"></div>
                    <span className="text-gray-300">Professional-grade accuracy</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] font-semibold px-8 py-4 text-lg btn-glow relative"
                  onClick={() => window.open('https://apps.apple.com/us/app/hylios/id6474466548', '_blank')}
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download on App Store
                  <BorderBeam size={100} duration={5} delay={2} />
                </Button>
              </div>
            </ScrollAnimations>
             <ScrollAnimations type="fade-in">
              <div className="grid grid-cols-1 gap-6">
                <div className="tech-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    <TextAnimate>Real-time room scanning</TextAnimate>
                  </h4>
                    <Image
                      alt="Hylios Real-time Scanning"
                      loading="lazy"
                      width={600}
                      height={400}
                      decoding="async"
                      data-nimg="1"
                      className="w-full rounded-lg shadow-lg"
                      src="/assets/HyliosScan.gif"
                    />
                </div>
                <div className="tech-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    <TextAnimate>3D model generation</TextAnimate>
                  </h4>
                    <Image
                      alt="3D Scan Result Demo"
                      loading="lazy"
                      width={600}
                      height={400}
                      decoding="async"
                      data-nimg="1"
                      className="w-full rounded-lg shadow-lg"
                      src="/assets/3d-scan-result.gif"
                    />
                </div>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimations type="fade-in">
            <BlurFade inView delay={0.2} viewThreshold={0.7}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to <span className="text-gradient">Transform</span> Your Future?
              </h2>
            </BlurFade>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the frontier of AI innovation. Let's architect the future of your industry together.
            </p>
            <Button
              size="lg"
              className="bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] font-semibold px-12 py-6 text-xl btn-glow relative"
              onClick={openModal}
            >
              Start Your Journey <ArrowRight className="ml-2 h-6 w-6" />
              <BorderBeam size={150} duration={6} delay={3} />
            </Button>
          </ScrollAnimations>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-white/10 max-w-md w-full my-4 sm:my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              <TextAnimate>Contact Us</TextAnimate>
            </h3>
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
                  onClick={closeModal}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[var(--ethereal-cyan)] hover:bg-[var(--ethereal-green)] text-black font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <Confetti fire={showSuccessMessage} /> {/* Add Confetti component */}
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:bottom-8 sm:w-auto bg-[var(--ethereal-green)]/90 text-black p-4 rounded-lg shadow-lg z-[999] flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-5">
          <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
          <span className="font-semibold text-sm sm:text-base">Message Sent Successfully!</span>
        </div>
      )}
      {/* Footer */}
      <footer className="bg-black py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 overflow-visible p-0.5">
                <Image
                  src="/assets/ethereal-logo.png"
                  alt="Ethereal Dimension"
                  width={40}
                  height={40}
                  className="object-contain object-center [mix-blend-mode:lighten]"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Ethereal Dimension</span>
            </Link>
            <div className="text-gray-400 text-sm sm:text-base px-4">
              © 2025 Ethereal Dimension. Transcending Built Environment limitations with Technology.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
