"use client";
import Image from "next/image";
import Link from "next/link";

export default function NewsItem({ titulo, resumen, imagen }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {imagen && (
        <div className="relative w-full h-48">
          <Image
            src={imagen}
            alt={titulo}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{titulo}</h3>
        <p className="text-gray-600 text-sm mb-3">{resumen}</p>
        <Link
          href="#"
          className="text-blue-600 hover:underline font-medium text-sm"
        >
          Leer más →
        </Link>
      </div>
    </div>
  );
}
