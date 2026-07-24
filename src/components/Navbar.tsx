import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectCategory,
  activeCategory,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'All', id: 'all' },
    { label: 'Carpets', id: 'carpets' },
    { label: 'Rugs', id: 'rugs' },
    { label: 'Furniture', id: 'furniture' },
    { label: 'Home Decor', id: 'decor' },
    { label: 'Textiles', id: 'textiles' },
    { label: 'Kitchen', id: 'kitchen' },
    { label: 'About', id: 'about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#ECE8E2] py-4 shadow-xs'
            : 'bg-transparent text-[#2B2B2B] py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Mobile Menu Toggle & Desktop Navigation */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2B2B2B] hover:text-[#B96A3C] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <nav className="hidden lg:flex items-center space-x-7 text-xs tracking-[0.18em] uppercase font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onSelectCategory(link.id)}
                  className={`transition-all duration-300 relative py-1 hover:text-[#B96A3C] ${
                    activeCategory === link.id
                      ? 'text-[#B96A3C] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#B96A3C]'
                      : 'text-[#2B2B2B]/80'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Center: Brand Logo & Times New Roman Text */}
          <button
            onClick={() => onSelectCategory('all')}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <img
                src="/lavina_logo.png"
                alt="LEVINA HOME Logo"
                className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-['Times_New_Roman',_Times,_serif] text-xl md:text-2xl tracking-[0.25em] font-normal uppercase text-[#2B2B2B] group-hover:text-[#505744] transition-colors">
                LEVINA HOME
              </span>
            </div>
            <span className="block text-[8px] tracking-[0.35em] text-[#8B8B8B] uppercase font-sans font-light mt-0.5">
              COPENHAGEN
            </span>
          </button>

          {/* Right: Actions (Search, Account, Wishlist, Cart) */}
          <div className="flex items-center space-x-4 md:space-x-6 text-[#2B2B2B]">
            <button
              onClick={onOpenSearch}
              className="p-2 hover:text-[#B96A3C] transition-colors relative group"
              title="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button
              onClick={onOpenWishlist}
              className="p-2 hover:text-[#B96A3C] transition-colors relative group hidden sm:block"
              title="Wishlist"
            >
              <Heart size={20} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#B96A3C] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="p-2 hover:text-[#B96A3C] transition-colors relative group flex items-center gap-2"
              title="Cart Drawer"
            >
              <div className="relative">
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#69705A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-xs tracking-widest font-medium uppercase text-[#666666]">
                Cart
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF8F5] pt-24 px-8 pb-12 flex flex-col justify-between lg:hidden animate-fade-up">
          <div className="flex flex-col space-y-6 text-base tracking-[0.2em] font-serif uppercase text-[#2B2B2B]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onSelectCategory(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 border-b border-[#ECE8E2]/60 hover:text-[#B96A3C] transition-colors ${
                  activeCategory === link.id ? 'text-[#B96A3C] font-semibold' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-[#ECE8E2] text-xs text-[#8B8B8B] tracking-wider uppercase flex justify-between">
            <span>© 2026 LEVINA HOME</span>
            <span>Copenhagen, Denmark</span>
          </div>
        </div>
      )}
    </>
  );
};
