function AgentCard({ agent }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 md:p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Image */}
      <img
        src={agent.image}
        alt={agent.name}
        className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto object-cover"
      />

      {/* Name */}
      <h3 className="mt-4 text-base md:text-lg font-semibold">
        {agent.name}
      </h3>

      {/* Experience */}
      <p className="text-slate-600 text-sm mt-1">
        {agent.experience}
      </p>

      {/* Phone */}
      <p className="text-slate-700 mt-2 text-sm md:text-base">
        {agent.phone}
      </p>

      {/* Button */}
      <button className="mt-4 w-full sm:w-auto px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition">
        Contact Agent
      </button>

    </div>
  );
}

export default AgentCard;
