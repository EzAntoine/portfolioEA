import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className='container mx-auto px-12 py-4'>
        <Navbar/>
        <div className="container mt-24 mx-auto">
          <HeroSection/>
        </div>  
        <About/>
        <ProjectsSection/>
        <Footer/>
      </div>
    </main>
  );
}
