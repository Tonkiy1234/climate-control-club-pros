import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/shared/CTABanner";
import { FAQAccordion, FAQItem } from "@/components/shared/FAQAccordion";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight, Home, Building, Warehouse, Laptop } from "lucide-react";

const useCases = [
  { icon: Home, title: "Whole-Home Comfort", desc: "Multi-zone systems let you condition every room with individual control." },
  { icon: Building, title: "Home Additions", desc: "Extend your living space without expensive duct extensions." },
  { icon: Warehouse, title: "Garages & Workshops", desc: "Year-round comfort in detached spaces that heat and cool independently." },
  { icon: Laptop, title: "Home Offices", desc: "Keep your workspace comfortable without affecting the rest of the house." },
];

const process = [
  { step: "01", title: "Free In-Home Assessment", desc: "We visit your home, evaluate your space, and discuss your comfort goals — at no cost." },
  { step: "02", title: "Written Estimate", desc: "You receive a clear, itemized quote covering equipment, labor, and everything included. No hidden fees." },
  { step: "03", title: "Professional Installation", desc: "Our technicians install your system cleanly, minimizing disruption and keeping your home tidy throughout." },
  { step: "04", title: "System Walk-Through", desc: "We walk you through operating your new system so you get the most from it from day one." },
];

const faqs: FAQItem[] = [
  {
    question: "What size mini split do I need for my space?",
    answer: "Sizing depends on square footage, insulation quality, ceiling height, and sun exposure. A single room of 400–600 sq ft typically needs a 9,000–12,000 BTU unit. We calculate this precisely during your free assessment.",
  },
  {
    question: "Can a mini split heat as well as cool?",
    answer: "Yes. Modern mini split heat pumps provide efficient heating down to very low outdoor temperatures — some units work down to -13°F. They're ideal for the Pacific Northwest climate.",
  },
  {
    question: "How much does installation cost?",
    answer: "A single-zone system typically runs $2,500–$5,000 fully installed. Multi-zone systems vary. We provide free written estimates so you know the full price before committing.",
  },
  {
    question: "Do mini splits require maintenance?",
    answer: "Yes, but it's simple. Filter cleaning every few months and an annual professional checkup keeps your system running efficiently and extends its lifespan.",
  },
  {
    question: "How long will the installation take?",
    answer: "Most single-zone installs complete in 4–6 hours. Multi-zone systems may require a full day. We give you a timeline during your estimate.",
  },
];

export function MiniSplitInstallation() {
  return (
    <>
      <SEO {...pageMeta.installation} />
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-navy to-primary py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Our Primary Service</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ductless Mini Split Installation
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Professional ductless mini split installation for homes in Kirkland, Bellevue, and the Eastside. Efficient, quiet, and perfectly sized for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-md hover:bg-slate-100 transition-colors">
                Request Your Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        <TrustBadges />

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-3">Where We Install Mini Splits</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Mini splits work in almost any space. Here are the most common installs we handle around Kirkland and Bellevue.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-slate-50 rounded-xl p-6 text-center hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">What's Included in Every Installation</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Free in-home assessment and sizing",
                "Equipment selection and procurement",
                "Professional mounting (indoor & outdoor units)",
                "Refrigerant line set installation",
                "Electrical hookup and wiring",
                "Thermostat / remote programming",
                "System test and commissioning",
                "Full walkthrough and operating tutorial",
                "Cleanup — your home as we found it",
                "1-year workmanship warranty",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Installation Process</h2>
            <div className="space-y-8">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-6">
                  <div className="text-4xl font-bold text-primary/20 leading-none w-12 flex-shrink-0">{step}</div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-1">{title}</h3>
                    <p className="text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy mb-10 text-center">Installation FAQs</h2>
            <FAQAccordion items={faqs} schema />
          </div>
        </section>

        <CTABanner
          headline="Let's Find the Right System for Your Home"
          subtext="Prefer to speak first? Give us a call. Or request a free estimate and we'll follow up the same day."
          primaryLabel="Request Your Free Estimate"
        />
      </div>
    </>
  );
}
