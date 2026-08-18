import React from 'react';
import { ShieldCheck, Heart, Sparkles, Compass, Leaf, Award, Feather, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { StoreMode } from '../types';

interface BrandStoryProps {
  storeMode?: StoreMode;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ storeMode = 'general' }) => {
  const { t } = useTranslation();

  if (storeMode === 'kids') {
    return (
      <section id="brand-story" className="w-full bg-[#FAF8F5] overflow-hidden">
        {/* Compact Header */}
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold inline-block bg-[#8EBBB0]/15 px-4 py-1 rounded-full shadow-2xs">
            {t('brandStory.badge')}
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-[#2D2B2A] leading-[1.2]">
            {t('brandStory.quote')}
          </h2>

          <p className="text-sm md:text-base text-[#6B6661] max-w-2xl mx-auto font-normal">
            {t('brandStory.subtitle')}
          </p>
        </div>

        {/* Full-Width Hero Lifestyle Visual with Floating Safety Badges */}
        <div className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] lg:h-[680px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2400&auto=format&fit=crop"
            alt="Parent and toddler playing on soft non-toxic playmat"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />

          {/* Warm Dark Vignette Overlay for Crisp Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

          {/* Floating Highlight Badges (Top Left & Top Right) */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-10 animate-fade-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/45 backdrop-blur-md border border-white/30 text-white shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8EBBB0] animate-pulse" />
              <Leaf size={16} className="text-[#8EBBB0]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {t('brandStory.tagToxicFree', '100% Toxic-Free & Baby-Safe')}
              </span>
            </div>
          </div>

          <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-10 hidden sm:block">
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/45 backdrop-blur-md border border-white/30 text-white shadow-xl">
              <ShieldCheck size={16} className="text-[#E5B769]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {t('brandStory.tagOekoTex', 'OEKO-TEX® Certified')}
              </span>
            </div>
          </div>

          {/* Center Floating Glass Tags Overlay Strip */}
          <div className="absolute bottom-6 sm:bottom-10 inset-x-0 z-10 px-4 sm:px-8 max-w-5xl mx-auto">
            <div className="bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                  <Leaf size={14} className="text-[#8EBBB0]" />
                  {t('brandStory.tagToxicFree', '100% Toxic-Free')}
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                  <Award size={14} className="text-[#E5B769]" />
                  {t('brandStory.tagOekoTex', 'OEKO-TEX® Standard 100')}
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                  <Feather size={14} className="text-[#F2B0A2]" />
                  {t('brandStory.tagCushioning', 'Cloud-Soft Cushioning')}
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                  <Sparkles size={14} className="text-[#E5B769]" />
                  {t('brandStory.tagNaturalWool', 'Pure Organic Wool')}
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                  <CheckCircle2 size={14} className="text-[#8EBBB0]" />
                  {t('brandStory.tagZeroChemicals', '0% Chemical Dyes')}
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                  <Heart size={14} className="text-[#E79685]" />
                  {t('brandStory.tagPlantWax', 'Plant-Based Wax')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillar Summary Cards Below Image */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left text-[#6B6661] text-sm leading-relaxed">
            <div className="bg-white p-7 rounded-3xl border border-[#EDE6DC] shadow-pillowy hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-2xl bg-[#8EBBB0]/15 flex items-center justify-center text-[#8EBBB0] mb-4">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-heading text-lg text-[#2D2B2A] font-medium mb-1.5">
                {t('brandStory.pillar1Title')}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed">
                {t('brandStory.pillar1Desc')}
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#EDE6DC] shadow-pillowy hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-2xl bg-[#E79685]/15 flex items-center justify-center text-[#E79685] mb-4">
                <Heart size={22} />
              </div>
              <h3 className="font-heading text-lg text-[#2D2B2A] font-medium mb-1.5">
                {t('brandStory.pillar2Title')}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed">
                {t('brandStory.pillar2Desc')}
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#EDE6DC] shadow-pillowy hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-2xl bg-[#E5B769]/15 flex items-center justify-center text-[#E5B769] mb-4">
                <Sparkles size={22} />
              </div>
              <h3 className="font-heading text-lg text-[#2D2B2A] font-medium mb-1.5">
                {t('brandStory.pillar3Title')}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed">
                {t('brandStory.pillar3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Allgemeine Levina Home Manufaktur-Philosophie
  return (
    <section id="brand-story" className="w-full bg-[#FAF8F5] overflow-hidden">
      {/* Compact Elegant Header */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.35em] text-[#69705A] font-medium inline-block">
          {t('generalBrandStory.badge', 'Unsere Philosophie & Handwerkskunst')}
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2B2B2B] leading-[1.2] tracking-tight">
          {t('generalBrandStory.quote', '„Natürliche Geborgenheit, zeitlose Wärme & reine Handwerkskunst.“')}
        </h2>

        <p className="text-sm md:text-base text-[#666666] font-light max-w-2xl mx-auto leading-relaxed">
          {t('generalBrandStory.subtitle', 'Ethisch handgefertigt aus reiner Naturwolle mit meisterhafter Webtradition.')}
        </p>
      </div>

      {/* Full-Width Lifestyle Visual with Floating Artisan Badges */}
      <div className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[700px] overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2400&auto=format&fit=crop"
          alt="Levina Home Teppich & Interior Manufaktur"
          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle Dark Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

        {/* Top Floating Highlight Badges */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/45 backdrop-blur-md border border-white/30 text-white shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8EBBB0] animate-pulse" />
            <Leaf size={16} className="text-[#8EBBB0]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {t('generalBrandStory.tagToxicFree', '100% Toxic-Free & Pure')}
            </span>
          </div>
        </div>

        <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-10 hidden sm:block">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/45 backdrop-blur-md border border-white/30 text-white shadow-xl">
            <ShieldCheck size={16} className="text-[#E5B769]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {t('generalBrandStory.tagOekoTex', 'OEKO-TEX® Certified')}
            </span>
          </div>
        </div>

        {/* Bottom Floating Glassmorphism Tag Ribbon */}
        <div className="absolute bottom-6 sm:bottom-10 inset-x-0 z-10 px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                <Leaf size={14} className="text-[#8EBBB0]" />
                {t('generalBrandStory.tagToxicFree', '100% Toxic-Free')}
              </span>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                <Award size={14} className="text-[#E5B769]" />
                {t('generalBrandStory.tagOekoTex', 'OEKO-TEX® Standard 100')}
              </span>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                <Sparkles size={14} className="text-[#F2B0A2]" />
                {t('generalBrandStory.tagNaturalWool', '100% Organic Wool')}
              </span>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                <Compass size={14} className="text-[#8EBBB0]" />
                {t('generalBrandStory.tagHandmade', 'Artisan Hand-Knotted')}
              </span>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                <CheckCircle2 size={14} className="text-[#8EBBB0]" />
                {t('generalBrandStory.tagZeroChemicals', '0% Chemical Dyes')}
              </span>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
                <Heart size={14} className="text-[#E79685]" />
                {t('generalBrandStory.tagHypoallergenic', 'Naturally Hypoallergenic')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Pillar Summary Cards Below Image */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left text-[#666666] font-light text-sm leading-relaxed">
          <div className="p-7 bg-white/80 rounded-2xl border border-[#ECE8E2] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 rounded-full bg-[#69705A]/10 flex items-center justify-center text-[#69705A] mb-4">
              <Leaf size={20} />
            </div>
            <h3 className="font-serif text-xl text-[#2B2B2B] font-normal mb-1.5">
              {t('generalBrandStory.pillar1Title', '100% Schadstofffrei')}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              {t('generalBrandStory.pillar1Desc', 'Ungebleichte Naturwolle und OEKO-TEX® zertifizierte Textilien für ein gesundes Wohnklima.')}
            </p>
          </div>

          <div className="p-7 bg-white/80 rounded-2xl border border-[#ECE8E2] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 rounded-full bg-[#B96A3C]/10 flex items-center justify-center text-[#B96A3C] mb-4">
              <Heart size={20} />
            </div>
            <h3 className="font-serif text-xl text-[#2B2B2B] font-normal mb-1.5">
              {t('generalBrandStory.pillar2Title', 'Meisterhafte Handwerkskunst')}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              {t('generalBrandStory.pillar2Desc', 'Mit höchster Sorgfalt gewebt und geknüpft – für fühlbaren Luxus über Generationen.')}
            </p>
          </div>

          <div className="p-7 bg-white/80 rounded-2xl border border-[#ECE8E2] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 rounded-full bg-[#69705A]/10 flex items-center justify-center text-[#69705A] mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-serif text-xl text-[#2B2B2B] font-normal mb-1.5">
              {t('generalBrandStory.pillar3Title', 'Nachhaltig & Zeitlos')}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              {t('generalBrandStory.pillar3Desc', 'Ethische Naturfasern und zeitlose Ästhetik für anspruchsvolles, bewusstes Wohnen.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
