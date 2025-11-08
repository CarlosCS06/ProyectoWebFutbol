"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosBundesliga() {
  const resultados = [
    {
      local: "Augsburgo",
      escudoLocal: "/images/equiposfutbol/bundesliga/augsburgo.png",
      marcador: "0 - 1",
      visitante: "Borussia Dortmund",
      escudoVisitante: "/images/equiposfutbol/bundesliga/dortmund.png",
    },
    {
      local: "Heidenheim",
      escudoLocal: "/images/equiposfutbol/bundesliga/heidenheim.png",
      marcador: "1 - 1",
      visitante: "Eintracht Frankfurt",
      escudoVisitante: "/images/equiposfutbol/bundesliga/frankfurt.png",
    },
    {
      local: "Union Berlin",
      escudoLocal: "/images/equiposfutbol/bundesliga/union.png",
      marcador: "0 - 0",
      visitante: "Friburgo",
      escudoVisitante: "/images/equiposfutbol/bundesliga/friburgo.png",
    },
    {
      local: "Mainz",
      escudoLocal: "/images/equiposfutbol/bundesliga/mainz.png",
      marcador: "1 - 1",
      visitante: "Werder Bremen",
      escudoVisitante: "/images/equiposfutbol/bundesliga/bremen.png",
    },
    {
      local: "St. Pauli",
      escudoLocal: "/images/equiposfutbol/bundesliga/pauli.png",
      marcador: "0 - 4",
      visitante: "Borussia M'gladbach",
      escudoVisitante: "/images/equiposfutbol/bundesliga/mgladbach.png",
    },
    {
      local: "Leipzig",
      escudoLocal: "/images/equiposfutbol/bundesliga/leipzig.png",
      marcador: "3 - 1",
      visitante: "VfB Stuttgart",
      escudoVisitante: "/images/equiposfutbol/bundesliga/stuttgart.png",
    },
    {
      local: "Bayern Munich",
      escudoLocal: "/images/equiposfutbol/bundesliga/bayern.png",
      marcador: "3 - 0",
      visitante: "Bayer Leverkusen",
      escudoVisitante: "/images/equiposfutbol/bundesliga/leverkusen.png",
    },
    {
      local: "Colonia",
      escudoLocal: "/images/equiposfutbol/bundesliga/colonia.png",
      marcador: "4 - 1",
      visitante: "Hamburgo",
      escudoVisitante: "/images/equiposfutbol/bundesliga/hamburgo.png",
    },
    {
      local: "Wolfsburgo",
      escudoLocal: "/images/equiposfutbol/bundesliga/wolfsburgo.png",
      marcador: "2 - 3",
      visitante: "TSG Hoffenheim",
      escudoVisitante: "/images/equiposfutbol/bundesliga/hoffenheim.png",
    },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      {/* Encabezado */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-600 flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 9
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de la Bundesliga.
        </p>
      </section>

      {/* Tabla de resultados */}
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-red-600 text-lg border-b">
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
          href="/ligas/bundesliga"
          className="btn btn-outline text-red-600 border-red-600 flex items-center gap-2"
        >
          <FaArrowLeft /> Volver a la Bundesliga
        </Link>
      </div>
    </main>
  );
}
