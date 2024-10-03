"use client";

export default function Title() {
    const title = `Concierge Services`;
    const content = `At Caldeira Estate, we believe that luxury is not just about where you stay—it's about how you feel. Our exclusive Concierge Services are tailored to immerse you in the tranquil beauty of Livermore Valley, bringing the finest local experiences directly to your doorstep. Whether you’re here for relaxation, celebration, or a corporate retreat, we are dedicated to crafting an unforgettable journey for you.`;
    return (
        <section className="min-h-[355px] flex flex-col items-center justify-center gap-2" style={{ backgroundImage: "url('/images/concierge_bg.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
            <p className="lg:text-[92px] md:text-6xl sm:text-5xl text-4xl font-extralight text-[#262717] mx-4 text-center pb-4" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{title}</p>
            <p className="lg:w-[64%] md:w-[70%] w-[80%] lg:text-xl md:text-xl text-base font-extralight text-center" style={{ fontFamily: "'Manrope', sans-serif"}}>{content}</p>
        </section>
    );
}