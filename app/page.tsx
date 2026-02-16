import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HomeWrapper from "./components/HomeWrapper";

export default function Home() {
  return (
    <HomeWrapper>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        <main className="pt-16">
          <Hero />
        </main>
        <Footer />
      </div>
    </HomeWrapper>
  );
}
