import { useParams } from "react-router-dom";
import properties from "../data/properties";

function PropertyDetail() {
  const { id } = useParams();

  const property = properties.find(
    (p) => p.id === Number(id)
  );

  if (!property) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl md:text-2xl font-semibold">
          Property Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT - IMAGE */}
          <div>
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 md:h-[420px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT - DETAILS */}
          <div>

            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              {property.title}
            </h1>

            <p className="text-slate-600 mb-4 text-sm md:text-base">
              {property.city}
            </p>

            <p className="text-xl md:text-2xl font-bold mb-6">
              ₹ {property.price}
            </p>

            {/* Property Info Box */}
            <div className="bg-white rounded-xl p-5 shadow-md space-y-3">
              <p className="text-slate-600">
                <span className="font-medium text-slate-800">
                  Bedrooms:
                </span>{" "}
                {property.bedrooms} BHK
              </p>

              <p className="text-slate-600">
                <span className="font-medium text-slate-800">
                  Area:
                </span>{" "}
                {property.area}
              </p>

              <p className="text-slate-600">
                <span className="font-medium text-slate-800">
                  Type:
                </span>{" "}
                {property.type}
              </p>
            </div>

            {/* Contact Button */}
            <button className="mt-6 w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition">
              Contact Agent
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default PropertyDetail;
