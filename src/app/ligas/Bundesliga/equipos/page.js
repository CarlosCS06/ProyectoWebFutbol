"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const equiposBundesliga = [
  { nombre: "Bayern Múnich", escudo: "/images/equiposfutbol/bundesliga/bayern.png" },
  { nombre: "Borussia Dortmund", escudo: "/images/equiposfutbol/bundesliga/dortmund.png" },
  { nombre: "RB Leipzig", escudo: "/images/equiposfutbol/bundesliga/leipzig.png" },
  { nombre: "Bayer Leverkusen", escudo: "/images/equiposfutbol/bundesliga/leverkusen.png" },
  { nombre: "VfB Stuttgart", escudo: "/images/equiposfutbol/bundesliga/stuttgart.png" },
  { nombre: "Eintracht Frankfurt", escudo: "/images/equiposfutbol/bundesliga/frankfurt.png" },
  { nombre: "Hoffenheim", escudo: "/images/equiposfutbol/bundesliga/hoffenheim.png" },
  { nombre: "Union Berlin", escudo: "/images/equiposfutbol/bundesliga/union.png" },
  { nombre: "Werder Bremen", escudo: "/images/equiposfutbol/bundesliga/bremen.png" },
  { nombre: "Wolfsburgo", escudo: "/images/equiposfutbol/bundesliga/wolfsburgo.png" },
  { nombre: "Friburgo", escudo: "/images/equiposfutbol/bundesliga/friburgo.png" },
  { nombre: "Colonia", escudo: "/images/equiposfutbol/bundesliga/colonia.png" },
  { nombre: "Augsburgo", escudo: "/images/equiposfutbol/bundesliga/augsburgo.png" },
  { nombre: "Mainz 05", escudo: "/images/equiposfutbol/bundesliga/mainz.png" },
  { nombre: "Borussia Mönchengladbach", escudo: "/images/equiposfutbol/bundesliga/mgladbach.png" },
  { nombre: "Hamburgo", escudo: "/images/equiposfutbol/bundesliga/hamburgo.png" },
  { nombre: "St. Pauli", escudo: "/images/equiposfutbol/bundesliga/pauli.png" },
  { nombre: "Heidenheim", escudo: "/images/equiposfutbol/bundesliga/heidenheim.png" },
];

export default function EquiposBundesliga() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#DC2626] text-center mb-10">
        ⚽ Equipos de la Bundesliga
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {equiposBundesliga.map((equipo) => (
          <div key={equipo.nombre} className="card bg-base-100 shadow-xl items-center text-center p-4 hover:scale-105 transition-transform">
            <Image src={equipo.escudo} alt={equipo.nombre} width={100} height={100} className="object-contain mb-2" />
            <h2 className="font-semibold">{equipo.nombre}</h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/ligas/bundesliga" className="btn btn-outline text-[#DC2626] border-[#DC2626] flex items-center gap-2">
          <FaArrowLeft /> Volver a la Bundesliga
        </Link>
      </div>
    </main>
  );
}
