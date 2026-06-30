"use client";
import Image from "next/image";
import { useTranslations } from "@/app/i18n/TranslationsContext";

export default function TeamSection() {
  const t = useTranslations("team");

  return (
    <section id="team" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start">
          {/* Left: photo */}
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/PHOTO BU MG.png"
              alt="Amira Ganis - Founder"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Right: heading + quote + bio */}
          <div className="pt-0 md:pt-2">
            <h2 className="text-[36px] sm:text-[38px] md:text-[42px] font-black text-gray-600 leading-tight mb-6">
              {t("sectionHeading")}
            </h2>
            <p className="text-[17px] md:text-[19px] italic font-bold leading-snug mb-7 text-gray-900">
              &ldquo;{t("amiraQuote")}&rdquo;
            </p>
            {(t("amiraBio") as string[]).map((paragraph, i) => (
              <p key={i} className="leading-relaxed mb-5 text-sm md:text-base text-gray-700 text-justify">
                {paragraph}
              </p>
            ))}
            <div className="mt-6">
              <p className="font-bold text-sm md:text-base text-gray-900">{t("amiraName")}</p>
              <p className="italic text-sm md:text-base text-gray-700">{t("amiraTitle")}</p>
              <p className="font-bold text-sm md:text-base text-gray-900">BMU Healthcare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
