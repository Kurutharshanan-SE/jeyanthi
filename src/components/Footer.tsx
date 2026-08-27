import React from 'react';
import { FacebookIcon, InstagramIcon } from 'lucide-react';
import { maker, navLinks } from '../data/site';
import { PinterestIcon, WhatsAppIcon } from './SocialIcons';

const socials = [
{ label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
{ label: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
{ label: 'WhatsApp', icon: WhatsAppIcon, href: maker.whatsapp },
{ label: 'Pinterest', icon: PinterestIcon, href: 'https://pinterest.com' }];


export function Footer() {
  return (
    <footer className="bg-cream py-14">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 border-b border-sand pb-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-2xl text-ink">
              {maker.brand}
              <span className="text-gold">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-bark/70">
              {maker.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {navLinks.map((link) =>
              <li key={link.href}>
                  <a
                  href={link.href}
                  className="text-sm text-bark/75 transition-colors duration-150 ease-soft hover:text-ink">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <ul className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand text-bark transition-colors duration-150 ease-soft hover:bg-shell">
                    
                    <Icon size={17} strokeWidth={1.5} />
                  </a>
                </li>);

            })}
          </ul>
        </div>

        <p className="pt-6 text-xs text-bark/60">
          © 2026 {maker.name}. All Rights Reserved.
        </p>
      </div>
    </footer>);

}