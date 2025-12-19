'use client';

import { Scale, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-8 h-8 text-primary-gold" />
              <span className="text-2xl font-bold font-playfair">LegalPro</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.footer.brand.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-primary-gold transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-primary-gold transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-primary-gold transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-primary-gold transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-gold">{t.footer.practiceAreas.title}</h3>
            <ul className="space-y-3">
              {t.footer.practiceAreas.items.map((area, index) => (
                <li key={index} className="text-gray-400">{area}</li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-gold">{t.footer.officeHours.title}</h3>
            <ul className="space-y-3 text-gray-400">
              {t.footer.officeHours.hours.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-white font-semibold">{t.footer.officeHours.emergency}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-gold transition-colors">
                {t.footer.links.privacy}
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-primary-gold transition-colors">
                {t.footer.links.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
