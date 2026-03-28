import { Shield, Award, Clock, Star, ThumbsUp, Wrench } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed & Insured", sub: "Washington State" },
  { icon: Clock, label: "Fast Response", sub: "Same-Day Service" },
  { icon: Star, label: "5-Star Rated", sub: "on Google & Yelp" },
  { icon: Wrench, label: "Clean Workmanship", sub: "Tidy Every Time" },
  { icon: Award, label: "Warranty-Backed", sub: "1-Year Guarantee" },
  { icon: ThumbsUp, label: "Free Estimates", sub: "No Pressure, Ever" },
];

export function TrustBadges() {
  return (
    <section className="bg-white border-b border-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center p-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs font-semibold text-navy">{label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
