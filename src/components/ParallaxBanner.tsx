import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ParallaxBannerProps {
  onExploreClick: () => void;
}

export const ParallaxBanner: React.FC<ParallaxBannerProps> = ({ onExploreClick }) => {
  const { t } = useTranslation();
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollDistance = windowHeight - rect.top;
        setOffsetY(scrollDistance * 0.15);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[600px] overflow-hidden flex items-center justify-center bg-[#2D2B2A]"
    >
      {/* Background Image with Scroll-Driven Parallax Motion */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translateY(${offsetY}px) scale(1.1)`,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2000&auto=format&fit=crop"
          alt="Child reading cozy bedtime story tucked in soft blanket"
          className="w-full h-full object-cover opacity-60 filter brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2B2A] via-[#2D2B2A]/40 to-[#2D2B2A]" />
      </div>

      {/* Parallax Content Container */}
      <div
        className="relative z-10 max-w-[900px] mx-auto px-6 text-center text-white space-y-6 animate-fade-up"
        style={{
          transform: `translateY(${-offsetY * 0.35}px)`,
        }}
      >
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5B769] font-semibold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
          <Sparkles size={14} className="text-[#E5B769]" />
          <span>{t('parallax.badge')}</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl font-medium leading-[1.15] text-[#FDFBF7]">
          {t('parallax.quote1')} <br />
          <span className="text-[#E79685] italic font-normal">{t('parallax.quoteHighlight')}</span>
        </h2>

        <p className="text-sm md:text-base text-white/80 font-normal max-w-xl mx-auto leading-relaxed">
          {t('parallax.description')}
        </p>

        <div className="pt-2">
          <button
            onClick={onExploreClick}
            className="bg-[#E79685] hover:bg-[#D47B68] text-white px-9 py-4 text-xs uppercase tracking-wider font-bold rounded-full inline-flex items-center gap-3 transition-all shadow-pillowy-coral hover:scale-105 cursor-pointer"
          >
            <span>{t('parallax.exploreStudio')}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};


