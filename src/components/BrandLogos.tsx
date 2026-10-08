import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
  size?: number;
}

export const AppleLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', color = 'currentColor' }) => (
  <svg viewBox="0 0 814 1000" fill={color} className={className} aria-label="Official Apple logo">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
  </svg>
);

export const NikeLogo: React.FC<LogoProps> = ({ className = 'w-10 h-5', color = 'currentColor' }) => (
  <svg viewBox="135.5 361.38 1000 356.39" fill={color} className={className} aria-label="Official Nike Swoosh">
    <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z" />
  </svg>
);

export const ZudioLogo: React.FC<LogoProps> = ({ className = 'w-20 h-6', color = 'currentColor' }) => (
  <svg viewBox="0 0 140 38" fill={color} className={className} aria-label="Zudio logo">
    <text x="70" y="25" fontFamily="'Arial Black', Arial, Helvetica, sans-serif" fontWeight="900" fontSize="24" letterSpacing="4" textAnchor="middle">
      ZUDIO
    </text>
    <text x="70" y="34" fontFamily="Arial, Helvetica, sans-serif" fontWeight="600" fontSize="6" letterSpacing="2" textAnchor="middle" opacity="0.75">
      A TATA ENTERPRISE
    </text>
  </svg>
);

export const BoatLogo: React.FC<LogoProps> = ({ className = 'w-20 h-7', color = 'currentColor' }) => (
  <svg viewBox="0 0 120 38" fill={color} className={className} aria-label="boAt logo">
    {/* Geometric Red Sail */}
    <g transform="translate(6, 6)">
      <path d="M12 0 L24 24 L0 24 Z" fill="#E23744" />
      <path d="M12 4 L21 21 L12 21 Z" fill="#FAF9F6" opacity="0.25" />
    </g>
    {/* Typography */}
    <text x="38" y="27" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="23" letterSpacing="0.5">
      bo<tspan fill="#E23744">A</tspan>t
    </text>
  </svg>
);

export const CocaColaLogo: React.FC<LogoProps> = ({ className = 'w-28 h-8', color = 'currentColor' }) => (
  <svg viewBox="0 0 180 48" fill={color} className={className} aria-label="Coca-Cola script logo">
    <g transform="translate(4, 32)">
      {/* Coca-Cola flowing script */}
      <text x="0" y="0" fontFamily="Georgia, 'Brush Script MT', cursive, serif" fontStyle="italic" fontWeight="700" fontSize="33" letterSpacing="-1">
        Coca-Cola
      </text>
      {/* Iconic Spencerian underline dynamic ribbon curve */}
      <path d="M6 7 C 50 14, 110 14, 166 4" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M24 11 C 60 16, 120 16, 150 7" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6" />
    </g>
  </svg>
);

export const IkeaLogo: React.FC<LogoProps> = ({ className = 'w-18 h-7', color = 'currentColor' }) => (
  <svg viewBox="0 0 92 36" className={className} aria-label="IKEA logo">
    <rect width="92" height="36" fill="#0058A9" rx="2" />
    <ellipse cx="46" cy="18" rx="42" ry="15" fill="#FFDA1A" />
    <text x="46" y="25" fontFamily="'Arial Black', Arial, Helvetica, sans-serif" fontWeight="900" fontSize="21" fill="#0058A9" textAnchor="middle" letterSpacing="1">
      IKEA
    </text>
  </svg>
);

export const AmulLogo: React.FC<LogoProps> = ({ className = 'w-20 h-7', color = 'currentColor' }) => (
  <svg viewBox="0 0 110 38" className={className} aria-label="Amul logo">
    <text x="4" y="24" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontWeight="900" fontSize="26" fill="#D32F2F" letterSpacing="-0.5">
      Amul
    </text>
    <circle cx="86" cy="14" r="3.5" fill="#D32F2F" />
    <text x="4" y="34" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" fill="#222222" letterSpacing="0.8">
      THE TASTE OF INDIA
    </text>
  </svg>
);

export const McDonaldLogo: React.FC<LogoProps> = ({ className = 'w-8 h-8', color = '#FFC72C' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="McDonald's Golden Arches">
    <path 
      d="M3 28h3c.3-7.5 2.2-13.8 5.4-18.6C13.8 5.6 16.8 3.5 20 3.5c3.2 0 6.2 2.1 8.6 5.9 3.2 4.8 5.1 11.1 5.4 18.6h3C36.6 19.5 34 12.5 30.5 7 27 1.5 23.5-.5 20-.5 16.5-.5 13 1.5 9.5 7 6 12.5 3.4 19.5 3 28zm14 0h3c.3-6.2 2-11.4 4.5-15.4-1.8-2.2-4-3.4-6.2-3.4s-4.4 1.2-6.2 3.4c2.5 4 4.2 9.2 4.9 15.4z" 
      fill="#FFC72C" 
      transform="scale(0.8) translate(-1, 2)"
    />
  </svg>
);

export const SpotifyLogo: React.FC<LogoProps> = ({ className = 'w-8 h-8', color = '#1ED760' }) => (
  <svg viewBox="0 0 40 40" className={className} aria-label="Spotify logo">
    <circle cx="20" cy="20" r="19" fill="#1ED760" />
    <g fill="#000000" transform="rotate(-5 20 20)">
      {/* 3 Concentric curved audio arcs */}
      <path d="M29 27.5c-.3.5-1 .7-1.5.4-4-2.4-9-3-15-1.6-.6.1-1.2-.3-1.3-.9-.1-.6.3-1.2.9-1.3 6.6-1.5 12.2-.9 16.5 1.8.6.4.8 1.1.4 1.6zm2-4.5c-.4.7-1.3.9-2 .5-4.6-2.8-11.6-3.6-17-2-.8.2-1.6-.2-1.9-1-.2-.8.2-1.6 1-1.9 6.2-1.9 13.9-1 19.2 2.2.7.5 1 1.4.7 2.2zm.2-4.8c-5.5-3.3-14.6-3.6-19.9-2-.9.3-1.8-.2-2.1-1-.3-.9.2-1.8 1-2.1 6.1-1.8 16.1-1.4 22.4 2.4.8.5 1.1 1.5.6 2.3-.5.7-1.5 1-2 0.4z" />
    </g>
  </svg>
);

export const NykaaLogo: React.FC<LogoProps> = ({ className = 'w-20 h-6', color = 'currentColor' }) => (
  <svg viewBox="0 0 120 34" fill={color} className={className} aria-label="Nykaa logo">
    <text x="4" y="25" fontFamily="'Arial Black', Arial, Helvetica, sans-serif" fontWeight="900" fontSize="24" letterSpacing="1.5">
      NYKAA
    </text>
    {/* Nykaa Signature Star Accent */}
    <path d="M102 5 L104 12 L111 14 L104 16 L102 23 L100 16 L93 14 L100 12 Z" fill="#FC2779" />
  </svg>
);

export const ZomatoLogo: React.FC<LogoProps> = ({ className = 'w-22 h-7', color = '#E23744' }) => (
  <svg viewBox="0 0 120 36" className={className} aria-label="Zomato logo">
    <text x="4" y="27" fontFamily="'Arial Black', Arial, Helvetica, sans-serif" fontStyle="italic" fontWeight="900" fontSize="27" letterSpacing="-1" fill="#E23744">
      zomato
    </text>
  </svg>
);

export const TeslaLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7', color = 'currentColor' }) => (
  <svg viewBox="0 0 40 40" fill={color} className={className} aria-label="Tesla logo">
    {/* Curved Top Wing */}
    <path d="M20 7.5c3.8 0 7.8.6 11.2 1.9.5.2 1 0 1.3-.5.5-.7 1.1-1.6 1.6-2.3.3-.4.2-1-.3-1.2C29.3 3.8 24.7 3 20 3S10.7 3.8 6.2 5.4c-.5.2-.6.8-.3 1.2.5.7 1.1 1.6 1.6 2.3.3.5.8.7 1.3.5 3.4-1.3 7.4-1.9 11.2-1.9z" />
    {/* Central Pillar Shield */}
    <path d="M34.2 12c-.3-.2-.8 0-1.1.3-3.5 3.8-8 5.8-13.1 5.8S9.6 16.1 6.1 12.3c-.3-.3-.8-.5-1.1-.3-.6.5-1.3 1-1.8 1.5-.5.4-.5 1-.2 1.3 4.2 5 10 7.8 17 7.8s12.8-2.8 17-7.8c.3-.3.3-.9-.2-1.3-.5-.5-1.2-1-1.8-1.5z" />
    <path d="M18 36c.2.6.8 1 1.5 1h1c.7 0 1.3-.4 1.5-1l1.2-14.7c-1 .2-2.1.2-3.2.2s-2.2 0-3.2-.2L18 36z" />
  </svg>
);

export const NetflixLogo: React.FC<LogoProps> = ({ className = 'w-7 h-8', color = '#E50914' }) => (
  <svg viewBox="0 0 28 36" className={className} aria-label="Netflix ribbon N">
    {/* Left vertical ribbon with bottom curve */}
    <path d="M4 1h5v31.5L4 30V1z" fill="#B81D24" />
    {/* Right vertical ribbon */}
    <path d="M19 1h5v29l-5 2.5V1z" fill="#B81D24" />
    {/* Diagonal front ribbon */}
    <path d="M4 1h5l15 32.5h-5L4 1z" fill="#E50914" />
  </svg>
);

export const TataLogo: React.FC<LogoProps> = ({ className = 'w-22 h-7', color = '#005B94' }) => (
  <svg viewBox="0 0 120 36" className={className} aria-label="Tata logo">
    {/* Wolff Olins Tata Oval Emblem */}
    <g transform="translate(4, 2)">
      <ellipse cx="16" cy="16" rx="15" ry="13" fill="none" stroke="#005B94" strokeWidth="2.2" />
      <path d="M9 13 C 13 7, 19 7, 23 13 C 19 19, 13 19, 9 13 Z" fill="#005B94" />
      <path d="M11 21 C 14 18, 18 18, 21 21" stroke="#005B94" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </g>
    {/* Typography */}
    <text x="44" y="24" fontFamily="'Arial Black', Arial, Helvetica, sans-serif" fontWeight="900" fontSize="21" letterSpacing="4" fill="#005B94">
      TATA
    </text>
  </svg>
);

export const AmazonLogo: React.FC<LogoProps> = ({ className = 'w-22 h-8', color = 'currentColor' }) => (
  <svg viewBox="0 0 120 40" fill={color} className={className} aria-label="Amazon logo">
    <text x="4" y="25" fontFamily="'Arial Black', Arial, Helvetica, sans-serif" fontWeight="900" fontSize="25" letterSpacing="-1">
      amazon
    </text>
    {/* Signature orange smile arrow from 'a' to 'z' */}
    <path d="M11 31 C 32 39, 72 39, 92 31" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M89 28 L94 32 L87 35 Z" fill="#FF9900" />
  </svg>
);

/**
 * Universal Brand Logo Dispatcher
 */
export const BrandLogo: React.FC<{
  brand: string;
  className?: string;
  color?: string;
}> = ({ brand, className = 'h-5 w-auto', color = 'currentColor' }) => {
  const norm = brand.toLowerCase().trim();

  switch (norm) {
    case 'apple':
      return <AppleLogo className={className} color={color} />;
    case 'nike':
      return <NikeLogo className={className} color={color} />;
    case 'zudio':
      return <ZudioLogo className={className} color={color} />;
    case 'boat':
      return <BoatLogo className={className} color={color} />;
    case 'coca-cola':
      return <CocaColaLogo className={className} color={color} />;
    case 'ikea':
      return <IkeaLogo className={className} color={color} />;
    case 'amul':
      return <AmulLogo className={className} color={color} />;
    case "mcdonald's":
    case 'mcdonalds':
      return <McDonaldLogo className={className} color={color} />;
    case 'spotify':
      return <SpotifyLogo className={className} color={color} />;
    case 'nykaa':
      return <NykaaLogo className={className} color={color} />;
    case 'zomato':
      return <ZomatoLogo className={className} color={color} />;
    case 'tesla':
      return <TeslaLogo className={className} color={color} />;
    case 'netflix':
      return <NetflixLogo className={className} color={color} />;
    case 'tata':
      return <TataLogo className={className} color={color} />;
    case 'amazon':
      return <AmazonLogo className={className} color={color} />;
    default:
      return (
        <span className="font-bold text-xs uppercase tracking-widest">
          {brand}
        </span>
      );
  }
};
