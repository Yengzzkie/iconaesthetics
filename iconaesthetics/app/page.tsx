import Hero from "@/components/Hero/Hero";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import About from "@/components/About/About";
import ServicesOffered from "@/components/ServicesOffered/ServicesOffered";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <About />
      <ServicesOffered />
      <Pricing />
    </div>
  );
}
