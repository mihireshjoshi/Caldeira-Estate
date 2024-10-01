"use client";

import { useState } from "react";
import Head from "next/head";

export default function Quote() {

  const [header, setHeader] = useState<string>('Discover Livermore Valley');
  const [content, setContent] = useState<string>(`Nestled in the sun-kissed region of California's renowned wine country, Livermore Valley is a picturesque landscape that has long been celebrated for its ideal climate and fertile soil. This enchanting valley, with its rolling hills and sprawling vineyards, has cultivated a thriving culture of winemaking that dates back generations. \n\nAt Caldeira Estate, we are proud to be part of this rich heritage, offering our guests an opportunity to experience the beauty and tradition of Livermore Valley firsthand. Here, the rhythm of nature guides our hand, fostering an environment where luxury and nature coexist in perfect harmony.`);

    return (
      <section className="quote flex flex-col" style={{backgroundImage: "url('/images/about_us_bg_b.png')"}}>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        </Head>
        <div>
          <p className="text-center mx-auto lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-white" style={{ fontFamily: "'Boska', serif" }}>{header}</p>
        </div>
        <hr className="border-t-2 border-white w-1/12 mx-auto" />
        <div>
          <p className="sm:w-2/3 lg:w-1/2 text-center lg:mx-auto md:mx-auto sm:mx-auto mx-4 text-base font-light text-white" style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: 'pre-line' }}>{content}</p>
        </div>
        
      </section>
    );
  }
  