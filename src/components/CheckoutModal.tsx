import React, { useState } from 'react';
import type { CartItem, DeliveryPreferences } from '../types';
import { X, CheckCircle, ShieldCheck, CreditCard, Truck, RefreshCw, Mail, Phone, Calendar, Clock, Building, ArrowRight, ExternalLink } from 'lucide-react';
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

  // Customer Contact & Shipping Form
  const [formData, setFormData] = useState({
    fullName: loggedInUser?.name || 'Sophia Andersen',
    email: loggedInUser?.email || 'sophia@example.com',
    address: loggedInUser?.address || 'Amagertorv 14, 2nd Floor',
    city: loggedInUser?.city || 'Copenhagen',
    country: loggedInUser?.country || 'Denmark',
    postalCode: loggedInUser?.postalCode || '1160',
  });

  // Post-Payment Delivery Preferences Form
  const [deliveryData, setDeliveryData] = useState<DeliveryPreferences>({
    phone: loggedInUser?.phone || '+45 20 12 34 56',
    preferredDeliveryDate: 'Earliest Available (Aug 14)',
    deliveryTimeWindow: 'Morning (9:00 - 13:00)',
    gateFloorNotes: '2nd floor, elevator available, gate code #4829',
    vatNumber: 'DK 12345678',
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
                {t('checkout.badge')}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#2D2B2A] font-medium">
                {t('checkout.title')}
              </h2>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Shipping Address */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-[#2D2B2A] font-bold flex items-center gap-2">
                  <Truck size={14} className="text-[#8EBBB0]" />
                  <span>{t('checkout.step1Title')}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.fullName')}</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.emailAddress')}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.streetAddress')}</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.city')}</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('checkout.country')}</label>
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

              {/* Payment & Safe Hub Sync Box */}
              <div className="space-y-3 pt-4 border-t border-[#EDE6DC]">
                <h3 className="text-xs uppercase tracking-wider text-[#2D2B2A] font-bold flex items-center gap-2">
                  <CreditCard size={14} className="text-[#8EBBB0]" />
                  <span>{t('checkout.step2Title')}</span>
                </h3>
                <div className="p-4 bg-white rounded-2xl border border-[#EDE6DC] text-xs text-[#6B6661] space-y-1.5 shadow-xs">
                  <div className="flex justify-between items-center font-bold text-[#2D2B2A]">
                    <span>{t('checkout.pipelineTitle')}</span>
                    <span className="text-[#8EBBB0]">{t('checkout.pipelineStatus')}</span>
                  </div>
                  <div className="text-[11px] text-[#9E9891] leading-relaxed">
                    {t('checkout.pipelineDesc')}
                  </div>
                </div>
              </div>

              {/* Order Financial Summary */}
              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] space-y-2 text-xs text-[#2D2B2A] shadow-xs">
                <div className="flex justify-between font-medium">
                  <span>{t('checkout.itemsTotal')}</span>
                  <span className="font-bold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#8EBBB0] font-bold">
                  <span>{t('checkout.whiteGloveDelivery')}</span>
                  <span>{t('checkout.freeDelivery')}</span>
                </div>
                <div className="flex justify-between font-heading text-lg border-t border-[#EDE6DC] pt-2 font-bold">
                  <span>{t('checkout.totalPayable')}</span>
                  <span className="text-[#E79685]">${subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="text-[11px] text-[#6B6661] text-center leading-relaxed">
                {t('checkout.legalConsent')}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E79685] hover:bg-[#D47B68] text-white py-4 text-xs uppercase tracking-wider font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-pillowy-coral hover:scale-105 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>{t('checkout.processing')}</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={16} />
                    <span>{t('checkout.placeOrderBtn', { price: `$${subtotal.toLocaleString()}` })}</span>
                  </>
                )}
              </button>

            </form>
          </div>
        )}

        {/* STEP 2: POST-PAYMENT DELIVERY DETAILS FORM */}
        {step === 'post-payment' && (
          <div className="space-y-6 animate-fade-up">
            <div className="text-center pb-5 border-b border-[#EDE6DC]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8EBBB0]/15 text-[#6C9F93] border border-[#8EBBB0] rounded-full text-[11px] font-bold mb-2">
                <CheckCircle size={13} />
                <span>{t('checkout.paymentConfirmedBadge', { email: formData.email })}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#2D2B2A] font-medium">
                {t('checkout.schedulingTitle')}
              </h2>
              <p className="text-xs text-[#6B6661] max-w-md mx-auto mt-1 font-normal">
                {t('checkout.schedulingSubtitle')}
              </p>
            </div>

            <form onSubmit={handleSaveDeliveryPreferences} className="space-y-4 text-xs">
              
              {/* Phone & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold flex items-center gap-1.5">
                    <Phone size={13} className="text-[#8EBBB0]" />
                    <span>{t('checkout.phoneLabel')}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={deliveryData.phone}
                    onChange={(e) => setDeliveryData({ ...deliveryData, phone: e.target.value })}
                    placeholder="+45 20 12 34 56"
                    className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                  />
                </div>

                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#8EBBB0]" />
                    <span>{t('checkout.preferredDate')}</span>
                  </label>
                  <select
                    value={deliveryData.preferredDeliveryDate}
                    onChange={(e) => setDeliveryData({ ...deliveryData, preferredDeliveryDate: e.target.value })}
                    className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                  >
                    <option value="Earliest Available (Aug 14)">{t('checkout.dateEarliest')}</option>
                    <option value="Aug 15, 2026">{t('checkout.dateThu')}</option>
                    <option value="Aug 16, 2026">{t('checkout.dateFri')}</option>
                    <option value="Aug 19, 2026">{t('checkout.dateNextWeek')}</option>
                    <option value="Flexible / Contact to schedule">{t('checkout.dateFlexible')}</option>
                  </select>
                </div>
              </div>

              {/* Time Window & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold flex items-center gap-1.5">
                    <Clock size={13} className="text-[#8EBBB0]" />
                    <span>{t('checkout.timeWindow')}</span>
                  </label>
                  <select
                    value={deliveryData.deliveryTimeWindow}
                    onChange={(e) => setDeliveryData({ ...deliveryData, deliveryTimeWindow: e.target.value })}
                    className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                  >
                    <option value="Morning (9:00 - 13:00)">{t('checkout.morning')}</option>
                    <option value="Afternoon (13:00 - 17:00)">{t('checkout.afternoon')}</option>
                    <option value="Evening (17:00 - 20:00)">{t('checkout.evening')}</option>
                    <option value="Anytime">{t('checkout.anytime')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold flex items-center gap-1.5">
                    <Building size={13} className="text-[#8EBBB0]" />
                    <span>{t('checkout.floorAccess')}</span>
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
                  {t('checkout.instructions')}
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
                      <span>{t('checkout.savingSchedule')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('checkout.savePreferencesBtn')}</span>
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
                {t('checkout.confirmedBadge')}
              </span>
              <h2 className="font-heading text-3xl text-[#2D2B2A] font-medium">
                {t('checkout.confirmedTitle')}
              </h2>
            </div>

            {/* Reference numbers box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-xs">
              <div className="p-3 bg-white border border-[#EDE6DC] rounded-2xl text-left shadow-xs">
                <span className="text-[10px] text-[#9E9891] uppercase tracking-wider block font-bold">{t('checkout.nurseryOrderId')}</span>
                <strong className="text-sm font-mono text-[#2D2B2A]">{confirmedOrderId || 'LK-2026-8492'}</strong>
              </div>
              <div className="p-3 bg-[#8EBBB0]/15 border border-[#8EBBB0]/40 rounded-2xl text-left shadow-xs">
                <span className="text-[10px] text-[#6C9F93] uppercase tracking-wider block font-bold">{t('checkout.dulmenHubRef')}</span>
                <strong className="text-sm font-mono text-[#2D2B2A]">{confirmedPlentyOrderId || 'PLENTY-ORD-571201'}</strong>
              </div>
            </div>

            {/* SMTP Invoice note */}
            <div className="p-4 bg-white border border-[#EDE6DC] rounded-2xl max-w-md mx-auto text-xs text-[#6B6661] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-[#8EBBB0] font-bold justify-center">
                <Mail size={15} className="text-[#E79685]" />
                <span>{invoiceSent ? t('checkout.invoiceSent') : t('checkout.invoiceQueued')}</span>
              </div>
              <p className="text-[11px] text-[#9E9891] leading-relaxed">
                {t('checkout.invoiceEmailSent', { email: formData.email })}
              </p>
              <div className="pt-2 border-t border-[#EDE6DC]">
                <a
                  href={orderService.getInvoicePreviewUrl(confirmedOrderId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E79685] hover:underline font-bold inline-flex items-center gap-1.5"
                >
                  <ExternalLink size={13} />
                  <span>{t('checkout.viewPdfInvoice')}</span>
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
              {t('checkout.continueShopping')}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};


