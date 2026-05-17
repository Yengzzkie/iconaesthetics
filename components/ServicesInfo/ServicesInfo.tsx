import { Libre_Caslon_Text } from "next/font/google";
import { FaCheckCircle, FaSpa } from "react-icons/fa";
import { MdMedicalServices, MdEco, MdInventory2 } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ServicesInfo = () => {
  return (
    <div className="bg-(--light-bg) py-36 px-24">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1
          className={`${libreCaslonText.className} text-6xl mb-6 text-on-surface`}
        >
          Experience Rejuvenation
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Explore our signature treatments designed to reveal your natural
          radiance through advanced techniques and personalized care.
        </p>
      </div>
      {/* // <!-- Services Grid --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* <!-- Hydrafacial Card --> */}
        <article className="service-card bg-surface-container-low border border-(--secondary)/40 p-8 md:p-10 flex flex-col h-full">
          <div className="mb-8">
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-sm text-label-sm mb-4 inline-block">
              MOST POPULAR
            </span>
            <h2
              className={`${libreCaslonText.className} font-headline-md text-headline-md text-primary mb-2`}
            >
              Hydrafacial
            </h2>
            <div className="h-px bg-(--secondary)/20 w-full mb-6"></div>
          </div>
          <div className="space-y-10 grow">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                  Effective For:
                </h3>
              </div>
              <ul className="space-y-3 pl-9">
                <li className="font-body-md text-body-md text-on-surface-variant flex justify-between">
                  Fine lines &amp; wrinkles
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Elasticity &amp; firmness
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Even tone &amp; vibrancy
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Skin texture
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Oily/congested skin
                </li>
              </ul>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  <FaSpa />
                </span>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                  Treatment Includes:
                </h3>
              </div>
              <ul className="space-y-3 pl-9 list-disc marker:text-secondary">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Vortex-cleansing
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Peel exfoliation
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Extraction
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Hydration &amp; Protection
                </li>
              </ul>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t border-(--secondary)/20">
            <div className="flex items-center justify-between mb-6">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Recommended Frequency
              </span>
              <span className="font-body-md text-body-md text-primary font-bold">
                Monthly
              </span>
            </div>
            <button className="w-full border border-(--secondary) text-(primary) py-3 font-label-md text-label-md tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all">
              More Details
            </button>
          </div>
        </article>

        {/* <!-- Microdermabrasion Card --> */}
        <article className="service-card bg-surface-container-low border border-(--secondary)/40 p-8 md:p-10 flex flex-col h-full">
          <div className="mb-8">
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-sm text-label-sm mb-4 inline-block">
              PRECISION CARE
            </span>
            <h2
              className={`${libreCaslonText.className} font-headline-md text-headline-md text-primary mb-2`}
            >
              Microdermabrasion
            </h2>
            <div className="h-px bg-(--secondary)/20 w-full mb-6"></div>
          </div>
          <div className="space-y-10 grow">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                  Effective For:
                </h3>
              </div>
              <ul className="space-y-3 pl-9">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Dull complexion
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Uneven skin tone/texture
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Age spots &amp; Dark spots
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Melasma reduction
                </li>
              </ul>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  <MdMedicalServices />
                </span>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                  Treatment Includes:
                </h3>
              </div>
              <ul className="space-y-3 pl-9 list-disc marker:text-secondary">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Diamond-tip exfoliation
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Vacuum suction
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Dead skin removal
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Soothing finishing mask
                </li>
              </ul>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t border-(--secondary)/20">
            <div className="flex items-center justify-between mb-6">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Recommended Frequency
              </span>
              <span className="font-body-md text-body-md text-primary font-bold">
                2-4 Weeks
              </span>
            </div>
            <button className="w-full border border-(--secondary) text-primary py-3 font-label-md text-label-md tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all">
              More Details
            </button>
          </div>
        </article>

        {/* <!-- Sugaring Card --> */}
        <article className="service-card bg-surface-container-low border border-(--secondary)/40 p-8 md:p-10 flex flex-col h-full">
          <div className="mb-8">
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-sm text-label-sm mb-4 inline-block">
              NATURAL CARE
            </span>
            <h2
              className={`${libreCaslonText.className} font-headline-md text-headline-md text-primary mb-2`}
            >
              Sugaring
            </h2>
            <div className="h-px bg-secondary/20 w-full mb-6"></div>
          </div>
          <div className="space-y-10 grow">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                  Effective For:
                </h3>
              </div>
              <ul className="space-y-3 pl-9">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Gentle hair removal
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  All skin types/Sensitive skin
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Reducing ingrown hairs
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Smooth, exfoliated skin
                </li>
              </ul>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  <MdEco />
                </span>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                  Treatment Includes:
                </h3>
              </div>
              <ul className="space-y-3 pl-9 list-disc marker:text-secondary">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Natural sugar paste application
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Directional hair removal
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Soothing after-care
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Post-treatment hydration
                </li>
              </ul>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t border-(--secondary)/20">
            <div className="flex items-center justify-between mb-6">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Recommended Frequency
              </span>
              <span className="font-body-md text-body-md text-primary font-bold">
                4-6 Weeks
              </span>
            </div>
            <button className="w-full border border-primary text-primary py-3 font-label-md text-label-md tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all">
              More Details
            </button>
          </div>
        </article>
      </div>

      {/* // <!-- Featured Section with Asymmetric Layout --> */}
      <section className="mt-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="aspect-[4/5] bg-surface-container-highest relative">
            <img
              alt="Skincare treatment"
              className="w-full h-full object-cover grayscale-[20%]"
              data-alt="A serene close-up photograph of a professional aesthetician applying a cooling gel treatment to a client's face in a luxurious spa environment. The lighting is soft and warm, highlighting the smooth texture of the skin and the clean, minimalist setting. The color palette consists of soft creams and deep earthy browns, reflecting the quiet luxury aesthetic of the brand. The atmosphere is peaceful and evokes a sense of professional wellness and high-end beauty care."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZdOvzkBvmj86qjxidwpiYK-CT-e0xDtw0LmZbg0K2V9JQnCw2_D6YO5IOCs37BN06Z86DR8ugQTiRAZUZW32hI_McFX8HKERaJfxRXTyngSHcUJk67XNUTDNmNwk4gXOQQPE5e_6gBGUM9YEKnzgBw0mKsAHVhwTWf2RUhV7jsbEabwtXEDZODed6GX99dQJVRE1Gw4P1KMQaD98DdQVzULFiyIEfSWzQHeokn7yav6HNu_PtlZOUULP2752K8LK_RrvBgw9Ae117"
            />
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-primary p-8 text-on-primary max-w-xs">
              <p className="font-headline-md text-headline-md italic mb-2">
                &quot;True beauty begins with healthy skin.&quot;
              </p>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                — Icon Esthetics Philosophy
              </span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <span className="font-label-md text-label-md text-(--gold) uppercase tracking-[0.2em] mb-4">
            The Experience
          </span>
          <h2
            className={`${libreCaslonText.className} text-(--secondary) text-4xl mb-8`}
          >
            Why Choose Professional Aesthetics?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            Our treatments go beyond surface-level beauty. By combining
            medical-grade technology with a deep understanding of skin biology,
            we deliver results that are both immediate and long-lasting. Every
            session is tailored to your unique skin profile, ensuring a journey
            that is as effective as it is relaxing.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">
                <RiVerifiedBadgeFill />
              </span>
              <div>
                <h4 className="font-bold text-(--accent) uppercase mb-1">
                  Certified Specialists
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our team consists of highly trained experts committed to your
                  safety and satisfaction.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">
                <MdInventory2 />
              </span>
              <div>
                <h4 className="font-bold text-(--accent) uppercase mb-1">
                  Premium Products
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We exclusively use medical-grade skincare lines to achieve
                  superior therapeutic results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesInfo;
