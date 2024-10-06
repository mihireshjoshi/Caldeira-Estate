"use client";

import Head from "next/head";

export default function Olive () {
    const name = `SF Bay\nOlive Oil`;
    const quote = `Savor the essence of our\ngroves in a bottle.`;
    const desc = `Our Caldeira SF Bay Olive Oil is crafted with the same care and attention to detail as our wines. Harvested from meticulously tended olive groves, our oil is cold-pressed to preserve its natural goodness and vibrant flavor. Perfect for drizzling, dipping, or cooking, it promises to elevate any dish.`;
    const cost = `100`;

    return (
        <section className="min-h-[773px] w-11/12 flex items-center mx-auto rounded-md" style={{ backgroundImage: "url('/images/prod_olive_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className="flex flex-row w-[80%] ml-20 mt-20 justify-between items-center">
                <div className="flex flex-col gap-40 mt-20 items-start">
                    <div className="flex flex-col gap-4  items-start">
                        <p className="font-normal text-[24px]" style={{ fontFamily: "'Manrope', sans-serif" }}>Pure, Fresh, and Flavorful </p>
                        <p className="w-[370px] text-base font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>{desc}</p>
                    </div>
                    <hr className={`lg:border-t-2 border-t-1 border-[#737E41] w-1/6`}/>
                </div>
                <div className="flex flex-col gap-20 items-start">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-0">
                            <p className="text-[#737E41] lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-[500] leading-none" style={{whiteSpace: "pre-line",  fontFamily: "'Boska', serif" }}>{name}</p>
                            <p className="text-[#737E41] text-[64px] font-normal leading-none" style={{whiteSpace: "pre-line",  fontFamily: "'Boska', serif" }}>by Caldeira</p>
                        </div>
                        <p style={{whiteSpace: "pre-line",  fontFamily: "'Manrope', sans-serif" }}>{quote}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#737E41] text-[64px] font-extralight" style={{whiteSpace: "pre-line",  fontFamily: "'Boska', serif" }}>${cost}</p>
                        <button className="bg-[#737E41]  py-2 px-12 rounded-md text-white font-extralight text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}