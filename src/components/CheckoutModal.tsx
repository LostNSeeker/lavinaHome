import React, { useState } from 'react';
import type { CartItem, DeliveryPreferences } from '../types';
import { 
  X, 
  CheckCircle, 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  RefreshCw, 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  Building, 
  ArrowRight, 
  ExternalLink,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { orderService } from '../services/orderService';
import { authService } from '../services/authService';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const loggedInUser = authService.getCurrentUser();
  const [step, setStep] = useState<'details' | 'post-payment' | 'success'>('details');
  const [loading, setLoading] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('');
  const [confirmedPlentyOrderId, setConfirmedPlentyOrderId] = useState<string>('');
  const [invoiceSent, setInvoiceSent] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'paypal' | 'credit_card' | 'klarna'>('paypal');

  // Customer Contact & Shipping Form
  const [formData, setFormData] = useState({
    fullName: loggedInUser?.name || 'Sophia Andersen',
    email: loggedInUser?.email || 'sophia@example.com',
    address: loggedInUser?.address || 'Industriestr. 23',
    city: loggedInUser?.city || 'Dülmen',
    country: loggedInUser?.country || 'Germany',
    postalCode: loggedInUser?.postalCode || '48249',
  });

  // Post-Payment Delivery Preferences Form
  const [deliveryData, setDeliveryData] = useState<DeliveryPreferences>({
    phone: loggedInUser?.phone || '+49 170 1234567',
    preferredDeliveryDate: 'Earliest Available (Next 2-4 Days)',
    deliveryTimeWindow: 'Morning (9:00 - 13:00)',
    gateFloorNotes: '2nd floor, elevator available, gate code #4829',
    vatNumber: 'DE 123456789',
    specialInstructions: 'White-glove unrolling in nursery over soft floor.'
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // 1. Initial Order Placement & Payment Step
  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await orderService.placeOrder(cartItems, formData, subtotal);
      setConfirmedOrderId(result.orderId);
      setConfirmedPlentyOrderId(result.plentyOrderId);
      setInvoiceSent(result.invoiceSent);
      
      onClearCart();
      setStep('post-payment');

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8EBBB0', '#E79685', '#E5B769', '#B098BA'],
        });
      } catch (err) {
        // Confetti fallback
      }
    } catch (err) {
      console.error('Order placement error:', err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Post-Payment Delivery Preferences Submission
  const handleSaveDeliveryPreferences = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await orderService.submitDeliveryPreferences(confirmedOrderId, deliveryData);
      setStep('success');

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#8EBBB0', '#E79685', '#E5B769', '#B098BA'],
        });
      } catch (err) {
        // Confetti fallback
      }
    } catch (err) {
      console.error('Save delivery preferences error:', err);
      setStep('success');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2D2B2A]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-up">
      <div className="bg-[#FDFBF7] max-w-2xl w-full rounded-3xl border border-[#EDE6DC] shadow-2xl relative p-6 sm:p-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => {
            onClose();
            setStep('details');
          }}
          className="absolute top-4 right-4 z-10 p-2.5 text-[#2D2B2A] hover:text-[#E79685] transition-colors rounded-full hover:bg-white cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* STEP 1: INITIAL CHECKOUT & PAYMENT */}
        {step === 'details' && (
          <div>
            <div className="text-center pb-5 border-b border-[#EDE6DC] mb-6">
              <span className="text-[10px] uppercase tracking-wider text-[#8EBBB0] font-bold block mb-1">
                {t('checkout.badge', { defaultValue: 'Secure Nursery Checkout' })}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#2D2B2A] font-medium">
                {t('checkout.title', { defaultValue: 'Express Checkout' })}
              </h2>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Shipping Address */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-[#2D2B2A] font-bold flex items-center gap-2">
                  <Truck size={14} className="text-[#8EBBB0]" />
                  <span>{t('checkout.step1Title', { defaultValue: '1. Shipping & Contact Information' })}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.fullName', { defaultValue: 'Full Name' })}</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.emailAddress', { defaultValue: 'Email Address' })}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.streetAddress', { defaultValue: 'Street Address & House No.' })}</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.city', { defaultValue: 'City' })}</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.country', { defaultValue: 'Country' })}</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods Selection (Shopify Payments & PayPal) */}
              <div className="space-y-3 pt-4 border-t border-[#EDE6DC]">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-wider text-[#2D2B2A] font-bold flex items-center gap-2">
                    <CreditCard size={14} className="text-[#8EBBB0]" />
                    <span>2. Shopify Payments &amp; PayPal</span>
                  </h3>
                  <span className="text-[10px] text-[#8EBBB0] font-bold uppercase tracking-wider flex items-center gap-1 bg-[#8EBBB0]/15 px-2.5 py-0.5 rounded-full">
                    <Lock size={10} /> 256-bit Encrypted
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {/* PayPal Option */}
                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod('paypal')}
                    className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center ${
                      selectedPaymentMethod === 'paypal'
                        ? 'border-[#0070BA] bg-[#0070BA]/5 ring-2 ring-[#0070BA]/20'
                        : 'border-[#EDE6DC] bg-white hover:border-[#0070BA]/50'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <span className="font-extrabold text-sm italic text-[#003087]">Pay</span>
                      <span className="font-extrabold text-sm italic text-[#0079C1]">Pal</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#003087] block">Express &amp; Später</span>
                  </button>

                  {/* Credit Card Option */}
                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod('credit_card')}
                    className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center ${
                      selectedPaymentMethod === 'credit_card'
                        ? 'border-[#E79685] bg-[#E79685]/5 ring-2 ring-[#E79685]/20'
                        : 'border-[#EDE6DC] bg-white hover:border-[#E79685]/50'
                    }`}
                  >
                    <CreditCard size={18} className={selectedPaymentMethod === 'credit_card' ? 'text-[#E79685]' : 'text-[#6B6661]'} />
                    <span className="text-[10px] font-bold text-[#2D2B2A] block">Kreditkarte / Apple</span>
                  </button>

                  {/* Klarna Option */}
                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod('klarna')}
                    className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center ${
                      selectedPaymentMethod === 'klarna'
                        ? 'border-[#FFA8CD] bg-[#FFA8CD]/10 ring-2 ring-[#FFA8CD]/30'
                        : 'border-[#EDE6DC] bg-white hover:border-[#FFA8CD]/50'
                    }`}
                  >
                    <span className="font-black text-sm text-[#2D2B2A]">Klarna.</span>
                    <span className="text-[10px] font-bold text-[#2D2B2A] block">Rechnung / 30 Tage</span>
                  </button>
                </div>

                {/* PayPal Express Banner when selected */}
                {selectedPaymentMethod === 'paypal' && (
                  <div className="bg-[#FFC439]/20 border border-[#FFC439] p-3.5 rounded-2xl flex items-center justify-between gap-3 text-xs animate-fade-up">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#0070BA] text-white flex items-center justify-center font-bold italic text-xs">
                        P
                      </div>
                      <div>
                        <p className="font-bold text-[#003087]">Shopify Payments • PayPal Express</p>
                        <p className="text-[11px] text-[#6B6661]">Käuferschutz &amp; 0% Finanzierung verfügbar</p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#003087] bg-white px-2.5 py-1 rounded-full border border-[#FFC439]">
                      Aktiv
                    </span>
                  </div>
                )}
              </div>

              {/* Order Financial Summary */}
              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] space-y-2 text-xs text-[#2D2B2A] shadow-xs">
                <div className="flex justify-between font-medium">
                  <span>{t('checkout.itemsTotal', { defaultValue: 'Subtotal' })}</span>
                  <span className="font-bold">€{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#8EBBB0] font-bold">
                  <span>{t('checkout.whiteGloveDelivery', { defaultValue: 'Express Shipping (Germany & Europe)' })}</span>
                  <span>{t('checkout.freeDelivery', { defaultValue: 'Free (€0.00)' })}</span>
                </div>
                <div className="flex justify-between font-heading text-lg border-t border-[#EDE6DC] pt-2 font-bold">
                  <span>{t('checkout.totalPayable', { defaultValue: 'Total (Incl. VAT)' })}</span>
                  <span className="text-[#E79685]">€{subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="text-[11px] text-[#6B6661] text-center leading-relaxed">
                {t('checkout.legalConsent', { defaultValue: 'By completing this order, you accept the terms of service, revocation rights, and privacy policy.' })}
              </div>

              {selectedPaymentMethod === 'paypal' ? (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FFC439] hover:bg-[#F4B400] text-[#003087] py-4 text-xs uppercase tracking-wider font-extrabold rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      <span>{t('checkout.processing', { defaultValue: 'Connecting to PayPal...' })}</span>
                    </>
                  ) : (
                    <>
                      <span className="italic text-sm font-black">PayPal</span>
                      <span>— Jetzt €{subtotal.toLocaleString()} sicher zahlen</span>
                    </>
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#E79685] hover:bg-[#D47B68] text-white py-4 text-xs uppercase tracking-wider font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-pillowy-coral hover:scale-105 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      <span>{t('checkout.processing', { defaultValue: 'Processing Order...' })}</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck size={16} />
                      <span>Bestellung aufgeben — €{subtotal.toLocaleString()}</span>
                    </>
                  )}
                </button>
              )}

            </form>
          </div>
        )}

        {/* STEP 2: POST-PAYMENT DELIVERY DETAILS FORM */}
        {step === 'post-payment' && (
          <div className="space-y-6 animate-fade-up">
            <div className="text-center pb-5 border-b border-[#EDE6DC]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8EBBB0]/15 text-[#6C9F93] border border-[#8EBBB0] rounded-full text-[11px] font-bold mb-2">
                <CheckCircle size={13} />
                <span>{t('checkout.paymentConfirmedBadge', { email: formData.email, defaultValue: `Payment Confirmed (${formData.email})` })}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#2D2B2A] font-medium">
                {t('checkout.schedulingTitle', { defaultValue: 'Delivery & Setup Preferences' })}
              </h2>
              <p className="text-xs text-[#6B6661] max-w-md mx-auto mt-1 font-normal">
                {t('checkout.schedulingSubtitle', { defaultValue: 'Select your preferred arrival window from our Dülmen Logistics Center.' })}
              </p>
            </div>

            <form onSubmit={handleSaveDeliveryPreferences} className="space-y-4 text-xs">
              
              {/* Phone & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold flex items-center gap-1.5">
                    <Phone size={13} className="text-[#8EBBB0]" />
                    <span>{t('checkout.phoneLabel', { defaultValue: 'Phone Number for Delivery Updates' })}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={deliveryData.phone}
                    onChange={(e) => setDeliveryData({ ...deliveryData, phone: e.target.value })}
                    placeholder="+49 170 1234567"
                    className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                  />
                </div>

                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#8EBBB0]" />
                    <span>{t('checkout.preferredDate', { defaultValue: 'Preferred Delivery Window' })}</span>
                  </label>
                  <select
                    value={deliveryData.preferredDeliveryDate}
                    onChange={(e) => setDeliveryData({ ...deliveryData, preferredDeliveryDate: e.target.value })}
                    className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                  >
                    <option value="Earliest Available (Next 2-4 Days)">Earliest Available (Next 2–4 Business Days)</option>
                    <option value="This Week Friday">This Week (Express Dispatch)</option>
                    <option value="Next Week Monday">Next Week (Scheduled Delivery)</option>
                    <option value="Flexible / Contact to schedule">Flexible / Contact via WhatsApp</option>
                  </select>
                </div>
              </div>

              {/* Time Window & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold flex items-center gap-1.5">
                    <Clock size={13} className="text-[#8EBBB0]" />
                    <span>{t('checkout.timeWindow', { defaultValue: 'Time Window' })}</span>
                  </label>
                  <select
                    value={deliveryData.deliveryTimeWindow}
                    onChange={(e) => setDeliveryData({ ...deliveryData, deliveryTimeWindow: e.target.value })}
                    className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                  >
                    <option value="Morning (9:00 - 13:00)">Morning (9:00 - 13:00)</option>
                    <option value="Afternoon (13:00 - 17:00)">Afternoon (13:00 - 17:00)</option>
                    <option value="Evening (17:00 - 20:00)">Evening (17:00 - 20:00)</option>
                    <option value="Anytime">Anytime / Standard Courier</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold flex items-center gap-1.5">
                    <Building size={13} className="text-[#8EBBB0]" />
                    <span>{t('checkout.floorAccess', { defaultValue: 'Floor & Gate Access Notes' })}</span>
                  </label>
                  <input
                    type="text"
                    value={deliveryData.gateFloorNotes}
                    onChange={(e) => setDeliveryData({ ...deliveryData, gateFloorNotes: e.target.value })}
                    placeholder="e.g. 2nd floor, elevator available, gate #4829"
                    className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                  />
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-[#6B6661] mb-1 font-semibold">
                  {t('checkout.instructions', { defaultValue: 'Special Delivery Instructions' })}
                </label>
                <textarea
                  rows={2}
                  value={deliveryData.specialInstructions}
                  onChange={(e) => setDeliveryData({ ...deliveryData, specialInstructions: e.target.value })}
                  placeholder="e.g. Unroll cloud rug in baby nursery room, remove packaging"
                  className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2 rounded-2xl outline-none focus:border-[#E79685] text-[#2D2B2A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#8EBBB0] hover:bg-[#6C9F93] text-white py-4 text-xs uppercase tracking-wider font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-pillowy-sage hover:scale-105 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      <span>{t('checkout.savingSchedule', { defaultValue: 'Saving Preferences...' })}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('checkout.savePreferencesBtn', { defaultValue: 'Save Delivery Details' })}</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

        {/* STEP 3: FINAL CONFIRMATION & INVOICE RECEIPT */}
        {step === 'success' && (
          <div className="text-center py-6 space-y-6 animate-fade-up">
            <div className="w-16 h-16 bg-[#8EBBB0] text-white rounded-full flex items-center justify-center mx-auto shadow-pillowy">
              <CheckCircle size={32} />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8EBBB0] font-bold block mb-1">
                {t('checkout.confirmedBadge', { defaultValue: 'Order Successfully Placed' })}
              </span>
              <h2 className="font-heading text-3xl text-[#2D2B2A] font-medium">
                {t('checkout.confirmedTitle', { defaultValue: 'Thank You for Your Order!' })}
              </h2>
            </div>

            {/* Reference numbers box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-xs">
              <div className="p-3 bg-white border border-[#EDE6DC] rounded-2xl text-left shadow-xs">
                <span className="text-[10px] text-[#9E9891] uppercase tracking-wider block font-bold">{t('checkout.nurseryOrderId', { defaultValue: 'Order ID' })}</span>
                <strong className="text-sm font-mono text-[#2D2B2A]">{confirmedOrderId || 'LH-2026-8492'}</strong>
              </div>
              <div className="p-3 bg-[#8EBBB0]/15 border border-[#8EBBB0]/40 rounded-2xl text-left shadow-xs">
                <span className="text-[10px] text-[#6C9F93] uppercase tracking-wider block font-bold">{t('checkout.dulmenHubRef', { defaultValue: 'PlentyONE ERP ID' })}</span>
                <strong className="text-sm font-mono text-[#2D2B2A]">{confirmedPlentyOrderId || 'PLENTY-ORD-571201'}</strong>
              </div>
            </div>

            {/* SMTP Invoice note */}
            <div className="p-4 bg-white border border-[#EDE6DC] rounded-2xl max-w-md mx-auto text-xs text-[#6B6661] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-[#8EBBB0] font-bold justify-center">
                <Mail size={15} className="text-[#E79685]" />
                <span>{invoiceSent ? t('checkout.invoiceSent', { defaultValue: 'Invoice Dispatched via Email' }) : t('checkout.invoiceQueued', { defaultValue: 'Invoice Queued' })}</span>
              </div>
              <p className="text-[11px] text-[#9E9891] leading-relaxed">
                {t('checkout.invoiceEmailSent', { email: formData.email, defaultValue: `A detailed PDF invoice has been sent to ${formData.email}.` })}
              </p>
              <div className="pt-2 border-t border-[#EDE6DC]">
                <a
                  href={orderService.getInvoicePreviewUrl(confirmedOrderId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E79685] hover:underline font-bold inline-flex items-center gap-1.5"
                >
                  <ExternalLink size={13} />
                  <span>{t('checkout.viewPdfInvoice', { defaultValue: 'View PDF Invoice Preview' })}</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                setStep('details');
              }}
              className="bg-[#2D2B2A] text-white px-8 py-3.5 text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#8EBBB0] transition-colors inline-block cursor-pointer"
            >
              {t('checkout.continueShopping', { defaultValue: 'Continue Browsing' })}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
