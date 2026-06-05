import type { MetadataRoute } from "next";

const siteUrl = "https://www.bmuhealthcare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          id: `${siteUrl}/id`,
        },
      },
    },
    {
      url: `${siteUrl}/id`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          id: `${siteUrl}/id`,
        },
      },
    },
  ];
}
