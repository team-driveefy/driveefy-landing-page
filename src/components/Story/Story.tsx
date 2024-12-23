import Image from "next/image";

export default function Story() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Dashboard"
              className="rounded-lg shadow-xl"
              width={256}
              height={256}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
              STORY ABOUT US
            </h2>
            <h3 className="text-3xl font-bold mb-6">
              Perfect place to Design, Development, Software.
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Free Download App
                </h4>
                <p className="text-gray-600">
                  Fruit defer in party me built under first. Forbade him but
                  savings sending ham general. So play do in near park that
                  pain.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Trusted and Reliable
                </h4>
                <p className="text-gray-600">
                  Fruit defer in party me built under first. Forbade him but
                  savings sending ham general. So play do in near park that
                  pain.
                </p>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800">
                Start Free Trial
              </button>
              <button className="text-primary underline hover:text-blue-800">
                See All Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
