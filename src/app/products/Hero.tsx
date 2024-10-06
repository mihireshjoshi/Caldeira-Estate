"use client";

export default function Hero() {
    const header = `Our Products`;
    const content = ``;
    return (
        <section>
            <div className="flex flex-col items-center justify-center gap-5 min-h-[400px] w-11/12 mx-auto my-12 rounded-md py-8" style={{ backgroundImage: "url('/images/products_hero_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
                <p className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-extralight text-black" style={{ fontFamily: "'Boska', serif" }}>{header}</p>
                <p className="text-base font-extralight text-center w-3/6 text-white" style={{ fontFamily: "'Manrope', sans-serif" }}>{content}</p>
            </div>
        </section>
    );
}