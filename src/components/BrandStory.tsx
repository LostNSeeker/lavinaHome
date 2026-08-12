import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BrandStory: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="brand-story" className="py-28 bg-[#FDFBF7] border-b border-[#EDE6DC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center space-y-10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold block bg-[#8EBBB0]/15 w-fit mx-auto px-4 py-1 rounded-full">
          {t('brandStory.badge')}
        </span>

        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium text-[#2D2B2A] leading-[1.2] max-w-4xl mx-auto">
          {t('brandStory.quote')}
        </h2>

        {/* Minimal Hero Lifestyle Photography */}
        <div className="relative aspect-[16/9] max-w-5xl mx-auto overflow-hidden rounded-3xl bg-[#F7F3EB] shadow-pillowy my-10 border border-[#EDE6DC]">
          <img
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1600&auto=format&fit=crop"
            alt="Parent and toddler playing on soft Scandinavian playmat"
            className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto pt-4 text-[#6B6661] text-sm leading-relaxed">
          <div className="bg-white p-6 rounded-3xl border border-[#EDE6DC] shadow-pillowy">
            <div className="w-10 h-10 rounded-2xl bg-[#8EBBB0]/15 flex items-center justify-center text-[#8EBBB0] mb-3">
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-heading text-lg text-[#2D2B2A] font-medium mb-2">{t('brandStory.pillar1Title')}</h3>
            <p>{t('brandStory.pillar1Desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-[#EDE6DC] shadow-pillowy">
            <div className="w-10 h-10 rounded-2xl bg-[#E79685]/15 flex items-center justify-center text-[#E79685] mb-3">
              <Heart size={22} />
            </div>
            <h3 className="font-heading text-lg text-[#2D2B2A] font-medium mb-2">{t('brandStory.pillar2Title')}</h3>
            <p>{t('brandStory.pillar2Desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-[#EDE6DC] shadow-pillowy">
            <div className="w-10 h-10 rounded-2xl bg-[#E5B769]/15 flex items-center justify-center text-[#E5B769] mb-3">
              <Sparkles size={22} />
            </div>
            <h3 className="font-heading text-lg text-[#2D2B2A] font-medium mb-2">{t('brandStory.pillar3Title')}</h3>
            <p>{t('brandStory.pillar3Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};



