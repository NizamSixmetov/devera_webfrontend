import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "hero")}
            className="text-2xl font-bold tracking-tighter text-[#0A66C2] flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            DEVERA
          </a>

          <div className="flex gap-8 text-sm text-[#6B7280] font-medium">
            <a href="#" className="hover:text-[#0A66C2] transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-[#0A66C2] transition-colors">
              {t("footer.terms")}
            </a>
            <a href="#" className="hover:text-[#0A66C2] transition-colors">
              {t("footer.cookies")}
            </a>
          </div>

          <p className="text-sm text-[#6B7280]">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
