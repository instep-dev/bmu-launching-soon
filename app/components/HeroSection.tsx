"use client";
import Image from "next/image";
import { useTranslations } from "@/app/i18n/TranslationsContext";

export default function HeroSection() {
  const t = useTranslations("hero");

  const stats = [
    { title: `${t("stat1Number")} ${t("stat1Label")}`, desc: t("stat1Sub") },
    { title: t("stat2Number"), desc: t("stat2Sub") },
    { title: t("stat3Number"), desc: t("stat3Sub") },
    { title: t("stat4Title"), desc: t("stat4Sub") },
  ];

  const colors = [
    "bg-[#54668e]",
    "bg-[#98a2bc]",
    "bg-[#889ec5]",
    "bg-[#86879b]",
  ];

  return (
    <section
      id="home"
      className="flex flex-col bg-white text-white relative"
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover object-left"
        fill
        alt=""
        src="/IMAGE GEDUNG.png"
      />

      {/* Hero content area */}
      <div className="h-[55vh] sm:h-[65vh] md:h-[90vh] relative z-10">
        <div className="max-w-[1280px] w-full mx-auto px-4 md:px-2 h-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-end space-y-4 md:space-y-6 pb-8 md:pb-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              {t("title")}
            </h1>
            <p className="text-sm md:text-base max-w-sm md:max-w-none">
              {t("description")}
            </p>
            <div>
              <a href="#about" className="bg-transparent px-4 py-2 border rounded-md inline-flex text-sm md:text-base">
                {t("cta")}
              </a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Stats bar — in-flow on mobile, absolute on desktop */}
      <div className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-12 px-4 md:px-0 py-4 md:py-0 md:absolute md:-bottom-10 md:left-1/2 md:-translate-x-1/2 md:w-[1280px]">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`${colors[i]} rounded-md text-center p-3 flex items-center justify-center min-h-[80px] md:min-h-0`}
          >
            <div>
              <h2 className="text-lg sm:text-xl md:text-3xl font-semibold uppercase">
                {item.title}
              </h2>
              <p className="text-xs md:text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
