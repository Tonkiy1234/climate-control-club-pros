import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/shared/CTABanner";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Star } from "lucide-react";

const allReviews = [
  {
    name: "Sarah M.",
    city: "Kirkland, WA",
    rating: 5,
    text: "These guys were excellent from start to finish. The install was clean, the unit is quiet, and our upstairs is finally comfortable in summer. Highly recommend.",
    date: "Jan 2025",
  },
  {
    name: "James T.",
    city: "Bellevue, WA",
    rating: 5,
    text: "Professional, punctual, and honest. Got a fair quote the same day I called, and they finished the install ahead of schedule. My garage is now comfortable year-round.",
    date: "Feb 2025",
  },
  {
    name: "Linda K.",
    city: "Redmond, WA",
    rating: 5,
    text: "I added a mini split to my home office addition and it works perfectly. The crew was respectful of my home and left everything spotless.",
    date: "Mar 2025",
  },
  {
    name: "Michael R.",
    city: "Kirkland, WA (Juanita)",
    rating: 5,
    text: "Reached out for a quote on a mini split for my home office. They came out next day, gave a fair price, and had it installed within the week. Very clean work.",
    date: "Nov 2024",
  },
  {
    name: "Christine B.",
    city: "Kirkland, WA",
    rating: 5,
    text: "Our 1970s home never had A/C and summers were brutal upstairs. Best decision we made was calling these guys. The mini split is quiet, efficient, and the install was done in one day.",
    date: "Jan 2025",
  },
  {
    name: "David H.",
    city: "Bellevue, WA (Somerset)",
    rating: 5,
    text: "We had a guest suite that was always too hot in summer and cold in winter. They installed a Mitsubishi mini split and it's been perfect. The installation was clean and done in half a day.",
    date: "Dec 2024",
  },
  {
    name: "Priya N.",
    city: "Bellevue, WA (West Bellevue)",
    rating: 5,
    text: "We were building out a home office in our lower level and needed dedicated climate control. These guys were professional, fast, and the system works beautifully.",
    date: "Feb 2025",
  },
  {
    name: "Robert L.",
    city: "Kenmore, WA",
    rating: 5,
    text: "Replaced an old split system that had been limping along for years. New system is night and day — quieter, more efficient, and cools the whole room evenly now.",
    date: "Mar 2025",
  },
];

export function Reviews() {
  return (
    <>
      <SEO {...pageMeta.reviews} />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-navy to-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Customer Reviews</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Hear from homeowners in Kirkland, Bellevue, and the Eastside who trusted us with their mini split installation.
            </p>
          </div>
        </div>

        {/* Rating summary */}
        <div className="bg-white border-b border-slate-100 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold text-navy">5.0</span>
              <span className="text-slate-500 ml-2">Average Rating</span>
            </div>
            <p className="text-slate-500 text-sm mt-1">
              Based on reviews across Google &amp; Yelp
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <a href={siteConfig.social.google} className="text-sm text-primary font-semibold hover:underline">
                See on Google →
              </a>
              <a href={siteConfig.social.yelp} className="text-sm text-primary font-semibold hover:underline">
                See on Yelp →
              </a>
            </div>
          </div>
        </div>

        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allReviews.map((r) => (
                <ReviewCard key={r.name + r.date} {...r} />
              ))}
            </div>

            {/* Placeholder for more reviews */}
            <div className="mt-12 text-center">
              <p className="text-slate-500 text-sm mb-4">
                {/* EDIT: Replace with actual review platform links */}
                Want to leave a review? We'd love to hear from you.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href={siteConfig.social.google}
                  className="bg-white border border-slate-200 text-navy font-semibold px-5 py-2.5 rounded-md text-sm hover:border-primary transition-colors"
                >
                  Review on Google
                </a>
                <a
                  href={siteConfig.social.yelp}
                  className="bg-white border border-slate-200 text-navy font-semibold px-5 py-2.5 rounded-md text-sm hover:border-primary transition-colors"
                >
                  Review on Yelp
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </div>
    </>
  );
}
