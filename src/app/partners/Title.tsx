"use client";

// import { useState } from "react";

interface Context{
    title: string;
    content: string;
    src: string;
    color: string;
}

export default function Title({title, content, src, color}: Context) {
    // const [title, setTitle] = useState<string>(`Explore Our\nSignature Wine Tasting Tours`);
    return (
        <section className="min-h-[400px] flex flex-col items-center justify-center gap-5 pt-16" style={{ backgroundImage: `url(${src})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <p className={`lg:text-[92px] md:text-6xl sm:text-5xl text-4xl font-extralight text-[${color}] mx-4 text-center pb-4`} style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{title}</p>
            <p className="lg:w-[56%] md:w-[62%] w-[80%] lg:text-xl md:text-xl text-base font-extralight text-center" style={{ fontFamily: "'Manrope', sans-serif"}}>{content}</p>
        </section>
    );
}