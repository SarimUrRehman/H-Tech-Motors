import React from 'react';
import { SITE_CONFIG, ReviewItem } from '../config/siteConfig';
import { StarRating } from './StarRating';
import { ExternalLink, CheckCircle, Quote, MessageSquare } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-[#101214] py-16 lg:py-24 border-b border-[#1C2026] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Summary Header Block */}
        <div className="bg-[#181B1F] border border-[#252A32] rounded-xl p-8 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Massive 4.4 Score Display */}
              <div className="flex items-baseline gap-3">
                <span
                  className="text-6xl sm:text-7xl font-extrabold text-white font-mono tabular-nums leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {SITE_CONFIG.ratings.googleRating.toFixed(1)}
                </span>
                <span className="text-xl text-[#A7AEB8] font-bold">/ 5.0</span>
              </div>

              {/* Exact Star Rendering & Review Count */}
              <div className="flex flex-col space-y-1.5 border-l-0 sm:border-l sm:border-[#2A2F38] sm:pl-6">
                <div className="flex items-center gap-3">
                  <StarRating rating={SITE_CONFIG.ratings.googleRating} size="lg" />
                </div>
                <span className="text-base text-white font-semibold">
                  {SITE_CONFIG.ratings.summaryText}
                </span>
                <span className="text-xs text-[#A7AEB8] font-mono">
                  Verified customer feedback for H Tech Motor INC
                </span>
              </div>
            </div>

            {/* Read our reviews on Google Button with Editable URL */}
            <div className="shrink-0">
              <a
                href={SITE_CONFIG.ratings.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#20242A] hover:bg-[#2A313C] text-white hover:text-[#FF6B1A] border border-[#2A2F38] hover:border-[#FF6B1A]/50 text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem' }}
              >
                <span>Read Our Reviews on Google</span>
                <ExternalLink className="w-4 h-4 text-[#FF6B1A]" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Heading & Subheading */}
        <div className="flex flex-col items-start mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF6B1A] mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>REAL LOCAL EXPERIENCES</span>
          </div>

          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {SITE_CONFIG.reviewsData.heading}
          </h2>

          <p className="mt-2 text-[#A7AEB8] text-base">
            {SITE_CONFIG.reviewsData.subheading}
          </p>
        </div>

        {/* 3 Clearly Labelled Placeholder Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONFIG.reviewsData.items.map((review: ReviewItem, idx: number) => (
            <div
              key={review.id}
              className="bg-[#181B1F] border border-[#252A32] hover:border-[#FF6B1A]/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 relative group"
            >
              {/* Top Placeholder Label as specified in prompt */}
              <div className="flex items-center justify-between border-b border-[#252A32] pb-3 mb-4 text-[11px] font-mono text-[#A7AEB8]">
                <span className="text-[#FF6B1A] font-semibold uppercase tracking-wider">
                  [Google Review Placeholder]
                </span>
                <span>{review.dateAgo}</span>
              </div>

              <div>
                {/* Star Rating for this review */}
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={review.rating} size="sm" />
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Service Tag */}
                <div className="text-xs font-mono text-[#FFC83D] mb-3">
                  Service: {review.serviceType}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#E5E7EB] leading-relaxed relative italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Initial */}
              <div className="mt-6 pt-4 border-t border-[#252A32] flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#20242A] border border-[#2A2F38] text-white font-bold flex items-center justify-center font-mono text-sm">
                  {review.author.slice(0, 1)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase">
                    {review.author}
                  </div>
                  <div className="text-xs text-[#A7AEB8]">Richmond Driver</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for the owner on how to edit reviews */}
        <div className="mt-8 text-center text-xs text-[#A7AEB8] font-mono">
          * Website owner tip: You can copy and paste your actual Google review texts in{' '}
          <code className="text-[#FF6B1A]">src/config/siteConfig.ts</code>.
        </div>
      </div>
    </section>
  );
};
