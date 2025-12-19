'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../locales/translations.json';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Load language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
      setLanguageState(savedLang);
      setIsRTL(savedLang === 'ar');
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setIsRTL(lang === 'ar');
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
