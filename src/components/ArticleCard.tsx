import React from 'react';
import { Article } from '../types';
import { EditorialVisual } from './EditorialVisual';

interface ArticleCardProps {
  article: Article;
  onReadStory: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadStory }) => {
  return (
    <article className="group flex flex-col justify-between h-full cursor-pointer focus-within:outline-none">
      <div 
        onClick={() => onReadStory(article)} 
        className="block"
      >
        {/* 1. Large Image */}
        <div className="mb-5 overflow-hidden border border-[#D9D7D0]">
          <EditorialVisual article={article} aspectRatio="16:9" />
        </div>

        {/* 2 & 3. Article number & Category */}
        <div className="flex items-center justify-between text-xs tracking-[0.18em] uppercase font-sans font-medium text-[#777777] mb-3">
          <span className="font-mono text-[#111111]">{article.number}</span>
          <span className="text-[#111111] tracking-[0.2em]">{article.category}</span>
        </div>

        {/* 4. Article title */}
        <h2 className="editorial-card-title text-[#111111] group-hover:text-[#444444] transition-colors duration-200 mb-3 text-balance">
          {article.title}
        </h2>

        {/* 5. Short description */}
        <p className="text-sm text-[#555555] leading-relaxed font-sans mb-5 line-clamp-3">
          {article.description}
        </p>
      </div>

      {/* 6. Read story ↗ */}
      <div className="pt-2 border-t border-[#D9D7D0]/60 flex items-center justify-between">
        <button
          onClick={() => onReadStory(article)}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-sans font-medium text-[#111111] group-hover:translate-x-0.5 transition-transform duration-200 cursor-pointer py-1"
        >
          <span>Read story</span>
          <span aria-hidden="true">↗</span>
        </button>

        <span className="text-[11px] font-mono text-[#777777] uppercase tracking-wider">
          {article.readTime}
        </span>
      </div>
    </article>
  );
};
