import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <div className="bg-(--secondary) text-white pt-8 pb-2 px-16">
      <div className="flex">
        {/* LOGO AND INFO */}
        <div className="flex flex-col gap-y-4 ">
          <h1 className={`${italiana.className} text-4xl font-bold`}>
            Icon Aesthetics
          </h1>
          <p className="font-thin">
            Personalized aesthetic treatments led by certified experts. Look and
            feel your best—with confidence.
          </p>
          <div className="flex flex-col gap-y-2">
            {/* location */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-0.5 transition-transform duration-200">
              <FaLocationDot className="h-3" />
              <p>123 Serenity Avenue, NY 10001, USA</p>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-0.5 transition-transform duration-200">
              <FaPhone className="h-3" />
              <p>+1 (555) 123-4567</p>
            </div>
            {/* email */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-0.5 transition-transform duration-200">
              <FaEnvelope className="h-3" />
              <p>info@serenity.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 ">
          <h1 className={`${italiana.className} text-2xl font-bold`}>
            Icon Aesthetics
          </h1>
          <p className="font-thin">
            Personalized aesthetic treatments led by certified experts. Look and
            feel your best—with confidence.
          </p>
          <div className="flex flex-col gap-y-2">
            {/* location */}
            <div className="flex items-center gap-x-1.5">
              <FaLocationDot className="h-3" />
              <p>123 Serenity Avenue, NY 10001, USA</p>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-1.5">
              <FaPhone className="h-3" />
              <p>+1 (555) 123-4567</p>
            </div>
            {/* email */}
            <div className="flex items-center gap-x-1.5">
              <FaEnvelope className="h-3" />
              <p>info@serenity.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 border-t border-[#d7d7d771] mt-4">
        <p>SEO and design by Manuel Gatchalian</p>
        <p>Copyright © 2025 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
