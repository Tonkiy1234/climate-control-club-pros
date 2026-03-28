import { Link } from "wouter";
import { SEO, localBusinessSchema } from "@/components/SEO";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { CTABanner } from "@/components/shared/CTABanner";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { FAQAccordion, FAQItem } from "@/components/shared/FAQAccordion";
import { siteConfig } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import {
  Wrench,
  RotateCcw,
  Settings,
  CheckCircle,
  Zap,
  Wind,
  DollarSign,
  Thermometer,
  MapPin,
  Phone,
  ArrowRight,
  Paintbrush,
  Users,
  ClipboardList,
  Home as HomeIcon,
  Star,
} from "lucide-react";

/**
 * HOMEPAGE COPY
 * =============
 * All text content for the homepage lives in this file.
 * To update copy: edit the strings below.
 * To update brand name / phone / email: edit src/config/site.ts
 */

// ── HOW IT WORKS steps ───────────────────────────────────────────────────────
// EDIT: Update step titles and descriptions here
const howItWorks = [
  {
    step: "1",
    icon: ClipboardList,
    title: "Request a Free Estimate",
    desc: "Tell us about your home. We respond the same day — no pressure.",
  },
  {
    step: "2",
    icon: HomeIcon,
    title: "We Come to You",
    desc: "We assess your space and recommend the right system. Free, no obligation.",
  },
  {
    step: "3",
    icon: Star,
    title: "Stay Comfortable",
    desc: "We install it clean and fast. Most jobs are done in one day.",
  },
];

// ── WHY CHOOSE US cards ──────────────────────────────────────────────────────
// EDIT: Update card titles and descriptions here
const whyChooseUs = [
  {
    icon: Paintbrush,
    title: "Clean Work",
    desc: "Neat installation every time. We leave your home better than we found it.",
  },
  {
    icon: Wrench,
    title: "Specialists Only",
    desc: "We only do mini splits. That focus makes us better at it.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    desc: "Free written estimate. No hidden fees. No pressure.",
  },
  {
    icon: Users,
    title: "Local & Easy to Reach",
    desc: "We serve Kirkland and Bellevue. Fast responses, clear communication.",
  },
];

// ── WHY MINI SPLITS benefit cards ────────────────────────────────────────────
// EDIT: Add, remove, or update benefit cards here
const whyMiniSplits = [
  {
    icon: Thermometer,
    title: "Control Each Room",
    desc: "Set the temperature per space. No more whole-house fights.",
  },
  {
    icon: Zap,
    title: "Lower Energy Bills",
    desc: "No duct losses. Mini splits are highly efficient — especially in the PNW.",
  },
  {
    icon: Wind,
    title: "No Ductwork Needed",
    desc: "Great for older homes, garages, additions, and remodels.",
  },
  {
    icon: CheckCircle,
    title: "Heat and Cool — One System",
    desc: "Handles warm summers and cold winters. One unit, two seasons.",
  },
];

