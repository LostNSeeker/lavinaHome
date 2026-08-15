import React from 'react';
import type { Product } from '../types';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BestSellersSliderProps {
  products: Product[];
  wishlistIds: string[];
  isLoading?: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const BestSellersSlider: React.FC<BestSellersSliderProps> = ({
  products,
  wishlistIds,
  isLoading = false,
  onToggleWishlist,
  onQuickAdd,
  onSelectProduct,
}) => {
  const { t } = useTranslation();
  const bestSellers = (products.filter((p) => p.isBestSeller).length > 0 ? products.filter((p) => p.isBestSeller) : products).slice(0, 8);

  return (
    <section id="best-sellers" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#E79685] font-semibold block mb-2 bg-[#E79685]/15 w-fit px-3.5 py-1 rounded-full">
            {t('bestSellers.badge')}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#2D2B2A]">
            {t('bestSellers.title')}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#8EBBB0] font-semibold tracking-wider uppercase">
          <span>{t('bestSellers.swipeHint')}</span>
          <span>→</span>
        </div>
      </div>

      {/* Slider Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {isLoading ? (
          <div className="flex gap-6 overflow-hidden pb-8 pt-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[270px] sm:w-[320px] md:w-[350px] bg-white p-4 rounded-3xl border border-[#EDE6DC] animate-pulse space-y-4 shadow-xs"
              >
                <div className="aspect-[3/4] bg-[#F7F3EB] rounded-2xl w-full" />
                <div className="h-3 bg-[#F7F3EB] rounded w-2/3" />
                <div className="h-4 bg-[#F7F3EB] rounded w-full" />
                <div className="h-4 bg-[#F7F3EB] rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 pt-2">
            {bestSellers.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="snap-start shrink-0 w-[270px] sm:w-[320px] md:w-[350px] group bg-white p-4 rounded-3xl border border-[#EDE6DC] transition-all duration-300 hover:shadow-pillowy hover:border-[#8EBBB0]/60"
                >
                  {/* Image Swap Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F3EB] rounded-2xl p-2.5 sm:p-3 flex items-center justify-center mb-4">
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/LI-112.jpg';
                      }}
                      className="w-full h-full object-contain transition-all duration-700 group-hover:opacity-0 group-hover:scale-105 drop-shadow-xs"
                      loading="lazy"
                    />
                    <img
                      src={product.secondaryImage || product.primaryImage}
                      alt={`${product.name} secondary view`}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/LI-112.jpg';
                      }}
                      className="absolute inset-0 w-full h-full object-contain p-2.5 sm:p-3 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 drop-shadow-xs"
                      loading="lazy"
                    />

                    {/* Top Badge */}
                    <span className="absolute top-3 left-3 bg-[#8EBBB0] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {t('bestSellers.kidSafe')}
                    </span>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 z-10 cursor-pointer shadow-xs ${
                        isWishlisted
                          ? 'bg-[#E79685] text-white'
                          : 'bg-white/90 text-[#2D2B2A] hover:bg-[#E79685] hover:text-white'
                      }`}
                      title={isWishlisted ? t('cart.remove') : t('nav.wishlist')}
                    >
                      <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>

                    {/* Quick Action Overlay */}
                    <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <button
                        onClick={() => onQuickAdd(product)}
                        className="flex-1 bg-[#E79685] hover:bg-[#D47B68] text-white py-3 px-3 text-xs uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-pillowy-coral cursor-pointer"
                      >
                        <ShoppingBag size={14} />
                        <span>{t('bestSellers.quickAdd')}</span>
                      </button>
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="bg-white hover:bg-[#FDFBF7] text-[#2D2B2A] p-3 rounded-full transition-colors shadow-xs cursor-pointer"
                        title={t('bestSellers.viewDetails')}
                      >
                        <Eye size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Product Meta */}
                  <div className="space-y-1 px-1">
                    <div className="flex items-center justify-between text-[11px] text-[#9E9891]">
                      <span className="uppercase tracking-wider font-semibold text-[#8EBBB0]">{product.categoryLabel}</span>
                      <div className="flex items-center gap-1 text-[#E5B769]">
                        <Star size={13} fill="currentColor" />
                        <span className="font-bold text-[#2D2B2A]">{product.rating}</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-heading text-lg text-[#2D2B2A] hover:text-[#E79685] transition-colors cursor-pointer line-clamp-1 font-medium"
                    >
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-base font-bold text-[#E79685]">
                        €{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#9E9891] line-through font-normal">
                          €{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};



