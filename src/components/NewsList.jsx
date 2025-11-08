"use client";
import NewsItem from "./NewsItem";

export default function NewsList({ seccion }) {
  // Comprobación segura para evitar errores si seccion o noticias no están definidas
  const noticias = Array.isArray(seccion?.noticias) ? seccion.noticias : [];

  return (
    <section className="mb-16">
      <h2
        className={`text-3xl font-bold mb-6 text-center ${
          seccion?.color || "text-gray-700"
        }`}
      >
        {seccion?.titulo || "Sección"}
      </h2>

      {noticias.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {noticias.map((n, i) => (
            <NewsItem key={i} {...n} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic mt-6">
          No hay noticias disponibles en esta sección.
        </p>
      )}
    </section>
  );
}
