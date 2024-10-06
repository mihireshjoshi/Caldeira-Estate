"use client";

// import { useState } from "react";
import Image from "next/image";

interface Desc{
    title: string;
    subTitle: string;
    content_a: string;
    content_b: string;
    color: string;
    src: string;
    bg_src: string;
}

export default function RightImg({title, content_a, color, src, bg_src, content_b, subTitle}: Desc) {
    return (
        <section className='min-h-[525px] flex flex-row justify-between flex-wrap my-20' style={{backgroundImage: `url('${bg_src}')`, backgroundPosition: "center", backgroundSize: "cover"}}>

            <div className='mx-auto py-4 flex flex-col lg:w-1/2 md:w-1/2 w-[80%] justify-around lg:items-end md:items-end items-center gap-20 '>
                <div className=' flex flex-col lg:items-end md:items-end items-start lg:gap-2 md:gap-10 gap-0 lg:mt-0 sm:gap-2'>
                    <div className="flex flex-col gap-3 lg:items-end md:items-end">
                        <p className={`lg:text-end md:text-end text-start lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-[${color}]`} style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{title}</p>
                        <p className="lg:text-2xl text-xl font-extralight" style={{ fontFamily: "'Manrope', sans-serif", color: `${color}` }}>{subTitle}</p>
                    </div>
                    <hr className={`lg:border-t-2 border-t-1 border-[${color}] my-10 w-1/6`}/>
                    <p className={`lg:text-end md:text-end text-start w-[96%]  font-extralight text-base mb-2`} style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: 'pre-line' }}>{content_a}</p>
                    <p className={`lg:text-end md:text-end text-start w-[96%]  font-extralight text-base`} style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: 'pre-line' }}>{content_b}</p>
                </div>
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