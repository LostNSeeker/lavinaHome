import React, { useState } from 'react';
import type { Product } from '../types';
import { Heart, ShoppingBag, Eye, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NewArrivalsGridProps {
  products: Product[];
  wishlistIds: string[];
  isLoading?: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const NewArrivalsGrid: React.FC<NewArrivalsGridProps> = ({
  products,
  wishlistIds,
  isLoading = false,
  onToggleWishlist,
  onQuickAdd,
  onSelectProduct,
}) => {
  const { t } = useTranslation();
  const isMobileInitial = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const [isMobile, setIsMobile] = useState(isMobileInitial);
  const [visibleCount, setVisibleCount] = useState(isMobileInitial ? 5 : 15);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    const increment = isMobile ? 5 : 15;
    setTimeout(() => {
      setVisibleCount((prev) => prev + increment);
      setIsLoadingMore(false);
    }, 350);
  };

  const displayedProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-[#EDE6DC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold block mb-2 bg-[#8EBBB0]/15 w-fit px-3.5 py-1 rounded-full">
            {t('newArrivals.badge')}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#2D2B2A]">
            {t('newArrivals.title')}
          </h2>
        </div>
        <p className="text-xs text-[#9E9891] tracking-wider uppercase font-semibold">
          {t('newArrivals.showingCount', { visible: Math.min(visibleCount, products.length), total: products.length })}
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-3xl border border-[#EDE6DC] animate-pulse space-y-4 shadow-xs"
              >
                <div className="aspect-[3/4] bg-[#F7F3EB] rounded-2xl w-full" />
                <div className="h-3 bg-[#F7F3EB] rounded w-2/3" />
                <div className="h-4 bg-[#F7F3EB] rounded w-full" />
                <div className="h-4 bg-[#F7F3EB] rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="group relative bg-white p-4 rounded-3xl border border-[#EDE6DC] transition-all duration-300 hover:shadow-pillowy hover:border-[#8EBBB0]/60"
                >
                  {/* Image Box */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#F7F3EB] mb-4">
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* New badge */}
                    {product.isNewArrival && (
                      <span className="absolute top-3 left-3 bg-[#8EBBB0] text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold shadow-xs">
                        {t('newArrivals.newIn')}
                      </span>
                    )}

                    {/* Wishlist toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer shadow-xs ${
                        isWishlisted
                          ? 'bg-[#E79685] text-white'
                          : 'bg-white/90 text-[#2D2B2A] hover:bg-[#E79685] hover:text-white'
                      }`}
                    >
                      <Heart size={15} fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>

                    {/* Hover Quick Action Buttons */}
                    <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => onQuickAdd(product)}
                        className="flex-1 bg-[#E79685] hover:bg-[#D47B68] text-white py-2.5 text-[11px] uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-1.5 transition-all shadow-pillowy-coral cursor-pointer"
                      >
                        <ShoppingBag size={13} />
                        <span>{t('newArrivals.addToCart')}</span>
                      </button>
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="bg-white hover:bg-[#FDFBF7] text-[#2D2B2A] p-2.5 rounded-full transition-colors shadow-xs cursor-pointer"
                      >
                        <Eye size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-1 px-1">
                    <span className="text-[10px] text-[#8EBBB0] tracking-wider uppercase font-bold block">
                      {product.material.split('&')[0]}
                    </span>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-heading text-base text-[#2D2B2A] hover:text-[#E79685] transition-colors cursor-pointer line-clamp-1 font-medium"
                    >
                      {product.name}
                    </h3>
                    <div className="text-sm font-bold text-[#E79685]">
                      ${product.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Products Button */}
        {hasMore && !isLoading && (
          <div className="pt-14 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="bg-white hover:bg-[#8EBBB0] text-[#2D2B2A] hover:text-white border-2 border-[#8EBBB0] px-10 py-4 text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-pillowy-sage hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer"
            >
              {isLoadingMore ? (
                <>
                  <RefreshCw size={15} className="animate-spin" />
                  <span>{t('newArrivals.loadingMore')}</span>
                </>
              ) : (
                <>
                  <span>{t('newArrivals.loadMore', { count: products.length - visibleCount })}</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};



