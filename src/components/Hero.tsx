export default function Hero() {
  return (
    <div className="pt-36 pb-16 bg-[url('https://sr-website.shiprocket.in/wp-content/uploads/2024/11/bg-colors-scaled-1.webp')] bg-cover bg-no-repeat">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-4">Supply Chain Management</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The world's most intuitive{" "}
              <span className="text-blue-700">
                AI-Powered Visibility Platform
              </span>
            </h1>
            <p className="text-gray-600 mb-8">
              Gain a competitive edge with the global supply chain visibility
              platform trusted by Fortune 500 companies. Save costs, reduce
              manual efforts and make your customers happier.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800">
              GET INSTANT DEMO
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="Supply Chain Management"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
