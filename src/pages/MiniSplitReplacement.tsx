import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/shared/CTABanner";
import { FAQAccordion, FAQItem } from "@/components/shared/FAQAccordion";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Link } from "wouter";
import { AlertTriangle, CheckCircle, Phone, ArrowRight, TrendingUp, DollarSign, Zap } from "lucide-react";

const signs = [
  "Inconsistent temperatures or weak airflow",
  "Unit is 10+ years old and declining in efficiency",
  "Frequent repairs with increasing repair bills",
  "Refrigerant leaks that require repeated recharging",
  "Unusual noises like grinding, squealing, or rattling",
  "High energy bills that are climbing month over month",
  "The system runs constantly without reaching temperature",
  "Ice buildup on the indoor or outdoor unit",
];

const benefits = [
  { icon: Zap, title: "Improved Efficiency", desc: "New systems offer dramatically better energy ratings — often cutting operating costs by 20–40%." },
  { icon: TrendingUp, title: "Better Performance", desc: "Upgraded units deliver more consistent temperatures, quieter operation, and better dehumidification." },
  { icon: DollarSign, title: "Lower Long-Term Cost", desc: "Stop pouring money into repairs. A new system pays for itself in reduced bills and eliminated repair costs." },
];

const faqs: FAQItem[] = [
  {
    question: "Should I repair or replace my mini split?",
    answer: "If your system is under 8 years old and the repair cost is less than 50% of a new system, repair is usually worth it. If it's older, inefficient, or needing frequent fixes, replacement is almost always the better value.",
  },
  {
    question: "Can I replace just the indoor or outdoor unit?",
    answer: "Sometimes, but it depends on the brand, age, and refrigerant type. We'll assess your system and give you an honest recommendation — replacement vs. partial upgrade.",
  },
  {
    question: "How long does a replacement take?",
    answer: "Most single-zone replacements are completed in 4–6 hours. We remove and dispose of the old system and have your new unit running the same day in most cases.",
  },
  {
    question: "Do you haul away the old unit?",
    answer: "Yes. We remove and properly dispose of your old mini split system as part of our replacement service.",
  },
];

export function MiniSplitReplacement() {
  return (
    <>
      <SEO {...pageMeta.replacement} />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-navy to-primary py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Mini Split Replacement</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Is your mini split aging, failing, or costing more to repair than it's worth? We handle full system replacements in Kirkland, Bellevue, and the surrounding Eastside.
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

        {/* Signs you need replacement */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">When to Replace</div>
                <h2 className="text-3xl font-bold text-navy mb-6">Signs Your Mini Split Needs Replacing</h2>
                <div className="space-y-3">
                  {signs.map((sign) => (
                    <div key={sign} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{sign}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-slate-500 text-sm">
                  Not sure if you should repair or replace? Call us — we'll give you an honest assessment with no pressure to upgrade.
                </p>
              </div>
              <div className="space-y-5">
                <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Benefits of Upgrading</div>
                <h2 className="text-3xl font-bold text-navy mb-6">Why Upgrade Your System?</h2>
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 p-5 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy mb-8">What's Included in Every Replacement</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Free in-home consultation and sizing assessment",
                "Removal and proper disposal of old unit",
                "New system installation and commissioning",
                "Electrical and refrigerant line work included",
                "Full test and temperature verification",
                "Operating tutorial and system walkthrough",
                "1-year workmanship warranty",
                "Old equipment hauled away at no extra charge",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy mb-10 text-center">Replacement FAQs</h2>
            <FAQAccordion items={faqs} schema />
          </div>
        </section>

        <CTABanner
          headline="Ready to Replace Your System?"
          subtext="Not sure if it's time to replace? Give us a call — we'll give you an honest assessment with no pressure to upgrade."
          primaryLabel="Request Your Free Estimate"
        />
      </div>
    </>
  );
}
