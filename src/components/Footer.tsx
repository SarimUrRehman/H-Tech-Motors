import React from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Globe,
  ArrowUp,
} from 'lucide-react';

interface FooterProps {
  onBackToTop?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact & Booking', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0c0e10] text-[#A7AEB8] border-t border-[#1C2026] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="footer" />
            <p className="text-sm leading-relaxed max-w-sm text-[#A7AEB8]">
              {SITE_CONFIG.business.shortBio}
            </p>

            <div className="pt-2 text-xs font-mono text-[#FF6B1A] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6B1A]" />
              <span>{SITE_CONFIG.business.tagline}</span>
            </div>
          </div>

          {/* Col 2: Quick Links to 5 Sections (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              className="text-base font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#FF6B1A] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#374151]">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-sm">
            <h4
              className="text-base font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Shop Contact Info
            </h4>

            <div className="space-y-2.5">
              <a
                href={SITE_CONFIG.contact.phoneTel}
                className="flex items-center gap-2.5 text-white hover:text-[#FF6B1A] transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                <span className="font-bold">{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.contact.emailPlaceholder}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors font-mono text-xs"
              >
                <Mail className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                <span>{SITE_CONFIG.contact.emailPlaceholder}</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-[#A7AEB8]">
                <MapPin className="w-4 h-4 text-[#FF6B1A] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address.fullText}</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#A7AEB8] font-mono">
                <Clock className="w-4 h-4 text-[#FF6B1A] shrink-0 mt-0.5" />
                <span>Mon–Fri 8:00 AM – 5:30 PM · Sat 9:00 AM – 4:00 PM</span>
              </div>
            </div>

            {/* Social Placeholders */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#181B1F] border border-[#252A32] flex items-center justify-center text-[#A7AEB8] hover:text-[#FF6B1A] transition-colors"
                aria-label="Instagram placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#181B1F] border border-[#252A32] flex items-center justify-center text-[#A7AEB8] hover:text-[#FF6B1A] transition-colors"
                aria-label="Facebook placeholder"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#181B1F] border border-[#252A32] flex items-center justify-center text-[#A7AEB8] hover:text-[#FF6B1A] transition-colors"
                aria-label="Google Maps"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="mt-12 pt-6 border-t border-[#1C2026] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <div>
            © 2025 H Tech Motor Inc. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Richmond, British Columbia · Auto Repair Shop
          </div>
        </div>
      </div>
    </footer>
  );
};
