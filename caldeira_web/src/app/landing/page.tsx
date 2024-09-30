import Accomodation from "@/components/Accomodation";
import Experience from "@/components/DYELanding";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import Quote from "@/components/Quote";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="out">
      <div className="main-box">
        <HeroSection />
        <Quote />
        <Accomodation />
        <Experience />
        <Products />
        <Story />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
