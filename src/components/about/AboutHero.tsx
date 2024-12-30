import Image from "next/image";
export default function AboutHero() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full h-96">
          <Image
            src="/images/career-page-image.png" // Replace with your banner image path
            alt="Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-heading">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="mb-6 leading-relaxed">
          We are a team of passionate individuals dedicated to delivering the
          best solutions for our clients. Our mission is to create meaningful
          and impactful experiences that drive success and innovation.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Values</h2>
        <p className="mb-6 leading-relaxed">
          At the heart of our work are values such as integrity, collaboration,
          and creativity. We strive to exceed expectations and foster
          long-lasting relationships with our clients.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="leading-relaxed">
          To empower businesses and individuals through cutting-edge technology
          and exceptional service.
        </p>
      </section>
    </div>
  );
}
