import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[#D9D7D0] bg-[#FAF9F6]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#777777] mb-6">
            OUR IDEA
          </div>

          {/* Large Serif Heading */}
          <h2 className="text-3xl sm:text-5xl font-editorial font-medium text-[#111111] mb-8 leading-tight">
            “Look past the logo.”
          </h2>

          {/* Main Text */}
          <p className="text-lg sm:text-xl text-[#333333] leading-relaxed font-sans mb-12">
            “Behind every familiar logo is a decision: a price, a product, a campaign, a customer insight or a tiny psychological trigger. Behind the Brand turns those decisions into stories that are easy to understand and hard to forget.”
          </p>

          {/* Editorial Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#D9D7D0]">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#777777] mb-2">
                01 / INTENT
              </div>
              <h3 className="font-editorial text-lg text-[#111111] mb-2">
                Why It Worked
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed font-sans">
                We investigate the real tactical trade-offs and risks that built durable consumer empires.
              </p>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#777777] mb-2">
                02 / COGNITION
              </div>
              <h3 className="font-editorial text-lg text-[#111111] mb-2">
                Consumer Psychology
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed font-sans">
                How pricing thresholds, visual memory, cognitive biases and rituals shape what people buy.
              </p>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#777777] mb-2">
                03 / CLARITY
              </div>
              <h3 className="font-editorial text-lg text-[#111111] mb-2">
                Zero Jargon
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed font-sans">
                Written for college students, founders, and curious minds without corporate boardroom buzzwords.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
