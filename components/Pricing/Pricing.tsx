"use client";

import { Libre_Caslon_Text } from "next/font/google";
import facialservices from "@/data/facialservices.json";
import tattooservices from "@/data/tattooservices.json";
import hairremovalservices from "@/data/hairremovalservices.json";
import hairremovalmale from "@/data/hairremovalmale.json";
import menhaircut from "@/data/menhaircut.json";
import womenhaircut from "@/data/womenhaircut.json";
import otherservices from "@/data/otherservices.json";

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Pricing = () => {
  return (
    <div
      id="pricing"
      className={`flex flex-col items-center overflow-hidden`}
    > 
      <section className="bg- relative py-24 w-full">
        <div className="mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-4">
            Investment in Yourself
          </span>
          <h1
            className={`${libreCaslonText.className} font-display-lg text-display-lg text-on-surface mb-6 max-w-2xl`}
          >
            Our Service Menu
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            A curated selection of premium beauty treatments designed to enhance
            your natural radiance. Each session is tailored to your unique skin
            profile and aesthetic goals.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary-fixed to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-linear-to-tr from-secondary-fixed to-transparent"></div>
        </div>
      </section>
      {/* <!-- Pricing Grid --> */}
      <section className={`p-20 mx-auto`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {/* <!-- Facial Rejuvenation --> */}
          <div className="space-y-4">
            <div className="border-b border-outline-variant pb-4">
              <h2
                className={`${libreCaslonText.className} font-headline-lg text-headline-lg text-primary`}
              >
                Facial Rejuvenation
              </h2>
            </div>
            {facialservices.map((service, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-end justify-between">
                  <span className="font-body-lg text-body-lg text-on-surface">
                    {service.name}
                  </span>
                  <div className="dotted-spacer"></div>
                  <span className="font-label-md text-label-md text-primary">
                    ${service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* <!-- Semi-Permanent Tattoo --> */}
          <div className="space-y-8">
            <div className="border-b border-outline-variant pb-4">
              <h2
                className={`${libreCaslonText.className} font-headline-lg text-headline-lg text-primary`}
              >
                Semi-Permanent Tattoo
              </h2>
            </div>
            <div className="space-y-4">
              {tattooservices.map((service, index) => (
                <div key={index} className="flex items-end justify-between">
                  <span className="font-body-lg text-body-lg text-on-surface">
                    {service.name}
                  </span>
                  <div className="dotted-spacer"></div>
                  <span className="font-label-md text-label-md text-primary">
                    ${service.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-(--secondary)/20 p-8 rounded-lg border border-secondary/10 mt-8">
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2 italic">
                Note:
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                All tattoo services include a complimentary consultation and
                personalized color matching to ensure the most natural, high-end
                results.
              </p>
            </div>
          </div>

          {/* <!-- Sugar Hair Removal - Female --> */}
          <div className="space-y-8">
            <div className="border-b border-outline-variant pb-4 flex justify-between items-baseline">
              <h2
                className={`${libreCaslonText.className} font-headline-lg text-headline-lg text-primary`}
              >
                Sugar Hair Removal
              </h2>
              <span className="font-label-sm text-label-sm text-secondary uppercase">
                Female
              </span>
            </div>
            <div className="space-y-4">
              {hairremovalservices.map((service, index) => (
                <div key={index} className="flex items-end justify-between">
                  <span className="font-body-lg text-body-lg text-on-surface">
                    {service.name}
                  </span>
                  <div className="dotted-spacer"></div>
                  <span className="font-label-md text-label-md text-primary">
                    ${service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Sugar Hair Removal - Male --> */}
          <div className="space-y-8">
            <div className="border-b border-outline-variant pb-4 flex justify-between items-baseline">
              <h2
                className={`${libreCaslonText.className} font-headline-lg text-headline-lg text-primary`}
              >
                Sugar Hair Removal
              </h2>
              <span className="font-label-sm text-label-sm text-secondary uppercase">
                Male
              </span>
            </div>
            <div className="space-y-4">
              {hairremovalmale.map((service, index) => (
                <div key={index} className="flex items-end justify-between">
                  <span className="font-body-lg text-body-lg text-on-surface">
                    {service.name}
                  </span>
                  <div className="dotted-spacer"></div>
                  <span className="font-label-md text-label-md text-primary">
                    ${service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Haircut & Styling --> */}
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="border-b border-outline-variant pb-4">
                  <h2
                    className={`${libreCaslonText.className} font-headline-lg text-headline-lg text-primary`}
                  >
                    Women&apos;s Haircut and Styling
                  </h2>
                </div>
                <div className="space-y-4">
                  {womenhaircut.map((service, index) => (
                    <div key={index} className="flex items-end justify-between">
                      <span className="font-body-lg text-body-lg text-on-surface">
                        {service.name}
                      </span>
                      <div className="dotted-spacer"></div>
                      <span className="font-label-md text-label-md text-primary">
                        ${service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-b border-outline-variant pb-4">
                  <h2
                    className={`${libreCaslonText.className} font-headline-lg text-headline-lg text-primary`}
                  >
                    Men&apos;s Haircut
                  </h2>
                </div>
                <div className="space-y-4">
                  {menhaircut.map((service, index) => (
                    <div key={index} className="flex items-end justify-between">
                      <span className="font-body-lg text-body-lg text-on-surface">
                        {service.name}
                      </span>
                      <div className="dotted-spacer"></div>
                      <span className="font-label-md text-label-md text-primary">
                        ${service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Other Services --> */}
          <div className="col-span-1 md:col-span-2 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Other Services
              </h2>
              <div className="w-24 h-px bg-primary/30 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-surface-container-highest p-8 rounded-lg flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">
                  visibility
                </span>
                <h3 className="font-headline-md text-headline-md mb-2">
                  classNameic Lashes
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  A natural, elegant enhancement.
                </p>
                <span className="font-label-md text-label-md text-primary mt-auto">
                  $110
                </span>
              </div>
              <div className="bg-surface-container-highest p-8 rounded-lg flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">
                  eye_tracking
                </span>
                <h3 className="font-headline-md text-headline-md mb-2">
                  Hybrid Lashes
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Textured and multi-dimensional.
                </p>
                <span className="font-label-md text-label-md text-primary mt-auto">
                  $135
                </span>
              </div>
              <div className="bg-surface-container-highest p-8 rounded-lg flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">
                  auto_awesome
                </span>
                <h3 className="font-headline-md text-headline-md mb-2">
                  Keratin Lift
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Maintenance-free lift and curl.
                </p>
                <span className="font-label-md text-label-md text-primary mt-auto">
                  $85
                </span>
              </div>
              <div className="bg-surface-container-highest p-8 rounded-lg flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">
                  brush
                </span>
                <h3 className="font-headline-md text-headline-md mb-2">
                  Brow Lamination
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Full, feathered brow aesthetic.
                </p>
                <span className="font-label-md text-label-md text-primary mt-auto">
                  $79
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA Section --> */}
      <section className="py-24 bg-primary text-white relative w-full">
        <div className="mx-auto relative z-10 flex flex-col items-center text-center">
          <h2 className="font-display-lg text-display-lg mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mb-10 leading-relaxed">
            Book your personalized consultation today and let our experts craft
            a beauty journey tailored specifically for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-primary px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary-fixed transition-colors">
              Book an Appointment
            </button>
            <button className="border border-white/40 text-white px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
        {/* <!-- Decorative Background Element --> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-xl pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Pricing;
