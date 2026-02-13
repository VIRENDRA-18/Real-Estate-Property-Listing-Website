// import properties from "../data/properties";
// import PropertyCard from "../components/PropertyCard";

// function Properties({ searchText = "" }) {
//   // Smart multi-word search (city + title)
//   const filteredProperties = properties.filter((property) => {
//     if (!searchText) return true;

//     const searchWords = searchText.toLowerCase().split(" ");

//     return searchWords.some((word) =>
//       `${property.city} ${property.title}`
//         .toLowerCase()
//         .includes(word)
//     );
//   });

//   return (
//     <div className="bg-slate-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 py-14">

//         {/* Page Heading */}
//         <div className="mb-10">
//           <h1 className="text-3xl font-bold">
//             All Properties
//           </h1>
//           <p className="text-slate-600 mt-2">
//             Search properties by city or name
//           </p>
//         </div>

//         {/* Properties Grid */}
//         {filteredProperties.length === 0 ? (
//           <p className="text-slate-500">
//             No properties found.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProperties.map((property) => (
//               <PropertyCard
//                 key={property.id}
//                 property={property}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Properties;

import { useState } from "react";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

function Properties({ searchText = "" }) {
  const [selectedType, setSelectedType] = useState("all");

  const filteredProperties = properties.filter((property) => {
    const searchWords = searchText.toLowerCase().split(" ");

    const matchesSearch =
      !searchText ||
      searchWords.some((word) =>
        `${property.city} ${property.title}`
          .toLowerCase()
          .includes(word)
      );

    const matchesType =
      selectedType === "all" ||
      property.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">

        {/* Page Heading */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">
            All Properties
          </h1>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Search by city or filter by property type
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center gap-4">

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full sm:w-64 border border-slate-300 px-4 py-2 rounded bg-white"
          >
            <option value="all">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Flat">Flat</option>
            <option value="House">House</option>
            <option value="Duplex">Duplex</option>
            <option value="PG">PG</option>
            <option value="Boys Hostel">Boys Hostel</option>
            <option value="Girls Hostel">Girls Hostel</option>
            <option value="Shared Room">Shared Room</option>
          </select>

        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <p className="text-slate-500 text-sm md:text-base">
            No properties found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Properties;


