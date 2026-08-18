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
  highlightTag: string;
  tab: string;
}

export const SplitEditorialBanner: React.FC<SplitEditorialBannerProps> = ({
  storeMode = 'general',
  onExploreClick,
}) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const manufakturSteps: ManufakturStep[] = [
    {
      id: 'step-manufacturing',
      stepNumber: '01',
      title: t('manufaktur.step1Title', 'Traditionelle Webkunst & Manufaktur'),
      subtitle: t('manufaktur.step1Subtitle', 'Meisterhafte Handarbeit am Holzwebstuhl'),
      description: t('manufaktur.step1Desc', 'Vom ersten Schurwollfaden bis zum vollendeten Meisterstück entsteht jeder Teppich mit meisterhafter Präzision von Hand. Jahrzehntelange Erfahrung und Fingerspitzengefühl prägen jeden Arbeitsgang.'),
      videoSrc: '/manufacturing.mp4',
      badge: t('manufaktur.step1Badge', '01. Handwebkunst'),
      statNumber: t('manufaktur.step1StatNumber', '100%'),
      statLabel: t('manufaktur.step1StatLabel', 'Traditionelle Handarbeit'),
      highlightTag: t('manufaktur.step1Highlight', 'Holzwebstuhl-Präzision'),
      tab: t('manufaktur.step1Tab', '01 Webkunst'),
    },
    {
      id: 'step-luxury',
      stepNumber: '02',
      title: t('manufaktur.step2Title', 'Edle Schurwolle & Dichte Haptik'),
      subtitle: t('manufaktur.step2Subtitle', '100% Reine Bio-Naturwolle'),
      description: t('manufaktur.step2Desc', 'Ausgewählte, ungebleichte Schurwolle verleiht unseren Teppichen ihre außergewöhnliche Dichte, natürliche Elastizität und ein unvergleichlich weiches Trittgefühl unter den Füßen.'),
      videoSrc: '/LuxuryCarpet.mp4',
      badge: t('manufaktur.step2Badge', '02. Reine Naturwolle'),
      statNumber: t('manufaktur.step2StatNumber', 'GOTS'),
      statLabel: t('manufaktur.step2StatLabel', 'Bio-Qualität & Naturfasern'),
      highlightTag: t('manufaktur.step2Highlight', 'Reine Neuseeland-Wolle'),
      tab: t('manufaktur.step2Tab', '02 Bio-Wolle'),
    },
    {
      id: 'step-carpet',
      stepNumber: '03',
      title: t('manufaktur.step3Title', 'Präzise Veredelung & Kettelung'),
      subtitle: t('manufaktur.step3Subtitle', 'Perfektion bis in die kleinste Faser'),
      description: t('manufaktur.step3Desc', 'Jede Kante wird sorgsam von Hand eingekettelt und qualitätsgeprüft. Dadurch entstehen langlebige, formstabile Luxusteppiche, die Generationen überdauern.'),
      videoSrc: '/Carpet.mp4',
      badge: t('manufaktur.step3Badge', '03. Handveredelung'),
      statNumber: t('manufaktur.step3StatNumber', 'Premium'),
      statLabel: t('manufaktur.step3StatLabel', 'Robuste Kantenverstärkung'),
      highlightTag: t('manufaktur.step3Highlight', 'Handgekettelte Ränder'),
      tab: t('manufaktur.step3Tab', '03 Veredelung'),
    },
    {
      id: 'step-family',
      stepNumber: '04',
      title: t('manufaktur.step4Title', 'Lebendige Geborgenheit & Wohnkomfort'),
      subtitle: t('manufaktur.step4Subtitle', 'Schadstofffreie Wohlfühloase für die Familie'),
      description: t('manufaktur.step4Desc', 'Reine Naturmaterialien schenken Ihrem Zuhause wohlige Wärme, beruhigende Akustik und ein gesundes Raumklima – ideal für gemütliche Stunden mit Ihren Liebsten.'),
      videoSrc: '/featuring_family.mp4',
      badge: t('manufaktur.step4Badge', '04. Wohngefühl'),
      statNumber: t('manufaktur.step4StatNumber', '0%'),
      statLabel: t('manufaktur.step4StatLabel', 'Frei von Chemiefarben'),
      highlightTag: t('manufaktur.step4Highlight', 'Familienfreundlich & Sicher'),
      tab: t('manufaktur.step4Tab', '04 Wohnkomfort'),
    },
  ];

  // Synchronize video playback
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

  // IntersectionObserver to observe if section is in viewport
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeStep, isPlaying, updateVideoPlayback]);

  // Scroll listener for calculating scroll progress inside the pinned track
  useEffect(() => {
    if (storeMode !== 'general') return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const trackHeight = rect.height - window.innerHeight;
      if (trackHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / trackHeight));
      setTrackProgress(progress);

      const stepCount = manufakturSteps.length;
      // Map progress smoothly: 0..0.25 -> 0, 0.25..0.5 -> 1, 0.5..0.75 -> 2, 0.75..1 -> 3
      const stepIndex = Math.min(stepCount - 1, Math.floor(progress * stepCount));

      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manufakturSteps.length, storeMode]);

  // Update active video when activeStep or viewport changes
  useEffect(() => {
    if (storeMode === 'general' && isInViewport) {
      updateVideoPlayback(activeStep, isPlaying);
    }
  }, [activeStep, isInViewport, isPlaying, storeMode, updateVideoPlayback]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const trackHeight = rect.height - window.innerHeight;
      const targetScroll = sectionTop + ((index + 0.1) / manufakturSteps.length) * trackHeight;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const handleTogglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    updateVideoPlayback(activeStep, nextState);
  };

  const handleNextStep = () => {
    const nextIndex = (activeStep + 1) % manufakturSteps.length;
    handleStepClick(nextIndex);
  };

  const handlePrevStep = () => {
    const prevIndex = (activeStep - 1 + manufakturSteps.length) % manufakturSteps.length;
    handleStepClick(prevIndex);
  };

  const currentStep = manufakturSteps[activeStep] || manufakturSteps[0];

  if (storeMode === 'general') {
    return (
      <section
        ref={sectionRef}
        id="manufaktur-story"
        className="relative bg-[#FAF8F5] border-b border-[#ECE8E2]"
        style={{ height: '320vh' }}
      >
        {/* Sticky Viewport Container: Pinned throughout the 320vh scroll track */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full pt-16 pb-8">
            
            {/* Scrollytelling Two-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: Dynamic Replacing Text Box (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-6">
                
                {/* Header & Section Badge */}
                <div>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#69705A] font-semibold bg-[#69705A]/15 px-3.5 py-1 rounded-full w-fit mb-2.5">
                    <Sparkles size={13} className="text-[#69705A]" />
                    <span>{t('manufaktur.badge', 'Handgewebte Manufaktur')}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#2B2B2B] leading-[1.12]">
                    {t('manufaktur.title', 'Meisterhafte Webkunst &')}{' '}
                    <span className="italic text-[#B96A3C]">{t('manufaktur.titleHighlight', 'Komfort')}</span>
                  </h2>
                </div>

                {/* 4 Segmented Progress Bars for Scroll Feedback */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#8B8B8B] font-medium">
                    <span className="text-[#69705A] font-bold">
                      {t('manufaktur.stationCount', { current: activeStep + 1, total: 4 })}
                    </span>
                    <span>{currentStep.highlightTag}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {manufakturSteps.map((step, idx) => {
                      const isPast = idx < activeStep;
                      const isCurrent = idx === activeStep;
                      // Sub-progress within current step
                      const stepSubProgress = Math.max(0, Math.min(1, (trackProgress * 4) - idx));

                      return (
                        <button
                          key={step.id}
                          onClick={() => handleStepClick(idx)}
                          className="h-1.5 bg-[#EFE7DC] rounded-full overflow-hidden relative cursor-pointer group"
                          title={`Springe zu Phase ${idx + 1}: ${step.title}`}
                        >
                          <div
                            className="h-full bg-[#B96A3C] transition-all duration-150"
                            style={{
                              width: isPast ? '100%' : isCurrent ? `${Math.max(15, stepSubProgress * 100)}%` : '0%',
                            }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* The Replacing Story Card Box */}
                <div
                  key={currentStep.id}
                  className="bg-white p-6 sm:p-7 rounded-[6px] border border-[#ECE8E2] shadow-md transition-all duration-500 animate-fade-in relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-serif font-bold tracking-widest text-[#B96A3C]">
                      {t('manufaktur.phase', 'PHASE')} {currentStep.stepNumber}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-[2px] bg-[#FAF8F5] text-[#69705A] font-semibold border border-[#ECE8E2]">
                      {currentStep.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] font-normal mb-1 line-clamp-1">
                    {currentStep.title}
                  </h3>
                  <h4 className="text-xs uppercase tracking-wider text-[#B96A3C] font-semibold mb-3">
                    {currentStep.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed mb-4">
                    {currentStep.description}
                  </p>

                  <div className="pt-3 border-t border-[#ECE8E2] flex items-center justify-between text-xs">
                    <div>
                      <span className="font-serif text-lg font-medium text-[#2B2B2B] block leading-none">
                        {currentStep.statNumber}
                      </span>
                      <span className="text-[10px] uppercase text-[#8B8B8B] tracking-wider">
                        {currentStep.statLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handlePrevStep}
                        className="p-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#ECE8E2] text-[#2B2B2B] transition-colors cursor-pointer border border-[#ECE8E2]"
                        title="Vorherige Station"
                        aria-label="Vorherige Station"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <button
                        onClick={handleNextStep}
                        className="p-1.5 rounded-full bg-[#2B2B2B] hover:bg-[#B96A3C] text-white transition-colors cursor-pointer"
                        title="Nächste Station"
                        aria-label="Nächste Station"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chapter Quick Tabs & Primary Button */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {manufakturSteps.map((step, idx) => (
                      <button
                        key={step.id}
                        onClick={() => handleStepClick(idx)}
                        className={`px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                          activeStep === idx
                            ? 'bg-[#2B2B2B] text-white shadow-xs'
                            : 'bg-[#EFE7DC] text-[#666666] hover:bg-[#D9C5A7] hover:text-[#2B2B2B]'
                        }`}
                      >
                        {step.tab}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={onExploreClick}
                    className="bg-[#B96A3C] hover:bg-[#A75D36] text-white px-5 py-2.5 text-xs tracking-[0.18em] font-medium uppercase rounded-[4px] shadow-xs hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer group"
                  >
                    <Compass size={13} />
                    <span>{t('manufaktur.exploreBtn', 'Kollektion entdecken')}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

              {/* RIGHT COLUMN: Sticky Pinned Video Showcase (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-[6px] overflow-hidden bg-[#1A1A1A] shadow-xl border border-[#ECE8E2]">
                  
                  {/* 4 Video Layers stacked with smooth crossfade */}
                  {manufakturSteps.map((step, idx) => {
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-[#1A1A1A]/25 pointer-events-none z-20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] uppercase tracking-wider px-3 py-1 rounded-[2px] font-medium border border-white/20 flex items-center gap-1.5 shadow-xs">
                      <Sparkles size={12} className="text-[#D9C5A7]" />
                      <span>{currentStep.badge}</span>
                    </span>
                  </div>

                  {/* Video Play/Pause Control */}
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

                  {/* Bottom Video Info & Step Indicators */}
                  <div className="absolute bottom-4 left-4 right-4 z-30 flex items-end justify-between gap-4 text-white">
                    <div>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#D9C5A7] font-semibold block mb-0.5">
                        {t('manufaktur.badge', 'Handgewebte Manufaktur')} — {currentStep.stepNumber} / 04
                      </span>
                      <h4 className="font-serif text-base sm:text-xl font-normal drop-shadow-sm line-clamp-1">
                        {currentStep.title}
                      </h4>
                    </div>

                    {/* Step Indicators */}
                    <div className="flex items-center gap-1.5 shrink-0 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-[2px] border border-white/20">
                      {manufakturSteps.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeStep ? 'w-5 bg-[#B96A3C]' : 'w-1.5 bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>

                {/* Video Live Badge Underneath */}
                <div className="mt-2.5 bg-white/80 rounded-[4px] border border-[#ECE8E2] p-2.5 flex items-center justify-between text-xs text-[#666666]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#69705A] animate-pulse" />
                    <span className="font-medium text-[#2B2B2B] truncate">
                      {t('manufaktur.activeView', 'Aktive Manufaktur-Aufnahme:')} {currentStep.title} ({currentStep.subtitle})
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8B8B8B] shrink-0 font-medium pl-2">
                    {t('manufaktur.hdBadge', 'HD 1080p')}
                  </span>
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


