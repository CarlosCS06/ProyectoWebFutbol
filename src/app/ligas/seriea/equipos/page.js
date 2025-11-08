"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const equiposSerieA = [
  { nombre: "Inter de Milán", escudo: "/images/equiposfutbol/seriea/inter.png" },
  { nombre: "AC Milan", escudo: "/images/equiposfutbol/seriea/milan.png" },
  { nombre: "Juventus", escudo: "/images/equiposfutbol/seriea/juventus.png" },
  { nombre: "Napoli", escudo: "/images/equiposfutbol/seriea/napoles.png" },
  { nombre: "Roma", escudo: "/images/equiposfutbol/seriea/roma.png" },
  { nombre: "Lazio", escudo: "/images/equiposfutbol/seriea/lazio.png" },
  { nombre: "Atalanta", escudo: "/images/equiposfutbol/seriea/atalanta.png" },
  { nombre: "Fiorentina", escudo: "/images/equiposfutbol/seriea/fiorentina.png" },
  { nombre: "Torino", escudo: "/images/equiposfutbol/seriea/torino.png" },
  { nombre: "Udinese", escudo: "/images/equiposfutbol/seriea/udinese.png" },
  { nombre: "Cagliari", escudo: "/images/equiposfutbol/seriea/cagliari.png" },
  { nombre: "Como", escudo: "/images/equiposfutbol/seriea/como.png" },
  { nombre: "Sassuolo", escudo: "/images/equiposfutbol/seriea/sassuolo.png" },
  { nombre: "Parma", escudo: "/images/equiposfutbol/seriea/parma.png" },
  { nombre: "Hellas Verona", escudo: "/images/equiposfutbol/seriea/verona.png" },
  { nombre: "Bologna", escudo: "/images/equiposfutbol/seriea/bolonia.png" },
  { nombre: "Genoa", escudo: "/images/equiposfutbol/seriea/genoa.png" },
  { nombre: "Pisa", escudo: "/images/equiposfutbol/seriea/pisa.png" },
  { nombre: "Lecce", escudo: "/images/equiposfutbol/seriea/lecce.png" },
  { nombre: "Cremonese", escudo: "/images/equiposfutbol/seriea/cremonese.png" },
];

export default function EquiposSerieA() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#00796B] text-center mb-10">
        ⚽ Equipos de la Serie A
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {equiposSerieA.map((equipo) => (
          <div key={equipo.nombre} className="card bg-base-100 shadow-xl items-center text-center p-4 hover:scale-105 transition-transform">
            <Image src={equipo.escudo} alt={equipo.nombre} width={100} height={100} className="object-contain mb-2" />
            <h2 className="font-semibold">{equipo.nombre}</h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/ligas/seriea" className="btn btn-outline text-[#00796B] border-[#00796B] flex items-center gap-2">
          <FaArrowLeft /> Volver a la Serie A
        </Link>
      </div>
    </main>
  );
}
