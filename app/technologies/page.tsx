import Navbar from "../components/Navbar";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 animate-fade-in" style={{ animationDuration: '0.5s' }}>
      <Navbar />
      <main className="pt-16">
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}
