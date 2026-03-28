/**
 * KIRKLAND CITY PAGE
 * ==================
 * All copy lives in this file. To update text, edit the strings below.
 * To update brand name / phone: edit src/config/site.ts
 * SEO title & meta description: edit src/lib/seo.ts → pageMeta.kirkland
 */

import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/shared/CTABanner";
import { FAQAccordion, FAQItem } from "@/components/shared/FAQAccordion";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Link } from "wouter";
import {
  CheckCircle,
  Phone,
  ArrowRight,
  MapPin,
  Home,
  Wrench,
  Thermometer,
  Wind,
  Zap,
  Volume2,
  DollarSign,
  Paintbrush,
  Users,
  Calendar,
} from "lucide-react";

// ── LOCAL USE CASES ───────────────────────────────────────────────────────────
// EDIT: Update use case card titles and descriptions here
const localUseCases = [
  {
    icon: Home,
    title: "Older Kirkland Homes",
    desc: "Many homes in Kirkland's established neighborhoods were built before central A/C was standard. Mini splits add comfort without tearing out walls or floors for ductwork.",
  },
  {
    icon: Wrench,
    title: "Garage Conversions & ADUs",
    desc: "Whether it's a detached workshop, a garage converted to living space, or a new ADU, mini splits condition the space independently and efficiently.",
  },
  {
    icon: MapPin,
    title: "Bonus Rooms & Home Offices",
    desc: "Upper floors, over-garage bonus rooms, and dedicated home offices often get no airflow from existing systems. A single mini split zone solves that cleanly.",
  },
];

// ── BENEFITS ──────────────────────────────────────────────────────────────────
// EDIT: Update benefit cards here
const benefits = [
  {
    icon: Wind,
    title: "No Ductwork Required",
    desc: "Install in any room without opening walls or ceilings to run new ducts.",
  },
  {
    icon: Thermometer,
    title: "Room-by-Room Control",
    desc: "Set temperatures independently for each zone — each unit has its own thermostat.",
  },
  {
    icon: Zap,
    title: "High Energy Efficiency",
    desc: "Heat pump technology delivers significantly more comfort per dollar than electric heat or window units.",
  },
  {
    icon: Volume2,
    title: "Quiet Operation",
    desc: "Indoor units run whisper-quiet. You'll forget the system is running.",
  },
  {
    icon: CheckCircle,
    title: "Year-Round Comfort",
    desc: "One system handles both heating and cooling — even in the Pacific Northwest's wet winters.",
  },
  {
    icon: Paintbrush,
    title: "Clean, Finished Look",
    desc: "Wall-mounted units install neatly with a professional finish that fits the room.",
  },
];

// ── WHY CHOOSE US ─────────────────────────────────────────────────────────────
// EDIT: Update trust cards here
const trustCards = [
  {
    icon: MapPin,
    title: "Local to the Eastside",
    desc: "We work in Kirkland neighborhoods regularly. Quick response times and no long wait windows.",
  },
  {
    icon: Paintbrush,
    title: "Clean, Professional Work",
    desc: "Line sets are routed neatly, mounts are level, and we leave every job site the way we found it.",
  },
  {
    icon: DollarSign,
    title: "Transparent Estimates",
    desc: "Written quotes before any work begins. No vague numbers, no pressure to decide on the spot.",
  },
  {
    icon: Calendar,
    title: "Reliable Scheduling",
    desc: "We show up when we say we will. Kirkland homeowners tell us this matters — it matters to us too.",
  },
];

