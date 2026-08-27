import React from 'react';
import { testimonials } from '../data/site';
import { Reveal } from './Reveal';

export function Testimonials() {
  return (
    <section className="bg-shell py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
            Kind words from customers
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {testimonials.map((item, index) =>
          <Reveal
            as="li"
            key={item.name}
            delay={Math.min(index, 2) * 0.05}
            className="flex h-full flex-col">
            
              <blockquote className="font-display text-xl font-light leading-relaxed text-ink">
                “{item.quote}”
              </blockquote>
              <div className="mt-auto flex items-center gap-3 pt-8">
                <img
                src={item.avatar}
                alt=""
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover" />
              
                <div>
                  <p className="text-sm text-ink">{item.name}</p>
                  <p className="text-xs text-bark/65">{item.location}</p>
                </div>
              </div>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}