"use client";

import Head from 'next/head';
import Image from 'next/image';
// import Availability from "./Availability";
// import { useState } from 'react';

export default function OcassionHero() {
    // const [header, setHeader] = useState<string>('Special Occasions at Caldeira Estate');
    // const [content, setContent] = useState<string>('Welcome to Caldeira Estate, where moments turn into cherished memories amidst the serene beauty of nature’s harmony. Nestled in the heart of wine country yet conveniently located just an hour from San Francisco, our estate is the perfect escape for both corporate and private gatherings.');
    const header = 'Special Occasions at Caldeira Estate';
    const content = 'Welcome to Caldeira Estate, where moments turn into cherished memories amidst the serene beauty of nature’s harmony. Nestled in the heart of wine country yet conveniently located just an hour from San Francisco, our estate is the perfect escape for both corporate and private gatherings.';
    return (
        <section>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div
                className="hero bg-cover bg-center min-h-screen mx-auto pt-8 pb-12 flex flex-col"
                // caldeira_web/src/images/landing_bg.png
                style={{ backgroundImage: "url('/images/ocassions_bg.png')" }}
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
                    <h2 style={{ fontFamily: "'Boska', serif" }} className="text-6xl font-bold text-white">{header}</h2>
                    <p style={{ fontFamily: "'Manrope', sans-serif" }} className="w-[45%] text-base font-extralight text-white mt-4">{content}</p>
                </div>
            </div>
        </section>
      
    );
  }
  