// ── KIRKLAND-SPECIFIC FAQS ────────────────────────────────────────────────────
// EDIT: Update questions and answers here
const kirklandFaqs: FAQItem[] = [
  {
    question: "Why are mini splits a good fit for Kirkland homes?",
    answer:
      "Many of Kirkland's most established neighborhoods — from Juanita and Houghton to Bridle Trails and North Kirkland — were built decades before central air conditioning was common. These homes have solid bones and great character, but they weren't designed for ductwork. A ductless mini split is the cleanest way to add real comfort without major structural work.",
  },
  {
    question: "How much does mini split installation cost in Kirkland?",
    answer:
      "Most single-zone installations in Kirkland range from $2,500 to $5,000 fully installed. The price depends on unit capacity, the brand you choose, and access conditions at your home. We always provide a written, itemized estimate before any work begins — no surprise charges at the end.",
  },
  {
    question: "Can you install a mini split in my upstairs room or home office?",
    answer:
      "Yes — that's one of the most common installs we do in Kirkland. Upstairs bedrooms, rooms above garages, and dedicated home offices often get poor airflow from the main system, especially in older homes. A single-zone mini split addresses that precisely without affecting the rest of the house.",
  },
  {
    question: "What about garages and detached spaces in Kirkland?",
    answer:
      "Garages, workshops, and detached structures are well-suited for mini splits because they have no connection to the home's existing HVAC. We install a system that runs completely independently, giving you reliable heating and cooling in the space without running any additional ductwork.",
  },
  {
    question: "Do you serve all Kirkland neighborhoods?",
    answer:
      "Yes. We serve all of Kirkland including downtown Kirkland, Juanita, Houghton, Bridle Trails, Totem Lake, North Kirkland, Finn Hill, and surrounding areas. If you're close to Kirkland and unsure, give us a call — we're likely nearby.",
  },
];

// ── KIRKLAND REVIEWS ──────────────────────────────────────────────────────────
// EDIT: Replace with real customer reviews when available
const kirklandReviews = [
  {
    name: "Michael R.",
    city: "Kirkland, WA (Juanita)",
    rating: 5,
    text: "Reached out for a quote on a mini split for my home office. They came out the next day, gave a fair price, and had it installed within the week. Very clean work — they explained the system thoroughly before leaving.",
    date: "Nov 2024",
  },
  {
    name: "Christine B.",
    city: "Kirkland, WA",
    rating: 5,
    text: "Our 1970s home never had A/C and summers upstairs were brutal. Best decision we made was getting the mini split installed. It's quiet, efficient, and the install was done in one day with no mess.",
    date: "Jan 2025",
  },
];

