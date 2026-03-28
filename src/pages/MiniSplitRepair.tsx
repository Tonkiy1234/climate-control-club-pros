import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/shared/CTABanner";
import { FAQAccordion, FAQItem } from "@/components/shared/FAQAccordion";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight, AlertTriangle } from "lucide-react";

const problems = [
  { problem: "Not cooling or heating", cause: "Could be low refrigerant, dirty coils, or compressor issue" },
  { problem: "Blowing warm air only", cause: "Refrigerant leak or reversing valve issue" },
  { problem: "Loud or unusual noises", cause: "Fan motor, loose panels, or debris in the unit" },
  { problem: "Ice forming on the unit", cause: "Airflow restriction or refrigerant imbalance" },
  { problem: "Water dripping indoors", cause: "Blocked condensate drain" },
  { problem: "Error codes flashing", cause: "Sensor, electrical, or communication faults" },
  { problem: "Unit won't turn on", cause: "Electrical issue, circuit board, or remote problem" },
  { problem: "Remote / control not working", cause: "Battery, receiver, or wiring issue" },
];

const faqs: FAQItem[] = [
  {
    question: "How quickly can you respond to a repair call in Kirkland or Bellevue?",
    answer: "We aim for same-day response for repair calls in Kirkland and Bellevue. In most cases, we can schedule a visit within 24–48 hours of your call.",
  },
  {
    question: "What if my mini split needs refrigerant?",
    answer: "We're licensed to handle refrigerant. We'll diagnose whether you have a leak or just need a recharge, and quote the repair honestly before proceeding.",
  },
  {
    question: "Will you be able to repair any brand?",
    answer: "We work on most major brands including Mitsubishi, Daikin, Fujitsu, LG, Pioneer, and others. If we can't source parts for a very old or obscure unit, we'll tell you upfront.",
  },
  {
    question: "Do you charge a diagnostic fee?",
    answer: "We charge a standard diagnostic fee to come out and assess your system. That fee is credited toward the cost of repair if you choose to move forward.",
  },
  {
    question: "What if it's more cost-effective to replace than repair?",
    answer: "We'll always give you an honest assessment. If your system is old or the repair cost exceeds what makes financial sense, we'll tell you — with no pressure to use us for the replacement.",
  },
];

export function MiniSplitRepair() {
  return (
    <>
      <SEO {...pageMeta.repair} />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-navy to-primary py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Mini Split Repair</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Mini split acting up? We diagnose and repair ductless systems accurately in Kirkland, Bellevue, and the surrounding Eastside — often same week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-md hover:bg-slate-100 transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors">
                Request Repair Visit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Common problems */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-3">Common Mini Split Problems We Fix</h2>
              <p className="text-slate-500 max-w-xl mx-auto">We've seen every kind of mini split issue. If your system is misbehaving, there's a good chance we've solved it before.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map(({ problem, cause }) => (
                <div key={problem} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy text-sm">{problem}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{cause}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our repair process */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">What to Expect from a Repair Visit</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Thorough diagnostic — we find the actual root cause",
                "Clear explanation of the issue in plain language",
                "Written repair quote before any work begins",
                "Quality parts and proper refrigerant handling",
                "Post-repair system test to confirm the fix",
                "Honest recommendation if replacement makes more sense",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy mb-10 text-center">Repair FAQs</h2>
            <FAQAccordion items={faqs} schema />
          </div>
        </section>

        <CTABanner
          headline="Need Your Mini Split Looked At?"
          subtext="We offer fast response for repair calls in Kirkland and Bellevue. Call to talk through the issue, or request a visit online."
          primaryLabel="Request a Repair Visit"
        />
      </div>
    </>
  );
}
