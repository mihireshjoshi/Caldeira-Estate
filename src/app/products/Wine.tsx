"use client";

import Head from "next/head";

export default function Wine () {
    const name = `Caldeira\nRed\nWine`;
    const quote = `Experience the passion of\nLivermore Valley with every sip.`;
    const desc = `Indulge in the rich and diverse flavors of Caldeira Wines. Each bottle is a testament to our dedication to traditional winemaking techniques, combined with the unique terroir of Livermore Valley. From robust reds to crisp whites, our wines offer a journey of taste that delights the senses.`;
    const cost = `100`;

    return (
        <section className="min-h-[773px] w-11/12 flex items-center mx-auto rounded-md" style={{ backgroundImage: "url('/images/prod_wine_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className="flex flex-row w-[86%] mx-auto justify-between items-center">
                <div className="flex flex-col gap-20 items-start">
                    <div className="flex flex-col gap-2">
                        <p className="text-[#AC2024] lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-normal" style={{whiteSpace: "pre-line",  fontFamily: "'Boska', serif" }}>{name}</p>
                        <p style={{whiteSpace: "pre-line",  fontFamily: "'Manrope', sans-serif" }}>{quote}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#AC2024] text-[64px] font-extralight" style={{whiteSpace: "pre-line",  fontFamily: "'Boska', serif" }}>${cost}</p>
                        <button className="bg-[#AC2024]  py-2 px-12 rounded-md text-white font-extralight text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>Shop Now</button>
                    </div>
                </div>
                <div className="flex flex-col gap-40  items-start">
                    <div className="flex flex-col gap-4  items-start">
                        <p className="font-normal text-[24px]" style={{ fontFamily: "'Manrope', sans-serif" }}>Sip the Nectar of Livermore Valley </p>
                        <p className="w-[380px] text-base font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>{desc}</p>
                    </div>
                    <hr className={`lg:border-t-2 border-t-1 border-[#AC2024] w-1/6`}/>
                </div>
            </div>
        </section>
    );
}