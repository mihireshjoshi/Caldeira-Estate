import Grid from "@/components/Grid";
// import { useState } from "react";
import Head from "next/head";

export default function GridTop() {
    const header = `Colorful Celebrations in Every Season`;
    const content = `Throughout the year, Caldeira Estate transforms with the seasons, each bringing its own unique palette of colors and experiences. In the spring, our vineyards are alive with the tender green of new growth, while the olive gardens burst into bloom with delicate white flowers. The summer sun bathes the estate in golden hues, perfect for leisurely days spent exploring our lush landscapes. Autumn brings a vibrant tapestry of red and gold as the grapevines and olive trees prepare for harvest. \nEach season at Caldeira Estate offers a new chapter, inviting guests to immerse themselves in the ever-changing beauty of our surroundings.`;
    // const [header, setHeader] = useState<string>('Colorful Celebrations in Every Season');
    // const [content, setContent] = useState<string>(`Throughout the year, Caldeira Estate transforms with the seasons, each bringing its own unique palette of colors and experiences. In the spring, our vineyards are alive with the tender green of new growth, while the olive gardens burst into bloom with delicate white flowers. The summer sun bathes the estate in golden hues, perfect for leisurely days spent exploring our lush landscapes. Autumn brings a vibrant tapestry of red and gold as the grapevines and olive trees prepare for harvest. \nEach season at Caldeira Estate offers a new chapter, inviting guests to immerse themselves in the ever-changing beauty of our surroundings.`);
    return (
        <section className="flex flex-col items-center my-20">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div className="flex flex-col items-center gap-5">
                <p className="lg:text-[96px] text-center md:text-7xl sm:text-6xl text-5xl text-[#737E41] font-extralight" style={{ fontFamily: "'Boska', serif"}} >{header}</p>
                <p className="text-base w-[70%] text-center font-extralight" style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: 'pre-line'}}>{content}</p> 
            </div>
            <Grid />
            <div className="mx-auto flex flex-col gap-14">
                <button className="px-8 lg:px-32 py-2 bg-[#4E562A] rounded-md text-white text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} >Book a Stay and Design Your Experience</button>
                <hr className="border-t-2 border-[#737E41] w-1/12 mx-auto" data-aos="fade-up" data-aos-delay="120"/>
            </div>
        </section>
    );
}