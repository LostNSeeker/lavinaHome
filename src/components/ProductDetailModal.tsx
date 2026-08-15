import React, { useState } from 'react';
import type { Product } from '../types';
import { X, Heart, Star, ChevronDown, ChevronUp, ShoppingBag, ShieldCheck, RefreshCw, Box } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    material: string
  ) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onViewIn3D?: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onViewIn3D,
}) => {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('Standard');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string }>({ name: 'Natural', hex: '#FAF8F5' });
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [openAccordion, setOpenAccordion] = useState<'desc' | 'care' | 'shipping'>('desc');
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  // Sync state whenever the selected product changes or opens
  React.useEffect(() => {
    if (product) {
      const initialImg = product.primaryImage || product.secondaryImage || product.galleryImages?.[0] || '';
      setActiveImage(initialImg);
      setSelectedSize(product.sizes?.[0] || 'Standard');
      setSelectedColor(product.colors?.[0] || { name: 'Natural', hex: '#FAF8F5' });
      setSelectedMaterial(product.material || '');
      setIsImageLoading(true);
    }
  }, [product]);

  if (!product) return null;

  const gallery = [product.primaryImage, product.secondaryImage, ...(product.galleryImages || [])].filter(Boolean);
  const uniqueGallery = Array.from(new Set(gallery));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2D2B2A]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-up">
      <div className="bg-[#FDFBF7] max-w-4xl w-full max-h-[86vh] overflow-y-auto rounded-3xl border border-[#EDE6DC] shadow-2xl relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 p-2 bg-white/95 hover:bg-white text-[#2D2B2A] rounded-full transition-all shadow-xs cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-5 sm:p-8">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-[4/5] bg-[#F7F3EB] rounded-2xl overflow-hidden relative border border-[#EDE6DC] p-3 sm:p-5 flex items-center justify-center shadow-xs">
              {isImageLoading && (
                <div className="absolute inset-0 bg-[#EDE6DC]/40 animate-pulse flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full border-2 border-[#E79685] border-t-transparent animate-spin" />
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
                className={`w-full h-full object-contain drop-shadow-sm transition-all duration-500 ${
                  isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
              <button
                onClick={() => onToggleWishlist(product)}
                className={`absolute top-3.5 left-3.5 p-2.5 rounded-full backdrop-blur-md transition-all shadow-xs cursor-pointer z-10 ${
                  isWishlisted
                    ? 'bg-[#E79685] text-white'
                    : 'bg-white/90 text-[#2D2B2A] hover:bg-[#E79685] hover:text-white'
                }`}
              >
                <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
              {uniqueGallery.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (activeImage !== imgUrl) {
                      setIsImageLoading(true);
                      setActiveImage(imgUrl);
                    }
                  }}
                  className={`w-16 aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === imgUrl ? 'border-[#E79685] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt="Thumbnail view"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/LI-112.jpg';
                    }}
                    className="w-full h-full object-contain p-1 bg-[#F7F3EB]"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Selectors */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-[#9E9891] uppercase tracking-wider mb-1.5">
                <span className="text-[#8EBBB0] font-bold">{product.categoryLabel}</span>
                <div className="flex items-center gap-1 text-[#E5B769]">
                  <Star size={13} fill="currentColor" />
                  <span className="font-bold text-[#2D2B2A]">{product.rating}</span>
                  <span className="text-[#9E9891]">({product.reviewsCount} {t('productDetail.reviews')})</span>
                </div>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl text-[#2D2B2A] font-medium mb-2 leading-tight">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2.5 mb-4">
                <span className="text-xl sm:text-2xl font-bold text-[#E79685]">
                  €{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#9E9891] line-through font-normal">
                    €{product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-[10px] text-[#8EBBB0] uppercase tracking-wider bg-[#8EBBB0]/15 px-2.5 py-0.5 rounded-full font-bold">
                  {t('productDetail.taxIncluded')}
                </span>
              </div>

              {/* Material Selector */}
              {product.availableMaterials && product.availableMaterials.length > 0 && (
                <div className="mb-4 space-y-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#6B6661] font-semibold block">
                    {t('productDetail.material')} <strong className="text-[#2D2B2A]">{selectedMaterial}</strong>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.availableMaterials.map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(mat)}
                        className={`text-xs px-3 py-1 rounded-full border transition-all cursor-pointer ${
                          selectedMaterial === mat
                            ? 'border-[#8EBBB0] bg-[#8EBBB0] text-white font-bold'
                            : 'border-[#EDE6DC] bg-white text-[#6B6661] hover:border-[#8EBBB0]'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4 space-y-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#6B6661] font-semibold block">
                    {t('productDetail.dimensions')} <strong className="text-[#2D2B2A]">{selectedSize}</strong>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`text-xs px-3.5 py-1 rounded-full border transition-all cursor-pointer ${
                          selectedSize === sz
                            ? 'border-[#E79685] bg-[#E79685] text-white font-bold'
                            : 'border-[#EDE6DC] bg-white text-[#2D2B2A] hover:border-[#E79685]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Swatches */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-4 space-y-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#6B6661] font-semibold block">
                    {t('productDetail.colorway')} <strong className="text-[#2D2B2A]">{selectedColor.name}</strong>
                  </span>
                  <div className="flex gap-2.5">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        className={`w-6 h-6 rounded-full border-2 transition-all p-0.5 cursor-pointer ${
                          selectedColor.name === c.name ? 'border-[#E79685] scale-110' : 'border-transparent'
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

              {/* Live Stock & Delivery Box */}
              <div className="mb-4 bg-white p-3.5 rounded-2xl border border-[#EDE6DC] space-y-2 text-xs shadow-pillowy">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      product.stockInfo?.inStock ? 'bg-[#8EBBB0] animate-pulse' : 'bg-[#E5B769]'
                    }`} />
                    <span className="font-bold text-[#2D2B2A]">
                      {product.stockInfo?.statusLabel || t('productDetail.inStockReady')}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8EBBB0] bg-[#8EBBB0]/15 px-2 py-0.5 rounded-full font-bold">
                    {t('productDetail.nonToxicBadge')}
                  </span>
                </div>

                <div className="pt-1.5 border-t border-[#EDE6DC] space-y-1 text-[11px] text-[#6B6661]">
                  <div className="flex items-center justify-between font-medium">
                    <span>{t('productDetail.estimatedDelivery')}</span>
                    <span className="text-[#2D2B2A] font-bold">{product.deliveryInfo?.estimatedDateRange || t('productDetail.deliveryDays')}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#9E9891]">
                    <span>{t('productDetail.dispatchHub')}</span>
                    <span>Industriestr. 23, 48249 Dülmen</span>
                  </div>
                </div>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={() => {
                  onAddToCart(product, selectedSize, selectedColor, selectedMaterial);
                  onClose();
                }}
                className="w-full bg-[#E79685] hover:bg-[#D47B68] text-white py-3.5 text-xs uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2.5 transition-all shadow-pillowy-coral hover:scale-105 mb-2 cursor-pointer"
              >
                <ShoppingBag size={15} />
                <span>{t('productDetail.addToCart', { price: `€${product.price.toLocaleString()}` })}</span>
              </button>

              {/* View in 3D Carpet Studio (2D to 3D Projection) */}
              {onViewIn3D && (
                <button
                  onClick={() => {
                    onViewIn3D(product);
                    onClose();
                  }}
                  className="w-full bg-[#8EBBB0]/15 hover:bg-[#8EBBB0]/25 text-[#4D7A70] border border-[#8EBBB0]/40 py-2.5 text-xs uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.02] mb-4 cursor-pointer"
                >
                  <Box size={15} className="text-[#8EBBB0]" />
                  <span>{t('productDetail.viewIn3D')}</span>
                </button>
              )}
            </div>

            {/* Accordion Info Sections */}
            <div className="border-t border-[#EDE6DC] space-y-2.5 pt-3">
              {/* Description */}
              <div className="border-b border-[#EDE6DC] pb-2.5">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'desc' ? ('' as any) : 'desc')}
                  className="w-full flex justify-between items-center text-xs uppercase tracking-wider font-bold text-[#2D2B2A] cursor-pointer"
                >
                  <span>{t('productDetail.tabStory')}</span>
                  {openAccordion === 'desc' ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
                {openAccordion === 'desc' && (
                  <p className="text-xs text-[#6B6661] font-normal leading-relaxed pt-2 animate-fade-up">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Care Instructions */}
              <div className="border-b border-[#EDE6DC] pb-2.5">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? ('' as any) : 'care')}
                  className="w-full flex justify-between items-center text-xs uppercase tracking-wider font-bold text-[#2D2B2A] cursor-pointer"
                >
                  <span>{t('productDetail.tabCare')}</span>
                  {openAccordion === 'care' ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
                {openAccordion === 'care' && (
                  <ul className="text-xs text-[#6B6661] font-normal space-y-1 pt-2 list-disc list-inside animate-fade-up">
                    {product.careInstructions.map((ci, idx) => (
                      <li key={idx}>{ci}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="pb-1">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? ('' as any) : 'shipping')}
                  className="w-full flex justify-between items-center text-xs uppercase tracking-wider font-bold text-[#2D2B2A] cursor-pointer"
                >
                  <span>{t('productDetail.tabShipping')}</span>
                  {openAccordion === 'shipping' ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="text-xs text-[#6B6661] font-normal leading-relaxed pt-2 space-y-1.5 animate-fade-up">
                    <p className="flex items-center gap-2 text-[#8EBBB0] font-semibold">
                      <ShieldCheck size={13} />
                      <span>{product.shippingInfo}</span>
                    </p>
                    <p className="flex items-center gap-2 text-[#9E9891]">
                      <RefreshCw size={13} />
                      <span>{t('productDetail.trialGuarantee')}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

