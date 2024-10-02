"use client";

// import { useState } from "react";

export default function Top() {
    // const [header, setHeader] = useState<string>('Wine Tour');
    // const [content, setContent] = useState<string>(`Welcome to a world of exquisite wines and breathtaking landscapes. At Caldeira Estate, our Wine Tours are more than just tastings—they're journeys into the heart of Livermore Valley's rich wine culture. Join us and uncover the stories behind each bottle, the passion in every vineyard, and the legacy that defines our estate.`);
    const header = 'Wine Tour';
    const content = `Welcome to a world of exquisite wines and breathtaking landscapes. At Caldeira Estate, our Wine Tours are more than just tastings—they're journeys into the heart of Livermore Valley's rich wine culture. Join us and uncover the stories behind each bottle, the passion in every vineyard, and the legacy that defines our estate.`;
    return (
        <section>
            <div className="flex flex-col items-center justify-center gap-5 min-h-[400px] w-[90%] mx-auto rounded-md py-8" style={{ backgroundImage: "url('/images/wine_experience_hero.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
                <p className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-extralight text-white" style={{ fontFamily: "'Boska', serif" }}>{header}</p>
                <p className="text-base font-extralight text-center w-3/6 text-white" style={{ fontFamily: "'Manrope', sans-serif" }}>{content}</p>
            </div>
        </section>
    );
}