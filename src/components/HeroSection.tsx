import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { StarRating } from './StarRating';
import { Phone, Calendar, ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onBookServiceClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookServiceClick }) => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBookServiceClick) {
      onBookServiceClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative bg-[#101214] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#1C2026]"
    >
      {/* Background workshop textures */}
      <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B1A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#181B1F]/60 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Subheadline, Trust Badges & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Trust Badges Bar (Clean metadata tags with subtle borders) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-wider uppercase font-semibold">
              {/* Google Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-[#181B1F] border border-[#2A2F38] px-3 py-1.5 rounded">
                <StarRating rating={SITE_CONFIG.ratings.googleRating} size="sm" />
                <span className="text-[#FFC83D] font-mono font-bold">4.4 ★</span>
                <span className="text-[#A7AEB8] normal-case">(48 Google Reviews)</span>
              </div>

              {/* Richmond, BC Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#181B1F] border border-[#2A2F38] px-3 py-1.5 rounded text-[#A7AEB8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B1A]" />
                <span>Richmond, BC</span>
              </div>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#181B1F] border border-[#2A2F38] px-3 py-1.5 rounded text-[#A7AEB8]">
                <Wrench className="w-3.5 h-3.5 text-[#FF6B1A]" />
                <span>Auto Repair & Maintenance</span>
              </div>
            </div>

            {/* Headline with Barlow Condensed, Uppercase & Optical Spacing */}
            <div className="space-y-3">
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05]"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: '0.02em',
                }}
              >
                Expert Auto Repair in{' '}
                <span className="text-[#FF6B1A] underline decoration-[#FF6B1A]/40 decoration-4 underline-offset-8">
                  Richmond, BC.
                </span>
              </h1>
              <p
                className="text-base sm:text-lg lg:text-xl text-[#A7AEB8] max-w-2xl font-normal leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Honest diagnostics, quality repairs and reliable service to keep you safely on the road.
              </p>
            </div>

            {/* Action Buttons: Safety Orange Call + Secondary Book a Service */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href={SITE_CONFIG.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 bg-[#FF6B1A] hover:bg-[#e85c0f] text-[#101214] font-extrabold text-base uppercase tracking-wider px-7 py-3.5 rounded shadow-xl shadow-[#FF6B1A]/20 transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem' }}
              >
                <Phone className="w-5 h-5 fill-current stroke-none shrink-0" />
                <span>Call (604) 276-8933</span>
              </a>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-[#181B1F] hover:bg-[#20242A] border border-[#2A2F38] hover:border-[#FF6B1A]/60 text-white font-bold text-base uppercase tracking-wider px-6 py-3.5 rounded transition-all duration-150 transform hover:-translate-y-0.5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem' }}
              >
                <Calendar className="w-5 h-5 text-[#FF6B1A] shrink-0" />
                <span>Book a Service</span>
              </a>
            </div>

            {/* Key Value Guarantee Strip */}
            <div className="pt-4 border-t border-[#1C2026] w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#A7AEB8]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                <span>Upfront Written Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                <span>OEM & Quality Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                <span>State-of-the-Art Diagnostics</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Pure SVG & CSS Automotive Engineering Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] bg-gradient-to-b from-[#181B1F] to-[#121417] rounded-xl border border-[#252A32] p-4 shadow-2xl overflow-hidden group">
              {/* Subtle background blueprint grid */}
              <div className="absolute inset-0 bg-mesh-grid opacity-20 pointer-events-none" />

              {/* Technical CAD Corner Brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#FF6B1A]/60 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#FF6B1A]/60 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#FF6B1A]/60 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#FF6B1A]/60 pointer-events-none" />

              {/* Technical Label */}
              <div className="absolute top-3 left-8 text-[10px] font-mono text-[#A7AEB8] tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B1A]" />
                <span>H TECH MOTOR · CAD SPEC // VEHICLE DIAGNOSTICS</span>
              </div>

              {/* The Hero SVG Illustration: Line-art Car Blueprint + Rotating Gears */}
              <svg
                viewBox="0 0 600 450"
                className="w-full h-full relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Sweep Gradient for Orange Light Beam */}
                  <linearGradient id="orangeSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0" />
                    <stop offset="50%" stopColor="#FF6B1A" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#FFC83D" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E232B" />
                    <stop offset="50%" stopColor="#2A313C" />
                    <stop offset="100%" stopColor="#1E232B" />
                  </linearGradient>
                </defs>

                {/* Rotating Mechanical Gear Accents in Background */}
                <g className="opacity-25 origin-[160px_180px] animate-gear-spin">
                  <circle cx="160" cy="180" r="100" stroke="#FF6B1A" strokeWidth="1.5" strokeDasharray="8 6" />
                  <circle cx="160" cy="180" r="75" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="160" cy="180" r="45" stroke="#FF6B1A" strokeWidth="2" />
                  {/* Cog teeth spokes */}
                  <line x1="160" y1="70" x2="160" y2="290" stroke="#FFFFFF" strokeWidth="1" />
                  <line x1="50" y1="180" x2="270" y2="180" stroke="#FFFFFF" strokeWidth="1" />
                  <line x1="82" y1="102" x2="238" y2="258" stroke="#FFFFFF" strokeWidth="1" />
                  <line x1="82" y1="258" x2="238" y2="102" stroke="#FFFFFF" strokeWidth="1" />
                </g>

                <g className="opacity-20 origin-[440px_160px] animate-gear-spin-reverse">
                  <circle cx="440" cy="160" r="80" stroke="#A7AEB8" strokeWidth="1.5" strokeDasharray="6 4" />
                  <circle cx="440" cy="160" r="55" stroke="#FF6B1A" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="440" cy="160" r="30" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="440" y1="75" x2="440" y2="245" stroke="#FF6B1A" strokeWidth="1" />
                  <line x1="355" y1="160" x2="525" y2="160" stroke="#FF6B1A" strokeWidth="1" />
                </g>

                {/* Ground Plane Calibration Grid Line */}
                <line x1="30" y1="360" x2="570" y2="360" stroke="#2A2F38" strokeWidth="2" />
                <line x1="50" y1="365" x2="550" y2="365" stroke="#FF6B1A" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 8" />

                {/* Line-Art Car Silhouette (Modern Performance Sedan/Coupe Profile) */}
                <g className="car-group">
                  {/* Soft Under-Chassis Glow */}
                  <ellipse cx="300" cy="355" rx="220" ry="12" fill="#FF6B1A" fillOpacity="0.12" />

                  {/* Car Main Body Outline */}
                  <path
                    d="M 60 330 
                       L 110 330 
                       A 45 45 0 0 1 200 330 
                       L 380 330 
                       A 45 45 0 0 1 470 330 
                       L 535 330 
                       C 545 330 555 320 550 305 
                       C 545 290 535 280 500 270 
                       C 475 265 460 250 435 210 
                       C 410 170 375 160 300 160 
                       C 230 160 185 190 150 240 
                       L 110 255 
                       C 75 270 50 290 50 310 
                       C 50 325 55 330 60 330 Z"
                    fill="url(#bodyGradient)"
                    stroke="#FF6B1A"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />

                  {/* Windshield & Windows */}
                  <path
                    d="M 195 240 
                       C 225 200 255 175 305 175 
                       C 365 175 390 185 415 220 
                       C 430 240 435 248 438 250 
                       L 305 250 
                       Z"
                    fill="#101214"
                    stroke="#A7AEB8"
                    strokeWidth="2"
                  />
                  {/* B-Pillar divider */}
                  <line x1="305" y1="175" x2="305" y2="250" stroke="#252A32" strokeWidth="4" />

                  {/* Character Lines & Aerodynamic Creases */}
                  <path
                    d="M 80 285 Q 220 280 520 268"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeOpacity="0.8"
                  />
                  <path
                    d="M 120 298 L 380 298"
                    stroke="#A7AEB8"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M 215 315 L 365 315"
                    stroke="#FF6B1A"
                    strokeWidth="1.5"
                    strokeOpacity="0.7"
                  />

                  {/* Headlamp Housing & Glow */}
                  <polygon
                    points="510,272 545,282 530,295 505,285"
                    fill="#FF6B1A"
                    fillOpacity="0.85"
                  />
                  <polygon
                    points="525,278 548,284 535,292 520,286"
                    fill="#FFFFFF"
                  />
                  {/* Projected Headlight Beams */}
                  <polygon
                    points="548,284 590,260 590,320 535,292"
                    fill="#FF6B1A"
                    fillOpacity="0.15"
                  />

                  {/* Taillight Housing */}
                  <polygon
                    points="55,302 70,300 72,315 56,316"
                    fill="#FF3333"
                    fillOpacity="0.8"
                  />

                  {/* Front Wheel & Rim Assembly */}
                  <g className="front-wheel">
                    {/* Tire Outer Rubber */}
                    <circle cx="425" cy="330" r="42" fill="#14171A" stroke="#2A2F38" strokeWidth="3" />
                    {/* Metal Rim */}
                    <circle cx="425" cy="330" r="30" fill="#181B1F" stroke="#FF6B1A" strokeWidth="2.5" />
                    {/* Slotted Brake Rotor */}
                    <circle cx="425" cy="330" r="22" stroke="#A7AEB8" strokeWidth="1.5" strokeDasharray="4 2" />
                    {/* Brake Caliper */}
                    <rect x="435" y="315" width="8" height="18" rx="2" fill="#FF6B1A" />
                    {/* Alloy Rim Spokes (5-spoke star) */}
                    <circle cx="425" cy="330" r="8" fill="#FFFFFF" />
                    <line x1="425" y1="305" x2="425" y2="355" stroke="#FFFFFF" strokeWidth="2.5" />
                    <line x1="400" y1="330" x2="450" y2="330" stroke="#FFFFFF" strokeWidth="2.5" />
                  </g>

                  {/* Rear Wheel & Rim Assembly */}
                  <g className="rear-wheel">
                    {/* Tire Outer Rubber */}
                    <circle cx="155" cy="330" r="42" fill="#14171A" stroke="#2A2F38" strokeWidth="3" />
                    {/* Metal Rim */}
                    <circle cx="155" cy="330" r="30" fill="#181B1F" stroke="#FF6B1A" strokeWidth="2.5" />
                    {/* Slotted Brake Rotor */}
                    <circle cx="155" cy="330" r="22" stroke="#A7AEB8" strokeWidth="1.5" strokeDasharray="4 2" />
                    {/* Brake Caliper */}
                    <rect x="165" y="315" width="8" height="18" rx="2" fill="#FF6B1A" />
                    {/* Alloy Rim Spokes */}
                    <circle cx="155" cy="330" r="8" fill="#FFFFFF" />
                    <line x1="155" y1="305" x2="155" y2="355" stroke="#FFFFFF" strokeWidth="2.5" />
                    <line x1="130" y1="330" x2="180" y2="330" stroke="#FFFFFF" strokeWidth="2.5" />
                  </g>

                  {/* Side Door Seam & Handle */}
                  <line x1="285" y1="245" x2="280" y2="328" stroke="#101214" strokeWidth="2" />
                  <rect x="295" y="270" width="22" height="4" rx="2" fill="#A7AEB8" />

                  {/* Light Sweep Animation Overlay Bar */}
                  <rect
                    x="0"
                    y="180"
                    width="140"
                    height="170"
                    fill="url(#orangeSweep)"
                    className="animate-light-sweep pointer-events-none mix-blend-screen"
                  />
                </g>

                {/* Diagnostic Telemetry HUD Crosshairs */}
                <g className="opacity-60 font-mono text-[9px] fill-[#A7AEB8]">
                  {/* Diagnostic Point A: Engine Compartment */}
                  <circle cx="485" cy="275" r="4" stroke="#FF6B1A" strokeWidth="1.5" />
                  <line x1="485" y1="271" x2="485" y2="245" stroke="#FF6B1A" strokeWidth="1" />
                  <line x1="485" y1="245" x2="525" y2="245" stroke="#FF6B1A" strokeWidth="1" />
                  <text x="475" y="235" fill="#FF6B1A" fontWeight="bold">ENGINE [OK]</text>

                  {/* Diagnostic Point B: Brake System */}
                  <circle cx="425" cy="330" r="3" stroke="#FFC83D" strokeWidth="1.5" />
                  <line x1="425" y1="330" x2="425" y2="385" stroke="#FFC83D" strokeWidth="1" />
                  <line x1="425" y1="385" x2="465" y2="385" stroke="#FFC83D" strokeWidth="1" />
                  <text x="468" y="388" fill="#FFC83D">BRAKES: 98%</text>

                  {/* Diagnostic Point C: Suspension */}
                  <circle cx="155" cy="330" r="3" stroke="#A7AEB8" strokeWidth="1.5" />
                  <line x1="155" y1="330" x2="155" y2="385" stroke="#A7AEB8" strokeWidth="1" />
                  <line x1="155" y1="385" x2="115" y2="385" stroke="#A7AEB8" strokeWidth="1" />
                  <text x="50" y="388" fill="#A7AEB8">SUSPENSION</text>
                </g>
              </svg>

              {/* Status footer inside visual container */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#A7AEB8] border-t border-[#252A32] pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>DIAGNOSTIC STATUS: READY</span>
                </span>
                <span className="text-[#FF6B1A] font-semibold">HONEST REPAIRS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
