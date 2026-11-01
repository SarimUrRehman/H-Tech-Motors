import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'hero';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'header' }) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Industrial Hexagon + Gear + H Monogram */}
      <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(255,107,26,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Heavy Hex Nut Outer Shell */}
          <polygon
            points="32,4 56,18 56,46 32,60 8,46 8,18"
            fill="#181B1F"
            stroke="#20242A"
            strokeWidth="2.5"
          />
          {/* Safety Orange Accent Rim */}
          <polygon
            points="32,9 52,20.5 52,43.5 32,55 12,43.5 12,20.5"
            stroke="#FF6B1A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Mechanical Gear Cog Teeth (subtle 8-tooth ring) */}
          <circle
            cx="32"
            cy="32"
            r="16"
            stroke="#2A2F38"
            strokeWidth="3"
            strokeDasharray="4 4"
          />
          {/* Bold Automotive "H" Monogram with Central Torque Dot */}
          <path
            d="M23 22 L23 42 M41 22 L41 42 M23 32 L41 32"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="32" r="3.2" fill="#FF6B1A" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-display font-extrabold tracking-wider text-white uppercase ${
              variant === 'footer' ? 'text-xl' : 'text-xl md:text-2xl'
            }`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            H TECH MOTOR
          </span>
          <span
            className="text-xs font-bold text-[#FF6B1A] uppercase tracking-wider"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            INC.
          </span>
        </div>
        <span
          className="text-[10px] md:text-[11px] font-semibold text-[#A7AEB8] uppercase tracking-[0.22em] mt-0.5"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Auto Repair · Richmond, BC
        </span>
      </div>
    </div>
  );
};
