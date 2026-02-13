import agents from "../data/agents";
import AgentCard from "../components/AgentCard";

function Agents() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">
          Our Agents
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Agents;
