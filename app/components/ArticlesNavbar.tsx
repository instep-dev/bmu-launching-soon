"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/app/i18n/TranslationsContext";

export default function ArticlesNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const tNav = useTranslations("nav");

  const segments = pathname?.split("/").filter(Boolean) ?? [];
  const locale = segments[0] === "id" ? "id" : "en";
  const otherLocale = locale === "id" ? "en" : "id";

  const slug = segments.length > 2 ? segments[2] : null;
  const switchHref = slug
    ? `/${otherLocale}/articles/${slug}`
    : `/${otherLocale}/articles`;

  return (
    <nav
      className="sticky top-0 z-50 w-full pb-2"
      style={{
        background:
          "linear-gradient(90deg, #1abfbb 0%, #7b4ba0 65%, #9b2356 100%)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-2 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/LOGO BMU WHITE.png"
            alt="BMU Healthcare"
            width={290}
            height={48}
            className="object-contain w-[150px] sm:w-[200px] md:w-[240px] lg:w-[290px]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-9">
          <Link
            href={`/${locale}`}
            className="text-white font-medium text-sm lg:text-base tracking-[0.06em] hover:opacity-80 transition-opacity"
          >
            {tNav("home")}
          </Link>
          <Link
            href={`/${locale}/articles`}
            className="text-white font-bold text-sm lg:text-base tracking-[0.06em] underline underline-offset-4 decoration-white/60 hover:opacity-80 transition-opacity"
          >
            {tNav("articles")}
          </Link>
          <Link
            href={switchHref}
            className="text-white/80 text-[13px] font-medium tracking-[0.06em] hover:text-white transition-colors"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <Link
            href={switchHref}
            className="text-white/80 text-[13px] font-medium tracking-[0.06em]"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            className="flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-[2px] w-6 rounded bg-white transition-all duration-200"
              style={{
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              className="block h-[2px] w-6 rounded bg-white transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-6 rounded bg-white transition-all duration-200"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 border-t border-white/20">
          <Link
            href={`/${locale}`}
            onClick={() => setMenuOpen(false)}
            className="text-white font-medium text-sm py-1 tracking-[0.06em]"
          >
            {tNav("home")}
          </Link>
          <Link
            href={`/${locale}/articles`}
            onClick={() => setMenuOpen(false)}
            className="text-white font-bold text-sm py-1 tracking-[0.06em] underline underline-offset-4 decoration-white/60"
          >
            {tNav("articles")}
          </Link>
        </div>
      )}
    </nav>
  );
}
