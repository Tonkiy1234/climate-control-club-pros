import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

export function ThankYou() {
  return (
    <>
      <SEO {...pageMeta.thankYou} />
      <div className="pt-16 min-h-screen bg-slate-50 flex items-center">
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Thank You!
          </h1>
          <p className="text-slate-600 text-lg mb-3">
            We received your estimate request.
          </p>
          <p className="text-slate-500 mb-8">
            Our team will follow up within one business day — usually much sooner. If you need to reach us faster, call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary/5 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
