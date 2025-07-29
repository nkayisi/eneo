"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


// Données d'exemple pour les hôtels
const hotelData = [
  {
    id: 1,
    image: "/images/hero_bg.jpg",
  },
  {
    id: 2,
    image: "/images/hero_bg.jpg", 
  },
  {
    id: 3,
    image: "/images/hero_bg.jpg",
  },
  {
    id: 4,
    image: "/images/hero_bg.jpg",
  },
  {
    id: 5,
    image: "/images/hero_bg.jpg",
  },
];

interface GalleryProps {
  className?: string;
}

export function Gallery({ className }: GalleryProps) {
  return (
    <div className={cn("w-full py-8", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Grille statique - exactement comme dans l'image */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-4 relative text-center">
          {/* Première carte d'hôtel */}
          <div className="col-span-2 w-[14rem] h-[14rem] bg-white rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer">
            <Image
              src={hotelData[0].image}
              alt={hotelData[0].image}
              width={500}
              height={500}
              className="object-cover w-full h-[15rem]"
            />
          </div>
          <div className="col-span-1 relative -top-5 h-[13rem] bg-white rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer">
            <Image
              src={hotelData[0].image}
              alt={hotelData[0].image}
              width={500}
              height={500}
              className="object-cover w-full h-[13rem]"
            />
          </div>
          <div className="md:col-span-2 col-span-1 w-[14rem] h-[14rem] relative top-6 bg-white rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer">
            <Image
              src={hotelData[0].image}
              alt={hotelData[0].image}
              width={500}
              height={500}
              className="object-cover w-full h-[15rem]"
            />
          </div>


          {/* Carte CTA centrale - position exacte comme dans l'image */}
          <div className="col-span-2 sm:w-[14rem] w-full h-[14rem] z-10 relative md:-top-10 top-1 bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="h-full flex flex-col items-center justify-center p-4 text-center">
              <div className="mb-4">
                <h3 className="text-white text-sm font-semibold mb-2 leading-tight">
                  Join our community of travelers and experience unforgettable stays
                </h3>
              </div>
              
              <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium hover:bg-gray-100 transition-colors duration-300 group/btn">
                <span>support@sunrise.com</span>
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Troisième carte d'hôtel */}
          <div className="col-span-1 bg-white h-[11rem] relative top-10 rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer">
            <Image
              src={hotelData[0].image}
              alt={hotelData[0].image}
              width={500}
              height={500}
              className="object-cover w-full h-[11rem]"
            />
          </div>

          {/* Quatrième carte d'hôtel */}
          <div className="col-span-2 bg-white w-full h-[12rem] relative top-12 sm:top-0 rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer">
            <Image
              src={hotelData[0].image}
              alt={hotelData[0].image}
              width={500}
              height={500}
              className="object-cover w-full h-[12rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
