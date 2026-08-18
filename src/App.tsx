import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedCollections } from './components/FeaturedCollections';
import { Carpet3DStudio } from './components/Carpet3DStudio';
import { ParallaxBanner } from './components/ParallaxBanner';
import { SplitEditorialBanner } from './components/SplitEditorialBanner';
import { ShopByRoom } from './components/ShopByRoom';
import { SlidingMarqueeGallery } from './components/SlidingMarqueeGallery';
import { BrandStory } from './components/BrandStory';
import { InstagramGallery } from './components/InstagramGallery';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailPage } from './components/ProductDetailPage';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { IntegrationStatusModal } from './components/IntegrationStatusModal';
import { LegalModal, type LegalTab } from './components/LegalModal';

import {
  GENERAL_COLLECTIONS,
  KIDS_COLLECTIONS,
  GENERAL_ROOMS,
  KIDS_ROOMS,
  INSTAGRAM_GALLERY,
  PRODUCTS as FALLBACK_PRODUCTS
} from './data/mockData';
import { plentyoneService } from './services/plentyoneService';
import type { Product, CartItem, StoreMode } from './types';
import { SlidersHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Helper to distinguish kids-specific products from luxury general products
export const isKidsProduct = (p: Product): boolean => {
  if (p.section === 'kids') return true;
  if (p.section === 'general') return false;

  const idLower = (p.id || '').toLowerCase();
  const skuLower = (p.sku || '').toLowerCase();
  const nameLower = (p.name || '').toLowerCase();

  return (
    idLower.startsWith('lk-') ||
    idLower.startsWith('bg-') ||
    idLower.startsWith('bc-') ||
    skuLower.startsWith('lk-') ||
    skuLower.startsWith('bg-') ||
    skuLower.startsWith('bc-') ||
    nameLower.includes('lillifee') ||
    nameLower.includes('felix') ||
    nameLower.includes('sharky') ||
    nameLower.includes('sieben') ||
    nameLower.includes('t-rex') ||
    nameLower.includes('pferd') ||
    nameLower.includes('glück') ||
    nameLower.includes('bobby') ||
    nameLower.includes('mondbär') ||
    nameLower.includes('spielteppich') ||
    nameLower.includes('kinderteppich')
  );
};

export function App() {
  const { t } = useTranslation();
  const [storeMode, setStoreMode] = useState<StoreMode>('general');
  const [currentView, setCurrentView] = useState<'home' | 'product'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const [products, setProducts] = useState<Product[]>(FALLBACK_PRODUCTS);
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(true);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  
  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isIntegrationOpen, setIsIntegrationOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');

  // Category view filter state
  const [priceFilter, setPriceFilter] = useState<number>(3000);
  const [selectedMaterialFilter, setSelectedMaterialFilter] = useState<string>('all');
  const [visibleCatalogCount, setVisibleCatalogCount] = useState<number>(() => typeof window !== 'undefined' && window.innerWidth < 768 ? 6 : 16);
  const [selected3DProduct, setSelected3DProduct] = useState<Product | null>(null);

  // Load Live PlentyONE Products
  useEffect(() => {
    let isMounted = true;
    async function loadLiveProducts() {
      try {
        setIsLoadingProducts(true);
        const liveItems = await plentyoneService.fetchProducts();
        if (isMounted && liveItems.length > 0) {
          setProducts(liveItems);
          if (liveItems[0]) {
            setWishlistIds([liveItems[0].id, liveItems[2]?.id || liveItems[0].id]);
          }
        }
      } catch (err) {
        console.warn('Failed to load live PlentyONE items, using fallback:', err);
      } finally {
        if (isMounted) setIsLoadingProducts(false);
      }
    }
    loadLiveProducts();
    return () => { isMounted = false; };
  }, []);

  // Sync URL hash with view state & store mode
  const syncRouteFromHash = useCallback(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;

    if (hash.startsWith('#/product/')) {
      const prodId = decodeURIComponent(hash.replace('#/product/', ''));
      if (prodId) {
        const found = products.find(
          (p) => p.id === prodId || String(p.id).toLowerCase() === prodId.toLowerCase()
        );
        if (found) {
          setSelectedProduct(found);
          setCurrentView('product');
          return;
        }
      }
    }

    if (hash.startsWith('#/kids') || hash.startsWith('#kids')) {
      setStoreMode('kids');
      setCurrentView('home');
      setSelectedProduct(null);
      return;
    }

    // Default to home / general
    if (!hash.startsWith('#/product/')) {
      if (hash === '#/' || hash === '' || hash === '#') {
        setStoreMode('general');
      }
      setCurrentView('home');
      setSelectedProduct(null);
    }
  }, [products]);

  useEffect(() => {
    syncRouteFromHash();
    window.addEventListener('hashchange', syncRouteFromHash);
    window.addEventListener('popstate', syncRouteFromHash);
    return () => {
      window.removeEventListener('hashchange', syncRouteFromHash);
      window.removeEventListener('popstate', syncRouteFromHash);
    };
  }, [syncRouteFromHash]);

  // Mode Switcher Handler
  const handleSwitchStoreMode = (mode: StoreMode) => {
    setStoreMode(mode);
    setActiveCategory('all');
    setActiveTag(null);
    setActiveRoom(null);
    if (typeof window !== 'undefined') {
      window.location.hash = mode === 'kids' ? '#/kids' : '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Navigation Handlers
  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    if (typeof window !== 'undefined') {
      window.location.hash = `#/product/${product.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    if (typeof window !== 'undefined') {
      window.location.hash = storeMode === 'kids' ? '#/kids' : '#/';
    }
  };

  // Handle Cart Operations
  const handleAddToCart = (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    material: string,
    quantity: number = 1
  ) => {
    const existingIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === size &&
        item.selectedColor.name === color.name
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${size}-${color.name}-${Date.now()}`,
        product,
        quantity,
        selectedSize: size,
        selectedColor: color,
        selectedMaterial: material,
      };
      setCartItems([...cartItems, newItem]);
    }
    setIsCartOpen(true);
  };

  const handleBuyNow = (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    material: string,
    quantity: number = 1
  ) => {
    handleAddToCart(product, size, color, material, quantity);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleQuickAdd = (product: Product) => {
    handleAddToCart(
      product,
      product.sizes?.[0] || (storeMode === 'kids' ? '120 x 180 cm' : '160 x 230 cm'),
      product.colors?.[0] || { name: 'Natural', hex: '#FAF8F5' },
      product.material || 'Organic Wool',
      1
    );
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== cartItemId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === cartItemId ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== cartItemId));
  };

  // Handle Wishlist Operations
  const handleToggleWishlist = (product: Product) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistIds(wishlistIds.filter((id) => id !== product.id));
    } else {
      setWishlistIds([...wishlistIds, product.id]);
    }
  };

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  // Filtered Products for Catalog View based on Store Mode & Active Filters
  const displayedProducts = products.filter((p) => {
    // 1. Strict Mode Separation:
    if (storeMode === 'kids') {
      // In kids section, show ONLY products related to kids
      if (p.section === 'general') return false;
      if (!isKidsProduct(p) && p.section !== 'both') return false;
    } else {
      // In main site, show ONLY luxury carpets, comfort rugs, Naturfelle, and high-pile shaggies
      if (p.section === 'kids') return false;
      if (isKidsProduct(p)) return false;
    }

    // 2. Tag Filtering (Kids categories, Shaggy colors, Naturfelle, character lines, etc.)
    if (activeTag) {
      const tagLower = activeTag.toLowerCase();
      const nameLower = (p.name || '').toLowerCase();
      const descLower = (p.description || '').toLowerCase();
      const matLower = (p.material || '').toLowerCase();
      const idLower = (p.id || '').toLowerCase();
      const skuLower = (p.sku || '').toLowerCase();
      const colorNames = (p.colors || []).map((c) => c.name.toLowerCase()).join(' ');

      if (activeTag === 'Kinderteppiche') {
        if (p.category !== 'carpets' && p.category !== 'rugs' && !nameLower.includes('teppich') && !nameLower.includes('carpet')) return false;
      } else if (activeTag === 'Luxusteppiche' || activeTag === 'Wollteppiche') {
        if (p.category !== 'carpets' && p.category !== 'rugs' && !nameLower.includes('wolle') && !descLower.includes('wolle') && !nameLower.includes('teppich')) return false;
      } else if (activeTag === 'Naturfelle' || activeTag === 'Felle' || activeTag === 'Babyfelle') {
        if (p.category !== 'naturfelle' && !nameLower.includes('fell') && !descLower.includes('fell') && !idLower.includes('fe-') && !skuLower.includes('fe-')) return false;
      } else if (activeTag === 'Rinderfelle') {
        if (!nameLower.includes('rinderfell') && !nameLower.includes('rinder') && !descLower.includes('rinder') && !idLower.includes('fe-2194') && !skuLower.includes('fe-2194')) return false;
      } else if (activeTag === 'Lammfelle') {
        if (!nameLower.includes('lammfell') && !nameLower.includes('lamm') && !descLower.includes('lamm') && !idLower.includes('fe-2192') && !idLower.includes('fe-2943') && !skuLower.includes('fe-2192') && !skuLower.includes('fe-2943')) return false;
      } else if (activeTag === 'Shaggy') {
        if (!nameLower.includes('shaggy') && !descLower.includes('shaggy') && !idLower.includes('sh-') && !skuLower.includes('sh-')) return false;
      } else if (activeTag.startsWith('Sale')) {
        if (activeTag.includes('Kinderteppiche') || activeTag.includes('Wollteppiche')) {
          if (p.category !== 'carpets' && p.category !== 'rugs') return false;
        } else if (activeTag.includes('Shaggy')) {
          if (!nameLower.includes('shaggy') && !descLower.includes('shaggy') && !idLower.includes('sh-') && !skuLower.includes('sh-')) return false;
        } else if (activeTag.includes('Naturfelle')) {
          if (p.category !== 'naturfelle' && !nameLower.includes('fell')) return false;
        }
      } else {
        const matches =
          nameLower.includes(tagLower) ||
          descLower.includes(tagLower) ||
          matLower.includes(tagLower) ||
          colorNames.includes(tagLower) ||
          (tagLower.includes('lillifee') && (nameLower.includes('lillifee') || idLower.includes('lk-401') || idLower.includes('lk-402') || skuLower.includes('lk-401') || skuLower.includes('lk-402'))) ||
          (tagLower.includes('felix') && (nameLower.includes('felix') || idLower.includes('lk-404') || skuLower.includes('lk-404'))) ||
          (tagLower.includes('sharky') && (nameLower.includes('sharky') || idLower.includes('lk-408') || skuLower.includes('lk-408'))) ||
          (tagLower.includes('sieben') && (nameLower.includes('sieben') || idLower.includes('lk-409') || skuLower.includes('lk-409'))) ||
          (tagLower.includes('t-rex') && (nameLower.includes('t-rex') || idLower.includes('lk-410') || skuLower.includes('lk-410'))) ||
          (tagLower.includes('pferd') && (nameLower.includes('pferd') || idLower.includes('lk-411') || skuLower.includes('lk-411'))) ||
          (tagLower.includes('glück') && (nameLower.includes('glück') || idLower.includes('lk-415') || idLower.includes('lk-416') || skuLower.includes('lk-415') || skuLower.includes('lk-416'))) ||
          (tagLower.includes('bobby') && (nameLower.includes('bobby') || idLower.includes('lk-418') || skuLower.includes('lk-418'))) ||
          (tagLower.includes('mondbär') && (nameLower.includes('mondbär') || idLower.includes('bg-714') || skuLower.includes('bg-714'))) ||
          (tagLower.includes('rock star') && (nameLower.includes('rock') || idLower.includes('bg-715') || skuLower.includes('bg-715'))) ||
          (tagLower.includes('bc kids') && (nameLower.includes('bc') || idLower.includes('bc-101') || skuLower.includes('bc-101')));

        if (!matches) return false;
      }
    }

    // 3. Category & Room Filters
    if (activeCategory !== 'all') {
      if (activeCategory === 'carpets' && p.category !== 'carpets' && p.category !== 'rugs') return false;
      if (activeCategory === 'rugs' && p.category !== 'rugs' && p.category !== 'carpets') return false;
      if (activeCategory === 'naturfelle' && p.category !== 'naturfelle') return false;
      if (activeCategory === 'shaggy' && !p.name.toLowerCase().includes('shaggy') && !(p.material || '').toLowerCase().includes('shaggy')) return false;
    }
    if (activeRoom && p.roomCategory !== activeRoom) return false;
    if (p.price > priceFilter) return false;
    if (selectedMaterialFilter !== 'all' && !(p.material || '').toLowerCase().includes(selectedMaterialFilter.toLowerCase())) return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#B96A3C]/20 selection:text-[#505744]">
      {/* Main Navigation Bar */}
      <Navbar
        storeMode={storeMode}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenIntegrationModal={() => setIsIntegrationOpen(true)}
        onSwitchMode={handleSwitchStoreMode}
        onSelectCategory={(cat) => {
          if (cat === 'about') {
            const el = document.getElementById('brand-story');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
          setActiveCategory(cat);
          setActiveTag(null);
          setActiveRoom(null);
          if (cat !== 'all') {
            const el = document.getElementById('catalog-grid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onSelectTag={(tag, parentCat) => {
          setActiveTag(tag || null);
          if (parentCat) setActiveCategory(parentCat);
          setActiveRoom(null);
        }}
        activeCategory={activeCategory}
        activeTag={activeTag}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'product' && selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            allProducts={products}
            onBack={navigateHome}
            onNavigateHome={navigateHome}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            isWishlisted={wishlistIds.includes(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
            onSelectRelatedProduct={navigateToProduct}
            onViewIn3D={(prod) => {
              setSelected3DProduct(prod);
              setCurrentView('home');
              setTimeout(() => {
                const el = document.getElementById('carpet-3d-studio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
          />
        ) : (
          <>
            {/* Hero Section (General or Kids depending on storeMode) */}
            <HeroSection
              storeMode={storeMode}
              onExploreClick={() => {
                setActiveCategory('all');
                setActiveTag(null);
                setActiveRoom(null);
                const el = document.getElementById('featured-collections');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onShopCarpetsClick={() => {
                setActiveCategory('carpets');
                setActiveTag(null);
                setActiveRoom(null);
                const el = document.getElementById('catalog-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenKidsClick={() => handleSwitchStoreMode('kids')}
              onBackToGeneralClick={() => handleSwitchStoreMode('general')}
            />

            {/* Featured Collections Slider */}
            <FeaturedCollections
              collections={storeMode === 'kids' ? KIDS_COLLECTIONS : GENERAL_COLLECTIONS}
              storeMode={storeMode}
              onSelectCategory={(slug) => {
                setActiveCategory(slug);
                setActiveTag(null);
                setActiveRoom(null);
                const el = document.getElementById('catalog-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Interactive 3D WebGL Carpet Studio */}
            <div id="carpet-3d-studio">
              <Carpet3DStudio
                products={storeMode === 'kids' ? products.filter(isKidsProduct) : products.filter(p => !isKidsProduct(p))}
                isLoading={isLoadingProducts}
                selectedProductFor3D={selected3DProduct}
                onAddToCart={handleAddToCart}
              />
            </div>

            {/* Catalog Grid View */}
            <section id="catalog-grid" className="py-24 bg-[#FAF8F5] border-b border-[#ECE8E2]">
              <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
                
                {/* Catalog Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#ECE8E2]">
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium block mb-2">
                      {storeMode === 'kids'
                        ? t('newArrivals.badge', 'Levina Kinderwelt Katalog')
                        : t('generalCatalog.subtitle', 'Exklusive Kollektionen & Wohnkomfort')}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] capitalize">
                      {activeTag
                        ? activeTag
                        : activeRoom
                        ? `${activeRoom}`
                        : activeCategory !== 'all'
                        ? `${activeCategory === 'carpets' ? (storeMode === 'kids' ? t('categories.carpets', 'Kinderteppiche') : t('categories.rugs', 'Luxusteppiche')) : activeCategory === 'naturfelle' ? t('categories.naturfelle', 'Naturfelle') : activeCategory}`
                        : storeMode === 'kids' ? t('bestSellers.title', 'Kinderzimmer & Spielwelten') : t('generalCatalog.title', 'Luxusteppiche & Wohnkomfort')}
                    </h2>
                  </div>

                  {/* Clear / Reset Filters */}
                  {(activeCategory !== 'all' || activeTag || activeRoom || selectedMaterialFilter !== 'all') && (
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setActiveTag(null);
                        setActiveRoom(null);
                        setPriceFilter(3000);
                        setSelectedMaterialFilter('all');
                      }}
                      className="text-xs uppercase tracking-[0.2em] font-medium text-[#B96A3C] hover:underline cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{t('generalCatalog.resetFilters', 'Filter zurücksetzen')} &times;</span>
                    </button>
                  )}
                </div>

                {/* Filter Controls Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-[#666666]">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal size={14} className="text-[#69705A]" />
                    <span className="font-medium uppercase tracking-wider text-[#2B2B2B]">
                      {t('generalCatalog.showingCount', {
                        visible: Math.min(visibleCatalogCount, displayedProducts.length),
                        total: displayedProducts.length,
                        defaultValue: `Zeige ${Math.min(visibleCatalogCount, displayedProducts.length)} von ${displayedProducts.length} Artikeln`,
                      })}
                    </span>
                  </div>

                  {/* Material Filter Quick Chips */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setSelectedMaterialFilter('all')}
                      className={`px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                        selectedMaterialFilter === 'all'
                          ? 'bg-[#2B2B2B] text-white font-medium'
                          : 'bg-[#EFE7DC] text-[#666666] hover:text-[#2B2B2B]'
                      }`}
                    >
                      {t('generalCatalog.allMaterials', 'Alle Materialien')}
                    </button>
                    <button
                      onClick={() => setSelectedMaterialFilter('wool')}
                      className={`px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                        selectedMaterialFilter === 'wool'
                          ? 'bg-[#2B2B2B] text-white font-medium'
                          : 'bg-[#EFE7DC] text-[#666666] hover:text-[#2B2B2B]'
                      }`}
                    >
                      {t('generalCatalog.wool', '100% Bio-Wolle')}
                    </button>
                    <button
                      onClick={() => setSelectedMaterialFilter('shaggy')}
                      className={`px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                        selectedMaterialFilter === 'shaggy'
                          ? 'bg-[#2B2B2B] text-white font-medium'
                          : 'bg-[#EFE7DC] text-[#666666] hover:text-[#2B2B2B]'
                      }`}
                    >
                      {t('generalCatalog.shaggy', 'Kuschel-Shaggy')}
                    </button>
                    <button
                      onClick={() => setSelectedMaterialFilter('fell')}
                      className={`px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                        selectedMaterialFilter === 'fell'
                          ? 'bg-[#2B2B2B] text-white font-medium'
                          : 'bg-[#EFE7DC] text-[#666666] hover:text-[#2B2B2B]'
                      }`}
                    >
                      {t('generalCatalog.fell', 'Echtes Naturfell')}
                    </button>
                  </div>
                </div>

                {/* Products Grid */}
                {displayedProducts.length === 0 ? (
                  <div className="text-center py-20 bg-white/70 rounded-[2px] border border-[#ECE8E2] p-8 space-y-4">
                    <p className="text-base text-[#666666] font-light">
                      {t('generalCatalog.noProducts', 'Keine Artikel für die gewählten Filter gefunden.')}
                    </p>
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setActiveTag(null);
                        setActiveRoom(null);
                        setSelectedMaterialFilter('all');
                      }}
                      className="px-6 py-2.5 bg-[#B96A3C] text-white text-xs uppercase tracking-widest rounded-[2px] hover:bg-[#A75D36] transition-colors cursor-pointer"
                    >
                      {t('generalCatalog.resetFilters', 'Alle Artikel anzeigen')}
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {displayedProducts.slice(0, visibleCatalogCount).map((product) => (
                      <div
                        key={product.id}
                        className="group flex flex-col bg-white rounded-[2px] overflow-hidden border border-[#ECE8E2] hover:border-[#B96A3C]/40 transition-all duration-300 shadow-xs hover:shadow-md"
                      >
                        {/* Product Image Container */}
                        <div
                          onClick={() => navigateToProduct(product)}
                          className="relative aspect-square overflow-hidden bg-[#EFE7DC] cursor-pointer"
                        >
                          <img
                            src={product.primaryImage}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                          />

                          {/* Top Badges */}
                          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                            {product.isBestSeller && (
                              <span className="bg-[#B96A3C] text-white text-[9.5px] uppercase tracking-wider px-2 py-0.5 rounded-[2px] font-medium shadow-xs">
                                Bestseller
                              </span>
                            )}
                            {isKidsProduct(product) && (
                              <span className="bg-[#8EBBB0] text-white text-[9.5px] uppercase tracking-wider px-2 py-0.5 rounded-[2px] font-medium shadow-xs">
                                Kids Safe
                              </span>
                            )}
                          </div>

                          {/* Wishlist Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleWishlist(product);
                            }}
                            className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                              wishlistIds.includes(product.id)
                                ? 'bg-white text-[#B96A3C]'
                                : 'bg-white/80 hover:bg-white text-[#2B2B2B]'
                            }`}
                            title="Add to Wishlist"
                          >
                            <span className={wishlistIds.includes(product.id) ? 'fill-current' : ''}>
                              ♥
                            </span>
                          </button>
                        </div>

                        {/* Product Info */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                          <div>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B8B8B] font-medium block mb-1">
                              {product.categoryLabel || product.category}
                            </span>
                            <h3
                              onClick={() => navigateToProduct(product)}
                              className="font-serif text-base text-[#2B2B2B] group-hover:text-[#B96A3C] transition-colors cursor-pointer font-normal line-clamp-1"
                            >
                              {product.name}
                            </h3>
                            <p className="text-xs text-[#666666] font-light line-clamp-1 mt-1">
                              {product.material}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-[#ECE8E2] flex items-center justify-between">
                            <div className="flex items-baseline gap-2">
                              <span className="text-sm font-medium text-[#2B2B2B]">
                                €{product.price.toLocaleString()}
                              </span>
                              {product.originalPrice && product.originalPrice > product.price && (
                                <span className="text-xs text-[#8B8B8B] line-through">
                                  €{product.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>

                            <button
                              onClick={() => handleQuickAdd(product)}
                              className="text-xs text-[#B96A3C] hover:text-[#505744] font-medium uppercase tracking-wider cursor-pointer hover:underline"
                            >
                              {t('generalCatalog.quickAdd', '+ Schnellkauf')}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Load More Button */}
                {displayedProducts.length > visibleCatalogCount && (
                  <div className="text-center pt-12">
                    <button
                      onClick={() => setVisibleCatalogCount((prev) => prev + 8)}
                      className="px-8 py-3.5 bg-[#2B2B2B] hover:bg-[#505744] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-[2px] transition-all cursor-pointer"
                    >
                      {t('generalCatalog.loadMore', {
                        count: displayedProducts.length - visibleCatalogCount,
                        defaultValue: `Weitere Artikel laden (${displayedProducts.length - visibleCatalogCount} verbleibend)`,
                      })}
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Split Editorial / Craftsmanship Banner */}
            <SplitEditorialBanner
              storeMode={storeMode}
              onExploreClick={() => {
                const el = document.getElementById('catalog-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Shop by Room Sanctuary */}
            <ShopByRoom
              rooms={storeMode === 'kids' ? KIDS_ROOMS : GENERAL_ROOMS}
              storeMode={storeMode}
              onSelectRoom={(slug) => {
                setActiveRoom(slug);
                setActiveCategory('all');
                setActiveTag(null);
                const el = document.getElementById('catalog-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Brand Philosophy & Craftsmanship */}
            <BrandStory storeMode={storeMode} />

            {/* Sliding Marquee Gallery (Kids Sanctuary Only) */}
            {storeMode === 'kids' && (
              <SlidingMarqueeGallery
                products={products.filter(isKidsProduct)}
                onSelectProduct={navigateToProduct}
              />
            )}

            {/* Curated Instagram Sanctuary Inspiration */}
            <InstagramGallery
              posts={INSTAGRAM_GALLERY}
              onSelectProduct={navigateToProduct}
            />

            {/* Parallax Quote Banner */}
            <ParallaxBanner onExploreClick={() => {
              const el = document.getElementById('carpet-3d-studio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} />

            {/* Newsletter Subscription */}
            <Newsletter />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onOpenLegal={(tab) => {
          setLegalTab(tab);
          setIsLegalOpen(true);
        }}
        onSwitchMode={handleSwitchStoreMode}
        currentMode={storeMode}
      />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={handleToggleWishlist}
        onQuickAdd={handleQuickAdd}
        onSelectProduct={(prod) => {
          setIsWishlistOpen(false);
          navigateToProduct(prod);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(prod) => {
          setIsSearchOpen(false);
          navigateToProduct(prod);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={() => {
          setCartItems([]);
          setIsCheckoutOpen(false);
        }}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <IntegrationStatusModal
        isOpen={isIntegrationOpen}
        onClose={() => setIsIntegrationOpen(false)}
      />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        initialTab={legalTab}
      />
    </div>
  );
}

export default App;
