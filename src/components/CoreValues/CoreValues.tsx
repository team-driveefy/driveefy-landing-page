import Image from "next/image";
import { CORE_VALUES } from "../../shared/constant";

export default function CoreValues() {
  return (
    <div className="relative bg-gray-900 py-16">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container">
        <h2 className="text-3xl font-bold text-center text-white mb-12 font-heading">
          CORE VALUES OF DRIVEEFY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg text-center">
              <Image
                src={value.icon}
                alt={value.title}
                className="w-16 h-16 mx-auto mb-4"
                width={256}
                height={256}
              />
              <h3 className="text-xl font-semibold">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
