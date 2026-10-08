import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-[#F5F4F0] border-t border-[#D9D7D0]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left */}
        <div className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#111111]">
          BEHIND THE BRAND &copy; 2026
        </div>

        {/* Right */}
        <div className="text-xs uppercase tracking-[0.25em] font-mono text-[#777777]">
          BRANDS / BUSINESS / CULTURE
        </div>
      </div>
    </footer>
  );
};
