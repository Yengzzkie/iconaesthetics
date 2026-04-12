import { FaInstagram, FaFacebook, FaTiktok, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const NavigationBar = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      {/* address and social media icons */}
      <div className="flex items-center bg-(--primary) h-5 w-full px-36 py-6">
        <div className="flex items-center w-full mx-auto">
          <div className="flex items-center text-[14px] gap-x-6">
            {/* location */}
            <div className="flex items-center">
              <FaLocationDot className="text-(--secondary) h-3 mr-1.5" />
              <p className="text-(--accent)">
                123 Serenity Avenue, NY 10001, USA
              </p>
            </div>
            {/* phone */}
            <div className="flex items-center">
              <FaPhone className="text-(--secondary) h-3 mr-1.5" />
              <p className="text-(--accent)">
                +1 (555) 123-4567
              </p>
            </div>
            {/* email */}
            <div className="flex items-center">
              <FaEnvelope className="text-(--secondary) h-3 mr-1.5" />
              <p className="text-(--accent)">
                info@serenity.com
              </p>
            </div>
          </div>
          {/* social media icons */}
          <div className="flex items-center ml-auto text-[14px] gap-x-8">
            <FaInstagram className="text-(--secondary) h-6 cursor-pointer" />
            <FaFacebook className="text-(--secondary) h-6 cursor-pointer" />
            <FaTiktok className="text-(--secondary) h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* logo and CTA buttons */}
      <div className="flex items-center justify-between h-auto w-full px-36 py-6">
        {/* logo */}
        <div className="flex items-center text-[14px] ml-4">
          <h1 className={`${italiana.className} text-(--secondary) text-2xl font-bold`}>Icon Aesthetics</h1>
        </div>
        {/* CTA buttons */}
        <div className="flex items-center text-[14px] ml-auto mr-4">
          <button className="text-(--secondary) border-[0.5px] border-(--secondary) mr-3 px-4 py-3">
            +1 (555) 123-4567
          </button>
          <button className="bg-(--secondary) text-white border-(--secondary) border px-4 py-3">
            Book Now
          </button>
        </div>
      </div>

      {/* navigation */}
      <div className="flex items-center bg-(--secondary) text-white h-5 w-full px-36 py-6">
        <div className="flex items-center w-full mx-auto">
          <div className="flex items-center text-[14px]">
            <p className="m-4">123 Serenity Avenue, NY 10001, USA</p>
            <p className="m-4">+1 (555) 123-4567</p>
            <p className="m-4">info@serenity.com</p>
          </div>
          {/* social media icons */}
          <div className="flex items-center ml-auto text-[14px]">
            <p className="m-4">Facebook</p>
            <p className="m-4">Twitter</p>
            <p className="m-4">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
