import agents from "../data/agents";
import AgentCard from "../components/AgentCard";

function Agents() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <h1 className="text-3xl font-bold mb-10">
          Our Agents
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Agents;
