"use client";
import Image from "next/image";
import { useTranslations } from "@/app/i18n/TranslationsContext";

export default function VisionMissionSection() {
  const t = useTranslations("vision");

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Left: image */}
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px]">
          <Image
            src="/vision.jpeg"
            alt="Healthcare professional"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Right: Vision, Mission, context */}
        <div>
          <div className="mb-6 md:mb-8">
            <h3 className="text-[22px] md:text-[26px] font-bold text-[#3dc4be] mb-3">
              {t("visionHeading")}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t("visionText")}</p>
          </div>

          <div className="mb-6 md:mb-8">
            <h3 className="text-[22px] md:text-[26px] font-bold text-[#3dc4be] mb-3">
              {t("missionHeading")}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t("missionText")}</p>
          </div>

          <div>
            <h3 className="text-[22px] md:text-[26px] font-bold text-[#3dc4be] mb-3">
              {t("contextHeading")}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t("contextText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
