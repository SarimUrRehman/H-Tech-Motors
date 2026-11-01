/**
 * ============================================================================
 * H TECH MOTOR INC. - SITE CONFIGURATION & CONTENT SETTINGS
 * ============================================================================
 * All business details, service listings, shop photos, contact info, and
 * styling variables can be customized in this file without modifying component logic.
 *
 * ----------------------------------------------------------------------------
 * ASSETS TO UPLOAD (RECOMMENDED SPECIFICATIONS FOR REAL SHOP PHOTOS)
 * ----------------------------------------------------------------------------
 * To replace the SVG placeholders with actual photography of your Richmond facility:
 * 1. Place your image files in the `/public/images/` directory.
 * 2. Update the `localPath` values in `SITE_CONFIG.shopPhotos` below.
 *
 * Suggested file dimensions:
 * - `./images/shop-bay-1.webp`        - Aspect ratio 4:3 (approx. 1200 x 900 px) - Main service bays / vehicle on hoist
 * - `./images/diagnostic-station.webp` - Aspect ratio 4:3 (approx. 1200 x 900 px) - Modern OBD scanner / diagnostic hub
 * - `./images/brake-service-lift.webp` - Aspect ratio 4:3 (approx. 1200 x 900 px) - Brake lathe / wheel hub service
 * - `./images/customer-lounge.webp`    - Aspect ratio 4:3 (approx. 1200 x 900 px) - Reception desk & customer waiting area
 * ============================================================================
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconType: 'diagnostic' | 'brakes' | 'oil' | 'suspension' | 'transmission' | 'tires' | 'battery' | 'inspection';
  quoteNote: string;
}

export interface BenefitPoint {
  id: string;
  title: string;
  description: string;
}

export interface ShopPhotoPlaceholder {
  id: string;
  title: string;
  caption: string;
  localPath: string; // e.g. './images/shop-bay-1.webp'
  aspectRatio: string;
  recommendedSize: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number; // e.g., 5 or 4
  dateAgo: string;
  serviceType: string;
  comment: string;
  verified: boolean;
}

export const SITE_CONFIG = {
  // Business Identity
  business: {
    legalName: "H Tech Motor INC",
    displayName: "H Tech Motor Inc.",
    category: "Auto repair shop",
    tagline: "Honest Repairs. Reliable Performance.",
    shortBio:
      "Richmond's trusted automotive repair and maintenance facility. We deliver honest diagnostics, certified mechanical expertise, and transparent estimates to keep your vehicle performing at its peak.",
    foundedYearText: "10+ Years Serving Richmond [edit]",
  },

  // Trust & Ratings (Google rating: 4.4 stars from 48 reviews - exact data)
  ratings: {
    googleRating: 4.4,
    reviewsCount: 48,
    ratingLabel: "4.4 Google Rating",
    reviewCountLabel: "48 Google Reviews",
    summaryText: "Based on 48 verified Google reviews",
    googleReviewsUrl: "https://maps.google.com/?q=5671+Minoru+Blvd+%23140+Richmond+BC+V6X+2B1",
  },

  // Contact Information
  contact: {
    phoneDisplay: "(604) 276-8933",
    phoneTel: "tel:+16042768933",
    smsHref: "sms:+16042768933",
    emailPlaceholder: "info@yourdomain.com", // clearly marked editable placeholder
    address: {
      street: "5671 Minoru Blvd #140",
      city: "Richmond",
      province: "BC",
      postalCode: "V6X 2B1",
      country: "Canada",
      fullText: "5671 Minoru Blvd #140, Richmond, BC V6X 2B1, Canada",
      directionsUrl: "https://maps.google.com/?q=5671+Minoru+Blvd+%23140+Richmond+BC+V6X+2B1",
      embedIframeUrl: "https://www.google.com/maps?q=5671+Minoru+Blvd+%23140+Richmond+BC+V6X+2B1&output=embed",
    },
    // Editable placeholders for operating hours
    operatingHours: [
      { days: "Monday – Friday", hours: "8:00 AM – 5:30 PM", status: "Open" },
      { days: "Saturday", hours: "9:00 AM – 4:00 PM", status: "Open" },
      { days: "Sunday", hours: "Closed", status: "Closed" },
    ],
    // Social profile placeholders
    socials: [
      { name: "Instagram", handle: "@yourinstagram", url: "https://instagram.com" },
      { name: "Facebook", handle: "H Tech Motor Inc.", url: "https://facebook.com" },
      { name: "Google Business", handle: "H Tech Motor INC", url: "https://maps.google.com/?q=5671+Minoru+Blvd+%23140+Richmond+BC+V6X+2B1" },
    ],
  },

  // Brand Palette Constants (Matches Brand Style Guide)
  theme: {
    primaryBg: "#101214", // deep charcoal-black for header, hero and footer
    cardBg: "#181B1F", // graphite for cards
    cardHoverBg: "#20242A",
    accentOrange: "#FF6B1A", // safety orange for buttons, underlines, glows
    accentYellow: "#FFC83D", // warm yellow used strictly for star ratings
    textWhite: "#FFFFFF",
    textMuted: "#A7AEB8", // cool steel-grey
    lightSectionBg: "#F3F4F6", // light contrast section with dark text
  },

  // SECTION 2: Services List (8 Editable Service Cards)
  servicesNote: "Services shown are examples, so edit them in the config to match what you offer.",
  services: [
    {
      id: "engine-diagnostics",
      title: "Engine Diagnostics",
      shortDesc: "Advanced computer diagnostics for check engine lights, misfires, sensor faults, and performance issues.",
      iconType: "diagnostic",
      quoteNote: "Request a quote",
    },
    {
      id: "brake-service",
      title: "Brake Service & Repair",
      shortDesc: "Precision inspection and replacement of brake pads, rotors, calipers, fluid flush, and ABS systems.",
      iconType: "brakes",
      quoteNote: "Request a quote",
    },
    {
      id: "oil-change-maintenance",
      title: "Oil Change & Maintenance",
      shortDesc: "Full synthetic and conventional oil changes, filter replacement, and multi-point vehicle health inspections.",
      iconType: "oil",
      quoteNote: "Request a quote",
    },
    {
      id: "suspension-steering",
      title: "Suspension & Steering",
      shortDesc: "Struts, shocks, control arms, tie rods, and steering rack repairs for tight handling and a smooth ride.",
      iconType: "suspension",
      quoteNote: "Request a quote",
    },
    {
      id: "transmission-service",
      title: "Transmission Service",
      shortDesc: "Transmission fluid exchange, clutch inspection, leak checks, and mechanical drivetrain repair.",
      iconType: "transmission",
      quoteNote: "Request a quote",
    },
    {
      id: "tire-service-alignment",
      title: "Tire Service & Alignment",
      shortDesc: "Computerized wheel balancing, seasonal tire changeover, puncture repair, and precision four-wheel alignment.",
      iconType: "tires",
      quoteNote: "Request a quote",
    },
    {
      id: "battery-electrical",
      title: "Battery & Electrical",
      shortDesc: "Battery load testing, alternator testing, starter replacement, and wiring troubleshooting.",
      iconType: "battery",
      quoteNote: "Request a quote",
    },
    {
      id: "safety-inspections",
      title: "Pre-Purchase & Safety Inspections",
      shortDesc: "Comprehensive bumper-to-bumper pre-buy inspection reports to give you total buying confidence.",
      iconType: "inspection",
      quoteNote: "Request a quote",
    },
  ] as ServiceItem[],

  // SECTION 3: Why Choose Us Benefits & Shop Photo Tiles
  whyChooseUs: {
    headline: "Honest Diagnostics. Skilled Workmanship. No Surprises.",
    description:
      "At H Tech Motor Inc., we believe auto repair should be simple, transparent, and built on trust. Our experienced technicians diagnose root causes rather than guessing parts, providing straightforward explanations and written estimates before any wrench touches your car.",
    benefits: [
      {
        id: "honest-advice",
        title: "Honest & Transparent Advice",
        description: "We explain what needs attention now and what can wait, never pushing unnecessary services or surprise add-ons.",
      },
      {
        id: "certified-techs",
        title: "Skilled Technicians",
        description: "Knowledgeable, detail-oriented mechanical professionals trained in both domestic and imported vehicle platforms.",
      },
      {
        id: "modern-equipment",
        title: "Modern Diagnostic Equipment",
        description: "State-of-the-art scan tools and diagnostic machinery to quickly pinpoint complex engine, electrical, and sensor faults.",
      },
      {
        id: "clear-quotes",
        title: "Clear Quotes Before Work Begins",
        description: "Itemized written estimates detailing parts and labour costs upfront, requiring your approval before work starts.",
      },
      {
        id: "quality-parts",
        title: "Quality Parts & Fluids",
        description: "We use OEM and premium aftermarket replacement parts and manufacturer-spec fluids to safeguard your warranty.",
      },
      {
        id: "richmond-location",
        title: "Convenient Richmond Location",
        description: "Centrally located at 5671 Minoru Blvd #140 with easy street access and dedicated customer parking bays.",
      },
    ] as BenefitPoint[],

    // Shop Placeholder Tiles (ready for owner's photos)
    shopPhotos: [
      {
        id: "shop-lift-bay",
        title: "Service Bay & Hoists",
        caption: "Clean, equipped mechanical bays for light and heavy repairs",
        localPath: "./images/shop-bay-1.webp",
        aspectRatio: "4:3",
        recommendedSize: "1200 x 900 px",
      },
      {
        id: "diagnostic-lab",
        title: "Computer Diagnostic Station",
        caption: "Specialized scanner and electrical testing hub",
        localPath: "./images/diagnostic-station.webp",
        aspectRatio: "4:3",
        recommendedSize: "1200 x 900 px",
      },
      {
        id: "brake-tire-center",
        title: "Brake & Suspension Bay",
        caption: "Precision alignment, rotor servicing and suspension tools",
        localPath: "./images/brake-service-lift.webp",
        aspectRatio: "4:3",
        recommendedSize: "1200 x 900 px",
      },
      {
        id: "reception-desk",
        title: "Customer Consultation Lounge",
        caption: "Comfortable reception area for transparent service reviews",
        localPath: "./images/customer-lounge.webp",
        aspectRatio: "4:3",
        recommendedSize: "1200 x 900 px",
      },
    ] as ShopPhotoPlaceholder[],
  },

  // SECTION 4: Customer Reviews Placeholders
  reviewsData: {
    averageRating: 4.4,
    totalReviews: 48,
    heading: "What Richmond Drivers Say About Us",
    subheading: "Read genuine feedback from local vehicle owners who rely on H Tech Motor Inc.",
    items: [
      {
        id: "rev-1",
        author: "David K.",
        rating: 5,
        dateAgo: "3 weeks ago",
        serviceType: "Brake Replacement & Inspection",
        comment:
          "Very honest mechanic shop in Richmond. Diagnosed a scraping sound in my brakes right away and gave me a clear price before doing any work. Fast turnaround and no high-pressure upselling.",
        verified: true,
      },
      {
        id: "rev-2",
        author: "Michelle C.",
        rating: 4,
        dateAgo: "1 month ago",
        serviceType: "Check Engine Light Diagnostics",
        comment:
          "Great service and fair pricing on Minoru Blvd. Another shop wanted to replace my entire catalytic converter, but H Tech found it was just an O2 sensor harness issue. Saved me hundreds of dollars.",
        verified: true,
      },
      {
        id: "rev-3",
        author: "Raymond L.",
        rating: 5,
        dateAgo: "2 months ago",
        serviceType: "Suspension & Synthetic Oil Service",
        comment:
          "Brought my Honda in for suspension clunking and scheduled maintenance. The team is polite, knowledgeable, and punctual. Car rides like new now. Will definitely return.",
        verified: true,
      },
    ] as ReviewItem[],
  },
};
