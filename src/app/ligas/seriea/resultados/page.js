"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosSerieA() {
  const resultados = [
    {
      local: "Udinese",
      escudoLocal: "/images/equiposfutbol/seriea/udinese.png",
      marcador: "1 - 0",
      visitante: "Atalanta",
      escudoVisitante: "/images/equiposfutbol/seriea/atalanta.png",
    },
    {
      local: "Napoli",
      escudoLocal: "/images/equiposfutbol/seriea/napoles.png",
      marcador: "0 - 0",
      visitante: "Como",
      escudoVisitante: "/images/equiposfutbol/seriea/como.png",
    },
    {
      local: "Cremonese",
      escudoLocal: "/images/equiposfutbol/seriea/cremonese.png",
      marcador: "1 - 2",
      visitante: "Juventus",
      escudoVisitante: "/images/equiposfutbol/seriea/juventus.png",
    },
    {
      local: "Hellas Verona",
      escudoLocal: "/images/equiposfutbol/seriea/verona.png",
      marcador: "1 - 2",
      visitante: "Inter de Milán",
      escudoVisitante: "/images/equiposfutbol/seriea/inter.png",
    },
    {
      local: "Fiorentina",
      escudoLocal: "/images/equiposfutbol/seriea/fiorentina.png",
      marcador: "0 - 1",
      visitante: "Lecce",
      escudoVisitante: "/images/equiposfutbol/seriea/lecce.png",
    },
    {
      local: "Torino",
      escudoLocal: "/images/equiposfutbol/seriea/torino.png",
      marcador: "2 - 2",
      visitante: "Pisa",
      escudoVisitante: "/images/equiposfutbol/seriea/pisa.png",
    },
    {
      local: "Parma",
      escudoLocal: "/images/equiposfutbol/seriea/parma.png",
      marcador: "1 - 3",
      visitante: "Bolonia",
      escudoVisitante: "/images/equiposfutbol/seriea/bolonia.png",
    },
    {
      local: "Milan",
      escudoLocal: "/images/equiposfutbol/seriea/milan.png",
      marcador: "1 - 0",
      visitante: "Roma",
      escudoVisitante: "/images/equiposfutbol/seriea/roma.png",
    },
    {
      local: "Sassuolo",
      escudoLocal: "/images/equiposfutbol/seriea/sassuolo.png",
      marcador: "–",
      visitante: "Genoa",
      escudoVisitante: "/images/equiposfutbol/seriea/genoa.png",
    },
    {
      local: "Lazio",
      escudoLocal: "/images/equiposfutbol/seriea/lazio.png",
      marcador: "–",
      visitante: "Cagliari",
      escudoVisitante: "/images/equiposfutbol/seriea/cagliari.png",
    },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      {/* Encabezado */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#00796B] flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 10
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de la Serie A TIM.
        </p>
      </section>

      {/* Tabla de resultados */}
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-[#00796B] text-lg border-b">
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
          href="/ligas/seriea"
          className="btn btn-outline text-[#00796B] border-[#00796B] flex items-center gap-2"
        >
          <FaArrowLeft /> Volver a la Serie A
        </Link>
      </div>
    </main>
  );
}
