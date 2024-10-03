"use client";

export default function Title() {
    const title = `Official Caldeira Merchandise`;
    const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut rutrum lorem. Maecenas ultricies dolor tellus, nec porta lacus rutrum vestibulum. Nullam nec dui sit amet ligula lacinia faucibus et ac tortor.`;
    return (
        <section className="min-h-[432px] flex flex-col items-center justify-center gap-2" style={{ backgroundImage: "url('/images/merch_top_bg.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
            <p className="lg:text-[92px] md:text-6xl sm:text-5xl text-4xl font-extralight text-[#262717] mx-4 text-center pb-4" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{title}</p>
            <p className="lg:w-[64%] md:w-[70%] w-[80%] lg:text-xl md:text-xl text-base font-extralight text-center" style={{ fontFamily: "'Manrope', sans-serif"}}>{content}</p>
        </section>
    );
}