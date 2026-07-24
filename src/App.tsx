import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedCollections } from './components/FeaturedCollections';
import { Carpet3DStudio } from './components/Carpet3DStudio';
import { BestSellersSlider } from './components/BestSellersSlider';
import { ParallaxBanner } from './components/ParallaxBanner';
import { SplitEditorialBanner } from './components/SplitEditorialBanner';
import { NewArrivalsGrid } from './components/NewArrivalsGrid';
import { ShopByRoom } from './components/ShopByRoom';
import { SlidingMarqueeGallery } from './components/SlidingMarqueeGallery';
import { BrandStory } from './components/BrandStory';
import { InstagramGallery } from './components/InstagramGallery';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';

import { PRODUCTS, COLLECTIONS, ROOMS, INSTAGRAM_GALLERY } from './data/mockData';
import type { Product, CartItem } from './types';
import { SlidersHorizontal } from 'lucide-react';

export function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['p-1', 'p-3']);
  
  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Category view filter state
  const [priceFilter, setPriceFilter] = useState<number>(3000);
  const [selectedMaterialFilter, setSelectedMaterialFilter] = useState<string>('all');

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
      product.sizes[0] || 'Standard',
      product.colors[0] || { name: 'Natural', hex: '#FAF8F5' },
      product.material
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

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  // Filtered Products for Catalog View
  const displayedProducts = PRODUCTS.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    if (activeRoom && p.roomCategory !== activeRoom) return false;
    if (p.price > priceFilter) return false;
    if (selectedMaterialFilter !== 'all' && !p.material.toLowerCase().includes(selectedMaterialFilter.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#B96A3C]/20 selection:text-[#505744]">
      {/* Navigation Bar */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setActiveRoom(null);
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
            const el = document.getElementById('featured-collections');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onShopCarpetsClick={() => {
            setActiveCategory('carpets');
            setActiveRoom(null);
            const el = document.getElementById('catalog-grid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Featured Collections Slider */}
        <div id="featured-collections">
          <FeaturedCollections
            collections={COLLECTIONS}
            onSelectCategory={(slug) => {
              setActiveCategory(slug);
              setActiveRoom(null);
              const el = document.getElementById('catalog-grid');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        {/* Interactive 3D WebGL Carpet Studio */}
        <Carpet3DStudio onAddToCart={handleAddToCart} />

        {/* Catalog Grid View (Filtered by Category/Room when user selects filter) */}
        {activeCategory !== 'all' || activeRoom ? (
          <section id="catalog-grid" className="py-24 bg-[#FAF8F5] border-b border-[#ECE8E2]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
              
              {/* Category Banner Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#ECE8E2]">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium block mb-2">
                    Filtered Storefront Catalog
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] capitalize">
                    {activeRoom ? `Room: ${activeRoom}` : `${activeCategory} Collection`}
                  </h2>
                </div>

                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveRoom(null);
                    setPriceFilter(3000);
                    setSelectedMaterialFilter('all');
                  }}
                  className="text-xs uppercase tracking-widest text-[#B96A3C] hover:underline self-start md:self-auto font-medium"
                >
                  Clear All Filters (Show Homepage)
                </button>
              </div>

              {/* Filter Sidebar & Product Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
                
                {/* Accordion Filter Sidebar */}
                <div className="space-y-6 bg-[#F4EEE6] p-6 rounded-[2px] border border-[#ECE8E2] h-fit">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2B2B2B] font-semibold pb-4 border-b border-[#ECE8E2]">
                    <SlidersHorizontal size={16} className="text-[#69705A]" />
                    <span>Catalog Filters</span>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-[#2B2B2B]">
                      <span className="font-medium">Max Price</span>
                      <span className="font-semibold text-[#B96A3C]">${priceFilter.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="3000"
                      step="100"
                      value={priceFilter}
                      onChange={(e) => setPriceFilter(Number(e.target.value))}
                      className="w-full accent-[#B96A3C] cursor-pointer"
                    />
                  </div>

                  {/* Material Filter */}
                  <div className="space-y-2 pt-2 border-t border-[#ECE8E2]">
                    <span className="text-xs font-medium text-[#2B2B2B] block">Material Fiber</span>
                    <select
                      value={selectedMaterialFilter}
                      onChange={(e) => setSelectedMaterialFilter(e.target.value)}
                      className="w-full bg-white border border-[#ECE8E2] text-xs text-[#2B2B2B] p-2.5 rounded-[2px] outline-none"
                    >
                      <option value="all">All Materials</option>
                      <option value="wool">Pure Wool</option>
                      <option value="linen">French Flax Linen</option>
                      <option value="jute">Organic Jute</option>
                      <option value="oak">European Oak Wood</option>
                      <option value="ceramic">Stoneware Ceramic</option>
                    </select>
                  </div>
                </div>

                {/* Filtered Product Cards */}
                <div className="lg:col-span-3">
                  {displayedProducts.length === 0 ? (
                    <div className="text-center py-20 bg-[#F4EEE6]/50 rounded-[2px]">
                      <p className="font-serif text-2xl text-[#2B2B2B] mb-2">No matching pieces found</p>
                      <p className="text-xs text-[#666666] max-w-sm mx-auto font-light mb-6">
                        Adjust your price slider or material filter to view available designs.
                      </p>
                      <button
                        onClick={() => {
                          setPriceFilter(3000);
                          setSelectedMaterialFilter('all');
                        }}
                        className="bg-[#69705A] text-white text-xs uppercase tracking-widest px-6 py-3 rounded-[2px]"
                      >
                        Reset Filters
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayedProducts.map((product) => (
                        <div
                          key={product.id}
                          className="group bg-[#FAF8F5] p-4 rounded-[2px] border border-[#ECE8E2] hover:border-[#D9C5A7] transition-all"
                        >
                          <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-[#EFE7DC] mb-4">
                            <img
                              src={product.primaryImage}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <button
                              onClick={() => setSelectedProduct(product)}
                              className="absolute inset-0 w-full h-full bg-[#2B2B2B]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs uppercase tracking-widest font-medium"
                            >
                              Quick View
                            </button>
                          </div>
                          <span className="text-[10px] text-[#8B8B8B] uppercase tracking-wider block font-medium">
                            {product.categoryLabel}
                          </span>
                          <h3
                            onClick={() => setSelectedProduct(product)}
                            className="font-serif text-lg text-[#2B2B2B] hover:text-[#B96A3C] transition-colors cursor-pointer line-clamp-1"
                          >
                            {product.name}
                          </h3>
                          <div className="flex justify-between items-center pt-2">
                            <span className="text-sm font-medium text-[#2B2B2B]">${product.price.toLocaleString()}</span>
                            <button
                              onClick={() => handleQuickAdd(product)}
                              className="bg-[#B96A3C] text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-[2px]"
                            >
                              + Cart
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

            </div>
          </section>
        ) : null}

        {/* Best Sellers Slider */}
        <BestSellersSlider
          products={PRODUCTS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickAdd={handleQuickAdd}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Scroll-Driven Parallax 3D Banner */}
        <ParallaxBanner
          onExploreClick={() => {
            const el = document.getElementById('brand-story');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Split Editorial Banner */}
        <SplitEditorialBanner
          onExploreClick={() => {
            const el = document.getElementById('brand-story');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* New Arrivals Grid */}
        <NewArrivalsGrid
          products={PRODUCTS}
          wishlistIds={wishlistIds}
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
            const el = document.getElementById('catalog-grid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Continuous Sliding Marquee Gallery */}
        <SlidingMarqueeGallery
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Brand Craft Story */}
        <div id="brand-story">
          <BrandStory />
        </div>

        {/* Instagram / Pinterest Gallery */}
        <InstagramGallery
          posts={INSTAGRAM_GALLERY}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={(cat) => setActiveCategory(cat)} />

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
        products={PRODUCTS}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
}

export default App;
