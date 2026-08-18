import React, { useState } from 'react';
import type { InstagramPost, Product, StoreMode } from '../types';
import {
  ArrowLeft,
  Share2,
  Heart,
  Clock,
  MapPin,
  Sparkles,
  Volume2,
  Check,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SanctuaryStoryPageProps {
  post: InstagramPost;
  allPosts: InstagramPost[];
  storeMode?: StoreMode;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectStory: (story: InstagramPost) => void;
  onAddToCart: (product: Product, size: string, color: { name: string; hex: string }, customSpec?: string) => void;
  onOpen3DStudio?: (product: Product) => void;
}

export const SanctuaryStoryPage: React.FC<SanctuaryStoryPageProps> = ({
  post,
  allPosts,
  onBack,
  onSelectProduct,
  onSelectStory,
  onAddToCart,
}) => {
  const { i18n } = useTranslation();
  const isDe = i18n.language?.startsWith('de');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [copied, setCopied] = useState(false);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const title = isDe ? post.title : (post.titleEn || post.title);
  const roomName = isDe ? post.roomName : (post.roomNameEn || post.roomName);
  const story = isDe ? post.storyDe : (post.storyEn || post.storyDe);
  const quote = isDe ? post.quoteDe : (post.quoteEn || post.quoteDe);
  const acousticNotes = isDe ? post.acousticNotesDe : (post.acousticNotesEn || post.acousticNotesDe);
  const stylingTip = isDe ? post.stylingTipDe : (post.stylingTipEn || post.stylingTipDe);

  const otherPosts = allPosts.filter((p) => p.id !== post.id);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: shareUrl,
        })
        .catch(() => {
          navigator.clipboard?.writeText(shareUrl);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        });
    } else {
      navigator.clipboard?.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleAddProduct = (prod: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const size = prod.sizes?.[0] || '160 x 230 cm';
    const color = prod.colors?.[0] || { name: 'Natural', hex: '#FAF8F5' };
    onAddToCart(prod, size, color);
    setAddedItem(prod.id);
    setTimeout(() => setAddedItem(null), 2500);
  };

  return (
    <article className="min-h-screen bg-[#FAF8F5] text-[#2B2B2B] pt-24 pb-28">
      {/* Top Breadcrumbs & Action Bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#ECE8E2]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#69705A] hover:text-[#2B2B2B] transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>{isDe ? 'Zurück zu allen Wohnwelten' : 'Back to Sanctuaries'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D9C5A7] bg-white text-xs font-medium text-[#2B2B2B] hover:border-[#B96A3C] transition-all cursor-pointer shadow-xs"
            >
              <Heart
                size={14}
                className={isLiked ? 'fill-[#E79685] text-[#E79685]' : 'text-[#666666]'}
              />
              <span>{likeCount.toLocaleString()}</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D9C5A7] bg-white text-xs font-medium text-[#2B2B2B] hover:border-[#B96A3C] transition-all cursor-pointer shadow-xs"
            >
              {copied ? <Check size={14} className="text-[#69705A]" /> : <Share2 size={14} className="text-[#666666]" />}
              <span>{copied ? (isDe ? 'Kopiert!' : 'Copied!') : isDe ? 'Teilen' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Magazine Hero Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Hero Left: Editorial Header & Curator Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE7DC] border border-[#D9C5A7]/70 text-[#505744] text-xs uppercase tracking-[0.25em] font-semibold">
              <Sparkles size={13} className="text-[#B96A3C]" />
              <span>{roomName}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#2B2B2B] leading-[1.15] tracking-tight">
              {title}
            </h1>

            {/* Curator & Metadata Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#666666] font-medium pt-2 pb-2 border-y border-[#ECE8E2]">
              {post.curator && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[#8B8B8B] uppercase tracking-wider">{isDe ? 'Kuratiert von:' : 'Curated by:'}</span>
                  <span className="text-[#2B2B2B] font-semibold">{post.curator}</span>
                </div>
              )}
              {post.location && (
                <div className="flex items-center gap-1.5 text-[#505744]">
                  <MapPin size={13} />
                  <span>{post.location}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-[#8B8B8B]">
                <Clock size={13} />
                <span>{post.readTime || '3 min'} {isDe ? 'Lesezeit' : 'read'}</span>
              </div>
            </div>

            {/* Atmospheric Highlight Quote */}
            {quote && (
              <blockquote className="border-l-2 border-[#B96A3C] pl-5 italic font-serif text-lg md:text-xl text-[#2B2B2B]/90 leading-relaxed bg-white/60 p-4 rounded-r-xl">
                {quote}
              </blockquote>
            )}
          </div>

          {/* Hero Right: High-Resolution Styled Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-[#ECE8E2] bg-[#EFE7DC]">
              <img
                src={post.image}
                alt={title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[11px] font-medium tracking-wider">
                📍 {post.location || 'Levina Living Journal'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Editorial Story Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Story Text */}
            <div className="space-y-6 text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2B2B2B] font-normal">
                {isDe ? 'Das Raumkonzept & die Philosophie' : 'The Space Concept & Living Narrative'}
              </h2>
              <p>{story}</p>
            </div>

            {/* Acoustic & Sensory Performance Analysis Card */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#ECE8E2] shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE7DC] flex items-center justify-center text-[#505744]">
                  <Volume2 size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#2B2B2B]">
                    {isDe ? 'Akustik & Raumklang-Optimierung' : 'Acoustic & Tactile Serenity'}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-[#69705A] font-medium">
                    {isDe ? 'Messbare Schalldämmung' : 'Certified Noise Dampening'}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#666666] font-light leading-relaxed">
                {acousticNotes}
              </p>

              {/* 3 Core Sensory Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#ECE8E2] text-center">
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#ECE8E2]">
                  <span className="block font-serif text-xl sm:text-2xl text-[#2B2B2B] font-normal">
                    -45%
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8B8B8B]">
                    {isDe ? 'Trittschall' : 'Step Sound'}
                  </span>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#ECE8E2]">
                  <span className="block font-serif text-xl sm:text-2xl text-[#2B2B2B] font-normal">
                    100%
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8B8B8B]">
                    {isDe ? 'Bio-Natur' : 'Organic'}
                  </span>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#ECE8E2]">
                  <span className="block font-serif text-xl sm:text-2xl text-[#2B2B2B] font-normal">
                    0.0
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8B8B8B]">
                    {isDe ? 'Schadstoffe' : 'Non-Toxic'}
                  </span>
                </div>
              </div>
            </div>

            {/* Interior Styling Pro Tips */}
            <div className="bg-[#FAF8F5] rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#D9C5A7]/70 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B96A3C] font-semibold">
                <Sparkles size={14} />
                <span>{isDe ? 'Styling-Tipp der Kuratorin' : 'Curator Styling Tip'}</span>
              </div>
              <p className="text-sm md:text-base text-[#2B2B2B] font-light leading-relaxed">
                {stylingTip}
              </p>
            </div>
          </div>

          {/* Sidebar: Color Palette & Tagged Products (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* 1. Harmonische Farbpalette */}
            {post.palette && post.palette.length > 0 && (
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#ECE8E2] shadow-xs space-y-4">
                <h3 className="font-serif text-xl font-normal text-[#2B2B2B]">
                  {isDe ? 'Farbpalette des Raumes' : 'Room Color Harmony'}
                </h3>
                <p className="text-xs text-[#666666] font-light">
                  {isDe
                    ? 'Kombinierte Farbtöne für ein beruhigendes, natürliches Raumklima:'
                    : 'Curated tones for a grounding, serene aesthetic:'}
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  {post.palette.map((c, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-3 bg-[#FAF8F5] rounded-xl border border-[#ECE8E2]">
                      <div
                        className="w-10 h-10 rounded-full shadow-inner border border-black/10"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-[11px] font-medium text-[#2B2B2B] text-center line-clamp-1">
                        {c.name}
                      </span>
                      <span className="text-[9px] text-[#8B8B8B] font-mono uppercase">
                        {c.hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Shop the Sanctuary Look */}
            {post.taggedProducts && post.taggedProducts.length > 0 && (
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#ECE8E2] shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-normal text-[#2B2B2B]">
                    {isDe ? 'Shop The Look' : 'Shop The Look'}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EFE7DC] text-[#505744] text-[11px] font-medium">
                    {post.taggedProducts.length} {isDe ? 'Artikel' : 'Products'}
                  </span>
                </div>

                <div className="space-y-4">
                  {post.taggedProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => onSelectProduct(prod)}
                      className="group p-4 bg-[#FAF8F5] hover:bg-[#EFE7DC]/40 rounded-2xl border border-[#ECE8E2] hover:border-[#D9C5A7] transition-all cursor-pointer flex gap-4 items-center"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0 border border-[#ECE8E2]">
                        <img
                          src={prod.primaryImage}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#69705A] font-semibold block truncate">
                          {prod.categoryLabel || 'Handwebung'}
                        </span>
                        <h4 className="font-serif text-base text-[#2B2B2B] group-hover:text-[#B96A3C] transition-colors truncate">
                          {prod.name}
                        </h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm font-semibold text-[#2B2B2B]">
                            €{prod.price.toLocaleString()}
                          </span>
                          <button
                            onClick={(e) => handleAddProduct(prod, e)}
                            className="px-3 py-1 bg-[#2B2B2B] hover:bg-[#B96A3C] text-white text-[11px] font-medium uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                          >
                            {addedItem === prod.id ? (isDe ? 'Im Korb ✓' : 'Added ✓') : (isDe ? '+ In den Warenkorb' : '+ Add to Bag')}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Explore More Sanctuary Stories Carousel */}
      {otherPosts.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 border-t border-[#ECE8E2]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#69705A] font-medium block mb-1">
                {isDe ? 'Weitere Wohnwelten' : 'Continue Reading'}
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-normal text-[#2B2B2B]">
                {isDe ? 'Entdecke mehr Living Sanctuary Stories' : 'Explore More Sanctuary Stories'}
              </h3>
            </div>
            <button
              onClick={onBack}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B96A3C] hover:underline cursor-pointer flex items-center gap-1.5"
            >
              <span>{isDe ? 'Alle Stories ansehen' : 'View All Stories'}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.slice(0, 3).map((p) => {
              const pTitle = isDe ? p.title : (p.titleEn || p.title);
              const pRoom = isDe ? p.roomName : (p.roomNameEn || p.roomName);
              return (
                <div
                  key={p.id}
                  onClick={() => onSelectStory(p)}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#ECE8E2] hover:border-[#D9C5A7] shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE7DC]">
                    <img
                      src={p.image}
                      alt={pTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-semibold text-[#2B2B2B]">
                      {pRoom}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {p.curator && (
                        <span className="text-[10px] uppercase tracking-wider text-[#69705A] font-medium block mb-1">
                          {p.curator} • {p.location}
                        </span>
                      )}
                      <h4 className="font-serif text-lg font-normal text-[#2B2B2B] group-hover:text-[#B96A3C] transition-colors line-clamp-2">
                        {pTitle}
                      </h4>
                    </div>
                    <div className="pt-4 mt-4 border-t border-[#FAF8F5] flex items-center justify-between text-xs font-medium text-[#B96A3C]">
                      <span>{isDe ? 'Story lesen' : 'Read Story'}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
};
