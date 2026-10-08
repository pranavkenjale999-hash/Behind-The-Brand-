import React from 'react';
import { Article } from '../types';
import { EditorialBrandCover } from './EditorialBrandCover';

interface EditorialVisualProps {
  article: Article;
  aspectRatio?: '16:9' | '21:9' | '4:3';
  className?: string;
  isHero?: boolean;
}

export const getBrandAltText = (article: Article): string => {
  if (article.imageAlt) return article.imageAlt;
  const map: Record<string, string> = {
    apple: 'Apple logo and minimalist technology editorial cover',
    nike: 'Nike Swoosh and athletic editorial cover',
    zudio: 'Zudio branding and modern fashion retail editorial cover',
    boat: 'boAt logo and youth consumer audio editorial cover',
    'coca-cola': 'Coca-Cola branding and beverage editorial cover',
    ikea: 'IKEA logo and Scandinavian modular design editorial cover',
    amul: 'Amul branding and Indian cultural icon editorial cover',
    "mcdonald's": 'McDonald’s Golden Arches and restaurant editorial cover',
    mcdonalds: 'McDonald’s Golden Arches and restaurant editorial cover',
    spotify: 'Spotify logo and music streaming audio editorial cover',
    nykaa: 'Nykaa branding and beauty ecommerce editorial cover',
    zomato: 'Zomato branding and food delivery editorial cover',
    tesla: 'Tesla logo and automotive technology editorial cover',
    netflix: 'Netflix logo and cinematic streaming editorial cover',
    tata: 'Tata logo and corporate enterprise editorial cover',
    amazon: 'Amazon logo and ecommerce logistics editorial cover',
  };
  return map[article.brand.toLowerCase().trim()] || `${article.brand} brand editorial cover`;
};

export const EditorialVisual: React.FC<EditorialVisualProps> = ({
  article,
  aspectRatio = '16:9',
  className = '',
}) => {
  const getAspectClass = () => {
    switch (aspectRatio) {
      case '21:9':
        return 'aspect-[21/9]';
      case '4:3':
        return 'aspect-[4/3]';
      case '16:9':
      default:
        return 'aspect-[16/9]';
    }
  };

  const altText = getBrandAltText(article);

  return (
    <div 
      className={`relative w-full overflow-hidden bg-[#ECEAE5] border border-[#D9D7D0] ${getAspectClass()} ${className}`}
      role="img"
      aria-label={altText}
    >
      <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        <EditorialBrandCover article={article} />
      </div>
    </div>
  );
};
