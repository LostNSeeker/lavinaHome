import React, { useState } from 'react';
import type { InstagramPost, Product } from '../types';
import { Camera, ShoppingBag, X } from 'lucide-react';

interface InstagramGalleryProps {
  posts: InstagramPost[];
  onSelectProduct: (product: Product) => void;
}

export const InstagramGallery: React.FC<InstagramGalleryProps> = ({ posts, onSelectProduct }) => {
  const [activePost, setActivePost] = useState<InstagramPost | null>(null);

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-24 bg-[#F4EEE6] border-b border-[#ECE8E2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium">
          <Camera size={14} />
          <span>@LEVINA.HOME</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2B2B2B]">
          Inspiration from Real Sanctuaries
        </h2>
        <p className="text-xs text-[#666666] tracking-widest uppercase font-light max-w-md mx-auto">
          Tag #LevinaHome on Instagram to be featured in our boutique community gallery.
        </p>
      </div>

      {/* Pinterest-style Gallery Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2px] cursor-pointer bg-[#EFE7DC] shadow-xs"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-[#2B2B2B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                    <ShoppingBag size={12} />
                    <span>Shop Room</span>
                  </span>
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#D9C5A7] block mb-1 font-medium">
                    {post.roomName}
                  </span>
                  <p className="font-serif text-lg font-normal line-clamp-2">
                    {post.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop This Room Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-[#2B2B2B]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-up">
          <div className="bg-[#FAF8F5] max-w-3xl w-full rounded-[2px] overflow-hidden border border-[#ECE8E2] shadow-2xl flex flex-col md:flex-row relative">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-[#2B2B2B] rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Left Image */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Right Tagged Products */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#69705A] font-semibold block mb-1">
                  {activePost.roomName}
                </span>
                <h3 className="font-serif text-2xl text-[#2B2B2B] font-normal mb-3">
                  Shop This Room Look
                </h3>
                <p className="text-xs text-[#666666] font-light leading-relaxed mb-6">
                  {activePost.title}
                </p>

                <div className="space-y-4 border-t border-[#ECE8E2] pt-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#8B8B8B] font-medium block">
                    Featured Products ({activePost.taggedProducts.filter(Boolean).length}):
                  </span>

                  {activePost.taggedProducts.filter(Boolean).map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onSelectProduct(prod);
                        setActivePost(null);
                      }}
                      className="flex items-center gap-4 p-2 rounded-[2px] bg-[#F4EEE6] hover:bg-[#EFE7DC] cursor-pointer transition-colors"
                    >
                      <img
                        src={prod.primaryImage}
                        alt={prod.name}
                        className="w-12 h-12 object-cover rounded-[2px]"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm text-[#2B2B2B] font-normal truncate">
                          {prod.name}
                        </h4>
                        <span className="text-xs font-medium text-[#B96A3C]">
                          €{prod.price.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs text-[#69705A] font-medium uppercase tracking-wider pr-2">
                        View &rarr;
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActivePost(null)}
                className="w-full py-3 bg-[#2B2B2B] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-[2px] hover:bg-[#505744] transition-colors cursor-pointer"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
