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
          <PrimaryButton className="lg:w-full" label="BOOK NOW" variant="primary" onClick={() => {window.open("https://www.vagaro.com/iconesthetics1/services", "_blank", "noopener,noreferrer")}} />
          <PrimaryButton className="lg:w-full" label="LEARN MORE" variant="outline" onClick={() => {window.open("https://www.vagaro.com/iconesthetics1", "_blank", "noopener,noreferrer")}} />
        </div>

        <div className="bg-(--primary) text-(--accent) text-xs lg:text-sm w/full lg:w-2/3 mx-auto rounded-md mt-4 shadow-[-10px_10px_4px_rgba(0,0,0,0.25)] p-4">
          <div className="border border-dashed border-(--secondary) rounded-md p-3">
            <h1 className="text-lg font-semibold text-center">Business Hours</h1>
            <div className="flex justify-between">
              <span>Mon</span>
              <span>10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Tue - Fri</span>
              <span>10:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>8:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
