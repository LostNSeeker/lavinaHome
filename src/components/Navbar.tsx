import React, { useState, useEffect, useRef } from 'react';
import { Search, Heart, ShoppingBag, ChevronDown, Sparkles, Tag, Menu, X, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { StoreMode } from '../types';

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

export const KIDS_NAV_CATEGORIES: NavCategoryItem[] = [
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
    label: 'Babyfelle',
    categoryKey: 'naturfelle',
    items: [
      'Lammfelle',
      'Medizinische Felle',
    ],
  },
  {
    id: 'shaggy',
    label: 'Shaggy',
    categoryKey: 'carpets',
    items: [
      { name: 'weiß', hex: '#FFFFFF', border: true },
      { name: 'silber', hex: '#CBD5E1' },
      { name: 'rot', hex: '#C53030' },
      { name: 'violett', hex: '#805AD5' },
      { name: 'beige', hex: '#D9C5A7' },
      { name: 'aubergine', hex: '#4A154B' },
      { name: 'mocca', hex: '#5C3D2E' },
      { name: 'schwarz', hex: '#1A202C' },
      { name: 'bordeaux', hex: '#800020' },
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

export const GENERAL_NAV_CATEGORIES: NavCategoryItem[] = [
  {
    id: 'luxusteppiche',
    label: 'Luxusteppiche',
    categoryKey: 'carpets',
    items: [
      'Wollteppiche',
      'Handweb-Kollektionen',
      'Bio-Schurwolle',
      'Wohnzimmer',
      'Schlafzimmer',
      'Flur & Läufer',
    ],
  },
  {
    id: 'felle',
    label: 'Naturfelle',
    categoryKey: 'naturfelle',
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
      { name: 'mocca', hex: '#5C3D2E' },
      { name: 'beige', hex: '#D9C5A7' },
      { name: 'silber', hex: '#CBD5E1' },
      { name: 'schwarz', hex: '#1A202C' },
      { name: 'bordeaux', hex: '#800020' },
      { name: 'aubergine', hex: '#4A154B' },
      { name: 'rot', hex: '#C53030' },
      { name: 'violett', hex: '#805AD5' },
    ],
  },
  {
    id: 'sale',
    label: 'Sale',
    categoryKey: 'carpets',
    isSale: true,
    items: [
      'Wollteppiche',
      'Shaggy',
      'Naturfelle',
    ],
  },
];

export const NAV_CATEGORIES = KIDS_NAV_CATEGORIES;

interface NavbarProps {
  storeMode?: StoreMode;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAuth?: () => void;
  onOpenIntegrationModal?: () => void;
  onSelectCategory: (category: string) => void;
  onSelectTag?: (tag: string, parentCategory?: string) => void;
  onSwitchMode?: (mode: StoreMode) => void;
  activeCategory?: string;
  activeTag?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  storeMode = 'general',
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAuth,
  onSelectCategory,
  onSelectTag,
  onSwitchMode,
  activeTag,
}) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentCategories = storeMode === 'kids' ? KIDS_NAV_CATEGORIES : GENERAL_NAV_CATEGORIES;

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
            ? storeMode === 'kids'
              ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EDE6DC] py-2.5 sm:py-3 shadow-pillowy text-[#2D2B2A]'
              : 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#ECE8E2] py-2.5 sm:py-3 shadow-xs text-[#2B2B2B]'
            : 'bg-transparent text-[#2B2B2B] py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
          
          <div className="flex items-center gap-6 xl:gap-8 shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-white/70 hover:bg-white text-[#2B2B2A] transition-all lg:hidden cursor-pointer border border-white/80 shadow-2xs backdrop-blur-xs"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group py-0.5"
              aria-label="Levina Home Homepage"
            >
              <img
                src="/levina_logo.png"
                alt="Levina Home Emblem"
                className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 drop-shadow-xs"
              />
              <div className="flex flex-col text-left">
                <span className="font-['Times_New_Roman',_Times,_serif] text-lg sm:text-xl md:text-2xl tracking-[0.2em] font-normal uppercase text-[#2B2B2B] group-hover:text-[#B96A3C] transition-colors leading-none">
                  LEVINA HOME
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.35em] text-[#8B8B8B] uppercase font-sans font-light mt-0.5">
                  {storeMode === 'kids' ? '★ KINDERWELT & SPIELTEPPICHE' : 'LUXUS-TEPPICHE & WOHNKOMFORT'}
                </span>
              </div>
            </button>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-3 flex-1 max-w-2xl mx-auto">
            {currentCategories.map((cat) => {
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
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                      cat.isSale
                        ? 'bg-[#E79685]/15 text-[#E79685] hover:bg-[#E79685] hover:text-white border border-[#E79685]/40 shadow-xs'
                        : isSelected
                        ? storeMode === 'kids'
                          ? 'bg-[#8EBBB0] text-white shadow-pillowy-sage'
                          : 'bg-[#B96A3C] text-white shadow-xs'
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

                  {isOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-fade-in"
                      onMouseEnter={() => handleMouseEnter(cat.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white/98 backdrop-blur-md rounded-2xl border border-[#EDE6DC] shadow-pillowy p-3.5 min-w-[220px] max-w-[420px]">
                        
                        {cat.id === 'kinderteppiche' || cat.id === 'luxusteppiche' ? (
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
                        ) : null}

                        {cat.id === 'felle' && (
                          <div className="space-y-1 min-w-[200px]">
                            <div className="px-2.5 pb-2 mb-2 border-b border-[#EDE6DC] flex items-center justify-between">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8EBBB0]">
                                100% Echte Naturfelle
                              </span>
                            </div>
                            {cat.items.map((item) => {
                              const itemName = typeof item === 'string' ? item : item.name;
                              const isItemActive = activeTag === itemName;

                              return (
                                <button
                                  key={itemName}
                                  onClick={() => handleTagClick(itemName, cat.categoryKey)}
                                  className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                                    isItemActive
                                      ? 'bg-[#8EBBB0]/15 text-[#8EBBB0] font-bold'
                                      : 'text-[#6B6661] hover:text-[#2D2B2A] hover:bg-[#F7F3EB]'
                                  }`}
                                >
                                  <span>{itemName}</span>
                                  {isItemActive && <Check size={12} className="text-[#8EBBB0]" />}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {cat.id === 'shaggy' && (
                          <div>
                            <div className="px-2.5 pb-2 mb-2 border-b border-[#EDE6DC] flex items-center justify-between">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8EBBB0]">
                                Hochflor Farbwelten
                              </span>
                              <span className="text-[10px] text-[#9E9891]">9 Farben</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1.5 min-w-[280px]">
                              {cat.items.map((item) => {
                                const colorItem = item as ShaggyColor;
                                const isItemActive = activeTag === colorItem.name;

                                return (
                                  <button
                                    key={colorItem.name}
                                    onClick={() => handleTagClick(colorItem.name, cat.categoryKey)}
                                    className={`p-2 rounded-xl text-left text-xs transition-all duration-150 flex items-center gap-2 cursor-pointer group ${
                                      isItemActive
                                        ? 'bg-[#8EBBB0]/15 text-[#8EBBB0] font-bold'
                                        : 'text-[#6B6661] hover:text-[#2D2B2A] hover:bg-[#F7F3EB]'
                                    }`}
                                  >
                                    <span
                                      className="w-3.5 h-3.5 rounded-full shrink-0 border border-[#EDE6DC] shadow-2xs group-hover:scale-110 transition-transform"
                                      style={{ backgroundColor: colorItem.hex }}
                                    />
                                    <span className="truncate capitalize">{colorItem.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {cat.id === 'sale' && (
                          <div className="space-y-1 min-w-[220px]">
                            <div className="px-2.5 pb-2 mb-2 border-b border-[#EDE6DC] flex items-center justify-between">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E79685] flex items-center gap-1">
                                <Sparkles size={11} /> Reduzierte Angebote
                              </span>
                            </div>
                            {cat.items.map((item) => {
                              const itemName = typeof item === 'string' ? item : item.name;
                              const saleTag = `Sale - ${itemName}`;
                              const isItemActive = activeTag === saleTag;

                              return (
                                <button
                                  key={itemName}
                                  onClick={() => handleTagClick(saleTag, cat.categoryKey)}
                                  className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                                    isItemActive
                                      ? 'bg-[#E79685]/15 text-[#E79685] font-bold'
                                      : 'text-[#6B6661] hover:text-[#E79685] hover:bg-[#F7F3EB]'
                                  }`}
                                >
                                  <span>{itemName} im Sale</span>
                                  <span className="text-[10px] bg-[#E79685]/15 text-[#E79685] px-1.5 py-0.5 rounded font-bold">
                                    %
                                  </span>
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

          <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 text-[#2D2B2A] shrink-0 justify-end">
            
            {onSwitchMode && (
              storeMode === 'general' ? (
                <button
                  onClick={() => onSwitchMode('kids')}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E79685]/15 text-[#E79685] hover:bg-[#E79685] hover:text-white border border-[#E79685]/30 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-2xs hover:scale-105 cursor-pointer group"
                  title="Zur Levina Kinderwelt wechseln"
                >
                  <Sparkles size={13} className="group-hover:rotate-12 transition-transform" />
                  <span>🧸 Kinderwelt</span>
                </button>
              ) : (
                <button
                  onClick={() => onSwitchMode('general')}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 text-[#2B2B2B] hover:bg-[#69705A] hover:text-white border border-[#ECE8E2] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-2xs hover:scale-105 cursor-pointer group"
                  title="Zur Hauptseite (Luxusteppiche) wechseln"
                >
                  <span>← Hauptseite</span>
                </button>
              )
            )}

            <div className="flex items-center">
              <LanguageSwitcher storeMode={storeMode} />
            </div>

            {onOpenAuth && (
              <button
                onClick={onOpenAuth}
                className="p-2 sm:p-2.5 rounded-full bg-white/70 hover:bg-white text-[#2D2B2A] hover:text-[#B96A3C] transition-all relative group cursor-pointer border border-white/80 shadow-2xs backdrop-blur-xs"
                title={t('nav.account')}
                aria-label={t('nav.account')}
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </button>
            )}

            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-full bg-white/70 hover:bg-white text-[#2D2B2A] hover:text-[#B96A3C] transition-all relative group cursor-pointer border border-white/80 shadow-2xs backdrop-blur-xs"
              title={t('nav.search')}
              aria-label={t('nav.search')}
            >
              <Search size={17} strokeWidth={1.8} />
            </button>

            <button
              onClick={onOpenWishlist}
              className="p-2 sm:p-2.5 rounded-full bg-white/70 hover:bg-white text-[#2D2B2A] hover:text-[#B96A3C] transition-all relative group cursor-pointer border border-white/80 shadow-2xs backdrop-blur-xs"
              title={t('nav.wishlist')}
              aria-label={t('nav.wishlist')}
            >
              <Heart size={17} strokeWidth={1.8} className={wishlistCount > 0 ? "fill-[#E79685] text-[#E79685]" : ""} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E79685] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="p-2 sm:p-2.5 rounded-full bg-[#2D2B2A] text-white hover:bg-[#8EBBB0] transition-all relative group cursor-pointer shadow-2xs"
              title={t('nav.cart')}
              aria-label={t('nav.cart')}
            >
              <ShoppingBag size={17} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E79685] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#ECE8E2] px-4 py-4 space-y-4 shadow-pillowy max-h-[80vh] overflow-y-auto animate-fade-in">
            
            {onSwitchMode && (
              <div className="p-1 bg-[#EDE6DC] rounded-xl">
                {storeMode === 'general' ? (
                  <button
                    onClick={() => {
                      onSwitchMode('kids');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#E79685] text-white shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles size={14} />
                    <span>🧸 Zur Levina Kinderwelt wechseln</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onSwitchMode('general');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white text-[#2B2B2B] shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>← Zur Hauptseite (Luxusteppiche)</span>
                  </button>
                )}
              </div>
            )}

            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8EBBB0] px-2 pt-1">
                {storeMode === 'kids' ? 'Kinderwelt Kollektionen' : 'Luxusteppiche & Kollektionen'}
              </div>

              {currentCategories.map((cat) => {
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
          </div>
        )}
      </header>
    </>
  );
};
