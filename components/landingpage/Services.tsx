"use client";

import { ArrowLeft, ArrowRight, Plus, Sun } from "lucide-react";
import { CTAButton } from "./ui/cta-button";
import Image from "next/image";

export function Services() {
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

        <div className="flex flex-col md:flex-row gap-6 p-4 bg-red-950/50 rounded-3xl md:mr-6">
          <Image
            src="/images/hero_bg.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="object-cover h-auto w-full md:w-[14rem] rounded-2xl"
          />

          <div className="md:space-y-10 space-y-3 text-white">
            <h3 className="text-3xl">Confotable rooms with excelent care</h3>
            <p className="max-w-xs text-base font-light">
              On-site pharmacies with quick delivery options even at Virtual
              consultations with top doctors.
            </p>

            <CTAButton
              label="Book Now"
              icon={<ArrowRight className="w-5 h-5 text-black -rotate-45" />}
              classNames={{
                base: "text-xs pl-3 w-max mt-6",
              }}
            />

            <div className="flex gap-4 items-center justify-between">
              <div>
                <span className="">1</span>
                <span className="text-slate-300"> / 5</span>
              </div>

              <div className="flex gap-4 items-end">
                <CTAButton
                  icon={<ArrowLeft className="w-5 h-5 text-white" />}
                  iconBtn={true}
                  classNames={{
                    iconContainer: "bg-transparent border border-white",
                  }}
                />
                <CTAButton
                  icon={<ArrowRight className="w-5 h-5 text-white" />}
                  iconBtn={true}
                />
              </div>
            </div>
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
            <span className="text-5xl font-bold">
              *
            </span>
            <p className="max-w-xs text-sm font-light leading-6">
              Our top-tier medical facilities offer a comprehensive range of
              services, including advanced diagnostics, specialized treatments,
              specialized centers and <br /> <span className="text-slate-400 pt-2">24/7 emergency care</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
