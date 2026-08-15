import React from 'react';
import type { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 1000;
  const progressPercentage = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2D2B2A]/50 backdrop-blur-xs transition-opacity animate-fade-up">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] border-l border-[#EDE6DC] shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-[#EDE6DC] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="font-heading text-2xl text-[#2D2B2A] font-medium">{t('cart.title')}</h2>
              <span className="bg-[#8EBBB0]/15 text-[#8EBBB0] text-xs font-bold px-3 py-1 rounded-full">
                {t('cart.itemsCount', { count: cartItems.reduce((acc, item) => acc + item.quantity, 0) })}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#2D2B2A] hover:text-[#E79685] transition-colors rounded-full hover:bg-white cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-white px-6 py-4 border-b border-[#EDE6DC]">
            <div className="flex items-center gap-2 text-xs text-[#6B6661] font-medium mb-2">
              <Truck size={15} className="text-[#8EBBB0]" />
              {remainingForFreeShipping > 0 ? (
                <span>{t('cart.addForFreeShipping', { amount: `€${remainingForFreeShipping.toLocaleString()}` })}</span>
              ) : (
                <span className="text-[#8EBBB0] font-bold">{t('cart.freeShippingUnlocked')}</span>
              )}
            </div>
            <div className="w-full bg-[#F7F3EB] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#8EBBB0] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#8EBBB0]/15 flex items-center justify-center mx-auto text-[#8EBBB0]">
                  <Truck size={28} className="text-[#8EBBB0]" />
                </div>
                <h3 className="font-heading text-xl text-[#2D2B2A] font-medium">{t('cart.emptyTitle')}</h3>
                <p className="text-xs text-[#6B6661] max-w-xs mx-auto font-normal">
                  {t('cart.emptySubtitle')}
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#EDE6DC] shadow-xs"
                >
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/LI-112.jpg';
                    }}
                    className="w-20 h-24 object-contain p-1 rounded-xl bg-[#F7F3EB] border border-[#EDE6DC]"
                  />

                  <div className="flex-1 flex flex-col justify-between space-y-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-heading text-sm text-[#2D2B2A] font-medium line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#9E9891] hover:text-[#E79685] transition-colors p-1 cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#6B6661] font-normal space-y-0.5">
                        <p>{t('cart.size')}: {item.selectedSize}</p>
                        <p className="flex items-center gap-1.5">
                          {t('cart.color')}:
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block border border-[#EDE6DC]"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          {item.selectedColor.name}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#EDE6DC] rounded-full bg-[#FDFBF7]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-[#2D2B2A] hover:text-[#E79685] cursor-pointer"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#2D2B2A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-[#2D2B2A] hover:text-[#8EBBB0] cursor-pointer"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#E79685]">
                        €{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout CTA */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#EDE6DC] bg-white space-y-4">
              <div className="flex justify-between items-center text-xs text-[#6B6661]">
                <span>{t('cart.taxesIncluded')}</span>
                <span>{t('cart.included')}</span>
              </div>
              <div className="flex justify-between items-center font-heading text-xl text-[#2D2B2A] font-bold">
                <span>{t('cart.subtotal')}</span>
                <span className="text-[#E79685]">€{subtotal.toLocaleString()}</span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-[#E79685] hover:bg-[#D47B68] text-white py-4 text-xs uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-3 transition-all shadow-pillowy-coral hover:scale-105 cursor-pointer"
              >
                <span>{t('cart.checkout')}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};


