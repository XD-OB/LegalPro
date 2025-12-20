'use client';

import { useState, useEffect } from 'react';
import { Scale, Globe } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en' as const, label: 'English', flag: '🇺🇸' },
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷' },
    { code: 'ar' as const, label: 'العربية', flag: '🇲🇦' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Scale className={`w-8 h-8 ${scrolled ? 'text-primary-dark' : 'text-white'}`} />
            <span className={`text-2xl font-bold font-playfair ${scrolled ? 'text-primary-dark' : 'text-white'}`}>
              LegalPro
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className={`font-medium transition-colors hover:text-primary-gold ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.header.services}
            </Link>
            <Link
              href="#formations"
              className={`font-medium transition-colors hover:text-primary-gold ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.header.formations}
            </Link>
            <Link
              href="#ceo"
              className={`font-medium transition-colors hover:text-primary-gold ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.header.founder}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center gap-2 font-medium transition-colors hover:text-primary-gold ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Globe className="w-5 h-5" />
                {languages.find(l => l.code === language)?.flag}
              </button>

              {showLangMenu && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[150px] right-0">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-primary-gold hover:text-white transition-colors flex items-center gap-2 ${
                        language === lang.code ? 'bg-primary-gold bg-opacity-10 text-primary-gold' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden md:block bg-primary-gold text-white px-6 py-2 rounded hover:bg-opacity-90 transition-all font-medium"
          >
            {t.header.contactUs}
          </Link>
        </div>
      </nav>
    </header>
  );
}
