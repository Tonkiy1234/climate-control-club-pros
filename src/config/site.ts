/**
 * SITE CONFIGURATION
 * ==================
 * All business info, branding, and settings live here.
 * Edit this file to update company name, phone, email, colors, etc.
 * across the entire website in one place.
 */

export const siteConfig = {
  // ── COMPANY INFO ──────────────────────────────────────────────
  // EDIT: Update these when branding changes
  name: "Climate Control Club Pros",
  nameShort: "CC Club Pros",
  tagline: "Mini Split Specialists for Kirkland & Bellevue",
  description:
    "Premium ductless mini split installation for homeowners who want efficient heating and cooling, clean work, and reliable comfort.",

  // ── CONTACT ───────────────────────────────────────────────────
  // EDIT: Replace with real contact info
  phone: "(425) 555-0188",
  phoneHref: "tel:+14255550188",
  email: "info@climatecontrolclubpros.com",
  emailHref: "mailto:info@climatecontrolclubpros.com",

  // ── ADDRESS ───────────────────────────────────────────────────
  // EDIT: Replace with real address
  address: {
    street: "",
    city: "Kirkland",
    state: "WA",
    zip: "98033",
    full: "Kirkland, WA",
  },

  // ── BUSINESS HOURS ────────────────────────────────────────────
  // EDIT: Update with actual hours
  hours: {
    weekdays: "Mon–Sat 8:00 AM – 6:00 PM",
    sunday: "Closed",
    display: "Mon–Sat 8:00 AM – 6:00 PM",
  },

  // ── SERVICE AREAS ─────────────────────────────────────────────
  // EDIT: Add or remove cities here
  serviceAreas: [
    "Kirkland",
    "Bellevue",
    "Redmond",
    "Kenmore",
    "Bothell",
    "Juanita",
    "Houghton",
    "Medina",
    "Clyde Hill",
    "Yarrow Point",
  ],

  primaryCities: ["Kirkland", "Bellevue"],

  // ── SOCIAL LINKS ──────────────────────────────────────────────
  // EDIT: Replace # with real profile URLs
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
    yelp: "#",
  },

  // ── FINANCING ─────────────────────────────────────────────────
  financing: {
    available: true,
    headline: "Flexible Financing Available",
    subtext: "Get the comfort you need today — pay over time with approved credit.",
    provider: "", // EDIT: e.g. "GreenSky" or "Synchrony"
  },

  // ── BRAND COLORS (used for reference — actual theme in index.css) ──
  // EDIT: Update index.css CSS variables to change theme
  brand: {
    primary: "#1B3A5C",    // Deep Navy Blue
    accent: "#2E86AB",     // Teal Blue
    light: "#F5F8FA",      // Light Gray-Blue
    dark: "#0F2337",       // Dark Navy
    text: "#1A1A2E",       // Near-Black
  },

  // ── SEO DEFAULTS ──────────────────────────────────────────────
  seo: {
    titleSuffix: " | Climate Control Club Pros",
    defaultTitle: "Mini Split Installation Kirkland & Bellevue | Climate Control Club Pros",
    defaultDescription:
      "Licensed mini split installation, replacement, and repair in Kirkland and Bellevue, WA. Fast response, transparent pricing, and clean workmanship. Request a free estimate today.",
    ogImage: "/og-image.jpg", // EDIT: Replace with actual OG image
    siteUrl: "https://climatecontrolclubpros.com", // EDIT: Replace with real domain
  },

  // ── TRUST SIGNALS ─────────────────────────────────────────────
  trust: {
    licensed: true,
    insured: true,
    warrantyYears: 1,
    responseTime: "Same-day response",
    yearsInBusiness: "", // EDIT: e.g. "10+"
  },
} as const;

export type SiteConfig = typeof siteConfig;
