import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Users, Globe, Award } from "lucide-react";

export default function WhyDevera() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Users className="text-[#0A66C2] dark:text-blue-500" />,
      title: t("whyDevera.benefits.seniorTeam.title"),
      desc: t("whyDevera.benefits.seniorTeam.desc"),
    },
    {
      icon: <Globe className="text-[#7C3AED] dark:text-purple-400" />,
      title: t("whyDevera.benefits.globalStandards.title"),
      desc: t("whyDevera.benefits.globalStandards.desc"),
    },
    {
      icon: <Award className="text-[#0A66C2] dark:text-blue-500" />,
      title: t("whyDevera.benefits.qualityFirst.title"),
      desc: t("whyDevera.benefits.qualityFirst.desc"),
    },
    {
      icon: <CheckCircle2 className="text-[#7C3AED] dark:text-purple-400" />,
      title: t("whyDevera.benefits.transparentProcess.title"),
      desc: t("whyDevera.benefits.transparentProcess.desc"),
    },
  ];

  return (
    <section
      id="why"
      className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0A66C2] dark:bg-blue-900/20 rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden border border-transparent dark:border-blue-500/20 transition-colors duration-300">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 dark:bg-blue-500/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 opacity-80">
                {t("whyDevera.sectionTitle")}
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                {t("whyDevera.mainTitle")}
              </h3>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                {t("whyDevera.description")}
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-[#0A66C2] dark:bg-white dark:text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all active:scale-95 cursor-pointer"
              >
                {t("whyDevera.cta")}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
