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

export default function RightImage({title, content, color, src, bg_src, button}: Desc) {
    return (
        <section className='min-h-[525px] flex flex-row justify-between flex-wrap my-10' style={{backgroundImage: `url('${bg_src}')`, backgroundPosition: "center", backgroundSize: "cover"}}>

            <div className='mx-auto py-4 flex flex-col w-1/2 justify-around items-end gap-20 '>
                <div className=' flex flex-col items-end gap-12 lg:mt-0 mt-4'>
                    <p className={`text-end lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-[${color}]`} style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{title}</p>
                    <hr className={`lg:border-t-2 border-t-1 border-[${color}] w-1/6`}/>
                    <p className={`text-end lg:w-3/4 w-full font-extralight text-base`} style={{ fontFamily: "'Manrope', sans-serif" }}>{content}</p>
                </div>
                <button className={`px-10 py-3 w-fit rounded-md text-white`} style={{ background: `${color}`}}>{button}</button>
            </div>
            <div className='lg:mr-24 mx-auto'>
                <Image 
                    height={565}
                    width={460}
                    alt='img'
                    src={src}
                />
            </div>
        </section>
    );
}