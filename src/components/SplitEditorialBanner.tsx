import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, Compass, Play, Pause, ChevronRight, ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { StoreMode } from '../types';

interface SplitEditorialBannerProps {
  storeMode?: StoreMode;
  onExploreClick: () => void;
}

interface ManufakturStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  badge: string;
  statNumber: string;
  statLabel: string;
}

const MANUFAKTUR_STEPS: ManufakturStep[] = [
  {
    id: 'step-manufacturing',
    stepNumber: '01',
    title: 'Traditionelle Webkunst & Manufaktur',
    subtitle: 'Meisterhafte Handarbeit am Webstuhl',
    description: 'Vom ersten Schurwollfaden bis zum vollendeten Meisterstück entsteht jeder Teppich mit meisterhafter Präzision von Hand. Jahrzehntelange Erfahrung und echtes Handwerk prägen jeden Arbeitsgang.',
    videoSrc: '/manufacturing.mp4',
    badge: '01. Handwebkunst',
    statNumber: '100%',
    statLabel: 'Traditionelle Handarbeit',
  },
  {
    id: 'step-luxury',
    stepNumber: '02',
    title: 'Edle Schurwolle & Dichte Haptik',
    subtitle: '100% Reine Bio-Naturwolle',
    description: 'Ausgewählte, ungebleichte Schurwolle verleiht unseren Teppichen ihre außergewöhnliche Dichte, natürliche Elastizität und ein unvergleichlich weiches Trittgefühl unter den Füßen.',
    videoSrc: '/LuxuryCarpet.mp4',
    badge: '02. Reine Naturwolle',
    statNumber: 'GOTS',
    statLabel: 'Bio-Qualität & Naturfasern',
  },
  {
    id: 'step-carpet',
    stepNumber: '03',
    title: 'Präzise Veredelung & Kettelung',
    subtitle: 'Perfektion bis in die kleinste Faser',
    description: 'Jede Kante wird sorgsam von Hand eingekettelt und qualitätsgeprüft. Dadurch entstehen langlebige, formstabile Luxusteppiche, die Generationen überdauern.',
    videoSrc: '/Carpet.mp4',
    badge: '03. Handveredelung',
    statNumber: 'Premium',
    statLabel: 'Robuste Kantenverstärkung',
  },
  {
    id: 'step-family',
    stepNumber: '04',
    title: 'Lebendige Geborgenheit & Wohnkomfort',
    subtitle: 'Schadstofffreie Wohlfühloase für die Familie',
    description: 'Reine Naturmaterialien schenken Ihrem Zuhause Wärme, beruhigende Akustik und ein gesundes Raumklima – ideal für gemütliche Stunden mit Ihren Liebsten.',
    videoSrc: '/featuring_family.mp4',
    badge: '04. Wohngefühl',
    statNumber: '0%',
    statLabel: 'Frei von Chemiefarben',
  },
];

