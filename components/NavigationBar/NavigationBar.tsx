"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Logo from "@/components/ui/Logo/Logo";

type NavItemProps = {
  href: string;
  label: string;
};

type MobileNavItemProps = {
  href: string;
  label: string;
  onClick: () => void;
};

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky lg:relative top-0 flex flex-col flex-1 items-center justify-center z-50">
      {/* top bar */}
      <div className="hidden lg:flex items-center bg-primary h-5 w-full px-36 py-6">
        <div className="flex items-center w-full mx-auto">
          <div className="flex items-center text-(--primary) text-[14px] gap-x-6">
            {/* location */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-1 transition-transform duration-200">
              <FaLocationDot className="text-secondary h-3" />

              <p className="text-(--primary)">
                <a
                  href="https://maps.app.goo.gl/CeVorwtfCnNUTewH7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  43 Gladstone Ave, Oshawa, ON L1J 4E4 (Upper Level)
                </a>
              </p>
            </div>

            {/* phone */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-1 transition-transform duration-200">
              <FaPhone className="text-secondary h-3" />

              <p>
                <a href="tel:+19055798088">+1 (905) 579-8088</a>
              </p>
            </div>

            {/* email */}
            <div className="flex items-center gap-x-1.5 hover:-translate-y-1 transition-transform duration-200">
              <FaEnvelope className="text-secondary h-3" />

              <p>
                <a href="mailto:estheticsicon@gmail.com">
                  estheticsicon@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* social icons */}
          <div className="flex items-center ml-auto text-[14px] gap-x-8">
            <a
              href="https://www.facebook.com/profile.php?id=61566849477081"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-secondary h-6 cursor-pointer hover:scale-110 transition-transform duration-200" />
            </a>

            <a
              href="https://www.instagram.com/esthetics.icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-secondary h-6 cursor-pointer hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* logo + desktop nav */}
      <div className="flex items-center justify-between h-auto w-full px-4 lg:px-36 py-5 bg-background border-b border-outline-variant">
        {/* logo */}
        <Logo />

        {/* desktop CTA */}
        <div className="hidden lg:flex flex-row gap-3 items-center text-[14px] ml-auto mr-4">
          <button className="text-secondary text-sm border border-secondary hover:bg-(--light-bg) hover:text-white transition-all duration-200 px-4 py-3 cursor-pointer">
            <a href="tel:+19055798088">+1 (905) 579-8088</a>
          </button>

          <a
            href="https://www.vagaro.com/iconesthetics1/services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-(--secondary) text-sm text-white border border-secondary hover:bg-(--secondary)/80 transition-all duration-200 px-4 py-3 cursor-pointer">
              Book Now
            </button>
          </a>
        </div>

        {/* mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-secondary text-3xl ml-auto"
        >
          {mobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* desktop navigation */}
      <div className="hidden lg:flex items-center bg-secondary text-white h-5 w-full px-36 py-6">
        <div className="flex items-center w-full mx-auto">
          <div className="flex items-center text-[14px]">
            <NavItem href="#home" label="Home" />
            <NavItem href="#about" label="About Us" />
            <NavItem href="#services" label="Services" />
            <NavItem href="#pricing" label="Pricing" />
            <NavItem href="#faq" label="FAQ" />
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-background border-b border-outline-variant shadow-lg overflow-hidden transition-all duration-300 z-50 ${
          mobileMenuOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6">
          <MobileNavItem
            href="#home"
            label="Home"
            onClick={() => setMobileMenuOpen(false)}
          />

          <MobileNavItem
            href="#about"
            label="About Us"
            onClick={() => setMobileMenuOpen(false)}
          />

          <MobileNavItem
            href="#services"
            label="Services"
            onClick={() => setMobileMenuOpen(false)}
          />

          <MobileNavItem
            href="#pricing"
            label="Pricing"
            onClick={() => setMobileMenuOpen(false)}
          />

          <MobileNavItem
            href="#faq"
            label="FAQ"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* mobile CTA */}
          <div className="flex flex-col gap-3 mt-6">
            <a href="tel:+19055798088">
              <button className="w-full border border-secondary text-secondary py-3 hover:bg-secondary hover:text-white transition-all duration-200">
                Call Now
              </button>
            </a>

            <a
              href="https://www.vagaro.com/iconesthetics1/services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-secondary text-white py-3 hover:opacity-90 transition-all duration-200">
                Book Appointment
              </button>
            </a>
          </div>

          {/* social icons */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61566849477081"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-secondary text-2xl" />
            </a>

            <a
              href="https://www.instagram.com/esthetics.icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-secondary text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* desktop nav item */
const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <div className="hover:bg-white hover:text-(--secondary) transition-all duration-200 cursor-pointer">
      <p className="m-4">
        <a href={href}>{label}</a>
      </p>
    </div>
  );
};

/* mobile nav item */
const MobileNavItem = ({ href, label, onClick }: MobileNavItemProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="py-4 border-b border-outline-variant text-on-surface hover:text-secondary transition-colors duration-200"
    >
      {label}
    </a>
  );
};

export default NavigationBar;
