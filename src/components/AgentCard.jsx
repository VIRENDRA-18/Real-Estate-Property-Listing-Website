function AgentCard({ agent }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
      
      <img
        src={agent.image}
        alt={agent.name}
        className="w-28 h-28 rounded-full mx-auto object-cover"
      />

      <h3 className="mt-4 text-lg font-semibold">
        {agent.name}
      </h3>

      <p className="text-slate-600 text-sm mt-1">
        {agent.experience}
      </p>

      <p className="text-slate-700 mt-2">
        {agent.phone}
      </p>

      <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-700 transition">
        Contact Agent
      </button>
    </div>
  );
}

export default AgentCard;
