import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { maker, navLinks } from '../data/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ease-soft ${
      scrolled || open ?
      'bg-cream/95 backdrop-blur-md border-b border-sand/70' :
      'bg-transparent border-b border-transparent'}`
      }>
      
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 sm:px-8">
        
        <a
          href="#home"
          className="font-display text-xl tracking-tight text-ink"
          onClick={() => setOpen(false)}>
          
          {maker.brand}
          <span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              className="relative text-sm text-bark/80 transition-colors duration-150 ease-soft hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-200 after:ease-soft hover:after:w-full">
              
                {link.label}
              </a>
            </li>
          )}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-bark px-5 py-2.5 text-sm text-cream transition-colors duration-150 ease-soft hover:bg-ink">
              
              Let's Work Together
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand text-bark transition-colors duration-150 ease-soft hover:bg-shell lg:hidden">
          
          {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-sand/70 bg-cream lg:hidden">
          
            <ul className="mx-auto flex max-w-[1240px] flex-col px-5 py-4 sm:px-8">
              {navLinks.map((link) =>
            <li key={link.href}>
                  <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-sand/60 py-4 font-display text-2xl text-ink">
                
                    {link.label}
                  </a>
                </li>
            )}
              <li className="pt-5">
                <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-bark px-6 py-3.5 text-center text-sm text-cream">
                
                  Let's Work Together
                </a>
              </li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}