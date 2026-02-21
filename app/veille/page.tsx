import Navbar from "../components/Navbar";
import Veille from "../components/Veille";
import Footer from "../components/Footer";

export default function VeillePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 animate-fade-in" style={{ animationDuration: '0.5s' }}>
      <Navbar />
      <main className="pt-16">
        <Veille />
      </main>
      <Footer />
    </div>
  );
}
