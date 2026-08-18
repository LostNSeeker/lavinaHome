import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { StoreMode } from '../types';

interface SplitEditorialBannerProps {
  storeMode?: StoreMode;
  onExploreClick: () => void;
}

export const SplitEditorialBanner: React.FC<SplitEditorialBannerProps> = ({
  storeMode = 'general',
  onExploreClick,
}) => {
  const { t } = useTranslation();

  if (storeMode === 'general') {
    return (
      <section className="py-24 bg-[#FAF8F5] overflow-hidden border-b border-[#ECE8E2]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Editorial Text Content */}
            <div className="space-y-6 lg:pr-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#69705A] font-semibold bg-[#69705A]/15 px-3 py-1 rounded-full w-fit">
                <Sparkles size={14} className="text-[#69705A]" />
                <span>Handgewebte Manufaktur</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2B2B2B] leading-[1.12]">
                Reine Naturwolle &amp; <span className="italic text-[#B96A3C]">Wohlfühlkomfort</span>
              </h2>

              <p className="text-sm md:text-base text-[#666666] font-light leading-relaxed">
                Jeder Levina Home Luxusteppich vereint traditionelle Webkunst mit modernem Design. Ausgewählte Neuseeland-Schurwolle, dichte Webstrukturen und unvergleichliche Haptik schaffen ein Zuhause zum Wohlfühlen.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#ECE8E2] text-[#2B2B2B]">
                <div className="bg-white p-5 rounded-[4px] border border-[#ECE8E2] shadow-xs">
                  <span className="font-serif text-3xl text-[#69705A] block mb-0.5 font-normal">100%</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#666666] font-medium block">Reine Schurwolle</span>
                </div>
                <div className="bg-white p-5 rounded-[4px] border border-[#ECE8E2] shadow-xs">
                  <span className="font-serif text-3xl text-[#B96A3C] block mb-0.5 font-normal">Handarbeit</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#666666] font-medium block">Meisterhafte Webkunst</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onExploreClick}
                  className="bg-[#2B2B2B] hover:bg-[#69705A] text-white px-8 py-4 text-xs tracking-[0.2em] font-medium uppercase rounded-[4px] shadow-sm hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer group"
                >
                  <Compass size={14} />
                  <span>Teppich-Kollektion entdecken</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Luxury Carpet Interior Image */}
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[4px] overflow-hidden bg-[#EFE7DC] shadow-sm border border-[#ECE8E2]">
              <img
                src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop"
                alt="Exklusiver Wohnzimmer-Teppich mit warmen Naturtönen"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-[4px] text-[#2B2B2B] border border-[#ECE8E2] shadow-xs">
                <span className="text-[10px] tracking-wider uppercase text-[#69705A] font-bold block mb-1">
                  Qualitätsversprechen
                </span>
                <p className="font-serif text-lg md:text-xl text-[#2B2B2B] font-normal italic">
                  „Wo meisterhafte Handarbeit auf pure Gemütlichkeit trifft.“
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#FDFBF7] overflow-hidden border-b border-[#EDE6DC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Editorial Text Content */}
          <div className="space-y-6 lg:pr-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold bg-[#8EBBB0]/15 px-3 py-1 rounded-full w-fit">
              <Sparkles size={14} className="text-[#8EBBB0]" />
              <span>{t('editorial.badge')}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-medium text-[#2D2B2A] leading-[1.12]">
              {t('editorial.title')}<span className="text-[#E79685]">{t('editorial.titleHighlight')}</span>
            </h2>

            <p className="text-sm md:text-base text-[#6B6661] font-normal leading-relaxed">
              {t('editorial.description')}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#EDE6DC] text-[#2D2B2A]">
              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] shadow-pillowy">
                <span className="font-heading text-3xl text-[#8EBBB0] block mb-0.5 font-bold">{t('editorial.stat1Number')}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#6B6661] font-semibold block">{t('editorial.stat1Label')}</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] shadow-pillowy">
                <span className="font-heading text-3xl text-[#E79685] block mb-0.5 font-bold">{t('editorial.stat2Number')}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#6B6661] font-semibold block">{t('editorial.stat2Label')}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="bg-[#8EBBB0] hover:bg-[#6C9F93] text-white px-8 py-4 text-xs tracking-wider font-bold uppercase rounded-full shadow-pillowy-sage hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer group"
              >
                <span>{t('editorial.safetyStory')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Lifestyle Image Banner */}
          <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-[#F7F3EB] shadow-pillowy border border-[#EDE6DC]">
            <img
              src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=1200&auto=format&fit=crop"
              alt="Kleinkind spielt auf kuscheligem Kinderteppich"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2B2A]/40 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl text-[#2D2B2A] border border-[#EDE6DC] shadow-pillowy">
              <span className="text-[10px] tracking-wider uppercase text-[#8EBBB0] font-bold block mb-1">
                {t('editorial.copenhagenBadge')}
              </span>
              <p className="font-heading text-xl text-[#2D2B2A] font-medium">
                {t('editorial.quote')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


