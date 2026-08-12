import React from 'react';
import type { CollectionCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { useTranslation } from 'react-i18next';

interface FeaturedCollectionsProps {
  collections: CollectionCategory[];
  onSelectCategory: (slug: string) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  collections,
  onSelectCategory,
}) => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-[#EDE6DC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold block mb-2 bg-[#8EBBB0]/15 w-fit px-3 py-1 rounded-full">
            {t('collections.badge')}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#2D2B2A]">
            {t('collections.title')}
          </h2>
        </div>
        <p className="text-xs text-[#6B6661] tracking-wide max-w-xs font-normal">
          {t('collections.subtitle')}
        </p>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 pt-2">
          {collections.map((item) => (
            <TiltCard
              key={item.id}
              onClick={() => onSelectCategory(item.categorySlug)}
              className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[380px] group cursor-pointer bg-white p-4 rounded-3xl border border-[#EDE6DC] shadow-pillowy hover:border-[#8EBBB0]/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F7F3EB] mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#2D2B2A]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-full text-[#2D2B2A] group-hover:bg-[#E79685] group-hover:text-white transition-all duration-300 shadow-pillowy translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Text Info */}
              <div className="px-1">
                <span className="text-[10px] tracking-wider uppercase text-[#8EBBB0] font-bold block mb-1">
                  {t('collections.collection')}
                </span>
                <h3 className="font-heading text-xl text-[#2D2B2A] group-hover:text-[#E79685] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B6661] font-normal leading-relaxed line-clamp-2">
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


