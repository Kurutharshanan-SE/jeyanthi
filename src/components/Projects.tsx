import React from 'react';
import { projects } from '../data/site';
import { Reveal } from './Reveal';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Selected works
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-bark/70">
              Commissioned collections, cultural craft projects and material
              studies from the last few years.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 gap-8 md:columns-2 lg:columns-3">
          {projects.map((project, index) =>
          <li key={project.id} className="mb-8 break-inside-avoid">
              <Reveal delay={Math.min(index, 2) * 0.05}>
                <article className="group relative overflow-hidden rounded-[28px] bg-sand">
                  <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-300 ease-soft group-hover:scale-[1.05]" />
                
                  <div className="absolute inset-0 flex flex-col justify-end bg-ink/65 p-6 opacity-100 transition-opacity duration-200 ease-soft lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-sand">
                      {project.year} · {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-light text-cream">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/85">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </section>);

}