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

      {/* Hero content area — min-h so content never clips */}
      <div className="min-h-[56vh] sm:min-h-[65vh] md:min-h-[85vh] lg:min-h-[90vh] relative z-10">
        <div className="max-w-[1280px] w-full mx-auto px-4 md:px-2 h-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col space-y-3 md:space-y-3 lg:space-y-5 pb-8 md:pb-10 lg:pb-36 h-full">
            <div className="flex-1 min-h-[5rem] md:min-h-[6rem] lg:min-h-[8rem]" />
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
              {t("title")}
            </h1>
            <p className="text-xs sm:text-sm md:text-sm lg:text-base max-w-sm md:max-w-none">
              {t("description1")}
            </p>
            <p className="text-xs sm:text-sm md:text-sm lg:text-base max-w-sm md:max-w-none">
              {t("description2")}
            </p>
            <p className="text-xs sm:text-sm md:text-sm lg:text-base max-w-sm md:max-w-none">
              {t("description3")}
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

      {/* Stats bar — in-flow on mobile & tablet, absolute on lg+ desktop */}
      <div className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-10 px-4 md:px-10 py-4 md:py-3 lg:py-0 lg:absolute lg:-bottom-10 lg:left-1/2 lg:-translate-x-1/2 lg:w-[1280px] lg:px-0">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`${colors[i]} rounded-md text-center p-3 flex items-center justify-center min-h-[80px] md:min-h-[70px] lg:min-h-0`}
          >
            <div>
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-3xl font-semibold uppercase">
                {item.title}
              </h2>
              <p className="text-xs md:text-xs lg:text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
