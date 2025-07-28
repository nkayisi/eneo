"use client";

import { Apple, Download } from "lucide-react";
import { Header } from "./Header";

export function Hero() {
  return (
    <section className="w-full flex flex-col">
      <Header />
      <div className="bg-[url('/images/hero_bg.jpg')] w-full sm:h-[45rem] h-[50rem] p-3 sm:p-5 flex flex-col relative rounded-3xl">
        <FlaotingButtons />

        <div className="w-full flex flex-1 items-center justify-center flex-col gap-5 py-5 max-w-5xl mx-auto text-white">
          <h1 className="text-3xl sm:text-5xl md:text-center">
            Find amazing hotels, compare prices, and book your dream vacation
            easily
          </h1>
          <p className="text-base sm:text-lg sm:text-center max-w-3xl mx-auto">
            Search trusted hotels for unforgattable stays and hassle-free
            bookings. Find the best hotels near you in seconds with ease and
            confidence!
          </p>
        </div>

        <div className="w-full md:w-max mx-auto flex flex-col md:flex-row items-end gap-1.5 md:gap-5 rounded-2xl bg-white p-5 md:p-10">
          <fieldset className="w-full flex flex-col gap-2">
            <label htmlFor="location">Location</label>
            <input name="location" className="w-full  border border-border h-10 md:h-12" />
          </fieldset>
          <fieldset className="w-full flex flex-col gap-2">
            <label htmlFor="type">Type</label>
            <input name="type" className="w-full  border border-border h-10 md:h-12" />
          </fieldset>
          <fieldset className="w-full flex flex-col gap-2">
            <label htmlFor="type">Price</label>
            <input name="type" className="w-full  border border-border h-10 md:h-12" />
          </fieldset>

          <button className="w-full md:max-w-max mt-4 md:mt-0 bg-black text-white px-5 h-10 md:h-12 py-2.5 rounded-sm truncate">
            Search Place
          </button>
        </div>
      </div>
    </section>
  );
}

export function FlaotingButtons() {
  return (
    <div className="bg-white cursor-pointer py-1.5 px-2 w-max flex gap-5 rounded-full text-sm items-center absolute sm:right-5 right-3 sm:top-5 top-3">
      <span className="truncate ml-2">Get the app</span>
      <div className="flex gap-1.5 items-center">
        <button className="p-1.5 border rounded-full">
          <Apple className="w-4 h-4 text-black fill-black" />
        </button>
        <button className="p-1.5 border rounded-full">
          <Download className="w-4 h-4 text-black" />
        </button>
        <button className="p-1.5 bg-black rounded-full">
          <Download className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