export const SplitEditorialBanner: React.FC<SplitEditorialBannerProps> = ({
  storeMode = 'general',
  onExploreClick,
}) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Synchronize playback of the active video
  const updateVideoPlayback = useCallback((stepIndex: number, shouldPlay: boolean) => {
    videoRefs.current.forEach((videoEl, index) => {
      if (!videoEl) return;
      if (index === stepIndex && shouldPlay) {
        videoEl.play().catch(() => {
          // Autoplay policy fallback
        });
      } else {
        videoEl.pause();
      }
    });
  }, []);

  // IntersectionObserver to observe if the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        if (!entry.isIntersecting) {
          updateVideoPlayback(activeStep, false);
        } else if (isPlaying) {
          updateVideoPlayback(activeStep, true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeStep, isPlaying, updateVideoPlayback]);

  // Scroll listener to update active step when scrolling through the cards
  useEffect(() => {
    if (storeMode !== 'general') return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;

      const triggerLine = window.innerHeight * 0.45;
      let currentBest = activeStep;
      let minDistance = Infinity;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top - triggerLine);
        if (dist < minDistance && r.top < window.innerHeight * 0.75) {
          minDistance = dist;
          currentBest = index;
        }
      });

      if (currentBest !== activeStep) {
        setActiveStep(currentBest);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep, storeMode]);

  // Whenever activeStep changes or section enters viewport, update playing video
  useEffect(() => {
    if (storeMode === 'general' && isInViewport) {
      updateVideoPlayback(activeStep, isPlaying);
    }
  }, [activeStep, isInViewport, isPlaying, storeMode, updateVideoPlayback]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (stepRefs.current[index]) {
      stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleTogglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    updateVideoPlayback(activeStep, nextState);
  };

  const handleNextStep = () => {
    const nextIndex = (activeStep + 1) % MANUFAKTUR_STEPS.length;
    handleStepClick(nextIndex);
  };

  const handlePrevStep = () => {
    const prevIndex = (activeStep - 1 + MANUFAKTUR_STEPS.length) % MANUFAKTUR_STEPS.length;
    handleStepClick(prevIndex);
  };

  if (storeMode === 'general') {
    return (
      <section
        ref={sectionRef}
        id="manufaktur-story"
        className="py-24 bg-[#FAF8F5] overflow-hidden border-b border-[#ECE8E2] relative"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#69705A] font-semibold bg-[#69705A]/15 px-3 py-1 rounded-full w-fit mb-3">
              <Sparkles size={14} className="text-[#69705A]" />
              <span>Handgewebte Manufaktur</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2B2B2B] leading-[1.12] mb-4">
              Meisterhafte Webkunst &amp; <span className="italic text-[#B96A3C]">Wohnkomfort</span>
            </h2>

            <p className="text-sm md:text-base text-[#666666] font-light leading-relaxed max-w-2xl">
              Erleben Sie die Entstehung unserer handgewebten Luxusteppiche. Scrollen Sie durch die einzelnen Stationen unserer traditionellen Handwerkskunst.
            </p>
          </div>

          {/* Scrollytelling Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
            
            {/* LEFT: Scrollable Story Steps (5 Cols) */}
            <div className="lg:col-span-5 space-y-12 sm:space-y-20 py-4">
              
              {/* Quick Step Bar Navigation */}
              <div className="sticky top-24 z-20 bg-[#FAF8F5]/95 backdrop-blur-md py-3 -mx-2 px-2 border-b border-[#ECE8E2]/80 flex items-center justify-between gap-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#69705A]">
                  Kapitel {activeStep + 1} von {MANUFAKTUR_STEPS.length}
                </span>
                <div className="flex items-center gap-1.5">
                  {MANUFAKTUR_STEPS.map((step, idx) => (
                    <button
                      key={step.id}
                      onClick={() => handleStepClick(idx)}
                      className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                        activeStep === idx ? 'w-8 bg-[#B96A3C]' : 'w-2 bg-[#D9C5A7] hover:bg-[#69705A]'
                      }`}
                      title={`Zu Schritt ${idx + 1}: ${step.title}`}
                      aria-label={`Schritt ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* 4 Interactive Story Cards */}
              {MANUFAKTUR_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.id}
                    ref={(el) => { stepRefs.current[idx] = el; }}
                    onClick={() => handleStepClick(idx)}
                    className={`p-6 sm:p-8 rounded-[4px] border transition-all duration-500 cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#B96A3C]/60 shadow-md translate-x-1 sm:translate-x-2'
                        : 'bg-white/60 border-[#ECE8E2] hover:bg-white hover:border-[#69705A]/40 shadow-2xs opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-serif font-bold tracking-widest ${isActive ? 'text-[#B96A3C]' : 'text-[#8B8B8B]'}`}>
                        PHASE {step.stepNumber}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-[2px] bg-[#FAF8F5] text-[#69705A] font-medium border border-[#ECE8E2]">
                        {step.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] font-normal mb-1">
                      {step.title}
                    </h3>
                    <h4 className="text-xs uppercase tracking-wider text-[#B96A3C] font-semibold mb-3">
                      {step.subtitle}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed mb-5">
                      {step.description}
                    </p>

                    <div className="pt-3 border-t border-[#ECE8E2] flex items-center justify-between text-xs">
                      <div>
                        <span className="font-serif text-lg font-medium text-[#2B2B2B] block leading-none">
                          {step.statNumber}
                        </span>
                        <span className="text-[10px] uppercase text-[#8B8B8B] tracking-wider">
                          {step.statLabel}
                        </span>
                      </div>
                      
                      <div className={`flex items-center gap-1 font-medium transition-colors ${isActive ? 'text-[#B96A3C]' : 'text-[#8B8B8B]'}`}>
                        <span>{isActive ? 'Aktive Ansicht' : 'Video ansehen'}</span>
                        <ChevronRight size={14} className={isActive ? 'translate-x-0.5' : ''} />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Bottom CTA */}
              <div className="pt-4">
                <button
                  onClick={onExploreClick}
                  className="bg-[#2B2B2B] hover:bg-[#69705A] text-white px-8 py-4 text-xs tracking-[0.2em] font-medium uppercase rounded-[4px] shadow-sm hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer group"
                >
                  <Compass size={14} />
                  <span>Teppich-Kollektion entdecken</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* RIGHT: Sticky Video Showcase (7 Cols) */}
            <div className="lg:col-span-7 sticky top-24 z-10">
              <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-[6px] overflow-hidden bg-[#2B2B2B] shadow-lg border border-[#ECE8E2]">
                
                {/* 4 Video Layers stacked with crossfade */}
                {MANUFAKTUR_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;

                  return (
                    <div
                      key={step.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <video
                        ref={(el) => { videoRefs.current[idx] = el; }}
                        src={step.videoSrc}
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        className="w-full h-full object-cover object-center"
                        aria-label={step.title}
                      />
                    </div>
                  );
                })}

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/75 via-transparent to-[#2B2B2B]/20 pointer-events-none z-20" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[11px] uppercase tracking-wider px-3 py-1 rounded-[2px] font-medium border border-white/20 flex items-center gap-1.5 shadow-xs">
                    <Sparkles size={12} className="text-[#D9C5A7]" />
                    <span>{MANUFAKTUR_STEPS[activeStep].badge}</span>
                  </span>
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5">
                  <button
                    onClick={handleTogglePlay}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80 text-white transition-all cursor-pointer border border-white/20 shadow-xs"
                    title={isPlaying ? 'Pause' : 'Abspielen'}
                    aria-label={isPlaying ? 'Pause' : 'Abspielen'}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} className="translate-x-0.5" />}
                  </button>
                </div>

                {/* Bottom Overlay Info & Step Switchers */}
                <div className="absolute bottom-4 left-4 right-4 z-30 flex items-end justify-between gap-4 text-white">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#D9C5A7] font-semibold block mb-0.5">
                      Handgewebte Manufaktur — {MANUFAKTUR_STEPS[activeStep].stepNumber} / 04
                    </span>
                    <h4 className="font-serif text-base sm:text-xl font-normal drop-shadow-sm line-clamp-1">
                      {MANUFAKTUR_STEPS[activeStep].title}
                    </h4>
                  </div>

                  {/* Prev / Next Navigation Arrows */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={handlePrevStep}
                      className="p-2 rounded-[2px] bg-black/60 backdrop-blur-md hover:bg-black/90 text-white transition-all cursor-pointer border border-white/20 shadow-xs"
                      title="Vorheriges Video"
                      aria-label="Vorheriges Video"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="p-2 rounded-[2px] bg-black/60 backdrop-blur-md hover:bg-black/90 text-white transition-all cursor-pointer border border-white/20 shadow-xs"
                      title="Nächstes Video"
                      aria-label="Nächstes Video"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

              </div>

              {/* Video Progress Bar Underneath */}
              <div className="mt-3 bg-white/80 rounded-[4px] border border-[#ECE8E2] p-3 flex items-center justify-between text-xs text-[#666666]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#69705A] animate-pulse" />
                  <span className="font-medium text-[#2B2B2B]">
                    Aktive Manufaktur-Aufnahme: {MANUFAKTUR_STEPS[activeStep].title}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {MANUFAKTUR_STEPS.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStep ? 'w-6 bg-[#B96A3C]' : 'w-2 bg-[#D9C5A7]'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    );
  }

  // Kids Sanctuary Story
  return (
    <section className="py-24 bg-[#FDFBF7] overflow-hidden border-b border-[#EDE6DC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Editorial Text Content */}
          <div className="space-y-6 lg:pr-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold bg-[#8EBBB0]/15 px-3 py-1 rounded-full w-fit">
              <Sparkles size={14} className="text-[#8EBBB0]" />
              <span>{t('editorial.badge')}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-medium text-[#2D2B2A] leading-[1.12]">
              {t('editorial.title')}<span className="text-[#E79685]">{t('editorial.titleHighlight')}</span>
            </h2>

            <p className="text-sm md:text-base text-[#6B6661] font-normal leading-relaxed">
              {t('editorial.description')}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#EDE6DC] text-[#2D2B2A]">
              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] shadow-pillowy">
                <span className="font-heading text-3xl text-[#8EBBB0] block mb-0.5 font-bold">{t('editorial.stat1Number')}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#6B6661] font-semibold block">{t('editorial.stat1Label')}</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] shadow-pillowy">
                <span className="font-heading text-3xl text-[#E79685] block mb-0.5 font-bold">{t('editorial.stat2Number')}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#6B6661] font-semibold block">{t('editorial.stat2Label')}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="bg-[#8EBBB0] hover:bg-[#6C9F93] text-white px-8 py-4 text-xs tracking-wider font-bold uppercase rounded-full shadow-pillowy-sage hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer group"
              >
                <span>{t('editorial.safetyStory')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Lifestyle Image Banner */}
          <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-[#F7F3EB] shadow-pillowy border border-[#EDE6DC]">
            <img
              src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=1200&auto=format&fit=crop"
              alt="Kleinkind spielt auf kuscheligem Kinderteppich"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2B2A]/40 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl text-[#2D2B2A] border border-[#EDE6DC] shadow-pillowy">
              <span className="text-[10px] tracking-wider uppercase text-[#8EBBB0] font-bold block mb-1">
                {t('editorial.copenhagenBadge')}
              </span>
              <p className="font-heading text-xl text-[#2D2B2A] font-medium">
                {t('editorial.quote')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


