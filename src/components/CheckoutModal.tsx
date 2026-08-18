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
          colors: ['#69705A', '#B96A3C', '#E5B769', '#A56B46'],
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
          colors: ['#69705A', '#B96A3C', '#E5B769', '#A56B46'],
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-hidden animate-fade-in">
      {/* Background Click Outside to Close */}
      <div 
        className="absolute inset-0" 
        onClick={() => {
          onClose();
          setStep('details');
        }} 
      />

      {/* Main Modal Card with Strict Viewport Max-Height and Internal Scrolling */}
      <div className="bg-[#FAF8F5] max-w-2xl w-full rounded-2xl sm:rounded-3xl border border-[#ECE8E2] shadow-2xl relative z-10 flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 bg-white border-b border-[#ECE8E2] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#ECE8E2] flex items-center justify-center text-[#69705A]">
              <CreditCard size={18} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#69705A] font-semibold block">
                {step === 'details' ? t('checkout.badge', 'Sicherer Express Checkout') : step === 'post-payment' ? 'Zustell-Präferenzen' : 'Bestellbestätigung'}
              </span>
              <h2 className="font-serif text-lg sm:text-xl text-[#2B2B2B] font-normal">
                {step === 'details' ? t('checkout.title', 'Zahlung & Lieferadresse') : step === 'post-payment' ? 'Wunsch-Lieferung konfigurieren' : 'Vielen Dank für Ihre Bestellung!'}
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              setStep('details');
            }}
            aria-label="Close modal"
            className="p-2 text-[#666666] hover:text-[#2B2B2B] transition-colors rounded-full hover:bg-[#FAF8F5] cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 overscroll-contain">

          {/* STEP 1: INITIAL CHECKOUT & PAYMENT */}
          {step === 'details' && (
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Shipping Address */}
              <div className="space-y-4 bg-white p-5 sm:p-6 rounded-2xl border border-[#ECE8E2] shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#ECE8E2]">
                  <h3 className="text-xs uppercase tracking-wider text-[#2B2B2B] font-semibold flex items-center gap-2">
                    <Truck size={15} className="text-[#69705A]" />
                    <span>1. Lieferadresse &amp; Kontaktdaten</span>
                  </h3>
                  <span className="text-[11px] text-[#69705A] font-medium">Kostenloser Versand</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium">{t('checkout.fullName', 'Vollständiger Name')}</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#ECE8E2] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium">{t('checkout.emailAddress', 'E-Mail-Adresse für Rechnung')}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#ECE8E2] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[#666666] mb-1 font-medium">{t('checkout.streetAddress', 'Straße & Hausnummer')}</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#ECE8E2] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium">{t('checkout.city', 'Stadt & PLZ')}</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#ECE8E2] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium">{t('checkout.country', 'Land')}</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#ECE8E2] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods Selection (PayPal, Credit Card, Klarna) */}
              <div className="space-y-4 bg-white p-5 sm:p-6 rounded-2xl border border-[#ECE8E2] shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#ECE8E2]">
                  <h3 className="text-xs uppercase tracking-wider text-[#2B2B2B] font-semibold flex items-center gap-2">
                    <CreditCard size={15} className="text-[#69705A]" />
                    <span>2. Zahlungsmethode wählen</span>
                  </h3>
                  <span className="text-[11px] text-[#69705A] font-semibold flex items-center gap-1">
                    <Lock size={11} /> 256-Bit SSL Verschlüsselt
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* PayPal Option */}
                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod('paypal')}
                    className={`p-3.5 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center ${
                      selectedPaymentMethod === 'paypal'
                        ? 'border-[#0070BA] bg-[#0070BA]/5 ring-2 ring-[#0070BA]/20'
                        : 'border-[#ECE8E2] bg-[#FAF8F5] hover:border-[#0070BA]/50'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <span className="font-extrabold text-sm italic text-[#003087]">Pay</span>
                      <span className="font-extrabold text-sm italic text-[#0079C1]">Pal</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#003087] block">Express &amp; Käuferschutz</span>
                  </button>

                  {/* Credit Card Option */}
                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod('credit_card')}
                    className={`p-3.5 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center ${
                      selectedPaymentMethod === 'credit_card'
                        ? 'border-[#B96A3C] bg-[#B96A3C]/5 ring-2 ring-[#B96A3C]/20'
                        : 'border-[#ECE8E2] bg-[#FAF8F5] hover:border-[#B96A3C]/50'
                    }`}
                  >
                    <CreditCard size={18} className={selectedPaymentMethod === 'credit_card' ? 'text-[#B96A3C]' : 'text-[#666666]'} />
                    <span className="text-[10px] font-semibold text-[#2B2B2B] block">Kreditkarte / Apple Pay</span>
                  </button>

                  {/* Klarna Option */}
                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod('klarna')}
                    className={`p-3.5 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center ${
                      selectedPaymentMethod === 'klarna'
                        ? 'border-[#E06D53] bg-[#E06D53]/10 ring-2 ring-[#E06D53]/30'
                        : 'border-[#ECE8E2] bg-[#FAF8F5] hover:border-[#E06D53]/50'
                    }`}
                  >
                    <span className="font-black text-sm text-[#2B2B2B]">Klarna.</span>
                    <span className="text-[10px] font-semibold text-[#2B2B2B] block">Rechnung in 30 Tagen</span>
                  </button>
                </div>

                {/* PayPal Express Banner when selected */}
                {selectedPaymentMethod === 'paypal' && (
                  <div className="bg-[#FFC439]/15 border border-[#FFC439] p-3.5 rounded-xl flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#0070BA] text-white flex items-center justify-center font-bold italic text-xs shrink-0">
                        P
                      </div>
                      <div>
                        <p className="font-bold text-[#003087]">PayPal Express Checkout</p>
                        <p className="text-[11px] text-[#666666]">Vollständiger Käuferschutz &amp; 0% Ratenzahlung möglich</p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#003087] bg-white px-2 py-0.5 rounded-md border border-[#FFC439] shrink-0">
                      Aktiv
                    </span>
                  </div>
                )}
              </div>

              {/* Order Financial Summary */}
              <div className="bg-white p-5 rounded-2xl border border-[#ECE8E2] space-y-2.5 text-xs text-[#2B2B2B] shadow-2xs">
                <div className="flex justify-between text-[#666666]">
                  <span>{t('checkout.itemsTotal', 'Zwischensumme')} ({cartItems.reduce((a, b) => a + b.quantity, 0)} Artikel)</span>
                  <span className="font-medium text-[#2B2B2B]">€{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#69705A] font-semibold">
                  <span>{t('checkout.whiteGloveDelivery', 'Standard-Lieferung (Dülmen Hub)')}</span>
                  <span>{t('checkout.freeDelivery', 'Kostenlos (€0.00)')}</span>
                </div>
                <div className="flex justify-between font-serif text-lg border-t border-[#ECE8E2] pt-3 font-normal text-[#2B2B2B]">
                  <span>{t('checkout.totalPayable', 'Gesamtbetrag (inkl. MwSt.)')}</span>
                  <span className="font-medium text-[#B96A3C]">€{subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="text-[11px] text-[#666666] text-center leading-relaxed">
                {t('checkout.legalConsent', 'Mit Klick auf Bestellung aufgeben akzeptieren Sie unsere AGB, Datenschutz- und Widerrufsbelehrung.')}
              </div>

              {/* Payment CTA Submit Button */}
              {selectedPaymentMethod === 'paypal' ? (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FFC439] hover:bg-[#F4B400] text-[#003087] py-4 text-xs uppercase tracking-wider font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      <span>{t('checkout.processing', 'Verbindung zu PayPal...')}</span>
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
                  className="w-full bg-[#2B2B2B] hover:bg-[#B96A3C] text-white py-4 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      <span>{t('checkout.processing', 'Bestellung wird verarbeitet...')}</span>
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
          )}

          {/* STEP 2: POST-PAYMENT DELIVERY DETAILS FORM */}
          {step === 'post-payment' && (
            <div className="space-y-6">
              <div className="text-center pb-5 border-b border-[#ECE8E2]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#69705A]/15 text-[#69705A] border border-[#69705A] rounded-full text-[11px] font-semibold mb-2">
                  <CheckCircle size={13} />
                  <span>{t('checkout.paymentConfirmedBadge', { email: formData.email, defaultValue: `Zahlung erfolgreich (${formData.email})` })}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B] font-normal">
                  {t('checkout.schedulingTitle', 'Zustell- & Service-Präferenzen')}
                </h2>
                <p className="text-xs text-[#666666] max-w-md mx-auto mt-1 font-light">
                  {t('checkout.schedulingSubtitle', 'Wählen Sie Ihren gewünschten Zustellkorridor aus unserem Dülmen Logistikzentrum.')}
                </p>
              </div>

              <form onSubmit={handleSaveDeliveryPreferences} className="space-y-4 text-xs">
                
                {/* Phone & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium flex items-center gap-1.5">
                      <Phone size={13} className="text-[#69705A]" />
                      <span>{t('checkout.phoneLabel', 'Telefonnummer für Liefer-Updates')}</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={deliveryData.phone}
                      onChange={(e) => setDeliveryData({ ...deliveryData, phone: e.target.value })}
                      placeholder="+49 170 1234567"
                      className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#666666] mb-1 font-medium flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#69705A]" />
                      <span>{t('checkout.preferredDate', 'Bevorzugter Liefertermin')}</span>
                    </label>
                    <select
                      value={deliveryData.preferredDeliveryDate}
                      onChange={(e) => setDeliveryData({ ...deliveryData, preferredDeliveryDate: e.target.value })}
                      className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                    >
                      <option value="Earliest Available (Next 2-4 Days)">Schnellstmöglich (2–4 Werktage)</option>
                      <option value="This Week Friday">Diese Woche Freitag (Express)</option>
                      <option value="Next Week Monday">Nächste Woche Montag (Termin)</option>
                      <option value="Flexible / Contact to schedule">Flexibel / Absprache via WhatsApp</option>
                    </select>
                  </div>
                </div>

                {/* Time Window & Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#666666] mb-1 font-medium flex items-center gap-1.5">
                      <Clock size={13} className="text-[#69705A]" />
                      <span>{t('checkout.timeWindow', 'Zeitfenster')}</span>
                    </label>
                    <select
                      value={deliveryData.deliveryTimeWindow}
                      onChange={(e) => setDeliveryData({ ...deliveryData, deliveryTimeWindow: e.target.value })}
                      className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                    >
                      <option value="Morning (9:00 - 13:00)">Vormittags (9:00 - 13:00)</option>
                      <option value="Afternoon (13:00 - 17:00)">Nachmittags (13:00 - 17:00)</option>
                      <option value="Evening (17:00 - 20:00)">Abends (17:00 - 20:00)</option>
                      <option value="Anytime">Ganztägig / Standard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#666666] mb-1 font-medium flex items-center gap-1.5">
                      <Building size={13} className="text-[#69705A]" />
                      <span>{t('checkout.floorAccess', 'Etage / Zugangshinweis')}</span>
                    </label>
                    <input
                      type="text"
                      value={deliveryData.gateFloorNotes}
                      onChange={(e) => setDeliveryData({ ...deliveryData, gateFloorNotes: e.target.value })}
                      placeholder="z.B. 2. OG, Aufzug vorhanden, Tor-Code #4829"
                      className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                    />
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-[#666666] mb-1 font-medium">
                    {t('checkout.instructions', 'Besondere Hinweise für den Spediteur')}
                  </label>
                  <textarea
                    rows={2}
                    value={deliveryData.specialInstructions}
                    onChange={(e) => setDeliveryData({ ...deliveryData, specialInstructions: e.target.value })}
                    placeholder="z.B. Bitte vor Ankunft kurz anrufen, Teppich vor der Wohnungstür abstellen"
                    className="w-full bg-white border border-[#ECE8E2] px-3.5 py-2 rounded-xl outline-none focus:border-[#B96A3C] text-[#2B2B2B]"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#69705A] hover:bg-[#505744] text-white py-4 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        <span>{t('checkout.savingSchedule', 'Einstellungen werden gespeichert...')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('checkout.savePreferencesBtn', 'Lieferdetails speichern & Abschließen')}</span>
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
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-[#69705A] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle size={32} />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#69705A] font-semibold block mb-1">
                  {t('checkout.confirmedBadge', 'Bestellung erfolgreich eingegangen')}
                </span>
                <h2 className="font-serif text-3xl text-[#2B2B2B] font-normal">
                  {t('checkout.confirmedTitle', 'Vielen Dank für Ihre Bestellung!')}
                </h2>
              </div>

              {/* Reference numbers box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-xs">
                <div className="p-3.5 bg-white border border-[#ECE8E2] rounded-xl text-left shadow-2xs">
                  <span className="text-[10px] text-[#8B8B8B] uppercase tracking-wider block font-semibold">{t('checkout.nurseryOrderId', 'Bestellnummer')}</span>
                  <strong className="text-sm font-mono text-[#2B2B2B]">{confirmedOrderId || 'LH-2026-8492'}</strong>
                </div>
                <div className="p-3.5 bg-[#69705A]/10 border border-[#69705A]/30 rounded-xl text-left shadow-2xs">
                  <span className="text-[10px] text-[#69705A] uppercase tracking-wider block font-semibold">{t('checkout.dulmenHubRef', 'PlentyONE ERP Referenz')}</span>
                  <strong className="text-sm font-mono text-[#2B2B2B]">{confirmedPlentyOrderId || 'PLENTY-ORD-571201'}</strong>
                </div>
              </div>

              {/* SMTP Invoice note */}
              <div className="p-4 bg-white border border-[#ECE8E2] rounded-xl max-w-md mx-auto text-xs text-[#666666] space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-[#69705A] font-semibold justify-center">
                  <Mail size={15} className="text-[#B96A3C]" />
                  <span>{invoiceSent ? t('checkout.invoiceSent', 'Rechnung per E-Mail versendet') : t('checkout.invoiceQueued', 'Rechnung wird vorbereitet')}</span>
                </div>
                <p className="text-[11px] text-[#8B8B8B] leading-relaxed">
                  {t('checkout.invoiceEmailSent', { email: formData.email, defaultValue: `Eine detaillierte PDF-Rechnung wurde an ${formData.email} gesendet.` })}
                </p>
                <div className="pt-2 border-t border-[#ECE8E2]">
                  <a
                    href={orderService.getInvoicePreviewUrl(confirmedOrderId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#B96A3C] hover:underline font-semibold inline-flex items-center gap-1.5"
                  >
                    <ExternalLink size={13} />
                    <span>{t('checkout.viewPdfInvoice', 'PDF-Rechnungsvorschau öffnen')}</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  setStep('details');
                }}
                className="bg-[#2B2B2B] text-white px-8 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#69705A] transition-colors inline-block cursor-pointer shadow-sm"
              >
                {t('checkout.continueShopping', 'Weiter stöbern')}
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
