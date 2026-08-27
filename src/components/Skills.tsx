import React from 'react';
import { skills } from '../data/site';
import { Reveal } from './Reveal';

export function Skills() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              What I do
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-bark/75">
              From the first split of a palm leaf to the styling of a finished
              collection — the craft and the business are both handmade.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-8">
            <ul className="grid sm:grid-cols-2">
              {skills.map((skill) =>
              <li
                key={skill}
                className="border-t border-sand py-5 font-display text-xl font-light text-ink sm:text-2xl">
                
                  {skill}
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>);

}