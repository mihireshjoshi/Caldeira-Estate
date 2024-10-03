"use client";

interface MerchDets{
    name: string;
    desc: string;
    src: string;
    cost: number;
}

import Image from "next/image";

export default function Merch({name, desc, src, cost}: MerchDets) {
    return (
        <section className="flex flex-col my-12 mx-5 lg:w-[44%] md:w-[44%] w-full items-start ">
            <Image 
                height={632}
                width={592}
                src={src}
                alt="img"
                className=""
            />
            <div className="flex flex-row max-w-[592px] w-full justify-between">
                <p className="lg:text-[48px] md:text-[40px] text-[32px] font-extralight text-[#262717]" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{name}</p>
                <p className="lg:text-[48px] md:text-[40px] text-[32px] font-extralight text-[#262717]" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>${cost}</p>
            </div>
            <p className="text-[20px] font-extralight text-[#262717] mb-5" style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: "pre-line" }}>{desc}</p>
            <button className={`px-10 py-3 lg:w-fit md:w-fit w-full rounded-md text-white`} style={{ background: '#262717'}}>Shop Now</button>
            </section>
    );
}