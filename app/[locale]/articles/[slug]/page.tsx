import { getDictionary, hasLocale } from "@/lib/getDictionary";
import ArticlesNavbar from "@/app/components/ArticlesNavbar";
import { articleImages } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ArticleItem = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  source: string;
  sourceUrl: string;
  category: string;
};

const SLUGS = [
  "amira-ganis-tatler-asia-2026",
  "brawijaya-hospital-building-patient-trust",
  "amira-ganis-ey-winning-women-2025",
  "amira-ganis-woman-behind-brawijaya",
  "hospital-sustaining-indonesia-healthcare",
  "amira-ganis-empathy-patients",
];

export function generateStaticParams() {
  return ["en", "id"].flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale = hasLocale(locale) ? locale : "en";
  const dict = await getDictionary(safeLocale);
  const items = (dict as any).articles.items as ArticleItem[];
  const article = items.find((item) => item.slug === slug);

  if (!article) notFound();

  const imageSrc = articleImages[slug];
  const isEN = safeLocale === "en";
  const paragraphs = article.content.split("\n\n");

  return (
    <>
      <ArticlesNavbar />
      <main className="pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
          {/* Back link */}
          <Link
            href={`/${safeLocale}/articles`}
            className="inline-block mb-6 text-sm text-gray-500 hover:text-[#1abfbb] transition-colors"
          >
            ← {isEN ? "Back" : "Kembali"}
          </Link>

          {/* Category badge */}
          <span className="inline-block bg-[#1abfbb]/10 text-[#1abfbb] text-[11px] font-semibold px-3 py-1 rounded uppercase tracking-wide mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-[#1a1a2e]">
            {article.title}
          </h1>

          {/* Author · Date */}
          <p className="text-sm text-gray-500 mb-8">
            {isEN ? "By:" : "Oleh:"} {article.author} · {article.date}
          </p>

          {/* Hero image */}
          {imageSrc && (
            <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-gray-200 mb-8">
              <Image
                src={imageSrc}
                alt={article.title}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          )}

          {/* Body paragraphs */}
          <div className="space-y-5">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-700 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Source footer */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
            {isEN ? "Source:" : "Sumber:"}{" "}
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1abfbb] hover:underline"
            >
              {article.source}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
