import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { products } from '../data/site';
import { Reveal } from './Reveal';

export function Products() {
  return (
    <section id="products" className="scroll-mt-24 bg-shell py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-lg font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Handcrafted with purpose
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-bark/70">
              A small selection from the current collection. Each piece is woven
              by hand, so no two are exactly alike.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-12">
          {products.map((product, index) =>
          <Reveal
            as="li"
            key={product.id}
            delay={Math.min(index, 2) * 0.05}
            className={`group ${product.span}`}>
            
              <a href="#contact" className="block">
                <div className={`overflow-hidden rounded-[32px] bg-sand ${product.aspect}`}>
                  <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-soft group-hover:scale-[1.04]" />
                
                </div>
                <div className="mt-6 flex flex-col">
                  <h3 className="font-display text-2xl font-light text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-bark/75">
                    {product.description}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-moss">
                    {product.material}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-bark transition-colors duration-150 ease-soft group-hover:text-clay">
                    View Details
                    <ArrowRightIcon
                    size={15}
                    className="transition-transform duration-200 ease-soft group-hover:translate-x-1" />
                  
                  </span>
                </div>
              </a>
            </Reveal>
          )}
        </ul>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-bark/25 px-8 py-3.5 text-sm text-bark transition-colors duration-150 ease-soft hover:border-bark/50 hover:bg-cream">
              
              Explore All Creations
              <ArrowRightIcon
                size={16}
                className="transition-transform duration-200 ease-soft group-hover:translate-x-1" />
              
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}