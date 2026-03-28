import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { siteConfig } from "@/config/site";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Mini Split Services",
    dropdown: [
      { label: "Installation", href: "/mini-split-installation" },
      { label: "Replacement", href: "/mini-split-replacement" },
      { label: "Repair", href: "/mini-split-repair" },
    ],
  },
  {
    label: "Service Areas",
    dropdown: [
      { label: "Kirkland", href: "/mini-split-installation-kirkland" },
      { label: "Bellevue", href: "/mini-split-installation-bellevue" },
      { label: "All Areas", href: "/service-areas" },
    ],
  },
  { label: "Financing", href: "/financing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" opacity="0.2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="font-bold text-primary text-sm tracking-tight">
                    {/* EDIT: Update company name in src/config/site.ts */}
                    Climate Control
                  </div>
                  <div className="font-bold text-accent text-sm tracking-tight -mt-0.5">
                    Club Pros
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy hover:text-primary transition-colors rounded-md hover:bg-slate-50">
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-navy hover:bg-slate-50 hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                      location === link.href
                        ? "text-primary bg-primary/5"
                        : "text-navy hover:text-primary hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.phoneHref}
                className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <button
                className="lg:hidden p-2 rounded-md text-navy hover:bg-slate-100"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-navy hover:text-primary"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-1 mt-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-slate-600 hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="block px-3 py-2 text-sm font-medium text-navy hover:text-primary"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-md text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Call {siteConfig.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky mobile call button — hidden (MobileCTABar handles this now) */}
      <a
        href={siteConfig.phoneHref}
        className="hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg text-sm font-bold"
        aria-label={`Call ${siteConfig.phone}`}
      >
        <Phone className="w-4 h-4" />
        Call Now – {siteConfig.phone}
      </a>
    </>
  );
}
