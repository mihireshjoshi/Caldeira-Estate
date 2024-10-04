"use client";

import Head from 'next/head';
import Image from 'next/image';

export default function Hero() {
    const header = `Experience Livermore Valley with\nCaldeira Estate's Local Partners`;
    const content = `At Caldeira Estate, our partnerships reflect our deep commitment to supporting the local economy and fostering a thriving community in Livermore Valley. We invite you to explore these curated experiences, designed to make your stay truly unforgettable.`;
    return (
        <section>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div
                className="hero bg-cover bg-center min-h-screen mx-auto pt-8 pb-16 flex flex-col"
                // caldeira_web/src/images/landing_bg.png
                style={{ backgroundImage: "url('/images/partners_bg.png')" }}
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
                <div className="container mx-auto flex flex-col flex-grow justify-end items-center text-center">
                    <h2 style={{ fontFamily: "'Boska', serif", whiteSpace: 'pre-line', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)' }} className="lg:text-[64px] md:text-[58px] text-5xl lg:w-[60%] md:w-[70%] w-[85%] font-light text-white">{header}</h2>
                    <p style={{ fontFamily: "'Manrope', sans-serif", textShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)' }} className="lg:w-[45%] md:w-[55%] w-[80%] text-base font-extralight text-white mt-4">{content}</p>
                </div>
            </div>
        </section>
      
    );
  }
  