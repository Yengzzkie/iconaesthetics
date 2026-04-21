import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

type LogoProps = {
    light?: boolean
};

const baseStyle = "relative border-2 p-2 w-fit";
const lightStyle = "";
const darkStyle = "text-(--secondary) border-(--secondary)";

const Logo = ({ light } : LogoProps) => {
  return (
    <div className={`${baseStyle} ${light ? lightStyle : darkStyle}`}>
      <h1 className={`${italiana.className} ${light ? lightStyle : darkStyle} text-2xl lg:text-3xl font-bold`}>
        <a href="#home">ICON ESTHETICS</a>
      </h1>
      <div className={`${light ? "bg-(--secondary)" : "bg-white"} absolute -bottom-2.5 right-3 text-xs lg:text-sm px-0.5 tracking-wider`}>
        BEAUTY & SPA
      </div>
    </div>
  );
};

export default Logo;
