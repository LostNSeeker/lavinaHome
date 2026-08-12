import React from 'react';
import type { ShopRoom } from '../types';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ShopByRoomProps {
  rooms: ShopRoom[];
  onSelectRoom: (roomSlug: string) => void;
}

export const ShopByRoom: React.FC<ShopByRoomProps> = ({ rooms, onSelectRoom }) => {
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
    <section className="py-24 bg-[#FDFBF7] border-b border-[#EDE6DC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold block mb-2 bg-[#8EBBB0]/15 w-fit px-3 py-1 rounded-full">
            {t('shopByRoom.badge')}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#2D2B2A]">
            {t('shopByRoom.title')}
          </h2>
        </div>
        <p className="text-xs text-[#6B6661] tracking-wide max-w-xs font-normal">
          {t('shopByRoom.subtitle')}
        </p>
      </div>

      {/* Horizontal Scroll Snap */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room.roomSlug)}
              className="snap-start shrink-0 w-[280px] sm:w-[360px] md:w-[420px] group relative aspect-[3/4] overflow-hidden rounded-3xl cursor-pointer bg-[#F7F3EB] shadow-pillowy border border-[#EDE6DC]"
            >
              <img
                src={room.image}
                alt={getRoomName(room)}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gentle Gradient Darkener */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2B2A]/85 via-[#2D2B2A]/25 to-transparent" />

              {/* Card Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[10px] tracking-wider uppercase text-[#E5B769] font-bold block">
                  {t('shopByRoom.roomInspiration')}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-medium group-hover:text-[#E79685] transition-colors">
                  {getRoomName(room)}
                </h3>
                <p className="text-xs text-white/90 font-normal leading-relaxed line-clamp-2">
                  {getRoomTagline(room)}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8EBBB0] group-hover:text-[#E79685] group-hover:translate-x-1 transition-all">
                  <span>{t('shopByRoom.exploreRoom')}</span>
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


