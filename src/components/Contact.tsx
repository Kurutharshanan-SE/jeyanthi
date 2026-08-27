import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon } from
'lucide-react';
import { maker } from '../data/site';
import { PinterestIcon, WhatsAppIcon } from './SocialIcons';
import { Reveal } from './Reveal';

const details = [
{ icon: MailIcon, label: 'Email', value: maker.email, href: `mailto:${maker.email}` },
{ icon: PhoneIcon, label: 'Phone', value: maker.phone, href: `tel:${maker.phone.replace(/\s/g, '')}` },
{ icon: MapPinIcon, label: 'Location', value: maker.location, href: null }];


const socials = [
{ label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
{ label: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
{ label: 'WhatsApp', icon: WhatsAppIcon, href: maker.whatsapp },
{ label: 'Pinterest', icon: PinterestIcon, href: 'https://pinterest.com' }];


export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-bark py-20 text-cream sm:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-7">
          <h2 className="max-w-xl font-display text-4xl font-light leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
            Let's create something
            <span className="block italic text-sand">beautiful together.</span>
          </h2>
          <p className="mt-7 max-w-md leading-relaxed text-cream/75">
            Interested in handmade products, custom creations, collaborations, or
            creative projects? I'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${maker.email}`}
              className="inline-flex items-center justify-center rounded-full bg-cream px-7 py-3.5 text-sm text-ink transition-colors duration-150 ease-soft hover:bg-sand">
              
              Send Me a Message
            </a>
            <a
              href={maker.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-7 py-3.5 text-sm text-cream transition-colors duration-150 ease-soft hover:bg-moss/85">
              
              <WhatsAppIcon size={17} />
              WhatsApp Me
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-5">
          <dl className="space-y-8">
            {details.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/25 text-sand">
                    <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-cream/55">
                      {detail.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-xl font-light">
                      {detail.href ?
                      <a
                        href={detail.href}
                        className="transition-colors duration-150 ease-soft hover:text-sand">
                        
                          {detail.value}
                        </a> :

                      detail.value
                      }
                    </dd>
                  </div>
                </div>);

            })}
          </dl>

          <ul className="mt-12 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors duration-150 ease-soft hover:border-cream/60 hover:bg-cream/10">
                    
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                </li>);

            })}
          </ul>
        </Reveal>
      </div>
    </section>);

}