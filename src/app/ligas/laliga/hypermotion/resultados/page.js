"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosHypermotion() {
  const resultados = [
    {
      local: "Racing Santander",
      escudoLocal: "/images/equiposfutbol/segunda division/racing de santander.png",
      marcador: "1 - 0",
      visitante: "Real Sociedad B",
      escudoVisitante: "/images/equiposfutbol/segunda division/real sociedad b.png",
    },
    {
      local: "Cultural Leonesa",
      escudoLocal: "/images/equiposfutbol/segunda division/cultural leonesa.png",
      marcador: "3 - 2",
      visitante: "Mirandés",
      escudoVisitante: "/images/equiposfutbol/segunda division/mirandes.png",
    },
    {
      local: "Albacete",
      escudoLocal: "/images/equiposfutbol/segunda division/albacete.png",
      marcador: "2 - 1",
      visitante: "Huesca",
      escudoVisitante: "/images/equiposfutbol/segunda division/huesca.png",
    },
    {
      local: "Leganés",
      escudoLocal: "/images/equiposfutbol/segunda division/leganes.png",
      marcador: "1 - 2",
      visitante: "Burgos",
      escudoVisitante: "/images/equiposfutbol/segunda division/burgos.png",
    },
    {
      local: "Almería",
      escudoLocal: "/images/equiposfutbol/segunda division/almeria.png",
      marcador: "3 - 1",
      visitante: "Eibar",
      escudoVisitante: "/images/equiposfutbol/segunda division/eibar.png",
    },
    {
      local: "FC Andorra",
      escudoLocal: "/images/equiposfutbol/segunda division/andorra.png",
      marcador: "0 - 0",
      visitante: "Cádiz",
      escudoVisitante: "/images/equiposfutbol/segunda division/cadiz.png",
    },
    {
      local: "Córdoba",
      escudoLocal: "/images/equiposfutbol/segunda division/cordoba.png",
      marcador: "2 - 0",
      visitante: "Ceuta",
      escudoVisitante: "/images/equiposfutbol/segunda division/ceuta.png",
    },
    {
      local: "Sporting",
      escudoLocal: "/images/equiposfutbol/segunda division/sporting de gijon.png",
      marcador: "0 - 0",
      visitante: "Las Palmas",
      escudoVisitante: "/images/equiposfutbol/segunda division/las palmas.png",
    },
    {
      local: "Castellón",
      escudoLocal: "/images/equiposfutbol/segunda division/castellon.png",
      marcador: "2 - 1",
      visitante: "Málaga",
      escudoVisitante: "/images/equiposfutbol/segunda division/malaga.png",
    },
    {
      local: "Zaragoza",
      escudoLocal: "/images/equiposfutbol/segunda division/real zaragoza.png",
      marcador: "0 - 2",
      visitante: "Deportivo",
      escudoVisitante: "/images/equiposfutbol/segunda division/deportivo.png",
    },
    {
      local: "Valladolid",
      escudoLocal: "/images/equiposfutbol/segunda division/valladolid.png",
      marcador: "2 - 1",
      visitante: "Granada",
      escudoVisitante: "/images/equiposfutbol/segunda division/granada.png",
    },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#0284c7] flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 12
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de LaLiga Hypermotion.
        </p>
      </section>

      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-[#0284c7] text-lg border-b">
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

      {/* Botón volver */}
      <div className="flex justify-center mt-10">
        <Link
          href="/ligas/laliga"
          className="btn btn-outline text-sky-600 border-sky-600 flex items-center gap-2"
        >
          <FaArrowLeft /> Volver a LaLiga Hypermotion
        </Link>
      </div>
    </main>
  );
}
