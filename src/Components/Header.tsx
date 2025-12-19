import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const navItems = [
  { key: "about", id: "about" },
  { key: "services", id: "services" },
  { key: "why", id: "why" },
  { key: "projects", id: "projects" },
  { key: "contact", id: "contact" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "az", label: "Azərbaycan" },
];

export default function Header() {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);

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

    window.scrollTo({ top: y, behavior: "smooth" });
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
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "hero")}
          className="text-2xl font-bold tracking-tighter text-[#0A66C2] flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          DEVERA
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5.5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-[#0A66C2]"
                  : "text-[#6B7280] hover:text-[#0A66C2]"
              }`}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}

          {/* Language Dropdown BETWEEN Contact and Button */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setIsLangOpen((v) => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-[#6B7280] hover:text-[#0A66C2] transition"
            >
              {currentLang.label}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    className={`w-full text-left px-4 py-2 text-sm transition ${
                      i18n.language === lng.code
                        ? "bg-[#0A66C2] text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {lng.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Start Project Button LAST */}
          <button
            onClick={(e) => scrollToSection(e, "contact")}
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all active:scale-95 shadow-lg shadow-purple-200 cursor-pointer"
          >
            {t("nav.start")}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#6B7280] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "min-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-lg font-medium ${
                activeSection === item.id ? "text-[#0A66C2]" : "text-[#6B7280]"
              }`}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}

          {/* Mobile Language */}
          <div className="border rounded-xl overflow-hidden mt-2">
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => {
                  changeLanguage(lng.code);
                  setIsMenuOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm cursor-pointer ${
                  i18n.language === lng.code
                    ? "bg-[#0A66C2] text-white"
                    : "bg-white text-gray-600 hover:bg-[#0A66C2] hover:text-white"
                }`}
              >
                {lng.label}
              </button>
            ))}
          </div>

          <button
            onClick={(e) => scrollToSection(e, "contact")}
            className="bg-[#7C3AED] text-white px-6 py-3 rounded-xl font-semibold mt-3 cursor-pointer"
          >
            {t("nav.start")}
          </button>
        </nav>
      </div>
    </header>
  );
}
