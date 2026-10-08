import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 sm:pt-24 pb-14 sm:pb-20 border-b border-[#D9D7D0]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Eyebrow */}
        <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#777777] mb-6 sm:mb-8">
          BRAND STORIES, DECODED
        </div>

        {/* Large Headline */}
        <h1 className="editorial-hero-title font-medium text-[#111111] max-w-4xl mb-8 sm:mb-10 text-balance">
          There is always<br />
          more behind<br />
          the brand.
        </h1>

        {/* Sub-copy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-[#D9D7D0]/60">
          <p className="md:col-span-7 lg:col-span-6 text-base sm:text-lg text-[#555555] leading-relaxed font-sans">
            We unpack the stories, strategy and psychology behind the brands people see every day — without the corporate jargon.
          </p>
          <div className="md:col-span-5 lg:col-span-6 md:flex md:justify-end md:items-end">
            <div className="text-xs uppercase tracking-[0.18em] text-[#777777] font-mono">
              CURATED ARCHIVE &bull; VOL. 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
