import React from 'react';
import type { Product } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveWishlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveWishlist,
  onSelectProduct,
  onQuickAdd,
}) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2D2B2A]/50 backdrop-blur-xs transition-opacity animate-fade-up">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] border-l border-[#EDE6DC] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EDE6DC] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart size={20} className="text-[#E79685]" fill="#E79685" />
              <h2 className="font-heading text-2xl text-[#2D2B2A] font-medium">{t('wishlist.title')}</h2>
              <span className="bg-[#E79685]/15 text-[#E79685] text-xs font-bold px-3 py-1 rounded-full">
                {wishlistProducts.length}
              </span>
            </div>
            <button onClick={onClose} className="p-2 text-[#2D2B2A] hover:text-[#E79685] transition-colors rounded-full hover:bg-white cursor-pointer">
              <X size={20} />
            </button>
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E79685]/15 flex items-center justify-center mx-auto text-[#E79685]">
                  <Heart size={28} className="text-[#E79685]" />
                </div>
                <h3 className="font-heading text-xl text-[#2D2B2A] font-medium">{t('wishlist.emptyTitle')}</h3>
                <p className="text-xs text-[#6B6661] max-w-xs mx-auto font-normal">
                  {t('wishlist.emptySubtitle')}
                </p>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#EDE6DC] shadow-xs"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/LI-112.jpg';
                    }}
                    className="w-20 h-24 object-contain p-1 rounded-xl bg-[#F7F3EB] border border-[#EDE6DC] cursor-pointer"
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                  />

                  <div className="flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase tracking-wider text-[#8EBBB0] font-bold">
                          {product.categoryLabel}
                        </span>
                        <button
                          onClick={() => onRemoveWishlist(product)}
                          className="text-[#9E9891] hover:text-[#E79685] transition-colors p-1 cursor-pointer"
                          title={t('cart.remove')}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <h4
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="font-heading text-sm text-[#2D2B2A] hover:text-[#E79685] transition-colors cursor-pointer line-clamp-1 font-medium"
                      >
                        {product.name}
                      </h4>
                      <span className="text-sm font-bold text-[#E79685]">
                        €{product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => onQuickAdd(product)}
                      className="w-full bg-[#8EBBB0] hover:bg-[#6C9F93] text-white py-2 text-xs uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-1.5 transition-all shadow-pillowy-sage cursor-pointer"
                    >
                      <ShoppingBag size={12} />
                      <span>{t('wishlist.moveToCart')}</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-[#EDE6DC] bg-white text-center text-xs text-[#9E9891] font-normal">
            {t('wishlist.retentionNote')}
          </div>

        </div>
      </div>
    </div>
  );
};


