import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-14 bg-[#0C0D0E] text-[#F5F4F0] border-t border-white/10">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-6">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F5F4F0] mb-3">
              BEHIND THE BRAND
            </div>
            <p className="text-xs text-[#8E9297] leading-relaxed max-w-sm font-sans font-light">
              An independent digital journal examining the commercial architecture, pricing strategy, and cultural psychology of modern enterprise.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E9297] mb-3">
              FEATURED DOSSIERS
            </div>
            <ul className="text-xs space-y-2 text-[#B3B7BD] font-sans">
              <li>
                <a
                  href="/blog/apple-branding-strategy"
                  className="hover:text-[#F5F4F0] underline-offset-2 hover:underline transition-colors"
                  title="Apple Branding Strategy: How It Builds a Premium Image"
                >
                  Apple Branding Strategy Case Study
                </a>
              </li>
              <li>
                <a
                  href="/blog/nike-marketing-strategy"
                  className="hover:text-[#F5F4F0] underline-offset-2 hover:underline transition-colors"
                  title="Nike Marketing Strategy: The Power of Emotional Branding"
                >
                  Nike Marketing Strategy Case Study
                </a>
              </li>
              <li>
                <a
                  href="/blog/zudio-marketing-strategy"
                  className="hover:text-[#F5F4F0] underline-offset-2 hover:underline transition-colors"
                  title="Zudio Marketing Strategy: Affordable Fashion Explained"
                >
                  Zudio Marketing Strategy Case Study
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E9297] mb-3">
              QUICK NAVIGATION
            </div>
            <ul className="text-xs space-y-2 text-[#B3B7BD] font-sans">
              <li>
                <a
                  href="/#stories"
                  className="hover:text-[#F5F4F0] underline-offset-2 hover:underline transition-colors"
                  title="All 15 Brand Strategy Dossiers"
                >
                  15 Brand Strategy Dossiers
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="hover:text-[#F5F4F0] underline-offset-2 hover:underline transition-colors"
                  title="Direct Answers & Brand FAQ"
                >
                  Direct Brand Inquiries & FAQ
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:text-[#F5F4F0] underline-offset-2 hover:underline transition-colors"
                  title="Editorial Manifesto and Mission"
                >
                  Editorial Manifesto & Methodology
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-[#8E9297] uppercase tracking-[0.2em]">
          <div>
            BEHIND THE BRAND &copy; 2026 &bull; ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-4 text-[#8E9297]">
            <span>DESIGNED FOR CURIOUS MINDS</span>
            <span aria-hidden="true">&bull;</span>
            <span>NO JARGON</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
