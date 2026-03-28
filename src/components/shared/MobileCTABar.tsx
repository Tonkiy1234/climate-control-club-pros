/**
 * MobileCTABar — Sticky Mobile Bottom CTA Bar
 * ============================================
 * Appears only on small screens (hidden on md and above).
 * Shows: Call Now + Request Free Estimate
 * Shows "Book Online" automatically if BOOKING_ENABLED = true in leadSettings.ts
 *
 * To hide: remove <MobileCTABar /> from src/App.tsx
 * To edit labels: update CTA_LABELS in src/config/leadSettings.ts
 */

import {
  LEAD_MODE,
  EXTERNAL_LEAD_URL,
  EXTERNAL_OPEN_NEW_TAB,
  BOOKING_ENABLED,
  BOOKING_URL,
  CTA_LABELS,
} from "@/config/leadSettings";
import { siteConfig } from "@/config/site";
import { Phone, FileText, Calendar } from "lucide-react";

export function MobileCTABar() {
  const bookCols = BOOKING_ENABLED && BOOKING_URL ? 3 : 2;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className={`grid grid-cols-${bookCols} divide-x divide-slate-200`}>

        {/* Call Now — always shown */}
        <a
          href={siteConfig.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-3.5 px-2 text-primary hover:bg-primary/5 transition-colors active:bg-primary/10"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-semibold">{CTA_LABELS.call}</span>
        </a>

        {/* Request Free Estimate */}
        <EstimateMobileButton />

        {/* Book Online — only when BOOKING_ENABLED = true */}
        {BOOKING_ENABLED && BOOKING_URL && (
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3.5 px-2 bg-primary/5 text-primary hover:bg-primary/10 transition-colors active:bg-primary/15"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-semibold">{CTA_LABELS.book}</span>
          </a>
        )}

      </div>
    </div>
  );
}

function EstimateMobileButton() {
  const label = CTA_LABELS.estimate;
  const shortLabel = "Free Estimate";

  const cls =
    "flex flex-col items-center justify-center gap-1 py-3.5 px-2 bg-primary text-white hover:bg-primary/90 transition-colors active:bg-primary/80";

  if (LEAD_MODE === "external" && EXTERNAL_LEAD_URL) {
    return (
      <a
        href={EXTERNAL_LEAD_URL}
        target={EXTERNAL_OPEN_NEW_TAB ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={cls}
      >
        <FileText className="w-5 h-5" />
        <span className="text-xs font-semibold">{shortLabel}</span>
      </a>
    );
  }

  // embed or fallback — go to contact page
  return (
    <a href="/contact#estimate" className={cls}>
      <FileText className="w-5 h-5" />
      <span className="text-xs font-semibold">{shortLabel}</span>
    </a>
  );
}
