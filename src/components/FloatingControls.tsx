import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Phone, ArrowUp, Info, X, ExternalLink } from 'lucide-react';

export const FloatingControls: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showOwnerGuide, setShowOwnerGuide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Circular Orange Call Button (Mobile & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 sm:hidden">
        <a
          href={SITE_CONFIG.contact.phoneTel}
          className="w-14 h-14 rounded-full bg-[#FF6B1A] text-[#101214] shadow-2xl shadow-[#FF6B1A]/40 flex items-center justify-center transition-transform active:scale-90 hover:scale-105"
          aria-label="Call H Tech Motor Inc. at (604) 276-8933"
        >
          <Phone className="w-6 h-6 fill-current stroke-none" />
          <span className="sr-only">Call H Tech Motor Inc.</span>
        </a>
      </div>

      {/* Floating Action Cluster (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        {/* Owner Guide Toggle Button */}
        <button
          type="button"
          onClick={() => setShowOwnerGuide(true)}
          className="bg-[#181B1F] hover:bg-[#20242A] text-[#A7AEB8] hover:text-[#FF6B1A] border border-[#252A32] text-xs font-mono px-3 py-2 rounded-full shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
          title="How to edit content & upload shop photos"
          aria-label="Website configuration guide"
        >
          <Info className="w-3.5 h-3.5 text-[#FF6B1A]" />
          <span>Config Guide</span>
        </button>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#181B1F] hover:bg-[#252A32] text-white hover:text-[#FF6B1A] border border-[#2A2F38] flex items-center justify-center shadow-xl transition-all duration-200 cursor-pointer animate-in fade-in"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Owner Customization Guide Modal */}
      {showOwnerGuide && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="guide-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#181B1F] border border-[#2A2F38] rounded-xl max-w-xl w-full p-6 text-white shadow-2xl relative animate-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setShowOwnerGuide(false)}
              className="absolute top-4 right-4 text-[#A7AEB8] hover:text-white p-1 rounded hover:bg-[#20242A]"
              aria-label="Close guide modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 pb-3 border-b border-[#252A32]">
              <div className="w-8 h-8 rounded bg-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A]">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h3
                  id="guide-title"
                  className="text-xl font-bold uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  H Tech Motor Inc. Configuration Guide
                </h3>
                <p className="text-xs text-[#A7AEB8]">
                  How to customize content, services, colors, and shop photos
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-4 text-xs text-[#A7AEB8] leading-relaxed max-h-[70vh] overflow-y-auto pr-1">
              {/* Point 1 */}
              <div className="bg-[#101214] p-3 rounded border border-[#20242A]">
                <h4 className="font-bold text-white uppercase text-xs mb-1 flex items-center gap-1.5">
                  <span className="text-[#FF6B1A]">1.</span> Single Configuration File
                </h4>
                <p>
                  All editable business details (hours, email, services list, reviews, tagline, and phone numbers) are centralized in:
                  <code className="text-[#FF6B1A] font-mono block mt-1">/src/config/siteConfig.ts</code>
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-[#101214] p-3 rounded border border-[#20242A]">
                <h4 className="font-bold text-white uppercase text-xs mb-1 flex items-center gap-1.5">
                  <span className="text-[#FF6B1A]">2.</span> How to Replace SVG Tiles with Real Photos
                </h4>
                <p>
                  Place your photos in the <code className="text-white">public/images/</code> folder and update the filenames in <code className="text-[#FF6B1A]">siteConfig.ts</code>:
                </p>
                <ul className="list-disc list-inside mt-1.5 space-y-1 font-mono text-[11px] text-[#A7AEB8]">
                  <li>./images/shop-bay-1.webp (Aspect ratio 4:3)</li>
                  <li>./images/diagnostic-station.webp (Aspect ratio 4:3)</li>
                  <li>./images/brake-service-lift.webp (Aspect ratio 4:3)</li>
                  <li>./images/customer-lounge.webp (Aspect ratio 4:3)</li>
                </ul>
              </div>

              {/* Point 3 */}
              <div className="bg-[#101214] p-3 rounded border border-[#20242A]">
                <h4 className="font-bold text-white uppercase text-xs mb-1 flex items-center gap-1.5">
                  <span className="text-[#FF6B1A]">3.</span> Star Rating & Google Reviews
                </h4>
                <p>
                  The Google rating is locked to exactly <strong className="text-[#FFC83D]">4.4 stars (48 reviews)</strong>. You can update the testimonial card quotes directly in the <code className="text-[#FF6B1A]">reviewsData.items</code> array.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#252A32] flex justify-end">
              <button
                type="button"
                onClick={() => setShowOwnerGuide(false)}
                className="bg-[#FF6B1A] hover:bg-[#e85c0f] text-[#101214] font-bold text-xs uppercase px-4 py-2 rounded transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
