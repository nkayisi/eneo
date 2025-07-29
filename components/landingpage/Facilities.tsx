import { ArrowLeft, ArrowRight, Heart, Search } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "./ui/cta-button";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Données pour les hôtels
const hotelsData = [
  {
    id: 1,
    image: "/images/hero_bg.jpg",
    name: "Crystal View Hotel",
    location: "Hotel in Dubaï",
    price: "$2500/Per day"
  },
  {
    id: 2,
    image: "/images/hero_bg.jpg",
    name: "Ocean Breeze Resort",
    location: "Hotel in Maldives",
    price: "$3200/Per day"
  },
  {
    id: 3,
    image: "/images/hero_bg.jpg",
    name: "Mountain Peak Lodge",
    location: "Hotel in Switzerland",
    price: "$1800/Per day"
  },
  {
    id: 4,
    image: "/images/hero_bg.jpg",
    name: "City Center Plaza",
    location: "Hotel in New York",
    price: "$2200/Per day"
  },
  {
    id: 5,
    image: "/images/hero_bg.jpg",
    name: "Tropical Paradise",
    location: "Hotel in Bali",
    price: "$1500/Per day"
  },
  {
    id: 6,
    image: "/images/hero_bg.jpg",
    name: "Royal Palace Hotel",
    location: "Hotel in Paris",
    price: "$2800/Per day"
  }
];

export function Facilities() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full flex flex-col gap-10 bg-gray-100 rounded-3xl p-4 md:p-12 py-8 md:py-18">
      <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="w-full flex items-center gap-3">
          <span className="border rounded-full px-3 py-1 text-sm font-light">
            Facilities
          </span>
          <h3 className="text-3xl font-medium">Explore Best Hotels</h3>
        </div>
        <div className="w-full flex gap-3 md:gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="sm:w-sm text-sm md:text-base rounded-full p-2 pl-4 pr-8 bg-white"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <button className="text-xs md:text-sm truncate font-light flex items-center gap-2 bg-black text-white py-2.5 px-3.5 rounded-full">
            View All
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 -rotate-45" />
          </button>
        </div>
      </div>

      {/* Embla Carousel pour les hôtels */}
      <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="embla__container flex">
          {hotelsData.map((hotel) => (
            <div key={hotel.id} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 pr-4">
              <div className="relative h-full">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={1000}
                  height={1000}
                  className="object-cover h-[24rem] w-full rounded-2xl"
                />
                <div className="absolute inset-0 flex flex-1 flex-col w-full text-white p-3.5 bg-black/10 rounded-2xl">
                  <div className="w-full flex flex-1 items-start justify-between">
                    <span className="p-2 rounded-full bg-transparent backdrop-blur-md">
                      <Heart className="w-5 h-5 fill-white" />
                    </span>

                    <span className="flex items-center border border-white rounded-full text-sm py-1 px-3">
                      {hotel.price}
                    </span>
                  </div>

                  <div className="p-3 bg-transparent backdrop-blur-2xl rounded-2xl">
                    <div className="flex justify-between items-center">
                      <span className="border rounded-full px-3 py-1 text-xs font-light">
                        {hotel.location}
                      </span>
                      <CTAButton
                        icon={
                          <ArrowRight className="w-5 h-5 -rotate-45 text-white" />
                        }
                        classNames={{
                          iconContainer: "text-base w-max bg-black",
                        }}
                        iconBtn={true}
                      />
                    </div>
                    <h3 className="text-xl">{hotel.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-2 -my-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-4 items-end">
          <CTAButton
            icon={<ArrowLeft className="w-4 h-4 text-black" />}
            iconBtn={true}
            classNames={{
              iconContainer: `bg-white border border-black ${!canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''}`,
            }}
            onPress={canScrollPrev ? scrollPrev : undefined}
          />
          <CTAButton
            icon={<ArrowRight className="w-4 h-4 text-white" />}
            iconBtn={true}
            classNames={{
              iconContainer: `${!canScrollNext ? 'opacity-50 cursor-not-allowed' : ''}`,
            }}
            onPress={canScrollNext ? scrollNext : undefined}
          />
        </div>

        <p className="text-sm font-light max-w-xs">
            Book your stay for personalized experiences, luxurious amenities, or a relaxing getaway, and take a step towards unforfettable memories.
        </p>
      </div>
    </section>
  );
}
