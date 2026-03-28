/**
 * LeadCTA — Smart CTA Button
 * ==========================
 * A reusable CTA button that automatically routes to the correct
 * destination based on LEAD_MODE in src/config/leadSettings.ts.
 *
 * Usage:
 *   <LeadCTA />                        — default "Request Free Estimate"
 *   <LeadCTA variant="call" />         — "Call Now" phone link
 *   <LeadCTA variant="book" />         — "Book Online" (hidden if disabled)
 *   <LeadCTA label="Custom Label" />   — override button text
 *   <LeadCTA style="outline" />        — outline style variant
 */

import { Link } from "wouter";
import { Phone, ArrowRight, Calendar } from "lucide-react";
import {
  LEAD_MODE,
  EXTERNAL_LEAD_URL,
  EXTERNAL_OPEN_NEW_TAB,
  BOOKING_ENABLED,
  BOOKING_URL,
  CTA_LABELS,
} from "@/config/leadSettings";
import { siteConfig } from "@/config/site";

type CTAVariant = "estimate" | "call" | "book";
type CTAStyle = "solid" | "outline" | "ghost";

interface LeadCTAProps {
  variant?: CTAVariant;
  label?: string;
  style?: CTAStyle;
  className?: string;
  /** For estimate buttons: override where "embed" mode scrolls to */
  embedAnchor?: string;
}

/**
 * Returns the correct href / onClick for the estimate CTA based on LEAD_MODE.
 */
function getEstimateDestination(): { href: string; external: boolean } {
  if (LEAD_MODE === "external" && EXTERNAL_LEAD_URL) {
    return { href: EXTERNAL_LEAD_URL, external: EXTERNAL_OPEN_NEW_TAB };
  }
  // "embed" mode → go to contact page; EstimateSection is there
  // "fallback" mode → go to contact page
  return { href: "/contact", external: false };
}

const baseClass =
  "inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-md transition-all duration-200 text-sm";

const styleMap: Record<CTAStyle, string> = {
  solid:   "bg-white text-primary hover:bg-slate-100 shadow-sm",
  outline: "border-2 border-white text-white hover:bg-white/10",
  ghost:   "border-2 border-primary text-primary hover:bg-primary/5",
};

const solidDarkBg: Record<CTAStyle, string> = {
  solid:   "bg-primary text-white hover:bg-primary/90 shadow-sm",
  outline: "border-2 border-primary text-primary hover:bg-primary/5",
  ghost:   "border-2 border-primary text-primary hover:bg-primary/5",
};

export function LeadCTA({
  variant = "estimate",
  label,
  style = "solid",
  className = "",
  embedAnchor = "#estimate",
}: LeadCTAProps) {

  // ── CALL NOW ─────────────────────────────────────────────────────────────
  if (variant === "call") {
    return (
      <a
        href={siteConfig.phoneHref}
        className={`${baseClass} ${styleMap[style]} ${className}`}
      >
        <Phone className="w-4 h-4 flex-shrink-0" />
        {label ?? siteConfig.phone}
      </a>
    );
  }

  // ── BOOK ONLINE ───────────────────────────────────────────────────────────
  if (variant === "book") {
    if (!BOOKING_ENABLED || !BOOKING_URL) return null;
    return (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${styleMap[style]} ${className}`}
      >
        <Calendar className="w-4 h-4 flex-shrink-0" />
        {label ?? CTA_LABELS.book}
      </a>
    );
  }

  // ── REQUEST FREE ESTIMATE ─────────────────────────────────────────────────
  const { href, external } = getEstimateDestination();

  // Embed mode: scroll to the embed section on the same page or /contact
  if (LEAD_MODE === "embed") {
    return (
      <a
        href={`/contact${embedAnchor}`}
        className={`${baseClass} ${styleMap[style]} ${className}`}
      >
        {label ?? CTA_LABELS.estimate}
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${styleMap[style]} ${className}`}
      >
        {label ?? CTA_LABELS.estimate}
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClass} ${styleMap[style]} ${className}`}
    >
      {label ?? CTA_LABELS.estimate}
      <ArrowRight className="w-4 h-4 flex-shrink-0" />
    </Link>
  );
}

/**
 * LeadCTADark — Same as LeadCTA but styled for dark/primary-colored backgrounds.
 * Use on white or light sections (hero copy areas, service cards, etc.)
 */
export function LeadCTADark({
  variant = "estimate",
  label,
  style = "solid",
  className = "",
}: LeadCTAProps) {
  if (variant === "call") {
    return (
      <a
        href={siteConfig.phoneHref}
        className={`${baseClass} ${solidDarkBg[style]} ${className}`}
      >
        <Phone className="w-4 h-4 flex-shrink-0" />
        {label ?? siteConfig.phone}
      </a>
    );
  }

  if (variant === "book") {
    if (!BOOKING_ENABLED || !BOOKING_URL) return null;
    return (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${solidDarkBg[style]} ${className}`}
      >
        <Calendar className="w-4 h-4 flex-shrink-0" />
        {label ?? CTA_LABELS.book}
      </a>
    );
  }

  const { href, external } = getEstimateDestination();

  if (LEAD_MODE === "embed") {
    return (
      <a
        href="/contact#estimate"
        className={`${baseClass} ${solidDarkBg[style]} ${className}`}
      >
        {label ?? CTA_LABELS.estimate}
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${solidDarkBg[style]} ${className}`}
      >
        {label ?? CTA_LABELS.estimate}
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClass} ${solidDarkBg[style]} ${className}`}
    >
      {label ?? CTA_LABELS.estimate}
      <ArrowRight className="w-4 h-4 flex-shrink-0" />
    </Link>
  );
}
