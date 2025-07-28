import { About } from "@/components/landingpage/About";
import { Hero } from "@/components/landingpage/Hero";
import { Services } from "@/components/landingpage/Services";
import { Facilities } from "@/components/landingpage/Facilities";
import { Memberships } from "@/components/landingpage/Memberships";
import { Testimonials } from "@/components/landingpage/Testimonials";
import { Contact } from "@/components/landingpage/Contact";

export default function Home() {
  return (
    <div className="font-sans min-h-screen max-h-screen max-w-[90rem] w-full mx-auto px-4 md:px-14 flex flex-col gap-7 md:gap-14">
      <Hero />
      <About />
      <Services />
      <Facilities />
      <Memberships />
      <Testimonials />
      <Contact />
    </div>
  );
}
