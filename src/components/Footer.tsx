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
              DOSSIER ARCHIVE
            </div>
            <ul className="text-xs space-y-2 text-[#B3B7BD] font-sans">
              <li>15 Analytical Brand Case Studies</li>
              <li>Academic SEO Research Project</li>
              <li>Published October 2026</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E9297] mb-3">
              CURATION PILLARS
            </div>
            <p className="text-xs text-[#8E9297] leading-relaxed font-sans">
              Strategy &bull; Psychology &bull; Technology &bull; India Retail &bull; Brand Architecture
            </p>
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
