import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 
                      transition-all duration-300 
                      hover:shadow-xl hover:-translate-y-1">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-40 md:h-48 object-cover 
                       transition-transform duration-300 
                       hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">

          <h3 className="font-semibold text-base md:text-lg">
            {property.title}
          </h3>

          <p className="text-xs md:text-sm text-slate-600 mt-1">
            {property.city}
          </p>

          <p className="mt-3 font-bold text-slate-900">
            ₹ {property.price}
          </p>

          <p className="text-xs md:text-sm text-slate-500 mt-1">
            {property.bedrooms} BHK • {property.area}
          </p>

        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
