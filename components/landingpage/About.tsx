"use client";

import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { CTAButton } from "./ui/cta-button";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Données pour le carrousel
const carouselData = [
  {
    id: 1,
    image: "/images/hero_bg.jpg",
    tag: "Outdoor area",
    location: "Kinshasa, RDC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio sint assumenda voluptatibus porro quisquam."
  },
  {
    id: 2,
    image: "/images/hero_bg.jpg",
    tag: "Indoor pool",
    location: "Lubumbashi, RDC",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 3,
    image: "/images/hero_bg.jpg",
    tag: "Spa & Wellness",
    location: "Goma, RDC",
    description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

export function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="md:space-y-24 space-y-12 pb-14 border-b border-border">
      <div className="space-y-7">
        <span className="flex gap-2 items-center border border-border w-max mx-auto rounded-full px-5 py-2 text-xs md:text-sm font-light">
          Let&apos;s know us
          <ArrowRight className="w-4 h-4" />
        </span>

        <h1 className="text-4xl md:text-5xl max-w-4xl mx-auto text-center">
          Explore Stays, About Comfort, Your Stay, Our Priority
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-18">
        <div className="flex flex-col gap-4 pr-0 md:pr-5">
          <span className="flex gap-2 items-center border border-border w-max rounded-full px-3 py-1 text-xs sm:text-sm font-light">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl">
            Eneo is a trusted platform connecting travelers with top hotels
            across the country
          </h2>
          <CTAButton
            label="Book Now"
            icon={<ArrowRight className="w-5 h-5 text-black -rotate-45" />}
            classNames={{
              base: "text-base pl-3 w-max mt-6",
            }}
          />
        </div>

        <div className="w-full h-[20rem] relative flex flex-col rounded-2xl">
          <Image
            src="/images/hero_bg.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="object-cover h-[20rem] w-full rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-1 items-center justify-center flex-col max-w-5xl mx-auto text-white p-2.5 sm:p-4 bg-black/10 rounded-2xl">
            <div className="grid grid-cols-3 flex-1 items-start gap-7">
              <span className="border border-white h-auto text-xs text-center font-mediun rounded-full p-1 truncate">
                Outdoor area
              </span>
              <p className="col-span-2 text-base md:text-xl font-medium leading-5">
                A versatile platform offering a wide range of hotel options and
                services.
              </p>
            </div>
            <div className="w-full flex flex-1 items-end justify-between">
              <div className="bg-white p-1.5 rounded-full flex gap-2 items-center">
                <span className="bg-gray-200 p-1 rounded-full">
                  <MapPin className="w-4 h-4 text-black" />
                </span>
                <span className="text-black text-xs mr-2">Kinshasa, RDC</span>
              </div>

              <CTAButton
                icon={<ArrowRight className="w-4 h-4 -rotate-45 text-black" />}
                classNames={{
                  iconContainer: "text-base w-max mt-6 bg-white",
                }}
                iconBtn={true}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6">
          {/* Embla Carousel */}
          <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="embla__container flex">
              {carouselData.map((item) => (
                <div key={item.id} className="embla__slide flex-[0_0_100%] min-w-0">
                  <div className="w-full h-[13rem] relative flex flex-col rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.tag}
                      width={1000}
                      height={1000}
                      className="object-cover h-[13rem] w-full rounded-2xl"
                    />
                    <div className="absolute inset-0 flex flex-1 items-center justify-center flex-col max-w-5xl mx-auto text-white p-2.5 sm:p-4 bg-black/10 rounded-2xl">
                      <div className="w-full grid grid-cols-3 flex-1 items-start gap-7">
                        <span className="w-max border border-white h-auto text-xs text-center font-medium rounded-full p-1">
                          {item.tag}
                        </span>
                      </div>
                      <div className="w-full flex flex-1 items-end justify-between">
                        <div className="bg-white p-1.5 rounded-full flex gap-2 items-center">
                          <span className="bg-gray-200 p-1 rounded-full">
                            <MapPin className="w-4 h-4 text-black" />
                          </span>
                          <span className="text-black text-xs mr-2">
                            {item.location}
                          </span>
                        </div>

                        <CTAButton
                          icon={
                            <ArrowRight className="w-4 h-4 -rotate-45 text-black" />
                          }
                          classNames={{
                            iconContainer: "text-base w-max mt-6 bg-white",
                          }}
                          iconBtn={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Description et boutons de navigation */}
          <div className="flex gap-5 justify-end">
            <p className="font-light line-clamp-3">
              {carouselData[selectedIndex]?.description}
            </p>
            <div className="flex gap-4 items-end">
              <CTAButton
                icon={<ArrowLeft className="w-4 h-4 text-black" />}
                iconBtn={true}
                classNames={{
                  iconContainer: "bg-white border border-black",
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
          
          {/* Indicateurs de pagination */}
          <div className="flex justify-center gap-2 mt-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
