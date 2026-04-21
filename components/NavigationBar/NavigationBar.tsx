"use client";

import { FaInstagram, FaFacebook, FaTiktok, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import Logo from "@/components/ui/Logo/Logo";

const NavigationBar = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      {/* address and social media icons */}
      <div className="hidden lg:flex items-center bg-(--primary) h-5 w-full px-36 py-6">
        <div className="flex items-center w-full mx-auto">
          <div className="flex items-center text-[14px] gap-x-6">
            {/* location */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-1 transition-transform duration-200">
              <FaLocationDot className="text-(--secondary) h-3" />
              <p className="text-(--accent)">
                <a href="https://maps.app.goo.gl/CeVorwtfCnNUTewH7" target="_blank" rel="noopener noreferrer">43 Gladstone Ave, Oshawa, ON L1J4E4</a>
              </p>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-1 transition-transform duration-200">
              <FaPhone className="text-(--secondary) h-3" />
              <p className="text-(--accent)">
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </p>
            </div>
            {/* email */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-1 transition-transform duration-200">
              <FaEnvelope className="text-(--secondary) h-3" />
              <p className="text-(--accent)">
                <a href="mailto:info@serenity.com">info@serenity.com</a>
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
      <div className="flex items-center justify-between h-auto w-full lg:px-36 py-6">
        {/* logo */}
        <Logo />
        {/* CTA buttons */}
        <div className="flex items-center text-[14px] ml-auto mr-4">
          <button className="text-(--secondary) border-[0.5px] border-(--secondary) hover:bg-(--secondary) hover:text-white transition-all duration-200 mr-3 px-4 py-3 cursor-pointer">
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
          </button>
          <button className="bg-(--secondary) text-white border-(--secondary) hover:bg-white hover:text-(--secondary) transition-all duration-200 border px-4 py-3 cursor-pointer">
            Book Now
          </button>
        </div>
      </div>

      {/* navigation */}
      <div className="hidden lg:flex items-center bg-(--secondary) text-white h-5 w-full px-36 py-6">
        <div className="flex items-center w-full mx-auto">
          <div className="flex items-center text-[14px]">
            <div className="hover:bg-white hover:text-(--secondary) transition-all duration-200">
              <p className="m-4"><a href="#home">Home</a></p>
            </div>
            <div className="hover:bg-white hover:text-(--secondary) transition-all duration-200">
              <p className="m-4"><a href="#about">About Us</a></p>
            </div>
            <div className="hover:bg-white hover:text-(--secondary) transition-all duration-200">
              <p className="m-4"><a href="#services">Services</a></p>
            </div>
            <div className="hover:bg-white hover:text-(--secondary) transition-all duration-200">
              <p className="m-4"><a href="#pricing">Pricing</a></p>
            </div>
            <div className="hover:bg-white hover:text-(--secondary) transition-all duration-200">
              <p className="m-4"><a href="#faq">FAQ</a></p>
            </div>
          </div>
          {/* social media icons */}
          <div className="flex items-center ml-auto text-[14px]">
            <p className="m-4"><a href="#services">Facebook</a></p>
            <p className="m-4">Twitter</p>
            <p className="m-4">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
