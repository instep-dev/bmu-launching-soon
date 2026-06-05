"use client";
import { useState } from "react";
import { useTranslations } from "@/app/i18n/TranslationsContext";

export default function ContactFormSection() {
  const [agreed, setAgreed] = useState(false);
  const t = useTranslations("contactForm");

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background contact.png')" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex justify-center">
        <div
          className="w-full max-w-[680px] px-5 py-8 md:px-10 md:py-12"
          style={{ border: "2px solid #b96ec0" }}
        >
          {/* Label */}
          <p className="text-center text-[12px] text-gray-600 mb-2 flex items-center justify-center gap-2">
            <span
              className="inline-block"
              style={{ width: "28px", height: "2px", backgroundColor: "#111827" }}
            />
            {t("label")}
          </p>

          {/* Heading */}
          <h2 className="text-center mb-8 md:mb-10 text-gray-800 text-lg md:text-xl">
            {t("heading")}
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Row: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t("name")}
                className="px-3 py-[10px] text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none"
                style={{ border: "2px solid #b96ec0" }}
              />
              <input
                type="email"
                placeholder={t("email")}
                className="px-3 py-[10px] text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none"
                style={{ border: "2px solid #b96ec0" }}
              />
            </div>

            {/* Message title */}
            <input
              type="text"
              placeholder={t("messageTitle")}
              className="px-3 py-[10px] text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none"
              style={{ border: "2px solid #b96ec0" }}
            />

            {/* Message */}
            <textarea
              placeholder={t("message")}
              rows={5}
              className="px-3 py-[10px] text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none resize-none"
              style={{ border: "2px solid #b96ec0" }}
            />

            {/* Upload file */}
            <div>
              <p className="text-[12px] text-gray-600 mb-1">{t("uploadFile")}</p>
              <input
                type="file"
                className="text-[12px] text-gray-600 border-2 w-full sm:w-auto p-0.5 border border-[#b96ec0]"
              />
            </div>

            {/* Privacy policy */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-[14px] h-[14px] accent-purple-600 mt-0.5 flex-shrink-0"
              />
              <span className="text-[12px] text-gray-600">{t("privacy")}</span>
            </label>

            {/* Send button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="flex items-center gap-2 text-[14px] text-gray-800 font-medium hover:text-purple-700 transition-colors"
              >
                {t("send")}
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path
                    d="M1 7H17M11 1L17 7L11 13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
