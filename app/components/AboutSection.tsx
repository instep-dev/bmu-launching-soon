"use client";
import Image from "next/image";
import { useTranslations } from "@/app/i18n/TranslationsContext";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-white py-12 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Left: images */}
        <div>
          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] mt-4 md:mt-8">
            <Image
              src="/journey.jpeg"
              alt="BMU Healthcare team"
              fill
              className="object-cover object-top rounded-md"
            />
          </div>
          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] mt-4 md:mt-8">
            <Image
              src="/GROUND BREAKING.jpeg"
              alt="BMU Healthcare team"
              fill
              className="object-cover object-top rounded-md"
            />
          </div>
        </div>

        {/* Right: text */}
        <div className="pt-2 md:pt-4">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-black mb-3 text-[#3dc4be]">
            {t("heading")}
          </h2>

          <p className=" text-gray-600 leading-relaxed mb-5">
            {t("p1")}
          </p>

          <p className=" text-gray-600 leading-relaxed mb-5">
            {t("p2")}
          </p>

          <p className=" text-gray-600 leading-relaxed mb-5">
            {t("p3")}
          </p>

          <p className=" text-gray-600 leading-relaxed mb-5">
            {t("p4")}
          </p>

          <p className=" text-gray-600 leading-relaxed mb-5">
            {t("p5")}
          </p>

          <p className=" text-gray-600 leading-relaxed">
            {t("p6")}
          </p>
        </div>
      </div>
    </section>
  );
}
