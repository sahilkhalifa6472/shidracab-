import React from 'react';

interface CarIllustrationProps {
  type: 'toyota-rumion' | 'sedan-dzire' | 'premium-innova' | 'hatchback-mini' | 'hero-taxi';
  className?: string;
}

export const CarIllustration: React.FC<CarIllustrationProps> = ({ type, className = 'w-full h-auto' }) => {
  // TOYOTA RUMION (7-Seater MPV in Uber/Ola Monochrome Black & White Style)
  if (type === 'toyota-rumion' || type === 'hero-taxi') {
    return (
      <svg viewBox="0 0 540 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <radialGradient id="uberBwShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="uberWhiteBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#F8FAFC" />
            <stop offset="85%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="uberGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#09090B" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#18181B" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="uberAlloy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27272A" />
            <stop offset="50%" stopColor="#09090B" />
            <stop offset="100%" stopColor="#3F3F46" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="270" cy="198" rx="245" ry="14" fill="url(#uberBwShadow)" />

        {/* Roof Rails for Toyota Rumion */}
        <path d="M 125 44 L 380 44" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
        <path d="M 140 44 L 140 48 M 250 44 L 250 48 M 360 44 L 360 48" stroke="#18181B" strokeWidth="2.5" />

        {/* Main Body (Uber Pure White / Silver Pearl) */}
        <path
          d="M 28 155 
             C 28 155, 34 132, 58 126 
             L 95 120 
             L 125 54 
             C 140 46, 175 44, 215 44 
             L 370 44 
             C 395 44, 420 54, 442 80 
             L 485 98 
             C 505 106, 520 125, 520 152 
             L 520 168 
             C 520 174, 514 178, 508 178 
             L 456 178 
             C 456 152, 432 134, 404 134 
             C 376 134, 352 152, 352 178 
             L 194 178 
             C 194 152, 170 134, 142 134 
             C 114 134, 90 152, 90 178 
             L 42 178 
             C 34 178, 28 172, 28 164 Z"
          fill="url(#uberWhiteBody)"
          stroke="#09090B"
          strokeWidth="2.5"
        />

        {/* Bottom Black Sill Moldings */}
        <path d="M 28 158 L 50 158 L 50 176 L 34 176 Z" fill="#09090B" />
        <path d="M 495 158 L 520 158 L 516 176 L 495 176 Z" fill="#09090B" />

        {/* Black Feature Accent Strip (Uber Style) */}
        <path d="M 58 126 L 485 106 L 486 112 L 60 132 Z" fill="#09090B" />

        {/* Toyota Front Grille (Black Mesh & Chrome Ring) */}
        <path d="M 495 116 L 518 122 L 518 144 L 495 142 Z" fill="#09090B" />
        <ellipse cx="508" cy="128" rx="5" ry="3.5" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
        <ellipse cx="508" cy="128" rx="2.5" ry="3" fill="none" stroke="#FFFFFF" strokeWidth="1" />

        {/* 3-Row Windows (Toyota Rumion 7-Seater Floating Roof) */}
        <path d="M 370 50 L 436 84 L 370 84 Z" fill="url(#uberGlass)" stroke="#09090B" strokeWidth="1.5" />
        <path d="M 248 50 L 364 50 L 364 84 L 248 84 Z" fill="url(#uberGlass)" stroke="#09090B" strokeWidth="1.5" />
        <path d="M 134 58 C 145 52, 170 50, 242 50 L 242 84 L 118 84 Z" fill="url(#uberGlass)" stroke="#09090B" strokeWidth="1.5" />

        {/* Window Pillars (Blacked Out) */}
        <rect x="242" y="48" width="6" height="38" fill="#09090B" />
        <rect x="364" y="48" width="6" height="38" fill="#09090B" />

        {/* Headlight (Crisp Clear White) */}
        <path d="M 480 102 C 502 108, 514 116, 516 122 L 484 122 Z" fill="#FFFFFF" stroke="#09090B" strokeWidth="1.5" />
        <circle cx="500" cy="114" r="4.5" fill="#CBD5E1" />

        {/* Taillamp */}
        <path d="M 32 136 C 30 144, 30 152, 40 152 L 48 140 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />

        {/* Door Handles */}
        <rect x="220" y="96" width="16" height="3.5" rx="1.5" fill="#09090B" />
        <rect x="330" y="96" width="16" height="3.5" rx="1.5" fill="#09090B" />

        {/* Rear Wheel (Uber Black Precision Alloy) */}
        <g id="rear-wheel">
          <circle cx="142" cy="178" r="32" fill="#09090B" stroke="#27272A" strokeWidth="3" />
          <circle cx="142" cy="178" r="22" fill="url(#uberAlloy)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = 142 + Math.cos(rad) * 20;
            const y2 = 178 + Math.sin(rad) * 20;
            return <line key={angle} x1="142" y1="178" x2={x2} y2={y2} stroke="#FFFFFF" strokeWidth="2.5" />;
          })}
          <circle cx="142" cy="178" r="6" fill="#09090B" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>

        {/* Front Wheel */}
        <g id="front-wheel">
          <circle cx="404" cy="178" r="32" fill="#09090B" stroke="#27272A" strokeWidth="3" />
          <circle cx="404" cy="178" r="22" fill="url(#uberAlloy)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = 404 + Math.cos(rad) * 20;
            const y2 = 178 + Math.sin(rad) * 20;
            return <line key={angle} x1="404" y1="178" x2={x2} y2={y2} stroke="#FFFFFF" strokeWidth="2.5" />;
          })}
          <circle cx="404" cy="178" r="6" fill="#09090B" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>

        {/* Model Tag */}
        <rect x="185" y="105" width="84" height="14" rx="3" fill="#09090B" />
        <text x="227" y="115" fill="#FFFFFF" fontSize="7.5" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.8">
          TOYOTA RUMION
        </text>
      </svg>
    );
  }

  // SEDAN (Dzire / Etios) in Uber Premier B&W Style
  if (type === 'sedan-dzire') {
    return (
      <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="200" cy="146" rx="180" ry="10" fill="#000000" fillOpacity="0.25" />
        {/* Body */}
        <path
          d="M 25 110 C 25 96, 40 90, 60 88 L 105 84 L 148 44 C 165 40, 205 40, 240 40 L 285 44 C 300 56, 318 70, 335 84 L 372 92 C 385 96, 392 106, 392 116 L 392 124 C 392 128, 386 130, 380 130 L 345 130 C 345 112, 328 98, 310 98 C 292 98, 275 112, 275 130 L 145 130 C 145 112, 128 98, 110 98 C 92 98, 75 112, 75 130 L 30 130 C 26 130, 25 126, 25 120 Z"
          fill="#FFFFFF"
          stroke="#09090B"
          strokeWidth="2.5"
        />
        <path d="M 60 92 L 370 94 L 370 98 L 60 96 Z" fill="#09090B" />
        {/* Windows */}
        <path d="M 152 48 L 208 46 L 208 80 L 112 80 Z" fill="#09090B" />
        <path d="M 215 46 L 275 48 L 312 80 L 215 80 Z" fill="#09090B" />
        {/* Wheels */}
        <circle cx="110" cy="130" r="24" fill="#09090B" stroke="#27272A" strokeWidth="2" />
        <circle cx="110" cy="130" r="14" fill="#E2E8F0" />
        <circle cx="110" cy="130" r="5" fill="#09090B" />
        <circle cx="310" cy="130" r="24" fill="#09090B" stroke="#27272A" strokeWidth="2" />
        <circle cx="310" cy="130" r="14" fill="#E2E8F0" />
        <circle cx="310" cy="130" r="5" fill="#09090B" />
      </svg>
    );
  }

  // TOYOTA INNOVA CRYSTA in Uber Black / Executive B&W Style
  if (type === 'premium-innova') {
    return (
      <svg viewBox="0 0 420 170" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="210" cy="154" rx="195" ry="12" fill="#000000" fillOpacity="0.25" />
        <line x1="110" y1="28" x2="310" y2="28" stroke="#09090B" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M 25 114 C 25 96, 42 88, 62 86 L 105 40 C 120 32, 155 30, 195 30 L 310 30 C 332 32, 355 52, 372 74 L 400 86 C 412 90, 416 100, 416 112 L 416 128 C 416 132, 410 134, 402 134 L 362 134 C 362 112, 342 96, 320 96 C 298 96, 280 112, 280 134 L 152 134 C 152 112, 134 96, 112 96 C 90 96, 72 112, 72 134 L 32 134 C 28 134, 25 128, 25 122 Z"
          fill="#FAFAFA"
          stroke="#09090B"
          strokeWidth="2.5"
        />
        {/* Windows */}
        <path d="M 112 38 L 180 36 L 180 76 L 76 76 Z" fill="#09090B" />
        <path d="M 190 36 L 265 36 L 265 76 L 190 76 Z" fill="#09090B" />
        <path d="M 275 36 L 315 36 L 354 76 L 275 76 Z" fill="#09090B" />
        {/* Wheels */}
        <circle cx="112" cy="134" r="26" fill="#09090B" stroke="#27272A" strokeWidth="2.5" />
        <circle cx="112" cy="134" r="16" fill="#CBD5E1" />
        <circle cx="112" cy="134" r="6" fill="#09090B" />
        <circle cx="320" cy="134" r="26" fill="#09090B" stroke="#27272A" strokeWidth="2.5" />
        <circle cx="320" cy="134" r="16" fill="#CBD5E1" />
        <circle cx="320" cy="134" r="6" fill="#09090B" />
      </svg>
    );
  }

  // MINI (WagonR / Swift) in UberGo B&W Style
  return (
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="180" cy="136" rx="160" ry="10" fill="#000000" fillOpacity="0.25" />
      <path
        d="M 28 104 C 28 88, 45 84, 60 82 L 105 56 C 122 48, 150 46, 175 46 L 245 46 C 262 46, 280 58, 296 78 L 330 86 C 342 90, 348 98, 348 108 L 348 116 C 348 120, 342 122, 336 122 L 305 122 C 305 104, 288 92, 272 92 C 256 92, 240 104, 240 122 L 128 122 C 128 104, 112 92, 95 92 C 78 92, 62 104, 62 122 L 32 122 C 28 122, 28 118, 28 112 Z"
        fill="#FFFFFF"
        stroke="#09090B"
        strokeWidth="2.5"
      />
      <path d="M 60 86 L 330 90 L 330 94 L 60 90 Z" fill="#09090B" />
      <path d="M 112 60 L 170 54 L 170 82 L 86 82 Z" fill="#09090B" />
      <path d="M 178 54 L 238 54 L 274 82 L 178 82 Z" fill="#09090B" />
      <circle cx="95" cy="122" r="22" fill="#09090B" stroke="#27272A" strokeWidth="2" />
      <circle cx="95" cy="122" r="12" fill="#E2E8F0" />
      <circle cx="272" cy="122" r="22" fill="#09090B" stroke="#27272A" strokeWidth="2" />
      <circle cx="272" cy="122" r="12" fill="#E2E8F0" />
    </svg>
  );
};
