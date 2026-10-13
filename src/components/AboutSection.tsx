import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const AboutSection: React.FC = () => {
  const { ref: headerRef, isRevealed: isHeaderRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const { ref: pillarsRef, isRevealed: isPillarsRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 bg-[#0C0D0E] text-[#F5F4F0] border-t border-b border-white/10">
      {/* Cinematic subtle glow & film grain */}
      <div 
        className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-gradient-to-r from-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />
      <div className="absolute inset-0 film-grain opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="max-w-4xl">
          {/* Header Block with Scroll Reveal */}
          <div 
            ref={headerRef}
            className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
              isHeaderRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Eyebrow */}
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-mono text-[#8E9297] mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#F5F4F0] shadow-[0_0_8px_rgba(255,255,255,0.8)]" aria-hidden="true" />
              <span>THE EDITORIAL MANIFESTO</span>
            </div>

            {/* Large Serif Heading */}
            <h2 className="text-4xl sm:text-6xl font-editorial font-medium text-[#F5F4F0] mb-8 leading-[1.05] tracking-tight">
              “Look past the logo. Understand the motive.”
            </h2>

            {/* Main Text */}
            <p className="text-lg sm:text-2xl text-[#B3B7BD] leading-relaxed font-sans font-light mb-14">
              Behind every iconic logo in modern society is a deliberate human choice: an engineered price threshold, a supply-chain trade-off, a psychological ritual, or a cultural vulnerability. Behind the Brand decodes those mechanics into cinematic essays that inform, challenge, and endure.
            </p>
          </div>

          {/* Editorial Pillars with Staggered Scroll Reveal */}
          <div 
            ref={pillarsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/10"
          >
            <div 
              style={{ transitionDelay: isPillarsRevealed ? '0ms' : '0ms' }}
              className={`p-6 bg-white/[0.02] border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/30 hover:bg-white/[0.04] ${
                isPillarsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8E9297] mb-3 flex items-center justify-between">
                <span>01 / MOTIVE</span>
                <span className="text-white/20">■</span>
              </div>
              <h3 className="font-editorial text-xl text-[#F5F4F0] mb-3">
                Why It Actually Worked
              </h3>
              <p className="text-sm text-[#8E9297] leading-relaxed font-sans font-light">
                We investigate the real tactical trade-offs, financial models, and cultural risks that transformed commercial products into enduring consumer rituals.
              </p>
            </div>

            <div 
              style={{ transitionDelay: isPillarsRevealed ? '120ms' : '0ms' }}
              className={`p-6 bg-white/[0.02] border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/30 hover:bg-white/[0.04] ${
                isPillarsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8E9297] mb-3 flex items-center justify-between">
                <span>02 / COGNITION</span>
                <span className="text-white/20">■</span>
              </div>
              <h3 className="font-editorial text-xl text-[#F5F4F0] mb-3">
                Consumer Psychology
              </h3>
              <p className="text-sm text-[#8E9297] leading-relaxed font-sans font-light">
                How pricing heuristics, anchoring effects, visual identity memory, and sociological signaling quietly guide what people purchase and defend.
              </p>
            </div>

            <div 
              style={{ transitionDelay: isPillarsRevealed ? '240ms' : '0ms' }}
              className={`p-6 bg-white/[0.02] border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/30 hover:bg-white/[0.04] ${
                isPillarsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8E9297] mb-3 flex items-center justify-between">
                <span>03 / CLARITY</span>
                <span className="text-white/20">■</span>
              </div>
              <h3 className="font-editorial text-xl text-[#F5F4F0] mb-3">
                Zero Jargon
              </h3>
              <p className="text-sm text-[#8E9297] leading-relaxed font-sans font-light">
                Written for students, builders, and curious thinkers. Every insight is articulated with precision, historical context, and no boardroom buzzwords.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
