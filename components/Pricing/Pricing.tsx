import { Italiana } from "next/font/google";
import services from "@/data/services.json";
import PriceCard from "../ui/PriceCard/PriceCard";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col items-center p-20">
      <div className={`${italiana.className} text-4xl text-center mb-10`}>
        <h1>Transparent Pricing</h1>
        <h1>Premium Results</h1>
      </div>

      {/* cards container */}
      <div className="flex gap-8 h-1/2">
        {/* pricing card */}
        {services.map((service: {title: string, price: string, description: string}, index: number) => (
          <PriceCard key={index} title={service.title} price={service.price} description={service.description} variant={index % 2 === 0 ? "light" : "dark"} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
