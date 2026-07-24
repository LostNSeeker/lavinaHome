import React from 'react';
import type { Product } from '../types';
import { TiltCard } from './TiltCard';

interface SlidingMarqueeGalleryProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SlidingMarqueeGallery: React.FC<SlidingMarqueeGalleryProps> = ({
  products,
  onSelectProduct,
}) => {
  // Duplicate array to create seamless marquee loop
  const marqueeItems = [...products, ...products, ...products];

  return (
    <section className="py-20 bg-[#F4EEE6] overflow-hidden border-b border-[#ECE8E2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.35em] text-[#69705A] font-semibold block">
          Continuous Animated Gallery
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2B2B2B]">
          Artisan Craftsmanship in Motion
        </h2>
      </div>

      {/* Infinite Horizontal Sliding Marquee */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F4EEE6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F4EEE6] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] shrink-0">
          {marqueeItems.map((prod, index) => (
            <TiltCard
              key={`${prod.id}-${index}`}
              onClick={() => onSelectProduct(prod)}
              className="w-[240px] sm:w-[280px] shrink-0 bg-[#FAF8F5] p-3 rounded-[2px] border border-[#ECE8E2] cursor-pointer shadow-xs"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[2px] bg-[#EFE7DC] mb-3">
                <img
                  src={prod.primaryImage}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#8B8B8B] font-medium block">
                {prod.categoryLabel}
              </span>
              <h3 className="font-serif text-base text-[#2B2B2B] truncate">
                {prod.name}
              </h3>
              <span className="text-xs font-semibold text-[#B96A3C]">
                ${prod.price.toLocaleString()}
              </span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
