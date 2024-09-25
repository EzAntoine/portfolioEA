import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
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
  );
}
