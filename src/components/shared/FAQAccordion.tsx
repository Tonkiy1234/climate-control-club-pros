import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  schema?: boolean;
}

export function FAQAccordion({ items, schema = false }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="divide-y divide-slate-100">
        {items.map((item, i) => (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <span className="font-semibold text-navy text-base">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 text-primary transition-transform mt-0.5 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
