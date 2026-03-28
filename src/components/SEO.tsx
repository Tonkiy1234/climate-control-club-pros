import { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
  schema?: object;
}

export function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  noIndex = false,
  schema,
}: SEOProps) {
  const resolvedTitle = title ?? siteConfig.seo.defaultTitle;
  const resolvedDesc = description ?? siteConfig.seo.defaultDescription;
  const resolvedOgTitle = ogTitle ?? resolvedTitle;
  const resolvedOgDesc = ogDescription ?? resolvedDesc;

  useEffect(() => {
    document.title = resolvedTitle;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta("description", resolvedDesc);
    setMeta("robots", noIndex ? "noindex,nofollow" : "index,follow");

    // Open Graph
    setMeta("og:title", resolvedOgTitle, "property");
    setMeta("og:description", resolvedOgDesc, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", siteConfig.name, "property");
    if (canonical) {
      setMeta("og:url", canonical, "property");
      setLink("canonical", canonical);
    }
    setMeta("og:image", siteConfig.seo.ogImage, "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", resolvedOgTitle);
    setMeta("twitter:description", resolvedOgDesc);

    // Schema
    const existingSchema = document.getElementById("page-schema");
    if (existingSchema) existingSchema.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = "page-schema";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [resolvedTitle, resolvedDesc, canonical, resolvedOgTitle, resolvedOgDesc, noIndex, schema]);

  return null;
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  areaServed: siteConfig.serviceAreas.map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  url: siteConfig.seo.siteUrl,
  sameAs: Object.values(siteConfig.social).filter((v) => v !== "#"),
};
