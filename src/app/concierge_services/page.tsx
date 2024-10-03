"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonial";
import Title from "./Title";
import Hero from "./Hero";
import Closing from "./Closing";

export default function Concierge() {
    return (
        <div className="out">
            <div className="main-box">
                <Header />
                <Title />
                <Hero />
                <Closing />
                <Testimonials />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    )
}