"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosPremier() {
  const resultados = [
    {
      local: "Brighton",
      escudoLocal: "/images/equiposfutbol/premier/brighton.png",
      marcador: "3 - 0",
      visitante: "Leeds",
      escudoVisitante: "/images/equiposfutbol/premier/leeds united.png",
    },
    {
      local: "Burnley",
      escudoLocal: "/images/equiposfutbol/premier/burnley.png",
      marcador: "0 - 2",
      visitante: "Arsenal",
      escudoVisitante: "/images/equiposfutbol/premier/arsenal.png",
    },
    {
      local: "Crystal Palace",
      escudoLocal: "/images/equiposfutbol/premier/crystal palace.png",
      marcador: "2 - 0",
      visitante: "Brentford",
      escudoVisitante: "/images/equiposfutbol/premier/brentford.png",
    },
    {
      local: "Fulham",
      escudoLocal: "/images/equiposfutbol/premier/fulham.png",
      marcador: "3 - 0",
      visitante: "Wolves",
      escudoVisitante: "/images/equiposfutbol/premier/wolves.png",
    },
    {
      local: "Nottingham Forest",
      escudoLocal: "/images/equiposfutbol/premier/nottingham forest.png",
      marcador: "2 - 2",
      visitante: "Manchester United",
      escudoVisitante: "/images/equiposfutbol/premier/manchester united.png",
    },
    {
      local: "Tottenham",
      escudoLocal: "/images/equiposfutbol/premier/tottenham.png",
      marcador: "0 - 1",
      visitante: "Chelsea",
      escudoVisitante: "/images/equiposfutbol/premier/chelsea.png",
    },
    {
      local: "Liverpool",
      escudoLocal: "/images/equiposfutbol/premier/liverpool.png",
      marcador: "2 - 0",
      visitante: "Aston Villa",
      escudoVisitante: "/images/equiposfutbol/premier/aston villa.png",
    },
    {
      local: "West Ham",
      escudoLocal: "/images/equiposfutbol/premier/west ham.png",
      marcador: "3 - 1",
      visitante: "Newcastle",
      escudoVisitante: "/images/equiposfutbol/premier/newcastle.png",
    },
    {
      local: "Manchester City",
      escudoLocal: "/images/equiposfutbol/premier/manchester city.png",
      marcador: "3 - 1",
      visitante: "Bournemouth",
      escudoVisitante: "/images/equiposfutbol/premier/bournemouth.png",
    },
    {
      local: "Sunderland",
      escudoLocal: "/images/equiposfutbol/premier/sunderland.png",
      marcador: "1 - 1",
      visitante: "Everton",
      escudoVisitante: "/images/equiposfutbol/premier/everton.png",
    },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-600 flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 10
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de la Premier League.
        </p>
      </section>

      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-purple-600 text-lg border-b">
              <th className="text-left px-4 py-2">Local</th>
              <th className="px-4 py-2">Marcador</th>
              <th className="text-right px-4 py-2">Visitante</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((r, i) => (
              <tr key={i} className="hover:bg-base-300 transition-colors">
                <td className="text-left px-4 py-2 flex items-center gap-2">
                  <Image src={r.escudoLocal} alt={r.local} width={24} height={24} />
                  <span>{r.local}</span>
                </td>
                <td className="px-4 py-2 text-lg font-bold">{r.marcador}</td>
                <td className="text-right px-4 py-2 flex items-center justify-end gap-2">
                  <span>{r.visitante}</span>
                  <Image src={r.escudoVisitante} alt={r.visitante} width={24} height={24} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/ligas/premier"
          className="btn btn-outline text-purple-600 border-purple-600 flex items-center gap-2"
        >
          <FaArrowLeft /> Volver a la Premier League
        </Link>
      </div>
    </main>
  );
}
