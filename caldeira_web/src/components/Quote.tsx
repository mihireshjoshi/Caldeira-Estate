"use client";

import { useState } from "react";
import Head from "next/head";

export default function Quote() {

  const [header, setHeader] = useState<string>('An exclusive retreat nestled in the heart of Livermore wine country located on the outskirts of the Bay Area.');
  const [content, setContent] = useState<string>("Step into a world where nature's bounty meets refined elegance in the form of a private vineyard, an immaculate olive grove, and a legacy of private celebrations.");

    return (
      <section className="quote flex flex-col" style={{backgroundImage: "url('/images/Flowers.png')"}}>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        </Head>
        <div>
          <p className="sm:w-1/2 lg:w-3/5 text-center mx-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white" style={{ fontFamily: "'Boska', serif" }}>{header}</p>
        </div>
        <hr className="border-t-2 border-white w-1/12 mx-auto" />
        <div>
          <p className="sm:w-1/3 lg:w-1/2 text-center mx-auto text-base font-light text-white" style={{ fontFamily: "'Manrope', sans-serif" }}>{content}</p>
        </div>
        <div className="flex flex-row flex-wrap  mx-auto sm:w-1/2 lg:w-3/5 justify-around ">
          <button className="mx-2 my-2 w-60 lg:px-8 py-2 bg-white rounded-md text-orange-700">Main House 3D Tour</button>
          <button className="mx-2 my-2 w-60 lg:px-8 py-2 bg-white rounded-md text-orange-700">Guest House 3D Tour</button>
          <button className="mx-2 my-2 w-60 lg:px-8 py-2 bg-white rounded-md text-orange-700">Special Occasions</button>          
        </div>
      </section>
    );
  }
  