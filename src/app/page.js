import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import { LanguageProvider } from "./i18n/LanguageContext";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ezequiel Antoine",
  url: "https://ezequielantoine.vercel.app/",
  jobTitle: "Desarrollador web full stack",
  description:
    "Desarrollador web y programador especializado en aplicaciones y sitios web con React, Next.js, TypeScript y Node.js.",
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Desarrollo web"],
  sameAs: [
    "https://github.com/EzAntoine",
    "https://linkedin.com/in/ezequielantoine",
  ],
};

export default function Home() {
  return (
    <LanguageProvider>
      <main className="flex flex-col min-h-screen bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className="container px-12 py-4 mx-auto">
          <Navbar />
          <div className="container mx-auto mt-24">
            <HeroSection />
          </div>
          <About />
          <ProjectsSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
}
