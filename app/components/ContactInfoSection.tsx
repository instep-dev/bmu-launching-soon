"use client";
import Image from "next/image";
import { useTranslations } from "@/app/i18n/TranslationsContext";

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.75a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function ContactInfoSection() {
  const t = useTranslations("contactInfo");

  return (
    <section className="relative min-h-[60vh] md:h-screen w-full overflow-hidden">
      {/* Background: full-width building photo */}
      <Image
        src="/IMAGE GEDUNG.png"
        alt="Office building"
        fill
        className="object-cover object-center"
      />

      {/* Dark gradient overlay — left to transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,24,40,0.92) 0%, rgba(8,24,40,0.75) 30%, rgba(8,24,40,0.35) 55%, rgba(8,24,40,0) 75%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-16 md:py-0">
        <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10">
          <div className="max-w-full sm:max-w-[420px]">
            {/* Heading */}
            <h2 className="text-white font-bold text-[28px] sm:text-[32px] md:text-[38px] leading-tight mb-4 tracking-wide">
              {t("heading")}
            </h2>

            {/* Address */}
            <div className="mb-4">
              <p className="text-white font-semibold text-sm md:text-base">
                PT. BRAWIJAYA MEDIKA UTAMA <br /> Jl. Kapten Tendean No. 24,{" "}
                <br /> Jakarta Selatan 12720
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-2 text-white">
                <span className="flex-shrink-0">
                  <GlobeIcon />
                </span>
                <span className="text-sm">www.bmuhealthcare.com</span>
              </div>
              {/* <div className="flex items-center gap-2 text-white">
                <span className="flex-shrink-0">
                  <PhoneIcon />
                </span>
                <span className="text-sm">+62 21 7179 1798</span>
              </div> */}
              <div className="flex items-center gap-2 text-white">
                <span className="flex-shrink-0">
                  <MailIcon />
                </span>
                <span className="text-sm">info@bmuhealthcare.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
