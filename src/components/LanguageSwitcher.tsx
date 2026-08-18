import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import type { StoreMode } from '../types';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'navbar' | 'compact' | 'modal';
  storeMode?: StoreMode;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'navbar',
  storeMode = 'general',
}) => {
  const { i18n, t } = useTranslation();
  const rawLang = i18n.resolvedLanguage || i18n.language || 'de';
  const currentLang = rawLang.startsWith('de') ? 'de' : 'en';

  const toggleLanguage = (lang: 'de' | 'en') => {
    if (currentLang !== lang) {
      i18n.changeLanguage(lang);
      if (typeof window !== 'undefined') {
        localStorage.setItem('levina_language', lang);
        document.documentElement.lang = lang;
      }
    }
  };

  const activeColorClass = storeMode === 'kids' ? 'bg-[#8EBBB0] text-white shadow-pillowy-sage' : 'bg-[#B96A3C] text-white shadow-xs';

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center bg-[#F7F3EB] rounded-full p-0.5 border border-[#EDE6DC] text-xs font-bold ${className}`}>
        <button
          onClick={() => toggleLanguage('de')}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            currentLang === 'de'
              ? activeColorClass
              : 'text-[#6B6661] hover:text-[#2D2B2A]'
          }`}
          title="Deutsch"
        >
          DE
        </button>
        <button
          onClick={() => toggleLanguage('en')}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            currentLang === 'en'
              ? activeColorClass
              : 'text-[#6B6661] hover:text-[#2D2B2A]'
          }`}
          title="English"
        >
          EN
        </button>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center bg-white/90 backdrop-blur-md rounded-full p-1 border border-[#EDE6DC] shadow-xs text-xs font-semibold ${className}`}
      aria-label={t('nav.language', 'Sprache')}
    >
      <div className="flex items-center gap-1 pl-1.5 pr-1 text-[#69705A] hidden sm:flex">
        <Globe size={13} strokeWidth={2} />
      </div>
      <button
        onClick={() => toggleLanguage('de')}
        className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1 ${
          currentLang === 'de'
            ? `${activeColorClass} scale-105`
            : 'text-[#6B6661] hover:text-[#2D2B2A]'
        }`}
        title="Deutsch (German)"
      >
        <span>DE</span>
      </button>
      <button
        onClick={() => toggleLanguage('en')}
        className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1 ${
          currentLang === 'en'
            ? `${activeColorClass} scale-105`
            : 'text-[#6B6661] hover:text-[#2D2B2A]'
        }`}
        title="English"
      >
        <span>EN</span>
      </button>
    </div>
  );
};
