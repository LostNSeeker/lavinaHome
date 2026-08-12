import React from 'react';
import type { LegalTab } from './LegalModal';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onOpenLegal?: (tab: LegalTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#FDFBF7] pt-16 pb-12 border-t border-[#EDE6DC] text-[#2D2B2A]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid: Big Logo on Left, Address & Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-14 border-b border-[#EDE6DC]">
          
          {/* Left Column: Big Brand Logo & Philosophy */}
          <div className="lg:col-span-7 space-y-4 flex flex-col items-start">
            <img
              src="/Logo Levinahome Kids.png"
              alt="Levinahome"
              className="h-32 sm:h-40 md:h-44 w-auto object-contain"
            />
            <p className="text-xs md:text-sm text-[#6B6661] max-w-md font-normal leading-relaxed">
              {t('footer.bio')}
            </p>
          </div>

          {/* Right Column: Studio Address & Contact Info */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE6DC] shadow-pillowy space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8EBBB0] font-bold block mb-1">
                {t('footer.hubTitle')}
              </span>
              <h4 className="font-heading text-lg font-medium text-[#2D2B2A]">
                {t('footer.hubName')}
              </h4>
              <p className="text-xs text-[#6B6661] mt-1 leading-relaxed">
                {t('footer.hubAddressLine1')}<br />
                {t('footer.hubAddressLine2')}
              </p>
            </div>

            <div className="pt-3 border-t border-[#EDE6DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E9891] block font-semibold">
                  {t('footer.customerCare')}
                </span>
                <a
                  href="mailto:service@levinahome.com"
                  className="text-[#E79685] hover:text-[#D47B68] font-bold transition-colors"
                >
                  service@levinahome.com
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E9891] block font-semibold mb-1">
                  {t('footer.followAlong')}
                </span>
                <div className="flex gap-3 text-xs text-[#6B6661] font-semibold">
                  <a
                    href="https://www.instagram.com/levinahomeshop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E79685] transition-colors"
                  >
                    Instagram
                  </a>
                  <span>&bull;</span>
                  <a
                    href="https://www.pinterest.com/service8366/?actingBusinessId=1150951385928862594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E79685] transition-colors"
                  >
                    Pinterest
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9E9891] font-normal">
          <span>{t('footer.rights')}</span>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
            <button
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-[#E79685] transition-colors cursor-pointer"
            >
              {t('footer.privacy')}
            </button>
            <button
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-[#E79685] transition-colors cursor-pointer"
            >
              {t('footer.terms')}
            </button>
            <button
              onClick={() => onOpenLegal?.('withdrawal')}
              className="hover:text-[#E79685] transition-colors cursor-pointer"
            >
              {t('footer.withdrawal')}
            </button>
            <button
              onClick={() => onOpenLegal?.('imprint')}
              className="hover:text-[#E79685] transition-colors cursor-pointer"
            >
              {t('footer.imprint')}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};


