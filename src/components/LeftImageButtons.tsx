"use client";

// import { useState } from "react";
import Image from "next/image";

interface Desc{
    button_a: string;
    button_b: string;
    title: string;
    content: string;
    pointer_a_title: string;
    pointer_b_title: string;
    pointer_a: string;
    pointer_b: string;
    color: string;
    src: string;
    bg_src: string;
    to: string;
}

export default function LeftImageButtons({title, content, color, src, bg_src, button_a, button_b, pointer_a, pointer_a_title, pointer_b, pointer_b_title, to}: Desc) {
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
                    <div>
                        <p className={`lg:w-[96%] w-full font-extralight text-base`} style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: "pre-line" }}>{content}</p>
                        <ul className="list-disc lg:w-[96%] text-base font-extralight" style={{fontFamily: "'Manrope', sans-serif"}}>
                            <li className="font-bold">
                                {pointer_a_title}
                                <span className="font-extralight">
                                    {pointer_a}
                                </span>
                            </li>
                            <li className="font-bold">
                                {pointer_b_title}
                                <span className="font-extralight">
                                    {pointer_b}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row gap-4 flex-wrap">
                    <a href={`${to}`} className={`px-10 py-3 lg:w-fit md:w-fit w-full text-center rounded-md border-1`} style={{ color: `${color}`, borderColor: `${color}`, borderWidth: "1px" }}>{button_a}</a>
                    <button className={`px-10 py-3 lg:w-fit md:w-fit w-full rounded-md text-white`} style={{ background: `${color}`}}>{button_b}</button>
                </div>
            </div>
        </section>
    );
}