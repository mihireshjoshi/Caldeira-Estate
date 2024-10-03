"use client";

// import { useState } from "react";
import Image from "next/image";

interface Desc{
    button_a: string;
    button_b: string;
    title: string;
    content: string;
    color: string;
    src: string;
    bg_src: string;
    to: string;
}

export default function RightImageButtons({title, content, color, src, bg_src, button_a, button_b, to}: Desc) {
    return (
        <section className='min-h-[525px] flex flex-row justify-between flex-wrap my-10' style={{backgroundImage: `url('${bg_src}')`, backgroundPosition: "center", backgroundSize: "cover"}}>

            <div className='mx-auto py-4 flex flex-col lg:w-1/2 md:w-1/2 w-[80%] justify-around lg:items-end md:items-end items-center gap-20 '>
                <div className=' flex flex-col lg:items-end md:items-end items-center gap-8 lg:mt-0 mt-4'>
                    <p className={`lg:text-end md:text-end text-center lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-[${color}]`} style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{title}</p>
                    <hr className={`lg:border-t-2 border-t-1 border-[${color}] w-1/6`}/>
                    <p className={`text-end w-[96%]  font-extralight text-base`} style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: 'pre-line' }}>{content}</p>
                </div>
                <div className="flex flex-row gap-4 flex-wrap">
                    <a href={`${to}`} className={`px-10 py-3 lg:w-fit md:w-fit w-full text-center rounded-md border-1`} style={{ color: `${color}`, borderColor: `${color}`, borderWidth: "1px" }}>{button_a}</a>
                    <button className={`px-10 py-3 lg:w-fit md:w-fit w-full rounded-md text-white`} style={{ background: `${color}`}}>{button_b}</button>
                </div>            </div>
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