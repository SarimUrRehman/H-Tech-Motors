import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '../config/siteConfig';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification Strip with Address & Quick Hours */}
      <div className="bg-[#0b0c0e] border-b border-[#20242A] text-xs text-[#A7AEB8] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-4 truncate">
            <span className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B1A] shrink-0" />
              <span className="truncate">5671 Minoru Blvd #140, Richmond, BC</span>
            </span>
            <span className="text-[#374151]">|</span>
            <span className="flex items-center gap-1.5 shrink-0">
              <Clock className="w-3.5 h-3.5 text-[#FF6B1A]" />
              <span>Mon–Fri 8am–5:30pm · Sat 9am–4pm</span>
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[#FFC83D] font-semibold">4.4 ★ (48 Google Reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#101214]/95 backdrop-blur-md border-[#252A32] shadow-xl shadow-black/40 py-2.5'
            : 'bg-[#101214] border-[#1C2026] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center shrink-0 hover:opacity-95 transition-opacity"
            aria-label="H Tech Motor Inc. Homepage"
          >
            <Logo variant="header" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide uppercase"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-[#A7AEB8] hover:text-white hover:text-[#FF6B1A] transition-colors whitespace-nowrap py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B1A] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop Call Button: Safety orange with dark text for WCAG AA contrast */}
            <a
              href={SITE_CONFIG.contact.phoneTel}
              className="hidden sm:inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#e85c0f] text-[#101214] font-bold text-sm tracking-wide uppercase px-4 py-2.5 rounded shadow-lg shadow-[#FF6B1A]/20 transition-all transform active:scale-95"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em' }}
            >
              <Phone className="w-4 h-4 fill-current stroke-none" />
              <span>Call (604) 276-8933</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-[#181B1F] border border-[#2A2F38] text-white hover:text-[#FF6B1A] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#14171A] border-b border-[#252A32] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 rounded text-base font-semibold text-white hover:bg-[#20242A] hover:text-[#FF6B1A] transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-[#252A32] flex flex-col gap-3">
              <a
                href={SITE_CONFIG.contact.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-[#FF6B1A] hover:bg-[#e85c0f] text-[#101214] font-bold text-base uppercase py-3 rounded text-center shadow-md"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <Phone className="w-5 h-5 fill-current stroke-none" />
                <span>Call (604) 276-8933</span>
              </a>

              <div className="text-xs text-[#A7AEB8] flex flex-col gap-1 px-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B1A]" />
                  <span>5671 Minoru Blvd #140, Richmond, BC</span>
                </span>
                <span className="text-[#FFC83D] font-mono mt-0.5">
                  ★ 4.4 Google Rating (48 Reviews)
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
