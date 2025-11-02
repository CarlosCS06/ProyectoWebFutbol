import { FaFutbol, FaRegNewspaper, FaUsers, FaTrophy } from "react-icons/fa";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import MatchCard from "@/components/MatchCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-base-200 min-h-screen pt-4">
      {/* HERO SECTION */}
      <Hero />

      {/* RESULTADOS */}
      <section id="resultados" className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-primary">
          <FaTrophy className="text-yellow-500 text-3xl" />
          Últimos Resultados
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <MatchCard team1="Real Madrid" team2="Barcelona" score="2 - 1" />
          <MatchCard team1="Betis" team2="Sevilla" score="1 - 1" />
          <MatchCard team1="Atlético" team2="Valencia" score="3 - 1" />
        </div>
      </section>

      {/* NOTICIAS */}
      <section id="noticias" className="p-8 bg-base-100">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-primary">
          <FaRegNewspaper className="text-secondary text-3xl" />
          Noticias Recientes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <NewsCard title="LaLiga 2025/26 arranca con nuevos fichajes estrella" image="/news1.jpg" date="28/10/2025" />
          <NewsCard title="España se consolida como potencia en fútbol femenino" image="/news2.jpg" date="27/10/2025" />
          <NewsCard title="Un clásico vibrante deja a los aficionados sin aliento" image="/news3.jpg" date="26/10/2025" />
          <NewsCard title="Betis presenta su nuevo estadio sostenible" image="/news4.jpg" date="25/10/2025" />
          <NewsCard title="La tecnología VAR cumple cinco años en España" image="/news5.jpg" date="24/10/2025" />
          <NewsCard title="Girona sorprende al mundo con su estilo ofensivo" image="/news6.jpg" date="23/10/2025" />
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
