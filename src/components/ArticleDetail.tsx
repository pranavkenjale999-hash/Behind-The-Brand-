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
  const [activeSectionId, setActiveSectionId] = useState<string>('introduction');

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
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [article.id, onClose]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'introduction',
      ...article.content.sections.map((s) => `section-${s.number}`),
      'key-takeaways',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [article.id, article.content.sections]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSectionId(id);
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
    <div className="min-h-screen bg-[#F5F4F0] text-[#111111] animate-article-enter will-change-transform">
      {/* Top Reading Progress Bar with glow */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-neutral-800 to-black z-50 transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(0,0,0,0.4)]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Sub-header navigation bar for article */}
      <div className="sticky top-16 z-30 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#D9D7D0] transition-all duration-200 shadow-sm">
        <div className="max-w-[1040px] mx-auto px-5 sm:px-8 h-12 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#111111] hover:text-[#555555] cursor-pointer py-1"
          >
            <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            <span>Back to dossiers</span>
          </a>

          <div className="flex items-center gap-4 text-xs font-mono text-[#777777]">
            <span className="hidden sm:inline uppercase">
              DOSSIER {article.number} &bull; {article.category}
            </span>
            <button
              onClick={handleShare}
              className="hover:text-[#111111] uppercase tracking-wider text-[11px] font-sans px-3 py-1 border border-[#D9D7D0] bg-white hover:bg-[#ECEAE5] transition-colors cursor-pointer"
            >
              {copied ? 'Link Copied' : 'Share'}
            </button>
            <button
              onClick={onClose}
              className="text-[#111111] hover:text-[#777777] cursor-pointer p-1 font-mono text-sm"
              aria-label="Close article"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Article Hero Header */}
      <header className="relative bg-[#0C0D0E] text-[#F5F4F0] pt-14 pb-16 sm:pb-20 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" aria-hidden="true" />
        <div 
          className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
          aria-hidden="true" 
        />

        <div className="relative max-w-[1040px] mx-auto px-5 sm:px-8">
          {/* Breadcrumb Navigation for SEO & UX */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#8E9297]">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                  className="hover:text-[#F5F4F0] transition-colors"
                >
                  Index
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">/</li>
              <li>
                <a
                  href="/#stories"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                  className="hover:text-[#F5F4F0] transition-colors"
                >
                  Stories
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">/</li>
              <li>
                <span className="text-[#F5F4F0] font-medium" aria-current="page">
                  {article.brand}
                </span>
              </li>
            </ol>
          </nav>

          {/* Header Metadata */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 border border-white/15 flex items-center justify-center">
                <BrandLogo brand={article.brand} className="h-5 w-auto max-w-[90px]" color="#F5F4F0" />
              </div>
              <div className="text-xs uppercase tracking-[0.28em] font-mono font-bold text-[#F5F4F0]">
                {article.brand}
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#8E9297] font-mono">
              <span className="uppercase tracking-[0.18em] text-[#F5F4F0] px-2 py-0.5 bg-white/10">{article.category}</span>
              <span aria-hidden="true" className="text-white/20">&bull;</span>
              <span>{article.readTime}</span>
              <span aria-hidden="true" className="text-white/20">&bull;</span>
              <span>By {article.author || 'Behind the Brand Editorial Team'}</span>
            </div>
          </div>

          {/* Large Article H1 Title (Targeting Primary SEO Keyword) */}
          <h1 className="editorial-article-title font-medium text-[#F5F4F0] mb-5 text-balance max-w-4xl">
            {article.seoTitle || article.title}
          </h1>

          {article.seoTitle && article.seoTitle !== article.title && (
            <p className="text-xl sm:text-2xl text-[#B3B7BD] font-editorial italic mb-8 max-w-3xl">
              {article.title}
            </p>
          )}

          {/* Published metadata */}
          <div className="text-xs font-mono text-[#8E9297] uppercase tracking-[0.2em]">
            PUBLISHED: <time dateTime="2026-10-08">{article.publishDate || 'October 2026'}</time> &bull; ACADEMIC BRAND ESSAY
          </div>
        </div>
      </header>

      {/* Main Reading Canvas */}
      <article className="max-w-[1040px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-24">
        {/* Hero Visual Container */}
        <div className="mb-14 border border-[#D9D7D0] shadow-md overflow-hidden bg-[#ECEAE5]">
          <EditorialVisual article={article} aspectRatio="16:9" isHero={true} />
        </div>

        {/* Reading Column & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 max-w-[700px]">
            {/* Introduction */}
            <section id="introduction" className="mb-14 scroll-mt-32">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#777777] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#111111]" aria-hidden="true" />
                <span>00 / INTRODUCTION</span>
              </div>
              <p className="text-xl sm:text-2xl text-[#111111] leading-relaxed font-editorial font-normal mb-6">
                {article.content.intro}
              </p>
              <div className="w-16 h-[2px] bg-[#111111] mt-8" aria-hidden="true" />
            </section>

            {/* Core Analytical Sections */}
            <div className="space-y-16">
              {article.content.sections.map((section) => (
                <section
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-32 pt-2 border-t border-[#D9D7D0]/60"
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#777777]">
                      0{section.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-medium text-[#111111] leading-tight">
                      {section.heading}
                    </h2>
                  </div>

                  <div className="space-y-5 text-base sm:text-lg text-[#333333] leading-relaxed font-sans font-light">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Pull Quote / Editorial Key Insight */}
            {article.content.keyInsight && (
              <aside className="my-16 p-8 sm:p-10 bg-[#FAF9F6] border-l-4 border-[#111111] border-y border-r border-[#D9D7D0] shadow-sm">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#777777] mb-3">
                  CORE STRATEGIC LESSON
                </div>
                <blockquote className="editorial-quote text-2xl sm:text-3xl text-[#111111] leading-snug">
                  “{article.content.keyInsight}”
                </blockquote>
              </aside>
            )}

            {/* Takeaway Section */}
            {article.content.takeaway && (
              <section id="key-takeaways" className="scroll-mt-32 pt-8 border-t-2 border-[#111111] mb-14">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#777777] mb-3">
                  CONCLUSION &amp; EXECUTIVE TAKEAWAY
                </div>
                <h3 className="text-2xl font-editorial font-medium text-[#111111] mb-4">
                  The Enduring Legacy
                </h3>
                <p className="text-base sm:text-lg text-[#333333] leading-relaxed font-sans font-light">
                  {article.content.takeaway}
                </p>
              </section>
            )}

            {/* Keyword tags for academic context */}
            <div className="pt-8 border-t border-[#D9D7D0]">
              <div className="text-[11px] font-mono text-[#777777] uppercase tracking-[0.2em] mb-3">
                INDEXED KEYWORDS:
              </div>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs font-sans px-3 py-1 bg-[#ECEAE5] border border-[#D9D7D0] text-[#333333]"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Table of Contents & Metadata Sidebar (4 cols) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-8">
              {/* Table of Contents card */}
              <div className="p-6 bg-[#FAF9F6] border border-[#D9D7D0] shadow-sm">
                <div className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#777777] mb-4 flex items-center justify-between pb-3 border-b border-[#D9D7D0]">
                  <span>IN THIS DOSSIER</span>
                  <span className="text-[10px] text-[#888888]">JUMP TO</span>
                </div>
                <ul className="space-y-3 text-xs font-sans">
                  <li>
                    <a 
                      href="#introduction" 
                      onClick={(e) => scrollToSection(e, 'introduction')}
                      className={`flex items-start gap-2 py-0.5 transition-all ${
                        activeSectionId === 'introduction'
                          ? 'text-[#111111] font-semibold translate-x-1.5'
                          : 'text-[#666666] hover:text-[#111111]'
                      }`}
                    >
                      <span className="font-mono text-[#888888]">00.</span>
                      <span>Introduction</span>
                    </a>
                  </li>
                  {article.content.sections.map((section) => {
                    const targetId = `section-${section.number}`;
                    const isActive = activeSectionId === targetId;
                    return (
                      <li key={section.number}>
                        <a 
                          href={`#${targetId}`} 
                          onClick={(e) => scrollToSection(e, targetId)}
                          className={`flex items-start gap-2 py-0.5 transition-all ${
                            isActive
                              ? 'text-[#111111] font-semibold translate-x-1.5'
                              : 'text-[#666666] hover:text-[#111111]'
                          }`}
                        >
                          <span className="font-mono text-[#888888]">0{section.number}.</span>
                          <span className="leading-snug">{section.heading}</span>
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <a 
                      href="#key-takeaways" 
                      onClick={(e) => scrollToSection(e, 'key-takeaways')}
                      className={`flex items-start gap-2 py-0.5 transition-all ${
                        activeSectionId === 'key-takeaways'
                          ? 'text-[#111111] font-semibold translate-x-1.5'
                          : 'text-[#666666] hover:text-[#111111]'
                      }`}
                    >
                      <span className="font-mono text-[#888888]">
                        0{article.content.sections.length + 1}.
                      </span>
                      <span>Takeaways</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Dossier Specs Card */}
              <div className="p-6 bg-[#FAF9F6] border border-[#D9D7D0] text-xs font-mono space-y-3">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#777777] pb-2 border-b border-[#D9D7D0]">
                  SPEC SHEET
                </div>
                <div className="flex justify-between text-[#555555]">
                  <span>BRAND:</span>
                  <span className="text-[#111111] font-sans font-semibold">{article.brand}</span>
                </div>
                <div className="flex justify-between text-[#555555]">
                  <span>CATEGORY:</span>
                  <span className="text-[#111111]">{article.category}</span>
                </div>
                <div className="flex justify-between text-[#555555]">
                  <span>READ TIME:</span>
                  <span className="text-[#111111]">{article.readTime}</span>
                </div>
                <div className="flex justify-between text-[#555555]">
                  <span>CANONICAL:</span>
                  <span className="text-[#111111] truncate max-w-[120px]">/blog/{article.slug}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Stories Grid */}
        <section className="mt-24 pt-16 border-t-2 border-[#111111]">
          <div className="flex items-center justify-between mb-8">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#777777]">
              RECOMMENDED INQUIRIES
            </div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="text-xs uppercase tracking-wider text-[#111111] hover:underline"
            >
              View all 15 stories &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {finalRelated.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="group cursor-pointer p-5 bg-[#FAF9F6] border border-[#D9D7D0] hover:border-[#111111] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 overflow-hidden border border-[#D9D7D0]">
                    <EditorialVisual article={rel} aspectRatio="16:9" />
                  </div>
                  <div className="text-[11px] font-mono text-[#777777] uppercase tracking-wider mb-2">
                    {rel.category} &bull; {rel.readTime}
                  </div>
                  <h4 className="font-editorial text-lg text-[#111111] group-hover:text-[#444444] transition-colors leading-snug mb-3">
                    {rel.title}
                  </h4>
                </div>
                <div className="text-xs uppercase tracking-wider text-[#111111] font-medium pt-3 border-t border-[#D9D7D0] flex items-center justify-between">
                  <span>Read dossier</span>
                  <span>↗</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
