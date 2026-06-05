import en from "@/messages/en.json";
import id from "@/messages/id.json";
import { TranslationsProvider } from "@/app/i18n/TranslationsContext";

const messagesMap = { en, id } as const;

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
