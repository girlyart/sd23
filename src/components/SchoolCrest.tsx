import React from 'react';

interface SchoolCrestProps {
  className?: string;
  size?: number;
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({ className = 'w-10 h-10', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sekolah Senior High School Crest"
    >
      {/* Laurel Wreath Left */}
      <path
        d="M26 30 C20 40, 20 62, 34 76 C32 70, 30 62, 32 50 C28 42, 28 35, 26 30 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M20 44 C15 48, 18 56, 26 58 C24 52, 22 48, 20 44 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M23 60 C18 66, 22 74, 30 74 C28 68, 26 64, 23 60 Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Laurel Wreath Right */}
      <path
        d="M74 30 C80 40, 80 62, 66 76 C68 70, 70 62, 68 50 C72 42, 72 35, 74 30 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M80 44 C85 48, 82 56, 74 58 C76 52, 78 48, 80 44 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M77 60 C82 66, 78 74, 70 74 C72 68, 74 64, 77 60 Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Main Shield Outline */}
      <path
        d="M32 20 L68 20 C68 20, 70 54, 50 78 C30 54, 32 20, 32 20 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Shield Cross Divider */}
      <path d="M50 20 L50 76" stroke="currentColor" strokeWidth="2.5" strokeDasharray="1 0" />
      <path d="M32 44 L68 44" stroke="currentColor" strokeWidth="2.5" />

      {/* Top Left Quadrant: Open Book */}
      <path
        d="M38 31 C41 29, 46 29, 48 31 L48 40 C46 38, 41 38, 38 40 Z"
        fill="currentColor"
      />

      {/* Top Right Quadrant: Flaming Torch / Star */}
      <circle cx="59" cy="32" r="3" fill="currentColor" />
      <path d="M59 36 L57 41 L61 41 Z" fill="currentColor" />

      {/* Bottom Left Quadrant: Atom / Science Rings */}
      <ellipse cx="41" cy="56" rx="5" ry="2.2" stroke="currentColor" strokeWidth="1.2" transform="rotate(-30 41 56)" />
      <ellipse cx="41" cy="56" rx="5" ry="2.2" stroke="currentColor" strokeWidth="1.2" transform="rotate(30 41 56)" />
      <circle cx="41" cy="56" r="1.5" fill="currentColor" />

      {/* Bottom Right Quadrant: Quill / Pen */}
      <path d="M57 63 L63 50 L61 48 L55 61 L54 64 Z" fill="currentColor" />

      {/* Bottom Ribbon / Scroll */}
      <path
        d="M26 84 C40 80, 60 80, 74 84 L71 89 C58 86, 42 86, 29 89 Z"
        fill="currentColor"
      />
    </svg>
  );
};
