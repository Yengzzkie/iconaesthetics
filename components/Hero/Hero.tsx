"use client";

import { Italiana } from "next/font/google";
import PrimaryButton from "../ui/Button/Button";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400", // Italiana only has 400
});

const Hero = () => {
  return (
    <div className="relative flex items-center gap-4 text-white h-[calc(100vh-200px)]">
      {/* Background Image */}
      <div className='absolute inset-0 bg-[url("https://demo.vicithemes.com/beautiva/wp-content/uploads/sites/7/2025/07/Beauty-Portrait-Beautiful-asian-Model-Touching-Face-by-Hand.jpg")] bg-cover bg-center' />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(264.69deg,#3F332C00_22.94%,#3F332CE6_95.59%)]" />

      {/* Content */}
      <div className="relative z-10 w-3/4 md:w-1/2 lg:w-1/3 ml-8 lg:ml-32">
        <h1 className={`${italiana.className} text-4xl lg:text-6xl`}>
          Reveal Your Natural Beauty
        </h1>
        <p className="font-thin my-4">
          Personalized aesthetic treatments led by certified experts. Look and
          feel your best—with confidence.
        </p>

        <div className="flex flex-col lg:flex-row gap-2">
          <PrimaryButton className="lg:w-full" label="BOOK NOW" variant="primary" />
          <PrimaryButton className="lg:w-full" label="EXPLORE OUR SERVICES" variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
