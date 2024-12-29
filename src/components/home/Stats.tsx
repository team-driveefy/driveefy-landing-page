import { STATS } from "../../shared/constant";

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-2 font-heading">
          Proudly serving in <span className="text-primary">70+ Countries</span>
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
