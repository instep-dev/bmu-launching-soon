import { getDictionary, hasLocale } from "@/lib/getDictionary";
import ArticlesNavbar from "@/app/components/ArticlesNavbar";
import { articleImages } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

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

function ArticleCard({
  item,
  locale,
  className = "",
  titleSize = "text-base",
}: {
  item: ArticleItem;
  locale: string;
  className?: string;
  titleSize?: string;
}) {
  const imageSrc = articleImages[item.slug];

  return (
    <Link
      href={`/${locale}/articles/${item.slug}`}
      className={`group relative overflow-hidden block ${className}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={item.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1abfbb 0%, #7b4ba0 65%, #9b2356 100%)",
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

      <div className="absolute bottom-0 left-0 right-0 z-20 p-3 md:p-4">
        <span className="inline-block bg-white/25 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">
          {item.category}
        </span>
        <h2
          className={`text-white font-semibold leading-snug line-clamp-3 group-hover:underline ${titleSize}`}
        >
          {item.title}
        </h2>
      </div>
    </Link>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = hasLocale(locale) ? locale : "en";
  const dict = await getDictionary(safeLocale);
  const items = (dict as any).articles.items as ArticleItem[];

  const featured = items.slice(0, 3);
  const rest = items.slice(3);

  return (
    <>
      <ArticlesNavbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <h1 className="text-3xl md:text-4xl font-black text-gray-600 mb-8">
            {(dict as any).articles.pageTitle}
          </h1>

          {/* Featured row — 3 kolom, artikel pertama spans 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {featured[0] && (
              <ArticleCard
                item={featured[0]}
                locale={safeLocale}
                className="h-[260px] md:col-span-2 md:h-[460px]"
                titleSize="text-lg md:text-xl"
              />
            )}
            <div className="flex flex-row md:flex-col gap-3 md:h-[460px]">
              {featured[1] && (
                <ArticleCard
                  item={featured[1]}
                  locale={safeLocale}
                  className="flex-1 min-h-[140px]"
                  titleSize="text-sm"
                />
              )}
              {featured[2] && (
                <ArticleCard
                  item={featured[2]}
                  locale={safeLocale}
                  className="flex-1 min-h-[140px]"
                  titleSize="text-sm"
                />
              )}
            </div>
          </div>

          {/* Rest grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {rest.map((item) => (
                <ArticleCard
                  key={item.id}
                  item={item}
                  locale={safeLocale}
                  className="h-[220px]"
                  titleSize="text-sm"
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
