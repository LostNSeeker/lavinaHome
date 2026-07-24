import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface SplitEditorialBannerProps {
  onExploreClick: () => void;
}

export const SplitEditorialBanner: React.FC<SplitEditorialBannerProps> = ({ onExploreClick }) => {
  return (
    <section className="py-24 bg-[#FAF8F5] overflow-hidden border-b border-[#ECE8E2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Editorial Text Content */}
          <div className="space-y-6 lg:pr-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium">
              <Compass size={14} />
              <span>Editorial Focus</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2B2B2B] leading-[1.15]">
              The Art of Un-dyed New Zealand Wool
            </h2>

            <p className="text-sm md:text-base text-[#666666] font-light leading-relaxed">
              Every Levina Home carpet is hand-knotted by generational artisans using pristine wool washed in natural spring waters. We leave organic fibers un-bleached, revealing subtle tone variations that ground your room in quiet luxury.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#ECE8E2] text-[#2B2B2B]">
              <div>
                <span className="font-serif text-2xl md:text-3xl text-[#505744] block mb-1">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8B8B8B] block">Biodegradable Wool</span>
              </div>
              <div>
                <span className="font-serif text-2xl md:text-3xl text-[#B96A3C] block mb-1">45 Days</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8B8B8B] block">Handcrafted per Loom</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onExploreClick}
                className="bg-[#69705A] hover:bg-[#505744] text-white px-8 py-4 text-xs tracking-[0.2em] font-medium uppercase rounded-[4px] transition-all duration-300 inline-flex items-center gap-3 group"
              >
                <span>Read Craftsmanship Story</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Lifestyle Image Banner */}
          <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[2px] overflow-hidden bg-[#EFE7DC] shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
              alt="Handweaving luxury wool rug"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/40 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-[2px] text-[#2B2B2B]">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#69705A] font-medium block mb-1">
                Featured Space
              </span>
              <p className="font-serif text-xl text-[#2B2B2B] font-normal">
                "In a noisy world, true luxury is tactile silence."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
