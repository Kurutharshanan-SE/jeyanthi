import React from 'react';
import { journey } from '../data/site';
import { PalmFrond } from './Ornaments';
import { Reveal } from './Reveal';

export function Journey() {
  return (
    <section
      id="journey"
      className="relative scroll-mt-24 overflow-hidden bg-shell py-20 sm:py-28">
      
      <div className="pointer-events-none absolute -right-16 bottom-0 hidden text-clay/25 lg:block">
        <PalmFrond className="h-[24rem] w-48 rotate-[18deg]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-lg font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
            My journey
          </h2>
        </Reveal>

        <ol className="mt-14 border-l border-clay/30 pl-8 sm:pl-12">
          {journey.map((step, index) =>
          <Reveal
            as="li"
            key={step.year}
            delay={Math.min(index, 3) * 0.05}
            className="relative pb-14 last:pb-0">
            
              <span
              aria-hidden="true"
              className="absolute -left-[2.3rem] top-2 h-2.5 w-2.5 rounded-full bg-moss sm:-left-[3.3rem]" />
            
              <div className="grid gap-3 sm:grid-cols-12 sm:gap-8">
                <p className="font-display text-3xl font-light text-clay sm:col-span-3 sm:text-4xl">
                  {step.year}
                </p>
                <div className="sm:col-span-9">
                  <h3 className="font-display text-2xl font-light text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-bark/75">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </ol>
      </div>
    </section>);

}