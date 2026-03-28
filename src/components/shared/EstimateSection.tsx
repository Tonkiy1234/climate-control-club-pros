/**
 * EstimateSection — Housecall Pro Integration Component
 * ======================================================
 * This component handles the estimate request section on the Contact page.
 * It automatically renders the correct experience based on LEAD_MODE
 * in src/config/leadSettings.ts.
 *
 * MODE "embed"    → renders EMBED_CODE inside a styled container
 * MODE "external" → renders a premium card with an external link button
 * MODE "fallback" → renders a polished contact card (phone + email)
 *
 * To switch modes: edit LEAD_MODE in src/config/leadSettings.ts
 * To add embed code: paste into EMBED_CODE in src/config/leadSettings.ts
 * To add external URL: paste into EXTERNAL_LEAD_URL in leadSettings.ts
 */

import {
  LEAD_MODE,
  EMBED_CODE,
  EXTERNAL_LEAD_URL,
  EXTERNAL_OPEN_NEW_TAB,
  BOOKING_ENABLED,
  BOOKING_URL,
  CTA_LABELS,
} from "@/config/leadSettings";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Mail,
  ArrowRight,
  Calendar,
  FileText,
  ExternalLink,
} from "lucide-react";

export function EstimateSection() {
  return (
    <div id="estimate" className="scroll-mt-20">
      {LEAD_MODE === "embed" && <EmbedMode />}
      {LEAD_MODE === "external" && <ExternalMode />}
      {LEAD_MODE === "fallback" && <FallbackMode />}
    </div>
  );
}

// ── MODE A: EMBED ─────────────────────────────────────────────────────────────
function EmbedMode() {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-8 pt-8 pb-4 border-b border-slate-100">
        <h2 className="text-xl font-bold text-navy mb-1">Request Your Free Estimate</h2>
        <p className="text-slate-500 text-sm">
          Fill out the form below and we'll follow up the same day — usually within a few hours during business hours.
        </p>
      </div>

      {/* ── HOUSECALL PRO EMBED GOES HERE ──────────────────────────────────
          Paste your Housecall Pro embed code into EMBED_CODE
          in src/config/leadSettings.ts.
          The embed will render inside this styled container.
          ──────────────────────────────────────────────────────────────── */}
      {EMBED_CODE ? (
        <div
          className="p-6"
          dangerouslySetInnerHTML={{ __html: EMBED_CODE }}
        />
      ) : (
        // Shown only in development when embed code is not yet pasted
        <div className="p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-navy mb-2">Online Request Form Coming Soon</h3>
          <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
            Our online estimate request form is almost ready. In the meantime, call or email us
            directly — we respond fast and the process is just as smooth.
          </p>
          <ContactFallbackLinks />
        </div>
      )}
    </div>
  );
}

// ── MODE B: EXTERNAL LINK ─────────────────────────────────────────────────────
function ExternalMode() {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-navy mb-1">Request Your Free Estimate</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Tell us about your home and the spaces you want to condition. We'll follow up the same
            day to discuss your project and schedule a free in-home visit.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 mb-6">
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          The form takes about 2 minutes. We'll review your request, give you a call to talk
          through the details, and schedule a visit at a time that works for you.
        </p>
        <ul className="space-y-2 text-sm text-slate-600 mb-6">
          {[
            "No cost or commitment to request an estimate",
            "We respond same day during business hours",
            "Written estimate provided before any work begins",
            "No pressure, no sales tactics",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        {/* ── HOUSECALL PRO EXTERNAL FORM LINK ──────────────────────────────
            This button opens the URL set in EXTERNAL_LEAD_URL in leadSettings.ts
            ────────────────────────────────────────────────────────────────── */}
        <a
          href={EXTERNAL_LEAD_URL || "#"}
          target={EXTERNAL_OPEN_NEW_TAB ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
        >
          {CTA_LABELS.estimate}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <p className="text-sm text-slate-500 text-center">
        Prefer to talk first?{" "}
        <a href={siteConfig.phoneHref} className="text-primary font-semibold hover:underline">
          Call us directly at {siteConfig.phone}
        </a>
      </p>
    </div>
  );
}

// ── MODE C: FALLBACK ──────────────────────────────────────────────────────────
function FallbackMode() {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-navy mb-1">Request Your Free Estimate</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Tell us about your project and we'll be in touch the same day — usually within a few hours
            during business hours.
          </p>
        </div>
      </div>

      <div className="bg-primary/5 rounded-xl border border-primary/10 p-6 mb-6">
        <p className="text-sm font-medium text-navy mb-1">Online request form coming soon</p>
        <p className="text-slate-500 text-sm leading-relaxed">
          We're setting up our online estimate form. In the meantime, reach us directly — 
          we respond fast and the experience is just as smooth.
        </p>
      </div>

      <ContactFallbackLinks />

      <div className="mt-6 pt-6 border-t border-slate-100">
        <p className="text-xs text-slate-400 text-center">
          We serve homeowners in Kirkland, Bellevue, and throughout the Eastside.
          Free estimates, no obligation.
        </p>
      </div>
    </div>
  );
}

// ── SHARED: CONTACT LINKS ─────────────────────────────────────────────────────
function ContactFallbackLinks() {
  return (
    <div className="space-y-3">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Phone className="w-5 h-5 text-primary" />
        </div>
        <div>
          <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Call Now</div>
          <div className="font-bold text-navy">{siteConfig.phone}</div>
        </div>
        <ArrowRight className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
      <a
        href={siteConfig.emailHref}
        className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Email Us</div>
          <div className="font-bold text-navy text-sm break-all">{siteConfig.email}</div>
        </div>
        <ArrowRight className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  );
}

// ── OPTIONAL: BOOKING SECTION ─────────────────────────────────────────────────
/**
 * BookingSection — renders only when BOOKING_ENABLED is true in leadSettings.ts
 * Add <BookingSection /> anywhere on the Contact page to show a booking card.
 */
export function BookingSection() {
  if (!BOOKING_ENABLED || !BOOKING_URL) return null;

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Calendar className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-navy mb-1">Book Online</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            Ready to schedule? Use our online booking to pick a time that works for your home visit.
          </p>
          {/* ── HOUSECALL PRO BOOKING LINK ──────────────────────────────────
              This button opens the URL set in BOOKING_URL in leadSettings.ts
              ────────────────────────────────────────────────────────────── */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary/5 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            {CTA_LABELS.book}
          </a>
        </div>
      </div>
    </div>
  );
}
