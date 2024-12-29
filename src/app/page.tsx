import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import PowerfulFeatures from "@/components/home/PowerfulFeatures/PowerfulFeatures";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import WhoWeHelp from "@/components/home/WhoWeHelp/WhoWeHelp";

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
