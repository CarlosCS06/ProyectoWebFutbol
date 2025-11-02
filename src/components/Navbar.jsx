"use client";
import Link from "next/link";
import { useState } from "react";
import { FaFutbol, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [openLeague, setOpenLeague] = useState(null);

  const leagues = [
    { name: "LaLiga", path: "/ligas/laliga" },
    { name: "Premier League", path: "/ligas/premier" },
    { name: "Serie A", path: "/ligas/seriea" },
    { name: "Bundesliga", path: "/ligas/bundesliga" },
    { name: "Ligue 1", path: "/ligas/ligue1" },
  ];

  const subOptions = [
    { name: "Clasificación", subpath: "clasificacion" },
    { name: "Resultados", subpath: "resultados" },
    { name: "Equipos", subpath: "equipos" },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-md px-8">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <FaFutbol /> Fútbol Europeo
        </Link>
      </div>
      <ul className="menu menu-horizontal px-1 text-md font-semibold">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/noticias">Noticias</Link></li>

        <li tabIndex={0}>
          <details>
            <summary className="flex items-center">
              Ligas <FaChevronDown className="ml-1 text-sm" />
            </summary>
            <ul className="p-2 bg-base-100 shadow-lg rounded-box w-52">
              {leagues.map((league) => (
                <li key={league.name} className="relative">
                  <details>
                    <summary>{league.name}</summary>
                    <ul className="p-2 bg-base-200 shadow-lg rounded-box w-48 absolute left-full top-0">
                      {subOptions.map((option) => (
                        <li key={option.subpath}>
                          <Link href={`${league.path}/${option.subpath}`}>{option.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </details>
        </li>

        <li><Link href="/selecciones">Selecciones</Link></li>
      </ul>
    </nav>
  );
}
