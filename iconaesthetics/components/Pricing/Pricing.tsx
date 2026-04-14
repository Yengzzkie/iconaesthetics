import { Italiana } from "next/font/google";
import PriceCard from "../ui/PriceCard/PriceCard";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const Pricing = () => {
  return (
    <div className="flex flex-col items-center p-20">
      <div className={`${italiana.className} text-4xl text-center mb-10`}>
        <h1>Transparent Pricing</h1>
        <h1>Premium Results</h1>
      </div>

      {/* cards container */}
      <div className="flex gap-8 h-1/2">
        {/* pricing card */}
        <PriceCard title="Essential Glow" price="$75" description="Refreshing your skin and maintaing a healthy glow with minimal downtime." />
        <PriceCard title="Essential Glow" price="$75" description="Refreshing your skin and maintaing a healthy glow with minimal downtime." variant="dark" />
        <PriceCard title="Essential Glow" price="$75" description="Refreshing your skin and maintaing a healthy glow with minimal downtime." /> 
      </div>
    </div>
  );
};

export default Pricing;
