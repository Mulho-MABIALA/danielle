import Navbar from "../components/Navbar";
import Formations from "../components/Formations";
import Footer from "../components/Footer";

export default function FormationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        <Formations />
      </main>
      <Footer />
    </div>
  );
}
