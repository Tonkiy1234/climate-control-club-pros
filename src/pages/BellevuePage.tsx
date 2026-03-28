/**
 * BELLEVUE CITY PAGE
 * ==================
 * All copy lives in this file. To update text, edit the strings below.
 * To update brand name / phone: edit src/config/site.ts
 * SEO title & meta description: edit src/lib/seo.ts → pageMeta.bellevue
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
  Laptop,
  Building,
  Thermometer,
  Wind,
  Zap,
  Volume2,
  DollarSign,
  Paintbrush,
  Calendar,
  Star,
} from "lucide-react";

// ── LOCAL USE CASES ───────────────────────────────────────────────────────────
// EDIT: Update use case card titles and descriptions here
const bellevueUseCases = [
  {
    icon: Home,
    title: "Luxury Home Additions & Remodels",
    desc: "Bellevue's premium homes often include additions or remodeled spaces that weren't part of the original HVAC plan. Mini splits handle these precisely without disrupting finished interiors.",
  },
  {
    icon: Laptop,
    title: "Executive Home Offices",
    desc: "Bellevue's work-from-home professionals expect precise, reliable climate control in their dedicated workspace — completely independent from the rest of the home.",
  },
  {
    icon: Building,
    title: "ADUs, Guest Suites & Detached Spaces",
    desc: "Detached guest houses, over-garage suites, and new ADUs are natural candidates for mini splits — no ductwork required, clean installation, independent control.",
  },
];

// ── BENEFITS ──────────────────────────────────────────────────────────────────
// EDIT: Update benefit cards here
const benefits = [
  {
    icon: Thermometer,
    title: "Room-by-Room Comfort",
    desc: "Each zone has its own thermostat. Set guest suites, home offices, and living areas to exactly what you want.",
  },
  {
    icon: Wind,
    title: "No Ductwork Required",
    desc: "Install in any finished room, detached structure, or addition without major structural work.",
  },
  {
    icon: Zap,
    title: "High Energy Efficiency",
    desc: "Heat pump technology delivers more comfort per dollar than most alternatives, particularly for heating.",
  },
  {
    icon: Volume2,
    title: "Whisper-Quiet Operation",
    desc: "Modern mini split indoor units run at levels you won't notice — appropriate for bedrooms, offices, and high-end living spaces.",
  },
  {
    icon: Star,
    title: "Premium Brand Equipment",
    desc: "We install systems from trusted names including Mitsubishi Electric, Daikin, and Fujitsu — brands chosen for long-term performance.",
  },
  {
    icon: CheckCircle,
    title: "Clean, Finished Appearance",
    desc: "A professionally installed mini split looks like it belongs. We route line sets carefully and mount units level and true.",
  },
];

// ── WHY CHOOSE US ─────────────────────────────────────────────────────────────
// EDIT: Update trust cards here
const trustCards = [
  {
    icon: Paintbrush,
    title: "Clean, Detail-Oriented Work",
    desc: "We install to a standard that fits Bellevue homes — neat line sets, level mounts, and no mess left behind.",
  },
  {
    icon: DollarSign,
    title: "Transparent, Written Estimates",
    desc: "You'll receive a clear, itemized quote before anything starts. No pressure, no guesswork.",
  },
  {
    icon: MapPin,
    title: "Eastside-Based Service",
    desc: "We work in Bellevue regularly, which means real availability — not long wait windows or slow callbacks.",
  },
  {
    icon: Calendar,
    title: "Reliable Follow-Through",
    desc: "We confirm timelines upfront and honor them. Bellevue homeowners tell us this matters — it matters to us too.",
  },
];

// ── BELLEVUE-SPECIFIC FAQS ────────────────────────────────────────────────────
// EDIT: Update questions and answers here
const bellevueFaqs: FAQItem[] = [
  {
    question: "Why do Bellevue homeowners choose mini splits instead of central HVAC?",
    answer:
      "Many high-end Bellevue homes — including properties in West Bellevue, Somerset, and Enatai — were built without central air, or have rooms the existing system simply doesn't condition well. Mini splits add precise, independent climate control without the disruption of running new ductwork through finished walls and ceilings. For luxury homes, that kind of minimal-impact installation is often exactly what homeowners want.",
  },
  {
    question: "Are mini splits appropriate for a high-end Bellevue home?",
    answer:
      "Absolutely. Premium brands like Mitsubishi Electric and Daikin are used in luxury homes across the country. Their indoor units run quietly, integrate with smart home systems, and — when properly installed — look clean and intentional in any room. For spaces where appearance matters as much as performance, they're a strong choice.",
  },
  {
    question: "How much does mini split installation cost in Bellevue?",
    answer:
      "Single-zone installations typically range from $2,500 to $5,000 fully installed, depending on unit capacity, brand, and access at your home. Multi-zone systems vary by scope and layout. We provide free, written estimates so you know exactly what you're paying before any work begins — no vague ranges, no surprises at the end.",
  },
  {
    question: "Can you install a mini split in a Bellevue ADU or detached guest house?",
    answer:
      "Yes — these are some of our most common Bellevue projects. Detached structures need their own climate control, and mini splits are well suited for it. No ductwork connection to the main home is required, which means a clean, self-contained installation that runs independently.",
  },
  {
    question: "Do you serve Medina, Clyde Hill, and areas near Bellevue?",
    answer:
      "Yes. We serve Bellevue and surrounding Eastside communities including Medina, Clyde Hill, Yarrow Point, Beaux Arts, and Newcastle. If you're unsure whether we cover your area, call us — we're likely nearby.",
  },
];

// ── BELLEVUE REVIEWS ──────────────────────────────────────────────────────────
// EDIT: Replace with real customer reviews when available
const bellevueReviews = [
  {
    name: "David H.",
    city: "Bellevue, WA (Somerset)",
    rating: 5,
    text: "We had a guest suite that was always too hot in summer and cold in winter. They installed a Mitsubishi mini split and it's been perfect. Clean installation done in half a day — couldn't be happier.",
    date: "Dec 2024",
  },
  {
    name: "Priya N.",
    city: "Bellevue, WA (West Bellevue)",
    rating: 5,
    text: "Building out a home office in our lower level and needed dedicated climate control. Professional, fast, and the system works exactly as described. We'd recommend them to anyone.",
    date: "Feb 2025",
  },
];

export function BellevuePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mini Split Installation Bellevue WA",
    provider: {
      "@type": "HVACBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bellevue",
        addressRegion: "WA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Bellevue",
      sameAs: "https://www.wikidata.org/wiki/Q1082",
    },
    description:
      "Premium ductless mini split installation in Bellevue, WA. Serving high-end homes, home offices, ADUs, and additions throughout Bellevue and the Eastside.",
  };

  return (
    <>
      <SEO {...pageMeta.bellevue} schema={schema} />
      <div className="pt-16">

        {/* ══════════════════════════════════════════════════════════
            HERO
            EDIT: Update headline, paragraph, and button labels below
            ══════════════════════════════════════════════════════════ */}
        <div className="bg-gradient-to-br from-navy to-primary py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-3 py-1.5 rounded-full mb-5 border border-white/20">
              <MapPin className="w-3.5 h-3.5" />
              Bellevue, WA
            </div>
            {/* EDIT: H1 headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Mini Split Installation in Bellevue, WA
            </h1>
            {/* EDIT: Hero supporting paragraph */}
            <p className="text-white/80 text-lg max-w-2xl mb-8 leading-relaxed">
              Climate Control Club Pros provides ductless mini split installation for Bellevue homeowners who expect precision, clean workmanship, and long-term reliability. From West Bellevue to Somerset to Medina, we install systems that match the quality of the home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* EDIT: CTA button labels and links */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-md hover:bg-slate-100 transition-colors shadow-md"
              >
                Get a Free Bellevue Estimate <ArrowRight className="w-4 h-4" />
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
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Serving All Bellevue Neighborhoods</span>
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
                  Why Bellevue Homeowners Are Choosing Ductless Mini Splits
                </h2>
                {/* EDIT: Local intro paragraphs */}
                <p className="text-slate-600 leading-relaxed mb-4">
                  Bellevue homeowners tend to have high expectations when it comes to comfort, appearance, and long-term value. That's what makes ductless mini splits such a strong fit here. They deliver precise, room-by-room climate control without the invasive ductwork that disrupts finished interiors — and they do it efficiently and quietly.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Many Bellevue homes — including newer properties in areas like West Bellevue, Enatai, and Somerset — either don't have central air conditioning or have rooms that their existing HVAC system simply doesn't reach effectively. Additions, bonus rooms, and detached ADUs are especially common. A properly specified mini split addresses each of these situations cleanly.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Whether you're adding a zone to a master suite that never quite stays comfortable, conditioning a dedicated home office, or installing an independent system for a guest house or ADU, we size and install the right system for the space — with the quality of work Bellevue homes deserve.
                </p>
                {/* EDIT: Checklist items */}
                <div className="flex flex-col gap-3">
                  {[
                    "No disruption to finished walls or ceilings for ductwork",
                    "Premium brands — Mitsubishi Electric, Daikin, Fujitsu",
                    "Smart home compatible systems available",
                    "Efficient performance in Pacific Northwest winters",
                    "Clean, professional installation that fits the home",
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
                {bellevueUseCases.map(({ icon: Icon, title, desc }) => (
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
              {/* EDIT: Benefits heading */}
              <h2 className="text-3xl font-bold text-navy mb-4">
                Performance Built for Bellevue Homes
              </h2>
              {/* EDIT: Benefits intro */}
              <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                The right mini split system brings together efficiency, quiet operation, and a clean installation that fits the standard Bellevue homeowners expect.
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
                A Standard That Fits Bellevue
              </h2>
              {/* EDIT: Trust section intro */}
              <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                We focus on ductless systems and bring the same level of care to every install — clean work, clear communication, and installations that hold up over time.
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
            EDIT: Update reviews in the bellevueReviews array above
            ══════════════════════════════════════════════════════════ */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Bellevue Reviews
              </div>
              {/* EDIT: Reviews section heading */}
              <h2 className="text-2xl font-bold text-navy">What Bellevue Homeowners Say</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {bellevueReviews.map((r) => (
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
              <h2 className="text-2xl font-bold text-navy">Mini Split Services in Bellevue</h2>
              <p className="text-slate-500 text-sm mt-2">New installations, system upgrades, and repairs — handled by the same focused team.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: "Mini Split Installation",
                  desc: "New system installation for Bellevue homes, additions, offices, and detached ADUs.",
                  href: "/mini-split-installation",
                  label: "Learn About Installation",
                },
                {
                  title: "Mini Split Replacement",
                  desc: "Replace an older or underperforming ductless system with a more efficient modern setup.",
                  href: "/mini-split-replacement",
                  label: "View Replacement Options",
                },
                {
                  title: "Mini Split Repair",
                  desc: "Diagnose and fix performance issues with your existing ductless system.",
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
            EDIT: Update questions and answers in bellevueFaqs above
            ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Common Questions
              </div>
              {/* EDIT: FAQ heading */}
              <h2 className="text-3xl font-bold text-navy">
                Bellevue Mini Split FAQs
              </h2>
            </div>
            <FAQAccordion items={bellevueFaqs} schema />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FINAL CTA
            EDIT: Update headline, subtext, and button label in CTABanner
            ══════════════════════════════════════════════════════════ */}
        <CTABanner
          headline="Serving Bellevue Homeowners"
          subtext="Clean Workmanship. Clear Communication. Reliable Comfort. Prefer to speak first? Give us a call — we're easy to talk to."
          primaryLabel="Request Your Free Estimate"
        />

      </div>
    </>
  );
}
