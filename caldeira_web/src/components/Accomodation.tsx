"use client";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Accomodation() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [header, setHeader] = useState<string>('Accomodation');
    const [content, setContent] = useState<string>("Located just one hour from San Francisco, Caldeira House is your ideal destination where luxury and tranquility converge. Whether you're planning a family reunion, a romantic getaway, or a corporate retreat, our dedicated team is committed to making your stay exceptional.");
    return (
        <section className="accomodation flex flex-col" style={{backgroundImage: "url('/images/landing_c.png')"}} data-aos="fade-up">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div>
                <p className="sm:w-1/2 lg:w-3/5 text-center mx-auto lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-[#262717]" style={{ fontFamily: "'Boska', serif" }} data-aos="fade-up" data-aos-delay="100">{header}</p>
            </div>
            <hr className="border-t-2 border-[#737E41] w-1/12 mx-auto" data-aos="fade-up" data-aos-delay="120"/>
            <div>
                <p className="w-2/3 lg:w-3/5 text-center mx-auto text-base font-light text-black" style={{ fontFamily: "'Manrope', sans-serif" }} data-aos="fade-up" data-aos-delay="140">{content}</p>
            </div>
            <div className="flex flex-row flex-wrap  mx-auto sm:w-1/2 lg:w-11/12 justify-around gap-4" data-aos="fade-up" data-aos-delay="200">
                <Image 
                    height={250}
                    width={406}
                    src={'/images/accomodation_a.png'}
                    alt="3D Tour"
                />
                <Image 
                    height={250}
                    width={406}
                    src={'/images/accomodation_b.png'}
                    alt="3D Tour"
                />
                <Image 
                    height={250}
                    width={406}
                    src={'/images/accomodation_c.png'}
                    alt="3D Tour"
                />
            </div>
            <div className="mx-auto">
                <button className="px-8 lg:px-32 py-2 bg-[#4E562A] rounded-md text-white text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} >Book a Stay and Design Your Experience</button>
            </div>
            <hr className="border-t-2 border-[#737E41] w-1/12 mx-auto" data-aos="fade-up" data-aos-delay="120"/>
        </section>
    );
}