"use client";

import { cn } from "@/lib/utils";

// Logos de partenaires - remplacez ces URLs par vos vrais logos
const partnerLogos = [
  {
    name: "Airbnb",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png",
  },
  {
    name: "Google",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-700x394.png",
  },
  {
    name: "YouTube",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo-500x281.png",
  },
  {
    name: "Woodford Reserve",
    logo: "https://logos-world.net/wp-content/uploads/2025/07/Woodford-Reserve-Logo-500x281.png",
  },
  {
    name: "Trend Micro",
    logo: "https://logos-world.net/wp-content/uploads/2025/04/Trend-Micro-Logo-500x281.png",
  },
  {
    name: "Tillamook",
    logo: "https://logos-world.net/wp-content/uploads/2025/04/Tillamook-Logo-500x281.png",
  },
  // {
  //   name: "Hyatt",
  //   logo: "https://logos-world.net/wp-content/uploads/2020/06/Hyatt-Logo.png",
  // },
  // {
  //   name: "AccorHotels",
  //   logo: "https://logos-world.net/wp-content/uploads/2020/06/AccorHotels-Logo.png",
  // },
];

interface PartnerLogosProps {
  className?: string;
}

export function PartnerLogos({ className }: PartnerLogosProps) {
  return (
    <div className={cn("w-full overflow-hidden py-2", className)}>
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-full">
          {/* Gradient overlays pour un effet de fondu */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Conteneur du carrousel */}
          <div className="flex animate-scroll-infinite">
            {/* Premier set de logos */}
            <div className="flex items-center justify-center min-w-max">
              {partnerLogos.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center mx-8 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto max-w-[120px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Deuxième set de logos pour la continuité */}
            <div className="flex items-center justify-center min-w-max">
              {partnerLogos.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center mx-8 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto max-w-[120px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
