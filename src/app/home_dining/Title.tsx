"use client";

// import { useState } from "react";

export default function Title() {
    const title = `Experience the\nPinnacle of Culinary Delight`;
    const content = `Indulge in a unique in-home dining experience designed to elevate your stay with exceptional cuisine tailored to your tastes. Whether you're seeking the personalized touch of a private chef or the vibrant flavors of local delicacies, our offerings promise to satisfy every palate.`;
    // const [title, setTitle] = useState<string>(`Explore Our\nSignature Wine Tasting Tours`);
    return (
        <section className="min-h-[444px] flex flex-col items-center justify-center gap-5" style={{ backgroundImage: "url('/images/home_dining_subTop.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
            <p className="lg:text-[92px] md:text-6xl sm:text-5xl text-4xl font-extralight text-[#E3872C] mx-4 text-center pb-4 border-b-2 border-[#7D7D74]" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{title}</p>
            <p className="lg:w-[60%] md:w-[70%] w-[80%] lg:text-xl md:text-xl text-base font-extralight text-center" style={{ fontFamily: "'Manrope', sans-serif"}}>{content}</p>
        </section>
    );
}