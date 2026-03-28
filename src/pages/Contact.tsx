/**
 * CONTACT PAGE
 * ============
 * Lead capture page built around Housecall Pro workflow.
 *
 * What to edit:
 * - Lead form mode (embed / external / fallback) → src/config/leadSettings.ts
 * - Phone, email, hours → src/config/site.ts
 * - Heading copy → edit the JSX text below
 */

import { SEO } from "@/components/SEO";
import { EstimateSection, BookingSection } from "@/components/shared/EstimateSection";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export function Contact() {
  return (
    <>
      <SEO {...pageMeta.contact} />
      <div className="pt-16 pb-24 md:pb-0">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <div className="bg-gradient-to-br from-navy to-primary py-16 text-center">
          {/* EDIT: Page headline and subheading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Request Your Free Estimate
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto px-4">
            Serving homeowners in Kirkland and Bellevue. Tell us about your mini split
            project and we'll be in touch the same day.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* ── LEFT / MAIN COLUMN ────────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Call Now card */}
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-5 bg-primary text-white rounded-xl p-6 hover:bg-primary/90 transition-colors group shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  {/* EDIT: Call card headline */}
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-0.5">
                    Prefer to talk first?
                  </div>
                  <div className="text-xl font-bold">{siteConfig.phone}</div>
                  <div className="text-white/70 text-sm">
                    {siteConfig.hours.display} &mdash; {siteConfig.hours.sunday}
                  </div>
                </div>
                <Phone className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* ── ESTIMATE SECTION ─────────────────────────────────
                  Renders Mode A / B / C based on leadSettings.ts
                  To change how this works, edit LEAD_MODE in:
                  src/config/leadSettings.ts
                  ──────────────────────────────────────────────────── */}
              <EstimateSection />

              {/* ── BOOKING SECTION ───────────────────────────────────
                  Only shows when BOOKING_ENABLED = true in leadSettings.ts
                  ──────────────────────────────────────────────────── */}
              <BookingSection />

            </div>

            {/* ── RIGHT / SIDEBAR ───────────────────────────────── */}
            <div className="space-y-6">

              {/* Contact info card */}
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h3 className="font-semibold text-navy mb-5">Contact Information</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={siteConfig.phoneHref}
                      className="flex items-start gap-3 hover:text-primary transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">Phone</div>
                        <div className="font-semibold text-navy">{siteConfig.phone}</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.emailHref}
                      className="flex items-start gap-3 hover:text-primary transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">Email</div>
                        <div className="font-semibold text-navy text-sm break-all">{siteConfig.email}</div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">Service Area</div>
                      <div className="font-semibold text-navy">Kirkland &amp; Bellevue, WA</div>
                      <div className="text-xs text-slate-500 mt-0.5">+ surrounding Eastside communities</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">Hours</div>
                      <div className="font-semibold text-navy">{siteConfig.hours.display}</div>
                      <div className="text-xs text-slate-500">{siteConfig.hours.sunday}</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What to expect */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                {/* EDIT: What to expect heading */}
                <h3 className="font-semibold text-navy mb-4">What Happens Next</h3>
                <ul className="space-y-3">
                  {[
                    "We review your request same day",
                    "A technician calls to discuss your project",
                    "We schedule a free in-home walkthrough",
                    "You receive a written estimate — no pressure",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust signals */}
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h3 className="font-semibold text-navy mb-4">Why Homeowners Trust Us</h3>
                <ul className="space-y-2.5">
                  {[
                    "Licensed & insured in Washington State",
                    "Free written estimates — no surprises",
                    "Clean workmanship on every install",
                    "Serving Kirkland & Bellevue homeowners",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
