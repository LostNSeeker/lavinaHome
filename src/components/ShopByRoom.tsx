import React from 'react';
import type { ShopRoom, StoreMode } from '../types';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ShopByRoomProps {
  rooms: ShopRoom[];
  storeMode?: StoreMode;
  onSelectRoom: (roomSlug: string) => void;
}

export const ShopByRoom: React.FC<ShopByRoomProps> = ({ rooms, storeMode = 'general', onSelectRoom }) => {
  const { t } = useTranslation();

  const getRoomName = (room: ShopRoom) => {
    switch (room.roomSlug) {
      case 'kids': return t('rooms.kids.name', { defaultValue: room.name });
      case 'living-room': return t('rooms.livingRoom.name', { defaultValue: room.name });
      case 'office': return t('rooms.office.name', { defaultValue: room.name });
      case 'bedroom': return t('rooms.bedroom.name', { defaultValue: room.name });
      case 'dining': return t('rooms.dining.name', { defaultValue: room.name });
      default: return room.name;
    }
  };

  const getRoomTagline = (room: ShopRoom) => {
    switch (room.roomSlug) {
      case 'kids': return t('rooms.kids.tagline', { defaultValue: room.tagline });
      case 'living-room': return t('rooms.livingRoom.tagline', { defaultValue: room.tagline });
      case 'office': return t('rooms.office.tagline', { defaultValue: room.tagline });
      case 'bedroom': return t('rooms.bedroom.tagline', { defaultValue: room.tagline });
      case 'dining': return t('rooms.dining.tagline', { defaultValue: room.tagline });
      default: return room.tagline;
    }
  };

  return (
    <section id="shop-by-room" className="py-24 bg-[#FAF8F5] border-b border-[#ECE8E2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium block mb-2">
            {storeMode === 'kids' ? t('shopByRoom.badge', 'Kinderzimmer Styling') : 'Curated Spaces'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2B2B2B]">
            {storeMode === 'kids' ? t('shopByRoom.title', 'Nach Raum Gestalten') : 'Shop by Room Sanctuary'}
          </h2>
        </div>
        <p className="text-xs text-[#666666] tracking-widest uppercase max-w-xs font-light">
          {storeMode === 'kids'
            ? t('shopByRoom.subtitle', 'Harmonized cloud rugs, toddler seating, and organic textiles.')
            : 'Harmonized wool carpets, sculpted seating, and tactile accessories for every room.'}
        </p>
      </div>

      {/* Horizontal Scroll Snap */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room.roomSlug)}
              className={`snap-start shrink-0 w-[280px] sm:w-[360px] md:w-[420px] group relative aspect-[3/4] overflow-hidden cursor-pointer bg-[#EFE7DC] shadow-xs border border-[#ECE8E2] ${
                storeMode === 'kids' ? 'rounded-3xl' : 'rounded-[2px]'
              }`}
            >
              <img
                src={room.image}
                alt={getRoomName(room)}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gentle Gradient Darkener */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/85 via-[#2B2B2B]/25 to-transparent" />

              {/* Card Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[10px] tracking-wider uppercase text-[#D9C5A7] font-medium block">
                  {t('shopByRoom.roomInspiration', 'Room Inspiration')}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-normal group-hover:text-[#B96A3C] transition-colors">
                  {getRoomName(room)}
                </h3>
                <p className="text-xs text-white/90 font-light leading-relaxed line-clamp-2">
                  {getRoomTagline(room)}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#D9C5A7] group-hover:text-[#B96A3C] group-hover:translate-x-1 transition-all">
                  <span>{t('shopByRoom.exploreRoom', 'Explore Room')}</span>
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
