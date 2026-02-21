import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 animate-fade-in" style={{ animationDuration: '0.5s' }}>
      <Navbar />
      <main className="pt-16">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
