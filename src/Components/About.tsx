import { motion } from "motion/react";
import { Shield, Zap, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Shield className="text-[#0A66C2]" size={24} />,
      title: "Reliability",
      desc: "We build robust systems that stand the test of time and scale with your growth.",
    },
    {
      icon: <Zap className="text-[#7C3AED]" size={24} />,
      title: "Innovation",
      desc: "Staying ahead of the curve with the latest technologies and engineering practices.",
    },
    {
      icon: <Target className="text-[#0A66C2]" size={24} />,
      title: "Expertise",
      desc: "A team of senior engineers dedicated to solving complex business challenges.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-[#0A66C2] uppercase tracking-[0.2em] mb-4">
              About DEVERA
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Engineering Excellence for the Digital Era
            </h3>
            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
              DEVERA is a technology-first IT company specializing in
              high-performance software development. We don't just write code;
              we build digital foundations for the world's most ambitious
              companies.
            </p>
            <p className="text-lg text-[#6B7280] mb-12 leading-relaxed">
              Our mission is to bridge the gap between complex business needs
              and elegant technical solutions, ensuring our clients stay
              competitive in an ever-evolving landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-black">{value.title}</h4>
                  <p className="text-sm text-[#6B7280]">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="DEVERA Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-10 -left-10 bg-[#0A66C2] text-white p-8 rounded-[40px] shadow-2xl">
              <div className="flex gap-12">
                <div>
                  <p className="text-4xl font-bold mb-1">150+</p>
                  <p className="text-xs uppercase tracking-widest opacity-80">
                    Projects
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">10+</p>
                  <p className="text-xs uppercase tracking-widest opacity-80">
                    Years
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



