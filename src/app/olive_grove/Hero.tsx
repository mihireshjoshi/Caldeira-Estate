"use client";

export default function Hero() {
    const header = `Discover the Essence of\nTradition at Caldeira Estate`;
    const content = `Welcome to the heart of Caldeira Estate, where centuries-old traditions meet contemporary sustainability. \nEmbark on an unforgettable journey through our Olive Grove, meticulously maintained and organically nurtured to produce some of the finest extra virgin olive oil in Livermore Valley. `;
    const button = `Reserve your Experience`;
    return (
        <section>
            <div className="flex flex-col items-center justify-around gap-5 min-h-[480px] w-[90%] mx-auto my-12 rounded-md py-8" style={{ backgroundImage: "url('/images/olive_grove_hero.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="flex flex-col items-center justify-center gap-5">
                    <p className="lg:text-7xl md:text-6xl sm:text-4xl text-5xl font-extralight text-white text-center" style={{ fontFamily: "'Boska', serif", whiteSpace: 'pre-line' }}>{header}</p>
                    <p className="text-base font-extralight text-center lg:w-3/5 md:w-3/5 w-[90%] text-white" style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: "pre-line" }}>{content}</p>
                </div>
                <button className="border-white border py-2 px-12 rounded-md text-white font-extralight text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>{button}</button>
            </div>
        </section>
    )
}