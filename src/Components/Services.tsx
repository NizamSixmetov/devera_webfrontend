import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Monitor, Smartphone, Palette, Cloud, BarChart } from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Monitor size={32} />,
      title: t("services.items.web.title"),
      desc: t("services.items.web.desc"),
      color: "bg-blue-50 dark:bg-blue-900/20 text-[#0A66C2] dark:text-blue-400",
    },
    {
      icon: <Smartphone size={32} />,
      title: t("services.items.mobile.title"),
      desc: t("services.items.mobile.desc"),
      color:
        "bg-purple-50 dark:bg-purple-900/20 text-[#7C3AED] dark:text-purple-400",
    },
    {
      icon: <Palette size={32} />,
      title: t("services.items.design.title"),
      desc: t("services.items.design.desc"),
      color: "bg-blue-50 dark:bg-blue-900/20 text-[#0A66C2] dark:text-blue-400",
    },
    {
      icon: <Cloud size={32} />,
      title: t("services.items.cloud.title"),
      desc: t("services.items.cloud.desc"),
      color:
        "bg-purple-50 dark:bg-purple-900/20 text-[#7C3AED] dark:text-purple-400",
    },
    {
      icon: <BarChart size={32} />,
      title: t("services.items.consulting.title"),
      desc: t("services.items.consulting.desc"),
      color: "bg-blue-50 dark:bg-blue-900/20 text-[#0A66C2] dark:text-blue-400",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gray-50/50 dark:bg-[#0f0f0f] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 className="text-sm font-bold text-[#0A66C2] dark:text-blue-400 uppercase tracking-[0.2em] mb-4">
            {t("services.sectionTitle")}
          </motion.h2>
          <motion.h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            {t("services.mainTitle")}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-900 p-10 rounded-[32px] border border-gray-100 dark:border-gray-800 hover:border-[#0A66C2]/30 transition-all hover:shadow-xl group"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${service.color}`}
              >
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-black dark:text-white mb-4">
                {service.title}
              </h4>
              <p className="text-[#6B7280] dark:text-gray-400 leading-relaxed">
                {service.desc}
              </p>
              {/* <a
                href="#"
                className="mt-8 flex items-center gap-2 text-[#0A66C2] dark:text-blue-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
              >
                {t("services.learnMore")} <ArrowUpRight size={16} />
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
