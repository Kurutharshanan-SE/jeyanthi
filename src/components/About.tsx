import React from 'react';
import { aboutImage, maker, stats } from '../data/site';
import { WeaveRule } from './Ornaments';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-shell py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="overflow-hidden rounded-[40px] bg-sand">
              <img
                src={aboutImage}
                alt={`Portrait of ${maker.name} at her worktable`}
                width={928}
                height={1160}
                className="h-full w-full object-cover transition-transform duration-300 ease-soft hover:scale-[1.03]" />
              
            </div>
            <div className="texture-weave pointer-events-none absolute -bottom-6 -right-6 -z-10 hidden h-40 w-40 rounded-[32px] border border-clay/30 sm:block" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Meet the maker
            </h2>
            <WeaveRule className="mt-5 h-3 w-32 text-clay" />
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-8 text-lg leading-relaxed text-bark/85">
              {maker.name} is a craft entrepreneur dedicated to transforming
              natural materials into beautiful, functional, and meaningful
              handmade products.
            </p>
            <p className="mt-5 leading-relaxed text-bark/75">
              Her work combines traditional craftsmanship with contemporary
              design, creating pieces that carry a sense of culture, creativity,
              and individuality. Everything begins with the material — palmyrah
              leaf dried in the sun, split by hand, and read carefully before a
              single strand is woven.
            </p>
            <p className="mt-5 leading-relaxed text-bark/75">
              She works from a small studio in Jaffna alongside a group of women
              weavers, balancing commissioned projects with her own seasonal
              collections.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {stats.map((stat) =>
              <div key={stat.label} className="border-t border-clay/30 pt-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl font-light text-clay">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-sm leading-snug text-bark/70">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>);

}