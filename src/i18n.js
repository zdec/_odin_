import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import es from './translations/es';

// Configuración de i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo en caso de que la traducción no esté disponible
    interpolation: {
      escapeValue: false, // React ya maneja el escape
    },
  });

export default i18n;
