import React from 'react';

interface OrnamentProps {
  className?: string;
}

/** A single stylised palmyrah frond, used as a light decorative accent. */
export function PalmFrond({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 120 220"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}>
      
      <path
        d="M60 218V22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round" />
      
      {Array.from({ length: 11 }).map((_, i) => {
        const y = 30 + i * 16;
        const reach = 46 - i * 2.4;
        return (
          <g key={i}>
            <path
              d={`M60 ${y} C ${60 - reach * 0.5} ${y - 10}, ${60 - reach} ${y - 4}, ${60 - reach} ${y + 12}`}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round" />
            
            <path
              d={`M60 ${y} C ${60 + reach * 0.5} ${y - 10}, ${60 + reach} ${y - 4}, ${60 + reach} ${y + 12}`}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round" />
            
          </g>);

      })}
    </svg>);

}

/** A woven-pattern hairline used to separate major sections. */
export function WeaveRule({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 240 12"
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={className}>
      
      <path
        d="M0 6 C 10 0, 20 12, 30 6 S 50 0, 60 6 S 80 12, 90 6 S 110 0, 120 6 S 140 12, 150 6 S 170 0, 180 6 S 200 12, 210 6 S 230 0, 240 6"
        stroke="currentColor"
        strokeWidth="1" />
      
    </svg>);

}

/** A soft organic outline used behind imagery. */
export function OrganicRing({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}>
      
      <path
        d="M200 12c74 0 128 34 160 90 33 57 33 129-8 186-40 56-108 88-176 84-68-5-124-46-152-108-27-62-15-138 34-186C104 34 149 12 200 12Z"
        stroke="currentColor"
        strokeWidth="1" />
      
    </svg>);

}