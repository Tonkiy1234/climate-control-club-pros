import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/shared/CTABanner";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Link } from "wouter";
import { DollarSign, CheckCircle, ArrowRight, Clock, Shield } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Low Monthly Payments", desc: "Spread the cost of your new system over time with manageable monthly payments." },
  { icon: Clock, title: "Quick Approval", desc: "Get a financing decision fast so you don't have to wait to get comfortable." },
  { icon: Shield, title: "No Surprise Fees", desc: "We're transparent about all terms. You'll know exactly what you're agreeing to before signing." },
  { icon: CheckCircle, title: "Applied to Any Service", desc: "Financing is available for installation, replacement, and qualifying repairs." },
];

export function Financing() {
  return (
    <>
      <SEO {...pageMeta.financing} />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-navy to-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Flexible Financing</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {siteConfig.financing.subtext} Get the comfort you need today without waiting.
            </p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Financing Options</div>
                <h2 className="text-3xl font-bold text-navy mb-5">
                  Get a New Mini Split Without Paying All Upfront
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A quality mini split installation is an investment in your home's comfort and energy efficiency. We offer financing through trusted lending partners so qualified homeowners can get the system they need without draining savings.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {/* EDIT: Replace with real financing terms when finalized */}
                  Ask about our financing options when you request an estimate. We'll walk you through the terms clearly and help you find a payment structure that works for your budget.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Available for installation and replacement",
                    "Quick approval process",
                    "Competitive rates for qualified customers",
                    "No pressure — financing is an option, not required",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Ask About Financing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-navy text-sm mb-1.5">{title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-slate-400 text-center">
              {/* EDIT: Update with actual financing provider details and terms */}
              Financing is subject to credit approval. Terms and conditions apply. Ask for full details when you request your estimate. We do not charge extra for using financing.
            </p>
          </div>
        </section>

        <CTABanner headline="Ask About Financing on Your Free Estimate" subtext="Get the comfort you need — pay over time with approved credit." />
      </div>
    </>
  );
}
