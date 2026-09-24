import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://ylia.io", changeFrequency: "monthly", priority: 1 },
    { url: "https://ylia.io/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];
}
