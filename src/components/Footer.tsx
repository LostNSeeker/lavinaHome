import React from 'react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="bg-[#FAF8F5] pt-20 pb-12 border-t border-[#ECE8E2] text-[#2B2B2B]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Footer Top Brand Logo & Times New Roman Text */}
        <div className="pb-12 border-b border-[#ECE8E2] mb-12 flex flex-col items-start space-y-2">
          <div className="flex items-center gap-3">
            <img
              src="/lavina_logo.png"
              alt="LEVINA HOME Brand Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="font-['Times_New_Roman',_Times,_serif] text-2xl md:text-3xl tracking-[0.25em] font-normal uppercase text-[#2B2B2B]">
              LEVINA HOME
            </span>
          </div>
          <span className="text-[9px] tracking-[0.35em] text-[#8B8B8B] uppercase font-sans font-light">
            COPENHAGEN SANCTUARY STOREFRONT
          </span>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* Column 1: Collections */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-normal uppercase tracking-wider text-[#2B2B2B]">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#666666] font-light tracking-wide">
              <li>
                <button onClick={() => onSelectCategory('carpets')} className="hover:text-[#B96A3C] transition-colors">
                  Luxury Handwoven Carpets
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('rugs')} className="hover:text-[#B96A3C] transition-colors">
                  Minimalist Accent Rugs
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('furniture')} className="hover:text-[#B96A3C] transition-colors">
                  Bespoke Solid Oak Furniture
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('decor')} className="hover:text-[#B96A3C] transition-colors">
                  Artisanal Ceramic Decor
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('textiles')} className="hover:text-[#B96A3C] transition-colors">
                  Flax Linen &amp; Wool Textiles
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('kitchen')} className="hover:text-[#B96A3C] transition-colors">
                  Scandinavian Kitchenware
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-normal uppercase tracking-wider text-[#2B2B2B]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#666666] font-light tracking-wide">
              <li><a href="#about" className="hover:text-[#B96A3C] transition-colors">About LEVINA HOME</a></li>
              <li><a href="#story" className="hover:text-[#B96A3C] transition-colors">Artisan Craftsmanship</a></li>
              <li><a href="#sustainability" className="hover:text-[#B96A3C] transition-colors">Sustainability Commitment</a></li>
              <li><a href="#journal" className="hover:text-[#B96A3C] transition-colors">Editorial Journal</a></li>
              <li><a href="#careers" className="hover:text-[#B96A3C] transition-colors">Copenhagen Studio Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-normal uppercase tracking-wider text-[#2B2B2B]">
              Support &amp; Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#666666] font-light tracking-wide">
              <li><a href="#care" className="hover:text-[#B96A3C] transition-colors">Carpet Care Guide</a></li>
              <li><a href="#shipping" className="hover:text-[#B96A3C] transition-colors">White-Glove Shipping &amp; Returns</a></li>
              <li><a href="#bespoke" className="hover:text-[#B96A3C] transition-colors">Custom Loom Requests</a></li>
              <li><a href="#trade" className="hover:text-[#B96A3C] transition-colors">Interior Designer Trade Program</a></li>
              <li><a href="#faq" className="hover:text-[#B96A3C] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 4: Socials & Flagship Studio */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-normal uppercase tracking-wider text-[#2B2B2B]">
              Flagship Studio
            </h4>
            <p className="text-xs text-[#666666] font-light leading-relaxed">
              Storegade 42, 1260 København K<br />
              Denmark
            </p>
            <div className="pt-2 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#8B8B8B] block font-medium">Connect</span>
              <div className="flex gap-4 text-xs text-[#666666] font-light">
                <a href="#instagram" className="hover:text-[#B96A3C] transition-colors">Instagram</a>
                <a href="#pinterest" className="hover:text-[#B96A3C] transition-colors">Pinterest</a>
                <a href="#linkedin" className="hover:text-[#B96A3C] transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 border-t border-[#ECE8E2] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#8B8B8B] font-light">
          <div className="flex items-center gap-3">
            <img src="/lavina_logo.png" alt="Levina Home Logo" className="h-5 w-auto" />
            <span className="font-['Times_New_Roman',_Times,_serif] text-sm uppercase text-[#2B2B2B] font-normal tracking-widest">LEVINA HOME</span>
            <span>© 2026 LEVINA HOME. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#2B2B2B] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#2B2B2B] transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-[#2B2B2B] transition-colors">Accessibility (WCAG 2.1)</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
