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
        <h2 className="text-2xl font-semibold">
          Property Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <h1 className="text-3xl font-bold mb-2">
        {property.title}
      </h1>

      <p className="text-slate-600 mb-4">
        {property.city}
      </p>

      <p className="text-xl font-bold mb-4">
        ₹ {property.price}
      </p>

      <p className="text-slate-500">
        {property.bedrooms} BHK • {property.area}
      </p>
    </div>
  );
}

export default PropertyDetail;
