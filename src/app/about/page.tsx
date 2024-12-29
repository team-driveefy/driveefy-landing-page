import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues/CoreValues";
import Services from "@/components/about/Services/Services";
import Story from "@/components/about/Story/Story";
import Team from "@/components/about/Team/Team";
import WhyChooseUs from "@/components/about/WhyChooseUs/WhyChooseUs";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <CoreValues />
      <Story />
      <Services />
      <Team />
      <WhyChooseUs />
    </main>
  );
}
