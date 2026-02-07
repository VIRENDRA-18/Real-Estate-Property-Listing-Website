import { Link } from "react-router-dom";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

function Home() {
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold leading-tight">
              Find Your Dream Home
            </h1>

            <p className="mt-5 text-lg text-slate-200">
              Buy, sell or rent verified properties across top Indian cities
            </p>

            <Link
              to="/properties"
              className="inline-block mt-8 px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROPERTIES ================= */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">
            Featured Properties
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 6).map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link
              to="/properties"
              className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
