import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PowerfulFeatures from "@/components/PowerfulFeatures/PowerfulFeatures";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhoWeHelp from "@/components/WhoWeHelp/WhoWeHelp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <PowerfulFeatures />
      <Stats />
      <Testimonials />
      <WhoWeHelp />
    </main>
  );
}
