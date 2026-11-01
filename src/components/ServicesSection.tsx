import React from 'react';
import { SITE_CONFIG, ServiceItem } from '../config/siteConfig';
import { ArrowUpRight, HelpCircle } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleEnquire = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Custom inline SVG icons for each of the 8 mechanical service categories
  const renderServiceIcon = (iconType: ServiceItem['iconType']) => {
    switch (iconType) {
      case 'diagnostic':
        return (
          <svg viewBox="0 0 48 48" className="w-7 h-7 text-[#FF6B1A]" fill="none" stroke="currentColor">
            {/* Engine block with OBD scan wave */}
            <path
              d="M8 18 H12 V14 H20 V18 H32 V14 H38 V20 H42 V34 H38 V36 H12 V34 H8 Z"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M16 26 H22 L24 21 L28 31 L30 26 H34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="18" r="1.5" fill="currentColor" />
            <circle cx="30" cy="18" r="1.5" fill="currentColor" />
          </svg>
        );

      case 'brakes':
        return (
          <svg viewBox="0 0 48 48" className="w-7 h-7 text-[#FF6B1A]" fill="none" stroke="currentColor">
            {/* Ventilated Brake Rotor & Caliper */}
            <circle cx="24" cy="24" r="18" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="10" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="24" cy="24" r="4" fill="currentColor" />
            {/* Brake Caliper Clamp */}
            <path
              d="M30 8 C38 12 42 20 40 28 L35 27 C36 21 33 15 28 12 Z"
              fill="currentColor"
              fillOpacity="0.25"
              strokeWidth="2"
            />
            {/* Rotor slots */}
            <line x1="24" y1="9" x2="24" y2="13" strokeWidth="1.5" />
            <line x1="24" y1="35" x2="24" y2="39" strokeWidth="1.5" />
            <line x1="9" y1="24" x2="13" y2="24" strokeWidth="1.5" />
            <line x1="35" y1="24" x2="39" y2="24" strokeWidth="1.5" />
          </svg>
        );

      case 'oil':
        return (
          <svg viewBox="0 0 48 48" className="w-7 h-7 text-[#FF6B1A]" fill="none" stroke="currentColor">
            {/* Oil canister and falling droplet */}
            <path
              d="M12 18 L24 8 L36 18 V38 C36 40.2 34.2 42 32 42 H16 C13.8 42 12 40.2 12 38 Z"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M20 8 V4 H28 V8" strokeWidth="2" strokeLinecap="round" />
            {/* Fluid level gauge */}
            <line x1="16" y1="24" x2="32" y2="24" strokeWidth="2" strokeDasharray="2 2" />
            <path
              d="M24 28 C24 28 20 33 20 35 C20 37.2 21.8 39 24 39 C26.2 39 28 37.2 28 35 C28 33 24 28 24 28 Z"
              fill="currentColor"
            />
          </svg>
        );

      case 'suspension':
        return (
          <svg viewBox="0 0 48 48" className="w-7 h-7 text-[#FF6B1A]" fill="none" stroke="currentColor">
            {/* Heavy-duty coilover strut assembly */}
            <line x1="24" y1="4" x2="24" y2="12" strokeWidth="3" strokeLinecap="round" />
            <line x1="24" y1="36" x2="24" y2="44" strokeWidth="3" strokeLinecap="round" />
            {/* Upper & lower spring perch */}
            <line x1="16" y1="12" x2="32" y2="12" strokeWidth="3" />
            <line x1="16" y1="36" x2="32" y2="36" strokeWidth="3" />
            {/* Central shock shaft */}
            <line x1="24" y1="12" x2="24" y2="36" stroke="#FFFFFF" strokeWidth="2" />
            {/* Coil spring helical zig-zag */}
            <path
              d="M16 16 L32 20 L16 24 L32 28 L16 32"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'transmission':
        return (
          <svg viewBox="0 0 48 48" className="w-7 h-7 text-[#FF6B1A]" fill="none" stroke="currentColor">
            {/* Interlocking gear cluster */}
            <circle cx="18" cy="20" r="10" strokeWidth="2.5" />
            <circle cx="18" cy="20" r="4" fill="currentColor" />
            <path d="M18 6 V10 M18 30 V34 M4 20 H8 M28 20 H32" strokeWidth="2.5" />
            {/* Secondary meshing gear */}
            <circle cx="33" cy="31" r="8" strokeWidth="2.5" />
            <circle cx="33" cy="31" r="3" fill="#FFFFFF" />
            <path d="M33 19 V23 M33 39 V43 M21 31 H25 M41 31 H45" strokeWidth="2.5" />
          </svg>
        );

      case 'tires':
        return (
          <svg viewBox="0 0 48 48" className="w-7 h-7 text-[#FF6B1A]" fill="none" stroke="currentColor">
            {/* Tire tread profile with alignment crosshairs */}
            <circle cx="24" cy="24" r="18" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="11" strokeWidth="2" strokeDasharray="2 2" />
            {/* Alignment laser crosshairs */}
            <line x1="24" y1="2" x2="24" y2="46" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 3" />
            <line x1="2" y1="24" x2="46" y2="24" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 3" />
            <circle cx="24" cy="24" r="3.5" fill="currentColor" />
          </svg>
        );

      case 'battery':
        return (
          <svg viewBox="0 0 48 48" className="w-7 h-7 text-[#FF6B1A]" fill="none" stroke="currentColor">
            {/* Automotive 12V battery */}
            <rect x="8" y="14" width="32" height="26" rx="3" strokeWidth="2.5" />
            {/* Terminals */}
            <rect x="13" y="9" width="6" height="5" rx="1" fill="currentColor" />
            <rect x="29" y="9" width="6" height="5" rx="1" fill="#FFFFFF" />
            {/* Plus & Minus symbols */}
            <line x1="16" y1="20" x2="16" y2="26" stroke="currentColor" strokeWidth="2" />
            <line x1="13" y1="23" x2="19" y2="23" stroke="currentColor" strokeWidth="2" />
            <line x1="29" y1="23" x2="35" y2="23" stroke="#FFFFFF" strokeWidth="2" />
            {/* Voltage charge bolt */}
            <path d="M25 28 L22 34 H26 L23 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case 'inspection':
        return (
          <svg viewBox="0 0 48 48" className="w-7 h-7 text-[#FF6B1A]" fill="none" stroke="currentColor">
            {/* Inspection report clipboard with pass badge */}
            <rect x="10" y="8" width="28" height="34" rx="3" strokeWidth="2.5" />
            <rect x="18" y="5" width="12" height="6" rx="2" fill="currentColor" />
            {/* Checkmark checklist */}
            <line x1="16" y1="18" x2="32" y2="18" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="16" y1="24" x2="26" y2="24" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="16" y1="30" x2="32" y2="30" strokeWidth="1.5" strokeOpacity="0.4" />
            {/* Stamp / shield */}
            <path d="M26 26 L29 29 L35 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#101214] py-16 lg:py-24 border-b border-[#1C2026] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF6B1A] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B1A]" />
            <span>MAINTENANCE & MECHANICAL REPAIRS</span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Comprehensive Auto Repair Services
          </h2>

          <p className="mt-3 text-[#A7AEB8] text-base sm:text-lg leading-relaxed">
            From computerized diagnostics to complete brake overhauls, our Richmond shop provides honest assessments and skilled craftsmanship on all makes and models.
          </p>

          {/* Editable Note Banner as specified in prompt */}
          <div className="mt-4 inline-flex items-start gap-2.5 bg-[#181B1F] border border-[#252A32] rounded p-3 text-xs text-[#A7AEB8]">
            <HelpCircle className="w-4 h-4 text-[#FF6B1A] shrink-0 mt-0.5" />
            <span>
              <strong className="text-white font-semibold">Config Notice:</strong> {SITE_CONFIG.servicesNote}
            </span>
          </div>
        </div>

        {/* 8 Editable Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SITE_CONFIG.services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-[#181B1F] hover:bg-[#20242A] border border-[#252A32] hover:border-[#FF6B1A]/50 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B1A]/5"
            >
              {/* Corner accent line on hover */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-[#FF6B1A] rounded-tr-lg transition-colors" />

              <div>
                {/* Header: Icon & Editorial Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded bg-[#101214] border border-[#2A2F38] flex items-center justify-center group-hover:border-[#FF6B1A]/40 transition-colors">
                    {renderServiceIcon(service.iconType)}
                  </div>
                  <span className="text-xs font-mono text-[#4B5563] group-hover:text-[#A7AEB8] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#FF6B1A] transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {service.title}
                </h3>

                {/* 1-Line Description */}
                <p className="mt-2 text-sm text-[#A7AEB8] leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Footer: Quote Note & Enquire Link */}
              <div className="mt-6 pt-4 border-t border-[#252A32] flex items-center justify-between">
                <span className="text-xs font-mono text-[#A7AEB8]/80 italic">
                  {service.quoteNote}
                </span>

                <button
                  type="button"
                  onClick={() => handleEnquire(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#FF6B1A] group-hover:text-white transition-colors py-1 cursor-pointer"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  aria-label={`Enquire about ${service.title}`}
                >
                  <span>Enquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
