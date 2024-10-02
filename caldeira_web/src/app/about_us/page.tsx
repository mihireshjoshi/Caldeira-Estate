"use client";

import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonial";
import Hero from "./Hero";
import Quote from "./Quote";
// import Grid from "@/components/Grid";
import GridTop from "./GridTop";
import Story from "./Story";
import Experience from "./Experience";

export default function AboutUs(){
    return (
        <div className="out">
            <div className="main-box">
                <Hero />
                <Quote />
                <GridTop />
                <Experience />
                <Story />
                <Testimonials />
                <Footer />
            </div>
        </div>
    );
}