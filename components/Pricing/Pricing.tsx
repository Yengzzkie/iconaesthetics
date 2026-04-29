"use client";

import { Italiana, Oranienbaum } from "next/font/google";
import facialservices from "@/data/facialservices.json";
import tattooservices from "@/data/tattooservices.json";
import hairremovalservices from "@/data/hairremovalservices.json";
import hairremovalmale from "@/data/hairremovalmale.json";
import menhaircut from "@/data/menhaircut.json";
import womenhaircut from "@/data/womenhaircut.json";
import otherservices from "@/data/otherservices.json";
import services from "@/data/services.json";
import PriceCard from "../ui/PriceCard/PriceCard";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });
const oranienbaum = Oranienbaum({ subsets: ["latin"], weight: "400" });

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col items-center p-2 lg:p-20">
      <h1 className="text-(--secondary) text-sm tracking-wider mb-2">
        OUR PRICING
      </h1>
      <div className={`${italiana.className} text-4xl text-center mb-10`}>
        <h1>Transparent Pricing,</h1>
        <h1>Premium Results</h1>
      </div>

      {/* cards container */}
      <div className={`${oranienbaum.className} grid grid-cols-1 lg:grid-cols-2 gap-8 h-1/2 w-full`}>
        <div className="relative flex flex-col gap-1 border border-(--secondary) w-full p-4 lg:p-8 overflow-hidden shadow-[6px_6px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="absolute -bottom-5 rotate-12 -left-5 w-75 h-75 bg-[#846e6124] mask-[url('/Facial-Rejuvenation.png')] mask-no-repeat mask-center mask-contain" />
          <h1 className="text-4xl text-center mb-2">Facial Rejuvenation</h1>
          {facialservices.map((facial, index) => (
            <div key={index} className="flex items-center font-bold">
              <p className="max-w-2/3 text-sm lg:text-lg">{facial.name}</p>
              <div className="flex-1 border-b-[0.5px] border-gray-400 border-dashed mx-2"></div>
              <span className="whitespace-nowrap text-sm lg:text-lg">${facial.price}.00</span>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col gap-1 border border-(--secondary) w-full p-4 lg:p-8 overflow-hidden shadow-[6px_6px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="absolute -bottom-5 rotate-12 -left-5 w-75 h-75 bg-[#846e6124] mask-[url('/Cosmetic-Surgery.png')] mask-no-repeat mask-center mask-contain" />
          <h1 className="text-4xl text-center mb-2">Semi-permanent Tattoo</h1>
          {tattooservices.map((tattoo, index) => (
            <div key={index} className="flex items-center font-bold">
              <p className="max-w-2/3 text-sm lg:text-lg">{tattoo.name}</p>
              <div className="flex-1 border-b-[0.5px] border-gray-400 border-dashed mx-2"></div>
              <span className="whitespace-nowrap text-sm lg:text-lg">${tattoo.price}.00</span>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col gap-1 border border-(--secondary) w-full p-4 lg:p-8 overflow-hidden shadow-[6px_6px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="absolute -bottom-5 rotate-12 -left-5 w-75 h-75 bg-[#846e6124] mask-[url('/waxing.png')] mask-no-repeat mask-center mask-contain" />
          <h1 className="text-4xl text-center mb-2">
            Sugar Hair Removal (Female)
          </h1>
          {hairremovalservices.map((hairremoval, index) => (
            <div key={index} className="flex items-center font-bold">
              <p className="max-w-2/3 text-sm lg:text-lg">{hairremoval.name}</p>
              <div className="flex-1 border-b-[0.5px] border-gray-400 border-dashed mx-2"></div>
              <span className="whitespace-nowrap text-sm lg:text-lg">${hairremoval.price}.00</span>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col gap-1 border border-(--secondary) w-full p-4 lg:p-8 overflow-hidden shadow-[6px_6px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="absolute -bottom-5 rotate-12 -left-5 w-75 h-75 bg-[#846e6124] mask-[url('/depilation.png')] mask-no-repeat mask-center mask-contain" />
          <h1 className="text-4xl text-center mb-2">
            Sugar Hair Removal (Male)
          </h1>
          {hairremovalmale.map((hairremoval, index) => (
            <div key={index} className="flex items-center font-bold">
              <p className="max-w-2/3 text-sm lg:text-lg">{hairremoval.name}</p>
              <div className="flex-1 border-b-[0.5px] border-gray-400 border-dashed mx-2"></div>
              <span className="whitespace-nowrap text-sm lg:text-lg">${hairremoval.price}.00</span>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col gap-1 border border-(--secondary) w-full p-4 lg:p-8 overflow-hidden shadow-[6px_6px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="absolute -bottom-5 rotate-12 -left-5 w-75 h-75 bg-[#846e6124] mask-[url('/haircut.png')] mask-no-repeat mask-center mask-contain" />
          <h1 className="text-4xl text-center mb-2">Haircut</h1>
          <h1 className="font-extrabold text-xl mt-4">MEN</h1>
          {menhaircut.map((haircut, index) => (
            <div key={index} className="flex items-center font-bold">
              <p className="max-w-2/3 text-sm lg:text-lg">{haircut.name}</p>
              <div className="flex-1 border-b-[0.5px] border-gray-400 border-dashed mx-2"></div>
              <span className="whitespace-nowrap text-sm lg:text-lg">${haircut.price}.00</span>
            </div>
          ))}

          <h1 className="font-extrabold text-xl mt-4">WOMEN</h1>
          {womenhaircut.map((haircut, index) => (
            <div key={index} className="flex items-center font-bold">
              <p className="max-w-2/3 text-sm lg:text-lg">{haircut.name}</p>
              <div className="flex-1 border-b-[0.5px] border-gray-400 border-dashed mx-2"></div>
              <span className="whitespace-nowrap text-sm lg:text-lg">${haircut.price}.00</span>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col gap-1 border border-(--secondary) w-full p-4 lg:p-8 overflow-hidden shadow-[6px_6px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="absolute -bottom-5 rotate-12 -left-5 w-75 h-75 bg-[#846e6124] mask-[url('/aesthetics.png')] mask-no-repeat mask-center mask-contain" />
          <h1 className="text-4xl text-center mb-2">
            Other Services
          </h1>
          {otherservices.map((otherservices, index) => (
            <div key={index} className="flex items-center font-bold">
              <p className="max-w-2/3 text-sm lg:text-lg">{otherservices.name}</p>
              <div className="flex-1 border-b-[0.5px] border-gray-400 border-dashed mx-2"></div>
              <span className="whitespace-nowrap text-sm lg:text-lg">${otherservices.price}.00</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={`${italiana.className} text-4xl text-center mt-8 mb-5`}>
        <h1>Other Services</h1>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-6 w-full">
        {services.map((service: {title: string, price: string, description: string}, index: number) => (
          <PriceCard key={index} title={service.title} price={service.price} description={service.description} variant={index % 2 === 0 ? "light" : "dark"} />
        ))}
      </div> */}
    </div>
  );
};

export default Pricing;
