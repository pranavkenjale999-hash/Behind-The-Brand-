import React from 'react';
import { Article } from '../types';
import {
  AppleLogo,
  NikeLogo,
  ZudioLogo,
  BoatLogo,
  CocaColaLogo,
  IkeaLogo,
  AmulLogo,
  McDonaldLogo,
  SpotifyLogo,
  NykaaLogo,
  ZomatoLogo,
  TeslaLogo,
  NetflixLogo,
  TataLogo,
  AmazonLogo,
} from './BrandLogos';

interface EditorialBrandCoverProps {
  article: Article;
}

export const EditorialBrandCover: React.FC<EditorialBrandCoverProps> = ({ article }) => {
  const norm = article.brand.toLowerCase().trim();

  switch (norm) {
    /* ----------------------------------------------------
       01. APPLE
       Official authentic black Apple logo on minimal off-white background
    ---------------------------------------------------- */
    case 'apple':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <img
            src="/src/assets/images/apple_logo_official.svg"
            alt="Apple logo and minimalist technology editorial cover"
            className="w-full h-full object-contain max-h-[60%] max-w-[55%] transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg';
            }}
          />
        </div>
      );

    /* ----------------------------------------------------
       02. NIKE
       Official authentic black Nike Swoosh on minimal off-white background
    ---------------------------------------------------- */
    case 'nike':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <img
            src="/src/assets/images/nike_swoosh_official.svg"
            alt="Nike Swoosh and athletic editorial cover"
            className="w-full h-full object-contain max-h-[48%] max-w-[65%] transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg';
            }}
          />
        </div>
      );

    /* ----------------------------------------------------
       03. ZUDIO
       Theme: Minimalist fashion garment tag, monochrome retail
    ---------------------------------------------------- */
    case 'zudio':
      return (
        <div className="w-full h-full bg-[#18181A] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Fashion textile vertical thread texture */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #ffffff, #ffffff 1px, transparent 1px, transparent 12px)',
            }}
          />
          {/* Apparel label frame */}
          <div className="absolute inset-4 border border-white/10 pointer-events-none" />

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#888888] uppercase z-10 px-2">
            <span>NO. 03 / INDIA</span>
            <span>TRENT / RETAIL</span>
          </div>

          {/* Center Zudio Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="px-6 py-3 bg-[#FAF9F6] text-[#111111] shadow-md border border-white/20">
              <ZudioLogo className="w-28 sm:w-36 h-9" color="#111111" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] font-mono text-[#888888]">
              FAST FASHION &bull; SUB-₹999
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#777777] uppercase z-10 px-2">
            <span className="font-sans font-bold text-[#CCCCCC] tracking-[0.2em]">ZUDIO</span>
            <span>AFFORDABLE ASPIRATION</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       04. boAt
       Theme: Acoustic driver ring geometry, red sail emblem
    ---------------------------------------------------- */
    case 'boat':
      return (
        <div className="w-full h-full bg-[#121418] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Acoustic sound concentric circles */}
          <div className="absolute right-[-20px] top-[-20px] w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute right-[-40px] top-[-40px] w-88 h-88 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute right-[-60px] top-[-60px] w-112 h-112 rounded-full border border-white/5 pointer-events-none" />

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#888888] uppercase z-10">
            <span>NO. 04 / INDIA</span>
            <span>CONSUMER AUDIO</span>
          </div>

          {/* Center boAt Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="p-4 bg-[#181C22] border border-[#E23744]/30 shadow-lg">
              <BoatLogo className="w-28 sm:w-36 h-9" color="#FAF9F6" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.25em] font-mono text-[#999999]">
              BASS-TUNED ACOUSTICS
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#777777] uppercase z-10">
            <span className="font-sans font-bold text-[#DDDDDD] tracking-[0.2em]">boAt</span>
            <span>LIFESTYLE ACCESSORY</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       05. COCA-COLA
       Theme: Deep heritage burgundy, vintage contour bottle silhouette
    ---------------------------------------------------- */
    case 'coca-cola':
      return (
        <div className="w-full h-full bg-[#240A0C] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Subtle iconic 1915 contour bottle silhouette in background */}
          <svg className="absolute right-8 top-1/2 -translate-y-1/2 h-44 opacity-[0.08] pointer-events-none" viewBox="0 0 100 300" fill="currentColor">
            <path d="M40 0 h20 v20 c0 15 15 30 25 50 c10 20 15 40 10 70 c-5 30-10 50 5 80 c5 10 0 40-10 60 c-10 20-30 20-50 20 s-40 0-50-20 c-10-20-15-50-10-60 c15-30 10-50 5-80 c-5-30 0-50 10-70 c10-20 25-35 25-50 v-20 z" />
          </svg>
          {/* Soft warm burgundy radial glow */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 35% 50%, rgba(220,38,38,0.3) 0%, transparent 65%)',
            }}
          />

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#A66E71] uppercase z-10">
            <span>NO. 05 / PSYCHOLOGY</span>
            <span>ATLANTA, GA &bull; 1886</span>
          </div>

          {/* Center Coca-Cola Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <CocaColaLogo className="w-44 sm:w-56 h-12 text-[#FAF9F6] drop-shadow-xl" color="#FAF9F6" />
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-[#DDA5A7]">
              OPEN HAPPINESS
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#A66E71] uppercase z-10">
            <span className="font-sans font-bold text-[#EED8DA] tracking-[0.2em]">COCA-COLA</span>
            <span>RITUAL & MEMORY</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       06. IKEA
       Theme: Scandinavian modular grid, authentic blue/yellow emblem
    ---------------------------------------------------- */
    case 'ikea':
      return (
        <div className="w-full h-full bg-[#182333] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Scandinavian modular furniture wireframe floorplan grid */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 400 225" fill="none" stroke="#FFFFFF" strokeWidth="1">
            <rect x="30" y="30" width="80" height="60" strokeDasharray="4 4" />
            <rect x="130" y="30" width="120" height="40" strokeDasharray="4 4" />
            <rect x="270" y="30" width="90" height="90" strokeDasharray="4 4" />
            <rect x="30" y="110" width="140" height="70" strokeDasharray="4 4" />
          </svg>

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#8C9FB5] uppercase z-10">
            <span>NO. 06 / STRATEGY</span>
            <span>ÄLMHULT, SWEDEN</span>
          </div>

          {/* Center IKEA Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="p-2.5 bg-[#FAF9F6] shadow-xl border border-white/20">
              <IkeaLogo className="w-28 sm:w-36 h-11" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.28em] font-mono text-[#A8BACD]">
              DEMOCRATIC DESIGN
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#8C9FB5] uppercase z-10">
            <span className="font-sans font-bold text-[#D0DFEF] tracking-[0.2em]">IKEA</span>
            <span>FLAT-PACK & LABYRINTH</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       07. AMUL
       Theme: Dairy cream, vintage butter carton typography
    ---------------------------------------------------- */
    case 'amul':
      return (
        <div className="w-full h-full bg-[#231E19] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Subtle polka-dot pattern homage to the Amul Girl dress */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #D32F2F 1.5px, transparent 1.5px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#9A8D7E] uppercase z-10">
            <span>NO. 07 / INDIA</span>
            <span>ANAND, GUJARAT &bull; 1946</span>
          </div>

          {/* Center Amul Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="px-5 py-3 bg-[#FAF8F3] shadow-lg border border-[#D32F2F]/20">
              <AmulLogo className="w-32 sm:w-40 h-11" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.28em] font-sans font-semibold text-[#D1C4B5]">
              UTTERLY BUTTERLY DELICIOUS
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#9A8D7E] uppercase z-10">
            <span className="font-sans font-bold text-[#EADCCE] tracking-[0.2em]">AMUL</span>
            <span>COOPERATIVE ICON</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       08. McDONALD’S
       Theme: Golden Arches, roadside diner architectural geometry
    ---------------------------------------------------- */
    case 'mcdonald’s':
    case "mcdonald's":
    case 'mcdonalds':
      return (
        <div className="w-full h-full bg-[#181615] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Golden glow ambient light */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 45%, rgba(255,199,44,0.25) 0%, transparent 60%)',
            }}
          />

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#8C847F] uppercase z-10">
            <span>NO. 08 / STRATEGY</span>
            <span>SAN BERNARDINO, CA</span>
          </div>

          {/* Center McDonald's Golden Arches */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="p-3 bg-[#1F1C1A] border border-[#FFC72C]/30 shadow-xl">
              <McDonaldLogo className="w-14 h-14 sm:w-16 sm:h-16" color="#FFC72C" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#FFC72C]/90">
              THE GOLDEN ARCHES
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#8C847F] uppercase z-10">
            <span className="font-sans font-bold text-[#DDD4CD] tracking-[0.2em]">McDONALD'S</span>
            <span>GLOBAL STANDARDIZATION</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       09. SPOTIFY
       Theme: Algorithmic audio frequency waveform, Spotify green
    ---------------------------------------------------- */
    case 'spotify':
      return (
        <div className="w-full h-full bg-[#0B120E] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Algorithmic audio waveform bars background */}
          <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-10 pointer-events-none">
            {[20, 35, 60, 45, 80, 50, 95, 70, 40, 85, 30, 65, 90, 55, 35, 75, 45, 25].map((h, i) => (
              <div 
                key={i} 
                className="w-1 bg-[#1ED760] rounded-full" 
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#698E75] uppercase z-10">
            <span>NO. 09 / TECHNOLOGY</span>
            <span>STOCKHOLM, SWEDEN</span>
          </div>

          {/* Center Spotify Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="p-3 bg-[#121E17] border border-[#1ED760]/30 shadow-xl rounded-full">
              <SpotifyLogo className="w-12 h-12 sm:w-14 sm:h-14" color="#1ED760" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] font-mono text-[#1ED760]/90">
              DISCOVER WEEKLY &bull; WRAPPED
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#698E75] uppercase z-10">
            <span className="font-sans font-bold text-[#CFE4D6] tracking-[0.2em]">SPOTIFY</span>
            <span>ALGORITHMIC IDENTITY</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       10. NYKAA
       Theme: Beauty cosmetic swatch curves, magenta accent star
    ---------------------------------------------------- */
    case 'nykaa':
      return (
        <div className="w-full h-full bg-[#1D1217] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Elegant cosmetic swatch wave */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 400 225" fill="none">
            <path d="M-20 180 C 100 80, 200 220, 420 100" stroke="#FC2779" strokeWidth="2.5" />
            <path d="M-20 200 C 100 100, 200 240, 420 120" stroke="#FC2779" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#8C6D78] uppercase z-10">
            <span>NO. 10 / INDIA</span>
            <span>MUMBAI &bull; 2012</span>
          </div>

          {/* Center Nykaa Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="px-6 py-3 bg-[#261820] border border-[#FC2779]/30 shadow-xl">
              <NykaaLogo className="w-32 sm:w-40 h-9" color="#FAF9F6" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] font-sans text-[#E0AABF]">
              AUTHENTICITY & EDUCATION
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#8C6D78] uppercase z-10">
            <span className="font-sans font-bold text-[#EED4DE] tracking-[0.2em]">NYKAA</span>
            <span>BEAUTY COMMERCE</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       11. ZOMATO
       Theme: Delivery map grid, signature red italic wordmark
    ---------------------------------------------------- */
    case 'zomato':
      return (
        <div className="w-full h-full bg-[#1C1213] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Subtle street delivery route grid */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#8C6D6E] uppercase z-10">
            <span>NO. 11 / MARKETING</span>
            <span>GURUGRAM &bull; 2008</span>
          </div>

          {/* Center Zomato Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="px-6 py-3 bg-[#FAF9F6] shadow-xl border border-white/20">
              <ZomatoLogo className="w-32 sm:w-40 h-9" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#E23744]">
              NEVER HAVE A BORING MEAL
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#8C6D6E] uppercase z-10">
            <span className="font-sans font-bold text-[#ECD3D4] tracking-[0.2em]">ZOMATO</span>
            <span>BRAND PERSONALITY</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       12. TESLA
       Theme: Aerodynamic automotive streamline curves, sculpted chrome T
    ---------------------------------------------------- */
    case 'tesla':
      return (
        <div className="w-full h-full bg-[#101216] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Aerodynamic streamline curves */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 400 225" fill="none" stroke="#FFFFFF">
            <path d="M-30 80 Q 200 40, 430 140" strokeWidth="1" />
            <path d="M-30 110 Q 200 70, 430 170" strokeWidth="1.5" />
            <path d="M-30 140 Q 200 100, 430 200" strokeWidth="1" />
          </svg>

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#717A88] uppercase z-10">
            <span>NO. 12 / TECHNOLOGY</span>
            <span>AUSTIN, TEXAS</span>
          </div>

          {/* Center Tesla Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="p-3.5 bg-[#171B22] border border-white/20 shadow-xl">
              <TeslaLogo className="w-14 h-14 sm:w-16 sm:h-16 text-[#FAF9F6]" color="#FAF9F6" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] font-mono text-[#9EA9BA]">
              ELECTRIC ARCHITECTURE
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#717A88] uppercase z-10">
            <span className="font-sans font-bold text-[#D0D9E5] tracking-[0.2em]">TESLA</span>
            <span>PRODUCT THEATRE</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       13. NETFLIX
       Theme: Cinematic scope 2.39:1 bars, red ribbon N
    ---------------------------------------------------- */
    case 'netflix':
      return (
        <div className="w-full h-full bg-[#0A0A0A] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Cinematic scope letterbox hairline frames */}
          <div className="absolute top-2 left-0 right-0 h-[1px] bg-white/10" />
          <div className="absolute bottom-2 left-0 right-0 h-[1px] bg-white/10" />
          
          {/* Subtle beam of projector light */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 30%, rgba(229,9,20,0.3) 0%, transparent 60%)',
            }}
          />

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#777777] uppercase z-10">
            <span>NO. 13 / PSYCHOLOGY</span>
            <span>LOS GATOS, CA</span>
          </div>

          {/* Center Netflix Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="p-3 bg-[#141414] border border-[#E50914]/30 shadow-2xl">
              <NetflixLogo className="w-12 h-14 sm:w-14 sm:h-16" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.35em] font-sans font-bold text-[#E50914]">
              AUTOPLAY & RETENTION
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#777777] uppercase z-10">
            <span className="font-sans font-bold text-[#DDDDDD] tracking-[0.2em]">NETFLIX</span>
            <span>FRICTIONLESS HABIT</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       14. TATA
       Theme: Institutional trust, blue oval emblem, steel lines
    ---------------------------------------------------- */
    case 'tata':
      return (
        <div className="w-full h-full bg-[#121822] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Engineering blueprint hairline grid */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#005B94 1px, transparent 1px), linear-gradient(90deg, #005B94 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#697D98] uppercase z-10">
            <span>NO. 14 / INDIA</span>
            <span>BOMBAY HOUSE &bull; 1868</span>
          </div>

          {/* Center Tata Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="px-6 py-3 bg-[#FAF9F6] shadow-xl border border-white/20">
              <TataLogo className="w-32 sm:w-40 h-9" color="#005B94" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] font-mono text-[#8CA3C3]">
              LEADERSHIP WITH TRUST
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#697D98] uppercase z-10">
            <span className="font-sans font-bold text-[#CCD8E9] tracking-[0.2em]">TATA</span>
            <span>GENERATIONAL INTEGRITY</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       15. AMAZON
       Theme: Kraft packaging box crease lines, signature smile arrow
    ---------------------------------------------------- */
    case 'amazon':
      return (
        <div className="w-full h-full bg-[#1B1D22] text-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Cardboard packaging tape & structural folds */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-10 bg-white/[0.03] border-y border-white/5 pointer-events-none" />
          <div className="absolute right-6 top-6 w-16 h-12 border border-white/10 flex flex-col justify-center items-center opacity-40">
            <div className="w-10 h-1 bg-white/20 mb-1" />
            <div className="w-8 h-1 bg-white/20" />
          </div>

          {/* Top metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#7E8492] uppercase z-10">
            <span>NO. 15 / STRATEGY</span>
            <span>SEATTLE, WA &bull; 1994</span>
          </div>

          {/* Center Amazon Logo */}
          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="px-6 py-3 bg-[#FAF9F6] shadow-xl border border-white/20">
              <AmazonLogo className="w-32 sm:w-40 h-10 text-[#111111]" color="#111111" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] font-mono text-[#FF9900]/90">
              THE FLYWHEEL ENGINE
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono tracking-[0.2em] text-[#7E8492] uppercase z-10">
            <span className="font-sans font-bold text-[#D7DCE7] tracking-[0.2em]">AMAZON</span>
            <span>CONVENIENCE AS HABIT</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-[#181818] text-[#FAF9F6] p-6 flex flex-col justify-between">
          <div className="text-[10px] font-mono tracking-widest text-[#888888]">
            {article.category}
          </div>
          <div className="text-xl font-editorial font-bold text-center">
            {article.brand}
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#888888]">
            {article.readTime}
          </div>
        </div>
      );
  }
};
