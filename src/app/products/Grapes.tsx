"use client";

import Head from "next/head";

export default function Grapes () {
    const name = `Petite\nSirah\nGrapes`;
    const quote = `Delight in the robust flavors\nof the valley steeped in\ntradition.`;
    const desc = `Grown organically in our lush vineyards, Caldeira Estate's Petit Sarah Grapes are the epitome of purity and taste. Bountiful and bursting with flavor, these grapes are perfect for wine enthusiasts and home chefs alike. Experience the unparalleled quality of our carefully nurtured, handpicked grapes.`;
    const cost = `100`;

    return (
        <section className="min-h-[773px] w-11/12 flex items-center mx-auto rounded-md" style={{ backgroundImage: "url('/images/prod_grape_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className="flex flex-row w-[90%] mx-auto justify-between items-end">
                <div className="flex flex-col gap-20 items-start">
                    <div className="flex flex-col gap-12">
                        <p className="text-[#262717] lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-medium" style={{whiteSpace: "pre-line",  fontFamily: "'Boska', serif" }}>{name}</p>
                        <p className="text-xl" style={{whiteSpace: "pre-line",  fontFamily: "'Manrope', sans-serif" }}>{quote}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#262717] text-[64px] font-extralight" style={{whiteSpace: "pre-line",  fontFamily: "'Boska', serif" }}>${cost}</p>
                        <button className="bg-[#262717]  py-2 px-12 rounded-md text-white font-extralight text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>Shop Now</button>
                    </div>
                </div>
                <div className="flex flex-col gap-32 items-start">
                    <div className="flex flex-col gap-4  items-start">
                        <p className="font-normal text-[24px]" style={{ fontFamily: "'Manrope', sans-serif" }}>Savor the Essence of Livermore </p>
                        <p className="w-[380px] text-base font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>{desc}</p>
                    </div>
                    <hr className={`lg:border-t-2 border-t-1 border-[#262717] w-[18%]`}/>
                </div>
            </div>
        </section>
    );
}