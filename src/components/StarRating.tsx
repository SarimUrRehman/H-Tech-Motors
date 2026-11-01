import React from 'react';

interface StarRatingProps {
  rating?: number; // e.g. 4.4
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 4.4,
  size = 'md',
  showText = false,
  className = '',
}) => {
  // Dimension classes
  const starDimensions = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4.5 h-4.5',
    lg: 'w-6 h-6',
  }[size];

  const textSize = {
    sm: 'text-xs',
    md: 'text-sm font-semibold',
    lg: 'text-xl font-bold',
  }[size];

  // SVG Star Path (standard 5-point star normalized to 24x24)
  const starPath =
    'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

  // Calculate fill for each star
  // For rating 4.4:
  // Star 1: 100%
  // Star 2: 100%
  // Star 3: 100%
  // Star 4: 100%
  // Star 5: 40%
  const stars = [1, 2, 3, 4, 5].map((index) => {
    const fillPercent = Math.max(0, Math.min(100, Math.round((rating - (index - 1)) * 100)));
    return {
      index,
      fillPercent,
    };
  });

  // Unique ID for SVG gradients to prevent DOM collisions
  const gradId = `star-partial-fill-${rating.toString().replace('.', '-')}`;

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className}`}
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      <div className="flex items-center gap-0.5">
        <svg width="0" height="0" className="hidden">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="40%" stopColor="#FFC83D" />
              <stop offset="40%" stopColor="#374151" />
            </linearGradient>
          </defs>
        </svg>

        {stars.map(({ index, fillPercent }) => {
          let fillAttr = 'none';
          let strokeAttr = '#FFC83D';

          if (fillPercent >= 100) {
            fillAttr = '#FFC83D'; // Fully filled warm yellow
          } else if (fillPercent <= 0) {
            fillAttr = '#374151'; // Unfilled muted
            strokeAttr = '#4B5563';
          } else {
            fillAttr = `url(#${gradId})`; // Exact 40% filled star for 4.4
          }

          return (
            <svg
              key={index}
              viewBox="0 0 24 24"
              className={`${starDimensions} shrink-0 drop-shadow-[0_1px_3px_rgba(255,200,61,0.25)]`}
              fill={fillAttr}
              stroke={strokeAttr}
              strokeWidth="0.5"
              strokeLinejoin="round"
            >
              <path d={starPath} />
            </svg>
          );
        })}
      </div>

      {showText && (
        <span className={`text-[#FFC83D] font-mono tabular-nums ${textSize}`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
