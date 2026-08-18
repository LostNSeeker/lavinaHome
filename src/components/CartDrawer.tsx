import React from 'react';
import type { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, Truck, ShoppingBag } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#ECE8E2] shadow-2xl flex flex-col justify-between h-full max-h-screen overflow-hidden">
          
          {/* Cart Header */}
          <div className="p-5 sm:p-6 border-b border-[#ECE8E2] bg-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#ECE8E2] flex items-center justify-center text-[#69705A]">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h2 className="font-serif text-xl text-[#2B2B2B] font-normal">{t('cart.title', 'Warenkorb')}</h2>
                <span className="text-[11px] text-[#69705A] font-medium">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} {t('cart.itemsCount', 'Artikel ausgewählt')}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 text-[#666666] hover:text-[#2B2B2B] transition-colors rounded-full hover:bg-[#FAF8F5] cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-white px-6 py-3.5 border-b border-[#ECE8E2] shrink-0">
            <div className="flex items-center justify-between text-xs text-[#666666] font-medium mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck size={14} className="text-[#69705A]" />
                {remainingForFreeShipping > 0 ? (
                  <span>Noch €{remainingForFreeShipping.toLocaleString()} bis zum kostenlosen Expressversand</span>
                ) : (
                  <span className="text-[#69705A] font-semibold">Kostenloser Expressversand freigeschaltet!</span>
                )}
              </span>
              <span className="text-[11px] text-[#8B8B8B] font-mono">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-[#FAF8F5] h-1.5 rounded-full overflow-hidden border border-[#ECE8E2]">
              <div
                className="bg-[#69705A] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-3.5 overscroll-contain">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white border border-[#ECE8E2] flex items-center justify-center mx-auto text-[#69705A] shadow-xs">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="font-serif text-xl text-[#2B2B2B] font-normal">{t('cart.emptyTitle', 'Ihr Warenkorb ist leer')}</h3>
                <p className="text-xs text-[#666666] max-w-xs mx-auto font-light">
                  {t('cart.emptySubtitle', 'Entdecken Sie unsere 145 meisterhaften Teppiche und lizenzierte Markenwelten.')}
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3.5 p-3.5 bg-white rounded-2xl border border-[#ECE8E2] shadow-2xs"
                >
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/LI-112.jpg';
                    }}
                    className="w-20 h-24 object-cover rounded-xl bg-[#FAF8F5] border border-[#ECE8E2]"
                  />

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-serif text-sm text-[#2B2B2B] font-normal truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          aria-label="Remove item"
                          className="text-[#8B8B8B] hover:text-[#B96A3C] transition-colors p-1 cursor-pointer shrink-0"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#666666] font-light space-y-0.5 mt-0.5">
                        {item.selectedSize && <p>Größe: {item.selectedSize}</p>}
                        {item.selectedColor?.name && (
                          <p className="flex items-center gap-1.5">
                            Farbe:
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block border border-black/10"
                              style={{ backgroundColor: item.selectedColor.hex }}
                            />
                            {item.selectedColor.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#FAF8F5]">
                      <div className="flex items-center border border-[#ECE8E2] rounded-full bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="p-1.5 text-[#2B2B2B] hover:text-[#B96A3C] cursor-pointer"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#2B2B2B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="p-1.5 text-[#2B2B2B] hover:text-[#69705A] cursor-pointer"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <span className="text-sm font-medium text-[#2B2B2B]">
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
            <div className="p-5 sm:p-6 border-t border-[#ECE8E2] bg-white space-y-3 shrink-0">
              <div className="flex justify-between items-center text-xs text-[#666666]">
                <span>Inkl. 19% MwSt. &amp; Standard-Versand</span>
                <span className="text-[#69705A] font-semibold">Kostenlos</span>
              </div>
              <div className="flex justify-between items-center font-serif text-xl text-[#2B2B2B]">
                <span>Gesamtsumme:</span>
                <span className="text-[#B96A3C] font-semibold">€{subtotal.toLocaleString()}</span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-[#2B2B2B] hover:bg-[#B96A3C] text-white py-3.5 text-xs uppercase tracking-wider font-semibold rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
              >
                <span>Zur Kasse &amp; Zahlung</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
