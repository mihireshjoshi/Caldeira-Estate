"use client";

// import { useState } from "react";
import Image from "next/image";

interface Desc{
    button: string;
    title: string;
    content: string;
    color: string;
    src: string;
    bg_src: string;
}

export default function LeftImage({title, content, color, src, bg_src, button}: Desc) {
    return (
        <section className='min-h-[525px] flex flex-row justify-between flex-wrap my-10' style={{backgroundImage: `url('${bg_src}')`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className='lg:ml-24 mx-auto'>
                <Image 
                    height={565}
                    width={460}
                    alt='img'
                    src={src}
                />
            </div>

            <div className='mx-auto my-4 flex flex-col lg:w-1/2 md:w-1/2 w-[80%] justify-around gap-2'>
                <div className=' flex flex-col gap-8 lg:mt-0 mt-4'>
                    <p className={`lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-[${color}]`} style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{title}</p>
                    <hr className={`lg:border-t-2 border-t-1 border-[${color}] w-1/6`}/>
                    <p className={`lg:w-[96%] w-full font-extralight text-base`} style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: "pre-line" }}>{content}</p>
                </div>
                <button className={`px-10 py-3 w-fit rounded-md text-white`} style={{ background: `${color}`}}>{button}</button>
            </div>
        </section>
    );
}