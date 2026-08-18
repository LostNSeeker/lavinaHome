import React from 'react';
import type { CollectionCategory, StoreMode } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { useTranslation } from 'react-i18next';

interface FeaturedCollectionsProps {
  collections: CollectionCategory[];
  storeMode?: StoreMode;
  onSelectCategory: (slug: string) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  collections,
  storeMode = 'general',
  onSelectCategory,
}) => {
  const { t } = useTranslation();

  return (
    <section id="featured-collections" className="py-24 bg-[#FAF8F5] border-b border-[#ECE8E2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium block mb-2">
            {storeMode === 'kids' ? t('collections.badge', 'Zauberhafte Welten') : 'Ausgewählte Kollektionen'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2B2B2B]">
            {storeMode === 'kids' ? t('collections.title', 'Entdecke Kinderteppiche') : 'Entdecke Kollektionen'}
          </h2>
        </div>
        <p className="text-xs text-[#666666] tracking-widest uppercase max-w-xs font-light">
          {storeMode === 'kids'
            ? '100% schadstoffgeprüft & kinderfreundlich für kuschelige Spiel- und Wohlfühlräume.'
            : 'Reine Naturfasern und geprüfte Textilien für ein gesundes, behagliches Zuhause.'}
        </p>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 pt-2">
          {collections.map((item) => (
            <TiltCard
              key={item.id}
              onClick={() => onSelectCategory(item.categorySlug)}
              className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[380px] group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[#EFE7DC] mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#2B2B2B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full text-[#2B2B2B] group-hover:bg-[#B96A3C] group-hover:text-white transition-all duration-300 shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Text Info */}
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8B8B8B] font-medium block mb-1">
                  Kollektion
                </span>
                <h3 className="font-serif text-2xl text-[#2B2B2B] group-hover:text-[#B96A3C] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#666666] font-light leading-relaxed line-clamp-2">
                  {item.tagline}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
