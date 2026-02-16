import Navbar from "../components/Navbar";
import Competences from "../components/Competences";
import Footer from "../components/Footer";

export default function CompetencesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        <Competences />
      </main>
      <Footer />
    </div>
  );
}
