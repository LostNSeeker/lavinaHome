import React, { useState } from 'react';
import type { InstagramPost, Product, StoreMode } from '../types';
import {
  BookOpen,
  Sparkles,
  Share2,
  Heart,
  X,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Volume2,
  MapPin,
  Clock,
  User,
  Check,
  Layers,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface InstagramGalleryProps {
  posts: InstagramPost[];
  storeMode?: StoreMode;
  onSelectProduct: (product: Product) => void;
  onOpenStoryPage?: (post: InstagramPost) => void;
}

export const InstagramGallery: React.FC<InstagramGalleryProps> = ({
  posts,
  storeMode = 'general',
  onSelectProduct,
  onOpenStoryPage,
}) => {
  const { t, i18n } = useTranslation();
  const isDe = i18n.language?.startsWith('de');
  const isKids = storeMode === 'kids';

  const [activePost, setActivePost] = useState<InstagramPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});
  const [copied, setCopied] = useState(false);

  if (!posts || posts.length === 0) return null;

  const handleOpenPost = (post: InstagramPost) => {
    if (onOpenStoryPage) {
      onOpenStoryPage(post);
    } else {
      setActivePost(post);
    }
  };

  const handleLike = (postId: string, initialLikes: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const isLiked = likedPosts[postId];
    setLikedPosts((prev) => ({ ...prev, [postId]: !isLiked }));
    setLikeCounts((prev) => ({
      ...prev,
      [postId]: (prev[postId] ?? initialLikes) + (isLiked ? -1 : 1),
    }));
  };

  const handleShare = (post: InstagramPost, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}#/sanctuary/${post.id}`;
    if (navigator.share) {
      navigator.share({
        title: isDe ? post.title : (post.titleEn || post.title),
        url: shareUrl,
      }).catch(() => {
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

  return (
    <section id="sanctuary-gallery" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#69705A] font-medium bg-[#69705A]/10 px-4 py-1.5 rounded-full">
          <Sparkles size={14} className="text-[#69705A]" />
          <span>{isKids ? t('instagram.badge', '@LEVINA.KIDS') : t('generalInstagram.badge', 'LIVING SANCTUARY STORIES')}</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2B2B2B]">
          {isKids ? t('instagram.title', 'Echte Kinderzimmer & Spielgeschichten') : t('generalInstagram.title', 'Inspiration aus echten Wohnoasen')}
        </h2>
        <p className="text-xs text-[#666666] tracking-widest uppercase font-light max-w-lg mx-auto leading-relaxed">
          {isKids
            ? t('instagram.subtitle', 'Erfahre, wie Familien gemütliche und schadstofffreie Spielwelten gestalten.')
            : t('generalInstagram.subtitle', 'Erfahre, wie achtsames Wohndesign und Naturteppiche echte Wohnräume in Oasen der Ruhe verwandeln.')}
        </p>
      </div>

      {/* Editorial Sanctuary Cards Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => {
            const currentLikes = likeCounts[post.id] ?? post.likes;
            const isLiked = likedPosts[post.id];
            const title = isDe ? post.title : (post.titleEn || post.title);
            const roomName = isDe ? post.roomName : (post.roomNameEn || post.roomName);

            return (
              <div
                key={post.id}
                onClick={() => handleOpenPost(post)}
                className="group relative aspect-[4/5] overflow-hidden rounded-[2px] cursor-pointer bg-[#EFE7DC] shadow-xs border border-[#ECE8E2] transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={post.image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:from-black/90 transition-all duration-300 flex flex-col justify-between p-5 text-white">
                  {/* Top Bar: Room Name & Read Time Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-medium border border-white/20">
                      {roomName}
                    </span>
                    <div className="flex items-center gap-1.5 text-[10px] text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                      <Clock size={11} />
                      <span>{post.readTime || '3 min'}</span>
                    </div>
                  </div>

                  {/* Bottom Bar: Headline & CTA */}
                  <div className="space-y-3">
                    {post.curator && (
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#E5B769] block font-medium">
                        {post.curator} • {post.location}
                      </span>
                    )}
                    <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug line-clamp-2">
                      {title}
                    </h3>

                    <div className="pt-1 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#FDFBF7] font-medium group-hover:text-[#E5B769] transition-colors">
                        <BookOpen size={14} />
                        <span>{t('generalInstagram.readStory', 'Story lesen')}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </span>

                      <button
                        onClick={(e) => handleLike(post.id, post.likes, e)}
                        className="inline-flex items-center gap-1 text-[11px] text-white/80 hover:text-white transition-colors p-1"
                        aria-label="Like post"
                      >
                        <Heart
                          size={15}
                          className={isLiked ? 'fill-[#E79685] text-[#E79685]' : 'text-white/80'}
                        />
                        <span>{currentLikes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Luxury Editorial Sanctuary Journal Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 bg-[#2B2B2B]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-up"
          onClick={() => setActivePost(null)}
        >
          <div
            className="bg-[#FAF8F5] max-w-4xl w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ECE8E2] shadow-2xl relative my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Control Bar */}
            <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-b border-[#ECE8E2] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#69705A] font-semibold">
                <BookOpen size={16} />
                <span>{t('generalInstagram.journalHeader', 'Sanctuary Home Tour & Wohndesign-Journal')}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleShare(activePost, e)}
                  className="p-2.5 rounded-full hover:bg-[#EFE7DC] text-[#2B2B2B] transition-colors cursor-pointer flex items-center gap-1 text-xs"
                  title="Share story"
                >
                  {copied ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
                  <span className="hidden sm:inline">{copied ? t('generalInstagram.storyCopied', 'Kopiert!') : t('generalInstagram.shareStory', 'Teilen')}</span>
                </button>

                <button
                  onClick={() => setActivePost(null)}
                  className="p-2.5 rounded-full hover:bg-[#EFE7DC] text-[#2B2B2B] transition-colors cursor-pointer"
                  title="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Article Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
              {/* Article Hero Image with Meta Info */}
              <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full overflow-hidden rounded-2xl bg-[#EFE7DC] shadow-sm">
                <img
                  src={activePost.image}
                  alt={isDe ? activePost.title : (activePost.titleEn || activePost.title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Meta on Hero */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {activePost.location && (
                      <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        <MapPin size={12} className="text-[#E5B769]" />
                        {activePost.location}
                      </span>
                    )}
                    {activePost.curator && (
                      <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        <User size={12} className="text-[#8EBBB0]" />
                        {activePost.curator}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      <Clock size={12} />
                      {activePost.readTime || '3 min read'}
                    </span>
                  </div>
                  <h1 className="font-serif text-xl sm:text-3xl font-normal leading-tight text-white">
                    {isDe ? activePost.title : (activePost.titleEn || activePost.title)}
                  </h1>
                </div>
              </div>

              {/* Editorial Quote Highlight */}
              {(activePost.quoteDe || activePost.quoteEn) && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#B96A3C] border border-[#ECE8E2] shadow-2xs">
                  <p className="font-serif text-lg sm:text-2xl text-[#2B2B2B] italic font-normal leading-relaxed">
                    {isDe ? activePost.quoteDe : (activePost.quoteEn || activePost.quoteDe)}
                  </p>
                </div>
              )}

              {/* Story Paragraphs */}
              <div className="space-y-4 text-[#4A4744] text-sm sm:text-base leading-relaxed font-light">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#69705A] font-semibold">
                  <Sparkles size={15} />
                  <span>{t('generalInstagram.spaceStory', 'Die Raumgeschichte & Raumvision')}</span>
                </div>
                <p>
                  {isDe
                    ? (activePost.storyDe || activePost.title)
                    : (activePost.storyEn || activePost.storyDe || activePost.titleEn || activePost.title)}
                </p>
              </div>

              {/* Tactile & Acoustic Architecture Breakdown */}
              {(activePost.acousticNotesDe || activePost.acousticNotesEn) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-[#ECE8E2] space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-[#69705A]/10 flex items-center justify-center text-[#69705A]">
                      <Volume2 size={18} />
                    </div>
                    <h3 className="font-serif text-base text-[#2B2B2B] font-medium">
                      {t('generalInstagram.materialNotes', 'Fühlbare Haptik & Akustik')}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {isDe ? activePost.acousticNotesDe : (activePost.acousticNotesEn || activePost.acousticNotesDe)}
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-[#ECE8E2] space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-[#B96A3C]/10 flex items-center justify-center text-[#B96A3C]">
                      <Leaf size={18} />
                    </div>
                    <h3 className="font-serif text-base text-[#2B2B2B] font-medium">
                      {t('generalInstagram.proTips', 'Styling-Tipps der Experten')}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {isDe ? activePost.stylingTipDe : (activePost.stylingTipEn || activePost.stylingTipDe)}
                    </p>
                  </div>
                </div>
              )}

              {/* Color Harmony Palette Swatches */}
              {activePost.palette && activePost.palette.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-[#ECE8E2] space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#69705A] font-semibold">
                    <Layers size={15} />
                    <span>{t('generalInstagram.colorPalette', 'Farbharmonie & Farbpalette')}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {activePost.palette.map((color) => (
                      <div
                        key={color.name}
                        className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#ECE8E2] text-xs text-[#2B2B2B]"
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-black/15 shadow-2xs"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="font-medium">{color.name}</span>
                        <span className="text-[10px] text-[#8B8B8B] uppercase">{color.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Featured Artisan Piece Spotlight (Editorial Integration) */}
              {activePost.taggedProducts && activePost.taggedProducts.length > 0 && (
                <div className="border-t border-[#ECE8E2] pt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#69705A] font-semibold block">
                        {t('generalInstagram.featuredArtisanPiece', 'Ausgewähltes Meisterstück in diesem Zuhause')}
                      </span>
                      <h3 className="font-serif text-2xl text-[#2B2B2B] font-normal">
                        {isDe ? 'In diesem Wohnraum inszeniert' : 'Styled in this Sanctuary'}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activePost.taggedProducts.filter(Boolean).map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          onSelectProduct(prod);
                          setActivePost(null);
                        }}
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#F4EEE6] border border-[#ECE8E2] cursor-pointer transition-all shadow-2xs hover:shadow-md"
                      >
                        <div className="w-20 h-20 shrink-0 overflow-hidden rounded-xl bg-[#EFE7DC]">
                          <img
                            src={prod.primaryImage}
                            alt={prod.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 text-[10px] text-[#69705A] uppercase tracking-wider font-semibold mb-0.5">
                            <ShieldCheck size={12} />
                            <span>100% Bio-Schurwolle</span>
                          </div>
                          <h4 className="font-serif text-base text-[#2B2B2B] font-normal truncate group-hover:text-[#B96A3C] transition-colors">
                            {prod.name}
                          </h4>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-sm font-semibold text-[#B96A3C]">
                              €{prod.price.toLocaleString()}
                            </span>
                            <span className="text-xs text-[#69705A] font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                              <span>{t('generalInstagram.viewProduct', 'Details ansehen')}</span>
                              <ArrowRight size={13} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Footer */}
            <div className="p-6 bg-[#F4EEE6] border-t border-[#ECE8E2] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#666666]">
                <ShieldCheck size={16} className="text-[#69705A]" />
                <span>OEKO-TEX® & GOTS-zertifizierte Manufakturqualität</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActivePost(null)}
                  className="w-full sm:w-auto px-8 py-3 bg-[#2B2B2B] hover:bg-[#404040] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-colors cursor-pointer shadow-sm"
                >
                  {t('generalInstagram.close', 'Journal schließen')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
