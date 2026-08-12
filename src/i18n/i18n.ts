import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslations from './locales/de.json';
import enTranslations from './locales/en.json';

const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('levina_language') : null;
const initialLanguage = savedLanguage === 'en' || savedLanguage === 'de' ? savedLanguage : 'de';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: deTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('levina_language', lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
