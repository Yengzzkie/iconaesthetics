import Image from "next/image";
import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const ServicesOffered = () => {
  return (
    <div className="h-auto w-full">
      <div className="bg-(--secondary) flex flex-col items-center text-white m-auto py-32">
        <div className="text-center w-1/2">
          <h1 className={`${italiana.className} text-4xl mb-2`}>
            Our Specialties
          </h1>
          <p className="text-center font-thin">
            At Beautiva, we specialize in advanced aesthetic and cosmetic
            treatments tailored to enhance your natural beauty.
          </p>
        </div>
        <div className="grid grid-cols-3 w-3/4 mx-auto  mt-8">
          <div className="aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] border-r border-b">
            <Image src="/Facial-Rejuvenation.png" alt="" width={100} height={100} />
            <h1 className="mt-4">FACIAL REJUVANATION</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">Reverse aging signs with personalized treatments that refresh your skin without losing your natural beauty.</p>
          </div>

          <div className="aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] border-r border-b">
            <Image src="/Facial-Fillers.png" alt="" width={100} height={100} />
            <h1 className="mt-4">BOTOX & DERMAL FILLERS</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">Achieve a youthful and vibrant look with FDA-approved injectables for natural results.</p>
          </div>

          <div className="aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] border-b">
            <Image src="/Skin-Resurfacing.png" alt="" width={100} height={100} />
            <h1 className="mt-4">SKIN RESURFACING</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">Reveal radiant skin with non-invasive treatments targeting fine lines and acne scars.</p>
          </div>

          <div className="aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] border-r">
            <Image src="/Body-Contouring.png" alt="" width={100} height={100} />
            <h1 className="mt-4">BODY CONTOURING</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">Sculpt your silhouette with non-surgical fat reduction and skin-tightening treatments.</p>
          </div>

          <div className="aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33] border-r">
            <Image src="/Cosmetic-Surgery.png" alt="" width={100} height={100} />
            <h1 className="mt-4">COSTMETIC SURGERY</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">From rhinoplasty to facelifts, our certified surgeons provide safe, transformative results.</p>
          </div>

          <div className="aspect-square flex flex-col items-center justify-center gap-2 border-[#FFFFFF33]">
            <Image src="/Medical-Team.png" alt="" width={100} height={100} />
            <h1 className="mt-4">MEDICAL-GRADE SKINCARE</h1>
            <p className="text-sm font-thin text-[#FFFFFFCC] text-center max-w-3/4">From rhinoplasty to facelifts, our certified surgeons provide safe, transformative results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffered;
