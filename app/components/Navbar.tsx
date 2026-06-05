"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, useSpring, useScroll } from "framer-motion";
import { useTranslations } from "@/app/i18n/TranslationsContext";

const NAV_LINK_KEYS = [
  { key: "home", id: "home" },
  { key: "about", id: "about" },
  { key: "milestone", id: "milestone" },
  { key: "team", id: "team" },
  { key: "contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [pastHero, setPastHero] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname?.split("/")?.[1] === "id" ? "id" : "en";
  const t = useTranslations("nav");

  const { scrollY } = useScroll();
  const springConfig = { stiffness: 200, damping: 20, mass: 0.8 };
  const scrollProgress = useSpring(0, springConfig);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const threshold = heroHeight - 72;
      const past = latest > threshold;
      setPastHero(past);
      scrollProgress.set(past ? 1 : 0);
    });
  }, [scrollY, scrollProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const ids = ["contact", "team", "milestone", "about", "home"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) {
          setActiveSection(id);
          return;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isAtHero = !pastHero;

  const switchLocale = (newLocale: string) => {
    setLangOpen(false);
    setMenuOpen(false);
    const newPath =
      pathname?.replace(/^\/(en|id)(\/|$)/, `/${newLocale}$2`) ??
      `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full pb-2"
      animate={{
        background: pastHero
          ? "linear-gradient(90deg, #1abfbb 0%, #7b4ba0 65%, #9b2356 100%)"
          : "rgba(255, 255, 255, 1)",
        boxShadow: pastHero
          ? "0 2px 20px rgba(0,0,0,0.15)"
          : "0 2px 12px rgba(0,0,0,0.08)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 22, mass: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-2 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Image
              src={isAtHero ? "/LOGO BMU COLOUR.png" : "/LOGO BMU WHITE.png"}
              alt="BMU Healthcare"
              width={290}
              height={48}
              className="object-contain w-[150px] sm:w-[200px] md:w-[240px] lg:w-[290px]"
              priority
            />
          </motion.div>
        </a>

        {/* Desktop Nav links + language switcher */}
        <div className="hidden md:flex items-center gap-6 lg:gap-9">
          {NAV_LINK_KEYS.map(({ key, id }) => {
            const isActive = activeSection === id;
            return (
              <motion.a
                key={id}
                href={`#${id}`}
                className="font-medium transition-colors text-sm lg:text-base"
                style={{ letterSpacing: "0.06em" }}
                animate={{
                  color: isActive
                    ? "#1abfbb"
                    : isAtHero
                    ? "#1a1a2e"
                    : "#ffffff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                whileHover={{
                  scale: 1.08,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
              >
                {t(key)}
              </motion.a>
            );
          })}

          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <motion.button
              className="text-[13px] font-medium flex items-center gap-1"
              style={{ letterSpacing: "0.06em" }}
              animate={{ color: isAtHero ? "#1a1a2e" : "#ffffff" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              whileHover={{
                scale: 1.08,
                transition: { type: "spring", stiffness: 400, damping: 15 },
              }}
              onClick={() => setLangOpen((v) => !v)}
            >
              {locale.toUpperCase()}{" "}
              <motion.span
                className="text-[10px]"
                animate={{ rotate: langOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                ▼
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg overflow-hidden min-w-[64px]"
                >
                  {(["en", "id"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLocale(lang)}
                      className={`block w-full px-4 py-2 text-left text-[13px] font-medium hover:bg-gray-50 transition-colors ${
                        locale === lang ? "text-[#1abfbb]" : "text-gray-700"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="flex md:hidden flex-col justify-center items-center w-9 h-9 gap-[5px]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-[2px] w-6 rounded bg-current"
            animate={{
              color: isAtHero ? "#1a1a2e" : "#ffffff",
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 7 : 0,
            }}
            style={{ backgroundColor: isAtHero ? "#1a1a2e" : "#ffffff" }}
          />
          <motion.span
            className="block h-[2px] w-6 rounded"
            animate={{ opacity: menuOpen ? 0 : 1 }}
            style={{ backgroundColor: isAtHero ? "#1a1a2e" : "#ffffff" }}
          />
          <motion.span
            className="block h-[2px] w-6 rounded"
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? -7 : 0,
            }}
            style={{ backgroundColor: isAtHero ? "#1a1a2e" : "#ffffff" }}
          />
        </motion.button>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pb-5 flex flex-col gap-4 border-t border-white/20">
              {NAV_LINK_KEYS.map(({ key, id }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="font-medium text-sm py-1"
                    style={{
                      color: isActive
                        ? "#1abfbb"
                        : pastHero
                        ? "#ffffff"
                        : "#1a1a2e",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t(key)}
                  </a>
                );
              })}

              {/* Language switcher in mobile menu */}
              <div className="flex gap-3 pt-1 border-t border-white/20">
                {(["en", "id"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLocale(lang)}
                    className="text-[13px] font-medium py-1"
                    style={{
                      color:
                        locale === lang
                          ? "#1abfbb"
                          : pastHero
                          ? "#ffffff"
                          : "#1a1a2e",
                    }}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
