"use client";


import { useState } from "react";
import ImageDesc from "./ImageDesc";

export default function Experience() {
    const [header, setHeader] = useState<string>(`Design Your \nExperience`);
    const [content, setContent] = useState<string>(`Our estate offers an idyllic sanctuary where guests can immerse themselves in the stunning landscapes, savor unique experiences such as personalized wine tastings and intimate olive oil tours, and partake in seasonal activities that celebrate nature's beauty year-round. We're dedicated to creating memorable gatherings for all, inviting you to unwind, explore, and craft lasting memories.`);
    return (
        <section className="experience flex flex-row flex-wrap">
            <div className="w-full lg:w-5/12 bg-[#F9FAF7] flex flex-col py-16 px-16 gap-10 justify-between">
                <div className="flex flex-col gap-20">
                    <p className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-[#737E41]" style={{ whiteSpace: "pre-line", fontFamily: "'Boska', serif" }}>{header}</p>
                    <p className="text-sm font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>{content}</p>
                    <hr className="border-t-2 border-[#737E41] w-2/12 "/>
                </div>
                <div className="">
                    <button className="text-white text-base font-light px-16 py-3 rounded-md bg-[#4d552a]" style={{ fontFamily: "'Manrope', sans-serif" }}>Book a Stay and Design Your Experience</button>
                </div>
            </div>
            <div className="w-full lg:w-6/12 flex flex-col justify-around pb-6">
                <div className="w-full flex flex-row flex-wrap gap-10 justify-center lg:justify-start">
                    <ImageDesc 
                        height={150}
                        width={300}
                        src="/images/dye_a.png"
                        title="Wine Tour &  Tasting"
                        desc="Relish the nectar of the vine with a guided tour through our lush vineyard."
                        color="#737E41"
                    />
                    <ImageDesc 
                        height={150}
                        width={300}
                        src="/images/dye_b.png"
                        title="Olive Grove Tour"
                        desc="Uncover the art of olive oil production amidst our scenic groves."
                        color="#737E41"
                    />
                </div>
                <div className="w-full flex flex-row flex-wrap gap-10 justify-center lg:justify-start mt-10">
                    <ImageDesc 
                        height={150}
                        width={300}
                        src="/images/dye_c.png"
                        title="In-home Dining"
                        desc="Savor gourmet experiences crafted just for you in the comfort of our estate."
                        color="#737E41"
                    />
                    <ImageDesc 
                        height={150}
                        width={300}
                        src="/images/dye_d.png"
                        title="Concierge Services"
                        desc="Allow us to curate your perfect luxury accommodation in the wine country."
                        color="#737E41"
                    />
                </div>
            </div>
        </section>
    );
}