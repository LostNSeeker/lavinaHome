import React from 'react';
import type { StoreMode } from '../types';
import { GeneralHeroSection } from './GeneralHeroSection';
import { KidsHeroSection } from './KidsHeroSection';

interface HeroSectionProps {
  storeMode: StoreMode;
  onExploreClick: () => void;
  onShopCarpetsClick: () => void;
  onOpenKidsClick?: () => void;
  onBackToGeneralClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  storeMode,
  onExploreClick,
  onShopCarpetsClick,
  onOpenKidsClick = () => {},
  onBackToGeneralClick = () => {},
}) => {
  if (storeMode === 'kids') {
    return (
      <KidsHeroSection
        onExploreClick={onExploreClick}
        onShopCarpetsClick={onShopCarpetsClick}
        onBackToGeneralClick={onBackToGeneralClick}
      />
    );
  }

  return (
    <GeneralHeroSection
      onExploreClick={onExploreClick}
      onShopCarpetsClick={onShopCarpetsClick}
      onOpenKidsClick={onOpenKidsClick}
    />
  );
};
