"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const getRandomImage = () =>
      `https://source.unsplash.com/1600x900/?sport,stadium,football,basketball,tennis`;

    setImage(getRandomImage());

    const interval = setInterval(() => {
      setImage(getRandomImage());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero min-h-[80vh] md:min-h-[85vh] relative overflow-hidden transition-all duration-1000"
      style={{
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#111",
      }}
    >
      {/* Capa de oscurecimiento */}
      <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0 transition-opacity duration-1000"></div>

      <div className="hero-content text-center text-neutral-content z-10">
        <div className="max-w-md px-4">
          <h1 className="mb-5 text-5xl md:text-6xl font-bold animate-fade-in">
            ¡Vive el deporte!
          </h1>
          <p className="mb-5 text-lg md:text-xl animate-fade-in">
            Resultados, noticias y emoción en un solo lugar.
          </p>
          <button className="btn btn-primary btn-lg shadow-lg animate-fade-in">
            Explorar
          </button>
        </div>
      </div>
    </div>
  );
}
