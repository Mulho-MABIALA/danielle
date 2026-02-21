import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 animate-fade-in" style={{ animationDuration: '0.5s' }}>
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}
