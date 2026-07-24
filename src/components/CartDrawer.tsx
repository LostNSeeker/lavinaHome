import React from 'react';
import type { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, Truck } from 'lucide-react';

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
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 1500;
  const progressPercentage = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2B2B2B]/50 backdrop-blur-xs transition-opacity animate-fade-up">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#ECE8E2] shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-[#ECE8E2] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-2xl text-[#2B2B2B]">Your Sanctuary Cart</h2>
              <span className="bg-[#EFE7DC] text-[#505744] text-xs font-medium px-2.5 py-0.5 rounded-full">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#2B2B2B] hover:text-[#B96A3C] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#F4EEE6] px-6 py-4 border-b border-[#ECE8E2]">
            <div className="flex items-center gap-2 text-xs text-[#505744] font-medium mb-2">
              <Truck size={15} className="text-[#69705A]" />
              {remainingForFreeShipping > 0 ? (
                <span>Add <strong>${remainingForFreeShipping.toLocaleString()}</strong> for complimentary White-Glove delivery</span>
              ) : (
                <span className="text-[#B96A3C]">You unlocked complimentary White-Glove delivery!</span>
              )}
            </div>
            <div className="w-full bg-[#EFE7DC] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#69705A] h-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F4EEE6] flex items-center justify-center mx-auto text-[#8B8B8B]">
                  <Truck size={24} />
                </div>
                <h3 className="font-serif text-xl text-[#2B2B2B]">Your cart is currently empty</h3>
                <p className="text-xs text-[#666666] max-w-xs mx-auto font-light">
                  Explore our luxury carpets and Scandinavian home pieces to curate your space.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b border-[#ECE8E2] last:border-b-0"
                >
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-[2px] bg-[#EFE7DC]"
                  />

                  <div className="flex-1 flex flex-col justify-between space-y-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-base text-[#2B2B2B] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#8B8B8B] hover:text-[#B96A3C] transition-colors p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#666666] font-light space-y-0.5">
                        <p>Size: {item.selectedSize}</p>
                        <p className="flex items-center gap-1.5">
                          Color:
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block border border-[#BBA68B]"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          {item.selectedColor.name}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#ECE8E2] rounded-[2px] bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-[#2B2B2B] hover:bg-[#F4EEE6]"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-medium text-[#2B2B2B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-[#2B2B2B] hover:bg-[#F4EEE6]"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="text-sm font-medium text-[#2B2B2B]">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout CTA */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#ECE8E2] bg-[#F4EEE6] space-y-4">
              <div className="flex justify-between items-center text-xs text-[#666666]">
                <span>Taxes &amp; Customs</span>
                <span>Calculated at Checkout</span>
              </div>
              <div className="flex justify-between items-center font-serif text-xl text-[#2B2B2B]">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-[#B96A3C] hover:bg-[#A75D36] text-white py-4 text-xs uppercase tracking-[0.2em] font-medium rounded-[4px] flex items-center justify-center gap-3 transition-colors shadow-xs"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
