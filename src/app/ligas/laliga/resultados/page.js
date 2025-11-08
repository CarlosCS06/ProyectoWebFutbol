"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosPrimera() {
  const resultados = [
    {
      local: "Real Sociedad",
      escudoLocal: "/images/equiposfutbol/primera division/real sociedad.png",
      marcador: "2 - 1",
      visitante: "Sevilla",
      escudoVisitante: "/images/equiposfutbol/primera division/sevilla.png",
    },
    {
      local: "Girona",
      escudoLocal: "/images/equiposfutbol/primera division/girona.png",
      marcador: "3 - 3",
      visitante: "Oviedo",
      escudoVisitante: "/images/equiposfutbol/primera division/oviedo.png",
    },
    {
      local: "Espanyol",
      escudoLocal: "/images/equiposfutbol/primera division/espanyol.png",
      marcador: "1 - 0",
      visitante: "Elche",
      escudoVisitante: "/images/equiposfutbol/primera division/elche.png",
    },
    {
      local: "Athletic",
      escudoLocal: "/images/equiposfutbol/primera division/bilbao.png",
      marcador: "0 - 1",
      visitante: "Getafe",
      escudoVisitante: "/images/equiposfutbol/primera division/getafe.png",
    },
    {
      local: "Valencia",
      escudoLocal: "/images/equiposfutbol/primera division/valencia.png",
      marcador: "0 - 2",
      visitante: "Villarreal",
      escudoVisitante: "/images/equiposfutbol/primera division/villarreal.png",
    },
    {
      local: "Mallorca",
      escudoLocal: "/images/equiposfutbol/primera division/mallorca.png",
      marcador: "1 - 1",
      visitante: "Levante",
      escudoVisitante: "/images/equiposfutbol/primera division/levante.png",
    },
    {
      local: "Real Madrid",
      escudoLocal: "/images/equiposfutbol/primera division/real de madrid.png",
      marcador: "2 - 1",
      visitante: "Barcelona",
      escudoVisitante: "/images/equiposfutbol/primera division/barça.png",
    },
    {
      local: "Osasuna",
      escudoLocal: "/images/equiposfutbol/primera division/osasuna.png",
      marcador: "2 - 3",
      visitante: "Celta",
      escudoVisitante: "/images/equiposfutbol/primera division/celta.png",
    },
    {
      local: "Rayo Vallecano",
      escudoLocal: "/images/equiposfutbol/primera division/rayo vallecano.png",
      marcador: "1 - 0",
      visitante: "Deportivo Alavés",
      escudoVisitante: "/images/equiposfutbol/primera division/alaves.png",
    },
    {
      local: "Real Betis",
      escudoLocal: "/images/equiposfutbol/primera division/real betis.png",
      marcador: "0 - 2",
      visitante: "Atlético de Madrid",
      escudoVisitante: "/images/equiposfutbol/primera division/atleti.png",
    },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      {/* Encabezado */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-600 flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 10
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de LaLiga EA Sports.
        </p>
      </section>

      {/* Tabla de resultados */}
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-orange-600 text-lg border-b">
              <th className="text-left px-4 py-2">Local</th>
              <th className="px-4 py-2">Marcador</th>
              <th className="text-right px-4 py-2">Visitante</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((r, i) => (
              <tr key={i} className="hover:bg-base-300 transition-colors">
                {/* Local */}
                <td className="text-left px-4 py-2 flex items-center gap-2">
                  <Image
                    src={r.escudoLocal}
                    alt={r.local}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span>{r.local}</span>
                </td>

                {/* Marcador */}
                <td className="px-4 py-2 text-lg font-bold">{r.marcador}</td>

                {/* Visitante */}
                <td className="text-right px-4 py-2 flex items-center justify-end gap-2">
                  <span>{r.visitante}</span>
                  <Image
                    src={r.escudoVisitante}
                    alt={r.visitante}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botón de volver */}
      <div className="flex justify-center mt-10">
        <Link
          href="/ligas/laliga"
          className="btn btn-outline text-orange-600 border-orange-600 flex items-center gap-2"
        >
          <FaArrowLeft /> Volver a LaLiga
        </Link>
      </div>
    </main>
  );
}
