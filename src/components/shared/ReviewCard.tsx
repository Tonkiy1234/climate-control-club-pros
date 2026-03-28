import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  city: string;
  rating?: number;
  text: string;
  date?: string;
}

export function ReviewCard({ name, city, rating = 5, text, date }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col gap-3">
      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-700 text-sm leading-relaxed">"{text}"</p>
      <div className="flex justify-between items-end mt-auto">
        <div>
          <div className="font-semibold text-sm text-navy">{name}</div>
          <div className="text-xs text-slate-400">{city}</div>
        </div>
        {date && <div className="text-xs text-slate-400">{date}</div>}
      </div>
    </div>
  );
}
