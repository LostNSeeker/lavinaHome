import React from 'react';
import type { LegalTab } from './LegalModal';
import type { StoreMode } from '../types';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenLegal?: (tab: LegalTab) => void;
  onSwitchMode?: (mode: StoreMode) => void;
  currentMode?: StoreMode;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onSwitchMode,
  currentMode = 'general',
}) => {
  return (
    <footer className="bg-[#FAF8F5] pt-20 pb-12 border-t border-[#ECE8E2] text-[#2B2B2B]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#ECE8E2]">
          
          {/* Col 1: Brand Wordmark & Mode Switcher */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/levina_logo.png"
                alt="Levina Home Emblem"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-['Times_New_Roman',_Times,_serif] text-2xl tracking-[0.2em] font-normal uppercase text-[#2B2B2B] block">
                  LEVINA HOME
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#8B8B8B] uppercase font-sans font-light">
                  {currentMode === 'kids' ? '★ KIDS SANCTUARY' : 'THE SCANDINAVIAN COLLECTION'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed max-w-sm">
              {currentMode === 'kids'
                ? 'Zauberhafte Spielwelten, OEKO-TEX® zertifizierte Kinderteppiche und kuschelige Naturfelle für unbeschwerte Momente im Kinderzimmer.'
                : 'Bespoke Scandinavian area carpets, handwoven New Zealand wool rugs, and architectural furniture crafted for tranquil, timeless sanctuaries.'}
            </p>

            {/* Quick Mode Toggle in Footer */}
            {onSwitchMode && (
              <div className="pt-2">
                {currentMode === 'general' ? (
                  <button
                    onClick={() => onSwitchMode('kids')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E79685]/15 text-[#B96A3C] hover:bg-[#E79685] hover:text-white border border-[#E79685]/30 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer group"
                  >
                    <Sparkles size={13} className="text-[#E79685] group-hover:text-white transition-colors" />
                    <span>Switch to Levina Kids Collection &rarr;</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onSwitchMode('general')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B2B2B] text-white hover:bg-[#505744] text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer group"
                  >
                    <span>Switch to General Home Collection &rarr;</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#69705A] font-semibold block">
              Explore Storefront
            </span>
            <ul className="space-y-2.5 text-xs text-[#666666] font-light tracking-wide">
              <li>
                <a href="#featured-collections" className="hover:text-[#B96A3C] transition-colors">
                  Featured Collections
                </a>
              </li>
              <li>
                <a href="#carpet-3d-studio" className="hover:text-[#B96A3C] transition-colors">
                  3D WebGL Carpet Studio
                </a>
              </li>
              <li>
                <a href="#shop-by-room" className="hover:text-[#B96A3C] transition-colors">
                  Shop by Room Sanctuaries
                </a>
              </li>
              <li>
                <a href="#brand-story" className="hover:text-[#B96A3C] transition-colors">
                  Artisanal Craftsmanship &amp; Story
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Logistics Hub & Direct Support */}
          <div className="lg:col-span-4 bg-white/80 p-6 rounded-[2px] border border-[#ECE8E2] space-y-4 shadow-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#69705A] font-semibold block mb-1">
                Central Logistics &amp; Showroom
              </span>
              <h4 className="font-serif text-base font-normal text-[#2B2B2B]">
                KS Sales &bull; Böing Carpet GmbH
              </h4>
              <p className="text-xs text-[#666666] font-light mt-1 leading-relaxed">
                Industriestr. 23<br />
                48249 Dülmen, Germany
              </p>
            </div>

            <div className="pt-3 border-t border-[#ECE8E2] space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#8B8B8B]">Customer Concierge:</span>
                <a
                  href="mailto:service@levinahome.com"
                  className="text-[#B96A3C] hover:underline font-medium"
                >
                  service@levinahome.com
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#8B8B8B]">Direct Dispatch:</span>
                <span className="text-[#2B2B2B] font-medium">DHL / DPD Freight Hub</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B8B8B] font-light">
          <span>&copy; {new Date().getFullYear()} LEVINA HOME (Böing Carpet GmbH). All rights reserved.</span>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-[#2B2B2B] transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
            <button
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-[#2B2B2B] transition-colors cursor-pointer"
            >
              AGB
            </button>
            <button
              onClick={() => onOpenLegal?.('withdrawal')}
              className="hover:text-[#2B2B2B] transition-colors cursor-pointer"
            >
              Widerruf
            </button>
            <button
              onClick={() => onOpenLegal?.('imprint')}
              className="hover:text-[#2B2B2B] transition-colors cursor-pointer"
            >
              Impressum
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
