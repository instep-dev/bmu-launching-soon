"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "@/app/i18n/TranslationsContext";

export default function ContactFormSection() {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [message, setMessage] = useState("");
  const t = useTranslations("contactForm");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!fullName || !email || !messageTitle || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!agreed) {
      toast.error("Please agree to the privacy policy.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, messageTitle, message }),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent! We'll be in touch soon.");
      setFullName("");
      setEmail("");
      setMessageTitle("");
      setMessage("");
      setAgreed(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Row: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t("name")}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="px-3 py-[10px] text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none"
                style={{ border: "2px solid #b96ec0" }}
              />
              <input
                type="email"
                placeholder={t("email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-[10px] text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none"
                style={{ border: "2px solid #b96ec0" }}
              />
            </div>

            {/* Message title */}
            <input
              type="text"
              placeholder={t("messageTitle")}
              value={messageTitle}
              onChange={(e) => setMessageTitle(e.target.value)}
              className="px-3 py-[10px] text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none"
              style={{ border: "2px solid #b96ec0" }}
            />

            {/* Message */}
            <textarea
              placeholder={t("message")}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
                disabled={loading}
                className="flex items-center gap-2 text-[14px] text-gray-800 font-medium hover:text-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : t("send")}
                {!loading && (
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                    <path
                      d="M1 7H17M11 1L17 7L11 13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
