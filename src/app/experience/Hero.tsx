"use client";

import Head from 'next/head';
import Image from 'next/image';

export default function Hero() {
    const header = 'Breathe It In, Live It Up at Caldeira Estate';
    const content = `Experience the epitome of personalized service with our luxury offerings. Whether you're looking to customize your stay with special requests or simply seeking the best that our region has to offer, our dedicated team is here to fulfill your desires, ensuring an unforgettable experience.`;
    return (
        <section>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div
                className="hero bg-cover bg-center min-h-screen mx-auto pt-8 pb-12 flex flex-col"
                // caldeira_web/src/images/landing_bg.png
                style={{ backgroundImage: "url('/images/experiences_hero_bg.png')" }}
            >  
                <div className="top-bar sm:mx-4 lg:mx-20 mx-5 flex flex-row justify-between">
                    <Image
                        src="/images/Caldeira_Estate.png"  // Path relative to the public folder
                        alt="Caldeira Estate"
                        width={100}                  // Width in pixels
                        height={4}                  // Height in pixels
                        priority   
                    />
                    {/* <p>CALDEIRA ESTATE</p> */}
                    <div className="flex flex-row gap-3">
                        <div>
                            <a href="">Book a stay</a>
                        </div>
                        <div>
                            <a href="">Menu</a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col flex-grow justify-center items-center text-center">
                    <h2 style={{ fontFamily: "'Boska', serif" }} className="lg:text-[64px] md:text-[58px] text-5xl  font-bold text-white">{header}</h2>
                    <p style={{ fontFamily: "'Manrope', sans-serif" }} className="lg:w-[45%] md:w-[55%] w-[80%] text-base font-extralight text-white mt-4">{content}</p>
                </div>
            </div>
        </section>
      
    );
  }
  