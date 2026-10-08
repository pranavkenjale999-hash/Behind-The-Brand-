import React, { useState } from 'react';

interface HeaderProps {
  onNavClick: (section: 'stories' | 'about') => void;
  activeSection?: string;
  totalStoriesCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onNavClick,
  activeSection = 'stories',
  totalStoriesCount = 15,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLink = (section: 'stories' | 'about') => {
    onNavClick(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F5F4F0] border-b border-[#D9D7D0] transition-colors duration-200">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <button 
          onClick={() => handleLink('stories')}
          className="text-left group flex items-baseline gap-2 cursor-pointer focus:outline-none"
          aria-label="Behind the Brand home"
        >
          <span className="font-bold text-sm sm:text-base tracking-wider uppercase text-[#111111]">
            BEHIND THE BRAND
          </span>
          <span className="text-xs sm:text-sm font-normal text-[#777777] tracking-wider uppercase">
            / EDITORIAL
          </span>
        </button>

        {/* Right navigation on desktop */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-medium text-[#111111]">
          <button
            onClick={() => handleLink('stories')}
            className={`transition-colors hover:text-[#111111] cursor-pointer py-1 relative ${
              activeSection === 'stories' ? 'text-[#111111]' : 'text-[#777777]'
            }`}
          >
            Stories
            {activeSection === 'stories' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#111111]" />
            )}
          </button>
          
          <button
            onClick={() => handleLink('about')}
            className={`transition-colors hover:text-[#111111] cursor-pointer py-1 relative ${
              activeSection === 'about' ? 'text-[#111111]' : 'text-[#777777]'
            }`}
          >
            About
            {activeSection === 'about' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#111111]" />
            )}
          </button>

          <span className="text-[10px] font-mono text-[#777777] tracking-widest pl-2 border-l border-[#D9D7D0]">
            VOL. 01 — {totalStoriesCount} ESSAYS
          </span>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs uppercase tracking-widest text-[#111111] px-2 py-1.5 border border-[#D9D7D0] bg-[#FAF9F6] active:bg-[#ECEAE5]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D9D7D0] bg-[#FAF9F6] px-5 py-4 flex flex-col gap-3">
          <button
            onClick={() => handleLink('stories')}
            className="text-left text-xs uppercase tracking-[0.15em] font-medium text-[#111111] py-2 border-b border-[#ECEAE5]"
          >
            Stories ({totalStoriesCount})
          </button>
          <button
            onClick={() => handleLink('about')}
            className="text-left text-xs uppercase tracking-[0.15em] font-medium text-[#111111] py-2"
          >
            About The Publication
          </button>
        </div>
      )}
    </header>
  );
};
