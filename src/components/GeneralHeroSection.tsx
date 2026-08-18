import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

interface GeneralHeroSectionProps {
  onExploreClick: () => void;
  onShopCarpetsClick?: () => void;
  onOpenKidsClick: () => void;
}

export const GeneralHeroSection: React.FC<GeneralHeroSectionProps> = ({
  onExploreClick,
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
          <div className="mb-3">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.35em] text-[#69705A]">
              Handgefertigte Manufaktur
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#2B2B2B] leading-[1.12] tracking-tight mb-4">
            Luxus &amp; Zeitloser Komfort
          </h1>

          <p className="text-base md:text-lg text-[#666666] font-light leading-relaxed mb-7 max-w-md">
            Handgewebte Schurwolle und edle Naturfelle für anspruchsvolles Wohnen.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={onExploreClick}
              className="bg-[#B96A3C] hover:bg-[#A75D36] text-white px-7 py-3.5 text-xs tracking-[0.2em] font-medium uppercase rounded-[4px] shadow-sm hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Compass size={15} />
              <span>Kollektion entdecken</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenKidsClick}
              className="bg-white/90 hover:bg-[#E79685] hover:text-white text-[#2B2B2B] border border-[#E79685]/40 px-5 py-3.5 text-xs tracking-[0.15em] font-medium uppercase rounded-[4px] shadow-2xs hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Sparkles size={14} className="text-[#E79685] group-hover:text-white transition-colors" />
              <span>🧸 Kinderwelt</span>
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
