import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is Behind the Brand?",
    answer: "Behind the Brand is an independent editorial publication and business archive dedicated to decoding the marketing strategies, brand positioning, pricing power, and consumer psychology behind iconic global and Indian companies.",
    category: "Publication"
  },
  {
    question: "What is Apple's core branding strategy?",
    answer: "Apple's branding strategy is built on radical simplicity, emotional brand positioning, and obsessive design consistency across software, hardware, retail, and packaging, turning functional technology into an aspirational lifestyle identity.",
    category: "Apple"
  },
  {
    question: "Why is Nike's marketing strategy effective?",
    answer: "Nike's marketing strategy succeeds by prioritizing emotional storytelling and the universal hero's journey over technical shoe specifications, empowering consumers to view themselves as everyday athletes through its 'Just Do It' philosophy.",
    category: "Nike"
  },
  {
    question: "How does Zudio make fashion affordable in India?",
    answer: "Zudio delivers affordable fast fashion by leveraging localized volume supply chains, zero mainstream television advertising spend, rapid micro-collection turnover, and pricing anchored below ₹999 under Trent's retail leadership.",
    category: "Zudio"
  },
  {
    question: "Can I access each brand case study via a direct URL?",
    answer: "Yes. Every dossier in our 15-brand archive has its own permanent, direct URL (such as /blog/apple-branding-strategy, /blog/nike-marketing-strategy, and /blog/zudio-marketing-strategy) with complete executive takeaways and structured analysis.",
    category: "Navigation"
  },
  {
    question: "How are the 15 brand case studies curated?",
    answer: "Our editorial team selects benchmark market leaders and category disruptors across consumer electronics, sports, fast fashion, modular retail, and digital platforms that demonstrate masterclasses in brand equity and pricing psychology.",
    category: "Editorial"
  }
];

export const HomepageFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-[#D9D7D0] bg-[#FAF9F6]">
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-[#D9D7D0]">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#777777] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#111111]" aria-hidden="true" />
            <span>ANSWER ENGINE OPTIMIZATION &bull; DIRECT ANSWERS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-medium text-[#111111] mb-3">
            Frequently Answered Brand Queries
          </h2>
          <p className="text-sm sm:text-base text-[#666666] font-sans max-w-2xl leading-relaxed">
            Concise, factual insights into our brand analysis methodology, strategic case study coverage, and consumer psychology frameworks.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[#D9D7D0] border-y border-[#D9D7D0]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors hover:bg-white/40">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#777777] mt-1 shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#888888] block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-editorial font-medium text-[#111111] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`font-mono text-lg text-[#111111] transform transition-transform duration-300 shrink-0 ml-2 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-8 sm:pl-10 pr-4">
                    <p className="text-sm sm:text-base text-[#444444] font-sans leading-relaxed border-l-2 border-[#111111]/30 pl-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
