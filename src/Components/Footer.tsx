import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Footer() {
  const { t } = useTranslation();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({ top: element.offsetTop - offset, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "hero")}
            className="flex items-center gap-2 shrink-0"
          >
            {isDark ? (
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

          <p className="text-sm text-[#6B7280] dark:text-gray-500">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}

{
  /* <div className="flex gap-8 text-sm text-[#6B7280] dark:text-gray-400 font-medium">
      <a
        href="#"
        className="hover:text-[#0A66C2] dark:hover:text-blue-400 transition-colors"
      >
        {t("footer.privacy")}
      </a>
      <a
        href="#"
        className="hover:text-[#0A66C2] dark:hover:text-blue-400 transition-colors"
      >
        {t("footer.terms")}
      </a>
      <a
        href="#"
        className="hover:text-[#0A66C2] dark:hover:text-blue-400 transition-colors"
      >
        {t("footer.cookies")}
      </a>
    </div> */
}
