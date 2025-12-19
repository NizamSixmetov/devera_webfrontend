import { motion } from "motion/react";
import { CheckCircle2, Users, Globe, Award } from "lucide-react";

export default function WhyDevera() {
  const benefits = [
    {
      icon: <Users className="text-[#0A66C2]" />,
      title: "Senior-Only Team",
      desc: "Your project is handled by experienced engineers, not juniors.",
    },
    {
      icon: <Globe className="text-[#7C3AED]" />,
      title: "Global Standards",
      desc: "We follow international best practices in security and performance.",
    },
    {
      icon: <Award className="text-[#0A66C2]" />,
      title: "Quality First",
      desc: "Rigorous testing and code reviews are part of our DNA.",
    },
    {
      icon: <CheckCircle2 className="text-[#7C3AED]" />,
      title: "Transparent Process",
      desc: "Real-time updates and clear communication at every stage.",
    },
  ];

  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0A66C2] rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 opacity-80">
                Why Choose Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                The DEVERA Advantage: Where Quality Meets Innovation
              </h3>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                We don't just build software; we build partnerships. Our
                approach is rooted in deep technical expertise and a commitment
                to your business success.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-[#0A66C2] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all active:scale-95"
              >
                Learn More About Us
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
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
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



