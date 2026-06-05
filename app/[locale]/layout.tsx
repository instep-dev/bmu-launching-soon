import type { Metadata } from "next";
import en from "@/messages/en.json";
import id from "@/messages/id.json";
import { TranslationsProvider } from "@/app/i18n/TranslationsContext";

const messagesMap = { en, id } as const;

const siteUrl = "https://www.bmuhealthcare.com";

const localeContent = {
  en: {
    title: "BMU Healthcare | Healthcare Investment: Two Decades Strong",
    description:
      "BMU Healthcare is a healthcare investment and institutional development platform with over two decades of experience building hospitals and healthcare facilities across Indonesia.",
    ogLocale: "en_US",
    altLocale: "id_ID",
  },
  id: {
    title: "BMU Healthcare | Investasi Kesehatan: Dua Dekade yang Kuat",
    description:
      "BMU Healthcare adalah platform investasi dan pengembangan institusi kesehatan dengan pengalaman lebih dari dua dekade dalam membangun rumah sakit dan fasilitas kesehatan di seluruh Indonesia.",
    ogLocale: "id_ID",
    altLocale: "en_US",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content =
    localeContent[locale as keyof typeof localeContent] ?? localeContent.en;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        id: `${siteUrl}/id`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${siteUrl}/${locale}`,
      locale: content.ogLocale,
      alternateLocale: content.altLocale,
    },
    twitter: {
      title: content.title,
      description: content.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages =
    messagesMap[locale as keyof typeof messagesMap] ?? messagesMap.en;

  return (
    <TranslationsProvider messages={messages as any}>
      {children}
    </TranslationsProvider>
  );
}
