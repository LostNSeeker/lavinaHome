import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Carpet3DStudio } from './components/Carpet3DStudio';
import { BestSellersSlider } from './components/BestSellersSlider';
import { ParallaxBanner } from './components/ParallaxBanner';
import { SplitEditorialBanner } from './components/SplitEditorialBanner';
import { NewArrivalsGrid } from './components/NewArrivalsGrid';
import { ShopByRoom } from './components/ShopByRoom';
import { SlidingMarqueeGallery } from './components/SlidingMarqueeGallery';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { IntegrationStatusModal } from './components/IntegrationStatusModal';
import { LegalModal, type LegalTab } from './components/LegalModal';

import { ROOMS } from './data/mockData';
import { plentyoneService } from './services/plentyoneService';
import type { Product, CartItem } from './types';
import { SlidersHorizontal, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function App() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(true);
  const [plentySource, setPlentySource] = useState<string>('');


  const [activeCategory, setActiveCategory] = useState<string>('all');
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Category view filter state
  const [priceFilter, setPriceFilter] = useState<number>(3000);
  const [selectedMaterialFilter, setSelectedMaterialFilter] = useState<string>('all');
  const [visibleCatalogCount, setVisibleCatalogCount] = useState<number>(() => typeof window !== 'undefined' && window.innerWidth < 768 ? 5 : 15);
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
          setPlentySource(t('liveStatus.source'));
          if (liveItems[0]) {
            setWishlistIds([liveItems[0].id, liveItems[2]?.id || liveItems[0].id]);
          }
        }
      } catch (err) {
        console.warn('Failed to load live items, using fallback:', err);
      } finally {
        if (isMounted) setIsLoadingProducts(false);
      }
    }
    loadLiveProducts();
    return () => { isMounted = false; };
  }, [t]);


  // Handle Cart Operations
  const handleAddToCart = (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    material: string
  ) => {
    const existingIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === size &&
        item.selectedColor.name === color.name
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${size}-${color.name}-${Date.now()}`,
        product,
        quantity: 1,
        selectedSize: size,
        selectedColor: color,
        selectedMaterial: material,
      };
      setCartItems([...cartItems, newItem]);
    }
    setIsCartOpen(true);
  };

  const handleQuickAdd = (product: Product) => {
    handleAddToCart(
      product,
      product.sizes?.[0] || '120 x 180 cm',
      product.colors?.[0] || { name: 'Pastel Sage', hex: '#8EBBB0' },
      product.material || 'Organic Wool'
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

  // Filtered Products for Catalog View
  const displayedProducts = products.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    if (activeRoom && p.roomCategory !== activeRoom) return false;
    if (p.price > priceFilter) return false;
    if (selectedMaterialFilter !== 'all' && !p.material.toLowerCase().includes(selectedMaterialFilter.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2B2A] flex flex-col font-sans selection:bg-[#E79685]/30 selection:text-[#2D2B2A]">
      {/* Navigation Bar */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenIntegrationModal={() => setIsIntegrationOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setActiveRoom(null);
          setVisibleCatalogCount(6);
          if (cat !== 'all') {
            window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
          }
        }}
        activeCategory={activeCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Full Viewport Hero Section */}
        <HeroSection
          onExploreClick={() => {
            setActiveCategory('all');
            setActiveRoom(null);
            const el = document.getElementById('best-sellers');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onShopCarpetsClick={() => {
            setActiveCategory('carpets');
            setActiveRoom(null);
            setVisibleCatalogCount(6);
            const el = document.getElementById('catalog-grid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Live Status Pill */}
        <div className="bg-[#8EBBB0]/15 border-y border-[#8EBBB0]/30 py-2.5 px-6 text-center text-xs text-[#6C9F93] flex items-center justify-center gap-2 font-semibold">
          {isLoadingProducts ? (
            <>
              <RefreshCw size={13} className="animate-spin text-[#E79685]" />
              <span>{t('liveStatus.loading')}</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-[#8EBBB0] animate-pulse" />
              <span>{plentySource || t('liveStatus.source')} &bull; <strong>{products.length}</strong> {t('liveStatus.ready')}</span>
            </>
          )}
        </div>

        {/* Interactive 3D WebGL Carpet Studio (2D Product Image to 3D Projection) */}
        <Carpet3DStudio
          products={products}
          isLoading={isLoadingProducts}
          selectedProductFor3D={selected3DProduct}
          onAddToCart={handleAddToCart}
        />

        {/* Catalog Grid View (Filtered by Category/Room when user selects filter) */}
        {activeCategory !== 'all' || activeRoom ? (
          <section id="catalog-grid" className="py-24 bg-[#FDFBF7] border-b border-[#EDE6DC]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
              
              {/* Category Banner Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#EDE6DC]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8EBBB0] font-bold block mb-2 bg-[#8EBBB0]/15 w-fit px-3.5 py-1 rounded-full">
                    {activeRoom ? t('catalog.spaceCollection') : t('catalog.collectionCatalog')}
                  </span>
                  <h2 className="font-heading text-3xl sm:text-5xl font-medium text-[#2D2B2A] capitalize">
                    {activeRoom ? `${t('catalog.space')} ${t(`rooms.${activeRoom}.name`, { defaultValue: activeRoom })}` : `${t(`categories.${activeCategory}`, { defaultValue: activeCategory })} ${t('catalog.collection')}`}
                  </h2>
                </div>

                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveRoom(null);
                    setVisibleCatalogCount(6);
                    setPriceFilter(3000);
                    setSelectedMaterialFilter('all');
                  }}
                  className="text-xs uppercase tracking-wider text-[#E79685] hover:underline self-start md:self-auto font-bold cursor-pointer"
                >
                  {t('catalog.clearFilters')}
                </button>
              </div>

              {/* Filter Sidebar & Product Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
                
                {/* Accordion Filter Sidebar */}
                <div className="space-y-6 bg-white p-6 rounded-3xl border border-[#EDE6DC] shadow-pillowy h-fit">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2D2B2A] font-bold pb-4 border-b border-[#EDE6DC]">
                    <SlidersHorizontal size={16} className="text-[#8EBBB0]" />
                    <span>{t('catalog.filters')}</span>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-[#2D2B2A]">
                      <span className="font-medium">{t('catalog.maxPrice')}</span>
                      <span className="font-bold text-[#E79685]">${priceFilter.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="3000"
                      step="20"
                      value={priceFilter}
                      onChange={(e) => setPriceFilter(Number(e.target.value))}
                      className="w-full accent-[#E79685] cursor-pointer"
                    />
                  </div>

                  {/* Material Filter */}
                  <div className="space-y-2 pt-2 border-t border-[#EDE6DC]">
                    <span className="text-xs font-semibold text-[#2D2B2A] block">{t('catalog.material')}</span>
                    <select
                      value={selectedMaterialFilter}
                      onChange={(e) => setSelectedMaterialFilter(e.target.value)}
                      className="w-full bg-[#FDFBF7] border border-[#EDE6DC] text-xs text-[#2D2B2A] p-2.5 rounded-xl outline-none"
                    >
                      <option value="all">{t('catalog.allMaterials')}</option>
                      <option value="wool">{t('catalog.wool')}</option>
                      <option value="linen">{t('catalog.linen')}</option>
                      <option value="cotton">{t('catalog.cotton')}</option>
                      <option value="oak">{t('catalog.oak')}</option>
                    </select>
                  </div>
                </div>

                {/* Filtered Product Cards */}
                <div className="lg:col-span-3">
                  {isLoadingProducts ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-4 rounded-3xl border border-[#EDE6DC] animate-pulse space-y-4 shadow-xs"
                        >
                          <div className="aspect-[3/4] bg-[#F7F3EB] rounded-2xl w-full" />
                          <div className="h-3 bg-[#F7F3EB] rounded w-2/3" />
                          <div className="h-4 bg-[#F7F3EB] rounded w-full" />
                        </div>
                      ))}
                    </div>
                  ) : displayedProducts.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-[#EDE6DC] shadow-pillowy">
                      <p className="font-heading text-2xl text-[#2D2B2A] mb-2 font-medium">{t('catalog.noProductsFound')}</p>
                      <p className="text-xs text-[#6B6661] max-w-sm mx-auto font-normal mb-6">
                        {t('catalog.noProductsHint')}
                      </p>
                      <button
                        onClick={() => {
                          setPriceFilter(3000);
                          setSelectedMaterialFilter('all');
                          setVisibleCatalogCount(6);
                        }}
                        className="bg-[#8EBBB0] text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full cursor-pointer shadow-pillowy-sage"
                      >
                        {t('catalog.resetFilters')}
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedProducts.slice(0, visibleCatalogCount).map((product) => (
                          <div
                            key={product.id}
                            className="group bg-white p-4 rounded-3xl border border-[#EDE6DC] hover:border-[#8EBBB0]/60 transition-all flex flex-col justify-between shadow-pillowy"
                          >
                            <div>
                              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#F7F3EB] mb-4">
                                <img
                                  src={product.primaryImage}
                                  alt={product.name}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {product.stockInfo && (
                                  <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[10px] uppercase tracking-wider font-bold text-[#8EBBB0] px-2.5 py-1 rounded-full shadow-xs">
                                    {product.stockInfo.inStock ? t('catalog.inStock') : t('catalog.madeToOrder')}
                                  </span>
                                )}
                                <button
                                  onClick={() => setSelectedProduct(product)}
                                  className="absolute inset-0 w-full h-full bg-[#2D2B2A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs uppercase tracking-wider font-bold cursor-pointer"
                                >
                                  {t('catalog.quickView')}
                                </button>
                              </div>
                              <span className="text-[10px] text-[#8EBBB0] uppercase tracking-wider block font-bold">
                                {product.categoryLabel}
                              </span>
                              <h3
                                onClick={() => setSelectedProduct(product)}
                                className="font-heading text-base text-[#2D2B2A] hover:text-[#E79685] transition-colors cursor-pointer line-clamp-1 font-medium"
                              >
                                {product.name}
                              </h3>
                            </div>
                            
                            <div className="flex justify-between items-center pt-3 border-t border-[#EDE6DC] mt-3">
                              <div>
                                <span className="text-sm font-bold text-[#E79685] block">${product.price.toLocaleString()}</span>
                                <span className="text-[10px] text-[#9E9891] block">{product.deliveryInfo?.estimatedDateRange || t('catalog.daysDelivery')}</span>
                              </div>
                              <button
                                onClick={() => handleQuickAdd(product)}
                                className="bg-[#E79685] hover:bg-[#D47B68] text-white text-[11px] uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all shadow-pillowy-coral cursor-pointer"
                              >
                                {t('catalog.cartButton')}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Load More Button for Space / Category */}
                      {displayedProducts.length > visibleCatalogCount && (
                        <div className="text-center pt-10">
                          <button
                            onClick={() => setVisibleCatalogCount((prev) => prev + (window.innerWidth < 768 ? 5 : 15))}
                            className="bg-[#E79685] hover:bg-[#D47B68] text-white px-8 py-3.5 text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-pillowy-coral hover:scale-105 cursor-pointer"
                          >
                            {t('catalog.moreProducts', { count: displayedProducts.length - visibleCatalogCount })}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>

            </div>
          </section>
        ) : null}

        {/* Best Sellers Slider */}
        <BestSellersSlider
          products={products}
          wishlistIds={wishlistIds}
          isLoading={isLoadingProducts}
          onToggleWishlist={handleToggleWishlist}
          onQuickAdd={handleQuickAdd}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Scroll-Driven Parallax 3D Banner */}
        <ParallaxBanner
          onExploreClick={() => {
            const el = document.getElementById('best-sellers');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Split Editorial Banner */}
        <SplitEditorialBanner
          onExploreClick={() => {
            const el = document.getElementById('best-sellers');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* New Arrivals Grid */}
        <NewArrivalsGrid
          products={products}
          wishlistIds={wishlistIds}
          isLoading={isLoadingProducts}
          onToggleWishlist={handleToggleWishlist}
          onQuickAdd={handleQuickAdd}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Shop By Room */}
        <ShopByRoom
          rooms={ROOMS}
          onSelectRoom={(roomSlug) => {
            setActiveRoom(roomSlug);
            setActiveCategory('all');
            setVisibleCatalogCount(6);
            const el = document.getElementById('catalog-grid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Continuous Sliding Marquee Gallery */}
        <SlidingMarqueeGallery
          products={products}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => setActiveCategory(cat)}
        onOpenLegal={(tab) => {
          setLegalTab(tab);
          setIsLegalOpen(true);
        }}
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
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onQuickAdd={handleQuickAdd}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onViewIn3D={(prod) => {
          setSelected3DProduct(prod);
          setSelectedProduct(null);
          const el = document.getElementById('carpet-3d-studio');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
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
        initialTab={legalTab}
        onClose={() => setIsLegalOpen(false)}
      />
    </div>
  );
}

export default App;

