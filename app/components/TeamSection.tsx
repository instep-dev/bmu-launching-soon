"use client";
import Image from "next/image";
import { useTranslations } from "@/app/i18n/TranslationsContext";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string[];
  imageSrc: string;
  imageAlt: string;
  borderTop?: boolean;
}

function TeamMember({
  name,
  title,
  bio,
  imageSrc,
  imageAlt,
  borderTop = false,
}: TeamMemberProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start py-10 md:py-20 ${
        borderTop ? "border-t border-gray-100" : ""
      }`}
    >
      {/* Left: photo + name + title */}
      <div className="flex flex-col">
        <div className="relative w-full h-[260px] sm:h-[300px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top rounded-md"
          />
        </div>
        <div className="mt-5 flex flex-col items-center text-center">
          <p className="text-[22px] md:text-[26px] font-bold text-[#3dc4be]">{name}</p>
          <p className="capitalize font-medium">{title}</p>
        </div>
      </div>

      {/* Right: bio */}
      <div className="pt-0 md:pt-2">
        {bio.map((paragraph, i) => (
          <p key={i} className="leading-relaxed mb-5 text-sm md:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  const t = useTranslations("team");

  return (
    <section id="team" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-black text-[#3dc4be] leading-tight pt-10 md:pt-20 mb-0">
          {t("sectionHeading")}
        </h2>
        <TeamMember
          name={t("amiraName")}
          title={t("amiraTitle")}
          imageSrc="/PHOTO BU MG.png"
          imageAlt="Amira Ganis - Founder"
          bio={t("amiraBio") as string[]}
        />

        <TeamMember
          name={t("misyalName")}
          title={t("misyalTitle")}
          imageSrc="/PHOTO PAK MB.png"
          imageAlt="Misyal Bahwal - Founder"
          borderTop
          bio={t("misyalBio") as string[]}
        />
      </div>
    </section>
  );
}
