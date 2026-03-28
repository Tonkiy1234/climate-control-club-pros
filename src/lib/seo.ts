import { siteConfig } from "@/config/site";

export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
}

export function buildTitle(pageTitle: string): string {
  return `${pageTitle}${siteConfig.seo.titleSuffix}`;
}

export function buildMeta(meta: SEOMeta): SEOMeta {
  return {
    ...meta,
    ogTitle: meta.ogTitle ?? meta.title,
    ogDescription: meta.ogDescription ?? meta.description,
  };
}

export const pageMeta: Record<string, SEOMeta> = {
  home: buildMeta({
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    canonical: siteConfig.seo.siteUrl,
  }),
  installation: buildMeta({
    title: buildTitle("Ductless Mini Split Installation"),
    description:
      "Expert ductless mini split installation in Kirkland and Bellevue, WA. Room-by-room comfort, energy efficiency, and clean professional installs. Request a free estimate.",
    canonical: `${siteConfig.seo.siteUrl}/mini-split-installation`,
  }),
  replacement: buildMeta({
    title: buildTitle("Mini Split Replacement Services"),
    description:
      "Replacing an old or failing mini split system in Kirkland or Bellevue? Our technicians handle full system replacements with minimal disruption. Get a free quote.",
    canonical: `${siteConfig.seo.siteUrl}/mini-split-replacement`,
  }),
  repair: buildMeta({
    title: buildTitle("Mini Split Repair in Kirkland & Bellevue"),
    description:
      "Mini split not cooling or heating? Fast, reliable mini split repair in Kirkland and Bellevue, WA. Diagnosed and fixed right the first time.",
    canonical: `${siteConfig.seo.siteUrl}/mini-split-repair`,
  }),
  serviceAreas: buildMeta({
    title: buildTitle("Service Areas – Kirkland, Bellevue & Nearby Cities"),
    description:
      "Climate Control Club Pros serves Kirkland, Bellevue, Redmond, Bothell, and surrounding communities. Mini split installation, repair, and replacement.",
    canonical: `${siteConfig.seo.siteUrl}/service-areas`,
  }),
  kirkland: buildMeta({
    title: buildTitle("Mini Split Installation in Kirkland, WA"),
    description:
      "Ductless mini split installation in Kirkland, WA. Specializing in older homes, garages, bonus rooms, and additions throughout Kirkland. Clean work, free estimates.",
    canonical: `${siteConfig.seo.siteUrl}/mini-split-installation-kirkland`,
  }),
  bellevue: buildMeta({
    title: buildTitle("Mini Split Installation in Bellevue, WA"),
    description:
      "Ductless mini split installation in Bellevue, WA for homes, ADUs, home offices, and additions. Premium brands, clean workmanship, transparent estimates. Call today.",
    canonical: `${siteConfig.seo.siteUrl}/mini-split-installation-bellevue`,
  }),
  about: buildMeta({
    title: buildTitle("About Us"),
    description:
      "Learn about Climate Control Club Pros — a licensed, insured mini split specialist serving Kirkland and Bellevue, WA with premium installs and honest service.",
    canonical: `${siteConfig.seo.siteUrl}/about`,
  }),
  financing: buildMeta({
    title: buildTitle("Financing Options for Mini Split Installation"),
    description:
      "Flexible financing available for mini split installation in Kirkland and Bellevue. Get the comfort you need today and pay over time with approved credit.",
    canonical: `${siteConfig.seo.siteUrl}/financing`,
  }),
  contact: buildMeta({
    title: buildTitle("Contact Us – Free Estimate"),
    description:
      "Contact Climate Control Club Pros for a free mini split installation estimate in Kirkland or Bellevue, WA. Fast response, honest quotes, and professional service.",
    canonical: `${siteConfig.seo.siteUrl}/contact`,
  }),
  thankYou: buildMeta({
    title: buildTitle("Thank You – We'll Be in Touch"),
    description: "Thank you for contacting Climate Control Club Pros. We'll respond within one business day.",
    noIndex: true,
  }),
  reviews: buildMeta({
    title: buildTitle("Customer Reviews"),
    description:
      "Read what homeowners in Kirkland and Bellevue say about Climate Control Club Pros' mini split installation and service.",
    canonical: `${siteConfig.seo.siteUrl}/reviews`,
  }),
};
