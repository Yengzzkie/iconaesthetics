import Image from "next/image";
import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const ServicesOffered = () => {
  return (
    <div id="services" className="h-auto w-full">
      <div className="bg-(--secondary) flex flex-col items-center text-white m-auto py-12 lg:py-32">
        <div className="text-center w-full lg:w-1/2 px-2">
          <h1 className={`${italiana.className} text-shadow-[-3px_3px_7px_#111111] text-4xl mb-4`}>
            Our Specialties
          </h1>
          <p className="text-(--primary) text-center font-thin">
            We offer a range of beauty and aesthetic treatments designed to
            enhance your natural features with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:w-3/4 mx-auto mt-8 px-4 lg:px-0">

          {/* Skin Care Treatments */}
          <div className="lg:aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] lg:border-r border-b py-2 lg:py-0">
            <Image src="/facial-massage-removebg-preview.png" alt="facial-massage" width={100} height={100} className="invert" />
            <h1 className="mt-4 text-shadow-[-1px_2px_5px_#b8b3b0]">SKIN CARE TREATMENTS</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">
              Maintain healthy, radiant skin with professional facials and targeted skin care solutions.
            </p>
          </div>

          {/* Facial Rejuvenation */}
          <div className="lg:aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] lg:border-r border-b py-6 lg:py-0">
            <Image src="/Facial-Fillers.png" alt="facial-massage" width={100} height={100} />
            <h1 className="mt-4 text-shadow-[-1px_2px_5px_#b8b3b0]">FACIAL REJUVENATION</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">
              Revitalize your skin with customized treatments that improve tone, texture, and overall glow.
            </p>
          </div>

          {/* Haircut & Styling */}
          <div className="lg:aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] border-b py-6 lg:py-0">
            <Image src="/haircut.png" alt="haircut" width={100} height={100} className="invert" />
            <h1 className="mt-4 text-shadow-[-1px_2px_5px_#b8b3b0]">HAIRCUT & STYLING</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">
              Get a fresh, modern look with professional cuts and styling suited to your face shape and lifestyle.
            </p>
          </div>

          {/* Sugaring Hair Removal */}
          <div className="lg:aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] lg:border-r py-6 lg:py-0">
            <Image src="/waxing.png" alt="waxing" width={100} height={100} className="invert" />
            <h1 className="mt-4 text-shadow-[-1px_2px_5px_#b8b3b0]">SUGARING HAIR REMOVAL</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">
              A gentle, natural hair removal method that leaves your skin smooth with less irritation than waxing.
            </p>
          </div>

          {/* Brow Tattoo / Microblading */}
          <div className="lg:aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] border-t lg:border-t-0 lg:border-r py-6 lg:py-0">
            <Image src="/eyebrows.png" alt="eyebrow" width={100} height={100} className="invert" />
            <h1 className="mt-4 text-shadow-[-1px_2px_5px_#b8b3b0]">BROW TATTOO</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">
              Achieve fuller, perfectly shaped brows with semi-permanent techniques like microblading.
            </p>
          </div>

          {/* Eyelash Extensions */}
          <div className="lg:aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] border-t lg:border-t-0 py-6 lg:py-0">
            <Image src="/eyelash.png" alt="eyelashe" width={100} height={100} className="invert" />
            <h1 className="mt-4 text-shadow-[-1px_2px_5px_#b8b3b0]">EYELASH EXTENSIONS</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">
              Enhance your eyes with fuller, longer lashes tailored to your desired look—from natural to dramatic.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesOffered;