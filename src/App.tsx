import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Products } from './components/Products';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppIcon } from './components/SocialIcons';
import { maker } from './data/site';

export function App() {
  return (
    <div className="min-h-screen w-full bg-cream font-sans text-ink">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-bark focus:px-5 focus:py-2.5 focus:text-sm focus:text-cream">
        
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Philosophy />
        <Products />
        <Projects />
        <Journey />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <a
        href={maker.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Message me on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-moss text-cream shadow-[0_14px_30px_-12px_rgba(44,35,27,0.6)] transition-transform duration-150 ease-soft active:scale-95 lg:hidden">
        
        <WhatsAppIcon size={26} />
      </a>
    </div>);

}