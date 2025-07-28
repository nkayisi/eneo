import { ArrowLeft, ArrowRight, Heart, Search } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "./ui/cta-button";

export function Facilities() {
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

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative">
            <Image
              src="/images/hero_bg.jpg"
              alt="hero"
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
                  $2500/Per day
                </span>
              </div>

              <div className="p-3 bg-transparent backdrop-blur-2xl rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="border rounded-full px-3 py-1 text-xs font-light">
                    Hotel in Dubaï
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
                <h3 className="text-xl">Crystal View Hotel</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-between items-center">
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

        <p className="text-sm font-light max-w-xs">
            Book your stay for personalized experiences, luxurious amenities, or a relaxing getaway, and take a step towards unforfettable memories.
        </p>
      </div>
    </section>
  );
}
