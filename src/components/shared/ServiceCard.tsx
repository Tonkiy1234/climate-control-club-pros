import { Link } from "wouter";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export function ServiceCard({ icon: Icon, title, description, href, badge }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200">
      {badge && (
        <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}
      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-navy text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-5">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all group-hover:text-accent"
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
