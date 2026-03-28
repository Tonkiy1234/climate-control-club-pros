import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/shared/CTABanner";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";

const cityDetails = [
  {
    name: "Kirkland",
    href: "/mini-split-installation-kirkland",
    description:
      "Our primary service area. Kirkland's mix of older homes and newer construction makes it an ideal market for ductless mini splits. We know Kirkland neighborhoods well.",
    featured: true,
  },
  {
    name: "Bellevue",
    href: "/mini-split-installation-bellevue",
    description:
      "Premium installs for Bellevue's high-end homes, executive offices, ADUs, and guest suites. We serve all Bellevue neighborhoods.",
    featured: true,
  },
  { name: "Redmond", href: "/contact", description: "Mini split installation and repair in Redmond, WA." },
  { name: "Kenmore", href: "/contact", description: "Ductless system installs for Kenmore homeowners." },
  { name: "Bothell", href: "/contact", description: "Mini split installation and service in Bothell." },
  { name: "Juanita", href: "/contact", description: "Serving the Juanita neighborhood and surrounding Kirkland areas." },
  { name: "Houghton", href: "/contact", description: "Mini split installs for Houghton-area homes." },
  { name: "Medina", href: "/contact", description: "Premium mini split service in Medina." },
  { name: "Clyde Hill", href: "/contact", description: "Ductless systems for Clyde Hill properties." },
  { name: "Yarrow Point", href: "/contact", description: "Mini split installation in Yarrow Point." },
];

export function ServiceAreas() {
  return (
    <>
      <SEO {...pageMeta.serviceAreas} />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-navy to-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Service Areas</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              We serve Kirkland, Bellevue, and the surrounding Eastside communities with professional mini split installation, replacement, and repair.
            </p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured cities */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {cityDetails.filter((c) => c.featured).map((city) => (
                <div key={city.name} className="bg-primary/5 rounded-xl border border-primary/20 p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold text-navy">{city.name}, WA</h2>
                    <span className="ml-auto text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Primary</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{city.description}</p>
                  <Link
                    href={city.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    View {city.name} Page <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Other cities */}
            <h2 className="text-xl font-bold text-navy mb-5">Additional Service Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cityDetails.filter((c) => !c.featured).map((city) => (
                <div key={city.name} className="bg-slate-50 rounded-lg border border-slate-100 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-navy text-sm">{city.name}, WA</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{city.description}</p>
                  <Link href={city.href} className="text-xs font-semibold text-primary hover:underline">
                    Request estimate →
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-100 text-center">
              <h3 className="font-semibold text-navy mb-2">Don't see your city?</h3>
              <p className="text-slate-500 text-sm mb-4">
                We cover a wider area than listed here. Give us a call — we're likely able to help.
              </p>
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-md text-sm hover:bg-primary/90 transition-colors">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        <CTABanner />
      </div>
    </>
  );
}
