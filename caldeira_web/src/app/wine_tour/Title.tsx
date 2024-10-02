"use client";

// import { useState } from "react";

export default function Title() {
    const title = `Explore Our\nSignature Wine Tasting Tours`;
    // const [title, setTitle] = useState<string>(`Explore Our\nSignature Wine Tasting Tours`);
    return (
        <section className="min-h-[380px] flex items-center justify-center" style={{ backgroundImage: "url('/images/wine_flower_red_a.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
            <p className="lg:text-[92px] md:text-6xl sm:text-5xl text-4xl font-extralight text-[#262717] text-center pb-4 border-b-2 border-[#AC2024]" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{title}</p>
        </section>
    );
}