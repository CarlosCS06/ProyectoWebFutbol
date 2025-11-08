"use client";
import { useState, useEffect } from "react";

export default function FeaturedNewsCarousel({ noticias = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % noticias.length),
      5000
    );
    return () => clearInterval(interval);
  }, [noticias.length]);

  if (!noticias || noticias.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No hay noticias disponibles.
      </p>
    );
  }

  const noticia = noticias[current];

  return (
    <div className="relative max-w-5xl mx-auto mb-12">
      {/* Imagen */}
      <div className="relative w-full h-80 sm:h-[26rem] rounded-xl overflow-hidden shadow-lg">
        <img
          src={noticia.imagen}
          alt={noticia.titulo}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 10%" }}
        />

      </div>

      {/* Contenido superpuesto */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-6 rounded-b-xl">
        <h2 className="text-2xl font-bold">{noticia.titulo}</h2>
        <p className="text-sm mt-2">{noticia.resumen}</p>
      </div>

      {/* Puntos de navegación */}
      <div className="flex justify-center mt-4 gap-2">
        {noticias.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
