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
            src="/apple_logo_official.svg"
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
            src="/nike_swoosh_official.svg"
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
       Official authentic black Zudio logo on minimal off-white background
    ---------------------------------------------------- */
    case 'zudio':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <img
            src="/zudio_logo_official.svg"
            alt="Official Zudio logo and retail editorial cover"
            className="w-full h-full object-contain max-h-[50%] max-w-[70%] transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
          />
        </div>
      );

    /* ----------------------------------------------------
       04. boAt
       Official boAt logo on minimal off-white background
    ---------------------------------------------------- */
    case 'boat':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[50%] max-w-[65%] transition-transform duration-500 ease-out group-hover:scale-105">
            <BoatLogo className="w-full h-full max-h-16 text-[#111111]" color="#111111" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       05. COCA-COLA
       Official Coca-Cola script logo on minimal off-white background
    ---------------------------------------------------- */
    case 'coca-cola':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[50%] max-w-[75%] transition-transform duration-500 ease-out group-hover:scale-105">
            <CocaColaLogo className="w-full h-full max-h-16 text-[#E41E2B]" color="#E41E2B" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       06. IKEA
       Official IKEA logo on minimal off-white background
    ---------------------------------------------------- */
    case 'ikea':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[55%] max-w-[60%] transition-transform duration-500 ease-out group-hover:scale-105">
            <IkeaLogo className="w-full h-full max-h-16" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       07. AMUL
       Official Amul logo on minimal off-white background
    ---------------------------------------------------- */
    case 'amul':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[50%] max-w-[65%] transition-transform duration-500 ease-out group-hover:scale-105">
            <AmulLogo className="w-full h-full max-h-16" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       08. McDONALD’S
       Official McDonald's Golden Arches on minimal off-white background
    ---------------------------------------------------- */
    case 'mcdonald’s':
    case "mcdonald's":
    case 'mcdonalds':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[60%] max-w-[50%] transition-transform duration-500 ease-out group-hover:scale-105">
            <McDonaldLogo className="w-20 h-20 sm:w-24 sm:h-24" color="#DA291C" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       09. SPOTIFY
       Official Spotify logo on minimal off-white background
    ---------------------------------------------------- */
    case 'spotify':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[60%] max-w-[50%] transition-transform duration-500 ease-out group-hover:scale-105">
            <SpotifyLogo className="w-20 h-20 sm:w-24 sm:h-24" color="#1ED760" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       10. NYKAA
       Official Nykaa logo on minimal off-white background
    ---------------------------------------------------- */
    case 'nykaa':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[45%] max-w-[70%] transition-transform duration-500 ease-out group-hover:scale-105">
            <NykaaLogo className="w-full h-full max-h-14 text-[#111111]" color="#111111" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       11. ZOMATO
       Official Zomato logo on minimal off-white background
    ---------------------------------------------------- */
    case 'zomato':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[48%] max-w-[70%] transition-transform duration-500 ease-out group-hover:scale-105">
            <ZomatoLogo className="w-full h-full max-h-14" color="#E23744" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       12. TESLA
       Official Tesla logo on minimal off-white background
    ---------------------------------------------------- */
    case 'tesla':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[60%] max-w-[55%] transition-transform duration-500 ease-out group-hover:scale-105">
            <TeslaLogo className="w-20 h-20 sm:w-24 sm:h-24 text-[#E82127]" color="#E82127" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       13. NETFLIX
       Official Netflix logo on minimal off-white background
    ---------------------------------------------------- */
    case 'netflix':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[65%] max-w-[45%] transition-transform duration-500 ease-out group-hover:scale-105">
            <NetflixLogo className="w-16 h-20 sm:w-20 sm:h-24" color="#E50914" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       14. TATA
       Official Tata logo on minimal off-white background
    ---------------------------------------------------- */
    case 'tata':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[50%] max-w-[70%] transition-transform duration-500 ease-out group-hover:scale-105">
            <TataLogo className="w-full h-full max-h-16" color="#005B94" />
          </div>
        </div>
      );

    /* ----------------------------------------------------
       15. AMAZON
       Official Amazon logo on minimal off-white background
    ---------------------------------------------------- */
    case 'amazon':
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 sm:p-10 select-none">
          <div className="w-full h-full flex items-center justify-center max-h-[50%] max-w-[70%] transition-transform duration-500 ease-out group-hover:scale-105">
            <AmazonLogo className="w-full h-full max-h-16 text-[#111111]" color="#111111" />
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-[#ECEAE5] flex items-center justify-center p-8 select-none">
          <div className="text-xl font-editorial font-bold text-center text-[#111111]">
            {article.brand}
          </div>
        </div>
      );
  }
};
