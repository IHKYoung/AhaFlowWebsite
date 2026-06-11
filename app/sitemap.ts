import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahaflow.app";

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-10"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
