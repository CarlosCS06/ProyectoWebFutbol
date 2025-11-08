"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const equiposLigue1 = [
  { nombre: "Paris Saint-Germain", escudo: "/images/equiposfutbol/ligue1/psg.png" },
  { nombre: "Olympique de Marsella", escudo: "/images/equiposfutbol/ligue1/marseille.png" },
  { nombre: "AS Mónaco", escudo: "/images/equiposfutbol/ligue1/monaco.png" },
  { nombre: "Olympique de Lyon", escudo: "/images/equiposfutbol/ligue1/lyon.png" },
  { nombre: "Lille OSC", escudo: "/images/equiposfutbol/ligue1/lille.png" },
  { nombre: "RC Lens", escudo: "/images/equiposfutbol/ligue1/lens.png" },
  { nombre: "Stade Rennais", escudo: "/images/equiposfutbol/ligue1/rennes.png" },
  { nombre: "OGC Niza", escudo: "/images/equiposfutbol/ligue1/niza.png" },
  { nombre: "Strasbourg", escudo: "/images/equiposfutbol/ligue1/strasbourg.png" },
  { nombre: "Nantes", escudo: "/images/equiposfutbol/ligue1/nantes.png" },
  { nombre: "Toulouse", escudo: "/images/equiposfutbol/ligue1/toulouse.png" },
  { nombre: "Angers", escudo: "/images/equiposfutbol/ligue1/angers.png" },
  { nombre: "Brest", escudo: "/images/equiposfutbol/ligue1/brest.png" },
  { nombre: "Le Havre", escudo: "/images/equiposfutbol/ligue1/lehavre.png" },
  { nombre: "Metz", escudo: "/images/equiposfutbol/ligue1/metz.png" },
  { nombre: "Auxerre", escudo: "/images/equiposfutbol/ligue1/auxerre.png" },
  { nombre: "Lorient", escudo: "/images/equiposfutbol/ligue1/lorient.png" },
  { nombre: "Paris FC", escudo: "/images/equiposfutbol/ligue1/parisfc.png" },
];

export default function EquiposLigue1() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#1E3A8A] text-center mb-10">
        ⚽ Equipos de la Ligue 1 Uber Eats
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {equiposLigue1.map((equipo) => (
          <div key={equipo.nombre} className="card bg-base-100 shadow-xl items-center text-center p-4 hover:scale-105 transition-transform">
            <Image src={equipo.escudo} alt={equipo.nombre} width={100} height={100} className="object-contain mb-2" />
            <h2 className="font-semibold">{equipo.nombre}</h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/ligas/ligue1" className="btn btn-outline text-[#1E3A8A] border-[#1E3A8A] flex items-center gap-2">
          <FaArrowLeft /> Volver a la Ligue 1
        </Link>
      </div>
    </main>
  );
}
