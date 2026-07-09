import { Libre_Caslon_Text } from "next/font/google";
import { FaCheckCircle, FaSpa } from "react-icons/fa";
import { MdMedicalServices, MdEco, MdInventory2 } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BiPlusMedical } from "react-icons/bi";

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ServicesInfo = () => {
  return (
    <div className="bg-(--light-bg) py-16 lg:py-36 px-8 lg:px-24">
      <div className="text-center mb-10 lg:mb-20 mx-auto">
        <span className="font-label-md text-label-md text-(--gold) uppercase tracking-[0.2em]">
          MORE INFO
        </span>
        <h1
          className={`${libreCaslonText.className} text-(--secondary) text-3xl lg:text-5xl mb-6 mt-3`}
        >
          Experience Rejuvenation
        </h1>
        <p className="text-xs lg:text-base text-on-surface-variant">
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
                <h3 className="text-xs font-label-md text-label-md text-on-surface uppercase tracking-wider">
                  Effective For:
                </h3>
              </div>
              <ul className="space-y-1.5 lg:space-y-1.5 lg:space-y-3 pl-9">
                <li className="font-body-md text-body-md text-on-surface-variant flex justify-between">
                  Dull, dehydrated skin
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Congested pores & blackheads
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Fine lines & early signs of aging
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Uneven skin tone & texture
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Oily and acne-prone skin
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Loss of radiance and elasticity
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
              <ul className="space-y-1.5 lg:space-y-1.5 lg:space-y-3 pl-9 list-disc marker:text-secondary">
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
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  <BiPlusMedical />
                </span>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                  BENEFITS:
                </h3>
              </div>
              <ul className="space-y-1.5 lg:space-y-1.5 lg:space-y-3 pl-9 list-disc marker:text-secondary">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Brighter, smoother complexion
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Clearer, refined pores
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Improved hydration levels
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Enhanced skin radiance
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Healthier-looking skin with no downtime
                </li>
              </ul>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t border-(--secondary)/20">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Recommended Frequency
              </span>
            </div>
            <button className="w-full border border-(--secondary) text-(--accent) py-3 font-label-md text-label-md tracking-widest uppercase">
              4-6 WEEKS
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
              <ul className="space-y-1.5 lg:space-y-3 pl-9">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Dull and tired-looking skin
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Uneven texture and tone
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Sun spots and pigmentation concerns
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Early signs of aging
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Mild acne scarring
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Maintaining a smooth, radiant complexion
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
              <ul className="space-y-1.5 lg:space-y-3 pl-9 list-disc marker:text-secondary">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Precision Diamond Resurfacing
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Advanced Exfoliation
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Pore-Refining Vacuum Technology
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Cellular Renewal Stimulation
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Calming Hydration Treatment
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Protective Finishing Products
                </li>
              </ul>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t border-(--secondary)/20">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Recommended Frequency
              </span>
            </div>
            <button className="w-full border border-(--secondary) text-(--accent) py-3 font-label-md text-label-md tracking-widest uppercase">
              2-4 Weeks
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
              <ul className="space-y-1.5 lg:space-y-3 pl-9">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Gentle hair removal
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Unwanted facial and body hair
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Frequent ingrown hairs
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Skin prone to irritation
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Maintaining smooth, healthy skin
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Gentle exfoliation and renewal
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
              <ul className="space-y-1.5 lg:space-y-3 pl-9 list-disc marker:text-secondary">
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Professional Sugar Paste Application
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Precision Hair Removal
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Natural Skin Exfoliation
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Directional Extraction Technique
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Calming Post-Care Treatment
                </li>
                <li className="font-body-md text-body-md text-on-surface-variant">
                  Hydration & Skin Protection
                </li>
              </ul>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t border-(--secondary)/20">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Recommended Frequency
              </span>
            </div>
            <button className="w-full border border-(--secondary) text-(--accent) py-3 font-label-md text-label-md tracking-widest uppercase">
              4-6 Weeks
            </button>
          </div>
        </article>
      </div>

      {/* // <!-- Featured Section with Asymmetric Layout --> */}
      <section className="mt-18 lg:mt-32 grid md:grid-cols-2 gap-16 items-center">
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
            className={`${libreCaslonText.className} text-(--secondary) text-2xl lg:text-4xl mb-4 lg:mb-8`}
          >
            Why Choose Professional Aesthetics?
          </h2>
          <p className="text-xs lg:text-base text-on-surface-variant mb-8 leading-relaxed">
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
                <p className="text-xs lg:text-base text-on-surface-variant">
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
                <p className="text-xs lg:text-base text-on-surface-variant">
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
