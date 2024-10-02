"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
    const header = `Welcome to Caldeira Estate, where passion for nature and luxury intertwine to create an unforgettable experience in the heart of Livermore Valley, California. \nNestled amidst breathtaking vineyards and lush olive gardens, our estate is not just a destination; it's a sanctuary where luxury and nature coexist in perfect harmony.`;
    // const [header, setHeader] = useState<string>(`Welcome to Caldeira Estate, where passion for nature and luxury intertwine to create an unforgettable experience in the heart of Livermore Valley, California. \nNestled amidst breathtaking vineyards and lush olive gardens, our estate is not just a destination; it's a sanctuary where luxury and nature coexist in perfect harmony.`);
    return (
        <section>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div
                className="hero bg-cover bg-center h-screen mx-auto pt-8 pb-12 flex flex-col"
                // caldeira_web/src/images/landing_bg.png
                style={{ backgroundImage: "url('/images/about_us_bg.png')" }}
            >  
                <div className="top-bar sm:mx-4 lg:mx-20 mx-5 flex flex-row justify-between">
                    <Image
                        src="/images/Caldeira_Estate.png"  // Path relative to the public folder
                        alt="Caldeira Estate"
                        width={100}                  // Width in pixels
                        height={4}                  // Height in pixels   
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
                    <h2 style={{ fontFamily: "'Boska', serif", whiteSpace: 'pre-line' }} className="text-3xl w-[56%] font-extralight text-white">{header}</h2>
                </div>
            </div>
        </section>
      
    );
  }
  