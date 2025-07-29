"use client";

import { cn } from "@/lib/utils";
import { Quote, Smile } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Données des témoignages
const testimonials = [
  {
    id: 1,
    text: "With our dedication and expertise in hospitality, we strive to provide stays that are not just accommodations, but a comforting journey toward relaxation and memorable experiences",
    author: "Aizan Mohammad",
    position: "Product Manager at FS Studio",
    avatar: "/images/hero_bg.jpg",
    hotelImage: "/images/hero_bg.jpg"
  },
  {
    id: 2,
    text: "The attention to detail and personalized service exceeded all our expectations. Every moment of our stay was carefully crafted to create lasting memories.",
    author: "Sarah Johnson",
    position: "Travel Blogger",
    avatar: "/images/hero_bg.jpg",
    hotelImage: "/images/hero_bg.jpg"
  },
  {
    id: 3,
    text: "From the moment we arrived, we felt like we were part of a family. The hospitality and warmth made our vacation truly unforgettable.",
    author: "Michael Chen",
    position: "Business Executive",
    avatar: "/images/hero_bg.jpg",
    hotelImage: "/images/hero_bg.jpg"
  }
];

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className }: TestimonialsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

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
    <section className={cn("bg-white", className)}>
      <div className="max-w-3xl mx-auto">
        {/* Conteneur avec bordure en pointillés et points bleus */}
        <div className="relative">
          {/* Bordure en pointillés */}
          <div className="absolute inset-0 border-b-2 border-x border-dashed rounded-b-[5rem] sm:rounded-b-full " />
          
          {/* Contenu principal */}
          <div className="bg-white p-6 md:pb-14 md:px-14 text-center">
            {/* Badge "Testimonial" avec smiley */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-lg font-medium text-gray-800">Testimonial</span>
              <Smile className="w-6 h-6 text-gray-800" />
            </div>

            {/* Embla Carousel pour les témoignages */}
            <div className="embla overflow-hidden rounded-b-full" ref={emblaRef}>
              <div className="embla__container flex">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="embla__slide flex-[0_0_100%] min-w-0">
                    {/* Texte du témoignage */}
                    <div className="min-h-[100px] flex items-center justify-start">
                      <blockquote className="text-sm md:text-base flex items-start justify-start text-gray-800 leading-relaxed max-w-xl mx-auto font-light">
                        <Quote className="w-16 h-16 -pt-8 text-gray-400 " /> {testimonial.text}
                      </blockquote>
                    </div>

                    {/* Informations sur l'auteur */}
                    <div className="flex items-center justify-center gap-2 mb-4 mt-8">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={500}
                          height={500}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-500 text-sm font-light">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicateurs de pagination interactifs */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === selectedIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}