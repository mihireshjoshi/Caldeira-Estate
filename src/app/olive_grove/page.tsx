import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonial";
import Hero from "./Hero";
import Quote from "./Quote";
import Explore from "./Explore";

export default function OliveGrove () {
    return (
        <div className="out">
            <div className="main-box">
                <Header />
                <Hero />
                <Explore />
                <Quote />
                <Testimonials />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    );
}