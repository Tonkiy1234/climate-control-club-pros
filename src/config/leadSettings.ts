/**
 * LEAD SETTINGS — Housecall Pro Integration Config
 * =================================================
 * This file controls how all estimate requests, booking CTAs, and
 * lead forms behave across the entire website.
 *
 * Change the settings here and everything updates automatically:
 * - Contact page form section
 * - All "Request Free Estimate" buttons
 * - All "Book Online" buttons
 * - Mobile sticky CTA bar
 * - CTA banners on every page
 *
 * ─────────────────────────────────────────────────────────────
 * HOW TO SET UP HOUSECALL PRO:
 *
 * Step 1 — Choose your mode (see LEAD_MODE below):
 *   "embed"    → paste Housecall Pro embed code into EMBED_CODE
 *   "external" → paste Housecall Pro lead form URL into EXTERNAL_LEAD_URL
 *   "fallback" → no form yet; shows phone/email contact card instead
 *
 * Step 2 — Paste your Housecall Pro values into the placeholders below.
 *
 * Step 3 — Set BOOKING_ENABLED to true and add your booking URL
 *          when you're ready for online booking.
 * ─────────────────────────────────────────────────────────────
 */

/**
 * LEAD MODE
 * ---------
 * Controls how "Request Free Estimate" works across the site.
 *
 * "embed"    → Shows embedded Housecall Pro form on the contact page.
 *              All estimate CTAs scroll down to the embed on /contact.
 *              Set EMBED_CODE below.
 *
 * "external" → All estimate CTAs open an external Housecall Pro URL
 *              (in a new tab or same tab based on EXTERNAL_OPEN_NEW_TAB).
 *              Set EXTERNAL_LEAD_URL below.
 *
 * "fallback" → No form is configured yet. Shows a polished contact card
 *              with phone and email. Use this until you have HCP set up.
 */
export const LEAD_MODE: "embed" | "external" | "fallback" = "fallback";

// ── MODE A: HOUSECALL PRO EMBED ────────────────────────────────────────────
/**
 * Paste your full Housecall Pro lead form embed code here.
 * It will usually look like a <script> tag or <iframe> tag.
 * Example:
 *   '<script src="https://app.housecallpro.com/..."></script>'
 *
 * EDIT: Replace the empty string with your HCP embed code.
 */
export const EMBED_CODE = "";
// ───────────────────────────────────────────────────────────────────────────

// ── MODE B: EXTERNAL HOUSECALL PRO LEAD FORM URL ───────────────────────────
/**
 * Paste the external URL to your Housecall Pro lead form here.
 * This is typically found in your HCP account under:
 *   Settings → Lead Forms → Share Link
 *
 * Example:
 *   "https://app.housecallpro.com/book/climate-control-club-pros/..."
 *
 * EDIT: Replace the empty string with your HCP lead form URL.
 */
export const EXTERNAL_LEAD_URL = "";

/**
 * Set to true to open the external lead form in a new browser tab.
 * Set to false to navigate in the same tab.
 */
export const EXTERNAL_OPEN_NEW_TAB = true;
// ───────────────────────────────────────────────────────────────────────────

// ── ONLINE BOOKING ──────────────────────────────────────────────────────────
/**
 * Set BOOKING_ENABLED to true when you're ready to offer online booking.
 * Paste your Housecall Pro online booking URL into BOOKING_URL.
 * When BOOKING_ENABLED is false, the "Book Online" button is hidden everywhere.
 *
 * EDIT: Set to true and paste your HCP booking URL when ready.
 */
export const BOOKING_ENABLED = false;

/**
 * Your Housecall Pro online booking URL.
 * Found in HCP under: Settings → Online Booking → Share Link
 *
 * EDIT: Replace the empty string with your HCP booking URL.
 */
export const BOOKING_URL = "";
// ───────────────────────────────────────────────────────────────────────────

// ── CTA LABELS ──────────────────────────────────────────────────────────────
/**
 * Controls the text on CTA buttons across the entire site.
 * EDIT: Change labels here to update every button at once.
 */
export const CTA_LABELS = {
  estimate: "Request Your Free Estimate",
  call: "Call Now",
  book: "Book Online",
};
// ───────────────────────────────────────────────────────────────────────────

// ── SUCCESS REDIRECT ────────────────────────────────────────────────────────
/**
 * Where to send users after a successful form submission.
 * Only relevant if you wire up Web3Forms or a custom form later.
 * EDIT: Change to a different path if needed.
 */
export const SUCCESS_URL = "/thank-you";
// ───────────────────────────────────────────────────────────────────────────

/**
 * FUTURE HOUSECALL PRO API INTEGRATION
 * ─────────────────────────────────────
 * When upgrading to Housecall Pro's API plan, the lead submission
 * logic should be added to:
 *   src/lib/hcp.ts   (create this file for API calls)
 *
 * The EstimateSection component (src/components/shared/EstimateSection.tsx)
 * already has a placeholder comment showing where to wire in API calls.
 *
 * API docs: https://developer.housecallpro.com/
 */
