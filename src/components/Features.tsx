import { HOME_FEATURES } from "../shared/constant";

export default function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Special Features
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Authoritatively underwhelm excellent methodologies via premium
          expertise competitive than open-source imperatives disseminate.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOME_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
