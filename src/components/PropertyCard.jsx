import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="border rounded-lg overflow-hidden bg-white 
                      transition-all duration-300 
                      hover:shadow-xl hover:-translate-y-1">
        
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="h-44 w-full object-cover 
                       transition-transform duration-300 
                       hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg">
            {property.title}
          </h3>

          <p className="text-sm text-slate-600">
            {property.city}
          </p>

          <p className="mt-2 font-bold">
            ₹ {property.price}
          </p>

          <p className="text-sm text-slate-500">
            {property.bedrooms} BHK • {property.area}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
