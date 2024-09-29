"use client";

interface ImageDescProps {
    height: number;
    width: number;
    src: string;
    title: string;
    desc: string;
}
import Image from "next/image";

export default function ImageDesc ({ height, width, src, title, desc }: ImageDescProps) {
    return(
        <section className="flex flex-col gap-10">
            <Image 
                height={height}
                width={width}
                src={src}
                alt="img"
            />
            <div>
                <p className="text-2xl font-thin text-[#737E41]" style={{ fontFamily: "'Manrope', sans-serif" }}>{title}</p>
                <p className="w-72 text-base font-extralight">{desc}</p>
            </div>
        </section>
    );
}