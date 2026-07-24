import React from 'react';
import type { Product } from '../types';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

interface NewArrivalsGridProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const NewArrivalsGrid: React.FC<NewArrivalsGridProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickAdd,
  onSelectProduct,
}) => {
  return (
    <section className="py-24 bg-[#FAF8F5] border-b border-[#ECE8E2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium block mb-2">
            Fresh Off The Looms
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2B2B2B]">
            New Arrivals
          </h2>
        </div>
        <p className="text-xs text-[#8B8B8B] tracking-widest uppercase font-medium">
          Season 2026 Collection
        </p>
      </div>

      {/* Grid 4 columns desktop, 2 columns mobile */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="group relative bg-[#F4EEE6]/60 p-4 rounded-[2px] border border-[#ECE8E2] transition-all duration-300 hover:border-[#D9C5A7]"
              >
                {/* Image Box */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-[#EFE7DC] mb-4">
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* New badge */}
                  {product.isNewArrival && (
                    <span className="absolute top-3 left-3 bg-[#69705A] text-white text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-[2px] font-medium">
                      New Arrival
                    </span>
                  )}

                  {/* Wishlist toggle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                      isWishlisted
                        ? 'bg-[#B96A3C] text-white'
                        : 'bg-white/80 text-[#2B2B2B] hover:bg-white hover:text-[#B96A3C]'
                    }`}
                  >
                    <Heart size={15} fill={isWishlisted ? 'currentColor' : 'none'} />
                  </button>

                  {/* Hover Quick Action Buttons */}
                  <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => onQuickAdd(product)}
                      className="flex-1 bg-[#B96A3C] hover:bg-[#A75D36] text-white py-2.5 text-[10px] uppercase tracking-widest font-medium rounded-[2px] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag size={13} />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="bg-white hover:bg-[#FAF8F5] text-[#2B2B2B] p-2.5 rounded-[2px] transition-colors"
                    >
                      <Eye size={13} />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <span className="text-[10px] text-[#8B8B8B] tracking-wider uppercase font-medium block">
                    {product.material.split('&')[0]}
                  </span>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-lg text-[#2B2B2B] hover:text-[#B96A3C] transition-colors cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <div className="text-sm font-medium text-[#2B2B2B]">
                    ${product.price.toLocaleString()}
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
