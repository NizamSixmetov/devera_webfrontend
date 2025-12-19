import { motion } from "motion/react";
import { Monitor, Smartphone, Palette, Cloud, BarChart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Monitor size={32} />,
      title: t("services.items.web.title"),
      desc: t("services.items.web.desc"),
      color: "bg-blue-50 text-[#0A66C2]",
    },
    {
      icon: <Smartphone size={32} />,
      title: t("services.items.mobile.title"),
      desc: t("services.items.mobile.desc"),
      color: "bg-purple-50 text-[#7C3AED]",
    },
    {
      icon: <Palette size={32} />,
      title: t("services.items.design.title"),
      desc: t("services.items.design.desc"),
      color: "bg-blue-50 text-[#0A66C2]",
    },
    {
      icon: <Cloud size={32} />,
      title: t("services.items.cloud.title"),
      desc: t("services.items.cloud.desc"),
      color: "bg-purple-50 text-[#7C3AED]",
    },
    {
      icon: <BarChart size={32} />,
      title: t("services.items.consulting.title"),
      desc: t("services.items.consulting.desc"),
      color: "bg-blue-50 text-[#0A66C2]",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#0A66C2] uppercase tracking-[0.2em] mb-4"
          >
            {t("services.sectionTitle")}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-black"
          >
            {t("services.mainTitle")}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[32px] border border-gray-100 hover:border-[#0A66C2]/30 transition-all hover:shadow-xl group cursor-default"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${service.color}`}
              >
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-black mb-4">
                {service.title}
              </h4>
              <p className="text-[#6B7280] leading-relaxed">{service.desc}</p>
              <a href="#" className="mt-8 flex items-center gap-2 text-[#0A66C2] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer w-fit">
                {t("services.learnMore")}{" "}
                <Monitor size={16} className="rotate-[-45deg]" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
