import { Link } from "wouter";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const serviceLinks = [
  { label: "Mini Split Installation", href: "/mini-split-installation" },
  { label: "Mini Split Replacement", href: "/mini-split-replacement" },
  { label: "Mini Split Repair", href: "/mini-split-repair" },
];

const areaLinks = [
  { label: "Kirkland", href: "/mini-split-installation-kirkland" },
  { label: "Bellevue", href: "/mini-split-installation-bellevue" },
  { label: "All Service Areas", href: "/service-areas" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Financing", href: "/financing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-white font-bold text-lg leading-tight">
                Climate Control
              </div>
              <div className="text-accent font-bold text-lg leading-tight">
                Club Pros
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              {/* EDIT: Update in src/config/site.ts */}
              Mini split specialists serving Kirkland, Bellevue, and the Eastside. Licensed, insured, and built around clean workmanship.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/30 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/30 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.google}
                aria-label="Google"
                className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/30 transition-colors text-xs font-bold"
              >
                G
              </a>
              <a
                href={siteConfig.social.yelp}
                aria-label="Yelp"
                className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/30 transition-colors text-xs font-bold"
              >
                Y
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mt-7 mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {areaLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {/* EDIT: Update phone in src/config/site.ts */}
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-start gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {/* EDIT: Update email in src/config/site.ts */}
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {/* EDIT: Update address in src/config/site.ts */}
                {siteConfig.address.full}
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {/* EDIT: Update hours in src/config/site.ts */}
                {siteConfig.hours.display}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Licensed & Insured in WA.
          </p>
          <p>
            Serving {siteConfig.serviceAreas.slice(0, 4).join(", ")} & more
          </p>
        </div>
      </div>
    </footer>
  );
}
