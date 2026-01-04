import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useLenisInstance } from "../contexts/LenisContext";

const navItems = [
  { key: "about", id: "about" },
  { key: "services", id: "services" },
  { key: "why", id: "why" },
  // { key: "projects", id: "projects" },
  { key: "contact", id: "contact" },
];

const languages = [
  { code: "az", label: "Azərbaycan", flag: "🇦🇿" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export default function Header() {
  const { t } = useTranslation();

  // Get Lenis instance from context
  const lenisRef = useLenisInstance();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "light";
  });

  const langRef = useRef<HTMLDivElement>(null);

  // Block scroll on body when mobile menu is open
  useEffect(() => {
    // Копируем ref для использования в cleanup
    const lenis = lenisRef?.current;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Mobile scroll block

      // Stop Lenis
      if (lenis) {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";

      // Start Lenis
      if (lenis) {
        lenis.start();
      }
    }
    // Cleanup component unmounting
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      if (lenis) {
        lenis.start();
      }
    };
  }, [isMenuOpen, lenisRef]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;

    // Lenis window.scrollTo
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(y);
    } else {
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setIsLangOpen(false);
  };

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-sm py-3"
          : "bg-white dark:bg-[#0a0a0a] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "hero")}
          className="text-2xl font-bold tracking-tighter text-[#0A66C2] dark:text-white flex items-center gap-2 shrink-0"
        >
          {theme === "dark" ? (
            <img
              src="/logos/devera-dark-logo.png"
              alt="Devera Dark Logo"
              className="w-[100px]"
            />
          ) : (
            <img
              src="/logos/devera-light-logo.png"
              alt="Devera Light Logo"
              className="w-[100px]"
            />
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-x-4 lg:gap-x-8 flex-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-[13px] lg:text-sm font-medium transition-colors whitespace-nowrap ${
                activeSection === item.id
                  ? "text-[#0A66C2] dark:text-blue-400"
                  : "text-[#6B7280] dark:text-gray-400 hover:text-[#0A66C2] dark:hover:text-white"
              }`}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 lg:gap-4 shrink-0">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer shrink-0"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <div ref={langRef} className="relative hidden sm:block shrink-0">
            <button
              onClick={() => setIsLangOpen((v) => !v)}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-sm font-medium text-[#0A66C2] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
            >
              <span className="text-lg leading-none">{currentLang.flag}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden animate-in fade-in zoom-in duration-200">
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition cursor-pointer ${
                      i18n.language === lng.code
                        ? "bg-[#0A66C2] text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-base">{lng.flag}</span>
                    <span>{lng.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Burger Button */}
          <button
            className="md:hidden p-2 text-[#6B7280] dark:text-gray-400 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900 transition-all duration-300 ${
          isMenuOpen
            ? "h-screen opacity-100 overflow-y-auto"
            : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4 pb-20">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-lg font-medium ${
                activeSection === item.id
                  ? "text-[#0A66C2] dark:text-blue-400"
                  : "text-[#6B7280] dark:text-gray-400"
              }`}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}

          {/* Mobile Language Selection with Flags */}
          <div className="grid grid-cols-1 gap-2 mt-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">
              {t("chat.language") || "Language"}
            </p>
            <div className="border dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => {
                    changeLanguage(lng.code);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-4 text-left text-sm cursor-pointer transition-colors ${
                    i18n.language === lng.code
                      ? "bg-[#0A66C2] text-white"
                      : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-50 dark:border-gray-800 last:border-none"
                  }`}
                >
                  <span className="text-xl">{lng.flag}</span>
                  <span className="font-medium">{lng.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={(e) => scrollToSection(e, "contact")}
            className="bg-[#7C3AED] text-white px-6 py-4 rounded-2xl font-semibold mt-4 shadow-lg shadow-purple-200 dark:shadow-none cursor-pointer"
          >
            {t("nav.start")}
          </button>
        </nav>
      </div>
    </header>
  );
}
