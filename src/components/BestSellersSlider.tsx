import React from 'react';
import type { Product } from '../types';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';

interface BestSellersSliderProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const BestSellersSlider: React.FC<BestSellersSliderProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickAdd,
  onSelectProduct,
}) => {
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <section className="py-24 bg-[#F4EEE6]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium block mb-2">
            Most Loved Designs
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2B2B2B]">
            Best Sellers
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#8B8B8B] tracking-widest uppercase font-medium">
          <span>Swipe or Scroll</span>
          <span>→</span>
        </div>
      </div>

      {/* Slider Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 pt-2">
          {bestSellers.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="snap-start shrink-0 w-[260px] sm:w-[320px] md:w-[360px] group bg-[#FAF8F5] p-4 rounded-[2px] border border-[#ECE8E2] transition-all duration-300 hover:shadow-xs"
              >
                {/* Image Swap Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EFE7DC] rounded-[2px] mb-4">
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                    loading="lazy"
                  />
                  <img
                    src={product.secondaryImage}
                    alt={`${product.name} secondary view`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 z-10 ${
                      isWishlisted
                        ? 'bg-[#B96A3C] text-white'
                        : 'bg-white/80 text-[#2B2B2B] hover:bg-white hover:text-[#B96A3C]'
                    }`}
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                  </button>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={() => onQuickAdd(product)}
                      className="flex-1 bg-[#2B2B2B]/90 hover:bg-[#B96A3C] text-white py-3 px-3 text-[11px] uppercase tracking-wider font-medium rounded-[2px] flex items-center justify-center gap-2 transition-colors"
                    >
                      <ShoppingBag size={14} />
                      <span>Quick Add</span>
                    </button>
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="bg-white/90 hover:bg-white text-[#2B2B2B] p-3 rounded-[2px] transition-colors"
                      title="View details"
                    >
                      <Eye size={14} />
                    </button>
                  </div>
                </div>

                {/* Product Meta */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-[#8B8B8B]">
                    <span className="uppercase tracking-wider font-medium">{product.categoryLabel}</span>
                    <div className="flex items-center gap-1 text-[#C37A4A]">
                      <Star size={12} fill="currentColor" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-lg text-[#2B2B2B] hover:text-[#B96A3C] transition-colors cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-sm font-medium text-[#2B2B2B]">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#8B8B8B] line-through font-light">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
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
