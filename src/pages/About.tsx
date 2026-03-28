import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/shared/CTABanner";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { CheckCircle } from "lucide-react";

const values = [
  {
    title: "Honest Work",
    desc: "We quote fairly, explain clearly, and never push services you don't need. You'll know exactly what you're paying for and why.",
  },
  {
    title: "Specialized Focus",
    desc: "We focus exclusively on mini splits. That means every technician on our team has deep, specific expertise — not a generalist approach.",
  },
  {
    title: "Clean Installations",
    desc: "We take pride in how our work looks. Line sets are routed carefully, mounts are level, and we clean up completely before leaving.",
  },
  {
    title: "Responsive Service",
    desc: "Homeowners shouldn't have to chase contractors. We respond quickly, show up on time, and keep you informed throughout the project.",
  },
];

export function About() {
  return (
    <>
      <SEO {...pageMeta.about} />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-navy to-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Mini split specialists serving Kirkland, Bellevue, and the Eastside. Built on honest work, specialized expertise, and homeowners who come back.
            </p>
          </div>
        </div>

        <TrustBadges />

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Who We Are</div>
                <h2 className="text-3xl font-bold text-navy mb-5">
                  {/* EDIT: Replace with real company story */}
                  A Mini Split Company Built for the Eastside
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {/* EDIT: Replace with real company background */}
                  Climate Control Club Pros was founded with a single focus: providing homeowners in Kirkland and Bellevue with the best possible ductless mini split installation experience. No upselling, no shortcuts, and no leaving a mess.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We started as a mini split specialist because we believe that doing one thing extremely well creates better outcomes than trying to do everything. Our technicians work exclusively on ductless systems, which means they develop the kind of deep expertise that shows up in every install.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Whether it's a single-zone install in a home office or a multi-zone system across an entire home, we approach every project the same way: carefully, transparently, and with real pride in the result.
                </p>
              </div>
              <div className="space-y-5">
                <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Our Commitments</div>
                {values.map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-navy mb-0.5">{title}</div>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-navy mb-8">Credentials & Licensing</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: "Washington State Licensed", sub: "Contractor" },
                { label: "Fully Insured", sub: "General Liability & Workers Comp" },
                { label: "EPA 608 Certified", sub: "Refrigerant Handling" },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-semibold text-navy">{label}</div>
                  <div className="text-sm text-slate-500 mt-1">{sub}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-6">
              {/* EDIT: Add actual license number when available */}
              License number available upon request. Always ask your contractor for proof of licensing and insurance.
            </p>
          </div>
        </section>

        <CTABanner headline="Work With a Team That Gets It Right" subtext="Honest estimates, clean installs, and a company that stands behind its work." />
      </div>
    </>
  );
}
