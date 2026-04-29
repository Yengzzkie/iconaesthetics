"use client";

import Image from "next/image";
import { Italiana, Inter } from "next/font/google";
import PrimaryButton from "../ui/Button/Button";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "300" });

const About = () => {
  return (
    <div
      id="about"
      className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-x-12 p-4 lg:py-32"
    >
      {/* IMAGE */}
      <div className="flex-1 relative flex justify-center">
        {/* background box */}
        <div className="w-full h-full bg-(--primary) lg:py-12 p-8">
          {/* image */}
          <Image
            src="/Happy-young-black-woman-getting-ready-before-plastic-surgery-session.png"
            alt=""
            width={500}
            height={500}
            className="relative z-10 w-full h-auto lg:-right-12.5"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col gap-4 flex-1 px-2 lg:px-16">
        <h1 className={`${italiana.className} text-4xl`}>
          Why Choose Icon Esthetics
        </h1>

        <p className={`${inter.className}`}>
          Icon Esthetics in Oshawa, Ontario, provides personalized beauty and
          wellness services designed just for you. Our dedicated team creates a
          tranquil, luxurious atmosphere that enhances your rejuvenation and
          confidence. Experience tailored solutions that celebrate your unique
          beauty aspirations!
        </p>

        <div className="flex flex-col mt-2 w-full gap-2">
          <PrimaryButton
            label="ABOUT US"
            variant="secondary"
            onClick={() => {
              window.open(
                "https://www.vagaro.com/iconesthetics1",
                "_blank",
                "noopener,noreferrer",
              );
            }}
          />
          <PrimaryButton label="OUR SERVICES" variant="outlineDark" onClick={() => {window.open("https://www.vagaro.com/iconesthetics1/services", "_blank", "noopener,noreferrer")}} />
        </div>
      </div>
    </div>
  );
};

export default About; 
