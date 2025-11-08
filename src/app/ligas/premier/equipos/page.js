"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const equiposPremier = [
  { nombre: "Arsenal", escudo: "/images/equiposfutbol/premier/arsenal.png" },
  { nombre: "Aston Villa", escudo: "/images/equiposfutbol/premier/aston villa.png" },
  { nombre: "Chelsea", escudo: "/images/equiposfutbol/premier/chelsea.png" },
  { nombre: "Liverpool", escudo: "/images/equiposfutbol/premier/liverpool.png" },
  { nombre: "Manchester City", escudo: "/images/equiposfutbol/premier/manchester city.png" },
  { nombre: "Manchester United", escudo: "/images/equiposfutbol/premier/manchester united.png" },
  { nombre: "Tottenham Hotspur", escudo: "/images/equiposfutbol/premier/tottenham.png" },
  { nombre: "Newcastle United", escudo: "/images/equiposfutbol/premier/newcastle.png" },
  { nombre: "Brighton", escudo: "/images/equiposfutbol/premier/brighton.png" },
  { nombre: "Crystal Palace", escudo: "/images/equiposfutbol/premier/crystal palace.png" },
  { nombre: "Fulham", escudo: "/images/equiposfutbol/premier/fulham.png" },
  { nombre: "Everton", escudo: "/images/equiposfutbol/premier/everton.png" },
  { nombre: "Leeds United", escudo: "/images/equiposfutbol/premier/leeds united.png" },
  { nombre: "Wolves", escudo: "/images/equiposfutbol/premier/wolves.png" },
  { nombre: "Bournemouth", escudo: "/images/equiposfutbol/premier/bournemouth.png" },
  { nombre: "Brentford", escudo: "/images/equiposfutbol/premier/brentford.png" },
  { nombre: "Nottingham Forest", escudo: "/images/equiposfutbol/premier/nottingham forest.png" },
  { nombre: "West Ham", escudo: "/images/equiposfutbol/premier/west ham.png" },
  { nombre: "Burnley", escudo: "/images/equiposfutbol/premier/burnley.png" },
  { nombre: "Sunderland", escudo: "/images/equiposfutbol/premier/sunderland.png" },
];

export default function EquiposPremier() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#6A0DAD] text-center mb-10">
        ⚽ Equipos de la Premier League
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {equiposPremier.map((equipo) => (
          <div key={equipo.nombre} className="card bg-base-100 shadow-xl items-center text-center p-4 hover:scale-105 transition-transform">
            <Image src={equipo.escudo} alt={equipo.nombre} width={100} height={100} className="object-contain mb-2" />
            <h2 className="font-semibold">{equipo.nombre}</h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/ligas/premier" className="btn btn-outline text-[#6A0DAD] border-[#6A0DAD] flex items-center gap-2">
          <FaArrowLeft /> Volver a la Premier League
        </Link>
      </div>
    </main>
  );
}
