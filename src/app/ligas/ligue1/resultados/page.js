"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosLigue1() {
  const resultados = [
    {
      local: "PSG",
      escudoLocal: "/images/equiposfutbol/ligue1/psg.png",
      marcador: "1 - 0",
      visitante: "Niza",
      escudoVisitante: "/images/equiposfutbol/ligue1/niza.png",
    },
    {
      local: "Monaco",
      escudoLocal: "/images/equiposfutbol/ligue1/monaco.png",
      marcador: "0 - 1",
      visitante: "Paris FC",
      escudoVisitante: "/images/equiposfutbol/ligue1/parisfc.png",
    },
    {
      local: "Auxerre",
      escudoLocal: "/images/equiposfutbol/ligue1/auxerre.png",
      marcador: "0 - 1",
      visitante: "Olympique de Marsella",
      escudoVisitante: "/images/equiposfutbol/ligue1/marseille.png",
    },
    {
      local: "Rennes",
      escudoLocal: "/images/equiposfutbol/ligue1/rennes.png",
      marcador: "4 - 1",
      visitante: "Strasbourg",
      escudoVisitante: "/images/equiposfutbol/ligue1/strasbourg.png",
    },
    {
      local: "Lens",
      escudoLocal: "/images/equiposfutbol/ligue1/lens.png",
      marcador: "3 - 0",
      visitante: "Lorient",
      escudoVisitante: "/images/equiposfutbol/ligue1/lorient.png",
    },
    {
      local: "Lille",
      escudoLocal: "/images/equiposfutbol/ligue1/lille.png",
      marcador: "1 - 0",
      visitante: "Angers",
      escudoVisitante: "/images/equiposfutbol/ligue1/angers.png",
    },
    {
      local: "Nantes",
      escudoLocal: "/images/equiposfutbol/ligue1/nantes.png",
      marcador: "0 - 2",
      visitante: "Metz",
      escudoVisitante: "/images/equiposfutbol/ligue1/metz.png",
    },
    {
      local: "Toulouse",
      escudoLocal: "/images/equiposfutbol/ligue1/toulouse.png",
      marcador: "0 - 0",
      visitante: "Le Havre",
      escudoVisitante: "/images/equiposfutbol/ligue1/lehavre.png",
    },
    {
      local: "Brest",
      escudoLocal: "/images/equiposfutbol/ligue1/brest.png",
      marcador: "0 - 0",
      visitante: "O. Lyon",
      escudoVisitante: "/images/equiposfutbol/ligue1/lyon.png",
    },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      {/* Encabezado */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1e3a8a] flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 11
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de la Ligue 1 Uber Eats.
        </p>
      </section>

      {/* Tabla de resultados */}
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-[#1e3a8a] text-lg border-b">
              <th className="text-left px-4 py-2">Local</th>
              <th className="px-4 py-2">Marcador</th>
              <th className="text-right px-4 py-2">Visitante</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((r, i) => (
              <tr key={i} className="hover:bg-base-300 transition-colors">
                {/* Local */}
                <td className="px-4 py-2">
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src={r.escudoLocal}
                      alt={r.local}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <span className="font-semibold">{r.local}</span>
                  </div>
                </td>

                {/* Marcador (centrado total) */}
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center w-full">
                    <span className="text-lg font-bold text-center">{r.marcador}</span>
                  </div>
                </td>

                {/* Visitante */}
                <td className="px-4 py-2">
                  <div className="flex items-center justify-end gap-2">
                    <span className="font-semibold">{r.visitante}</span>
                    <Image
                      src={r.escudoVisitante}
                      alt={r.visitante}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botón de volver */}
      <div className="flex justify-center mt-10">
        <Link
          href="/ligas/ligue1"
          className="btn btn-outline text-[#1E3A8A] border-[#1E3A8A] flex items-center gap-2"
        >
          <FaArrowLeft /> Volver a la Ligue 1
        </Link>
      </div>
    </main>
  );
}
