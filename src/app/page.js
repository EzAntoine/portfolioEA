import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Head>
        <title>Ezequiel Antoine - Portfolio</title>
        <meta
          name="description"
          content="Portfolio personal - Ezequiel Antoine"
        ></meta>
        <meta property="og:title" content="Ezequiel Antoine - Portfolio"></meta>
        <meta
          property="og:description"
          content="Portfolio personal - Ezequiel Antoine"
        ></meta>
        <meta property="og:image" content="/public/preview.png"></meta>
      </Head>
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
