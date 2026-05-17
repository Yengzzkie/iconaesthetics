import Hero from "@/components/Hero/Hero";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import About from "@/components/About/About";
import ServicesOffered from "@/components/ServicesOffered/ServicesOffered";
import Pricing from "@/components/Pricing/Pricing";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import ServicesInfo from "@/components/ServicesInfo/ServicesInfo";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <About />
      <ServicesOffered />
      <ServicesInfo />
      <Pricing />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
}
