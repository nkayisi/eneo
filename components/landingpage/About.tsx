import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { CTAButton } from "./ui/cta-button";
import Image from "next/image";

export function About() {
  return (
    <section className="md:space-y-24 space-y-12 pb-14 border-b border-border">
      <div className="space-y-7">
        <span className="flex gap-2 items-center border border-border w-max mx-auto rounded-full px-5 py-2 text-xs md:text-sm font-light">
          Let's know us
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
          <div className="absolute inset-0 flex flex-1 items-center justify-center flex-col max-w-5xl mx-auto text-white p-5 bg-black/10 rounded-2xl">
            <div className="grid grid-cols-3 flex-1 items-start gap-7">
              <span className="border border-white h-auto text-sm text-center font-mediun rounded-full p-1 truncate">
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
                <span className="text-black text-sm mr-2">Kinshasa, RDC</span>
              </div>

              <CTAButton
                icon={<ArrowRight className="w-6 h-6 -rotate-45 text-black" />}
                classNames={{
                  iconContainer: "text-base w-max mt-6 bg-white",
                }}
                iconBtn={true}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6">
          <div className="w-full h-[13rem] relative flex flex-col rounded-2xl">
            <Image
              src="/images/hero_bg.jpg"
              alt="hero"
              width={1000}
              height={1000}
              className="object-cover h-[13rem] w-full rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-1 items-center justify-center flex-col max-w-5xl mx-auto text-white p-5 bg-black/10 rounded-2xl">
              <div className="grid grid-cols-3 flex-1 items-start gap-7">
                <span className="border border-white h-auto text-sm text-center font-medium rounded-full p-1 truncate">
                  Outdoor area
                </span>
                {/* <p className="col-span-2 text-base md:text-xl font-medium leading-5">
                  A versatile platform offering a wide range of hotel options
                  and services.
                </p> */}
              </div>
              <div className="w-full flex flex-1 items-end justify-between">
                <div className="bg-white p-1.5 rounded-full flex gap-2 items-center">
                  <span className="bg-gray-200 p-1 rounded-full">
                    <MapPin className="w-4 h-4 text-black" />
                  </span>
                  <span className="text-black text-sm mr-2">Kinshasa, RDC</span>
                </div>

                <CTAButton
                  icon={
                    <ArrowRight className="w-6 h-6 -rotate-45 text-black" />
                  }
                  classNames={{
                    iconContainer: "text-base w-max mt-6 bg-white",
                  }}
                  iconBtn={true}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-7">
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              optio sint assumenda voluptatibus porro quisquam.
            </p>
            <div className="flex gap-4 items-end">
              <CTAButton
                icon={<ArrowLeft className="w-5 h-5 text-black" />}
                iconBtn={true}
                classNames={{
                  iconContainer: "bg-white border border-black",
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
    </section>
  );
}
