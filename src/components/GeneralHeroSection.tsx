import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

interface GeneralHeroSectionProps {
  onExploreClick: () => void;
  onShopCarpetsClick: () => void;
  onOpenKidsClick: () => void;
}

export const GeneralHeroSection: React.FC<GeneralHeroSectionProps> = ({
  onExploreClick,
  onShopCarpetsClick,
  onOpenKidsClick,
}) => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center bg-[#F4EEE6]">
      {/* Lifestyle Background Image with Ken Burns Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/HeroImage.jpeg"
          alt="Exklusiver Levina Home Teppich"
          className="w-full h-full object-cover object-center animate-kenburns opacity-90 filter brightness-[0.96]"
        />
        {/* Soft Warm Neutral Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/60 to-transparent w-full md:w-3/4 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-16">
        <div className="max-w-2xl animate-fade-up">
          
          {/* Subtle German Badge */}
          <div className="mb-4">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.35em] text-[#69705A]">
              Levina Home Teppich-Kollektion
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#2B2B2B] leading-[1.1] tracking-tight mb-6">
            Handgefertigte Teppiche <br />
            <span className="italic font-light text-[#505744]">Für zeitloses Wohnen &amp; Wohlfühlen.</span>
          </h1>

          <p className="text-base md:text-lg text-[#666666] font-light leading-relaxed mb-8 max-w-lg">
            Wunderschöne Räume. Besondere Momente. Handgewebte Naturwolle, OEKO-TEX® zertifizierte Textilien und erstklassige Manufakturqualität.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreClick}
              className="bg-[#B96A3C] hover:bg-[#A75D36] text-white px-8 py-4 text-xs tracking-[0.2em] font-medium uppercase rounded-[4px] shadow-sm hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <Compass size={15} />
              <span>Kollektion entdecken</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenKidsClick}
              className="bg-[#FAF8F5]/90 hover:bg-[#E79685] hover:text-white text-[#2B2B2B] border border-[#E79685]/50 px-7 py-4 text-xs tracking-[0.18em] font-medium uppercase rounded-[4px] shadow-xs hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Sparkles size={14} className="text-[#E79685] group-hover:text-white transition-colors" />
              <span>Kinderteppiche &amp; Welten</span>
            </button>

            <button
              onClick={onShopCarpetsClick}
              className="border border-[#69705A] text-[#43463D] hover:bg-[#69705A] hover:text-white px-7 py-4 text-xs tracking-[0.2em] font-medium uppercase rounded-[4px] transition-all duration-300 text-center cursor-pointer"
            >
              Teppiche ansehen
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-[#8B8B8B] text-[10px] tracking-[0.3em] uppercase">
        <span>Nach unten scrollen</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#8B8B8B] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
