import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/app/components/reusable/ToasterProvider";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const siteUrl = "https://www.bmuhealthcare.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BMU Healthcare | Healthcare Investment: Two Decades Strong",
    template: "%s | BMU Healthcare",
  },
  description:
    "BMU Healthcare is a healthcare investment and institutional development platform with over two decades of experience building hospitals and healthcare facilities across Indonesia.",
  keywords: [
    "BMU Healthcare",
    "Brawijaya Medika Utama",
    "PT Brawijaya Medika Utama",
    "healthcare investment Indonesia",
    "investasi kesehatan",
    "Brawijaya Hospital",
    "hospital development Indonesia",
    "healthcare institutional development",
    "rumah sakit Indonesia",
  ],
  authors: [{ name: "BMU Healthcare", url: siteUrl }],
  creator: "BMU Healthcare",
  publisher: "BMU Healthcare",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: siteUrl,
    siteName: "BMU Healthcare",
    title: "BMU Healthcare | Healthcare Investment: Two Decades Strong",
    description:
      "BMU Healthcare is a healthcare investment and institutional development platform with over two decades of experience building hospitals and healthcare facilities across Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMU Healthcare | Healthcare Investment: Two Decades Strong",
    description:
      "Healthcare investment and institutional development platform with over two decades of experience in Indonesia.",
    site: "@BMUHealthcare",
  },
  icons: {
    icon: [
      { url: "/LOGO BMU COLOUR.png", type: "image/png" },
    ],
    apple: [{ url: "/LOGO BMU COLOUR.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: {
      en: `${siteUrl}/en`,
      id: `${siteUrl}/id`,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BMU Healthcare",
  alternateName: "PT. Brawijaya Medika Utama",
  url: siteUrl,
  logo: `${siteUrl}/LOGO BMU COLOUR.png`,
  description:
    "BMU Healthcare is a healthcare investment and institutional development platform with over two decades of experience building hospitals and healthcare facilities across Indonesia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Kapten Tendean No. 24",
    addressLocality: "Jakarta Selatan",
    postalCode: "12720",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-21-7179-1798",
    contactType: "customer service",
    email: "info@bmuhealthcare.com",
    availableLanguage: ["English", "Indonesian"],
  },
  sameAs: ["https://www.bmuhealthcare.com"],
  foundingDate: "2001",
  areaServed: "ID",
  industry: "Healthcare Investment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
