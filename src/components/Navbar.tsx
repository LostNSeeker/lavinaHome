import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAuth?: () => void;
  onOpenIntegrationModal?: () => void;
  onSelectCategory: (category: string) => void;
  activeCategory?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAuth,
  onSelectCategory,
}) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EDE6DC] py-2.5 shadow-pillowy'
            : 'bg-transparent text-[#2D2B2A] py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Language Switcher on Left Desktop/Mobile */}
          <div className="flex items-center min-w-[80px] sm:min-w-[120px]">
            <LanguageSwitcher />
          </div>

          {/* Center: Brand Unit (Emblem Logo close to Text Wordmark in Middle) */}
          <div className="flex-1 flex items-center justify-center px-2 sm:px-4">
            <button
              onClick={() => onSelectCategory('all')}
              className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-5 cursor-pointer group py-0.5"
              aria-label={t('nav.home')}
            >
              <img
                src="/Levina_home_logo.png"
                alt="Levinahome Emblem"
                className="h-9 sm:h-12 md:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
              />
              <img
                src="/text_levinaHome.png"
                alt="Levinahome"
                className="h-10 sm:h-14 md:h-18 lg:h-20 w-auto max-w-[340px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[860px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
          </div>

          {/* Right: Actions (Profile First, then Search, Wishlist, Cart) */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 text-[#2D2B2A] min-w-[80px] sm:min-w-[120px] justify-end">
            {onOpenAuth && (
              <button
                onClick={onOpenAuth}
                className="p-2 rounded-full hover:bg-white text-[#6B6661] hover:text-[#E79685] transition-all relative group cursor-pointer"
                title={t('nav.account')}
                aria-label={t('nav.account')}
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </button>
            )}

            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full hover:bg-white text-[#6B6661] hover:text-[#8EBBB0] transition-all relative group cursor-pointer"
              title={t('nav.search')}
              aria-label={t('nav.search')}
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            <button
              onClick={onOpenWishlist}
              className="p-2 rounded-full hover:bg-white text-[#6B6661] hover:text-[#E79685] transition-all relative group hidden sm:block cursor-pointer"
              title={t('nav.wishlist')}
              aria-label={t('nav.wishlist')}
            >
              <Heart size={20} strokeWidth={1.8} />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#E79685] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="p-2 px-3 rounded-full bg-white hover:bg-[#8EBBB0] text-[#2D2B2A] hover:text-white transition-all duration-300 relative group flex items-center gap-2 border border-[#EDE6DC] shadow-pillowy cursor-pointer"
              title={t('nav.cart')}
              aria-label={t('nav.cart')}
            >
              <div className="relative">
                <ShoppingBag size={18} strokeWidth={1.8} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#8EBBB0] group-hover:bg-[#E79685] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider">
                {t('nav.cart')}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};


