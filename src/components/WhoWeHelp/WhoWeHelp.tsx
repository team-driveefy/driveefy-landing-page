import ClientCard from "./ClientCard";

import { CLIENTS } from "../../shared/constant";

export default function WhoWeHelp() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-4">
          Who do we <span className="text-blue-700">help</span>?
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENTS.map((client, index) => (
            <ClientCard key={index} {...client} />
          ))}
        </div>
      </div>
    </div>
  );
}
