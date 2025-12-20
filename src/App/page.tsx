import Hero from "../Components/Hero";
import About from "../Components/About";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import WhyDevera from "../Components/WhyDevera";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] font-sans selection:bg-[#0A66C2]/10 selection:text-[#0A66C2]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyDevera />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Custom scrollbar for a premium feel */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f9fafb;
        }

        ::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }

        /* Section anchor offset for fixed header */
        section {
          scroll-margin-top: 80px;
        }
      `}</style>
    </div>
  );
}
