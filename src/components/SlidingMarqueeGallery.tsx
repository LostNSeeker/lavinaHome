import React from 'react';
import type { Product } from '../types';
import { TiltCard } from './TiltCard';
import { useTranslation } from 'react-i18next';

interface SlidingMarqueeGalleryProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SlidingMarqueeGallery: React.FC<SlidingMarqueeGalleryProps> = ({
  products,
  onSelectProduct,
}) => {
  const { t } = useTranslation();
  // Duplicate array to create seamless marquee loop
  const marqueeItems = [...products, ...products, ...products];

  return (
    <section className="py-20 bg-[#FDFBF7] overflow-hidden border-b border-[#EDE6DC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8 text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold block bg-[#8EBBB0]/15 w-fit mx-auto px-3.5 py-1 rounded-full">
          {t('marquee.badge')}
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#2D2B2A]">
          {t('marquee.title')}
        </h2>
      </div>

      {/* Infinite Horizontal Sliding Marquee */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-[marquee_90s_linear_infinite] hover:[animation-play-state:paused] shrink-0">
          {marqueeItems.map((prod, index) => (
            <TiltCard
              key={`${prod.id}-${index}`}
              onClick={() => onSelectProduct(prod)}
              className="w-[230px] sm:w-[270px] shrink-0 bg-white p-3.5 rounded-3xl border border-[#EDE6DC] cursor-pointer shadow-pillowy hover:border-[#8EBBB0]/50"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#F7F3EB] mb-3">
                <img
                  src={prod.primaryImage}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#8EBBB0] font-bold block mb-0.5">
                {prod.categoryLabel}
              </span>
              <h3 className="font-heading text-sm text-[#2D2B2A] truncate font-medium">
                {prod.name}
              </h3>
              <span className="text-xs font-bold text-[#E79685]">
                ${prod.price.toLocaleString()}
              </span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};


