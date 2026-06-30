import type { MetadataRoute } from "next";
import en from "@/messages/en.json";

const siteUrl = "https://www.bmuhealthcare.com";

const articleSlugs: string[] = (en as any).articles.items.map(
  (item: { slug: string }) => item.slug
);

export default function sitemap(): MetadataRoute.Sitemap {
  const homepages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: `${siteUrl}/en`, id: `${siteUrl}/id` } },
    },
    {
      url: `${siteUrl}/id`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: `${siteUrl}/en`, id: `${siteUrl}/id` } },
    },
  ];

  const articlesIndex: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/en/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/en/articles`,
          id: `${siteUrl}/id/articles`,
        },
      },
    },
    {
      url: `${siteUrl}/id/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/en/articles`,
          id: `${siteUrl}/id/articles`,
        },
      },
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articleSlugs.flatMap((slug) => [
    {
      url: `${siteUrl}/en/articles/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${siteUrl}/en/articles/${slug}`,
          id: `${siteUrl}/id/articles/${slug}`,
        },
      },
    },
    {
      url: `${siteUrl}/id/articles/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${siteUrl}/en/articles/${slug}`,
          id: `${siteUrl}/id/articles/${slug}`,
        },
      },
    },
  ]);

  return [...homepages, ...articlesIndex, ...articlePages];
}
