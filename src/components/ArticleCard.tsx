import React from 'react';
import { Article } from '../types';
import { EditorialVisual } from './EditorialVisual';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ArticleCardProps {
  article: Article;
  onReadStory: (article: Article) => void;
  index?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  onReadStory,
  index = 0,
}) => {
  const articleUrl = `/blog/${article.slug}`;
  const staggerDelay = (index % 3) * 100;
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ delayMs: staggerDelay });

  const handleClick = (e: React.MouseEvent) => {
    // Only intercept normal left clicks without modifier keys
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      onReadStory(article);
    }
  };

  return (
    <article 
      ref={ref}
      style={{
        transitionDelay: isRevealed ? undefined : `${staggerDelay}ms`,
      }}
      className={`group flex flex-col justify-between h-full bg-[#FAF9F6] border border-[#D9D7D0] p-6 sm:p-7 hover:border-[#111111] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] focus-within:outline-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        isRevealed 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <a 
        href={articleUrl}
        onClick={handleClick} 
        className="block cursor-pointer"
        aria-label={`Read ${article.brand} case study: ${article.title}`}
        title={`Read ${article.brand} case study: ${article.title}`}
      >
        {/* 1. Large Image with subtle border highlight */}
        <div className="mb-6 overflow-hidden border border-[#D9D7D0] group-hover:border-[#111111] transition-colors duration-300">
          <EditorialVisual article={article} aspectRatio="16:9" />
        </div>

        {/* 2. Article index */}
        <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase font-mono text-[#777777] mb-3 pb-2 border-b border-[#D9D7D0]/60">
          <span className="text-[#111111] font-semibold">DOSSIER {article.number}</span>
          <span className="text-[#888888] font-normal tracking-[0.22em] text-[10px]">CASE STUDY</span>
        </div>

        {/* 4. Article title */}
        <h2 className="editorial-card-title text-[#111111] group-hover:text-[#333333] transition-colors duration-200 mb-3 text-balance font-medium">
          {article.title}
        </h2>

        {/* 5. Short description */}
        <p className="text-sm text-[#555555] leading-relaxed font-sans mb-6 line-clamp-3 font-light">
          {article.description}
        </p>
      </a>

      {/* 6. Read story ↗ with smooth micro-interaction */}
      <div className="pt-3 border-t border-[#D9D7D0] group-hover:border-[#111111]/40 transition-colors duration-300 flex items-center justify-between">
        <a
          href={articleUrl}
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#111111] cursor-pointer py-1 group/btn"
          aria-label={`Read full ${article.brand} brand dossier`}
          title={`Read full ${article.brand} brand dossier`}
        >
          <span>Read {article.brand} dossier</span>
          <span 
            aria-hidden="true" 
            className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 text-sm"
          >
            ↗
          </span>
        </a>

        <span className="text-[11px] font-mono text-[#777777] uppercase tracking-wider">
          {article.readTime}
        </span>
      </div>
    </article>
  );
};
