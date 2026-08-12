import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  Scale, 
  RotateCcw, 
  Building2, 
  CheckCircle2, 
  ExternalLink, 
  Printer, 
  Lock, 
  Truck, 
  CreditCard, 
  Cookie, 
  Server, 
  Layers
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export type LegalTab = 'privacy' | 'terms' | 'withdrawal' | 'imprint';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
}) => {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);
  const [language, setLanguage] = useState<'DE' | 'EN'>(
    i18n.language?.toLowerCase().startsWith('en') ? 'EN' : 'DE'
  );

  // Sync initial tab and language when opening or i18n changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setLanguage(i18n.language?.toLowerCase().startsWith('en') ? 'EN' : 'DE');
    }
  }, [isOpen, initialTab, i18n.language]);


  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2D2B2A]/65 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FDFBF7] w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border border-[#EDE6DC] flex flex-col overflow-hidden animate-scale-up text-[#2D2B2A]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-white border-b border-[#EDE6DC] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#8EBBB0]/15 flex items-center justify-center text-[#8EBBB0]">
              <Scale size={20} />
            </div>
            <div>
              <h2 className="font-heading text-lg sm:text-xl font-medium text-[#2D2B2A]">
                {language === 'DE' ? 'Rechtliche Informationen & AGB' : 'Legal Compliance & Terms'}
              </h2>
              <span className="text-[10px] text-[#8EBBB0] font-bold uppercase tracking-wider block">
                Deutschland (DE) &amp; Österreich (AT) &bull; DSGVO, TDDDG &amp; FAGG konform
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#F7F3EB] rounded-full p-0.5 border border-[#EDE6DC] text-xs font-bold">
              <button
                onClick={() => setLanguage('DE')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'DE'
                    ? 'bg-[#E79685] text-white shadow-xs'
                    : 'text-[#6B6661] hover:text-[#2D2B2A]'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'EN'
                    ? 'bg-[#E79685] text-white shadow-xs'
                    : 'text-[#6B6661] hover:text-[#2D2B2A]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="p-2 text-[#6B6661] hover:text-[#2D2B2A] hover:bg-[#F7F3EB] rounded-full transition-colors cursor-pointer"
              title="Drucken / Als PDF speichern"
              aria-label="Print Document"
            >
              <Printer size={18} />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-[#6B6661] hover:text-[#2D2B2A] hover:bg-[#F7F3EB] rounded-full transition-colors cursor-pointer"
              aria-label="Fenster schließen"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto bg-[#F7F3EB] border-b border-[#EDE6DC] px-6 py-2.5 gap-2 text-xs font-bold tracking-wider uppercase scrollbar-none shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'bg-white text-[#E79685] shadow-xs border border-[#EDE6DC]'
                : 'text-[#6B6661] hover:text-[#2D2B2A]'
            }`}
          >
            <ShieldCheck size={15} className={activeTab === 'privacy' ? 'text-[#E79685]' : ''} />
            <span>{language === 'DE' ? 'Datenschutzerklärung' : 'Privacy Policy'}</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'terms'
                ? 'bg-white text-[#E79685] shadow-xs border border-[#EDE6DC]'
                : 'text-[#6B6661] hover:text-[#2D2B2A]'
            }`}
          >
            <FileText size={15} className={activeTab === 'terms' ? 'text-[#E79685]' : ''} />
            <span>{language === 'DE' ? 'AGB & Kundeninfo' : 'Terms & Conditions'}</span>
          </button>

          <button
            onClick={() => setActiveTab('withdrawal')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'withdrawal'
                ? 'bg-white text-[#E79685] shadow-xs border border-[#EDE6DC]'
                : 'text-[#6B6661] hover:text-[#2D2B2A]'
            }`}
          >
            <RotateCcw size={15} className={activeTab === 'withdrawal' ? 'text-[#E79685]' : ''} />
            <span>{language === 'DE' ? 'Widerrufsbelehrung' : 'Right of Withdrawal'}</span>
          </button>

          <button
            onClick={() => setActiveTab('imprint')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'imprint'
                ? 'bg-white text-[#E79685] shadow-xs border border-[#EDE6DC]'
                : 'text-[#6B6661] hover:text-[#2D2B2A]'
            }`}
          >
            <Building2 size={15} className={activeTab === 'imprint' ? 'text-[#E79685]' : ''} />
            <span>{language === 'DE' ? 'Impressum' : 'Legal Notice'}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-[#4A4744] leading-relaxed">
          
          {/* =======================================================================
              TAB 1: PRIVACY POLICY (DATENSCHUTZERKLÄRUNG - DSGVO / TDDDG / DSG)
             ======================================================================= */}
          {activeTab === 'privacy' && (
            language === 'DE' ? (
              <div className="space-y-6">
                
                {/* Header Banner */}
                <div className="border-b border-[#EDE6DC] pb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8EBBB0] block mb-1">
                    EU-DSGVO &bull; § 25 TDDDG &bull; Österreichisches DSG
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#2D2B2A]">
                    Datenschutzerklärung
                  </h3>
                  <p className="text-xs text-[#9E9891] mt-1">
                    Gültig ab August 2026 &bull; Für Kunden und Besucher in Deutschland und Österreich
                  </p>
                </div>

                {/* 1. Controller Details Card */}
                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] shadow-xs space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-[#EDE6DC] pb-2.5">
                    <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                      <Building2 size={16} className="text-[#8EBBB0]" />
                      1. Name und Anschrift des Verantwortlichen
                    </h4>
                    <span className="text-[10px] bg-[#8EBBB0]/15 text-[#6C9F93] px-2.5 py-0.5 rounded-full font-bold uppercase">
                      Art. 4 Nr. 7 DSGVO
                    </span>
                  </div>
                  <p>
                    Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO), des Bundesdatenschutzgesetzes (BDSG), des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG) sowie des österreichischen Datenschutzgesetzes (DSG) ist:
                  </p>
                  <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#EDE6DC] text-xs font-medium space-y-1">
                    <p className="text-[#2D2B2A] font-bold">Levinahome / KS Sales Depot</p>
                    <p>Industriestr. 23, 48249 Dülmen, Deutschland</p>
                    <p>E-Mail: <a href="mailto:service@levinahome.com" className="text-[#E79685] font-bold hover:underline">service@levinahome.com</a></p>
                    <p>Website: <a href="https://www.levinahome.com" className="text-[#E79685] hover:underline">www.levinahome.com</a></p>
                  </div>
                </div>

                {/* 2. Logfiles & Web Hosting */}
                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] shadow-xs space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-[#EDE6DC] pb-2.5">
                    <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                      <Server size={16} className="text-[#8EBBB0]" />
                      2. Bereitstellung der Website und Erstellung von Logfiles
                    </h4>
                    <span className="text-[10px] bg-[#8EBBB0]/15 text-[#6C9F93] px-2.5 py-0.5 rounded-full font-bold uppercase">
                      Art. 6 Abs. 1 lit. f DSGVO
                    </span>
                  </div>
                  <p>
                    Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#6B6661] bg-[#FDFBF7] p-3 rounded-xl border border-[#EDE6DC]">
                    <li>Browsertyp und verwendete Version</li>
                    <li>Betriebssystem des Nutzers</li>
                    <li>IP-Adresse des Nutzers (anonymisiert)</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Websites, von denen das System des Nutzers auf unsere Website gelangt (Referrer URL)</li>
                  </ul>
                  <p className="text-xs text-[#6B6661]">
                    Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen und zur Sicherung unserer informationstechnischen Systeme.
                  </p>
                </div>

                {/* 3. ERP & PlentyONE Order Processing */}
                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] shadow-xs space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-[#EDE6DC] pb-2.5">
                    <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                      <Layers size={16} className="text-[#8EBBB0]" />
                      3. Auftragsabwicklung und Warenwirtschaft (PlentyONE Integration)
                    </h4>
                    <span className="text-[10px] bg-[#8EBBB0]/15 text-[#6C9F93] px-2.5 py-0.5 rounded-full font-bold uppercase">
                      Art. 6 Abs. 1 lit. b DSGVO
                    </span>
                  </div>
                  <p>
                    Zur Abwicklung Ihrer Bestellungen, Verwaltung der Lagerbestände und Rechnungsstellung nutzen wir das Warenwirtschafts- und ERP-System <strong>PlentyONE</strong>.
                  </p>
                  <p>
                    Hierbei werden Bestandsdaten (Name, Adresse), Kontaktdaten (E-Mail, Telefonnummer falls angegeben) sowie Bestelldaten (bestellte Artikel, Stückzahlen, Rechnungsbetrag) über eine verschlüsselte API-Schnittstelle an PlentyONE übermittelt.
                  </p>
                  <p className="text-xs text-[#6B6661]">
                    <strong>Speicherdauer:</strong> Daten aus Kaufverträgen werden nach den gesetzlichen handels- und steuerrechtlichen Aufbewahrungsfristen (§ 257 HGB: 6 Jahre, § 147 AO und § 132 BAO Österreich: 7 bis 10 Jahre) gespeichert und anschließend gelöscht.
                  </p>
                </div>

                {/* 4. Payment Gateways */}
                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] shadow-xs space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-[#EDE6DC] pb-2.5">
                    <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                      <CreditCard size={16} className="text-[#8EBBB0]" />
                      4. Zahlungsdienstleister &amp; Abwicklung
                    </h4>
                    <span className="text-[10px] bg-[#8EBBB0]/15 text-[#6C9F93] px-2.5 py-0.5 rounded-full font-bold uppercase">
                      Art. 6 Abs. 1 lit. b DSGVO
                    </span>
                  </div>
                  <p>
                    Wir binden im Checkout verschiedene Zahlungsdienstleister ein. Die Datenverarbeitung erfolgt zur Erfüllung des Kaufvertrags:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#EDE6DC]">
                      <p className="font-bold text-[#2D2B2A]">PayPal (Europe) S.à r.l. et Cie</p>
                      <p className="text-[#6B6661] mt-0.5">22-24 Boulevard Royal, L-2449 Luxembourg</p>
                    </div>
                    <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#EDE6DC]">
                      <p className="font-bold text-[#2D2B2A]">Klarna Bank AB (publ)</p>
                      <p className="text-[#6B6661] mt-0.5">Sveavägen 46, 111 34 Stockholm, Schweden</p>
                    </div>
                    <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#EDE6DC]">
                      <p className="font-bold text-[#2D2B2A]">Stripe Payments Europe, Ltd.</p>
                      <p className="text-[#6B6661] mt-0.5">1 Grand Canal Street Lower, Dublin, Irland</p>
                    </div>
                    <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#EDE6DC]">
                      <p className="font-bold text-[#2D2B2A]">Apple Pay &amp; Google Pay</p>
                      <p className="text-[#6B6661] mt-0.5">Tokenisierte und verschlüsselte Direktabwicklung</p>
                    </div>
                  </div>
                </div>

                {/* 5. Shipping Carriers */}
                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] shadow-xs space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-[#EDE6DC] pb-2.5">
                    <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                      <Truck size={16} className="text-[#8EBBB0]" />
                      5. Versanddienstleister (Deutschland &amp; Österreich)
                    </h4>
                    <span className="text-[10px] bg-[#8EBBB0]/15 text-[#6C9F93] px-2.5 py-0.5 rounded-full font-bold uppercase">
                      Art. 6 Abs. 1 lit. b DSGVO
                    </span>
                  </div>
                  <p>
                    Zur Zustellung der bestellten Waren aus unserem Logistik-Hub in Dülmen übermitteln wir Name, Lieferadresse und Sendungsreferenz an unsere Logistikpartner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#6B6661]">
                    <li><strong>DHL Paket GmbH:</strong> Sträßchensweg 10, 53113 Bonn, Deutschland</li>
                    <li><strong>DPD Deutschland GmbH:</strong> Wailandtstraße 1, 63741 Aschaffenburg, Deutschland</li>
                    <li><strong>Österreichische Post AG:</strong> Rochusplatz 1, 1030 Wien, Österreich</li>
                  </ul>
                </div>

                {/* 6. Cookies & TDDDG */}
                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] shadow-xs space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-[#EDE6DC] pb-2.5">
                    <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                      <Cookie size={16} className="text-[#8EBBB0]" />
                      6. Cookies und Speichermedien (§ 25 TDDDG / § 165 TKG)
                    </h4>
                    <span className="text-[10px] bg-[#8EBBB0]/15 text-[#6C9F93] px-2.5 py-0.5 rounded-full font-bold uppercase">
                      § 25 TDDDG &bull; Art. 6 Abs. 1 lit. a DSGVO
                    </span>
                  </div>
                  <p>
                    Wir setzen technisch erforderliche Cookies und Session-Storage ein, um grundlegende Shop-Funktionen (Warenkorb, Wunschliste, Spracheinstellungen) bereitzustellen (§ 25 Abs. 2 Nr. 2 TDDDG).
                  </p>
                  <p>
                    Optionale Analyse- oder Präferenz-Cookies werden nur nach Ihrer ausdrücklichen Einwilligung im Cookie-Banner geladen (§ 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
                  </p>
                </div>

                {/* 7. Rights of the Data Subject */}
                <div className="bg-[#8EBBB0]/10 p-5 rounded-2xl border border-[#8EBBB0]/30 space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-[#8EBBB0]/30 pb-2">
                    <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                      <Lock size={16} className="text-[#8EBBB0]" />
                      7. Ihre Rechte als betroffene Person
                    </h4>
                    <span className="text-[10px] bg-white text-[#6C9F93] px-2.5 py-0.5 rounded-full font-bold uppercase border border-[#8EBBB0]/30">
                      DSGVO Kapitel III
                    </span>
                  </div>
                  <p>
                    Sie haben nach der DSGVO umfassende gesetzliche Rechte hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-[#8EBBB0]/20">
                      <CheckCircle2 size={14} className="text-[#8EBBB0] shrink-0 mt-0.5" />
                      <span><strong>Art. 15 DSGVO:</strong> Recht auf Auskunft</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-[#8EBBB0]/20">
                      <CheckCircle2 size={14} className="text-[#8EBBB0] shrink-0 mt-0.5" />
                      <span><strong>Art. 16 DSGVO:</strong> Recht auf Berichtigung</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-[#8EBBB0]/20">
                      <CheckCircle2 size={14} className="text-[#8EBBB0] shrink-0 mt-0.5" />
                      <span><strong>Art. 17 DSGVO:</strong> Recht auf Löschung</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-[#8EBBB0]/20">
                      <CheckCircle2 size={14} className="text-[#8EBBB0] shrink-0 mt-0.5" />
                      <span><strong>Art. 18 DSGVO:</strong> Einschränkung der Verarbeitung</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-[#8EBBB0]/20">
                      <CheckCircle2 size={14} className="text-[#8EBBB0] shrink-0 mt-0.5" />
                      <span><strong>Art. 20 DSGVO:</strong> Recht auf Datenübertragbarkeit</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-[#8EBBB0]/20">
                      <CheckCircle2 size={14} className="text-[#8EBBB0] shrink-0 mt-0.5" />
                      <span><strong>Art. 21 DSGVO:</strong> Widerspruchsrecht</span>
                    </div>
                  </div>
                  <div className="pt-2 text-xs text-[#6B6661] border-t border-[#8EBBB0]/30 space-y-1">
                    <p className="font-semibold text-[#2D2B2A]">Zuständige Aufsichtsbehörden:</p>
                    <p>&bull; <strong>Deutschland (NRW):</strong> Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestr. 2-4, 40213 Düsseldorf</p>
                    <p>&bull; <strong>Österreich:</strong> Österreichische Datenschutzbehörde (DSB), Barichgasse 40-42, 1030 Wien</p>
                  </div>
                </div>

              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-b border-[#EDE6DC] pb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8EBBB0] block mb-1">
                    EU-GDPR &bull; German TDDDG &bull; Austrian DSG
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#2D2B2A]">
                    Privacy Policy
                  </h3>
                  <p className="text-xs text-[#9E9891] mt-1">
                    Effective August 2026 &bull; Compliant for customers in Germany and Austria
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] shadow-xs space-y-3">
                  <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                    <Building2 size={16} className="text-[#8EBBB0]" />
                    1. Data Controller
                  </h4>
                  <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#EDE6DC] text-xs font-medium space-y-1">
                    <p className="text-[#2D2B2A] font-bold">Levinahome / KS Sales Depot</p>
                    <p>Industriestr. 23, 48249 Dülmen, Germany</p>
                    <p>Email: <a href="mailto:service@levinahome.com" className="text-[#E79685] font-bold hover:underline">service@levinahome.com</a></p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] shadow-xs space-y-3">
                  <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                    <Layers size={16} className="text-[#8EBBB0]" />
                    2. Order Fulfillment &amp; PlentyONE ERP Integration
                  </h4>
                  <p>
                    We collect customer and order information for the performance of sales contracts (Art. 6(1)(b) GDPR). Order data is routed securely via API to our <strong>PlentyONE</strong> ERP system for inventory synchronization and warehouse dispatch.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] shadow-xs space-y-3">
                  <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                    <CreditCard size={16} className="text-[#8EBBB0]" />
                    3. Payment Processing &amp; Carriers
                  </h4>
                  <p>
                    Payments are handled by verified PCI-DSS compliant providers (PayPal, Klarna, Stripe, Apple Pay, Google Pay). Parcels are dispatched from Dülmen hub via DHL Paket, DPD, or Österreichische Post.
                  </p>
                </div>

                <div className="bg-[#8EBBB0]/10 p-5 rounded-2xl border border-[#8EBBB0]/30 space-y-3">
                  <h4 className="font-bold text-[#2D2B2A] text-sm flex items-center gap-2">
                    <Lock size={16} className="text-[#8EBBB0]" />
                    4. Data Subject Rights (GDPR)
                  </h4>
                  <p>
                    Under the GDPR, you have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), data portability (Art. 20), and objection (Art. 21). Complaints can be lodged with the German LDI NRW or the Austrian Data Protection Authority (DSB).
                  </p>
                </div>
              </div>
            )
          )}

          {/* =======================================================================
              TAB 2: TERMS AND CONDITIONS (AGB - BGB & AUSTRIAN FAGG/KSchG)
             ======================================================================= */}
          {activeTab === 'terms' && (
            language === 'DE' ? (
              <div className="space-y-6">
                <div className="border-b border-[#EDE6DC] pb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E79685] block mb-1">
                    Allgemeine Geschäftsbedingungen &bull; BGB, EGBGB, FAGG &bull; DE &amp; AT
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#2D2B2A]">
                    Allgemeine Geschäftsbedingungen (AGB)
                  </h3>
                  <p className="text-xs text-[#9E9891] mt-1">
                    Stand: August 2026 &bull; Für Bestellungen im Levinahome Online-Shop
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] space-y-2 shadow-xs">
                    <h4 className="font-bold text-[#2D2B2A] text-sm">§ 1 Geltungsbereich und Anbieter</h4>
                    <p>
                      (1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Lieferung von Waren, die ein Verbraucher (§ 13 BGB bzw. § 1 KSchG Österreich) mit der Levinahome / KS Sales Depot über diesen Online-Shop schließt.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] space-y-2 shadow-xs">
                    <h4 className="font-bold text-[#2D2B2A] text-sm">§ 2 Vertragsschluss und Button-Lösung</h4>
                    <p>
                      (1) Die Darstellung der Artikel im Online-Shop stellt eine unverbindliche Aufforderung zur Abgabe einer Bestellung dar.
                    </p>
                    <p>
                      (2) Mit dem Anklicken des Buttons <strong>„Zahlungspflichtig bestellen“</strong> (§ 312j Abs. 3 BGB / § 8 FAGG Österreich) gibt der Kunde ein verbindliches Kaufangebot ab.
                    </p>
                    <p>
                      (3) Die Annahme erfolgt durch Zusendung einer Auftragsbestätigung per E-Mail binnen 48 Stunden oder durch Auslieferung der Ware.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] space-y-2 shadow-xs">
                    <h4 className="font-bold text-[#2D2B2A] text-sm">§ 3 Preise, Mehrwertsteuer und Versand</h4>
                    <p>
                      (1) Alle angegebenen Preise sind Endpreise in Euro (€) und enthalten die gesetzliche Mehrwertsteuer (19% Deutschland bzw. 20% Österreich).
                    </p>
                    <p>
                      (2) Die Lieferung erfolgt nach Deutschland und Österreich. Die Regellieferzeit für vorrätige Ware aus unserem Dülmener Hub beträgt <strong>2 bis 4 Werktage</strong>.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] space-y-2 shadow-xs">
                    <h4 className="font-bold text-[#2D2B2A] text-sm">§ 4 Gewährleistung (Mängelhaftung)</h4>
                    <p>
                      (1) Es gilt das gesetzliche Mängelhaftungsrecht (§§ 434 ff. BGB für Deutschland sowie §§ 922 ff. ABGB i.V.m. VGG für Österreich). Die Gewährleistungsfrist für Verbraucher beträgt <strong>2 Jahre</strong> ab Erhalt der Ware.
                    </p>
                  </div>

                  <div className="bg-[#F7F3EB] p-5 rounded-2xl border border-[#EDE6DC] space-y-2">
                    <h4 className="font-bold text-[#2D2B2A] text-sm">§ 5 Online-Streitbeilegung &amp; Schlichtung</h4>
                    <p>
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                      <a
                        href="https://ec.europa.eu/consumers/odr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E79685] font-bold hover:underline inline-flex items-center gap-1"
                      >
                        <span>https://ec.europa.eu/consumers/odr</span>
                        <ExternalLink size={12} />
                      </a>
                    </p>
                    <p className="text-xs text-[#6B6661]">
                      Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit (§ 36 VSBG / § 19 AStG).
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-b border-[#EDE6DC] pb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E79685] block mb-1">
                    Standard Terms &amp; Conditions &bull; DE &amp; AT
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#2D2B2A]">
                    Terms and Conditions (AGB)
                  </h3>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] space-y-3 shadow-xs">
                  <p>
                    These terms govern all sales to consumers in Germany and Austria under German BGB and Austrian FAGG/KSchG legislation. Orders are confirmed upon clicking &quot;Order and Pay&quot; (&quot;Zahlungspflichtig bestellen&quot;).
                  </p>
                  <p>
                    All prices include statutory VAT. Statutory 2-year warranty applies.
                  </p>
                </div>
              </div>
            )
          )}

          {/* =======================================================================
              TAB 3: RIGHT OF WITHDRAWAL (WIDERRUFSBELEHRUNG & MUSTER-FORMULAR)
             ======================================================================= */}
          {activeTab === 'withdrawal' && (
            language === 'DE' ? (
              <div className="space-y-6">
                <div className="border-b border-[#EDE6DC] pb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8EBBB0] block mb-1">
                    Gesetzliches Widerrufsrecht nach § 355 BGB &amp; § 11 FAGG
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#2D2B2A]">
                    Widerrufsbelehrung &amp; Widerrufsformular
                  </h3>
                  <p className="text-xs text-[#9E9891] mt-1">14 Tage gesetzliches Rücktrittsrecht für Verbraucher in Deutschland &amp; Österreich</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] space-y-3 shadow-xs">
                  <h4 className="font-bold text-[#2D2B2A] text-sm">Widerrufsrecht</h4>
                  <p>
                    Sie haben das Recht, binnen <strong>vierzehn Tagen</strong> ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
                  </p>
                  <p>
                    Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (<strong>Levinahome / KS Sales Depot, Industriestr. 23, 48249 Dülmen, Deutschland, E-Mail: service@levinahome.com</strong>) mittels einer eindeutigen Erklärung über Ihren Entschluss informieren.
                  </p>
                  <p className="text-xs text-[#6B6661] pt-2 border-t border-[#EDE6DC]">
                    Rücksendeadresse: <strong>Levinahome Retourenzentrum, Industriestr. 23, 48249 Dülmen, Deutschland</strong>.
                  </p>
                </div>

                <div className="bg-[#F7F3EB] p-5 rounded-2xl border border-[#EDE6DC] space-y-3">
                  <h4 className="font-bold text-[#2D2B2A] text-sm">Muster-Widerrufsformular</h4>
                  <div className="bg-white p-4 rounded-xl border border-[#EDE6DC] text-xs font-mono space-y-2 leading-relaxed">
                    <p>An: Levinahome / KS Sales Depot, Industriestr. 23, 48249 Dülmen, Deutschland, E-Mail: service@levinahome.com</p>
                    <p className="pt-1 border-t border-[#EDE6DC]">
                      Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*):
                    </p>
                    <p>Bestellt am (*) / erhalten am (*): ________________________</p>
                    <p>Name des/der Verbraucher(s): ________________________</p>
                    <p>Anschrift des/der Verbraucher(s): ________________________</p>
                    <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): ________________________</p>
                    <p>Datum: ________________________</p>
                    <p className="text-[10px] text-[#9E9891]">(*) Unzutreffendes streichen.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-b border-[#EDE6DC] pb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8EBBB0] block mb-1">
                    EU Consumer Rights Directive
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#2D2B2A]">
                    Right of Withdrawal
                  </h3>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] space-y-3 shadow-xs">
                  <p>
                    You have the right to withdraw from this contract within <strong>14 days</strong> without giving any reason.
                  </p>
                  <p>
                    Return address: <strong>Levinahome Returns, Industriestr. 23, 48249 Dülmen, Germany (Email: service@levinahome.com)</strong>.
                  </p>
                </div>
              </div>
            )
          )}

          {/* =======================================================================
              TAB 4: IMPRINT / LEGAL NOTICE (§ 5 DDG & § 25 MEDIENGESETZ)
             ======================================================================= */}
          {activeTab === 'imprint' && (
            <div className="space-y-6">
              <div className="border-b border-[#EDE6DC] pb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8EBBB0] block mb-1">
                  Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) &amp; § 25 Mediengesetz (AT)
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#2D2B2A]">
                  {language === 'DE' ? 'Impressum & Anbieterkennzeichnung' : 'Legal Notice (Impressum)'}
                </h3>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#EDE6DC] space-y-3 shadow-xs">
                <h4 className="font-bold text-[#2D2B2A] text-sm">Diensteanbieter</h4>
                <div className="text-xs sm:text-sm space-y-1">
                  <p className="font-bold text-[#2D2B2A]">Levinahome / KS Sales Depot</p>
                  <p>Industriestr. 23</p>
                  <p>48249 Dülmen</p>
                  <p>Deutschland / Germany</p>
                </div>

                <div className="pt-2 border-t border-[#EDE6DC] space-y-1">
                  <p className="font-semibold text-[#2D2B2A]">Kontakt:</p>
                  <p>E-Mail: <a href="mailto:service@levinahome.com" className="text-[#E79685] font-bold hover:underline">service@levinahome.com</a></p>
                  <p>Kundenservice-Zeiten: Montag bis Freitag, 09:00 – 17:00 Uhr (MEZ)</p>
                </div>

                <div className="pt-2 border-t border-[#EDE6DC] space-y-1">
                  <p className="font-semibold text-[#2D2B2A]">Verantwortlich für redaktionelle Inhalte (§ 18 Abs. 2 MStV):</p>
                  <p>Levinahome Editorial Team, Industriestr. 23, 48249 Dülmen, Deutschland</p>
                </div>
              </div>

              <div className="bg-[#F7F3EB] p-5 rounded-2xl border border-[#EDE6DC] space-y-2 text-xs text-[#6B6661]">
                <h4 className="font-bold text-[#2D2B2A] text-sm">Haftungsausschluss &amp; Urheberrecht</h4>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#EDE6DC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <span className="text-[#9E9891] text-[11px]">
            © 2026 Levinahome. Rechtssicher nach deutschem und österreichischem Recht.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-[#8EBBB0] hover:bg-[#7CAAA0] text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wider transition-all cursor-pointer shadow-pillowy-sage"
          >
            {language === 'DE' ? 'Schließen' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
