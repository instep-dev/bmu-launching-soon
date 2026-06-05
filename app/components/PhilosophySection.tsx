"use client";
import Image from "next/image";
import { useTranslations } from "@/app/i18n/TranslationsContext";

export default function PhilosophySection() {
  const t = useTranslations("philosophy");

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Left: building image */}
        <div className="relative pb-8">
          <div className="relative z-10 w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-md overflow-hidden">
            <Image
              src="/philosophy.png"
              alt="Healthcare facility building"
              fill
              className="object-cover"
            />
          </div>
          <Image alt="" fill className="absolute inset-0" src={'/SHADOW PHOTO.png'} />
        </div>

        {/* Right: text */}
        <div>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-black text-[#3dc4be] leading-tight mb-6 md:mb-8">
            {t("label")}
            <br />
            {t("heading")}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t("text")}</p>
        </div>
      </div>
    </section>
  );
}
