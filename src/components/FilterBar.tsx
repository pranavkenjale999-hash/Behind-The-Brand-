import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  categories: Category[];
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredCount: number;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  filteredCount,
  totalCount,
}) => {
  return (
    <section className="py-7 border-b border-[#D9D7D0] bg-[#FAF9F6] sticky top-16 z-30 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            <span className="text-[11px] uppercase tracking-[0.22em] font-mono font-medium text-[#777777] mr-2 shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#111111]" aria-hidden="true" />
              <span>COLLECTIONS:</span>
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`text-xs uppercase tracking-wider px-3.5 py-1.5 border transition-all duration-200 cursor-pointer whitespace-nowrap font-medium ${
                      isActive
                        ? 'bg-[#111111] text-[#FAF9F6] border-[#111111] shadow-sm'
                        : 'bg-[#F5F4F0] text-[#222222] border-[#D9D7D0] hover:border-[#111111] hover:bg-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Field & Counter */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search brands, topics, keywords…"
                className="w-full text-xs font-sans tracking-wide bg-white border border-[#D9D7D0] focus:border-[#111111] px-3.5 py-2 text-[#111111] placeholder:text-[#888888] outline-none transition-colors shadow-inner"
                aria-label="Search stories"
              />
              {searchQuery ? (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#777777] hover:text-[#111111] cursor-pointer px-1"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              ) : (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#AAAAAA] pointer-events-none">
                  ⌘K
                </span>
              )}
            </div>

            <div className="text-[11px] font-mono text-[#777777] uppercase tracking-wider shrink-0 whitespace-nowrap bg-[#ECEAE5] px-2.5 py-1.5 border border-[#D9D7D0]">
              <span className="text-[#111111] font-semibold">{filteredCount}</span> OF {totalCount} STORIES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
