/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Category, Article } from './types';
import { articles } from './data/articles';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ArticleCard } from './components/ArticleCard';
import { ArticleDetail } from './components/ArticleDetail';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

const CATEGORIES: Category[] = [
  'All',
  'India',
  'Strategy',
  'Psychology',
  'Technology',
  'Business',
  'Marketing',
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeSection, setActiveSection] = useState<'stories' | 'about'>('stories');

  // Handle URL hash on initial load or popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#story-')) {
        const id = parseInt(hash.replace('#story-', ''), 10);
        const found = articles.find((a) => a.id === id);
        if (found) {
          setActiveArticle(found);
          return;
        }
      }
      if (hash === '#about') {
        setActiveSection('about');
        const aboutEl = document.getElementById('about');
        if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  // Sync hash when article opens/closes
  const handleOpenArticle = (article: Article) => {
    setActiveArticle(article);
    window.history.pushState(null, '', `#story-${article.id}`);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    window.history.pushState(null, '', '#stories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronous search and category filter combination
  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return articles.filter((article) => {
      // 1. Category check
      const matchesCategory =
        activeCategory === 'All' || article.category === activeCategory;

      if (!matchesCategory) return false;

      // 2. Search check across title, brand, category, keywords
      if (!query) return true;

      const titleMatch = article.title.toLowerCase().includes(query);
      const brandMatch = article.brand.toLowerCase().includes(query);
      const categoryMatch = article.category.toLowerCase().includes(query);
      const keywordMatch = article.keywords.some((kw) =>
        kw.toLowerCase().includes(query)
      );
      const descriptionMatch = article.description.toLowerCase().includes(query);

      return titleMatch || brandMatch || categoryMatch || keywordMatch || descriptionMatch;
    });
  }, [activeCategory, searchQuery]);

  const handleNavClick = (section: 'stories' | 'about') => {
    setActiveSection(section);
    if (activeArticle) {
      setActiveArticle(null);
      window.history.pushState(null, '', `#${section}`);
    }

    if (section === 'about') {
      setTimeout(() => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      setTimeout(() => {
        const el = document.getElementById('stories-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const resetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-[#FAF9F6]">
      {/* Sticky Editorial Header */}
      <Header
        onNavClick={handleNavClick}
        activeSection={activeSection}
        totalStoriesCount={articles.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeArticle ? (
          /* Article Detail Reading View */
          <ArticleDetail
            article={activeArticle}
            allArticles={articles}
            onClose={handleCloseArticle}
            onSelectArticle={handleOpenArticle}
          />
        ) : (
          /* Magazine Homepage: Hero + Filters + Grid + About */
          <>
            {/* Hero Section */}
            <Hero />

            {/* Filter & Search Section */}
            <div id="stories-grid">
              <FilterBar
                categories={CATEGORIES}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                filteredCount={filteredArticles.length}
                totalCount={articles.length}
              />
            </div>

            {/* Stories Grid */}
            <section className="py-14 sm:py-20 border-b border-[#D9D7D0]">
              <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                    {filteredArticles.map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        onReadStory={handleOpenArticle}
                      />
                    ))}
                  </div>
                ) : (
                  /* No results state */
                  <div className="py-24 text-center max-w-md mx-auto">
                    <div className="font-mono text-xs uppercase tracking-widest text-[#777777] mb-3">
                      ZERO MATCHES
                    </div>
                    <h3 className="text-2xl font-editorial text-[#111111] mb-3">
                      No stories found.
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed mb-6 font-sans">
                      We couldn’t find any essays matching “{searchQuery}” in {activeCategory}. Try adjusting your keywords or clearing the category filter.
                    </p>
                    <button
                      onClick={resetFilters}
                      className="text-xs uppercase tracking-wider px-4 py-2 bg-[#111111] text-[#FAF9F6] border border-[#111111] hover:bg-[#333333] transition-colors cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* About Section */}
            <AboutSection />
          </>
        )}
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
