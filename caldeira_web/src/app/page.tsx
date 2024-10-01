import Accomodation from "@/components/Accomodation";
import Experience from "@/components/DYELanding";
import Footer from "@/components/Footer";
import LandingHero from "@/components/LandingHero";
import NewsLetter from "@/components/NewsLetter";
import Products from "@/components/Products";
import Quote from "@/components/Quote";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="out">
      <div className="main-box">
        <LandingHero />
        <Quote />
        <Accomodation />
        <Experience />
        <Products />
        <Story />
        <Testimonials />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
