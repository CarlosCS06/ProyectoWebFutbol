"use client";
import Link from "next/link";
import { FaFutbol, FaTable, FaNewspaper, FaListOl } from "react-icons/fa";

export default function LaLigaPage() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4 flex justify-center items-center gap-2">
          <FaFutbol /> LaLiga EA Sports 2025
        </h1>
        <p className="text-lg text-gray-600">
          Toda la actualidad, resultados y clasificación del fútbol español.
        </p>
      </section>

      {/* Menú interno */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        <Link href="/ligas/laliga/resultados" className="btn btn-primary flex items-center gap-2">
          <FaListOl /> Resultados recientes
        </Link>
        <Link href="/ligas/laliga/clasificacion" className="btn btn-secondary flex items-center gap-2">
          <FaTable /> Clasificación actual
        </Link>
        <Link href="/ligas/laliga/equipos" className="btn btn-accent flex items-center gap-2">
          <FaFutbol /> Equipos
        </Link>
      </div>

      {/* Noticias destacadas */}
      <section className="bg-base-100 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 flex justify-center items-center gap-2">
          <FaNewspaper className="text-primary" /> Noticias de LaLiga
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
            <figure>
              <img src="/images/news/laliga1.jpg" alt="Noticia LaLiga" />
            </figure>
            <div className="card-body">
              <h3 className="font-bold text-lg">El Real Madrid amplía su ventaja en la cima</h3>
              <p>Con una nueva victoria, el equipo blanco se consolida como líder, mientras Villarreal y Barcelona intentan seguirle el ritmo.</p>
              <span className="text-sm text-gray-500">02 de noviembre de 2025</span>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
            <figure>
              <img src="/images/news/laliga2.jpg" alt="Noticia LaLiga" />
            </figure>
            <div className="card-body">
              <h3 className="font-bold text-lg">Girona sorprende con su empate ante el Oviedo</h3>
              <p>Un partido lleno de goles que dejó al Girona con un punto valioso en casa, demostrando su garra en el cierre de la jornada.</p>
              <span className="text-sm text-gray-500">01 de noviembre de 2025</span>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
            <figure>
              <img src="/images/news/laliga3.jpg" alt="Noticia LaLiga" />
            </figure>
            <div className="card-body">
              <h3 className="font-bold text-lg">La lucha por Europa se intensifica</h3>
              <p>Betis, Getafe y Espanyol mantienen su pulso por las posiciones europeas en una temporada cada vez más competitiva.</p>
              <span className="text-sm text-gray-500">31 de octubre de 2025</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
