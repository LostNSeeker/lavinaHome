import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ParallaxBannerProps {
  onExploreClick: () => void;
}

export const ParallaxBanner: React.FC<ParallaxBannerProps> = ({ onExploreClick }) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate scroll progress within viewport
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
      className="relative w-full h-[650px] overflow-hidden flex items-center justify-center bg-[#2B2B2B]"
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
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
          alt="Parallax luxury interior carpet"
          className="w-full h-full object-cover opacity-60 filter brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-[#2B2B2B]/40 to-[#2B2B2B]" />
      </div>

      {/* Parallax Content Container */}
      <div
        className="relative z-10 max-w-[1000px] mx-auto px-6 text-center text-white space-y-6 animate-fade-up"
        style={{
          transform: `translateY(${-offsetY * 0.4}px)`,
        }}
      >
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[#D9C5A7] font-semibold">
          <Sparkles size={14} />
          <span>Tactile Scandinavian Living</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] text-[#FAF8F5]">
          "Simplicity is not the lack of clutter. <br />
          <span className="italic text-[#D9C5A7]">It is the presence of quiet purpose."</span>
        </h2>

        <p className="text-sm md:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
          Experience our scroll-driven 3D parallax spatial presentation. Each thread woven from un-dyed New Zealand organic wool.
        </p>

        <div className="pt-4">
          <button
            onClick={onExploreClick}
            className="bg-[#B96A3C] hover:bg-[#A75D36] text-white px-9 py-4 text-xs uppercase tracking-[0.25em] font-semibold rounded-[4px] inline-flex items-center gap-3 transition-colors shadow-lg"
          >
            <span>Explore 3D Lookbook</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
