"use client";

import { useState } from "react";
import Head from "next/head";

export default function NewsLetter() {
    const [header, setHeader] = useState<string>('Be the first to know about exclusive offers, community gatherings, and more. Sign up now to stay connected.');
    return (
        <section className="newsletter my-10 flex items-center" style={{backgroundImage: "url('/images/newsletter_bg.png')"}}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div className="flex flex-row flex-wrap gap-12 items-center justify-around bg-[#515245] w-11/12 mx-auto h-full min-h-[180px] px-20 py-10 rounded-md">
                <p className="lg:w-1/3 font-bold text-xl text-white">{header}</p>
                <input type="text" placeholder="NAME" className="inp lg:w-auto md:w-auto sm:w-auto w-full border-b border-white font-extralight text-white focus:outline-none focus:ring-0" style={{ fontFamily: "'Manrope', sans-serif" }}/>
                <input type="text" placeholder="EMAIL" className="inp lg:w-auto md:w-auto sm:w-auto w-full border-b border-white font-extralight text-white focus:outline-none focus:ring-0" style={{ fontFamily: "'Manrope', sans-serif" }}/>
                <button className="lg:w-auto md:w-auto sm:w-auto w-full px-12 py-2 border text-white rounded-md font-extralight" style={{ fontFamily: "'Manrope', sans-serif" }}>SIGN UP</button>
            </div>
        </section>
    );
}