import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      desc: "A comprehensive financial analytics platform for real-time market tracking.",
    },
    {
      title: "HealthTrack AI",
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      desc: "AI-powered health monitoring application with predictive diagnostics.",
    },
    {
      title: "EcoCommerce",
      category: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      desc: "Sustainable marketplace platform with integrated carbon footprint tracking.",
    },
    {
      title: "CloudSync Pro",
      category: "SaaS",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      desc: "Enterprise-grade cloud synchronization and collaboration tool.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-[#0A66C2] uppercase tracking-[0.2em] mb-4">
              Our Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Selected Projects That Define Our Expertise
            </h3>
          </div>
          <button className="group flex items-center gap-2 text-[#0A66C2] font-bold hover:gap-4 transition-all">
            View All Case Studies <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-[40px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-bold text-[#7C3AED] uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h4 className="text-2xl font-bold text-black">
                      {project.title}
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <p className="text-[#6B7280] leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



