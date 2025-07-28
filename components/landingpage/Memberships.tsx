import { ArrowRight, HeartHandshake } from "lucide-react";
import { CTAButton } from "./ui/cta-button";
import { PartnerLogos } from "./PartnerLogos";
import { Gallery } from "./HotelGallery";

export function Memberships() {
  return (
    <section className="flex flex-col gap-7 py-5">
      <div className="flex flex-col gap-7 justify-center items-center">
        <span className="flex gap-2 items-center border border-border w-max mx-auto rounded-full px-5 py-2 text-xs md:text-sm font-light">
          Explore Memberships
          <ArrowRight className="w-4 h-4" />
        </span>

        <h1 className="text-4xl md:text-5xl max-w-4xl mx-auto text-center">
          Discover top hotels options nearby Effortless hotel booking, tailored
          for you
        </h1>

        <div className="flex flex-col items-center">
          <p className="text-sm md:text-base font-light max-w-xl mx-auto text-center">
            Find the best hotels around you with ease and access top-noth
            healthcare services tailored to your needs.
          </p>

          <CTAButton
            label="Get started"
            icon={<ArrowRight className="w-5 h-5 text-black -rotate-45" />}
            classNames={{
              base: "text-base pl-3 w-max mt-6",
            }}
          />

          <div className="flex gap-2 items-center mt-2">
            <HeartHandshake className="w-5 h-5 text-black" />
            <span className="text-xs font-light">
              Pause or cancel service anytime
            </span>
          </div>
        </div>
      </div>

      <PartnerLogos />

      <Gallery />
    </section>
  );
}
