import React, { useState } from 'react';
import { SITE_CONFIG, BenefitPoint, ShopPhotoPlaceholder } from '../config/siteConfig';
import { StarRating } from './StarRating';
import {
  ShieldCheck,
  Wrench,
  Cpu,
  FileCheck2,
  PackageCheck,
  MapPin,
  Camera,
  Star,
  Sparkles,
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  // Benefit icons lookup
  const renderBenefitIcon = (id: string) => {
    switch (id) {
      case 'honest-advice':
        return <ShieldCheck className="w-5 h-5 text-[#FF6B1A]" />;
      case 'certified-techs':
        return <Wrench className="w-5 h-5 text-[#FF6B1A]" />;
      case 'modern-equipment':
        return <Cpu className="w-5 h-5 text-[#FF6B1A]" />;
      case 'clear-quotes':
        return <FileCheck2 className="w-5 h-5 text-[#FF6B1A]" />;
      case 'quality-parts':
        return <PackageCheck className="w-5 h-5 text-[#FF6B1A]" />;
      case 'richmond-location':
        return <MapPin className="w-5 h-5 text-[#FF6B1A]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#FF6B1A]" />;
    }
  };

  // Image load error tracker so if local file isn't uploaded yet, SVG placeholder displays perfectly
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="bg-[#F3F4F6] text-[#111827] py-16 lg:py-24 border-b border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF6B1A] font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B1A]" />
            <span>HONEST SERVICE & PRECISION</span>
          </div>

          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#111827]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Why Drivers Choose H Tech Motor Inc.
          </h2>

          <p className="mt-4 text-[#4B5563] text-base sm:text-lg leading-relaxed">
            {SITE_CONFIG.whyChooseUs.description}
          </p>
        </div>

        {/* 6 Core Benefit Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SITE_CONFIG.whyChooseUs.benefits.map((benefit: BenefitPoint, idx: number) => (
            <div
              key={benefit.id}
              className="bg-white rounded-lg p-6 border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#FF6B1A]/40 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 flex items-center justify-center shrink-0">
                  {renderBenefitIcon(benefit.id)}
                </div>
                <h3
                  className="text-lg font-bold uppercase tracking-wide text-[#111827]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {benefit.title}
                </h3>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Shop & Work Placeholder Tiles (Styled SVG/CSS labeled 'Shop photo coming soon') */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-2 border-b border-[#E5E7EB]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B1A] font-bold">
                RICHMOND WORKSHOP FACILITY
              </span>
              <h3
                className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111827]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Our Shop & Working Bays
              </h3>
            </div>
            <p className="text-xs text-[#6B7280] font-mono mt-1 sm:mt-0">
              * Local file placeholders (ready to swap with real photos)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SITE_CONFIG.whyChooseUs.shopPhotos.map((photo: ShopPhotoPlaceholder, index: number) => {
              const hasError = imgErrors[photo.id] || true; // Default fallback to ensure identical look before/after deploy as instructed

              return (
                <div
                  key={photo.id}
                  className="group relative bg-[#1E232B] rounded-lg overflow-hidden border border-[#D1D5DB] shadow-sm hover:shadow-lg transition-all"
                >
                  {/* Photo container with fixed 4:3 aspect ratio */}
                  <div className="relative aspect-[4/3] w-full bg-[#181B1F] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                    {/* Background mechanical grid */}
                    <div className="absolute inset-0 bg-mesh-grid opacity-20 pointer-events-none" />

                    {/* Styled SVG Blueprint Placeholder */}
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-[#252A32] border border-[#FF6B1A]/40 flex items-center justify-center text-[#FF6B1A] group-hover:scale-110 transition-transform">
                        <Camera className="w-6 h-6" />
                      </div>

                      <div className="space-y-0.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#FF6B1A]/20 text-[#FF6B1A] border border-[#FF6B1A]/30">
                          Shop Photo Coming Soon
                        </span>
                        <div className="text-[10px] font-mono text-[#A7AEB8]">
                          {photo.recommendedSize} · 4:3
                        </div>
                      </div>
                    </div>

                    {/* Corner technical brackets */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#FF6B1A]/60" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#FF6B1A]/60" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#FF6B1A]/60" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#FF6B1A]/60" />
                  </div>

                  {/* Tile Caption */}
                  <div className="p-3.5 bg-white border-t border-[#E5E7EB]">
                    <h4
                      className="text-base font-bold uppercase text-[#111827] group-hover:text-[#FF6B1A] transition-colors"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {photo.title}
                    </h4>
                    <p className="text-xs text-[#6B7280] line-clamp-1 mt-0.5">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row: Exactly 4.4 Google rating, 48 Google reviews, and 1 editable value (NO invented numbers) */}
        <div className="bg-[#101214] text-white rounded-xl p-8 border border-[#252A32] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#252A32]">
            {/* Stat 1: 4.4 Google rating */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0">
              <div className="flex items-center gap-3">
                <span
                  className="text-5xl lg:text-6xl font-extrabold text-white font-mono tabular-nums"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  4.4
                </span>
                <div className="flex flex-col items-start">
                  <StarRating rating={SITE_CONFIG.ratings.googleRating} size="md" />
                  <span className="text-xs text-[#FFC83D] font-mono font-bold mt-1 uppercase tracking-wider">
                    Out of 5.0 Stars
                  </span>
                </div>
              </div>
              <p
                className="text-sm font-bold uppercase tracking-wider text-[#A7AEB8] mt-2"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Google Verified Rating
              </p>
            </div>

            {/* Stat 2: 48 Google reviews */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 md:pl-8">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-5xl lg:text-6xl font-extrabold text-[#FF6B1A] font-mono tabular-nums"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  48
                </span>
                <span className="text-base text-[#A7AEB8] font-bold uppercase tracking-wider">
                  Reviews
                </span>
              </div>
              <p
                className="text-sm font-bold uppercase tracking-wider text-[#A7AEB8] mt-2"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Local Driver Feedback
              </p>
            </div>

            {/* Stat 3: 1 Editable Value as required ("Years in business: [edit]") */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 md:pl-8">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {SITE_CONFIG.business.foundedYearText}
                </span>
              </div>
              <p
                className="text-sm font-bold uppercase tracking-wider text-[#FF6B1A] mt-2"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Richmond, BC Workshop
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
