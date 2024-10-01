"use client";

import { useState } from "react";
import Image from "next/image";

export default function TailoredExperience() {
    const [header, setHeader] = useState<string>(`Tailored Experiences`);
    const [subtitle, setSubTitle] = useState<string>(`Your Vision, Our Expertise`);
    const [content, setContent] = useState<string>(`No two gatherings are the same, and at Caldeira Estate, we celebrate this uniqueness. We offer customized packages for private gatherings that are pre-arranged with our Host. Our dedicated team is ready to discuss your specific requirements and tailor an experience that suits your vision.`);
    return (
        <section className="experience flex flex-row flex-wrap">
            <div className="w-full lg:w-[60%] bg-[#FEFDFB] flex flex-col py-16 pl-16 gap-10 justify-around " >
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-14">
                        <p className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-[#E3872C]" style={{ whiteSpace: "pre-line", fontFamily: "'Boska', serif" }}>{header}</p>
                        <p className="text-2xl text-[#E3872C] font-extralight"  style={{ fontFamily: "'Manrope', sans-serif" }}>{subtitle}</p>
                    </div>
                    <p className="text-base w-[78%] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>{content}</p>
                    <hr className="border-t-2 border-[#E3872C] w-[12%] "/>
                </div>
                <div className="">
                    <button className="text-[#E3872C] text-base font-light px-16 py-3 rounded-md border border-[#E3872C]" style={{ fontFamily: "'Manrope', sans-serif" }}>Contact us to get started</button>
                </div>
            </div>
            <div className="w-full lg:w-[38%] flex flex-col justify-around lg:mx-0 md:mx-0 sm:mx-0 mx-5 py-10 gap-4">
                <Image 
                    height={265}
                    width={480}
                    alt="img"
                    src={"/images/tailored_a.png"}
                />
                <Image 
                    height={265}
                    width={480}
                    alt="img"
                    src={"/images/tailored_b.png"}
                />
                <Image 
                    height={265}
                    width={480}
                    alt="img"
                    src={"/images/tailored_c.png"}
                />
            </div>
        </section>
    );
}