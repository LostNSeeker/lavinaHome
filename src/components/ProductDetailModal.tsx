import React, { useState } from 'react';
import type { Product } from '../types';
import { X, Heart, Star, ChevronDown, ChevronUp, ShoppingBag, ShieldCheck, RefreshCw } from 'lucide-react';

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
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.primaryImage);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || { name: 'Natural', hex: '#FAF8F5' });
  const [selectedMaterial, setSelectedMaterial] = useState(product.material);
  const [openAccordion, setOpenAccordion] = useState<'desc' | 'care' | 'shipping'>('desc');

  const gallery = [product.primaryImage, product.secondaryImage, ...(product.galleryImages || [])];
  const uniqueGallery = Array.from(new Set(gallery));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2B2B2B]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-up">
      <div className="bg-[#FAF8F5] max-w-5xl w-full rounded-[4px] border border-[#ECE8E2] shadow-2xl relative overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-[#2B2B2B] rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-10">
          
          {/* Left Column: Sticky Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-[#EFE7DC] rounded-[2px] overflow-hidden relative border border-[#ECE8E2]">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <button
                onClick={() => onToggleWishlist(product)}
                className={`absolute top-4 left-4 p-2.5 rounded-full backdrop-blur-md transition-colors ${
                  isWishlisted
                    ? 'bg-[#B96A3C] text-white'
                    : 'bg-white/80 text-[#2B2B2B] hover:bg-white'
                }`}
              >
                <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {uniqueGallery.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`w-20 aspect-square rounded-[2px] overflow-hidden border-2 transition-all ${
                    activeImage === imgUrl ? 'border-[#B96A3C]' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail view" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Selectors */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-[#8B8B8B] uppercase tracking-wider mb-2">
                <span>{product.categoryLabel}</span>
                <div className="flex items-center gap-1 text-[#C37A4A]">
                  <Star size={14} fill="currentColor" />
                  <span className="font-medium text-[#2B2B2B]">{product.rating}</span>
                  <span>({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] font-normal mb-3">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl font-serif text-[#2B2B2B]">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#8B8B8B] line-through font-light">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-[10px] text-[#69705A] uppercase tracking-widest bg-[#F4EEE6] px-2 py-0.5 rounded-[2px] font-medium">
                  Tax included
                </span>
              </div>

              {/* Material Selector */}
              {product.availableMaterials && product.availableMaterials.length > 0 && (
                <div className="mb-5 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#666666] font-medium block">
                    Material: <strong className="text-[#2B2B2B]">{selectedMaterial}</strong>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.availableMaterials.map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(mat)}
                        className={`text-xs px-3.5 py-2 rounded-[2px] border transition-all ${
                          selectedMaterial === mat
                            ? 'border-[#B96A3C] bg-[#EFE7DC] text-[#2B2B2B] font-medium'
                            : 'border-[#ECE8E2] bg-white text-[#666666] hover:border-[#BBA68B]'
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
                <div className="mb-5 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#666666] font-medium block">
                    Dimensions / Size: <strong className="text-[#2B2B2B]">{selectedSize}</strong>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`text-xs px-4 py-2 rounded-[2px] border transition-all ${
                          selectedSize === sz
                            ? 'border-[#69705A] bg-[#69705A] text-white font-medium'
                            : 'border-[#ECE8E2] bg-white text-[#2B2B2B] hover:border-[#69705A]'
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
                <div className="mb-6 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#666666] font-medium block">
                    Colorway: <strong className="text-[#2B2B2B]">{selectedColor.name}</strong>
                  </span>
                  <div className="flex gap-3">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                          selectedColor.name === c.name ? 'border-[#B96A3C] scale-110' : 'border-transparent'
                        }`}
                        title={c.name}
                      >
                        <span
                          className="w-full h-full rounded-full block border border-[#BBA68B]"
                          style={{ backgroundColor: c.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart CTA */}
              <button
                onClick={() => {
                  onAddToCart(product, selectedSize, selectedColor, selectedMaterial);
                  onClose();
                }}
                className="w-full bg-[#B96A3C] hover:bg-[#A75D36] text-white py-4 text-xs uppercase tracking-[0.2em] font-medium rounded-[4px] flex items-center justify-center gap-3 transition-colors shadow-xs mb-6"
              >
                <ShoppingBag size={16} />
                <span>Add to Sanctuary Cart — ${product.price.toLocaleString()}</span>
              </button>
            </div>

            {/* Accordion Info Sections */}
            <div className="border-t border-[#ECE8E2] space-y-3 pt-4">
              
              {/* Description */}
              <div className="border-b border-[#ECE8E2] pb-3">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'desc' ? ('' as any) : 'desc')}
                  className="w-full flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-[#2B2B2B]"
                >
                  <span>Product Narrative &amp; Craft</span>
                  {openAccordion === 'desc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'desc' && (
                  <p className="text-xs text-[#666666] font-light leading-relaxed pt-3 animate-fade-up">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Care Instructions */}
              <div className="border-b border-[#ECE8E2] pb-3">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? ('' as any) : 'care')}
                  className="w-full flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-[#2B2B2B]"
                >
                  <span>Care &amp; Maintenance</span>
                  {openAccordion === 'care' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'care' && (
                  <ul className="text-xs text-[#666666] font-light space-y-1.5 pt-3 list-disc list-inside animate-fade-up">
                    {product.careInstructions.map((ci, idx) => (
                      <li key={idx}>{ci}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="pb-2">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? ('' as any) : 'shipping')}
                  className="w-full flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-[#2B2B2B]"
                >
                  <span>White-Glove Shipping &amp; 30-Day Returns</span>
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="text-xs text-[#666666] font-light leading-relaxed pt-3 space-y-2 animate-fade-up">
                    <p className="flex items-center gap-2 text-[#505744]">
                      <ShieldCheck size={14} />
                      <span>{product.shippingInfo}</span>
                    </p>
                    <p className="flex items-center gap-2 text-[#8B8B8B]">
                      <RefreshCw size={14} />
                      <span>Complimentary 30-day trial in your home. Full refund guaranteed.</span>
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