export function KirklandPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mini Split Installation Kirkland WA",
    provider: {
      "@type": "HVACBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kirkland",
        addressRegion: "WA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Kirkland",
      sameAs: "https://www.wikidata.org/wiki/Q1099798",
    },
    description:
      "Professional ductless mini split installation in Kirkland, WA. Specializing in older homes, home offices, garages, and additions throughout Kirkland.",
  };

  return (
    <>
      <SEO {...pageMeta.kirkland} schema={schema} />
      <div className="pt-16">

        {/* ══════════════════════════════════════════════════════════
            HERO
            EDIT: Update headline, paragraph, and button labels below
            ══════════════════════════════════════════════════════════ */}
        <div className="bg-gradient-to-br from-navy to-primary py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-3 py-1.5 rounded-full mb-5 border border-white/20">
              <MapPin className="w-3.5 h-3.5" />
              Kirkland, WA
            </div>
            {/* EDIT: H1 headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Mini Split Installation in Kirkland, WA
            </h1>
            {/* EDIT: Hero supporting paragraph */}
            <p className="text-white/80 text-lg max-w-2xl mb-8 leading-relaxed">
              Climate Control Club Pros specializes in ductless mini split systems for Kirkland homeowners. From older craftsman-style homes in Juanita to newer builds in Bridle Trails, we install systems that deliver real comfort — clean, efficient, and built for the way you actually use your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* EDIT: CTA button labels and links */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-md hover:bg-slate-100 transition-colors shadow-md"
              >
                Get a Free Kirkland Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-bold px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
            </div>

            {/* Hero trust indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-white/70">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Licensed &amp; Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Free Written Estimates</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Serving All Kirkland Neighborhoods</span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            LOCAL INTRO
            EDIT: Update heading, paragraphs, and checklist items below
            ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                {/* EDIT: Local intro heading */}
                <h2 className="text-3xl font-bold text-navy mb-5">
                  Why Kirkland Homeowners Are Choosing Mini Splits
                </h2>
                {/* EDIT: Local intro paragraphs */}
                <p className="text-slate-600 leading-relaxed mb-4">
                  Kirkland sits along the eastern shore of Lake Washington, with neighborhoods that span decades of construction — from mid-century homes in Houghton to newer builds near Totem Lake. What many of these homes share is a lack of central air conditioning. In an era when Kirkland summers are consistently warmer than they used to be, that gap matters.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Ductless mini splits are ideally suited for this. They can be installed in virtually any room without touching existing walls or ceilings for ductwork. One wall-mounted unit, properly sized, can keep an entire room comfortable year-round — efficiently and quietly.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Whether you're trying to cool a hot upstairs bedroom, add comfort to a finished garage or bonus room, or create a proper climate-controlled home office, a mini split gives you exactly that — without overcomplicating things.
                </p>
                {/* EDIT: Checklist items */}
                <div className="flex flex-col gap-3">
                  {[
                    "Works in homes with no existing ductwork",
                    "Efficient heat pump for heating and cooling",
                    "Quiet indoor units — designed for living spaces",
                    "Independent zone control for each room",
                    "Perfect for older Kirkland homes, garages, and additions",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use case cards */}
              <div className="space-y-4">
                {localUseCases.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1 text-sm">{title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}

                {/* Internal link to service page */}
                <div className="pt-2">
                  <Link
                    href="/mini-split-installation"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Learn more about how installation works <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            BENEFITS SECTION
            EDIT: Update heading and cards in the benefits array above
            ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                What You Get
              </div>
              {/* EDIT: Benefits section heading */}
              <h2 className="text-3xl font-bold text-navy mb-4">
                Built for Kirkland Homeowners
              </h2>
              {/* EDIT: Benefits section intro */}
              <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                Mini splits deliver the kind of comfort that older and newer Kirkland homes alike benefit from — efficient, quiet, and installed without major disruption to your home.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-navy text-sm mb-2">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            WHY CHOOSE US (LOCAL TRUST)
            EDIT: Update heading and cards in the trustCards array above
            ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Why Choose Us
              </div>
              {/* EDIT: Trust section heading */}
              <h2 className="text-3xl font-bold text-navy mb-4">
                Kirkland's Mini Split Specialist
              </h2>
              {/* EDIT: Trust section intro */}
              <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                We focus on ductless systems, which means better recommendations, cleaner installations, and service that's built around your home — not a sales quota.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustCards.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="text-center p-6 rounded-xl bg-slate-50 hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2 text-sm">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            REVIEWS
            EDIT: Update reviews in the kirklandReviews array above
            ══════════════════════════════════════════════════════════ */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Kirkland Reviews
              </div>
              {/* EDIT: Reviews section heading */}
              <h2 className="text-2xl font-bold text-navy">What Kirkland Homeowners Say</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {kirklandReviews.map((r) => (
                <ReviewCard key={r.name} {...r} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 border border-primary text-primary text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-primary/5 transition-colors"
              >
                See All Reviews <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SERVICES INTERNAL LINKS
            EDIT: Update link labels and destinations here
            ══════════════════════════════════════════════════════════ */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-navy">Mini Split Services in Kirkland</h2>
              <p className="text-slate-500 text-sm mt-2">Installation, replacement, and repair — all handled by the same focused team.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: "Mini Split Installation",
                  desc: "New system installation for Kirkland homes, garages, offices, and additions.",
                  href: "/mini-split-installation",
                  label: "Learn About Installation",
                },
                {
                  title: "Mini Split Replacement",
                  desc: "Upgrade an older or underperforming ductless system with a more efficient setup.",
                  href: "/mini-split-replacement",
                  label: "View Replacement Options",
                },
                {
                  title: "Mini Split Repair",
                  desc: "Restore performance and fix heating or cooling issues with your current system.",
                  href: "/mini-split-repair",
                  label: "Schedule Repair",
                },
              ].map(({ title, desc, href, label }) => (
                <div
                  key={title}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-200"
                >
                  <h3 className="font-semibold text-navy mb-2 text-sm">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{desc}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold hover:gap-2.5 transition-all"
                  >
                    {label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FAQ
            EDIT: Update questions and answers in kirklandFaqs above
            ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Common Questions
              </div>
              {/* EDIT: FAQ heading */}
              <h2 className="text-3xl font-bold text-navy">
                Kirkland Mini Split FAQs
              </h2>
            </div>
            <FAQAccordion items={kirklandFaqs} schema />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FINAL CTA
            EDIT: Update headline, subtext, and button label in CTABanner
            ══════════════════════════════════════════════════════════ */}
        <CTABanner
          headline="Serving Kirkland Homeowners"
          subtext="Clean Workmanship. Clear Communication. Reliable Comfort. Prefer to speak first? Give us a call — we're easy to talk to."
          primaryLabel="Request Your Free Estimate"
        />

      </div>
    </>
  );
}
