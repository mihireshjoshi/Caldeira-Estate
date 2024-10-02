"use client";

interface ImageDescProps {
    height: number;
    width: number;
    src: string;
    title: string;
    desc: string;
    color: string;
}
import Image from "next/image";

export default function ImageDesc ({ height, width, src, title, desc, color }: ImageDescProps) {
    const textWidth = (width - 20).toString();
    const smallWidth = (width/2).toString();
    

    return(
        <section className={`flex flex-col gap-4 max-w-[96%]`}>
            <Image 
                height={height}
                width={width}
                src={src}
                alt="img"
            />
            <div>
                <p className={`text-2xl font-thin text-[${color}] max-w-[96%]`} style={{ fontFamily: "'Manrope', sans-serif" }}>{title}</p>
                <p className={` text-base font-extralight max-w-[96%]`} style={{ width: `${textWidth}px` }}>{desc}</p>
            </div>
        </section>
    );
}