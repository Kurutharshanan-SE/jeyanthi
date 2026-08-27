import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { heroImage, maker } from '../data/site';
import { OrganicRing, PalmFrond } from './Ornaments';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute -left-24 top-24 hidden text-clay/25 lg:block">
        <PalmFrond className="h-[26rem] w-52 -rotate-12" />
      </div>

      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:pb-28">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-label text-moss">
              {maker.role}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-[2.75rem] font-light leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
              Crafting stories through
              <span className="block italic text-clay">nature &amp; handmade art</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-md text-base leading-relaxed text-bark/80 sm:text-lg">
              Creating meaningful handmade products inspired by nature, culture,
              and traditional craftsmanship — woven by hand in Jaffna, Sri Lanka.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-bark px-7 py-3.5 text-sm text-cream transition-colors duration-150 ease-soft hover:bg-ink">
                
                Explore My Work
                <ArrowRightIcon
                  size={16}
                  className="transition-transform duration-200 ease-soft group-hover:translate-x-1" />
                
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-bark/25 px-7 py-3.5 text-sm text-bark transition-colors duration-150 ease-soft hover:border-bark/50 hover:bg-shell">
                
                Get In Touch
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.1} className="relative mx-auto max-w-md lg:max-w-none">
            <OrganicRing className="pointer-events-none absolute -right-8 -top-8 h-[105%] w-[105%] text-clay/30" />
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[40px] bg-shell">
              <img
                src={heroImage}
                alt={`${maker.name} weaving a palmyrah basket in her workshop`}
                width={928}
                height={1160}
                className="h-full w-full object-cover transition-transform duration-300 ease-soft hover:scale-[1.03]" />
              
            </div>
            <div className="absolute -bottom-6 left-0 hidden rounded-2xl border border-sand bg-cream px-5 py-4 shadow-[0_18px_40px_-28px_rgba(44,35,27,0.5)] sm:block">
              <p className="font-display text-2xl text-ink">Jaffna</p>
              <p className="mt-0.5 text-xs text-bark/70">Studio &amp; workshop</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}