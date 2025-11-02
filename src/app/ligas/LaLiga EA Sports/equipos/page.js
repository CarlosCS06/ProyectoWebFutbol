import { FaFutbol, FaUsers } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function EquiposPage() {
  const primeraDivision = [
    "Deportivo Alavés", "Athletic Club", "Atlético de Madrid", "FC Barcelona",
    "Real Betis", "RC Celta", "Elche CF", "RCD Espanyol", "Getafe CF", 
    "Girona FC", "Levante UD", "RCD Mallorca", "CA Osasuna", "Rayo Vallecano",
    "Real Madrid", "Real Sociedad", "Sevilla FC", "Valencia CF", "Villarreal CF", "Real Oviedo",
  ];

  const segundaDivision = [
    "Albacete", "Almería", "Andorra", "Burgos CF", "Cádiz", "Castellón", "Ceuta",
    "Córdoba CF", "Cultural Leonesa", "Eibar", "Granada CF", "Huesca", "Las Palmas",
    "Leganés", "Málaga", "Mirandés", "Racing de Santander", "Real Sociedad B",
    "Real Valladolid", "Real Zaragoza", "Sporting de Gijón", "Tenerife"
  ];

  return (
    <main className="bg-base-200 min-h-screen pt-4">
      <section className="p-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Equipos de España</h1>
        <p className="text-gray-500 mb-8">Primera y Segunda División</p>
      </section>

      {/* PRIMERA DIVISIÓN */}
      <section id="primera" className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-primary">
          <FaUsers className="text-accent text-3xl" />
          Primera División
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {primeraDivision.map((team) => {
            // Nombres de archivo personalizados según tus imágenes
            const teamImages = {
              "Deportivo Alavés": "alaves.png",
              "Athletic Club": "bilbao.png",
              "Atlético de Madrid": "atleti.png",
              "FC Barcelona": "barça.png",
              "Real Betis": "real betis.png",
              "RC Celta": "celta.png",
              "Elche CF": "elche.png",
              "RCD Espanyol": "espanyol.png",
              "Getafe CF": "getafe.png",
              "Girona FC": "girona.png",
              "Levante UD": "levante.png",
              "RCD Mallorca": "mallorca.png",
              "CA Osasuna": "osasuna.png",
              "Rayo Vallecano": "rayo vallecano.png",
              "Real Madrid": "real de madrid.png",
              "Real Sociedad": "real sociedad.png",
              "Sevilla FC": "sevilla.png",
              "Valencia CF": "valencia.png",
              "Villarreal CF": "villarreal.png",
              "Real Oviedo": "oviedo.png",
            };

              const imageSrc = `/images/equiposfutbol/primera division/${teamImages[team]}`;

              return (
                <div
                  key={team}
                  className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
                >
                  <figure className="p-4">
                    <img
                      src={imageSrc}
                      alt={team}
                      className="h-28 mx-auto object-contain"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="font-bold text-lg flex items-center justify-center gap-2">
                      <FaFutbol className="text-primary" />
                      {team}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SEGUNDA DIVISIÓN */}
        <section id="segunda" className="p-8 bg-base-100">
          <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-primary">
            <FaUsers className="text-accent text-3xl" />
            Segunda División
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {segundaDivision.map((team) => {
              // Asociación de nombres → archivos .png según tus imágenes
              const teamImages = {
                "Albacete": "albacete.png",
                "Almería": "almeria.png",
                "Andorra": "andorra.png",
                "Burgos CF": "burgos.png",
                "Cádiz": "cadiz.png",
                "Castellón": "castellon.png",
                "Ceuta": "ceuta.png",
                "Córdoba CF": "cordoba.png",
                "Cultural Leonesa": "cultural leonesa.png",
                "Eibar": "eibar.png",
                "Granada CF": "granada.png",
                "Huesca": "huesca.png",
                "Las Palmas": "las palmas.png",
                "Leganés": "leganes.png",
                "Málaga": "malaga.png",
                "Mirandés": "mirandes.png",
                "Racing de Santander": "racing de santander.png",
                "Real Sociedad B": "real sociedad b.png",
                "Real Valladolid": "real valladolid.png",
                "Real Zaragoza": "real zaragoza.png",
                "Sporting de Gijón": "sporting de gijon.png",
                "Tenerife": "tenerife.png",
              };

              const imageSrc = `/images/equiposfutbol/segunda division/${teamImages[team]}`;

              return (
                <div
                  key={team}
                  className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
                >
                  <figure className="p-4">
                    <img
                      src={imageSrc}
                      alt={team}
                      className="h-28 mx-auto object-contain"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="font-bold text-lg flex items-center justify-center gap-2">
                      <FaFutbol className="text-primary" />
                      {team}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      <Footer />
    </main>
  );
}
