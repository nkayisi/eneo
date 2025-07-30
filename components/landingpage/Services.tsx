"use client";

import { ArrowLeft, ArrowRight, Plus, Sun } from "lucide-react";
import { CTAButton } from "./ui/cta-button";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Données pour le carrousel des services
const servicesData = [
  {
    id: 1,
    image: "/images/hero_bg.jpg",
    title: "Comfortable rooms with excellent care",
    description:
      "On-site pharmacies with quick delivery options even at Virtual consultations with top doctors.",
    currentSlide: 1,
    totalSlides: 5,
  },
  {
    id: 2,
    image: "/images/hero_bg.jpg",
    title: "Luxury Suites & Premium Amenities",
    description:
      "Experience world-class comfort with our premium suites featuring modern amenities and personalized service.",
    currentSlide: 2,
    totalSlides: 5,
  },
  {
    id: 3,
    image: "/images/hero_bg.jpg",
    title: "Spa & Wellness Center",
    description:
      "Rejuvenate your body and mind with our full-service spa offering therapeutic treatments and wellness programs.",
    currentSlide: 3,
    totalSlides: 5,
  },
  {
    id: 4,
    image: "/images/hero_bg.jpg",
    title: "Fine Dining & Culinary Excellence",
    description:
      "Savor exquisite cuisine prepared by our world-renowned chefs using the finest local and international ingredients.",
    currentSlide: 4,
    totalSlides: 5,
  },
  {
    id: 5,
    image: "/images/hero_bg.jpg",
    title: "Business & Conference Facilities",
    description:
      "State-of-the-art meeting rooms and conference facilities equipped with modern technology for your business needs.",
    currentSlide: 5,
    totalSlides: 5,
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="md:space-y-32 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
      <div className="space-y-7">
        <div className="flex gap-3 items-center">
          <span className="p-3 rounded-full bg-cyan-100">
            <Sun className="w-8 h-8" />
          </span>
          <span className="px-3 py-1 rounded-full border text-sm">Clinic</span>
          <span className="px-3 py-1 rounded-full border text-sm">
            Training
          </span>
          <span className="px-3 py-1 rounded-full border text-sm">
            Hospital
          </span>
        </div>

        {/* Embla Carousel pour les services */}
        <div
          className="embla overflow-hidden rounded-3xl md:mr-6"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="embla__slide flex-[0_0_100%] min-w-0"
              >
                <div className="flex flex-col md:flex-row gap-6 p-4 bg-red-950/50 rounded-3xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={1000}
                    className="object-cover h-auto w-full md:w-[14rem] rounded-2xl"
                  />

                  <div className="md:space-y-10 space-y-3 text-white flex flex-col justify-between">
                    <div className="space-y-3 md:space-y-6">
                      <h3 className="text-3xl leading-tight">
                        {service.title}
                      </h3>
                      <p className="max-w-xs text-base font-light line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <CTAButton
                      label="Book Now"
                      icon={
                        <ArrowRight className="w-5 h-5 text-black -rotate-45" />
                      }
                      classNames={{
                        base: "text-xs pl-3 w-max mt-6",
                      }}
                    />

                    <div className="flex gap-4 items-center justify-between">
                      <div>
                        <span className="">{selectedIndex + 1}</span>
                        <span className="text-slate-300">
                          {" "}
                          / {servicesData.length}
                        </span>
                      </div>

                      <div className="flex gap-4 items-end">
                        <CTAButton
                          icon={<ArrowLeft className="w-4 h-4 text-white" />}
                          iconBtn={true}
                          classNames={{
                            iconContainer: "bg-transparent border border-white",
                          }}
                          onPress={scrollPrev}
                        />
                        <CTAButton
                          icon={<ArrowRight className="w-4 h-4 text-white" />}
                          iconBtn={true}
                          onPress={scrollNext}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full space-y-10 p-4">
        <div className="flex flex-col gap-4 pr-0 md:pr-5">
          <h1 className="text-4xl sm:text-5xl">
            Discover Excellence in Hospitality. Trusted Hotels You Can Rely On.{" "}
            <div className="inline-flex w-40 border border-black rounded-full p-4"></div>
          </h1>
        </div>

        <div className="flex md:gap-10 gap-5 items-center">
          <div className="relative">
            <Image
              src="/images/hero_bg.jpg"
              alt="hero"
              width={1000}
              height={1000}
              className="object-cover h-[17rem] md:w-[13rem] w-[18rem] rounded-2xl"
            />

            <span className="absolute -left-5 md:-left-10 top-1/2 -translate-y-1/2 inset-0 bg-black w-max h-max p-4 rounded-full border-2 border-white flex items-center justify-center">
              <Plus className="w-8 h-8 text-white" />
            </span>
          </div>

          <div>
            <span className="text-5xl font-bold">*</span>
            <p className="max-w-xs text-sm font-light leading-6">
              Our top-tier medical facilities offer a comprehensive range of
              services, including advanced diagnostics, specialized treatments,
              specialized centers and <br />{" "}
              <span className="text-slate-400 pt-2">24/7 emergency care</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
