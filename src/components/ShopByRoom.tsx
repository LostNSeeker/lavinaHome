import React from 'react';
import type { ShopRoom } from '../types';
import { ArrowRight } from 'lucide-react';

interface ShopByRoomProps {
  rooms: ShopRoom[];
  onSelectRoom: (roomSlug: string) => void;
}

export const ShopByRoom: React.FC<ShopByRoomProps> = ({ rooms, onSelectRoom }) => {
  return (
    <section className="py-24 bg-[#F4EEE6] border-b border-[#ECE8E2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium block mb-2">
            Interior Inspiration
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2B2B2B]">
            Shop by Room
          </h2>
        </div>
        <p className="text-xs text-[#666666] tracking-widest uppercase font-light">
          Harmonized rugs, wooden furnishings, and linens for every sanctuary.
        </p>
      </div>

      {/* Horizontal Scroll Snap */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room.roomSlug)}
              className="snap-start shrink-0 w-[280px] sm:w-[360px] md:w-[420px] group relative aspect-[3/4] overflow-hidden rounded-[2px] cursor-pointer bg-[#EFE7DC]"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Darkener */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/80 via-[#2B2B2B]/20 to-transparent" />

              {/* Card Overlay Text */}
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D9C5A7] font-medium block">
                  Space Styling
                </span>
                <h3 className="font-serif text-3xl font-normal group-hover:text-[#D9C5A7] transition-colors">
                  {room.name}
                </h3>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  {room.tagline}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white group-hover:translate-x-1 transition-transform">
                  <span>Explore Room</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
