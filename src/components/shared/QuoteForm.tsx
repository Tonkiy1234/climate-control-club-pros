import { useState } from "react";
import { useLocation } from "wouter";
import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";

const services = [
  "Mini Split Installation",
  "Mini Split Replacement",
  "Mini Split Repair",
  "Not Sure – Need Advice",
];

const cities = siteConfig.serviceAreas;

interface QuoteFormProps {
  compact?: boolean;
}

export function QuoteForm({ compact = false }: QuoteFormProps) {
  const [, navigate] = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission (backend form handler can be wired here)
    // EDIT: Connect to a real backend endpoint or email service
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    navigate("/thank-you");
  };

  const inputClass =
    "w-full px-4 py-3 border border-slate-200 rounded-md text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-3" : "grid sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(425) 555-0100"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Your City *
          </label>
          <select
            id="city"
            name="city"
            required
            value={form.city}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select your city</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="service" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="description" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Tell us about your home, the rooms you want conditioned, or any questions you have..."
            value={form.description}
            onChange={handleChange}
            className={inputClass + " resize-none"}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Request Free Estimate"}
      </button>

      <p className="text-center text-xs text-slate-400">
        Or call us directly:{" "}
        <a href={siteConfig.phoneHref} className="text-primary font-semibold hover:underline">
          {siteConfig.phone}
        </a>
      </p>
    </form>
  );
}
