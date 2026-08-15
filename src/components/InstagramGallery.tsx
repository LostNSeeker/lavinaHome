import React, { useState } from 'react';
import type { InstagramPost, Product } from '../types';
import { Camera, ShoppingBag, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface InstagramGalleryProps {
  posts: InstagramPost[];
  onSelectProduct: (product: Product) => void;
}

export const InstagramGallery: React.FC<InstagramGalleryProps> = ({ posts, onSelectProduct }) => {
  const { t } = useTranslation();
  const [activePost, setActivePost] = useState<InstagramPost | null>(null);

  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-[#EDE6DC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 text-center space-y-2">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E79685] font-semibold bg-[#E79685]/15 px-3.5 py-1 rounded-full">
          <Camera size={14} />
          <span>{t('instagram.badge')}</span>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#2D2B2A]">
          {t('instagram.title')}
        </h2>
        <p className="text-xs text-[#6B6661] tracking-wide max-w-md mx-auto font-normal">
          {t('instagram.subtitle')}
        </p>
      </div>

      {/* Pinterest-style Gallery Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer bg-[#F7F3EB] shadow-pillowy border border-[#EDE6DC]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-[#2D2B2A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <span className="bg-white/30 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-bold shadow-xs">
                    <ShoppingBag size={12} />
                    <span>{t('instagram.shopLook')}</span>
                  </span>
                </div>

                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#E5B769] block mb-1 font-bold">
                    {post.roomName}
                  </span>
                  <p className="font-heading text-base font-medium line-clamp-2">
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
        <div className="fixed inset-0 z-50 bg-[#2D2B2A]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-up">
          <div className="bg-[#FDFBF7] max-w-3xl w-full rounded-3xl overflow-hidden border border-[#EDE6DC] shadow-2xl flex flex-col md:flex-row relative">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 hover:bg-white text-[#2D2B2A] rounded-full transition-all shadow-xs cursor-pointer"
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
                <span className="text-[10px] tracking-wider uppercase text-[#8EBBB0] font-bold block mb-1">
                  {activePost.roomName}
                </span>
                <h3 className="font-heading text-2xl text-[#2D2B2A] font-medium mb-2">
                  {t('instagram.shopThisLook')}
                </h3>
                <p className="text-xs text-[#6B6661] font-normal leading-relaxed mb-6">
                  {activePost.title}
                </p>

                <div className="space-y-3 border-t border-[#EDE6DC] pt-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#9E9891] font-semibold block">
                    {t('instagram.featuredItems', { count: activePost.taggedProducts.length })}
                  </span>

                  {activePost.taggedProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onSelectProduct(prod);
                        setActivePost(null);
                      }}
                      className="flex items-center gap-3.5 p-2.5 rounded-2xl bg-white hover:bg-[#8EBBB0]/10 border border-[#EDE6DC] cursor-pointer transition-all shadow-xs"
                    >
                      <img
                        src={prod.primaryImage}
                        alt={prod.name}
                        className="w-12 h-12 object-cover rounded-xl"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading text-sm text-[#2D2B2A] font-medium truncate">
                          {prod.name}
                        </h4>
                        <span className="text-[11px] font-bold text-[#E79685]">
                          €{prod.price.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs text-[#8EBBB0] font-bold uppercase tracking-wider pr-2">
                        {t('instagram.view')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActivePost(null)}
                className="w-full py-3 bg-[#2D2B2A] text-white text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#8EBBB0] transition-colors cursor-pointer"
              >
                {t('instagram.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


