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
    <section className="py-8 border-b border-[#D9D7D0]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-[#777777] mr-2 shrink-0">
              FILTERS:
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`text-xs uppercase tracking-wider px-3.5 py-1.5 border transition-all duration-150 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#111111] text-[#FAF9F6] border-[#111111]'
                        : 'bg-transparent text-[#111111] border-[#111111] hover:bg-[#ECEAE5]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Field & Counter */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full lg:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search stories…"
                className="w-full text-xs font-sans tracking-wide bg-[#FAF9F6] border border-[#D9D7D0] focus:border-[#111111] px-3.5 py-2 text-[#111111] placeholder:text-[#777777] outline-none transition-colors"
                aria-label="Search stories"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#777777] hover:text-[#111111] cursor-pointer px-1"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="text-[11px] font-mono text-[#777777] uppercase tracking-wider shrink-0 whitespace-nowrap">
              {filteredCount} OF {totalCount}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
