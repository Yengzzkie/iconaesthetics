import { FaLocationDot, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTiktok, } from "react-icons/fa6";
import InputField from "../ui/InputField/InputField";
import Logo from "@/components/ui/Logo/Logo";

const Footer = () => {
  return (
    <div className="bg-(--secondary) text-white pt-8 pb-2 px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0">
        {/* LOGO AND INFO */}
        <div className="flex flex-col flex-2 gap-y-4">
          <Logo light />
          <p className="font-thin max-w-2/3">
            Personalized aesthetic treatments led by certified experts. Look and
            feel your best—with confidence.
          </p>
          <div className="flex flex-col gap-y-2 font-thin">
            {/* location */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-0.5 transition-transform duration-200">
              <FaLocationDot className="h-3" />
              <p><a href="https://maps.app.goo.gl/CeVorwtfCnNUTewH7" target="_blank" rel="noopener noreferrer">43 Gladstone Ave, Oshawa, ON L1J 4E4 (Upper Level)</a></p>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-0.5 transition-transform duration-200">
              <FaPhone className="h-3" />
              <p><a href="tel:+19055798088">+1 (905) 579-8088</a></p>
            </div>
            {/* email */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-0.5 transition-transform duration-200">
              <FaEnvelope className="h-3" />
              <p><a href="mailto:estheticsicon@gmail.com">estheticsicon@gmail.com</a></p>
            </div>
          </div>
        </div>

        {/* NEWSLETTER AND SOCIAL MEDIA ICONS */}
        <div className="flex flex-col flex-1 gap-y-4">
          <h1 className={`text-LG font-bold`}>
            NEWSLETTER
          </h1>
          <InputField />
          <div className="flex flex-col gap-y-3 mt-4">
            <div className="flex items-center gap-x-1.5">
              <p className="font-thin">Get the latest news & updates from our Social Media Channels</p>
            </div>
            <div className="flex items-center gap-x-4">
              {/* FACEBOOK */}
              <a href="https://www.facebook.com/profile.php?id=61566849477081" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-x-1.5 bg-[#594A41] p-3 hover:bg-white hover:text-(--secondary) transition-all duration-200">
                  <FaFacebook className="w-4 h-4" />
                </div>
              </a>
              {/* INSTAGRAM */}
              <a href="https://www.instagram.com/esthetics.icon/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-x-1.5 bg-[#594A41] p-3 hover:bg-white hover:text-(--secondary) transition-all duration-200">
                  <FaInstagram className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CREDITS */}
      <div className="flex flex-col lg:flex-row text-center gap-1 justify-between py-4 border-t border-[#d7d7d771] mt-4 font-thin text-sm">
        <p>SEO and design by <a className="font-bold" href="https://manuel-gatchalian.com/" target="_blank">Manuel Gatchalian</a></p>
        <p>Copyright © {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
