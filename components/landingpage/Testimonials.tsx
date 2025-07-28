"use client";

import { cn } from "@/lib/utils";
import { Quote, Smile } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

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

            {/* Texte du témoignage avec transition */}
            <div className="min-h-[100px] flex items-center justify-start">
              <blockquote 
                key={currentIndex}
                className="text-sm md:text-base flex items-start justify-start text-gray-800 leading-relaxed max-w-xl mx-auto font-light transition-all duration-500 ease-in-out animate-fade-in"
              >
                <Quote className="w-16 h-16 -pt-8 text-gray-400 " /> {currentTestimonial.text}
              </blockquote>
            </div>

            {/* Informations sur l'auteur avec transition */}
            <div className="flex items-center justify-center gap-2 mb-4 mt-8">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                <Image
                  key={`avatar-${currentIndex}`}
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="text-left">
                <h4 
                  key={`name-${currentIndex}`}
                  className="font-semibold text-gray-900 transition-all duration-500 ease-in-out"
                >
                  {currentTestimonial.author}
                </h4>
                <p 
                  key={`position-${currentIndex}`}
                  className="text-gray-500 transition-all text-sm font-light duration-500 ease-in-out"
                >
                  {currentTestimonial.position}
                </p>
              </div>
            </div>

            {/* Indicateurs de pagination interactifs */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
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