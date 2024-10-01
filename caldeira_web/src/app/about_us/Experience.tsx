"use client";


import ImageDesc from "@/components/ImageDesc";
import { useState } from "react";


export default function Experience() {
    const [header, setHeader] = useState<string>(`Engaging Experiences Await`);
    const [content, setContent] = useState<string>(`Caldeira Estate is more than just a destination; it is a canvas for unforgettable experiences. We invite you to immerse yourself in our world through exclusive wine tastings, artisanal olive oil tours, and hands-on experiences such as grape harvesting. Each of these experiences is designed to allow you to fully appreciate the rich bounty of our land. You can unwind and create unforgettable memories with family and friends, savoring the essence of countryside living.`);
    return (
        <section className="experience flex flex-row flex-wrap">
            <div className="w-full lg:w-[60%] bg-[#FDFBFB] flex flex-col py-40 px-16 gap-10 justify-between" style={{backgroundImage: "url('/images/experience_about.png')"}}>
                <div className="flex flex-col gap-20">
                    <p className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-[#BD4C50]" style={{ whiteSpace: "pre-line", fontFamily: "'Boska', serif" }}>{header}</p>
                    <p className="text-sm font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>{content}</p>
                    <hr className="border-t-2 border-[#BD4C50] w-2/12 "/>
                </div>
                <div className="">
                    <button className="text-[#BD4C50] text-base font-light px-16 py-3 rounded-md border border-[#BD4C50]" style={{ fontFamily: "'Manrope', sans-serif" }}>`Design Your Experience</button>
                </div>
            </div>
            <div className="w-full lg:w-[38%] flex flex-col lg:items-start items-center justify-around py-6 gap-6">
                <ImageDesc
                    height={150}
                    width={420}
                    src="/images/about_a.png"
                    title="Wine Tasting"
                    desc="Our renowned vineyards yield wines that embody the essence of the region, offering a taste that is as captivating as the landscape itself. Sample our exquisite wines that are crafted with respect for tradition and nature."
                    color="#BD4C50"
                />
                <ImageDesc 
                    height={150}
                    width={420}
                    src="/images/about_b.png"
                    title="Olive Grove Tour"
                    desc="For those with a penchant for culinary delights, our artisanal olive grove tours reveal the secrets of our celebrated extra virgin olive oil, produced from the first cold pressing for exceptional quality and flavor."
                    color="#BD4C50"
                />
                <ImageDesc 
                    height={150}
                    width={420}
                    src="/images/about_b.png"
                    title="Grape Harvesting"
                    desc="Hands-on experiences, such as grape harvesting allow you to connect deeply with the land and appreciate its rich bounty."
                     color="#BD4C50"
                />
            </div>
        </section>
    );
}