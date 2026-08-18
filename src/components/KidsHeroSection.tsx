import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Feather, Droplets, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface KidsHeroSectionProps {
  onExploreClick: () => void;
  onShopCarpetsClick: () => void;
  onBackToGeneralClick?: () => void;
}

export const KidsHeroSection: React.FC<KidsHeroSectionProps> = ({
  onExploreClick,
  onShopCarpetsClick,
}) => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden flex items-center bg-[#FDFBF7]">
      {/* Lifestyle Background Image with Ken Burns Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_section.png"
          alt="Warm nursery with cozy carpet and natural lighting"
          className="w-full h-full object-cover object-center animate-kenburns opacity-90 filter brightness-[0.98]"
        />
        {/* Soft Warm Pastel Cream Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/85 to-transparent w-full md:w-4/5 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-2 pb-10">
        <div className="max-w-2xl animate-fade-up space-y-6">
          
          {/* Playful Floating Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8EBBB0] bg-[#8EBBB0]/15 px-3.5 py-1.5 rounded-full border border-[#8EBBB0]/30 shadow-xs">
              <Sparkles size={13} className="text-[#8EBBB0]" />
              <span>{t('hero.badgeNonToxic')}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E79685] bg-[#E79685]/15 px-3.5 py-1.5 rounded-full border border-[#E79685]/30 shadow-xs">
              <Heart size={13} className="text-[#E79685]" />
              <span>{t('hero.badgeCopenhagen')}</span>
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold text-[#2D2B2A] leading-[1.08] tracking-tight">
            {t('hero.titleLine1')} <br />
            <span className="text-[#E79685] underline decoration-wavy decoration-[#8EBBB0]/60 decoration-2">
              {t('hero.titleHighlight')}
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#6B6661] font-normal leading-relaxed max-w-lg">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="bg-[#E79685] hover:bg-[#D47B68] text-white px-8 py-4 text-xs tracking-wider font-bold uppercase rounded-full shadow-pillowy-coral hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>{t('hero.exploreCollections')}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onShopCarpetsClick}
              className="border-2 border-[#8EBBB0] bg-white/80 hover:bg-[#8EBBB0] text-[#2D2B2A] hover:text-white px-8 py-4 text-xs tracking-wider font-bold uppercase rounded-full shadow-pillowy-sage hover:scale-105 transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{t('hero.shopCarpets')}</span>
            </button>
          </div>

          {/* Quick Trust Highlights / Legends */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EDE6DC]/80 max-w-md text-[#6B6661]">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#8EBBB0]" />
              <span className="text-xs font-medium">{t('hero.oekoTex')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Feather size={16} className="text-[#E79685]" />
              <span className="text-xs font-medium">{t('hero.cloudWool')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets size={16} className="text-[#8EBBB0]" />
              <span className="text-xs font-medium">{t('hero.spillProof')}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 text-[#9E9891] text-[10px] tracking-widest uppercase font-medium">
        <span>{t('hero.scrollToExplore')}</span>
        <div className="w-[2px] h-6 bg-[#8EBBB0] rounded-full animate-gentle-bounce" />
      </div>
    </section>
  );
};
