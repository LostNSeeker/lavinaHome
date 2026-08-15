import React, { useState, useEffect, useRef } from 'react';
import { Search, Heart, ShoppingBag, ChevronDown, Sparkles, Tag, Menu, X, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export interface ShaggyColor {
  name: string;
  hex: string;
  border?: boolean;
}

export interface NavCategoryItem {
  id: string;
  label: string;
  categoryKey: string;
  isSale?: boolean;
  items: (string | ShaggyColor)[];
}

export const NAV_CATEGORIES: NavCategoryItem[] = [
  {
    id: 'kinderteppiche',
    label: 'Kinderteppiche',
    categoryKey: 'carpets',
    items: [
      'Prinzessin Lillifee',
      'Felix der Hase',
      'Die Lieben Sieben',
      'T-Rex World',
      'Pferdefreunde',
      'Baby Glück',
      "Capt'n Sharky",
      'Der Mondbär',
      'Bobby Car',
      'Rock Star Baby',
      'BC Kids',
    ],
  },
  {
    id: 'felle',
    label: 'Felle',
    categoryKey: 'carpets',
    items: [
      'Rinderfelle',
      'Lammfelle',
    ],
  },
  {
    id: 'shaggy',
    label: 'Shaggy',
    categoryKey: 'carpets',
    items: [
      { name: 'weiß', hex: '#FFFFFF', border: true },
      { name: 'aubergine', hex: '#4A154B' },
      { name: 'rot', hex: '#C53030' },
      { name: 'silber', hex: '#CBD5E1' },
      { name: 'schwarz', hex: '#1A202C' },
      { name: 'mocca', hex: '#5C3D2E' },
      { name: 'violett', hex: '#805AD5' },
      { name: 'bordeaux', hex: '#800020' },
      { name: 'beige', hex: '#D9C5A7' },
    ],
  },
  {
    id: 'sale',
    label: 'Sale',
    categoryKey: 'carpets',
    isSale: true,
    items: [
      'Kinderteppiche',
      'Shaggy',
    ],
  },
];

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAuth?: () => void;
  onOpenIntegrationModal?: () => void;
  onSelectCategory: (category: string) => void;
  onSelectTag?: (tag: string, parentCategory?: string) => void;
  activeCategory?: string;
  activeTag?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAuth,
  onSelectCategory,
  onSelectTag,
  activeTag,
}) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (catId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(catId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleTagClick = (tag: string, categoryKey: string) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    if (onSelectTag) {
      onSelectTag(tag, categoryKey);
    } else {
      onSelectCategory(categoryKey);
    }
    const targetElement = document.getElementById('catalog-grid') || document.getElementById('best-sellers');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryHeaderClick = (cat: NavCategoryItem) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    if (onSelectTag) {
      onSelectTag(cat.label, cat.categoryKey);
    } else {
      onSelectCategory(cat.categoryKey);
    }
    const targetElement = document.getElementById('catalog-grid') || document.getElementById('best-sellers');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    onSelectCategory('all');
    if (onSelectTag) {
      onSelectTag('', 'all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EDE6DC] py-2.5 sm:py-3 shadow-pillowy text-[#2D2B2A]'
            : 'bg-transparent text-[#2D2B2A] py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* LEFT: Logo (Emblem + Wordmark) */}
          <div className="flex items-center shrink-0">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group py-0.5"
              aria-label="Levina Home Homepage"
            >
              <img
                src="/Levina_home_logo.png"
                alt="Levinahome Emblem"
                className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 drop-shadow-xs"
              />
              <img
                src="/text_levinaHome.png"
                alt="Levina Home"
                className="h-7 sm:h-9 md:h-10 w-auto max-w-[140px] sm:max-w-[190px] md:max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-xs"
              />
            </button>
          </div>

          {/* CENTER: Navigation Tags with Dropdowns */}
          <nav className="hidden lg:flex items-center justify-center gap-1.5 xl:gap-2.5 flex-1 max-w-2xl mx-auto">
            {NAV_CATEGORIES.map((cat) => {
              const isOpen = activeDropdown === cat.id;
              const isSelected = activeTag === cat.label || (activeTag && cat.items.some(item => typeof item === 'string' ? item === activeTag : item.name === activeTag));

              return (
                <div
                  key={cat.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(cat.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleCategoryHeaderClick(cat)}
                    className={`px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                      cat.isSale
                        ? 'bg-[#E79685]/15 text-[#E79685] hover:bg-[#E79685] hover:text-white border border-[#E79685]/40 shadow-xs'
                        : isSelected
                        ? 'bg-[#8EBBB0] text-white shadow-pillowy-sage'
                        : isScrolled
                        ? 'text-[#2D2B2A] hover:bg-white hover:text-[#8EBBB0] border border-transparent hover:border-[#EDE6DC]'
                        : 'text-[#2D2B2A] bg-white/60 hover:bg-white hover:text-[#8EBBB0] border border-white/70 shadow-2xs backdrop-blur-xs'
                    }`}
                  >
                    {cat.isSale && <Tag size={13} className="shrink-0" />}
                    <span>{cat.label}</span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 opacity-70 ${
                        isOpen ? 'rotate-180 text-current' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Container */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-fade-in"
                      onMouseEnter={() => handleMouseEnter(cat.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white/98 backdrop-blur-md rounded-2xl border border-[#EDE6DC] shadow-pillowy p-3.5 min-w-[220px] max-w-[420px]">
                        
                        {/* Kinderteppiche Dropdown: 2-Column Grid */}
                        {cat.id === 'kinderteppiche' && (
                          <div>
                            <div className="px-2.5 pb-2 mb-2 border-b border-[#EDE6DC] flex items-center justify-between">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8EBBB0]">
                                {cat.label} Kollektionen
                              </span>
                              <span className="text-[10px] text-[#9E9891]">{cat.items.length} Serien</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1 min-w-[340px]">
                              {cat.items.map((item) => {
                                const itemName = typeof item === 'string' ? item : item.name;
                                const isItemActive = activeTag === itemName;

                                return (
                                  <button
                                    key={itemName}
                                    onClick={() => handleTagClick(itemName, cat.categoryKey)}
                                    className={`px-3 py-2 rounded-xl text-left text-xs font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer group ${
                                      isItemActive
                                        ? 'bg-[#8EBBB0]/15 text-[#8EBBB0] font-bold'
                                        : 'text-[#6B6661] hover:text-[#2D2B2A] hover:bg-[#F7F3EB]'
                                    }`}
                                  >
                                    <span className="truncate group-hover:translate-x-0.5 transition-transform">
                                      {itemName}
                                    </span>
                                    {isItemActive && <Check size={12} className="text-[#8EBBB0] shrink-0 ml-1" />}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Felle Dropdown: Clean Vertical List */}
                        {cat.id === 'felle' && (
                          <div className="space-y-1 min-w-[200px]">
                            <div className="px-2.5 pb-2 mb-1.5 border-b border-[#EDE6DC]">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8EBBB0]">
                                Naturfelle
                              </span>
                            </div>
                            {cat.items.map((item) => {
                              const itemName = typeof item === 'string' ? item : item.name;
                              const isItemActive = activeTag === itemName;

                              return (
                                <button
                                  key={itemName}
                                  onClick={() => handleTagClick(itemName, cat.categoryKey)}
                                  className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer group ${
                                    isItemActive
                                      ? 'bg-[#8EBBB0]/15 text-[#8EBBB0] font-bold'
                                      : 'text-[#6B6661] hover:text-[#2D2B2A] hover:bg-[#F7F3EB]'
                                  }`}
                                >
                                  <span className="group-hover:translate-x-0.5 transition-transform">
                                    {itemName}
                                  </span>
                                  {isItemActive && <Check size={12} className="text-[#8EBBB0] shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Shaggy Dropdown: 3-Column Color Swatches Grid */}
                        {cat.id === 'shaggy' && (
                          <div>
                            <div className="px-2.5 pb-2 mb-2 border-b border-[#EDE6DC] flex items-center justify-between">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8EBBB0]">
                                Shaggy Farbpalette
                              </span>
                              <span className="text-[10px] text-[#9E9891]">9 Farbtöne</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1.5 min-w-[280px]">
                              {cat.items.map((item) => {
                                const colorItem = typeof item === 'string' ? { name: item, hex: '#CBD5E1' } : item;
                                const isItemActive = activeTag === colorItem.name || activeTag === `Shaggy ${colorItem.name}`;

                                return (
                                  <button
                                    key={colorItem.name}
                                    onClick={() => handleTagClick(colorItem.name, cat.categoryKey)}
                                    className={`p-2 rounded-xl text-left text-xs font-semibold transition-all duration-150 flex items-center gap-2 cursor-pointer group ${
                                      isItemActive
                                        ? 'bg-[#8EBBB0]/15 text-[#8EBBB0] font-bold'
                                        : 'text-[#6B6661] hover:text-[#2D2B2A] hover:bg-[#F7F3EB]'
                                    }`}
                                    title={`Shaggy ${colorItem.name}`}
                                  >
                                    <span
                                      className={`w-3.5 h-3.5 rounded-full shrink-0 shadow-2xs ${
                                        colorItem.border ? 'border border-[#EDE6DC]' : ''
                                      }`}
                                      style={{ backgroundColor: colorItem.hex }}
                                    />
                                    <span className="capitalize text-[11px] truncate group-hover:translate-x-0.5 transition-transform">
                                      {colorItem.name}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Sale Dropdown: Accented Badges */}
                        {cat.id === 'sale' && (
                          <div className="space-y-1 min-w-[200px]">
                            <div className="px-2.5 pb-2 mb-1.5 border-b border-[#EDE6DC] flex items-center gap-1 text-[#E79685]">
                              <Sparkles size={12} />
                              <span className="text-[10px] uppercase font-bold tracking-wider">
                                Sale Aktionen
                              </span>
                            </div>
                            {cat.items.map((item) => {
                              const itemName = typeof item === 'string' ? item : item.name;
                              const isItemActive = activeTag === `Sale ${itemName}` || activeTag === itemName;

                              return (
                                <button
                                  key={itemName}
                                  onClick={() => handleTagClick(`Sale ${itemName}`, cat.categoryKey)}
                                  className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer group ${
                                    isItemActive
                                      ? 'bg-[#E79685]/15 text-[#E79685] font-bold'
                                      : 'text-[#6B6661] hover:text-[#E79685] hover:bg-[#F7F3EB]'
                                  }`}
                                >
                                  <span className="group-hover:translate-x-0.5 transition-transform">
                                    Sale &bull; {itemName}
                                  </span>
                                  <Tag size={12} className="text-[#E79685] shrink-0 opacity-80" />
                                </button>
                              );
                            })}
                          </div>
                        )}

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* RIGHT: Language Switcher & Action Icons */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2.5 text-[#2D2B2A] shrink-0 justify-end">
            
            {/* Language Switcher in Right */}
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>

            {/* Profile Button */}
            {onOpenAuth && (
              <button
                onClick={onOpenAuth}
                className="p-2 sm:p-2.5 rounded-full bg-white/70 hover:bg-white text-[#2D2B2A] hover:text-[#E79685] transition-all relative group cursor-pointer border border-white/80 shadow-2xs backdrop-blur-xs"
                title={t('nav.account')}
                aria-label={t('nav.account')}
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </button>
            )}

            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-full bg-white/70 hover:bg-white text-[#2D2B2A] hover:text-[#8EBBB0] transition-all relative group cursor-pointer border border-white/80 shadow-2xs backdrop-blur-xs"
              title={t('nav.search')}
              aria-label={t('nav.search')}
            >
              <Search size={17} strokeWidth={1.8} />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="p-2 sm:p-2.5 rounded-full bg-white/70 hover:bg-white text-[#2D2B2A] hover:text-[#E79685] transition-all relative group hidden sm:block cursor-pointer border border-white/80 shadow-2xs backdrop-blur-xs"
              title={t('nav.wishlist')}
              aria-label={t('nav.wishlist')}
            >
              <Heart size={17} strokeWidth={1.8} />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#E79685] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="p-2 px-2.5 sm:px-3 rounded-full bg-white/90 hover:bg-[#8EBBB0] text-[#2D2B2A] hover:text-white transition-all duration-300 relative group flex items-center gap-1.5 sm:gap-2 border border-[#EDE6DC] shadow-pillowy cursor-pointer backdrop-blur-xs"
              title={t('nav.cart')}
              aria-label={t('nav.cart')}
            >
              <div className="relative">
                <ShoppingBag size={17} strokeWidth={1.8} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#8EBBB0] group-hover:bg-[#E79685] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
                {t('nav.cart')}
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-white/70 hover:bg-white text-[#2D2B2A] transition-all lg:hidden cursor-pointer border border-white/80 shadow-2xs backdrop-blur-xs"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-b border-[#EDE6DC] px-4 py-4 space-y-3 shadow-pillowy max-h-[80vh] overflow-y-auto animate-fade-in">
            <div className="text-xs font-bold uppercase tracking-wider text-[#9E9891] px-2">
              Kategorien &amp; Kollektionen
            </div>

            {NAV_CATEGORIES.map((cat) => {
              const isExpanded = mobileExpandedCat === cat.id;

              return (
                <div key={cat.id} className="bg-white rounded-2xl border border-[#EDE6DC] overflow-hidden">
                  <button
                    onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                    className={`w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                      cat.isSale ? 'text-[#E79685] bg-[#E79685]/5' : 'text-[#2D2B2A]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {cat.isSale && <Tag size={13} />}
                      {cat.label}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="p-3 pt-0 border-t border-[#EDE6DC]/60 bg-[#FDFBF7]/50 space-y-1">
                      <button
                        onClick={() => handleCategoryHeaderClick(cat)}
                        className="w-full text-left text-xs font-bold text-[#8EBBB0] py-2 px-3 rounded-xl hover:bg-white cursor-pointer"
                      >
                        Alle {cat.label} ansehen &rarr;
                      </button>

                      {cat.id === 'shaggy' ? (
                        <div className="grid grid-cols-2 gap-1.5 pt-1">
                          {cat.items.map((item) => {
                            const colorItem = typeof item === 'string' ? { name: item, hex: '#CBD5E1' } : item;

                            return (
                              <button
                                key={colorItem.name}
                                onClick={() => handleTagClick(colorItem.name, cat.categoryKey)}
                                className="p-2 rounded-xl text-left text-xs text-[#6B6661] hover:text-[#2D2B2A] hover:bg-white flex items-center gap-2 cursor-pointer"
                              >
                                <span
                                  className="w-3 h-3 rounded-full shrink-0 border border-[#EDE6DC]"
                                  style={{ backgroundColor: colorItem.hex }}
                                />
                                <span className="capitalize">{colorItem.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                          {cat.items.map((item) => {
                            const itemName = typeof item === 'string' ? item : item.name;

                            return (
                              <button
                                key={itemName}
                                onClick={() => handleTagClick(itemName, cat.categoryKey)}
                                className="px-3 py-2 rounded-xl text-left text-xs text-[#6B6661] hover:text-[#2D2B2A] hover:bg-white truncate cursor-pointer"
                              >
                                {itemName}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};


