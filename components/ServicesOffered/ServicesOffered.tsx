import { Libre_Caslon_Text } from "next/font/google";
import servicesHighlight from "@/data/services-highlight/services-highlight.json";
import { MdOutlineArrowForward } from "react-icons/md";

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ServicesOffered = () => {
  return (
    <div id="services" className="bg-(--secondary) h-auto w-full p-8 lg:p-20">
      <section className="w-full py-8 lg:py-24">
        <div className="inset-0 bg-linear-to-b from-background/80 to-background flex flex-col items-center justify-end">
          <span className={`${libreCaslonText.className} text-xs lg:text-base text-(--gold) uppercase tracking-[0.2em]`}>
            Elevated Wellness
          </span>
          <h1 className={`${libreCaslonText.className} text-(--primary) text-3xl lg:text-6xl text-shadow text-center px-4`}>
            Artistry in Every Detail
          </h1>
        </div>
      </section>

      {/* // <!-- Redesigned Services Section --> */}
      <section className="md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-20">
          <h2
            className={`libreCaslonText ${libreCaslonText.className} text-(--gold) text-2xl lg:text-4xl mb-3 lg:mb-6`}
          >
            Our Specialized Services
          </h2>
          <p className="text-(--primary) text-xs lg:text-sm">
            Experience a curated selection of premium beauty treatments designed
            to revitalize your natural essence through expert mastery and serene
            surroundings.
          </p>
        </div>

        {/* <!-- Service Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Skin Care Treatments */}
          {servicesHighlight.map((service) => (
            <div key={service.id} className="service-card group cursor-pointer h-full flex flex-col">
              <div className="relative aspect-square overflow-hidden mb-3 lg:mb-6">
                <img
                  className="service-image w-full h-full object-cover transition-transform duration-700 ease-out"
                  src={service.image}
                  alt={service.name}
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              <div className="flex flex-col gap-1 lg:gap-2 flex-1">
                <h3 className="text-xl lg:text-3xl text-(--primary) text-shadow">
                  {service.name}
                </h3>

                <p className="text-(--primary)/80 text-xs lg:text-base line-clamp-3 flex-1">
                  {service.description}
                </p>

                <a className="mt-2 lg:mt-4 flex items-center gap-2 text-(--gold) uppercase tracking-[0.2em] text-xs lg:text-sm group/link" href="#">
                  Learn More
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-1 text-[18px]">
                    <MdOutlineArrowForward />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-(--light-bg) flex flex-col lg:flex-row justify-between items-center w-full py-7 lg:py-14 px-6 lg:px-20 mt-12 lg:mt-24">
          <div>
            <h3
              className={`${libreCaslonText.className} text-xl lg:text-3xl text-(--secondary) mb-2`}
            >
              Ready for your transformation?
            </h3>
            <p className="text-(--secondary)/80 text-xs lg:text-base mb-4">
              Consult with our master estheticians to create your personalized
              beauty journey today.
            </p>
          </div>
          <a href="https://www.vagaro.com/iconesthetics1/services" target="_blank">
            <button className="bg-(--secondary) text-(--primary) text-xs lg:text-base px-5 lg:px-10 py-4 uppercase tracking-[0.2em] hover:bg-(--secondary)/90 transition-all w-full lg:w-fit cursor-pointer">
              Secure Appointment
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesOffered;
