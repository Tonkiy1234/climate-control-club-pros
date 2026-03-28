/**
 * CTABanner — Sitewide CTA Section
 * ==================================
 * Used at the bottom of service pages, city pages, and the homepage.
 * "Request Free Estimate" button uses LEAD_MODE from leadSettings.ts automatically.
 * Phone number comes from siteConfig.ts automatically.
 *
 * To edit: pass headline, subtext, and primaryLabel as props.
 * To change lead destination: edit LEAD_MODE in src/config/leadSettings.ts
 */

import { LeadCTA } from "@/components/shared/LeadCTA";
import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";
import { BOOKING_ENABLED, BOOKING_URL, CTA_LABELS } from "@/config/leadSettings";
import { Calendar } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
}

export function CTABanner({
  headline = "Ready to Upgrade Your Home Comfort?",
  subtext = "Serving homeowners in Kirkland and Bellevue. Free estimates, honest pricing, clean work from start to finish.",
  primaryLabel,
}: CTABannerProps) {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{headline}</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">

          {/* Primary CTA — reads LEAD_MODE from leadSettings.ts */}
          <LeadCTA
            variant="estimate"
            label={primaryLabel}
            style="solid"
            className="!bg-white !text-primary hover:!bg-slate-100"
          />

          {/* Call Now */}
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors text-sm"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            {siteConfig.phone}
          </a>

          {/* Book Online — only shows when BOOKING_ENABLED = true */}
          {BOOKING_ENABLED && BOOKING_URL && (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white/80 font-semibold px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              <Calendar className="w-4 h-4 flex-shrink-0" />
              {CTA_LABELS.book}
            </a>
          )}

        </div>
      </div>
    </section>
  );
}
