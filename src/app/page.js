"use client";
import { FaFutbol, FaRegNewspaper, FaUsers, FaTrophy, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NewsCard from "@/components/NewsCard";
import MatchCard from "@/components/MatchCard";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/images/Portada/laliga.png",
    "/images/Portada/premier.png",
    "/images/Portada/serie a.png",
    "/images/Portada/bundesliga.png",
    "/images/Portada/ligue1.png",
    "/images/Portada/champions league.png",
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // === NUEVO: resultados para el carrusel ===
  const resultados = [
    { team1: "Real Madrid", team2: "Barcelona", score: "2 - 1" },
    { team1: "Betis", team2: "Sevilla", score: "1 - 1" },
    { team1: "Atlético", team2: "Valencia", score: "3 - 1" },
    { team1: "Real Sociedad", team2: "Celta", score: "2 - 0" },
    { team1: "Villarreal", team2: "Osasuna", score: "1 - 2" },
    { team1: "Mallorca", team2: "Espanyol", score: "0 - 0" },
    { team1: "Getafe", team2: "Granada", score: "1 - 1" },
    { team1: "Las Palmas", team2: "Girona", score: "0 - 2" },
    { team1: "Alavés", team2: "Rayo Vallecano", score: "1 - 3" },
  ];

  // Control del carrusel
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => setStartIndex((prev) => (prev + 3) % resultados.length);
  const handlePrev = () => setStartIndex((prev) => (prev - 3 + resultados.length) % resultados.length);

  const visibleResultados = resultados.slice(startIndex, startIndex + 3);

  return (
    <main className="bg-base-200 min-h-screen pt-4">
      {/* === HERO CON CARRUSEL === */}
      <section className="relative w-full h-[80vh] overflow-hidden rounded-xl shadow-lg mb-12">
        <img
          src={images[current]}
          alt={`Portada ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg">¡Vive el Fútbol!</h1>
          <p className="text-xl mt-4 opacity-90">
            Toda la emoción del fútbol europeo y mundial
          </p>
        </div>

        <div className="absolute bottom-6 flex justify-center w-full gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white" : "bg-gray-400"}`}
              onClick={() => setCurrent(i)}
            ></button>
          ))}
        </div>
      </section>

      {/* === RESULTADOS CON CARRUSEL === */}
      <section id="resultados" className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-primary">
          <FaTrophy className="text-yellow-500 text-3xl" />
          Últimos Resultados
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Flecha izquierda */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary/80 transition"
          >
            <FaArrowLeft />
          </button>

          {/* Resultados visibles */}
          <div className="grid md:grid-cols-3 gap-6 mx-12">
            {visibleResultados.map((match, index) => (
              <MatchCard
                key={index}
                team1={match.team1}
                team2={match.team2}
                score={match.score}
              />
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary/80 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* === NOTICIAS === */}
      <section id="noticias" className="p-8 bg-base-100">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-primary">
          <FaRegNewspaper className="text-secondary text-3xl" />
          Noticias Recientes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <NewsCard
            title="LaLiga 2025/26 arranca con nuevos fichajes estrella"
            image="/images/noticias/laliga.png"
            date="28/10/2025"
          />
          <NewsCard
            title="España se consolida como potencia en fútbol femenino"
            image="/images/noticias/españafem.png"
            date="27/10/2025"
          />
          <NewsCard
            title="Un clásico vibrante deja a los aficionados sin aliento"
            image="/images/noticias/clasico.png"
            date="26/10/2025"
          />
          <NewsCard
            title="Betis presenta su nuevo estadio sostenible"
            image="/images/noticias/betis.png"
            date="25/10/2025"
          />
          <NewsCard
            title="La tecnología VAR cumple cinco años en España"
            image="/images/noticias/VAR.png"
            date="24/10/2025"
          />
          <NewsCard
            title="Girona sorprende al mundo con su estilo ofensivo"
            image="/images/noticias/girona-antes.png"
            date="23/10/2025"
          />
        </div>
      </section>
    </main>
  );
}
