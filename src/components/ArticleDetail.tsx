import React, { useEffect, useState } from 'react';
import { Article } from '../types';
import { EditorialVisual } from './EditorialVisual';
import { BrandLogo } from './BrandLogos';

interface ArticleDetailProps {
  article: Article;
  allArticles: Article[];
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  allArticles,
  onClose,
  onSelectArticle,
}) => {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Keyboard navigation & scroll to top on change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [article.id, onClose]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Find 3 related stories
  const relatedArticles = article.relatedIds
    .map((id) => allArticles.find((a) => a.id === id))
    .filter((a): a is Article => !!a)
    .slice(0, 3);

  // Fallback if less than 3
  const finalRelated = relatedArticles.length === 3
    ? relatedArticles
    : [
        ...relatedArticles,
        ...allArticles.filter((a) => a.id !== article.id && !article.relatedIds.includes(a.id)),
      ].slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#111111] animate-fadeIn">
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#111111] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Sub-header navigation bar for article */}
      <div className="sticky top-16 z-30 bg-[#F5F4F0]/95 backdrop-blur-sm border-b border-[#D9D7D0]">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 h-12 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#111111] hover:text-[#555555] cursor-pointer py-1"
          >
            <span aria-hidden="true">←</span>
            <span>Back to stories</span>
          </button>

          <div className="flex items-center gap-4 text-xs font-mono text-[#777777]">
            <span className="hidden sm:inline uppercase">
              NO. {article.number} / {article.category}
            </span>
            <button
              onClick={handleShare}
              className="hover:text-[#111111] uppercase tracking-wider text-[11px] font-sans px-2.5 py-1 border border-[#D9D7D0] bg-[#FAF9F6] cursor-pointer"
            >
              {copied ? 'Link Copied' : 'Share'}
            </button>
            <button
              onClick={onClose}
              className="text-[#111111] hover:text-[#777777] cursor-pointer p-1"
              aria-label="Close article"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-[860px] mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-24">
        {/* Header Metadata */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-1.5 bg-[#ECEAE5] border border-[#D9D7D0] flex items-center justify-center">
              <BrandLogo brand={article.brand} className="h-4.5 w-auto max-w-[80px]" color="#111111" />
            </div>
            <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#111111]">
              {article.brand}
            </div>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] font-sans text-[#777777] flex items-center gap-2">
            <span>{article.category}</span>
            <span aria-hidden="true">&bull;</span>
            <span className="font-mono">{article.readTime}</span>
          </div>
        </div>

        {/* Large Article Title */}
        <h1 className="editorial-article-title font-medium text-[#111111] mb-8 text-balance">
          {article.title}
        </h1>

        {/* Hero Image */}
        <div className="mb-12 border border-[#D9D7D0]">
          <EditorialVisual article={article} aspectRatio="16:9" isHero={true} />
        </div>

        {/* Reading Column */}
        <div className="max-w-[700px] mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <div className="text-[11px] uppercase tracking-[0.22em] font-sans font-bold text-[#777777] mb-4">
              INTRODUCTION
            </div>
            <p className="text-lg sm:text-xl text-[#222222] font-editorial leading-relaxed first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#111111]">
              {article.content.intro}
            </p>
          </section>

          <hr className="border-t border-[#D9D7D0] my-10" />

          {/* Numbered Sections */}
          <div className="space-y-12">
            {article.content.sections.map((section) => (
              <section key={section.number} className="scroll-mt-32">
                <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
                  SECTION {section.number}
                </div>
                <h2 className="text-2xl sm:text-3xl font-editorial font-medium text-[#111111] mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-base sm:text-[17px] text-[#333333] leading-relaxed font-sans">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Key Insight Box */}
          <div className="my-14 p-6 sm:p-8 bg-[#ECEAE5] border border-[#D9D7D0]">
            <div className="text-[11px] uppercase tracking-[0.22em] font-sans font-bold text-[#777777] mb-2">
              KEY BUSINESS INSIGHT
            </div>
            <p className="text-base sm:text-lg font-sans font-medium text-[#111111] leading-relaxed">
              {article.content.keyInsight}
            </p>
          </div>

          {/* The Takeaway */}
          <section className="my-14 border-y border-[#D9D7D0] py-10 text-center">
            <div className="text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-[#777777] mb-4">
              THE TAKEAWAY
            </div>
            <blockquote className="editorial-quote text-2xl sm:text-3xl text-[#111111] leading-snug max-w-xl mx-auto">
              {article.content.takeaway}
            </blockquote>
          </section>

          {/* Article Keywords */}
          <div className="flex flex-wrap items-center gap-2 pt-4 pb-12 border-b border-[#D9D7D0]">
            <span className="text-[11px] uppercase tracking-wider text-[#777777] font-mono mr-2">
              KEYWORDS:
            </span>
            {article.keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs text-[#555555] font-sans px-2.5 py-1 bg-[#ECEAE5] border border-[#D9D7D0]/70"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Related Stories */}
        <section className="mt-16 pt-6">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#D9D7D0]">
            <h3 className="text-sm uppercase tracking-[0.2em] font-sans font-bold text-[#111111]">
              RELATED STORIES
            </h3>
            <span className="text-xs font-mono text-[#777777]">
              CONTINUE READING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {finalRelated.map((related) => (
              <div
                key={related.id}
                onClick={() => onSelectArticle(related)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 overflow-hidden border border-[#D9D7D0]">
                    <EditorialVisual article={related} aspectRatio="16:9" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-[#777777] mb-2 font-mono">
                    <span>{related.brand}</span>
                    <span>{related.category}</span>
                  </div>
                  <h4 className="text-lg font-editorial text-[#111111] group-hover:text-[#555555] transition-colors line-clamp-2 mb-2">
                    {related.title}
                  </h4>
                </div>
                <div className="pt-2 text-xs uppercase tracking-wider text-[#111111] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Read story</span>
                  <span>↗</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back to top/stories bottom actions */}
        <div className="mt-16 pt-8 border-t border-[#D9D7D0] flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#111111] hover:text-[#555555] cursor-pointer py-2 px-4 border border-[#111111] hover:bg-[#ECEAE5] transition-colors"
          >
            ← Back to all stories
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs uppercase tracking-wider font-mono text-[#777777] hover:text-[#111111] cursor-pointer"
          >
            Top ↑
          </button>
        </div>
      </article>
    </div>
  );
};
