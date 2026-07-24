import React, { useState } from 'react';
import type { CartItem } from '../types';
import { X, CheckCircle, ShieldCheck, CreditCard, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onClearCart,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Sophia Andersen',
    email: 'sophia@example.com',
    address: 'Amagertorv 14, 2nd Floor',
    city: 'Copenhagen',
    country: 'Denmark',
    postalCode: '1160',
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    onClearCart();

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#69705A', '#B96A3C', '#D9C5A7', '#FAF8F5'],
      });
    } catch (err) {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2B2B2B]/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-up">
      <div className="bg-[#FAF8F5] max-w-2xl w-full rounded-[4px] border border-[#ECE8E2] shadow-2xl relative p-6 sm:p-10 my-8">
        
        <button
          onClick={() => {
            onClose();
            setStep('details');
          }}
          className="absolute top-4 right-4 z-10 p-2 text-[#2B2B2B] hover:text-[#B96A3C] transition-colors"
        >
          <X size={20} />
        </button>

        {step === 'details' ? (
          <div>
            <div className="text-center pb-6 border-b border-[#ECE8E2] mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#69705A] font-semibold block mb-1">
                Levina Home Storefront Checkout
              </span>
              <h2 className="font-serif text-3xl text-[#2B2B2B]">Complimentary White-Glove Order</h2>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Shipping Address */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-[#2B2B2B] font-semibold flex items-center gap-2">
                  <Truck size={14} className="text-[#69705A]" />
                  <span>1. White-Glove Delivery Address</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2.5 rounded-[2px] outline-none focus:border-[#B96A3C]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2.5 rounded-[2px] outline-none focus:border-[#B96A3C]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[#666666] mb-1 font-medium">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2.5 rounded-[2px] outline-none focus:border-[#B96A3C]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2.5 rounded-[2px] outline-none focus:border-[#B96A3C]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium">Country</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2.5 rounded-[2px] outline-none focus:border-[#B96A3C]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="space-y-3 pt-4 border-t border-[#ECE8E2]">
                <h3 className="text-xs uppercase tracking-wider text-[#2B2B2B] font-semibold flex items-center gap-2">
                  <CreditCard size={14} className="text-[#69705A]" />
                  <span>2. Payment Simulation</span>
                </h3>
                <div className="p-4 bg-[#F4EEE6] rounded-[2px] border border-[#ECE8E2] text-xs text-[#505744] flex items-center justify-between">
                  <span>✨ Storefront Simulation Card Applied</span>
                  <span className="font-mono font-semibold">•••• •••• •••• 2026</span>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-[#EFE7DC]/60 p-4 rounded-[2px] space-y-2 text-xs text-[#2B2B2B]">
                <div className="flex justify-between">
                  <span>Sanctuary Items Total</span>
                  <span className="font-medium">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#505744]">
                  <span>White-Glove Delivery</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-serif text-lg border-t border-[#ECE8E2] pt-2 font-normal">
                  <span>Total Payable</span>
                  <span className="text-[#B96A3C] font-semibold">${subtotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B96A3C] hover:bg-[#A75D36] text-white py-4 text-xs uppercase tracking-[0.2em] font-medium rounded-[4px] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <ShieldCheck size={16} />
                <span>Place Order (${subtotal.toLocaleString()})</span>
              </button>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-6 animate-fade-up">
            <div className="w-20 h-20 bg-[#69705A] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle size={36} />
            </div>

            <span className="text-xs uppercase tracking-[0.35em] text-[#69705A] font-semibold block">
              Order Confirmed #LH-2026-8941
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] font-normal max-w-md mx-auto">
              Thank You for Curating Your Sanctuary with Levina Home
            </h2>

            <p className="text-xs text-[#666666] font-light leading-relaxed max-w-md mx-auto">
              A white-glove logistics specialist will contact you at <strong>{formData.email}</strong> to schedule indoor room placement and carpet unpacking.
            </p>

            <button
              onClick={() => {
                onClose();
                setStep('details');
              }}
              className="bg-[#2B2B2B] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded-[4px] hover:bg-[#505744] transition-colors inline-block"
            >
              Continue Browsing Collection
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
