import React, { useState } from 'react';

interface HeaderProps {
  onNavClick: (section: 'stories' | 'about' | 'faq') => void;
  activeSection?: string;
  totalStoriesCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onNavClick,
  activeSection = 'stories',
  totalStoriesCount = 15,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLink = (section: 'stories' | 'about' | 'faq') => {
    onNavClick(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0C0D0E]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Left: Cinematic Brand Wordmark */}
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLink('stories');
          }}
          className="text-left group flex items-baseline gap-2.5 cursor-pointer focus:outline-none"
          aria-label="Behind the Brand Homepage"
          title="Behind the Brand — Homepage"
        >
          <span className="font-bold text-sm sm:text-base tracking-[0.2em] uppercase text-[#F5F4F0] group-hover:text-white transition-colors">
            BEHIND THE BRAND
          </span>
          <span className="text-[10px] sm:text-xs font-mono font-medium text-[#8E9297] tracking-[0.2em] uppercase">
            / CINEMATIC JOURNAL
          </span>
        </a>

        {/* Right navigation on desktop */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-medium text-[#F5F4F0]">
          <a
            href="/#stories"
            onClick={(e) => {
              e.preventDefault();
              handleLink('stories');
            }}
            className={`transition-colors cursor-pointer py-1 relative ${
              activeSection === 'stories' ? 'text-[#F5F4F0]' : 'text-[#8E9297] hover:text-[#F5F4F0]'
            }`}
            title="Browse all 15 brand stories archive"
          >
            Stories Archive
            {activeSection === 'stories' && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-[#F5F4F0]" />
            )}
          </a>

          <a
            href="/#faq"
            onClick={(e) => {
              e.preventDefault();
              handleLink('faq');
            }}
            className={`transition-colors cursor-pointer py-1 relative ${
              activeSection === 'faq' ? 'text-[#F5F4F0]' : 'text-[#8E9297] hover:text-[#F5F4F0]'
            }`}
            title="Frequently Answered Questions and AEO inquiries"
          >
            Direct FAQ
            {activeSection === 'faq' && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-[#F5F4F0]" />
            )}
          </a>
          
          <a
            href="/#about"
            onClick={(e) => {
              e.preventDefault();
              handleLink('about');
            }}
            className={`transition-colors cursor-pointer py-1 relative ${
              activeSection === 'about' ? 'text-[#F5F4F0]' : 'text-[#8E9297] hover:text-[#F5F4F0]'
            }`}
            title="Editorial Manifesto and Mission"
          >
            Manifesto
            {activeSection === 'about' && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-[#F5F4F0]" />
            )}
          </a>

          <span className="text-[10px] font-mono text-[#8E9297] tracking-widest pl-3 border-l border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>VOL. 01 — {totalStoriesCount} DOSSIERS</span>
          </span>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs uppercase tracking-widest text-[#F5F4F0] px-3 py-1.5 border border-white/20 bg-[#141618] active:bg-[#1f2226]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#141618] px-5 py-4 flex flex-col gap-3">
          <button
            onClick={() => handleLink('stories')}
            className="text-left text-xs uppercase tracking-[0.18em] font-medium text-[#F5F4F0] py-2 border-b border-white/10"
          >
            Stories Archive ({totalStoriesCount})
          </button>
          <button
            onClick={() => handleLink('faq')}
            className="text-left text-xs uppercase tracking-[0.18em] font-medium text-[#F5F4F0] py-2 border-b border-white/10"
          >
            Direct FAQ (AEO)
          </button>
          <button
            onClick={() => handleLink('about')}
            className="text-left text-xs uppercase tracking-[0.18em] font-medium text-[#F5F4F0] py-2"
          >
            Manifesto / About
          </button>
        </div>
      )}
    </header>
  );
};
