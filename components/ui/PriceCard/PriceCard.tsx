import PrimaryButton from "../Button/Button";
import { Italiana } from "next/font/google";
import { FaCheck } from "react-icons/fa";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });
type Variant = "light" | "dark";

type Props = {
  title: string;
  price: string;
  description: string;
  features?: string[];
  variant?: Variant;
  className?: string;
};

const PriceCard = ({
  title,
  price,
  description,
  features,
  variant = "light",
  className,
}: Props) => {

    const variants = {
        light: "bg-(--primary) text-(--secondary)",
        dark: "bg-(--secondary) text-white",
    };

  return (
      <div className={`${variants[variant]} ${className} flex flex-col gap-3 bg-(--primary) text-(--secondary)] p-6 max-w-90`}>
        <p>{title}</p>

        <h1 className={`${italiana.className} text-6xl ${variant === "light" ? "text-(--accent)" : ""}`}>{price}</h1>

        <div className="flex items-start border-(--secondary)] border-b py-4">
          <p className="text-(--secondary)] font-thin">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-2 font-thin my-4">
          <div className="flex items-center gap-2">
            <FaCheck />
            <p>Facial Rejuvenation treatments</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck />
            <p>Facial Rejuvenation treatments</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck />
            <p>Facial Rejuvenation treatments</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck />
            <p>Facial Rejuvenation treatments</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck />
            <p>Facial Rejuvenation treatments, Facial Rejuvenation treatments</p>
          </div>
        </div>

        <PrimaryButton
          className="mt-auto"
          label="BOOK NOW"
          variant={variant === "light" ? "secondary" : "primary"}
        />
      </div>
  );
};

export default PriceCard;