// ── REVIEWS ───────────────────────────────────────────────────────────────────
// EDIT: Replace placeholder reviews with real customer reviews here
const reviews = [
  {
    name: "Sarah M.",
    city: "Kirkland, WA",
    rating: 5,
    text: "Great communication from start to finish. The install looked clean, they explained everything clearly, and the mini split made a huge difference in our upstairs room.",
    date: "Jan 2025",
  },
  {
    name: "Daniel R.",
    city: "Bellevue, WA",
    rating: 5,
    text: "Professional, on time, and easy to work with. We needed better heating and cooling in our garage office and the system has been perfect.",
    date: "Feb 2025",
  },
  {
    name: "Emily T.",
    city: "Bellevue, WA",
    rating: 5,
    text: "The estimate process felt straightforward and honest. Everything was installed neatly and the final result looks great.",
    date: "Mar 2025",
  },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────
// EDIT: Update questions and answers here
const faqs: FAQItem[] = [
  {
    question: "How much does mini split installation cost in Kirkland or Bellevue?",
    answer:
      "Most single-zone installations range from $2,500–$5,000 fully installed. We provide free written estimates so you know exactly what to expect — no surprises.",
  },
  {
    question: "Are mini splits a good option for homes without ductwork?",
    answer:
      "Yes — that's actually where they shine. Only a small hole in the wall is needed. No ductwork, no major renovation. Perfect for older homes, additions, and remodels.",
  },
  {
    question: "Can a mini split heat and cool the same room?",
    answer:
      "Absolutely. Modern mini split heat pumps handle both heating and cooling efficiently — great for Pacific Northwest winters and warm summers alike.",
  },
  {
    question: "How long does installation usually take?",
    answer:
      "Most single-zone installs are done in 4–6 hours. Multi-zone systems may take a full day. We'll give you a clear timeline during your estimate.",
  },
  {
    question: "Can you install a mini split in a garage, office, or addition?",
    answer:
      "Yes — these are some of our most common installs. Detached garages, home offices, bonus rooms, and ADUs are perfect candidates for ductless systems.",
  },
];

// ── KIRKLAND neighborhoods ────────────────────────────────────────────────────
// EDIT: Add or remove neighborhoods here
const kirklandNeighborhoods = [
  "Juanita", "Rose Hill", "Totem Lake", "Houghton",
  "Bridle Trails", "North Kirkland", "Moss Bay", "Market",
];

// ── BELLEVUE neighborhoods ────────────────────────────────────────────────────
// EDIT: Add or remove neighborhoods here
const bellevueNeighborhoods = [
  "West Bellevue", "Somerset", "Crossroads", "Newport",
  "Eastgate", "Lake Hills", "Medina", "Enatai",
];

export function Home() {
  return (
    <>
      <SEO {...pageMeta.home} schema={localBusinessSchema} />

      {/* ══════════════════════════════════════════════════════════
          HERO
          EDIT: Headline → line 167, body → line 173, trust row → line 195
          ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-navy via-primary to-navy min-h-[90vh] flex items-center pt-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">

            {/* Eyebrow — EDIT: small label above the headline */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full mb-6 border border-white/20">
              <Wind className="w-3.5 h-3.5 text-accent" />
              Ductless Mini Split Specialists · Kirkland &amp; Bellevue
            </div>

            {/* H1 — EDIT: main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Mini Split Installation<br />
              <span className="text-accent">in Kirkland &amp; Bellevue, WA</span>
            </h1>

            {/* Supporting sentence — EDIT: keep this to one short sentence */}
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
              Heat and cool any room — no ductwork needed. Fast, clean, and done in a day.
            </p>

            {/* Star badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/10 text-white text-sm px-3 py-1.5 rounded-full border border-white/20 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-1 text-white/80">5-Star Rated · Licensed &amp; Insured</span>
            </div>

            {/* CTA buttons — EDIT: Update button labels and links here */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-md hover:bg-slate-100 transition-colors text-base shadow-lg"
              >
                Request Your Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-bold px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-base"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Trust indicators — EDIT: 4 short trust signals */}
            <div className="flex flex-wrap gap-x-5 gap-y-2.5 mt-8 text-sm text-white/70">
              {["Licensed & Insured", "Free Estimates", "Fast Local Service", "Financing Available"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Trust badge row */}
      <TrustBadges />

      {/* ══════════════════════════════════════════════════════════
          HOW IT WORKS
          EDIT: Update steps in the howItWorks array at the top
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Simple Process
            </div>
            {/* EDIT: Section headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Getting Started Is Easy
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {howItWorks.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="text-center relative">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-5 shadow-md">
                  <span className="text-white text-2xl font-bold">{step}</span>
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-md hover:bg-primary/90 transition-colors shadow-sm"
            >
              Request Your Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-slate-400 text-sm mt-3">
              Prefer to speak first?{" "}
              <a href={siteConfig.phoneHref} className="text-primary font-semibold hover:underline">
                Give us a call.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY CHOOSE US
          EDIT: Update cards in the whyChooseUs array at the top
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Why Us
            </div>
            {/* EDIT: Section headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-7 rounded-xl bg-white hover:bg-primary/5 border border-slate-100 hover:border-primary/10 transition-all duration-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY MINI SPLITS
          EDIT: Body text below, cards in whyMiniSplits array at top
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Why Mini Splits?
              </div>
              {/* EDIT: Section headline */}
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">
                Comfortable Rooms. No Ductwork Required.
              </h2>
              {/* EDIT: Keep this to 1–2 short sentences */}
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Mini splits heat and cool any space without major renovation. Clean, quiet, and efficient — perfect for Pacific Northwest homes.
              </p>
              <Link
                href="/mini-split-installation"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                See How Installation Works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-10 lg:mt-0 grid sm:grid-cols-2 gap-4">
              {whyMiniSplits.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md hover:border-primary/15 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-navy text-sm mb-1">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICES
          EDIT: Update service card text below directly in JSX
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              What We Do
            </div>
            {/* EDIT: Services section headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Mini Split Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">

            {/* Service Card 1 — EDIT: Installation copy here */}
            <div className="group bg-white rounded-xl border border-slate-100 p-7 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 flex flex-col">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mb-5 self-start">
                Most Popular
              </span>
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">Mini Split Installation</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                New system installed in your home, garage, office, or addition. Done in one day. Clean every time.
              </p>
              <Link
                href="/mini-split-installation"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service Card 2 — EDIT: Replacement copy here */}
            <div className="group bg-white rounded-xl border border-slate-100 p-7 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-8">
                <RotateCcw className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">Mini Split Replacement</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Old system underperforming? We swap it out for a newer, more efficient model — same day.
              </p>
              <Link
                href="/mini-split-replacement"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service Card 3 — EDIT: Repair copy here */}
            <div className="group bg-white rounded-xl border border-slate-100 p-7 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-8">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">Mini Split Repair</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Something not working right? We diagnose it and fix it — fast, honest, and done properly.
              </p>
              <Link
                href="/mini-split-repair"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
              >
                Request a Repair Visit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICE AREAS + NEIGHBORHOODS
          EDIT: City cards below, neighborhood lists in arrays at top
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Where We Work
            </div>
            {/* EDIT: Service areas section headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              We Work in Your Neighborhood
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              We serve the Kirkland and Bellevue area exclusively. We know these neighborhoods — and we show up on time.
            </p>
          </div>

          {/* Two city cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">

            {/* Kirkland card */}
            <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-navy text-xl">Kirkland, WA</h3>
              </div>
              {/* EDIT: Kirkland neighborhoods */}
              <div className="flex flex-wrap gap-2 mb-6">
                {kirklandNeighborhoods.map((n) => (
                  <span key={n} className="text-xs bg-white text-slate-600 border border-slate-200 px-3 py-1 rounded-full font-medium">
                    {n}
                  </span>
                ))}
              </div>
              <Link
                href="/mini-split-installation-kirkland"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-md text-sm hover:bg-primary/90 transition-colors"
              >
                Kirkland Service Page <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bellevue card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-navy text-xl">Bellevue, WA</h3>
              </div>
              {/* EDIT: Bellevue neighborhoods */}
              <div className="flex flex-wrap gap-2 mb-6">
                {bellevueNeighborhoods.map((n) => (
                  <span key={n} className="text-xs bg-white text-slate-600 border border-slate-200 px-3 py-1 rounded-full font-medium">
                    {n}
                  </span>
                ))}
              </div>
              <Link
                href="/mini-split-installation-bellevue"
                className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-5 py-2.5 rounded-md text-sm hover:bg-primary/5 transition-colors"
              >
                Bellevue Service Page <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Additional areas note */}
          <div className="text-center">
            <p className="text-sm text-slate-400 mb-3">
              Also serving Redmond, Kenmore, Bothell, Clyde Hill, Medina, Woodinville, and more.
            </p>
            <Link
              href="/service-areas"
              className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1"
            >
              View All Service Areas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          REVIEWS
          EDIT: Update review text in the reviews array at the top
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Customer Reviews
            </div>
            {/* EDIT: Reviews section headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              What Homeowners Are Saying
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary/5 transition-colors"
            >
              See All Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINANCING
          EDIT: Update headline, paragraph, and button below
          ══════════════════════════════════════════════════════════ */}
      {siteConfig.financing.available && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Financing Available
            </div>
            {/* EDIT: Financing headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Comfort Now, Pay Over Time
            </h2>
            {/* EDIT: Keep to 1–2 sentences */}
            <p className="text-slate-500 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Flexible financing options help make your mini split upgrade easy and manageable.
            </p>
            <Link
              href="/financing"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-md hover:bg-primary/90 transition-colors"
            >
              Explore Financing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════
          FAQ
          EDIT: Update questions and answers in the faqs array at top
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Common Questions
            </div>
            {/* EDIT: FAQ section headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqs} schema />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
          EDIT: Update headline and subtext in the CTABanner props
          ══════════════════════════════════════════════════════════ */}
      <CTABanner
        headline="Ready to Get Comfortable?"
        subtext="Free estimates. Same-day response. Clean work from start to finish. Serving Kirkland and Bellevue homeowners."
        primaryLabel="Request Your Free Estimate"
      />
    </>
  );
}
