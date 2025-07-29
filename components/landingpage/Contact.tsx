"use client";

import { cn } from "@/lib/utils";
import {
    ArrowRight,
    Globe,
    Instagram,
    Linkedin,
    Phone,
    Twitter
} from "lucide-react";
import Image from "next/image";


interface ContactProps {
  className?: string;
}

export function Contact({ className }: ContactProps) {
  return (
    <section className={cn("pb-10 pt-40 sm:pt-0", className)}>
      <div className="relative mx-auto">
        {/* Titre principal SUNRISE CONTACT */}
        <div className="text-center mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-9xl text-gray-900 tracking-tight">
            SUNRISE - CONTACT
          </h1>
        </div>

        {/* Navigation et contenu principal */}
        <div className="w-full gap-8 items-center justify-center text-center">
          {/* Colonne de gauche - Navigation et description */}
          <div className="lg:col-span-8 mx-auto">
            {/* Navigation */}
            <nav className="flex items-center justify-center gap-4 mb-4 text-sm">
              <a
                href="#about"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="font-medium">About us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#faq"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="font-medium">FAQ</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="font-medium">Contact us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>

            {/* Description centrée */}
            <div className="max-w-sm mx-auto">
              <p className="text-gray-600 leading-relaxed text-sm">
                With our dedication and expertise in hospitality, we strive to
                offer stays that go beyond just a room, providing a comforting
                journey toward relaxation and unforgettable experiences.
              </p>
            </div>
          </div>

            {/* Colonne de droite - Image d'hôtel */}
            <div className="absolute sm:-top-[8rem] -top-[9rem] sm:left-[12rem] left-[8rem] h-[10rem] w-[14rem] sm:w-[10rem] border-8 border-white rounded-2xl overflow-hidden">
              <Image
                src="/images/hero_bg.jpg"
                alt="Hotel interior"
                fill
                className="object-cover"
              />
            </div>
        </div>

        {/* Footer avec contact et réseaux sociaux */}
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center mt-5">
          {/* Informations de contact */}
          <div className="flex items-center gap-2 md:mb-0">
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 text-sm font-medium">
              Helpline: +243 997 057 917
            </span>
          </div>

          {/* Icônes des réseaux sociaux */}
          <div className="flex items-center gap-4 md:mb-0">
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center border transition-shadow"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-500" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center border transition-shadow"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-500" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center border transition-shadow"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-500" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center border transition-shadow"
              aria-label="Website"
            >
              <Globe className="w-4 h-4 text-gray-500" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500">
            © 2025 Sunrise Health. All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
