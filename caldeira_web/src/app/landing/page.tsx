import Accomodation from "@/components/Accomodation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Quote from "@/components/Quote";
import Image from "next/image";

export default function Home() {
  return (
    <div className="out">
      <div className="main-box">
        <HeroSection />
        <Quote />
        <Accomodation />
        <Footer />
      </div>
    </div>
  );
}
