import React from 'react';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-32 bg-[#FAF8F5] border-b border-[#ECE8E2]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center space-y-12">
        <span className="text-xs uppercase tracking-[0.4em] text-[#69705A] font-medium block">
          Our Philosophy & Craftsmanship
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#2B2B2B] leading-[1.25] max-w-4xl mx-auto">
          "We believe a home should feel like a sanctuary—quiet, enduring, and rooted in natural harmony."
        </h2>

        {/* Minimal Hero Lifestyle Photography */}
        <div className="relative aspect-[16/9] max-w-5xl mx-auto overflow-hidden rounded-[2px] bg-[#EFE7DC] shadow-xs my-12">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop"
            alt="Levina Home Scandinavian interior studio"
            className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-4xl mx-auto pt-4 text-[#666666] font-light text-sm leading-relaxed">
          <div>
            <h3 className="font-serif text-xl text-[#2B2B2B] font-normal mb-2">Sustainable Fibers</h3>
            <p>We source un-bleached New Zealand wool, organic flax linens, and certified European hardwoods harvested with environmental stewardship.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-[#2B2B2B] font-normal mb-2">Generational Weavers</h3>
            <p>Every rug is hand-loomed over weeks by master weavers who pass down traditional knotting techniques across generations.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-[#2B2B2B] font-normal mb-2">Timeless Longevity</h3>
            <p>Designed to age gracefully alongside your memories. Free from chemical finishes, synthetic dyes, or transient trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
