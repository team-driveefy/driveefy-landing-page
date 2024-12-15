import { TEAM_MEMBERS } from "../../shared/constant";

import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Our Team
        </h2>
        <h3 className="text-2xl font-bold text-center mb-4">
          The People Behind Quiety
        </h3>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Intrinsicly strategizes cutting-edge before interoperable applications
          incubate extensive expertise through integrated intellectual capital.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
