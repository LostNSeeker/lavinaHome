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
  const isKids = storeMode === 'kids';

  return (
    <section id="featured-collections" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium block mb-2">
            {isKids ? t('collections.badge', 'Zauberhafte Welten') : t('generalCollections.badge', 'Featured Collections')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2B2B2B]">
            {isKids ? t('collections.title', 'Entdecke Kinderteppiche') : t('generalCollections.title', 'Explore Collections')}
          </h2>
        </div>
        <p className="text-xs text-[#666666] tracking-widest uppercase max-w-xs font-light">
          {isKids
            ? t('collections.subtitle', '100% non-toxic & kid-safe for cozy playrooms.')
            : t('generalCollections.subtitle', 'Pure natural fibers and certified textiles for a healthy, serene home.')}
        </p>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 pt-2">
          {collections.map((item) => {
            const prefix = isKids ? 'collections' : 'generalCollections';
            const translatedTitle = t(`${prefix}.categories.${item.id}.title`, item.title);
            const translatedTagline = t(`${prefix}.categories.${item.id}.tagline`, item.tagline);
            const collectionLabel = isKids ? t('collections.collection', 'Kollektion') : t('generalCollections.collection', 'Collection');

            return (
              <TiltCard
                key={item.id}
                onClick={() => onSelectCategory(item.categorySlug)}
                className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[380px] group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[#EFE7DC] mb-5">
                  <img
                    src={item.image}
                    alt={translatedTitle}
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
                    {collectionLabel}
                  </span>
                  <h3 className="font-serif text-2xl text-[#2B2B2B] group-hover:text-[#B96A3C] transition-colors mb-1">
                    {translatedTitle}
                  </h3>
                  <p className="text-xs text-[#666666] font-light leading-relaxed line-clamp-2">
                    {translatedTagline}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
