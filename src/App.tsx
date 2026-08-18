import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedCollections } from './components/FeaturedCollections';
import { Carpet3DStudio } from './components/Carpet3DStudio';
import { ParallaxBanner } from './components/ParallaxBanner';
import { SplitEditorialBanner } from './components/SplitEditorialBanner';
import { BrandCategoriesShowcase } from './components/BrandCategoriesShowcase';
import { SlidingMarqueeGallery } from './components/SlidingMarqueeGallery';
import { InstagramGallery } from './components/InstagramGallery';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailPage } from './components/ProductDetailPage';
import { SanctuaryStoryPage } from './components/SanctuaryStoryPage';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { IntegrationStatusModal } from './components/IntegrationStatusModal';
import { LegalModal, type LegalTab } from './components/LegalModal';

import {
  GENERAL_COLLECTIONS,
  KIDS_COLLECTIONS,
  BRAND_CATEGORIES,
  INSTAGRAM_GALLERY,
  PRODUCTS as FALLBACK_PRODUCTS
} from './data/mockData';
import { plentyoneService } from './services/plentyoneService';
import type { Product, CartItem, StoreMode, InstagramPost } from './types';
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
    idLower.startsWith('mb-') ||
    skuLower.startsWith('lk-') ||
    skuLower.startsWith('bg-') ||
    skuLower.startsWith('bc-') ||
    skuLower.startsWith('mb-') ||
    nameLower.includes('lillifee') ||
    nameLower.includes('felix') ||
    nameLower.includes('sharky') ||
    nameLower.includes('sieben') ||
    nameLower.includes('t-rex') ||
    nameLower.includes('pferd') ||
    nameLower.includes('glück') ||
    nameLower.includes('bobby') ||
    nameLower.includes('mondbär') ||
    nameLower.includes('mondbaer') ||
    nameLower.includes('spielteppich') ||
    nameLower.includes('kinderteppich')
  );
};

