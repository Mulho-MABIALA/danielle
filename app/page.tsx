import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Formations from "./components/Formations";
import Competences from "./components/Competences";
import Veille from "./components/Veille";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <Formations />
        <Competences />
        <Veille />
        <Technologies />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
