import { motion } from "motion/react";
import { Monitor, Smartphone, Palette, Cloud, BarChart } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Web Development",
      desc: "High-performance web applications built with React, Next.js, and modern stacks.",
      color: "bg-blue-50 text-[#0A66C2]",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Applications",
      desc: "Native and cross-platform mobile solutions for iOS and Android devices.",
      color: "bg-purple-50 text-[#7C3AED]",
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      desc: "User-centric design that combines aesthetics with seamless functionality.",
      color: "bg-blue-50 text-[#0A66C2]",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & Backend",
      desc: "Scalable cloud infrastructure and robust backend systems for complex data.",
      color: "bg-purple-50 text-[#7C3AED]",
    },
    {
      icon: <BarChart size={32} />,
      title: "IT Consulting",
      desc: "Strategic technology advice to help you navigate the digital landscape.",
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
            Our Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-black"
          >
            Solutions for Every Challenge
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
              <div className="mt-8 flex items-center gap-2 text-[#0A66C2] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <Monitor size={16} className="rotate-[-45deg]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



