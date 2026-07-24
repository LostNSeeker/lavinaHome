import React from 'react';
import type { Product } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2B2B2B]/50 backdrop-blur-xs transition-opacity animate-fade-up">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#ECE8E2] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#ECE8E2] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart size={20} className="text-[#B96A3C]" fill="#B96A3C" />
              <h2 className="font-serif text-2xl text-[#2B2B2B]">Saved Sanctuary Wishlist</h2>
              <span className="bg-[#EFE7DC] text-[#B96A3C] text-xs font-medium px-2.5 py-0.5 rounded-full">
                {wishlistProducts.length}
              </span>
            </div>
            <button onClick={onClose} className="p-2 text-[#2B2B2B] hover:text-[#B96A3C] transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F4EEE6] flex items-center justify-center mx-auto text-[#B96A3C]">
                  <Heart size={24} />
                </div>
                <h3 className="font-serif text-xl text-[#2B2B2B]">No saved pieces yet</h3>
                <p className="text-xs text-[#666666] max-w-xs mx-auto font-light">
                  Click the heart icon on any carpet or decor piece to curate your personal wishlist.
                </p>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 pb-6 border-b border-[#ECE8E2] last:border-b-0"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="w-20 h-24 object-cover rounded-[2px] bg-[#EFE7DC] cursor-pointer"
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                  />

                  <div className="flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase tracking-wider text-[#8B8B8B] font-medium">
                          {product.categoryLabel}
                        </span>
                        <button
                          onClick={() => onRemoveWishlist(product)}
                          className="text-[#8B8B8B] hover:text-[#B96A3C] transition-colors p-1"
                          title="Remove"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <h4
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="font-serif text-base text-[#2B2B2B] hover:text-[#B96A3C] transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h4>
                      <span className="text-sm font-medium text-[#2B2B2B]">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => onQuickAdd(product)}
                      className="w-full bg-[#69705A] hover:bg-[#505744] text-white py-2 text-[10px] uppercase tracking-widest font-medium rounded-[2px] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag size={12} />
                      <span>Move to Cart</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-[#ECE8E2] bg-[#F4EEE6] text-center text-xs text-[#8B8B8B] font-light">
            Items saved in your wishlist remain available for 30 days.
          </div>

        </div>
      </div>
    </div>
  );
};
