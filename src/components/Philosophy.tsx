import React from 'react';
import { HeartHandshakeIcon, LeafIcon, SparklesIcon, WavesIcon } from 'lucide-react';
import { philosophies } from '../data/site';
import { Reveal } from './Reveal';

const icons = {
  leaf: LeafIcon,
  loom: WavesIcon,
  spark: SparklesIcon,
  purpose: HeartHandshakeIcon
};

export function Philosophy() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              My craft
              <span className="block italic text-clay">philosophy</span>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-bark/75">
              Four ideas guide every piece that leaves the studio — from the way
              a leaf is chosen to the way a finished object is meant to be used.
            </p>
          </Reveal>

          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {philosophies.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <Reveal as="li" key={item.title} delay={index * 0.05}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-clay/35 text-moss">
                    <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-light text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-bark/75">
                    {item.description}
                  </p>
                </Reveal>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}