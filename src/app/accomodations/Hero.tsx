"use client";

export default function Hero() {
    const header = `Stay. Savor. Sip.`;
    const content = `Located just one hour from San Francisco, Caldeira House is your ideal destination where luxury and tranquility converge. Whether you're planning a family reunion, a romantic getaway, or a corporate retreat, our dedicated team is committed to making your stay exceptional.`;
    const button = `3D Tour of our Main House and Guest House`;
    return (
        <section>
            <div className="flex flex-col items-center justify-around gap-2 min-h-[400px] w-[90%] mx-auto my-12 rounded-md py-8" style={{ backgroundImage: "url('/images/accomodations_hero_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="flex flex-col items-center justify-center gap-5">
                    <p className="lg:text-7xl md:text-6xl sm:text-4xl text-5xl font-extralight text-white text-center" style={{ fontFamily: "'Boska', serif", whiteSpace: 'pre-line' }}>{header}</p>
                    <p className="text-base font-extralight text-center lg:w-[55%] md:w-3/5 w-[90%] text-white" style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: "pre-line" }}>{content}</p>
                </div>
                <button className="border-white border mx-4 py-2 px-12 rounded-md text-white font-extralight text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>{button}</button>
            </div>
        </section>
    )
}