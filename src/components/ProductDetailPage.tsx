import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import { 
  ArrowLeft, 
  Heart, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ShoppingBag, 
  ShieldCheck, 
  RefreshCw, 
  Box, 
  Truck, 
  Sparkles, 
  Check, 
  Plus, 
  Minus, 
  Zap,
  Home
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
  onBack: () => void;
  onNavigateHome: () => void;
  onAddToCart: (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    material: string,
    quantity?: number
  ) => void;
  onBuyNow: (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    material: string,
    quantity?: number
  ) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onViewIn3D?: (product: Product) => void;
  onSelectRelatedProduct: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
  onBack,
  onNavigateHome,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onViewIn3D,
  onSelectRelatedProduct,
}) => {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('Standard');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string }>({ name: 'Natural', hex: '#FAF8F5' });
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [openAccordion, setOpenAccordion] = useState<'desc' | 'specs' | 'care' | 'shipping'>('desc');
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  // Sync state whenever product changes
  useEffect(() => {
    if (product) {
      const initialImg = product.primaryImage || product.secondaryImage || product.galleryImages?.[0] || '';
      setActiveImage(initialImg);
      setSelectedSize(product.sizes?.[0] || '120 x 180 cm');
      setSelectedColor(product.colors?.[0] || { name: 'Natural', hex: '#FAF8F5' });
      setSelectedMaterial(product.material || product.availableMaterials?.[0] || 'Organic Wool');
      setQuantity(1);
      setIsImageLoading(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product.id]);

  const gallery = [
    product.primaryImage,
    product.secondaryImage,
    ...(product.galleryImages || []),
  ].filter(Boolean);
  const uniqueGallery = Array.from(new Set(gallery));

  // Related products from same category or materials (excluding active one)
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.categoryLabel === product.categoryLabel))
    .slice(0, 4);

  const fallbackRelated = relatedProducts.length > 0
    ? relatedProducts
    : allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, selectedMaterial, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2400);
  };

  const handleInstantBuy = () => {
    onBuyNow(product, selectedSize, selectedColor, selectedMaterial, quantity);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2B2A] pb-24 pt-6 animate-fade-up">
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2D2B2A] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-up border border-[#8EBBB0]/40">
          <div className="w-6 h-6 rounded-full bg-[#8EBBB0] flex items-center justify-center text-white">
            <Check size={14} />
          </div>
          <div>
            <p className="text-xs font-bold">{t('cart.itemAdded', { defaultValue: 'Added to your bag!' })}</p>
            <p className="text-[11px] text-[#A5CCC3]">{product.name} ({quantity}x)</p>
          </div>
        </div>
      )}

      {/* Top Navigation & Breadcrumbs Bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#EDE6DC]">
          
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#6B6661] hover:text-[#E79685] bg-white px-4 py-2 rounded-full border border-[#EDE6DC] hover:border-[#E79685] transition-all shadow-xs cursor-pointer group"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            <span>{t('productDetail.backToCatalog', { defaultValue: 'Back to Collection' })}</span>
          </button>

          {/* Breadcrumb Links */}
          <nav className="flex items-center gap-2 text-xs text-[#9E9891]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#E79685] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home size={13} />
              <span>{t('productDetail.home', { defaultValue: 'Home' })}</span>
            </button>
            <span>/</span>
            <button
              onClick={onBack}
              className="hover:text-[#E79685] transition-colors capitalize cursor-pointer"
            >
              {product.categoryLabel || product.category}
            </button>
            <span>/</span>
            <span className="text-[#2D2B2A] font-semibold truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main 2-Column Product Showcase Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: Image Gallery & Badges (STICKY POSITION) ================= */}
          <div className="lg:col-span-7 space-y-6 lg:sticky lg:top-28 self-start">
            
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] sm:aspect-square bg-[#F7F3EB] rounded-3xl overflow-hidden border border-[#EDE6DC] p-6 sm:p-10 flex items-center justify-center shadow-pillowy group">
              {isImageLoading && (
                <div className="absolute inset-0 bg-[#EDE6DC]/40 animate-pulse flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full border-3 border-[#E79685] border-t-transparent animate-spin" />
                </div>
              )}

              <img
                src={activeImage || product.primaryImage}
                alt={product.name}
                onLoad={() => setIsImageLoading(false)}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/LI-112.jpg';
                  setIsImageLoading(false);
                }}
                className={`w-full h-full object-contain drop-shadow-md transition-all duration-700 group-hover:scale-105 ${
                  isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />

              {/* Floating Wishlist Button */}
              <button
                onClick={() => onToggleWishlist(product)}
                className={`absolute top-5 right-5 p-3 rounded-full backdrop-blur-md transition-all shadow-md cursor-pointer z-10 ${
                  isWishlisted
                    ? 'bg-[#E79685] text-white scale-110'
                    : 'bg-white/90 text-[#2D2B2A] hover:bg-[#E79685] hover:text-white'
                }`}
                title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>

              {/* Badges Overlay */}
              <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                <span className="bg-white/95 backdrop-blur-xs text-[11px] uppercase tracking-wider font-bold text-[#8EBBB0] px-3.5 py-1.5 rounded-full shadow-xs border border-[#8EBBB0]/30 flex items-center gap-1.5">
                  <Sparkles size={12} className="text-[#8EBBB0]" />
                  <span>{t('productDetail.nonToxicBadge', { defaultValue: '100% Non-Toxic' })}</span>
                </span>
                {product.originalPrice && (
                  <span className="bg-[#E79685] text-white text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-xs w-fit">
                    Sale -€{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                )}
              </div>

              {/* 3D Studio Quick View Link */}
              {onViewIn3D && (
                <button
                  onClick={() => onViewIn3D(product)}
                  className="absolute bottom-5 right-5 bg-white/95 hover:bg-white text-[#2D2B2A] hover:text-[#8EBBB0] text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-full shadow-pillowy flex items-center gap-2 border border-[#EDE6DC] transition-all hover:scale-105 cursor-pointer z-10"
                >
                  <Box size={16} className="text-[#8EBBB0]" />
                  <span>{t('productDetail.viewIn3D', { defaultValue: '3D Preview' })}</span>
                </button>
              )}
            </div>

            {/* Thumbnail Strip */}
            {uniqueGallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {uniqueGallery.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (activeImage !== imgUrl) {
                        setIsImageLoading(true);
                        setActiveImage(imgUrl);
                      }
                    }}
                    className={`w-20 sm:w-24 aspect-square rounded-2xl overflow-hidden border-2 transition-all cursor-pointer bg-white p-1.5 shadow-xs ${
                      activeImage === imgUrl
                        ? 'border-[#E79685] ring-4 ring-[#E79685]/20 scale-105'
                        : 'border-[#EDE6DC] opacity-75 hover:opacity-100 hover:border-[#8EBBB0]'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} view ${index + 1}`}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/LI-112.jpg';
                      }}
                      className="w-full h-full object-contain bg-[#F7F3EB] rounded-xl"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Value Trust Features Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] shadow-xs text-center space-y-1.5">
                <Truck size={20} className="mx-auto text-[#8EBBB0]" />
                <span className="font-bold text-xs text-[#2D2B2A] block leading-tight">
                  {t('productDetail.fastDispatch', { defaultValue: 'Free Express Delivery' })}
                </span>
                <span className="text-[10px] text-[#9E9891] block">2–4 Business Days</span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] shadow-xs text-center space-y-1.5">
                <Sparkles size={20} className="mx-auto text-[#E79685]" />
                <span className="font-bold text-xs text-[#2D2B2A] block leading-tight">
                  {t('productDetail.oekoTexCertified', { defaultValue: 'OEKO-TEX® 100' })}
                </span>
                <span className="text-[10px] text-[#9E9891] block">Skin-Safe & Pure</span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] shadow-xs text-center space-y-1.5">
                <RefreshCw size={20} className="mx-auto text-[#E5B769]" />
                <span className="font-bold text-xs text-[#2D2B2A] block leading-tight">
                  {t('productDetail.riskFreeTrial', { defaultValue: '30-Day Room Trial' })}
                </span>
                <span className="text-[10px] text-[#9E9891] block">100% Refund Guarantee</span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] shadow-xs text-center space-y-1.5">
                <ShieldCheck size={20} className="mx-auto text-[#8EBBB0]" />
                <span className="font-bold text-xs text-[#2D2B2A] block leading-tight">
                  {t('productDetail.handcraftedFibers', { defaultValue: 'Natural Fibers' })}
                </span>
                <span className="text-[10px] text-[#9E9891] block">Built to Last</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Options & Purchase (SCROLLABLE CONTENT) ================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header / Category & Ratings */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider">
                <span className="text-[#8EBBB0] font-bold bg-[#8EBBB0]/15 px-3 py-1 rounded-full">
                  {product.categoryLabel || product.category}
                </span>
                <div className="flex items-center gap-1.5 text-[#E5B769] bg-white px-3 py-1 rounded-full border border-[#EDE6DC] shadow-xs">
                  <Star size={14} fill="currentColor" />
                  <span className="font-bold text-[#2D2B2A]">{product.rating}</span>
                  <span className="text-[#9E9891]">({product.reviewsCount} {t('productDetail.reviews')})</span>
                </div>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl text-[#2D2B2A] font-medium leading-snug pt-1">
                {product.name}
              </h1>

              {/* Price Banner */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-2xl sm:text-3xl font-bold text-[#E79685] font-heading">
                  €{(product.price * quantity).toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm sm:text-base text-[#9E9891] line-through font-normal">
                    €{(product.originalPrice * quantity).toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-[#8EBBB0] uppercase tracking-wider bg-[#8EBBB0]/15 px-3 py-1 rounded-full font-bold">
                  {t('productDetail.taxIncluded')}
                </span>
              </div>
            </div>

            {/* Material Selector */}
            {product.availableMaterials && product.availableMaterials.length > 0 && (
              <div className="space-y-2.5 pt-2 border-t border-[#EDE6DC]">
                <div className="flex justify-between items-center text-xs">
                  <span className="uppercase tracking-wider text-[#6B6661] font-semibold">
                    {t('productDetail.material')}
                  </span>
                  <strong className="text-[#2D2B2A] font-bold">{selectedMaterial}</strong>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.availableMaterials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`text-xs px-4 py-2 rounded-2xl border transition-all cursor-pointer font-medium shadow-xs ${
                        selectedMaterial === mat
                          ? 'border-[#8EBBB0] bg-[#8EBBB0] text-white font-bold ring-2 ring-[#8EBBB0]/30'
                          : 'border-[#EDE6DC] bg-white text-[#6B6661] hover:border-[#8EBBB0]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dimensions / Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2.5 pt-2 border-t border-[#EDE6DC]">
                <div className="flex justify-between items-center text-xs">
                  <span className="uppercase tracking-wider text-[#6B6661] font-semibold">
                    {t('productDetail.dimensions')}
                  </span>
                  <strong className="text-[#2D2B2A] font-bold">{selectedSize}</strong>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`text-xs px-4 py-2 rounded-2xl border transition-all cursor-pointer font-medium shadow-xs ${
                        selectedSize === sz
                          ? 'border-[#E79685] bg-[#E79685] text-white font-bold ring-2 ring-[#E79685]/30'
                          : 'border-[#EDE6DC] bg-white text-[#2D2B2A] hover:border-[#E79685]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colorway Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2.5 pt-2 border-t border-[#EDE6DC]">
                <div className="flex justify-between items-center text-xs">
                  <span className="uppercase tracking-wider text-[#6B6661] font-semibold">
                    {t('productDetail.colorway')}
                  </span>
                  <strong className="text-[#2D2B2A] font-bold">{selectedColor.name}</strong>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`w-9 h-9 rounded-full border-2 transition-all p-0.5 cursor-pointer shadow-xs ${
                        selectedColor.name === c.name
                          ? 'border-[#E79685] ring-2 ring-[#E79685]/40 scale-110'
                          : 'border-transparent hover:scale-105'
                      }`}
                      title={c.name}
                    >
                      <span
                        className="w-full h-full rounded-full block border border-[#EDE6DC]"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-2 pt-2 border-t border-[#EDE6DC]">
              <span className="uppercase tracking-wider text-xs text-[#6B6661] font-semibold block">
                {t('productDetail.quantity', { defaultValue: 'Quantity' })}
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-white border border-[#EDE6DC] rounded-2xl p-1 shadow-xs">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="w-9 h-9 flex items-center justify-center text-[#2D2B2A] hover:bg-[#F7F3EB] rounded-xl disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer transition-colors"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="w-12 text-center font-heading text-base font-bold text-[#2D2B2A]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    className="w-9 h-9 flex items-center justify-center text-[#2D2B2A] hover:bg-[#F7F3EB] rounded-xl cursor-pointer transition-colors"
                  >
                    <Plus size={15} />
                  </button>
                </div>
                <span className="text-xs text-[#9E9891]">
                  Max. 10 per order
                </span>
              </div>
            </div>

            {/* Realtime Stock & Dispatch Hub Info */}
            <div className="bg-white p-4 rounded-3xl border border-[#EDE6DC] space-y-2.5 shadow-pillowy">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    product.stockInfo?.inStock ? 'bg-[#8EBBB0] animate-pulse' : 'bg-[#E5B769]'
                  }`} />
                  <span className="font-bold text-[#2D2B2A]">
                    {product.stockInfo?.statusLabel || t('productDetail.inStockReady')}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#8EBBB0] bg-[#8EBBB0]/15 px-2.5 py-0.5 rounded-full font-bold">
                  {product.sku || 'DE-STOCK'}
                </span>
              </div>

              <div className="pt-2 border-t border-[#EDE6DC] space-y-1 text-xs text-[#6B6661]">
                <div className="flex items-center justify-between">
                  <span>{t('productDetail.estimatedDelivery')}</span>
                  <strong className="text-[#2D2B2A]">{product.deliveryInfo?.estimatedDateRange || t('productDetail.deliveryDays')}</strong>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#9E9891]">
                  <span>{t('productDetail.dispatchHub')}</span>
                  <span>Industriestr. 23, 48249 Dülmen</span>
                </div>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* Add to Cart */}
              <button
                onClick={handleAdd}
                className="w-full bg-[#E79685] hover:bg-[#D47B68] text-white py-4 px-6 text-xs uppercase tracking-widest font-bold rounded-full flex items-center justify-center gap-3 transition-all shadow-pillowy-coral hover:scale-[1.02] cursor-pointer"
              >
                <ShoppingBag size={17} />
                <span>{t('productDetail.addToCart', { price: `€${(product.price * quantity).toLocaleString()}` })}</span>
              </button>

              {/* Instant Checkout / Buy Now */}
              <button
                onClick={handleInstantBuy}
                className="w-full bg-[#2D2B2A] hover:bg-[#403E3C] text-white py-3.5 px-6 text-xs uppercase tracking-widest font-bold rounded-full flex items-center justify-center gap-2.5 transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                <Zap size={16} className="text-[#E5B769]" />
                <span>{t('productDetail.buyNow', { defaultValue: 'Buy Now — Express Checkout' })}</span>
              </button>

              {/* 3D Carpet Studio */}
              {onViewIn3D && (
                <button
                  onClick={() => onViewIn3D(product)}
                  className="w-full bg-[#8EBBB0]/15 hover:bg-[#8EBBB0]/25 text-[#4D7A70] border border-[#8EBBB0]/40 py-3 text-xs uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <Box size={16} className="text-[#8EBBB0]" />
                  <span>{t('productDetail.viewIn3D')}</span>
                </button>
              )}
            </div>

            {/* Accordion Tabs for Story, Specs, Care, Shipping */}
            <div className="border-t border-[#EDE6DC] space-y-3 pt-4">
              
              {/* Product Story */}
              <div className="bg-white rounded-2xl border border-[#EDE6DC] p-4 shadow-xs">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'desc' ? ('' as any) : 'desc')}
                  className="w-full flex justify-between items-center text-xs uppercase tracking-wider font-bold text-[#2D2B2A] cursor-pointer"
                >
                  <span>{t('productDetail.tabStory')}</span>
                  {openAccordion === 'desc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'desc' && (
                  <p className="text-xs text-[#6B6661] font-normal leading-relaxed pt-3 border-t border-[#EDE6DC] mt-3 animate-fade-up">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Material & Care */}
              <div className="bg-white rounded-2xl border border-[#EDE6DC] p-4 shadow-xs">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? ('' as any) : 'care')}
                  className="w-full flex justify-between items-center text-xs uppercase tracking-wider font-bold text-[#2D2B2A] cursor-pointer"
                >
                  <span>{t('productDetail.tabCare')}</span>
                  {openAccordion === 'care' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'care' && (
                  <ul className="text-xs text-[#6B6661] font-normal space-y-1.5 pt-3 border-t border-[#EDE6DC] mt-3 list-disc list-inside animate-fade-up">
                    {product.careInstructions.map((ci, idx) => (
                      <li key={idx}>{ci}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Shipping & Trial Guarantee */}
              <div className="bg-white rounded-2xl border border-[#EDE6DC] p-4 shadow-xs">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? ('' as any) : 'shipping')}
                  className="w-full flex justify-between items-center text-xs uppercase tracking-wider font-bold text-[#2D2B2A] cursor-pointer"
                >
                  <span>{t('productDetail.tabShipping')}</span>
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="text-xs text-[#6B6661] font-normal leading-relaxed pt-3 border-t border-[#EDE6DC] mt-3 space-y-2 animate-fade-up">
                    <p className="flex items-center gap-2 text-[#8EBBB0] font-semibold">
                      <ShieldCheck size={15} />
                      <span>{product.shippingInfo}</span>
                    </p>
                    <p className="flex items-center gap-2 text-[#9E9891]">
                      <RefreshCw size={15} />
                      <span>{t('productDetail.trialGuarantee')}</span>
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* ================= RELATED NURSERY PRODUCTS SECTION ================= */}
        <section className="mt-28 pt-16 border-t border-[#EDE6DC]">
          <div className="mb-10 text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold block bg-[#8EBBB0]/15 w-fit mx-auto px-4 py-1.5 rounded-full">
              {t('productDetail.youMightAlsoLike', { defaultValue: 'You Might Also Love' })}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#2D2B2A]">
              Complete Your Little One's Space
            </h2>
            <p className="text-xs text-[#9E9891] max-w-md mx-auto">
              {t('productDetail.youMightAlsoLikeSubtitle', { defaultValue: 'Handpicked pieces that complement this design seamlessly.' })}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fallbackRelated.map((relProduct) => (
              <div
                key={relProduct.id}
                onClick={() => onSelectRelatedProduct(relProduct)}
                className="group bg-white p-4 rounded-3xl border border-[#EDE6DC] hover:border-[#8EBBB0]/60 transition-all duration-300 shadow-pillowy flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F7F3EB] p-3 flex items-center justify-center mb-4">
                    <img
                      src={relProduct.primaryImage}
                      alt={relProduct.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/LI-112.jpg';
                      }}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-xs"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[10px] uppercase tracking-wider font-bold text-[#8EBBB0] px-2.5 py-1 rounded-full shadow-xs">
                      {relProduct.categoryLabel}
                    </span>
                  </div>

                  <h3 className="font-heading text-base text-[#2D2B2A] group-hover:text-[#E79685] transition-colors line-clamp-1 font-medium">
                    {relProduct.name}
                  </h3>
                  <span className="text-[11px] text-[#9E9891] block pt-0.5">
                    {relProduct.material}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-[#EDE6DC] mt-4">
                  <span className="text-sm font-bold text-[#E79685]">
                    €{relProduct.price.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-[#8EBBB0] group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
