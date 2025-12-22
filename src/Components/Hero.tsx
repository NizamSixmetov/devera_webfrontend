import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";

export default function Hero() {
  const { t } = useTranslation();
  const technologies = useMemo(() => [
  // { name: "React", src: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  // { name: "Next.js", src: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  // { name: "Node.js", src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  // { name: "TypeScript", src: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  // { name: "Tailwind", src: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
  // { name: "Framer Motion", src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
  // { name: "PostgreSQL", src: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  // { name: "Docker", src: "https://cdn.worldvectorlogo.com/logos/docker-4.svg" },
  { name: "React", src: "/swiper-images/react-2.svg" },
  { name: "Next.js", src: "/swiper-images/next-js.svg" },
  { name: "Node.js", src: "/swiper-images/nodejs-icon.svg" },
  { name: "TypeScript", src: "/swiper-images/typescript.svg" },
  { name: "Tailwind", src: "/swiper-images/tailwind-css-2.svg" },
  { name: "Framer Motion", src: "/swiper-images/framer-motion.svg" },
  { name: "PostgreSQL", src: "/swiper-images/postgresql.svg" },
  { name: "Docker", src: "/swiper-images/docker-4.svg" },
], []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-300 flex-col"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-50 dark:bg-purple-900/10 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#0A66C2] dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A66C2]"></span>
            </span>
            {t("hero.badge")}
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[0.95] mb-8 dark:text-white">
            {t("hero.title1")}
            <span className="block text-[#0A66C2]">{t("hero.title2")}</span>
          </h1>

          <p className="text-xl text-[#6B7280] dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-200 dark:shadow-none active:scale-95 cursor-pointer"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight size={20} />
            </button>
            {/* <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white dark:bg-transparent border border-gray-200 dark:border-gray-800 text-black dark:text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:border-[#0A66C2] active:scale-95 cursor-pointer"
            >
              {t("hero.ctaSecondary")}
              <ChevronRight size={20} className="text-[#0A66C2]" />
            </button> */}
          </div>
        </motion.div>

        {/* Right Column: Dashboard Image & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white dark:bg-gray-900 rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-2xl p-4 overflow-hidden mt-10">
            <img
              // src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              src="/images/hero-photo.avif"
              alt="DEVERA Dashboard"
              className="rounded-4xl w-full h-auto object-cover opacity-90 dark:opacity-80"
            />

            {/* Floating Element 1: Growth */}
            {/* <div className="absolute top-10 right-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-50 dark:border-gray-800 animate-bounce-slow w-42">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold">
                    {t("hero.stats.growth")}
                  </p>
                  <p className="text-lg font-bold text-black dark:text-white">
                    +124%
                  </p>
                </div>
              </div>
            </div> */}

            {/* Floating Element 2: Safety */}
            {/* <div className="absolute top-31 right-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-50 dark:border-gray-800 animate-bounce-slow w-42 [animation-delay:0.8s]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold">
                    {t("hero.stats.safety")}
                  </p>
                  <p className="text-lg font-bold text-black dark:text-white">
                    +100%
                  </p>
                </div>
              </div>
            </div> */}

            {/* Floating Element 3: Scale */}
            {/* <div className="absolute top-52 right-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-50 dark:border-gray-800 animate-bounce-slow w-42 [animation-delay:1.6s]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold">
                    {t("hero.stats.scale")}
                  </p>
                  <p className="text-lg font-bold text-black dark:text-white">
                    +137%
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Decorative Blur Circle */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#0A66C2]/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Technology Scroll */}
      <div className="mt-20 overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] w-full">
        <motion.div
          className="flex gap-12 items-center w-max"
          animate={{
            x: [0, -1000], // left to right movement
          }}
          transition={{
            duration: 20, // Speed of movement (the larger the number, the slower)
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate the array for seamless scrolling */}
          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="h-8 w-auto object-contain dark:invert-[0.1]"
              />
              <span className="text-gray-500 dark:text-gray-400 font-medium tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
