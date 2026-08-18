import React, { useRef } from 'react';
import type { BrandCategory, StoreMode } from '../types';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BrandCategoriesShowcaseProps {
  categories: BrandCategory[];
  storeMode?: StoreMode;
  selectedCategorySlug?: string | null;
  onSelectCategory: (categorySlug: string) => void;
}

export const BrandCategoriesShowcase: React.FC<BrandCategoriesShowcaseProps> = ({
  categories,
  selectedCategorySlug,
  onSelectCategory,
}) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -440 : 440;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="brand-categories" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D87093]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4A7C59]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE7DC] border border-[#D9C5A7]/60 text-[#505744] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <Sparkles size={14} className="text-[#B96A3C]" />
              <span>{isEn ? 'Official Brand Sanctuaries' : 'Offizielle Marken- & Themenwelten'}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2B2B2B] tracking-tight">
              {isEn ? 'Explore Our Licensed Brand Collections' : 'Entdecke unsere Kollektionen & Marken'}
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#666666] max-w-2xl font-light leading-relaxed">
              {isEn
                ? 'Discover 145 certified non-toxic designer rugs from your favorite official brands and licensed character universes.'
                : '145 zertifizierte, schadstofffreie Designer-Teppiche aus deinen liebsten offiziellen Marken- und Kinderwelten. Klicke auf eine Kollektion, um passende Modelle zu entdecken.'}
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-[#D9C5A7] bg-white hover:bg-[#EFE7DC] text-[#2B2B2B] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-[#D9C5A7] bg-white hover:bg-[#EFE7DC] text-[#2B2B2B] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel with Official Brand Artwork as Card Centerpiece */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 pt-2 scroll-smooth"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategorySlug === cat.slug;
            const displayName = isEn && cat.nameEn ? cat.nameEn : cat.name;
            const displayTagline = isEn && cat.taglineEn ? cat.taglineEn : cat.tagline;
            const officialBrandVisual = cat.slug === 'pferdefreunde' ? '/Pferdefreunde1.jpg' : cat.logo;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className={`snap-start shrink-0 w-[290px] sm:w-[330px] md:w-[360px] group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-white transition-all duration-500 flex flex-col shadow-sm hover:shadow-xl border ${
                  isSelected
                    ? 'border-[#B96A3C] ring-2 ring-[#B96A3C]/40 shadow-lg scale-[1.02]'
                    : 'border-[#ECE8E2] hover:border-[#D9C5A7]'
                }`}
              >
                {/* Official Brand Logo / Artwork Hero Container */}
                <div className="relative h-48 md:h-52 w-full bg-[#FAF8F5] border-b border-[#ECE8E2] p-6 flex items-center justify-center overflow-hidden">
                  {/* Subtle Theme Ambient Tint */}
                  <div
                    className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
                    style={{ backgroundColor: cat.themeColor }}
                  />

                  {/* Official Logo / Artwork */}
                  <img
                    src={officialBrandVisual}
                    alt={`${displayName} Official Logo`}
                    className="max-h-28 max-w-[220px] object-contain transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-xs"
                    loading="lazy"
                  />

                  {/* Top-Right Item Count Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[#505744] text-[11px] font-semibold border border-[#ECE8E2] shadow-2xs">
                    {cat.itemCount} {isEn ? 'Designs' : 'Modelle'}
                  </div>

                  {/* Active Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-3.5 left-3.5 bg-[#B96A3C] text-white px-2.5 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                      <CheckCircle2 size={12} />
                      <span>{isEn ? 'Active' : 'Aktiv'}</span>
                    </div>
                  )}
                </div>

                {/* Card Body & Description */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-normal text-[#2B2B2B] group-hover:text-[#B96A3C] transition-colors mb-1.5 flex items-center justify-between">
                      <span>{displayName}</span>
                    </h3>
                    <p className="text-xs text-[#505744] font-medium tracking-wide mb-2 line-clamp-1">
                      {displayTagline}
                    </p>
                    <p className="text-xs text-[#666666] font-light leading-relaxed line-clamp-2">
                      {isEn && cat.descriptionEn ? cat.descriptionEn : cat.description}
                    </p>
                  </div>

                  {/* CTA Action Footer */}
                  <div className="pt-4 mt-4 border-t border-[#F0ECE1] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#B96A3C] group-hover:translate-x-1 transition-all">
                    <span>{isEn ? 'Explore Collection' : 'Kollektion entdecken'}</span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EFE7DC] group-hover:bg-[#B96A3C] group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowRight size={14} />
                    </div>
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