export function App() {
  const { t } = useTranslation();
  const [storeMode, setStoreMode] = useState<StoreMode>('general');
  const [currentView, setCurrentView] = useState<'home' | 'product' | 'sanctuary'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSanctuaryPost, setSelectedSanctuaryPost] = useState<InstagramPost | null>(null);
  
  const [products, setProducts] = useState<Product[]>(FALLBACK_PRODUCTS);
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedBrandCategory, setSelectedBrandCategory] = useState<string | null>(null);
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

  // Load Live PlentyONE Products & Merge with Luxury Master Catalog
  useEffect(() => {
    let isMounted = true;
    async function loadLiveProducts() {
      try {
        const liveItems = await plentyoneService.fetchProducts();
        if (isMounted) {
          if (liveItems && liveItems.length > 0) {
            const luxuryFallback = FALLBACK_PRODUCTS.filter((p) => !isKidsProduct(p));
            const liveGeneral = liveItems.filter((p) => !isKidsProduct(p));
            const liveKids = liveItems.filter(isKidsProduct);
            const fallbackKids = FALLBACK_PRODUCTS.filter(isKidsProduct);

            const merged = [
              ...luxuryFallback,
              ...liveGeneral,
              ...(liveKids.length > 0 ? liveKids : fallbackKids),
            ];

            const uniqueMap = new Map<string, Product>();
            merged.forEach((item) => uniqueMap.set(item.id, item));
            const finalProducts = Array.from(uniqueMap.values());

            setProducts(finalProducts);
            if (finalProducts[0]) {
              setWishlistIds([finalProducts[0].id, finalProducts[2]?.id || finalProducts[0].id]);
            }
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
          setSelectedSanctuaryPost(null);
          return;
        }
      }
    }

    if (hash.startsWith('#/sanctuary/') || hash.startsWith('#sanctuary-')) {
      const storyId = decodeURIComponent(hash.replace('#/sanctuary/', '').replace('#sanctuary-', ''));
      if (storyId) {
        const foundStory = INSTAGRAM_GALLERY.find(
          (s) => s.id === storyId || s.id.toLowerCase() === storyId.toLowerCase()
        );
        if (foundStory) {
          setSelectedSanctuaryPost(foundStory);
          setCurrentView('sanctuary');
          setSelectedProduct(null);
          return;
        }
      }
    }

    if (hash.startsWith('#/kids') || hash.startsWith('#kids')) {
      setStoreMode('kids');
      setCurrentView('home');
      setSelectedProduct(null);
      setSelectedSanctuaryPost(null);
      return;
    }

    // Default to home / general
    if (!hash.startsWith('#/product/') && !hash.startsWith('#/sanctuary/') && !hash.startsWith('#sanctuary-')) {
      if (hash === '#/' || hash === '' || hash === '#') {
        setStoreMode('general');
      }
      setCurrentView('home');
      setSelectedProduct(null);
      setSelectedSanctuaryPost(null);
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
    setSelectedBrandCategory(null);
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
    setSelectedSanctuaryPost(null);
    if (typeof window !== 'undefined') {
      window.location.hash = `#/product/${product.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToSanctuaryStory = (post: InstagramPost) => {
    setSelectedSanctuaryPost(post);
    setCurrentView('sanctuary');
    setSelectedProduct(null);
    if (typeof window !== 'undefined') {
      window.location.hash = `#/sanctuary/${post.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateBackFromSanctuary = () => {
    setCurrentView('home');
    setSelectedSanctuaryPost(null);
    if (typeof window !== 'undefined') {
      window.location.hash = storeMode === 'kids' ? '#/kids' : '#/';
      setTimeout(() => {
        const el = document.getElementById('sanctuary-gallery');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const navigateHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    setSelectedSanctuaryPost(null);
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
    // 1. Direct Brand Category Filter (Clicking any of the 15 brands filters to ONLY those items!)
    if (selectedBrandCategory) {
      const target = selectedBrandCategory.toLowerCase();
      const prodBrand = (p.brandCategory || '').toLowerCase();
      const nameLower = (p.name || '').toLowerCase();
      const skuLower = (p.sku || '').toLowerCase();

      const isMatch =
        prodBrand === target ||
        (target === 'lillifee' && (nameLower.includes('lillifee') || skuLower.includes('lk-401') || skuLower.includes('lk-402') || skuLower.includes('lil-'))) ||
        (target === 'felix' && (nameLower.includes('felix') || skuLower.includes('lk-404') || skuLower.includes('lk-407') || skuLower.includes('fel-'))) ||
        (target === 'sharky' && (nameLower.includes('sharky') || skuLower.includes('lk-408') || skuLower.includes('sha-'))) ||
        (target === 'die-lieben-sieben' && (nameLower.includes('sieben') || skuLower.includes('lk-409') || skuLower.includes('dl7') || skuLower.includes('die-'))) ||
        (target === 'pferdefreunde' && (nameLower.includes('pferd') || skuLower.includes('lk-411') || skuLower.includes('pf-') || skuLower.includes('pfe-'))) ||
        (target === 'baby-glueck' && (nameLower.includes('glück') || skuLower.includes('lk-415') || skuLower.includes('lk-416') || skuLower.includes('bg-710') || skuLower.includes('bg-711') || skuLower.includes('bg-712') || skuLower.includes('bg-713') || skuLower.includes('bab-'))) ||
        (target === 'mondbaer' && (nameLower.includes('mondbär') || nameLower.includes('mondbaer') || skuLower.includes('bg-714') || skuLower.includes('mb-') || skuLower.includes('mon-'))) ||
        (target === 't-rex-world' && (nameLower.includes('t-rex') || nameLower.includes('dino') || skuLower.includes('lk-410') || skuLower.includes('t-r-') || skuLower.includes('tr-'))) ||
        (target === 'rock-star-baby' && (nameLower.includes('rock') || nameLower.includes('guitar') || skuLower.includes('bg-715') || skuLower.includes('rsb') || skuLower.includes('roc-'))) ||
        (target === 'bc-kids' && (nameLower.includes('bc') || skuLower.includes('bc-'))) ||
        (target === 'lovely-kids' && (nameLower.includes('lovely') || skuLower.includes('lk-') || skuLower.includes('lov-'))) ||
        (target === 'pummeleinhorn' && (nameLower.includes('pummel') || nameLower.includes('einhorn') || skuLower.includes('pum-'))) ||
        (target === 'grimmliis' && (nameLower.includes('grimm') || skuLower.includes('grm-') || skuLower.includes('gri-'))) ||
        (target === 'spiegelburg-garden' && (nameLower.includes('garden') || nameLower.includes('spg-') || skuLower.includes('ga-') || skuLower.includes('spi-'))) ||
        (target === 'shaggy' && (nameLower.includes('shaggy') || skuLower.includes('sh-') || skuLower.includes('sha-'))) ||
        (target === 'flokati' && (nameLower.includes('flokati') || nameLower.includes('fell') || skuLower.includes('fe-') || skuLower.includes('flo-') || skuLower.includes('flk-')));

      if (!isMatch) return false;
    } else {
      // Normal Store Mode Separation:
      if (storeMode === 'kids') {
        if (p.section === 'general') return false;
        if (!isKidsProduct(p) && p.section !== 'both') return false;
      } else {
        if (p.section === 'kids') return false;
        if (isKidsProduct(p)) return false;
      }
    }

    // 2. Tag Filtering (Kids categories, Shaggy colors, Naturfelle, character lines, etc.)
    if (activeTag && !selectedBrandCategory) {
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
      } else {
        const matches =
          nameLower.includes(tagLower) ||
          descLower.includes(tagLower) ||
          matLower.includes(tagLower) ||
          colorNames.includes(tagLower) ||
          (p.brandCategory && p.brandCategory.toLowerCase().includes(tagLower));

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
            onViewIn3D={(prod: Product) => {
              setSelected3DProduct(prod);
              setCurrentView('home');
              setTimeout(() => {
                const el = document.getElementById('carpet-3d-studio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
          />
        ) : currentView === 'sanctuary' && selectedSanctuaryPost ? (
          <SanctuaryStoryPage
            post={selectedSanctuaryPost}
            allPosts={INSTAGRAM_GALLERY}
            storeMode={storeMode}
            onBack={navigateBackFromSanctuary}
            onSelectProduct={navigateToProduct}
            onSelectStory={navigateToSanctuaryStory}
            onAddToCart={(product, size, color) => {
              handleAddToCart(product, size, color, product.material || 'Organic Wool');
            }}
            onOpen3DStudio={(prod) => {
              setSelected3DProduct(prod);
              navigateHome();
              setTimeout(() => {
                const el = document.getElementById('carpet-3d-studio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 300);
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
            <section id="catalog-grid" className="py-24 bg-[#FAF8F5]">
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
                  {(activeCategory !== 'all' || activeTag || selectedBrandCategory || activeRoom || selectedMaterialFilter !== 'all') && (
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setActiveTag(null);
                        setSelectedBrandCategory(null);
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

                {/* Active Brand Category Spotlight Banner */}
                {selectedBrandCategory && (() => {
                  const activeBrandObj = BRAND_CATEGORIES.find(b => b.slug === selectedBrandCategory);
                  if (!activeBrandObj) return null;
                  return (
                    <div className="mt-6 p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-[#D9C5A7]/70 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-5">
                        <div className="w-18 h-18 rounded-2xl bg-[#FAF8F5] p-3 border border-[#ECE8E2] flex items-center justify-center shrink-0 shadow-xs">
                          <img src={activeBrandObj.logo} alt={activeBrandObj.name} className="max-h-12 max-w-14 object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] uppercase tracking-widest text-[#B96A3C] font-semibold">
                              {t('brandCategory.filterBadge', 'Ausgewählte Markenwelt')}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#EFE7DC] text-[#505744] text-[11px] font-medium">
                              {displayedProducts.length} {t('brandCategory.models', 'Modelle')}
                            </span>
                          </div>
                          <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#2B2B2B]">
                            {activeBrandObj.name}
                          </h3>
                          <p className="text-xs md:text-sm text-[#666666] font-light max-w-xl mt-1 leading-relaxed">
                            {activeBrandObj.tagline} — {activeBrandObj.description}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedBrandCategory(null)}
                        className="px-5 py-3 bg-[#FAF8F5] hover:bg-[#EFE7DC] text-[#2B2B2B] text-xs font-semibold uppercase tracking-wider rounded-xl border border-[#D9C5A7] transition-all cursor-pointer shrink-0 self-start md:self-center"
                      >
                        &times; {t('brandCategory.showAll145', 'Alle 145 Artikel anzeigen')}
                      </button>
                    </div>
                  );
                })()}

                {/* Brand Categories Quick-Filter Horizontal Ribbon */}
                <div className="pt-6 pb-2">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#69705A] font-semibold mb-3">
                    {t('brandCategory.ribbonTitle', 'Marken & Kollektionen Filter (145 Modelle):')}
                  </div>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 scroll-smooth">
                    <button
                      onClick={() => setSelectedBrandCategory(null)}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                        !selectedBrandCategory
                          ? 'bg-[#2B2B2B] text-white shadow-xs'
                          : 'bg-white border border-[#ECE8E2] text-[#666666] hover:text-[#2B2B2B] hover:border-[#D9C5A7]'
                      }`}
                    >
                      <span>{t('brandCategory.all145', 'Alle Kollektionen (145)')}</span>
                    </button>
                    {BRAND_CATEGORIES.map((b) => {
                      const isSelected = selectedBrandCategory === b.slug;
                      return (
                        <button
                          key={b.id}
                          onClick={() => {
                            setSelectedBrandCategory(isSelected ? null : b.slug);
                            setActiveCategory('all');
                            setActiveRoom(null);
                          }}
                          className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                            isSelected
                              ? 'bg-[#B96A3C] text-white shadow-xs ring-2 ring-[#B96A3C]/30'
                              : 'bg-white border border-[#ECE8E2] text-[#666666] hover:text-[#2B2B2B] hover:border-[#D9C5A7]'
                          }`}
                        >
                          <img src={b.logo} alt={b.name} className="w-4 h-4 object-contain" />
                          <span>{b.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white font-semibold' : 'bg-[#EFE7DC] text-[#666666]'}`}>
                            {b.itemCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
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

            {/* Official Brand & Character Categories Sanctuary */}
            <BrandCategoriesShowcase
              categories={BRAND_CATEGORIES}
              storeMode={storeMode}
              selectedCategorySlug={selectedBrandCategory}
              onSelectCategory={(slug) => {
                setSelectedBrandCategory(slug);
                setActiveCategory('all');
                setActiveRoom(null);
                setActiveTag(null);
                const el = document.getElementById('catalog-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

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
              storeMode={storeMode}
              onSelectProduct={navigateToProduct}
              onOpenStoryPage={navigateToSanctuaryStory}
            />

            {/* Parallax Quote Banner (Bedtime & Storytime) */}
            <ParallaxBanner onExploreClick={() => {
              const el = document.getElementById('catalog-grid') || document.getElementById('featured-collections');
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
